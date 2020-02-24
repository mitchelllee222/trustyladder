CREATE TABLE `tl_serviceaddresses` (
  `id` int(11) NOT NULL,
  `customerid` int(11) DEFAULT NULL,
  `business_name` varchar(50) DEFAULT NULL,
  `address1` varchar(100) DEFAULT NULL,
  `address2` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `zip_code` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tl_serviceaddresses_tl_customers_idx` (`customerid`),
  CONSTRAINT `fk_tl_serviceaddresses_tl_customers` FOREIGN KEY (`customerid`) REFERENCES `tl_customers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
