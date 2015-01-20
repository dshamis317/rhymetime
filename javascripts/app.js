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

RhymeSearch.initialize = function() {
  stretchHeader();

}

$(function() {
  RhymeSearch.initialize();
});
