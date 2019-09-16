'use strict';
/**
 * jQuery plugin paroller.js v1.4.6
 * https://github.com/tgomilar/paroller.js
 * preview: https://tgomilar.github.io/paroller/
 **/

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define('parollerjs', ['jquery'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  var working = false;

  var scrollAction = function scrollAction() {
    working = false;
  };

  var setDirection = {
    bgVertical: function bgVertical(elem, bgOffset) {
      return elem.css({
        'background-position': 'center ' + -bgOffset + 'px'
      });
    },
    bgHorizontal: function bgHorizontal(elem, bgOffset) {
      return elem.css({
        'background-position': -bgOffset + 'px' + ' center'
      });
    },
    vertical: function vertical(elem, elemOffset, transition, oldTransform) {
      oldTransform === 'none' ? oldTransform = '' : true;
      return elem.css({
        '-webkit-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
        '-moz-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
        'transform': 'translate(0,' + elemOffset + 'px)' + oldTransform,
        'transition': transition,
        'will-change': 'transform'
      });
    },
    horizontal: function horizontal(elem, elemOffset, transition, oldTransform) {
      oldTransform === 'none' ? oldTransform = '' : true;
      return elem.css({
        '-webkit-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
        '-moz-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
        'transform': 'translate(' + elemOffset + 'px, 0)' + oldTransform,
        'transition': transition,
        'will-change': 'transform'
      });
    }
  };
  var setMovement = {
    factor: function factor(elem, width, options) {
      var dataFactor = elem.data('paroller-factor');
      var factor = dataFactor ? dataFactor : options.factor;

      if (width < 576) {
        var dataFactorXs = elem.data('paroller-factor-xs');
        var factorXs = dataFactorXs ? dataFactorXs : options.factorXs;
        return factorXs ? factorXs : factor;
      } else if (width <= 768) {
        var dataFactorSm = elem.data('paroller-factor-sm');
        var factorSm = dataFactorSm ? dataFactorSm : options.factorSm;
        return factorSm ? factorSm : factor;
      } else if (width <= 1024) {
        var dataFactorMd = elem.data('paroller-factor-md');
        var factorMd = dataFactorMd ? dataFactorMd : options.factorMd;
        return factorMd ? factorMd : factor;
      } else if (width <= 1200) {
        var dataFactorLg = elem.data('paroller-factor-lg');
        var factorLg = dataFactorLg ? dataFactorLg : options.factorLg;
        return factorLg ? factorLg : factor;
      } else if (width <= 1920) {
        var dataFactorXl = elem.data('paroller-factor-xl');
        var factorXl = dataFactorXl ? dataFactorXl : options.factorXl;
        return factorXl ? factorXl : factor;
      } else {
        return factor;
      }
    },
    bgOffset: function bgOffset(offset, factor) {
      return Math.round(offset * factor);
    },
    transform: function transform(offset, factor, windowHeight, height) {
      return Math.round((offset - windowHeight / 2 + height) * factor);
    }
  };
  var clearPositions = {
    background: function background(elem) {
      return elem.css({
        'background-position': 'unset'
      });
    },
    foreground: function foreground(elem) {
      return elem.css({
        'transform': 'unset',
        'transition': 'unset'
      });
    }
  };

  $.fn.paroller = function (options) {
    var windowHeight = $(window).height();
    var documentHeight = $(document).height(); // default options

    options = $.extend({
      factor: 0,
      // - to +
      factorXs: 0,
      // - to +
      factorSm: 0,
      // - to +
      factorMd: 0,
      // - to +
      factorLg: 0,
      // - to +
      factorXl: 0,
      // - to +
      transition: 'transform .1s ease',
      // CSS transition
      type: 'background',
      // foreground
      direction: 'vertical' // horizontal

    }, options);
    return this.each(function () {
      var $this = $(this);
      var height = $this.outerHeight();
      var width = $(window).width();
      var elemTop = $this.offset().top;
      var scrollOffset = 0;

      var withScrollOffset = function withScrollOffset(scrollTop, transform) {
        if (!scrollTop) {
          scrollOffset = transform;
        } // console.log(`offset ${scrollOffset} => ${transform - scrollOffset}`)


        return transform - scrollOffset;
      };

      var dataType = $this.data('paroller-type');
      var dataDirection = $this.data('paroller-direction');
      var dataTransition = $this.data('paroller-transition');
      var oldTransform = $this.css('transform');
      var transition = dataTransition ? dataTransition : options.transition;
      var type = dataType ? dataType : options.type;
      var direction = dataDirection ? dataDirection : options.direction;
      var factor = 0;
      var bgOffset = setMovement.bgOffset(elemTop, factor);
      var transform = setMovement.transform(elemTop, factor, windowHeight, height);

      if (type === 'background') {
        if (direction === 'vertical') {
          setDirection.bgVertical($this, bgOffset);
        } else if (direction === 'horizontal') {
          setDirection.bgHorizontal($this, bgOffset);
        }
      } else if (type === 'foreground') {
        if (direction === 'vertical') {
          setDirection.vertical($this, transform, transition, oldTransform);
        } else if (direction === 'horizontal') {
          setDirection.horizontal($this, transform, transition, oldTransform);
        }
      }

      $(window).on('resize', function () {
        var scrolling = $(this).scrollTop();
        width = $(window).width();
        elemTop = $this.offset().top;
        height = $this.outerHeight();
        factor = setMovement.factor($this, width, options);
        bgOffset = Math.round(elemTop * factor);
        var transform = withScrollOffset($(document).scrollTop(), Math.round((elemTop - windowHeight / 2 + height) * factor));

        if (!working) {
          window.requestAnimationFrame(scrollAction);
          working = true;
        }

        if (type === 'background') {
          clearPositions.background($this);

          if (direction === 'vertical') {
            setDirection.bgVertical($this, bgOffset);
          } else if (direction === 'horizontal') {
            setDirection.bgHorizontal($this, bgOffset);
          }
        } else if (type === 'foreground' && scrolling <= documentHeight) {
          clearPositions.foreground($this);

          if (direction === 'vertical') {
            setDirection.vertical($this, transform, transition);
          } else if (direction === 'horizontal') {
            setDirection.horizontal($this, transform, transition);
          }
        }
      });
      $(window).on('load scroll', function () {
        var scrolling = $(this).scrollTop();
        var scrollTop = $(document).scrollTop();
        factor = setMovement.factor($this, width, options); // let transform = withScrollOffset(scrollTop, Math.round(((elemTop - (windowHeight / 2) + height) - scrolling) * factor));

        var transform = withScrollOffset(80, Math.round((elemTop - windowHeight / 2 + height - scrolling) * factor)); // console.log(transform)
        // console.log(elemTop)

        if (!working) {
          window.requestAnimationFrame(scrollAction);
          working = true;
        }

        if (type === 'background') {
          if (direction === 'vertical') {
            setDirection.bgVertical($this, bgOffset);
          } else if (direction === 'horizontal') {
            setDirection.bgHorizontal($this, bgOffset);
          }
        } else if (type === 'foreground' && scrolling <= documentHeight) {
          if (direction === 'vertical') {
            setDirection.vertical($this, transform, transition, oldTransform);
          } else if (direction === 'horizontal') {
            setDirection.horizontal($this, transform, transition, oldTransform);
          }
        }
      });
    });
  };
});