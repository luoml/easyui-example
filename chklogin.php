<?php
	session_start();

	require 'class/config/DBUtil.php';

	$username = $_POST['username'];
	$password = sha1($_POST['password']);

	
	$result = mysql_query("select id from t_user where username = '$username' and password = '$password'") or die ('SQL异常');

	if (!!mysql_fetch_array($result, MYSQL_ASSOC)) {
		$_SESSION['USERNAME'] = $username;
		echo 1;
	} else {
		echo 0;
	}

	mysql_close();

?>