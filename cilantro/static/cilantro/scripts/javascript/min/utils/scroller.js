define(["jquery","underscore"],function($,_){var Scroller,defaultOptions;return defaultOptions={threshold:.75},Scroller=function(element,options){var _this=this;return this.element=$(element),this.options=options,options.relative?this.height=this.element.find(options.relative).innerHeight()-this.element.innerHeight():this.height=this.element.innerHeight(),this.threshold=this.height*options.threshold,this.element.on("scroll",_.debounce(function(){if(!_this.reached&&_this.element.scrollTop()>=_this.threshold)return _this.reached=!0,_this.element.trigger("scroller")},50)),options.trigger&&this.element.on("scroller",options.trigger),this},Scroller.prototype={constructor:Scroller,reset:function(){return this.reached=!1,this.options.relative?this.height=this.element.find(this.options.relative).innerHeight()-this.element.innerHeight():this.height=this.element.innerHeight(),this.threshold=this.height*this.options.threshold,this}},$.fn.scroller=function(option){var options;return $.isPlainObject(option)?options=$.extend({},option,defaultOptions):options=$.extend({},defaultOptions),this.each(function(){var $this,data;$this=$(this),data=$this.data("scroller"),data||$this.data("scroller",data=new Scroller(this,options));if(typeof option=="string")return data[option]()})},$.fn.scroller.Constructor=Scroller})