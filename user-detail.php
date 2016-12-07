<?php
	require 'class/config/DBUtil.php';

	$id = $_POST['id'];

	$query = mysql_query("select id, username, roles, create_time from t_user where id = '$id'") or die ('SQL异常');
	
	$json = '';
	while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
		$json .= json_encode($row).',';
	}

	$json = substr($json, 0, -1);
	echo '['.$json.']';
	
	mysql_close();
?>