﻿CREATE TABLE `tl_materials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(250) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `cost` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
