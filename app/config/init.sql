CREATE TABLE IF NOT EXISTS posts (
    id serial not null unique,
    title varchar(64),
    content text,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS `user` (
    `idUser` int NOT NULL AUTO_INCREMENT,
    `email` varchar(64) NULL ,
    `name` varchar(64) NULL ,
    `password` varchar(64) NULL ,
    `role` int NULL ,
    PRIMARY KEY (
        `idUser`
    )
);

CREATE TABLE IF NOT EXISTS `professional` (
    `idProfessional` int NOT NULL AUTO_INCREMENT ,
    `idUser` int  NOT NULL ,
    `idTimeSlot` int  NOT NULL ,
    `name` varchar(64)  NULL ,
    `adress` varchar(64)  NULL ,
    `service` varchar(64)  NULL ,
    PRIMARY KEY (
        `idProfessional`
    )
);

CREATE TABLE IF NOT EXISTS `customer` (
    `idCustomer` int NOT NULL AUTO_INCREMENT ,
    `idUser` int  NOT NULL ,
    PRIMARY KEY (
        `idCustomer`
    )
);

CREATE TABLE IF NOT EXISTS `employee` (
    `idEmployee` int  NOT NULL ,
    `name` varchar(64)  NOT NULL ,
    `description` varchar(128)  NOT NULL ,
    `price` int  NOT NULL ,
    PRIMARY KEY (
        `idEmployee`
    )
);

CREATE TABLE IF NOT EXISTS `slot` (
    `idSlot` int  NOT NULL AUTO_INCREMENT ,
    `idTimeSlot` int  NOT NULL ,
    `idCustomer` in  NOT NULL ,
    `idEmployee` int  NOT NULL ,
    `day` date NULL ,
    `hour` int NULL ,
    PRIMARY KEY (
        `idSlot`
    )
);

CREATE TABLE IF NOT EXISTS `timeSlot` (
    `idTimeSlot` int  NOT NULL AUTO_INCREMENT ,
    `day` date  NOT NULL ,
    `opening` int  NOT NULL ,
    `closure` int  NOT NULL ,
    PRIMARY KEY (
        `idTimeSlot`
    )
);

ALTER TABLE `user` ADD CONSTRAINT `fk_user_idUser` FOREIGN KEY(`idUser`)
    REFERENCES `customer` (`idUser`);

ALTER TABLE `professional` ADD CONSTRAINT `fk_professional_idUser` FOREIGN KEY(`idUser`)
    REFERENCES `user` (`idUser`);

ALTER TABLE `professional` ADD CONSTRAINT `fk_professional_idTimeSlot` FOREIGN KEY(`idTimeSlot`)
    REFERENCES `timeSlot` (`idTimeSlot`);

ALTER TABLE `slot` ADD CONSTRAINT `fk_slot_idCustomer` FOREIGN KEY(`idCustomer`)
    REFERENCES `customer` (`idCustomer`);

ALTER TABLE `slot` ADD CONSTRAINT `fk_slot_idEmployee` FOREIGN KEY(`idEmployee`)
    REFERENCES `employee` (`idEmployee`);

ALTER TABLE `timeSlot` ADD CONSTRAINT `fk_timeSlot_idTimeSlot` FOREIGN KEY(`idTimeSlot`)
    REFERENCES `slot` (`idTimeSlot`);


INSERT INTO posts(title, content) VALUES ('Hello World', 'The obligatory Hello World Post ...'), ('Another Post', 'Yet another blog post about something exciting');

INSERT INTO user(email, name, password, role) VALUES ('juan@gmail.com', 'Juan', 'juanpassword', 0), ('alex@gmail.com', 'Alex', 'alexpassword', 1), ('julien@gmail.com', 'Julien', 'julienpassword', 1);