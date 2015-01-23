var RhymeSearch = RhymeSearch ||
  {
    Models: {},
    Collections: {},
    Views: {},
    Router: null
  };

function stretchHeader() {
  $('.logo').bigtext();
}

function getQueryData() {
  $('.form').on('submit', function(e) {
    e.preventDefault();
    var $searchInput = $('.search-input');
    var $query = $searchInput.val().toLowerCase();
    $searchInput.val('');
    var $searchDiv = $('.search-term');
    $searchDiv.html($query);
    getWordData($query);
  })
}

function getWordData(word) {
  $.ajax({
    url: '/' + word,
    method: 'get',
    dataType: 'json',
    success: function(data) {
      if (typeof data === 'string') {
        renderErrorMsg();
      } else {
        //renderSyllables(data.syllables);
        console.log(data);
        debugger;
      }
    }
  })
}

function renderErrorMsg() {
  console.log('NO DATA HERE');
}

function renderSyllables(array) {
  console.log(array);
}

RhymeSearch.initialize = function() {
  stretchHeader();
  getQueryData();
}

$(function() {
  RhymeSearch.initialize();
});
