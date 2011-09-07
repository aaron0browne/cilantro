var __hasProp=Object.prototype.hasOwnProperty,__extends=function(a,b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]);d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype;return a};define(function(){var a;a=function(){function a(){a.__super__.constructor.apply(this,arguments)}__extends(a,Backbone.Model),a.prototype.defaults={_active:!1,_enabled:!0},a.prototype.initialize=function(){this.bind("change:_active",this._changeActive);return this.bind("change:_enabled",this._changeEnabled)},a.prototype.toJSON=function(){var b;b=a.__super__.toJSON.apply(this,arguments),delete b._active,delete b._enabled;return b},a.prototype._changeActive=function(a,b,c){var d;d=b?"active":"inactive";return this.trigger(d,this,c)},a.prototype._changeEnabled=function(a,b,c){var d;d=b?"enabled":"disabled";return this.trigger(d,this,c)},a.prototype.enable=function(a){var b;a==null&&(a={}),b=!this.get("_enabled"),this.set("_enabled",!0,a);if(a.reactivate&&b&&this.isActive())return this._changeActive(this,!0)},a.prototype.disable=function(a){return this.set("_enabled",!1,a)},a.prototype.activate=function(a){if(this.get("_enabled"))return this.set("_active",!0,a)},a.prototype.inactivate=function(a){if(this.get("_enabled"))return this.set("_active",!1,a)},a.prototype.isEnabled=function(){return this.get("_enabled")},a.prototype.isActive=function(){return this.get("_enabled")&&this.get("_active")};return a}();return{Model:a}})