// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function( song ){
    if( !song ){
      // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
      // see http://api.jquery.com/detach/
      this.$el.children().detach();
      this.$el.html('<th>Playlist</th>');
    }
    else {
      this.$el.append(
        new SongQueueEntryView( song ).render());
    }
  }

});
