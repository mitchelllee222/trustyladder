CREATE TABLE `tl_project_services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `projectid` int DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `rate` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
