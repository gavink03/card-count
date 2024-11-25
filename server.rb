require 'stripe'
require 'sinatra'
require 'net/http'
require 'json'

# This is your test secret API key.
Stripe.api_key = 'sk_test_51OzJi3P4m0D4zmKZ1bL6CIphoxuOGHQPbFso9BdRutTS858KCjBK5wyDdIkpEDcedHLaM9TGc3NTmEPJ2GRv2yJG00A5CoSLnv'

set :static, true
set :port, 4242

YOUR_DOMAIN = 'https://card-count.com'

get '/stripe/public/checkout.html' do
  send_file 'stripe/public/checkout.html'
end

post '/create-checkout-session' do
  content_type 'application/json'

  session = Stripe::Checkout::Session.create({
    line_items: [{
        price: 'price_1QEaffP4m0D4zmKZKEe4kcKP',
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: YOUR_DOMAIN + '/index.html',
      cancel_url: YOUR_DOMAIN + '/index.html',
      automatic_tax: {enabled: true},
  })
  redirect session.url, 303
  
end

post '/webhook' do
  payload = request.body.read
  sig_header = request.env['HTTP_STRIPE_SIGNATURE']
  webhook_secret = 'whsec_Ctd4wU2AoxOR9K6jNs0XJOIpcB0VPaA7' # Replace with your webhook secret

  begin
    event = Stripe::Webhook.construct_event(payload, sig_header, webhook_secret)

    if event['type'] == 'checkout.session.completed'
      session = event['data']['object']

      # Update the database to mark the user as paid
      user_id = session.client_reference_id # Or retrieve from metadata
      mark_user_as_paid(user_id)
    end

    status 200
  rescue JSON::ParserError, Stripe::SignatureVerificationError => e
    status 400
    { error: e.message }.to_json
  end
end

# Helper function to mark a user as paid
def mark_user_as_paid(user_id)
  # Replace this with your database code
  puts "User #{user_id} marked as paid."
  # Example: DB.execute("UPDATE users SET paid = true WHERE id = ?", user_id)
end
