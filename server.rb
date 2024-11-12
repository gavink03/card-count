require 'stripe'
require 'sinatra'

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
