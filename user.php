<?php
	session_start();
	if (!isset($_SESSION['USERNAME'])) {
		header('location: login.php');
	}
?>

<script type="text/javascript" src="js/user.js"></script>

<table id="user"></table>

<div id="user_toolbar" style="padding: 5px">
	<div style="padding-bottom: 5px">
		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-add', plain:true" onclick="user.add()">添加</a>
		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-edit', plain:true" onclick="user.edit()">修改</a>
		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-remove', plain:true" onclick="user.delete()">删除</a>
		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-reload', plain:true" onclick="user.refresh()">刷新</a>
		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-redo', plain:true" onclick="user.redo()">取消选择</a>
	</div>
	<div style="padding-left: 5px">
		查询账号：<input class="easyui-textbox" style="width: 120px">
		创建时间：从 <input type= "text" class= "easyui-datebox" style="width: 120px"> </input> 到 <input type= "text" class= "easyui-datebox" style="width: 120px"> </input>
		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search', plain:true">查询</a>
	</div>
</div>


<form id="user_add" style="margin: 0; padding: 5px 0 0 25px">
	<p>登录账号：<input id="username"></p>
	<p>登录密码：<input id="password"></p>
	<p>分配角色：<input id="roleIds"></p>
</form>

<form id="user_edit" style="margin: 0; padding: 5px 0 0 25px">
	<input type="hidden" name="edit_id" id="e_id">	
	<p>登录账号：<input name="edit_username" id="e_username"></p>
	<p>登录密码：<input name="edit_password" id="e_password"></p>
	<p>分配角色：<input name="edit_roleIds" id="e_roleIds"></p>
</form>