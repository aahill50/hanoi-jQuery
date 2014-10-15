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
      $(this).empty();
    });

    var game = this.game
    $('.stack').each(function (i) {
      var stack = game.towers[i];
      for (var i = 0; i < 3; i++) {
        if (stack[i]) {
          $(this).append("<li class='disk-" + stack[i] + "'></li>")
        } else {
          $(this).append("<li class='empty'></li>")
        }
      };
    });
  };

  View.prototype.installClickHandle = function () {
    $('.hanoi').on('click', '.stack', function (event) {
      if($('.from').length === 0) {
        $(this).addClass("from");
      }
      else {
        var fromStackIdx = $('.from').data('id')
        var toStackIdx = $(this).data('id')
        console.log(fromStackIdx)
        console.log(toStackIdx)

      }
    });
  };



}());