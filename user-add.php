<?php
	require 'class/config/DBUtil.php';

	$username = $_POST['username'];
	$password = sha1($_POST['password']);
	$roles = $_POST['roleIds'];
	$create_time = time();

	$result = mysql_query("insert into t_user(username, password, roles, create_time) values ('$username', '$password', '$roles', '$create_time')") or die ('SQL异常');

	echo mysql_affected_rows();

	mysql_close();
?>