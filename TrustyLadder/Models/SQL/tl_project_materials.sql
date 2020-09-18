CREATE TABLE `tl_project_materials` (
  `id` int NOT NULL,
  `projectid` int DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `cost` double DEFAULT NULL,
  `price` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
