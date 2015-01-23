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

function getQuery() {
  $('.form').on('submit', function(e) {
    e.preventDefault();
    var $searchInput = $('.search-input');
    var $query = $searchInput.val().toLowerCase();
    $searchInput.val('');
    var $searchDiv = $('.search-term');
    $searchDiv.html($query);
  })
}

RhymeSearch.initialize = function() {
  stretchHeader();
  getQuery();
}

$(function() {
  RhymeSearch.initialize();
});
