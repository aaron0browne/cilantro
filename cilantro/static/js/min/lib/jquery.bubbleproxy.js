(function(a){a.bubbleproxy=function(b,c){return a(c||"body").bubbleproxy(b)},a.fn.bubbleproxy=function(b){b=b||{},typeof b=="string"&&(nconfig={},nconfig[arguments[0]]=arguments[1]||{},b=nconfig);var c=this;a.each(b,function(b,d){if(!!d.listeners){var e=a.map(d.listeners||[],function(b){return b.jquery?b:a(b)}),f=a.map(d.sources||[],function(a){return a.jquery?a.selector:a}),g=d.stopPropagation===undefined?!0:d.stopPropagation;c.bind(b,function(b){if(!!f.length){var c=!1,d=a(b.target);a.each(f,function(){c=!d.is(this);return c});if(!c)return}var h,i,j=Array.prototype.slice.call(arguments,1);a.each(e,function(){i=a.extend(a.Event(b.type),b),h=j.slice(0),h.unshift(i),g&&i.stopPropagation(),this.each(function(){a.event.trigger(i,h,this,!0)})})})}});return this}})(jQuery)