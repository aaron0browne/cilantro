define("login",function(){$(function(){function a(){var d=b.val()&&c.val()?false:true;e.attr("disabled",d)}var e=$("[type=submit]"),b=$("[name=username]"),c=$("[name=password]");b.keyup(a);c.keyup(a)})});