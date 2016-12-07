$(function() {
	$.fn.draggable.defaults.proxy = 'clone';

	$('#drag').draggable({
		revert: true,
		// cursor: 'help',		
		// handle: '#title',
		// edge: 5,
		// axis: 'v',
		// delay: 1000,
		// disabled: true,
		// proxy: 'clone',
		// deltaX: 10,
		// deltaY: 10
		
		// onBeforeDrag: function() {
		// 	alert('拖动之前触发');
		// }
	});
});