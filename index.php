<?php
	session_start();
	if (!isset($_SESSION['USERNAME'])) {
		header('location: login.php');
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>首页</title>

	<meta charset="utf-8">

	<link rel="stylesheet" type="text/css" href="easyui\themes\bootstrap\easyui.css">
	<link rel="stylesheet" type="text/css" href="easyui\themes\icon.css">
	<link rel="stylesheet" type="text/css" href="css\index.css">
	<link rel="stylesheet" type="text/css" href="css\icon.css">

	<script type="text/javascript" src="easyui\jquery.min.js"></script>
	<script type="text/javascript" src="easyui\jquery.easyui.min.js"></script>
	<script type="text/javascript" src="js\index.js"></script>

	<style type="text/css">
		#tabs .home {
			font-size: 48px;
			font-style: italic;
			text-align: center;
			position: fixed;
			top: 50%;
			display: block;
		}
	</style>
</head>

<body class="easyui-layout">

	<div data-options="region: 'north'" style="height: 60px; background-color: #ccc; overflow: hidden;">
		<div class="logo">EasyUI 后台管理系统</div>
		<dir class="logout">您好 [ <?php echo $_SESSION['USERNAME'] ?> ] | <a href="logout.php">退出</a></dir>
	</div>

	<div data-options="region: 'west', title: '导航菜单'" style="width: 180px; padding: 10px">
		<ul id="navi">
			
		</ul>
	</div>

	<div data-options="region: 'center'" style="overflow: hidden;">
		<div id="tabs">
			<div title="首页" iconCls="icon-home" class="home">				
				欢迎来到后台管理系统！
			</div>
		</div>
	</div>
	
 	<div data-options="region: 'south'" style="height: 35px; line-height: 30px; text-align: center;">
 		&copy; 2016 EasyUI
 	</div>
</body>
</html>