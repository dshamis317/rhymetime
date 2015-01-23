var RhymeTime = RhymeTime ||
{
  Models: {},
  Collections: {},
  Views: {},
  Router: null
};

RhymeTime.Views.DefinitionView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'all', this.render);
  },
  tagName: 'li',
  template: _.template($('#definition-template').html()),
  render: function() {
    var $that = this;
    var $renderedHtml = this.template({definition: this.model.toJSON()});
    this.$el.html($renderedHtml);
    return this;
  }
});
