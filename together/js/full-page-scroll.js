/**
 * Full page
 */
(function () {
	'use strict';
	
	/**
	 * Full scroll main function
	 */
	var fullScroll = function (params) {
		/**
		 * Main div
		 * @type {Object}
		 */
		var main = document.getElementById('main');
		
		/**
		 * Sections div
		 * @type {Array}
		 */
		var sections = main.getElementsByTagName('section');
		
		/**
		 * Full page scroll configurations
		 * @type {Object}
		 */
		var defaults = {
			container : main,
			sections : sections,
			animateTime : params.animateTime || 0.7,
			animateFunction : params.animateFunction || 'ease',
			maxPosition: sections.length - 1,
			currentPosition: 0,
			displayDots: typeof params.displayDots != 'undefined' ? params.displayDots : true,
			dotsPosition: params.dotsPosition || 'left'
		};

		this.defaults = defaults;
	
		
		/**
		 * Init build
		 */
		this.init();
	};

	/**
	 * Init plugin
	 */
	fullScroll.prototype.init = function () {
		this.buildSections()
			.buildDots()
			.buildPublicFunctions()
			.addEvents();

		var anchor = location.hash.replace('#', '').split('/')[0];
		location.hash = 0;
		this.changeCurrentPosition(anchor);
	};

	/**
	 * Build sections
	 * @return {Object} this(fullScroll)
	 */
	fullScroll.prototype.buildSections = function () {
		var sections = this.defaults.sections;
		for (var i = 0; i < sections.length; i++) {
			sections[i].setAttribute('data-index', i);
		}
		return this;
	};

	/**
	 * Build dots navigation
	 * @return {Object} this (fullScroll)
	 */
	fullScroll.prototype.buildDots = function () {		
		this.ul = document.createElement('ul');
		this.ul.classList.add('dots');
		this.ul.classList.add(this.defaults.dotsPosition == 'right' ? 'dots-right' : 'dots-left');
		var _self = this;
		var sections = this.defaults.sections;		

		for (var i = 0; i < sections.length; i++) {
			var li = document.createElement('li');
			var a = document.createElement('a');
		
			a.setAttribute('href', '#' + i);			
			li.appendChild(a);
			_self.ul.appendChild(li);
		}

		this.ul.childNodes[0].firstChild.classList.add('active');

		if (this.defaults.displayDots) {
			document.body.appendChild(this.ul);
		}

		return this;
	};

	/**
	 * Add Events
	 * @return {Object} this(fullScroll)
	 */
	fullScroll.prototype.addEvents = function () {
		
		if (document.addEventListener) {
			document.addEventListener('mousewheel', this.mouseWheelAndKey, false);
			document.addEventListener('wheel', this.mouseWheelAndKey, false);
			document.addEventListener('keyup', this.mouseWheelAndKey, false);
			document.addEventListener('touchstart', this.touchStart, false);
			document.addEventListener('touchend', this.touchEnd, false);
			window.addEventListener("hashchange", this.hashChange, false);
		
			/**
			 * Enable scroll if decive don't have touch support
			 */
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				if(!('ontouchstart' in window)){
					document.body.style = "overflow: scroll;";
					document.documentElement.style = "overflow: scroll;";
				
				}
			}			

		
		} else {
			document.attachEvent('onmousewheel', this.mouseWheelAndKey, false);
			document.attachEvent('onkeyup', this.mouseWheelAndKey, false);
		}

		// var _thisCurrent = this.defaults.currentPosition;
		// console.log(_thisCurrent)

		return this;
	};	


	/**
	 * Build public functions
	 * @return {[type]} [description]
	 */
	fullScroll.prototype.buildPublicFunctions = function () {
		var mTouchStart = 0;
		var mTouchEnd = 0;
		var _self = this;

		this.mouseWheelAndKey = function (event) {
			if (event.deltaY > 0 || event.keyCode == 40) {	
				_self.defaults.currentPosition ++;
				_self.changeCurrentPosition(_self.defaults.currentPosition);				
			} else if (event.deltaY < 0 || event.keyCode == 38) {
				_self.defaults.currentPosition --;
				_self.changeCurrentPosition(_self.defaults.currentPosition);	
			}
			_self.removeEvents();
		};

		this.touchStart = function (event) {
			mTouchStart = parseInt(event.changedTouches[0].clientY);
			mTouchEnd = 0;
		};

		this.touchEnd = function (event) {
			mTouchEnd = parseInt(event.changedTouches[0].clientY);
			if (mTouchEnd - mTouchStart > 100 || mTouchStart - mTouchEnd > 100) {
				if (mTouchEnd > mTouchStart) {
					_self.defaults.currentPosition --;
				} else {
					_self.defaults.currentPosition ++;					
				}
				_self.changeCurrentPosition(_self.defaults.currentPosition);
			}			
		};

		this.hashChange = function (event) {
			if (location) {
				var anchor = location.hash.replace('#', '').split('/')[0];
				if (anchor !== "") {
					if (anchor < 0) {
						_self.changeCurrentPosition(0);
					} else if (anchor > _self.defaults.maxPosition) {
						_self.changeCurrentPosition(_self.defaults.maxPosition);
					} else {
						_self.defaults.currentPosition = anchor;
						_self.animateScroll();
					}					
				}				
			}
		};

		this.removeEvents = function () {
			if (document.addEventListener) {
			document.removeEventListener('mousewheel', this.mouseWheelAndKey, false);
			document.removeEventListener('wheel', this.mouseWheelAndKey, false);
			document.removeEventListener('keyup', this.mouseWheelAndKey, false);
			document.removeEventListener('touchstart', this.touchStart, false);
			document.removeEventListener('touchend', this.touchEnd, false);

			} else {
				document.detachEvent('onmousewheel', this.mouseWheelAndKey, false);
				document.detachEvent('onkeyup', this.mouseWheelAndKey, false);
			}

			setTimeout(function(){
				_self.addEvents();
			}, 600);
		};

		this.animateScroll = function () {
			var animateTime = this.defaults.animateTime;
			var animateFunction = this.defaults.animateFunction;
			var position = this.defaults.currentPosition * 100;

			this.defaults.container.style.webkitTransform = 'translateY(-' + position + '%)';
			this.defaults.container.style.mozTransform = 'translateY(-' + position + '%)';
			this.defaults.container.style.msTransform = 'translateY(-' + position + '%)';
			this.defaults.container.style.transform = 'translateY(-' + position + '%)';
			this.defaults.container.style.webkitTransition = 'all ' + animateTime + 's ' + animateFunction;
			this.defaults.container.style.mozTransition = 'all ' + animateTime + 's ' + animateFunction;
			this.defaults.container.style.msTransition = 'all ' + animateTime + 's ' + animateFunction;
			this.defaults.container.style.transition = 'all ' + animateTime + 's ' + animateFunction;

			for (var i = 0; i < this.ul.childNodes.length; i++) {
					this.ul.childNodes[i].firstChild.classList.remove('active');
					if (i == this.defaults.currentPosition) {
					this.ul.childNodes[i].firstChild.classList.add('active');		
				}
			}
			var _thisCurrent = this.defaults.currentPosition;
			var smMedia = window.matchMedia('( max-width: 575px )');
			var mdMedia = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
			
			if(_thisCurrent == 0){
				$('#main_mouse_ani').show();
				$('#s1_ani1').delay(200).animate({
					"opacity":'1.0',
					"top":"0px"
				},800)
				section2BgAni(_thisCurrent);
				$('#s1_ani2').delay(200).animate({
					"opacity":'1.0',
					"top":"0px"
				},800)
				$('#s1_ani3').delay(200).animate({
					"opacity":'1.0',
					"top":"0px"
				},800)
						
				if(smMedia.matches == false && mdMedia.matches == false){
					backGroundEv('.section1')
				}

			}
			if(_thisCurrent == 1){
				$('#main_mouse_ani').show();
				section2BgAni(_thisCurrent);
				$('#s2_ani1').delay(200).animate({
					"opacity":'1.0',
					"top":"0px"
				},800)
				$('#s2_ani2').delay(200).animate({
					"opacity":'1.0',
					"top":"0px"
				},800)
				$('#s2_ani3').delay(200).animate({
					"opacity":'1.0',
					"top":"0px"
				},800)
						
	
			}
			if(_thisCurrent == 2){
				$('#main_mouse_ani').show();
				section2BgAni(_thisCurrent);
				$('#s3_ani1').delay(200).animate({
					"opacity":'1.0',
					"top":"0px"
				},800)
				$('#s3_ani2').delay(200).animate({
					"opacity":'1.0',
					"top":"0px"
				},800)
		
				if(smMedia.matches == false && mdMedia.matches == false){
					backGroundEv('.section3')
				}


			}
			if(_thisCurrent ==3){
				$('#main_mouse_ani').hide();
				section2BgAni(_thisCurrent);
			}
			// function titAnis(a){
			// 	$('#s2_ani').animate({
			// 		"opacity":1.0,
			// 		"top":0
			// 	},800)
			// 	$('#s2_ani2').delay(00).animate({
			// 		"opacity":1.0,
			// 		"top":0
			// 	},800)
			// 	$('#s2_ani3').delay(0).animate({
			// 		"opacity":1.0,
			// 		"top":0
			// 	},800)
			// }

			function section2BgAni(Current){
				if(Current == 1){
					$('#s2_bg_ani_left').css({
						"animationName":"s2_leftAni1"
					})
					$('#s2_bg_ani_right').css({
						"animationName":"s2_rightAni1"
					})
				}
				else{
					$('#s2_bg_ani_left').css({
						"animationName":'',
						"opacity":"0.0"
					})
					$('#s2_bg_ani_right').css({
						"animationName":'',
						"opacity":"0.0"
					})
				}
			}
			function backGroundEv(a){
				$(a).animate({
					"backgroundSize":'100%'
				},5000)
			}
			// function section1MenuU
			// alert(_thisCurrent)

		};

		this.changeCurrentPosition = function (position) {
			if (position !== "") {
				_self.defaults.currentPosition = position;
				location.hash = _self.defaults.currentPosition;
			}	
		};

		return this;
	};
	window.fullScroll = fullScroll;
})();