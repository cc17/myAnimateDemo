define(function(require,exports){
	var Vector2 = require('./Vector2');
	var Class = require('Class');
	var Particle = Class({
		init:function(position,velocity,life,color,radius){
			this.position = position;
			this.velocity = velocity;
			this.accelerate = Vector2.zero;
			this.color = color;
			this.age = 0;
			this.life = life;
			this.radius = radius;		
		}
	});
	return Particle;
});