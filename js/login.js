$(function() {
	/* console.log() 可用于测试 */
	/* modal=true 弹出对话框后，对话框的底层不可以进行操作的 */
	$('#login').dialog({
		title: '系统登录',
		width: 300,
		height: 170,
		modal: true,
		closable: false,
		draggable: false,
		iconCls: 'icon-tip',
		buttons: '#loginBtn'
	});

	$('#username').textbox({
		width: 180,
		iconCls: 'icon-man',
		prompt: '请输入账号',
		required: 'true',
		missingMessage: '账号为必填项！'
	});	

	$('#password').passwordbox({
		width: 180,
		iconCls: 'icon-lock',
		prompt: '请输入密码',
		required: 'true',
		missingMessage: '密码为必填项！'
	});

	$('#registerBtn').linkbutton({
		iconCls: 'icon-add'
	});

	$('#loginBtn a').linkbutton({
		iconCls: 'icon-ok'
	});

	$('#loginBtn a').click(function() {
		if (!$('#username').textbox('isValid')) {
			$('#username').next('span').find('input').focus();

		} else if (!$('#password').passwordbox('isValid')) {
			$('#password').next('span').find('input').focus();

		} else {
			$.ajax({
				url: 'chklogin.php',
				type: 'post',
				data: {
					username: $('#username').val(),
					password: $('#password').val()
				},
				beforeSend: function() {
					$.messager.progress({
						text: '正在登录中...'
					});
				},
				success: function(data, status, jqXHR) {
					$.messager.progress('close');
					if (data > 0) {
						location.href = 'index.php';
					} else {
						$.messager.alert("提示", "用户名或密码错误！", 'warning');
					}
				}
			});
		}
	});
});