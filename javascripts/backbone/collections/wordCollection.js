var RhymeSearch = RhymeSearch ||
  {
    Models: {},
    Collections: {},
    Views: {},
    Router: null
  };

RhymeSearch.Collections.WordCollection = Backbone.Collection.extend({
  model: RhymeSearch.Models.Task
});
