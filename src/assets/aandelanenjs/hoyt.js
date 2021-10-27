/* eslint-disable prettier/prettier */
var HOYT=window.HOYT||{};
HOYT.namespace = function(ns, separator){
	if(!ns||!ns.length) return;
	var o = HOYT;
	$(ns.split(separator || '.')).each(function(i, v){
		o = o[v] = o[v] || {};
	});
	return o;
};