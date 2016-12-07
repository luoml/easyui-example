$(function() {
	$('#navi').tree({
		url: 'menu.php',
		lines: true,
		onLoadSuccess: function(node, data) {
			var _this = this;
			if (data) {
				$(data).each(function(index, value) {
					if (this.state = 'closed') {
						$(_this).tree('expandAll');
					}
				});
			}
		},
		onClick: function(node) {
			if (node.url) {
				if ($('#tabs').tabs('exists', node.text)) {
					$('#tabs').tabs('select', node.text);
				} else {
					$('#tabs').tabs('add', {
						title: node.text,
						iconCls: node.iconCls,
						href: node.url + ".php",
						closable: true
					});
				}				
			}
		}
	});

	$('#tabs').tabs({
		fit: true,
		border: false
	});
});