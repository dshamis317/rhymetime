var RhymeTime = RhymeTime ||
  {
    Models: {},
    Collections: {},
    Views: {},
    Router: null
  };

RhymeTime.Views.RhymeListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'all', this.render)
  },
  tagName: 'ul',
  render: function() {
    var $that = this;
    this.$el.empty();
    _.each(this.collection.models, function(rhyme) {
      var $rhymeView = new RhymeTime.Views.RhymeView({model: rhyme});
      $that.$el.append($rhymeView.render().el);
    });
    return this;
  }
});
