require 'bundler'
Bundler.require

require_relative 'models/words_api'

get '/' do
  File.read('index.html')
end

get '/:word' do
  word = params[:word]
  data = Words_API.word_lookup(word)
  data.to_json
end

get '/rhymes/:word' do
  word = params[:word]
  data = Words_API.rhyme_lookup(word)
  data.to_json
end
