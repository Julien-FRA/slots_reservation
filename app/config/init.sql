create table if not exists posts (
    id serial not null unique primary key,
    title varchar(64),
    content text
);

create table if not exists users (
    idUser serial not null unique primary key,
    email varchar(64) null,
    name varchar(64) null,
    password varchar(64) null,
    role integer null
);

insert into users(email, name, password, role)
values
    ('juan@gmail.com', 'juan', 'password', 0),
    ('alex@gmail.com', 'alex', 'password', 1);

insert into posts(title, content)
values
    ('Hello World', 'The obligatory Hello World Post ...'),
    ('Another Post', 'Yet another blog post about something exciting');

create table if not exists customers (
     idCustomer serial not null unique primary key,
     idUser integer,
     CONSTRAINT fk_idUser FOREIGN KEY(idUser)
     REFERENCES users(idUser) ON DELETE CASCADE
);

create table if not exists employees (
     idEmployee serial not null unique primary key,
     name varchar(64) null,
     description varchar(64) null,
     price integer null
);

create table if not exists slots (
     idSlot serial not null unique primary key,
     idCustomer integer,
     idEmployee integer,
     day date null,
     hour integer null,
     CONSTRAINT fk_idCustomer FOREIGN KEY(idCustomer)
     REFERENCES customers(idCustomer) ON DELETE CASCADE,
     CONSTRAINT fk_idEmployee FOREIGN KEY(idEmployee)
     REFERENCES employees(idEmployee) ON DELETE CASCADE
);

create table if not exists timetable (
     idTimetable serial not null unique primary key,
     day date null,
     opening integer not null,
     closure integer not null,
     idSlot integer,
     CONSTRAINT fk_idSlot FOREIGN KEY(idSlot)
     REFERENCES slots(idSlot) ON DELETE CASCADE
);

create table if not exists professionals (
     idProfessional serial not null unique primary key,
     idUser integer,
     idTimetable integer,
     name varchar(64)  null,
     address varchar(64)  null,
     service varchar(64)  null,
     CONSTRAINT fk_user  FOREIGN KEY(idUser)
     REFERENCES users(idUser) ON DELETE CASCADE,
     CONSTRAINT fk_timetable FOREIGN KEY(idTimetable)
     REFERENCES timetable(idTimetable) ON DELETE CASCADE
);