define(function(require,exports){
	var rAni = require('rAni');
	var Class = require('Class');

	var Stage = Class({
		init:function(opts){
			this._callback = typeof opts.callback == 'function' ? opts.callback : function(){};
			this.ctx = opts.ctx;
			this.canvas = this.ctx.canvas;
			this.bindEvt();
		},
		bindEvt:function(){
			setTimeout(this.start.bind(this),10);
			$('#J-start').click($.proxy(this.start,this));
			$('#J-stop').click($.proxy(this.stop,this));
		},
		start:function(){
			var callback = this._callback;
			var me = this;
			var loop = function(){
				callback(me.ctx);
				rAni.start(loop);
			};
			loop();
		},
		stop:function(){
			rAni.stop();
		},
		clear:function(){
	        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
	    }
	});
	return Stage;
});