/*
SQLyog Ultimate v11.24 (32 bit)
MySQL - 5.6.26 : Database - easyui-demo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`easyui-demo` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `easyui-demo`;

/*Table structure for table `r_user_menu` */

DROP TABLE IF EXISTS `r_user_menu`;

CREATE TABLE `r_user_menu` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `menu_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='用户－菜单关系表';

/*Table structure for table `t_menu` */

DROP TABLE IF EXISTS `t_menu`;

CREATE TABLE `t_menu` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `text` varchar(20) DEFAULT NULL COMMENT '菜单名称',
  `state` varchar(10) DEFAULT NULL COMMENT '菜单状态',
  `iconCls` varchar(10) DEFAULT NULL COMMENT '菜单图标',
  `url` varchar(20) DEFAULT NULL COMMENT '菜单链接',
  `pid` int(10) NOT NULL DEFAULT '0' COMMENT '上级菜单',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='导航菜单';

/*Data for the table `t_menu` */

insert  into `t_menu`(`id`,`text`,`state`,`iconCls`,`url`,`pid`) values (1,'系统管理','closed','icon-key',NULL,0),(2,'用户信息','open','icon-group','user',1),(3,'角色信息','open','icon-role','role',1),(4,'字典管理','closed','icon-book',NULL,0),(5,'省份管理','open',NULL,NULL,4),(6,'城市管理','open',NULL,NULL,4);

/*Table structure for table `t_user` */

DROP TABLE IF EXISTS `t_user`;

CREATE TABLE `t_user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `roles` varchar(200) DEFAULT NULL,
  `create_time` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='用户表';

/*Data for the table `t_user` */

insert  into `t_user`(`id`,`username`,`password`,`roles`,`create_time`) values (1,'admin','7c4a8d09ca3762af61e59520943dc26494f8941b','用户信息,角色信息,省份管理,城市管理',1480821759),(2,'test','7c4a8d09ca3762af61e59520943dc26494f8941b','省份管理,城市管理',1480821759),(3,'luoml','7c4a8d09ca3762af61e59520943dc26494f8941b','用户信息,角色信息,省份管理,城市管理',1480821759),(4,'gongxy','3d4f2bf07dc1be38b20cd6e46949a1071f9d0e3d','用户信息',1480822059),(5,'zhangsan','da39a3ee5e6b4b0d3255bfef95601890afd80709','城市管理',1480856344),(6,'lisi','da39a3ee5e6b4b0d3255bfef95601890afd80709','城市管理',1480856348),(7,'wangwu','da39a3ee5e6b4b0d3255bfef95601890afd80709','城市管理',1480857058),(8,'qianqi','da39a3ee5e6b4b0d3255bfef95601890afd80709','城市管理',1480857089),(9,'zhaoliu','4d9012b4a77a9524d675dad27c3276ab5705e5e8','省份管理,城市管理',1480857405),(10,'cc','4d9012b4a77a9524d675dad27c3276ab5705e5e8','用户信息,角色信息,省份管理,城市管理',1480919650);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
