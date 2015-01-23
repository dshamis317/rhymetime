var RhymeTime = RhymeTime ||
  {
    Models: {},
    Collections: {},
    Views: {},
    Router: null
  };

RhymeTime.Collections.DefinitionCollection = Backbone.Collection.extend({
  model: RhymeTime.Models.Definition
});
