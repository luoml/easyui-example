<?php
	require 'class/config/DBUtil.php';

	$page = $_POST['page'];
	$pageSize = $_POST['rows'];
	$first = $pageSize * ($page - 1);

	$order = $_POST['order'];
	$sort = $_POST['sort'];

	$query = mysql_query("select id, username, roles, create_time from t_user order by $sort $order limit $first, $pageSize") or die ('SQL异常');
	$total = mysql_num_rows(mysql_query("select id, username, roles create_time from t_user"));

	$json = '';
	while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
		$json .= json_encode($row).',';
	}

	$json = substr($json, 0, -1);
	echo '{"total" : '.$total.', "rows" : ['.$json.']}';

	mysql_close();
?>