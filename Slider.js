var Slider = (function() {

  function _Slider(sliderSelector) {
    this.$slider = $(sliderSelector);
    this.$slides = this.$slider.find('.slide');
    this.$group = this.$slider.find('.slide-group');
    this.$prevBtn = this.$slider.find('.slide-btn-prev');
    this.$nextBtn = this.$slider.find('.slide-btn-next');
    this.currentIndex = 0;
    this.timer;

    this.createBullets();
    this.bindPrev();
    this.bindNext();
    this.autoMove();
  }

  _Slider.prototype.move = function(newIndex) {

    var _this = this;

    this.autoMove();

    var slideLeft, animateLeft;

    if (this.$group.is(':animated') || newIndex == this.currentIndex) return;

    this.$slider.find('.slide-bullet').eq(_this.currentIndex).removeClass('active');
    this.$slider.find('.slide-bullet').eq(newIndex).addClass('active');

    if (newIndex > this.currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    this.$slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });

    this.$group.animate({
      left: animateLeft
    }, function() {
      _this.$slides.eq(_this.currentIndex).css({
        display: 'none'
      });
      _this.$slides.eq(newIndex).css({
        left: 0
      });
      _this.$group.css({
        left: 0
      });
      _this.currentIndex = newIndex;
    });
  }

  _Slider.prototype.autoMove = function() {
    clearTimeout(this.timer);
    var _this = this;
    this.timer = setTimeout(function() {
      if (_this.currentIndex < _this.$slides.length - 1) {
        _this.move(_this.currentIndex + 1);
      } else {
        _this.move(0);
      }
    }, 3000);
  }

  _Slider.prototype.createBullets = function() {
    var _this = this;
    $.each(_this.$slides, function(index) {
      var $btn = $('<button class="slide-bullet">&bull;</button>');
      $btn.appendTo(_this.$slider.find('.slide-bullets'));
      $btn.on('click', function() {
        _this.move(index);
      });
      if (index === _this.currentIndex) {
        $btn.addClass('active');
      }
    });
  }

  _Slider.prototype.bindPrev = function() {
    var _this = this;
    this.$prevBtn.on('click', function() {
      if (_this.currentIndex === 0) {
        _this.move(_this.$slides.length - 1);
      } else {
        _this.move(_this.currentIndex - 1);
      }
    });
  }

  _Slider.prototype.bindNext = function() {
    var _this = this;
    this.$nextBtn.on('click', function() {
      if (_this.currentIndex === _this.$slides.length - 1) {
        _this.move(0);
      } else {
        _this.move(_this.currentIndex + 1);
      }
    });
  }

  return {
    init: function(slider) {
      new _Slider(slider);
    }
  }
  
})();