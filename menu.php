<?php
	require 'class/config/DBUtil.php';
	
	$id = isset($_POST['id']) ? $_POST['id'] : 0;

	$result = mysql_query("select id, text, state, iconCls, url from t_menu where pid = '$id'") or die ('SQL异常');

	$json = '';
	while (!!$row = mysql_fetch_array($result, MYSQL_ASSOC)) {
		$json .= json_encode($row).',';
	}

	$json = substr($json, 0, -1);
	echo '['.$json.']';

	mysql_close();
?>