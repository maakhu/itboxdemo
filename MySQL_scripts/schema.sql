CREATE SCHEMA `itbox` ;
CREATE TABLE `itbox`.`cikk` (
  `id_cikkszam` INT NOT NULL AUTO_INCREMENT,
  `megnevezes` VARCHAR(45) NULL,
  `keszlet` INT NULL,
  `mertekegyseg` VARCHAR(5) NULL,
  PRIMARY KEY (`id_cikkszam`),
  UNIQUE INDEX `id_cikkszam_UNIQUE` (`id_cikkszam` ASC) VISIBLE);

  CREATE TABLE `itbox`.`cikktetel` (
  `tetelszam` INT NOT NULL AUTO_INCREMENT,
  `datum` DATETIME NOT NULL,
  `cikkszam` INT NOT NULL,
  `raktarkod` VARCHAR(20) NOT NULL,
  `mennyiseg` INT NOT NULL,
  `mertekegyseg` VARCHAR(5) NULL,
  PRIMARY KEY (`tetelszam`));
