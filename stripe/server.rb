require 'stripe'
require 'sinatra'

# This is your test secret API key. Make sure to use a live key in production.
Stripe.api_key = 'sk_test_51OzJi3P4m0D4zmKZ1bL6CIphoxuOGHQPbFso9BdRutTS858KCjBK5wyDdIkpEDcedHLaM9TGc3NTmEPJ2GRv2yJG00A5CoSLnv'

set :static, true
set :port, 8000

YOUR_DOMAIN = 'https://card-count.com/'

post '/create-checkout-session' do
  lookup_key = 'premium-8da4e47' # Use your actual lookup key here

  prices = Stripe::Price.list(
    lookup_keys: [lookup_key],
    expand: ['data.product']
  )

  # Check if any prices were returned
  if prices.data.empty?
    halt 400,
        { 'Content-Type' => 'application/json' },
        { 'error': { message: "No price found for lookup_key #{lookup_key}" } }.to_json
  end

  begin
    session = Stripe::Checkout::Session.create({
      mode: 'subscription',
      line_items: [{
        quantity: 1,
        price: prices.data[0].id
      }],
      success_url: YOUR_DOMAIN + '/stripe/public/success.html?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: YOUR_DOMAIN + '/stripe/public/cancel.html',
    })
  rescue StandardError => e
    halt 400,
        { 'Content-Type' => 'application/json' },
        { 'error': { message: e.message } }.to_json # Updated to use e.message
  end

  redirect session.url, 303
end

post '/create-portal-session' do
  content_type 'application/json'
  checkout_session_id = params['session_id']
  checkout_session = Stripe::Checkout::Session.retrieve(checkout_session_id)

  return_url = 'https://card-count.com/stripe/public/success.html' # Ensure this is a valid URL

  session = Stripe::BillingPortal::Session.create({
    customer: checkout_session.customer,
    return_url: return_url
  })
  
  redirect session.url, 303
end

post '/webhook' do
  webhook_secret = 'whsec_Jy1lOb4eZJy1xQv7ovrcfjwF1chWs0hW'
  payload = request.body.read

  if !webhook_secret.empty?
    sig_header = request.env['HTTP_STRIPE_SIGNATURE']
    event = nil

    begin
      event = Stripe::Webhook.construct_event(
        payload, sig_header, webhook_secret
      )
    rescue JSON::ParserError => e
      status 400
      return
    rescue Stripe::SignatureVerificationError => e
      puts '⚠️  Webhook signature verification failed.'
      status 400
      return
    end
  else
    data = JSON.parse(payload, symbolize_names: true)
    event = Stripe::Event.construct_from(data)
  end

  event_type = event['type']
  data = event['data']
  data_object = data['object']

  # Handle different webhook events
  case event_type
  when 'customer.subscription.deleted'
    puts "Subscription canceled: #{event.id}"
  when 'customer.subscription.updated'
    puts "Subscription updated: #{event.id}"
  when 'customer.subscription.created'
    puts "Subscription created: #{event.id}"
  when 'customer.subscription.trial_will_end'
    puts "Subscription trial will end: #{event.id}"
  when 'entitlements.active_entitlement_summary.updated'
    puts "Active entitlement summary updated: #{event.id}"
  end

  content_type 'application/json'
  { status: 'success' }.to_json
end
