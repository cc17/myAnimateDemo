define(function(require){
	var Vector2 = require('./Vector2');
	var Class = require('Class');
	
	var ParticleSystern = Class({
		init:function(ctx){
			this._particles = [];
			this.dt = 0.01;
			this.gravity = new Vector2(0, 100);
			this.ctx = ctx;
			this.canvas = this.ctx.canvas;
		},
		add:function(particle){
			this._particles.push(particle);
		},
		change:function(){
	        this.grow();
	        this.applyGravity();
	        this.move();
	    },
		die:function(index){
			this._particles.splice(index,1);
		},
		grow:function(){
			var me = this;
			$.each(this._particles,function(i,p){
				p.age += me.dt;
				if(p.age >= me.life ){
					me.die(i);
				}
			});
		},
		applyGravity:function(){
			var me = this;
			$.each(this._particles,function(i,particle){
				particle.accelerate = me.gravity;
			});
		},
		move:function(){
			var me = this;
			$.each(this._particles,function(i,p){
				p.position = p.position.add(p.velocity.multiply(me.dt*1.5));
				//p.velocity = p.velocity.add(p.accelerate.multiply(me.dt));
			});
		},
		draw:function(){
			var ctx = this.ctx;
			$.each(this._particles,function(i,p){
				var alpha = 1 - p.age / p.life;
	            // ctx.fillStyle = "rgba("
	            //     + p.color.r  + ","
	            //     + p.color.g + ","
	            //     + p.color.b + ","
	            //     + alpha.toFixed(2) + ")";
				// ctx.fillStyle = "rgba(255,255,255,"
	   //              + alpha.toFixed(2) + ")";

				// ctx.beginPath();
				// //console.log(p.position);
				// ctx.arc(p.position.x,p.position.y,p.radius,0,Math.PI*2,true);
				// ctx.closePath();
				// ctx.fill();

				var imageObj = new Image();

      imageObj.onload = function() {
        ctx.drawImage(imageObj, 0, 0);
      };
      imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';



				// var img = new Image();
				// img.onload = function(){
				// 	ctx.drawImage(img,0,0,p.position.x,p.position.y);
				// };
				// img.src = 'http://ie.microsoft.com/testdrive/Performance/LetItSnow/res/Snowflakes.png';

			});
		}
	});
	return ParticleSystern;
});