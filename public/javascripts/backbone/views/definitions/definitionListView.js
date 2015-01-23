var RhymeTime = RhymeTime ||
  {
    Models: {},
    Collections: {},
    Views: {},
    Router: null
  };

RhymeTime.Views.DefinitionListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'all', this.render)
  },
  tagName: 'ul',
  render: function() {
    var $that = this;
    this.$el.empty();
    _.each(this.collection.models, function(definition) {
      var $definitionView = new RhymeTime.Views.DefinitionView({model: definition});
      $that.$el.append($definitionView.render().el);
    });
    return this;
  }
});
