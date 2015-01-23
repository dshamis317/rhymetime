require 'bundler'
Bundler.require

api_key = ENV.fetch("WORDS_API")

get '/' do
  File.read('index.html')
end

get '/:word' do
  word = params[:word]
  data = HTTParty.get(
    "https://wordsapiv1.p.mashape.com/words/#{word}",
    :headers => { "X-Mashape-Key" => "#{api_key}"}
    )
  data.to_json
end
