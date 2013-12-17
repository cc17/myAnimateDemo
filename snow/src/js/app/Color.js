define(function(require){
	var Class = require('Class');
	
	var Color = Class({
		init:function(r,g,b){
			this.r = r;
			this.g = g;
			this.b = b;
		},
		add:function(c){
			return new Color(this.r + c.r,this.g + c.g, this.b + c.b);
		}
	});
	return Color;
});