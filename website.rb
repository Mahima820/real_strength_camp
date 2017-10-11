require "sinatra"


get '/' do
  @title = 'Strength Camp!'
  erb :home_page
end



post '/sign_up' do
  params.to_s
end

get '/home_page' do
  erb :membership
end
