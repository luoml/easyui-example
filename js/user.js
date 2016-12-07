$(function() {
	$('#user').datagrid({
		url: 'user-list.php',
		fit: true,
		fitColumns: true,
		striped: true,
		rownumbers: true,		
		ctrlSelect: true,
		border: false,
		pagination: true,
		pageNumber: 1,
		pageSize: 10,
		pageList: [10,20,30,40,50],
		sortName: 'create_time',
		sortOrder: 'desc',		
		toolbar: '#user_toolbar',	
		columns: [[
			{
				field: 'id',
				title: 'ID',
				checkbox: true
			},
			{
				field: 'username',
				title: '用户名',
				width: 10
			},
			{
				field: 'roles',
				title: '拥有角色',
				width: 80
			},
			{
				field: 'create_time',
				title: '创建日期'
			}
		]]
	});

	$('#user_add').dialog({
		title: '新增用户',
		width: 300,
		modal: true,
		closed: true,
		iconCls: 'icon-tip',
		buttons: [
			{
				text: '提交',
				iconCls: 'icon-ok',
				handler: function() {
					if ($('#user_add').form('validate')) {
						$.ajax({
							url: 'user-add.php',
							type: 'post',
							data: {
								username: $('#username').val(),
								password: $('#password').val(),
								roleIds: $('#roleIds').combotree('getText')
							},
							beforeSend: function() {
								$.messager.progress({
									text: '新增中...'
								});
							},
							success: function(data, status, jqXHR) {
								$.messager.progress('close');
								if (data > 0) {
									$.messager.show({
										title: '提示',
										msg: '新增成功'
									});
									$('#user_add').dialog('close').form('reset');
									$('#user').datagrid('reload');

								} else {
									$.messager.alert("提示", "新增用户失败！", 'error');
								}
							}
						});
					}
				}
			},
			{
				text: '取消',
				iconCls: 'icon-cancel',
				handler: function() {
					$('#user_add').dialog('close').form('reset');
				}
			}
		]
	});

	$('#username').textbox({
		width: 180,
		prompt: '请输入登录账号',
		required: true,
		missingMessage: '登录账号为必填项！'
	});	

	$('#password').passwordbox({
		width: 180,
		prompt: '请输入登录密码',
		required: true,
		missingMessage: '登录密码为必填项！'
	});

	$('#roleIds').combotree({
		width: 180,
		url: 'menu.php',
		lines: true,
		multiple: true,
		onlyLeafCheck: true,
		prompt: '请为此用户分配权限',
		required: true,
		missingMessage: '请至少一个分配角色权限！',
		onLoadSuccess: function(node, data) {
			var _this = this;
			if (data) {
				$(data).each(function(index, value) {
					if (this.state = 'closed') {
						$(_this).tree('expandAll');
					}
				});
			}
		}
	});

	$('#user_edit').dialog({
		title: '修改用户',
		width: 300,
		modal: true,
		closed: true,
		iconCls: 'icon-tip',
		buttons: [
			{
				text: '提交',
				iconCls: 'icon-ok',
				handler: function() {
					
				}
			},
			{
				text: '取消',
				iconCls: 'icon-cancel',
				handler: function() {
					$('#user_edit').dialog('close').form('reset');
				}
			}
		]
	});

	$('input[name=edit_username]').textbox({
		width: 180,
		required: true,
		missingMessage: '登录账号为必填项！'
	});

	$('input[name=edit_password]').passwordbox({
		width: 180,
		validType: 'length[6, 16]',
		invalidMessage: '登录密码长度6~16位！'
	});

	user = {
		refresh : function() {
			$('#user').datagrid('reload');
		},
		redo : function() {
			$('#user').datagrid('unselectAll');
		},
		add : function() {
			$('#user_add').dialog('open');
		},
		edit : function() {
			var rows = $('#user').datagrid('getSelections');

			if (rows.length > 1) {
				$.messager.alert("提示", "最多只能修改一条记录！", 'warning');
			} else if (rows.length == 0) {
				$.messager.alert("提示", "请至少选择一条记录！", 'warning');
			} else if (rows.length == 1) {
				$.ajax({
					url: 'user-detail.php',
					type: 'post',
					data: {
						id: rows[0].id
					},
					beforeSend: function() {
						$.messager.progress({
							text: '获取记录中...'
						});
					},
					success: function(data, status, jqXHR) {
						$.messager.progress('close');
						if (data) {
							var obj = $.parseJSON(data);
							var role = obj[0].roles.split(',');

							$('#user_edit').form('load', {
								/* combotree需赋值给ID，而textbox需赋值给name */
								edit_id: obj[0].id,
								edit_username: obj[0].username,
								e_roleIds: obj[0].roles
							}).dialog('open');

							$('#e_roleIds').combotree({
								width: 180,
								url: 'menu.php',
								lines: true,
								multiple: true,
								onlyLeafCheck: true,								
								required: true,
								missingMessage: '请至少一个分配角色权限！',
								onLoadSuccess: function(node, data) {
									var _this = this;
									if (data) {
										$(_this).tree('expandAll');
										$(data).each(function(index, value) {
											if ($.inArray(value.text, role) != -1) {
												$(_this).tree('check', value.target);
											}
										});
									}
								}
							});

						} else {
							$.messager.alert("提示", "获取用户失败！", 'error');
						}
					}
				});
			}
		},
		delete: function() {

		}
	};
});