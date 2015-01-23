require 'bundler'
Bundler.require

get '/' do
  File.read('index.html')
end
