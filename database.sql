-- MySQL dump 10.13  Distrib 8.0.19, for osx10.15 (x86_64)
--
-- Host: alba.cc8aqyutlwsp.eu-west-1.rds.amazonaws.com    Database: Tasks
-- ------------------------------------------------------
-- Server version	5.7.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `Task`
--

DROP TABLE IF EXISTS `Task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Task` (
  `TaskId` int(11) NOT NULL,
  `Text` varchar(255) NOT NULL,
  `DueDate` date DEFAULT NULL,
  `Category` varchar(255) DEFAULT NULL,
  `Priority` varchar(255) DEFAULT NULL,
  `Completed` tinyint(1) NOT NULL,
  `UserId` int(11) NOT NULL,
  KEY `UserId` (`UserId`),
  CONSTRAINT `Task_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Task`
--

LOCK TABLES `Task` WRITE;
/*!40000 ALTER TABLE `Task` DISABLE KEYS */;
INSERT INTO `Task` VALUES (1,'Homework','2020-04-20','Learning','High',1,1),(2,'Grocery','2020-04-24','Home','Medium',1,1),(3,'Buy new mat','2020-04-15','Health','Medium',1,1),(4,'Buy Vitamins','2020-04-27','Health','Medium',1,2),(5,'Sell TV','2020-04-28','Home','Low',1,2),(6,'Edit Task React','2020-04-15','Learning','High',1,1),(7,'JS Practice','2020-04-15','Learning','High',1,1),(8,'4 workouts','2020-04-15','Health','High',0,2),(9,'Refactor JS Challenges','2020-04-20','Learning','Medium',0,2),(10,'Clean windows','2020-04-23','Home','Low',0,3),(11,'Tutorial MySQL','2020-04-23','Learning','High',0,3),(12,'Personal Branding Course','2020-04-30','Learning','High',0,3);
/*!40000 ALTER TABLE `Task` ENABLE KEYS */;
UNLOCK TABLES;
