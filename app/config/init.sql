create table posts (
    id serial not null unique,
    title varchar(64),
    content text,
    primary key(id)
);

insert into posts(title, content)
values
    ('Hello World', 'The obligatory Hello World Post ...'),
    ('Another Post', 'Yet another blog post about something exciting');

create table user (
    idUser serial not null unique,
    email varchar(64) null,
    name varchar(64) null,
    password varchar(64) null,
    role INTEGER NULL,
    primary key(idUser)
);

insert into user(email, name, password, role)
values
    ('juan@gmail.com', 'juan', 'password', 0),
    ('alex@gmail.com', 'alex', 'password', 1);

CREATE TABLE IF NOT EXISTS professional (
    idProfessional SERIAL PRIMARY KEY ,
    idUser INTEGER  ,
    idTimeSlot INTEGER  NOT NULL ,
    name VARCHAR(64)  NULL ,
    adress VARCHAR(64)  NULL ,
    service VARCHAR(64)  NULL ,

    CONSTRAINT fk_user  FOREIGN KEY(idUser)
        REFERENCES user(idUser) ON DELETE CASCADE,

    CONSTRAINT fk_timeSlot FOREIGN KEY(idTimeSlot)
        REFERENCES timeSlot(idTimeSlot)  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS customer (
    idCustomer SERIAL PRIMARY KEY ,
    idUser INTEGER ,
    CONSTRAINT fk_idUser FOREIGN KEY(idUser)
        REFERENCES user (idUser) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS employee (
    idEmployee SERIAL PRIMARY KEY ,
    name VARCHAR(64)  NOT NULL,
    description VARCHAR(128)  NOT NULL,
    price INTEGER   NOT NULL
);

CREATE TABLE IF NOT EXISTS slot(
    idSlot SERIAL PRIMARY KEY ,
    idTimeSlot INTEGER  NOT NULL ,
    idCustomer INTEGER  NOT NULL ,
    idEmployee INTEGER  NOT NULL ,
    day DATE NULL ,
    hour INTEGER  NULL ,

    CONSTRAINT fk_idCustomer FOREIGN KEY(idCustomer)
        REFERENCES customer (idCustomer) ON DELETE CASCADE,

    CONSTRAINT fk_idEmployee FOREIGN KEY(idEmployee)
        REFERENCES employee (idEmployee) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS timeSlot (
    idTimeSlot SERIAL PRIMARY KEY,
    day DATE NOT NULL ,
    opening INTEGER  NOT NULL ,
    closure INTEGER  NOT NULL ,
    idSlot INTEGER ,
    CONSTRAINT fk_idSlot FOREIGN KEY(idSlot)
        REFERENCES slot(idTimeSlot) ON DELETE CASCADE
);


--
-- INSERT INTO user(email, name, password, role) VALUES ('juan@gmail.com', 'Juan', 'juanpassword', 0), ('alex@gmail.com', 'Alex', 'alexpassword', 1), ('julien@gmail.com', 'Julien', 'julienpassword', 1);
--
-- INSERT INTO posts(title, content) VALUES ('Hello World', 'The obligatory Hello World Post ...'), ('Another Post', 'Yet another blog post about something exciting');
--
