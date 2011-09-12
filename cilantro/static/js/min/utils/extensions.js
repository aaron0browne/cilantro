Array.prototype.map||(Array.prototype.map=function(a){var b=this.length>>>0;if(typeof a!="function")throw new TypeError;var c=Array(b),d=arguments[1];for(var e=0;e<b;e++)e in this&&(c[e]=a.call(d,this[e],e,this));return c}),function(a){a.extend({putJSON:function(b,c,d,e){return a.ajax({type:"PUT",url:b,contentType:"application/json",data:c,success:d,dataType:e})},postJSON:function(b,c,d,e){return a.ajax({type:"POST",url:b,contentType:"application/json",data:c,success:d,dataType:e})},log:function(a){window.console?console.log(a):alert(a)},jqoteobj:function(b,c,d){out=a.jqote(b,c,d);return a(out)},scrape:function(b){var c="<!doctype html>";c+="<html",a.each(a("html")[0].attributes,function(){c+=" "+this.name+'="'+this.value+'"'}),c+=">",a(":text").each(function(){var b=a(this);b.attr("defaultValue",b.val())}),a("textarea").each(function(){var b=a(this);b.attr("innerText",b.val())}),a("select").each(function(){var b=a("option",this);b.each(function(){var b=a(this);b.attr("selected")?this.setAttribute("selected",""):b.removeAttr("selected")})}),a(":checkbox, :radio").each(function(){var b=a(this);b.attr("checked")?this.setAttribute("checked",""):b.removeAttr("checked")});var d=a("html").clone();a("script",d).remove(),b&&a(b,d).remove(),a("a",d).attr({href:"#",onClick:"return false"});return c+d.html()+"</html>"}}),a.fn.placeholder=function(b){var c=this;c.each(function(){var d=a(this),e=d.css("color");b=b||d.attr("placeholder");if(!d.is("input")&&!d.is("textarea"))return c;(d.val()===""||d.val()===b)&&d.val(b).css("color","#999"),d.focus(function(){d.val()===b&&d.css("color",e).val("")}).blur(function(){d.css("color",e),d.val()===""&&d.css("color","#999").val(b)})});return this},a.fn.jdata=function(b,c){var d=a.grep(this,function(d){return a(d).data(b)==c});return a(d)},a.fn.autocomplete2=function(b,c,d,e){if(!this.is("input[type=text]")&&!this.is("input[type=search]"))throw new TypeError("A text or search field is required");c=c||null,d=d||300,e=e||!1;var f=a.extend({},b),g=f.success||function(){},h=f.error||function(){},i=f.start||function(){},j=f.end||function(){};f.data={};return this.each(function(b){var k=a(this),l,m,n,o=null,p=null,q=null,r=!1;l=k.closest("form").submit(function(a){return!1}),f.url=l.attr("action"),f.success=function(a,b,c){g(m,a,b,c),q==null&&e&&(q={resp:a,status:b,xhr:c}),n&&b=="success"&&(k.cache[m]=a),o=m,r=!1,f.end()},f.error=function(a,b,c){h(m,a,b,c),f.end()},f.start=function(){r=!0,i(m)},f.end=function(){r=!1,j()};var s="search-"+b;k.cache={},k.bind(s,function(b,g,h){n=h?!0:!1,m=g;n&&k.cache[m]?f.success(k.cache[m],"cached",null):(clearTimeout(p),c!==null&&m===c&&(m=""),m=m||"",m=SearchSanitizer.clean(m).toLowerCase(),m!==o?(r==!1&&f.start(),f.data.q=m,p=setTimeout(function(){e&&q?f.success(q.resp,q.status,q.xhr):a.ajax(f)},d)):f.end())}),k.keyup(function(a){k.trigger(s,[this.value]);return!1})})},a.fn.tabs=function(){var b={nextTab:function(a,b,c,d){b=b===undefined?a.data("tabindex"):b,c=c||a.attr("children").length,d=d===undefined?0:d+1;if(d==c)return null;if(c+1<=b)return this.nextTab(a,0,c,d);if(a.children(":nth("+b+")").hasClass("disabled"))return this.nextTab(a,b+1,c,d);return b},getTab:function(a,b){return a.children(":nth("+b+")")}},c={init:function(b,c,e){b.data("tabified",!0),c=c===!0?!0:!1,e=e||function(){};var f=b.children(".tab");c?a(".tab",b).live("click",d(e)):f.click(d(e)),f.filter(".active").length===0&&f.not(".disabled").filter(":first").click()},toggle:function(a,c){b.getTab(a,c).click(),a.data("tabindex",c)},disable:function(a,c){b.getTab(a,c).addClass("disabled").removeClass("active"),nindex=b.nextTab(a,c),nindex!==null&&this.toggle(a,nindex)},enable:function(a,c){b.getTab(a,c).removeClass("disabled")}},d=function(b){return function(c){c.preventDefault();var d=a(this).not(".disabled");if(d.length==0||d.hasClass("active"))return!1;var e=d.siblings(".tab");d.addClass("active"),e.removeClass("active"),b(c,d)}};return function(a,b){if(typeof a=="string"){if(this.data("tabified")===null)throw new TypeError("tabs have not been initialized yet");c[a](this,b)}else c.init(this,a,b);return this}}()}(jQuery)