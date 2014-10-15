(function () {
  if (typeof Hanoi === undefined ) {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function (game, $el) {
    this.game = game;
    this.board = $el;
  };

  View.prototype.render = function () {
    $('.stack').each(function () {
      this.empty();
    });

    var game = this.game
     $('.stack').each(function (i) {
      var stack = game.towers[i];
      $(this).append()
    };
  };



}(););