﻿CREATE TABLE `tl_serviceaddresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customerid` int DEFAULT NULL,
  `business_name` varchar(50) DEFAULT NULL,
  `address1` varchar(100) DEFAULT NULL,
  `address2` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` int DEFAULT NULL,
  `zip_code` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tl_serviceaddresses_tl_customers_idx` (`customerid`),
  CONSTRAINT `fk_tl_serviceaddresses_tl_customers` FOREIGN KEY (`customerid`) REFERENCES `tl_customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
