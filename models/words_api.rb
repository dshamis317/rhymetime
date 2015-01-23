class Words_API

  def self.api_key
    return ENV.fetch("WORDS_API")
  end

  def self.word_lookup(word)
    return HTTParty.get(
      "https://wordsapiv1.p.mashape.com/words/#{word}",
      :headers => { "X-Mashape-Key" => self.api_key}
      )
  end

  def self.rhyme_lookup(word)
    return HTTParty.get(
      "https://wordsapiv1.p.mashape.com/words/#{word}/rhymes",
      :headers => { "X-Mashape-Key" => self.api_key}
      )
  end

end
