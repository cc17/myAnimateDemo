define(function(require,exports){
	var requestId;
	var _requestAnimationFrame  = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function(fn){
			return setTimeout(fn,1000/60);
		};

	var _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame ||
		window.webkitCancelAnimationFrame ||
		clearTimeout;
	var animationApi = {
		start:function(fn){
			requestId = _requestAnimationFrame(fn);
		},
		stop:function(){
			_cancelAnimationFrame(requestId);
			requestId = null;
		}
	};	
	return animationApi;
});