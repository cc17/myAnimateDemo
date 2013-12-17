requirejs.config({
	baseUrl:'src/js',
	paths:{
		"$" : 'lib/jquery-2.0.2',
		"Class" : "lib/Class",
		"rAni": 'lib/requestAnimation'
	}
});
//初始化
require(['$','app/Stage','app/Color','app/Vector2','app/Particle','app/ParticleSystern'],function(_$,Stage,Color,Vector2,Particle,ParticleSystern){
	var index = 0;

	var randomPos = function(){
        var thesea = Math.random() * 90 * Math.PI;
        return new Vector2(0,Math.sin(thesea));
    };
    var randomColor = function(){
    	return new Color(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255))
    };
 

	
	$(function($){
		var sys,s;
		var screenWidth = $(window).width();
		var screenHeight = $(window).height();
		var $canvas = $('<canvas />').attr({
			width:screenWidth + 'px',
			height:screenHeight + 'px'
		}).css({position:'absolute'}).appendTo($(document.body));

		var ctx = $canvas[0].getContext('2d');
		
		var callback = function(ctx){
			var random = Math.random();
    		var startPos = new Vector2(random*screenWidth,0);
			var point = randomPos();
			var color = randomColor();
			sys.add(new Particle(startPos,point.multiply(600),1,color,80) );
			sys.change();
	        s.clear();
	        sys.draw(ctx);
		};
		sys = new ParticleSystern(ctx);
		s = new Stage({callback:callback,ctx:ctx});



	});
	
});