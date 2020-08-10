CREATE TABLE `tl_projectservices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `projectid` int DEFAULT NULL,
  `serviceid` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
