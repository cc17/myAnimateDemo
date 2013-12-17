define(function(){
	var Class = function(parent,protoTypes){
		var kclass = function(){
            this.init.apply(this,arguments);
        };
        if(!protoTypes){
            protoTypes = parent;
            parent = null;
        }
        
        if(!parent){
            parent = function(){};
        }
        var F = function(){  };
        F.prototype = parent.prototype;
        kclass.prototype = new F();
        kclass.prototype.constructor = kclass;
        //注意这个init一定要写在 kclass.prototype = new F();之后，否则会被覆盖掉，导致构造函数中 thi.init变为undefined
        kclass.prototype.init = function(){};
        if(protoTypes){
            $.extend(kclass.prototype,protoTypes);       
        }
        kclass.extend = function(props){
            $.extend(kclass.prototype,props);
        };
        kclass.include = function(props){
            $.extend(kclass,props);
        };
        kclass.fn = kclass.prototype;
        kclass.fn.super = parent.prototype;
        kclass.fn.__callSuper__ = function(name){
            this.super[name]();
        };
        return kclass;
	};
	return Class;
});