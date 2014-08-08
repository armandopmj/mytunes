// SongQueue.js - Defines a backbone model class for the song queue.
// Q: Are we defining a model or extending a collection
var SongQueue = Songs.extend({

  initialize: function(){

    this.listenTo(this, 'add', function(model){
      if( this.length === 1 ) this.playFirst();
    }, this);

  },

  playFirst: function() {
    console.log( this );
    console.log( this.models[0] );
    this.trigger('playFirst', this.models[0]);
  }

});
