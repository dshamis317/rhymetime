var RhymeTime = RhymeTime ||
  {
    Models: {},
    Collections: {},
    Views: {},
    Router: null
  };

RhymeTime.Collections.RhymeCollection = Backbone.Collection.extend({
  model: RhymeTime.Models.Rhyme
});
