// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  // attach: function( song ){
  //   console.log( song );
  //   this.render(song);
//    this.$el.html(
//      new SongQueueEntryView( song ).render()
//    );
  // },

  render: function( song ){
    if( !song ){
      this.$el.children().detach();
      this.$el.html('<th> Playlist </th>');
    }
    else {
      this.$el.children().detach();
      this.$el.html().append(
        new SongQueueEntryView( song ).render());
    }
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/

    //     .append(
    //     this.collection.map(function(song){
    //     new SongQueueEntryView( song ).render()
    //     })
    // );
  }

});
