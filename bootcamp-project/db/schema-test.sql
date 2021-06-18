-- MySQL Workbench Forward Engineering
CREATE DATABASE main_db;
USE main_db;

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema plataforma5
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NOT NULL,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` VARCHAR(100) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
  ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Producto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(255) NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `cantidad` INT NULL,
  `descripcion` VARCHAR(255) NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
  ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Carro` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `estado` VARCHAR(100) NOT NULL DEFAULT 'abierto',
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table Products_cart
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Products_cart (
  cartId INT NOT NULL,
  productId INT NOT NULL,
  qty INT NOT NULL,
  FOREIGN KEY (cartId) REFERENCES Carts(id),
  FOREIGN KEY (productId) REFERENCES Products(id),
  PRIMARY KEY (cartId, productId))
ENGINE = InnoDB;


LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` (id,userName,email,passwordEncrypted,firstName,lastName)
values
(1,'userName', 'prueba1@prueba.com', '123456', 'prueba1', 'prueba');

INSERT INTO `User` (id,userName,email,passwordEncrypted,firstName,lastName)
values
(1,'user2', 'prueba2@prueba.com', '123456', 'joaco', 'programa');

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `Producto` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `Producto` (id,categoria,nombre,cantidad,descripcion)
values
(1,'cereales', 'zucaritas', 100, 'Cereales de tigre');

INSERT INTO `Producto` (id,categoria,nombre,cantidad,descripcion)
values
(2,'lacteos', 'leche de almendras', 200, 'Sin azucar');

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `Carro` WRITE;
INSERT INTO `Carro` (id,userId,estado)
values
(1,1, 'activo');

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

