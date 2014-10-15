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
          $(this).prepend("<li class='disk-" + stack[i] + "'></li>")
        } else {
          $(this).prepend("<li class='empty'></li>")
        }
      };
    });
  };

  View.prototype.installClickHandle = function () {
    var game = this.game;
    var that = this;

    $('.hanoi').on('click', '.stack', function (event) {
      if($('.from').length === 0 || $(this).data('id') === $('.from').data('id')) {
        $(this).toggleClass("from");
      }
      else {
        var fromStackIdx = $('.from').data('id')
        var toStackIdx = $(this).data('id')

        if (game.move(fromStackIdx, toStackIdx)) {
          $('.from').toggleClass('from');
        } else {
          alert("You can't do that fool!")
        }
        that.render();
        if (game.isWon()) {
          alert("You're a genius!")
        }
      }
    });
  };



}());