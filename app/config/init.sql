create table if not exists users (
    idUser serial not null unique primary key,
    email varchar(64) null unique,
    name varchar(64) null,
    password varchar(128) null,
    role integer null
);

create table if not exists customers (
     idCustomer serial not null unique primary key,
     idUser integer not null,
     CONSTRAINT fk_idUser FOREIGN KEY(idUser)
     REFERENCES users(idUser) ON DELETE CASCADE
);


create table if not exists shops (
     idShop serial not null unique primary key,
     idUser integer not null,
     name varchar(64)  null,
     address varchar(64)  null,
     service varchar(64)  null,
     CONSTRAINT fk_users FOREIGN KEY(idUser)
     REFERENCES users(idUser) ON DELETE CASCADE
);

create table if not exists employees (
      idEmployee serial not null unique primary key,
      idShop integer not null,
      email varchar(64) null,
      phone varchar(64) null,
      name varchar(64) null,
      lastName varchar(64) null,
      expertise varchar(64) null,
      description varchar(64) null,
      price integer null,
      CONSTRAINT fk_shop  FOREIGN KEY(idShop)
      REFERENCES shops(idShop) ON DELETE CASCADE
);

create table if not exists workingHours (
       idWorkingHours serial not null unique primary key,
       idEmployee integer not null,
       day date,
       startTime time,
       endTime time,
       status varchar(64) null,
       CONSTRAINT fk_employees  FOREIGN KEY(idEmployee)
       REFERENCES employees(idEmployee) ON DELETE CASCADE
);

create table if not exists appointments (
       idAppointment serial not null unique primary key,
       idEmployee integer not null,
       idCustomer integer not null,
       idShop integer not null,
       startTime time,
       endTime time,
       name varchar(64) null,
       shopName varchar(64) null,
       day date,
       CONSTRAINT fk_employeesAppointment  FOREIGN KEY(idEmployee)
       REFERENCES employees(idEmployee) ON DELETE CASCADE,
       CONSTRAINT fk_customerAppointment  FOREIGN KEY(idCustomer)
       REFERENCES customers(idCustomer) ON DELETE CASCADE,
       CONSTRAINT fk_shopAppointment  FOREIGN KEY(idShop)
       REFERENCES shops(idShop) ON DELETE CASCADE
);

insert into users(email, name, password, role)
values
    ('juan@gmail.com', 'Juan', 'password', 0),
    ('alex@gmail.com', 'Alex', 'password', 0),
    ('admin@gmail.com', 'Admin', '$2y$14$CZ2zBjwuc40DsJmN.GEHXedsiSGF.xEM0iwXRGT8Q.uMg5SE5eCMK', 1),
    ('Dulls@gmail.com', 'Dulls', 'password', 0);

    
insert into shops(idUser, name, address, service)
values
    (1,'Kiloutou', '15 Rue test', 'hairdresser'),
    (2,'Uber', '10 Rue taste', 'barber');
    
insert into employees(idShop, email, phone, name, lastName, expertise, description, price)
values
    (1,'juan@gmail.com', '0624098203', 'juan','torres', 'tank', 'joue un dk sang', 25),
    (1,'alex@gmail.com', '0632095234', 'alex', 'parent', 'dps', 'joue un dk givre (miskine)', 30),
    (1,'Francis@gmail.com', '0632095234', 'Francis', 'parent', 'dps', 'joue un dk givre (miskine)', 30),
    (2,'Paul@gmail.com', '0632095234', 'Paul', 'parent', 'dps', 'joue un dk givre (miskine)', 30),
    (2,'Gloria@gmail.com', '0632095234', 'Gloria', 'parent', 'dps', 'joue un dk givre (miskine)', 30),
    (2,'Adeline@gmail.com', '0632095234', 'Adeline', 'parent', 'dps', 'joue un dk givre (miskine)', 30);

insert into workingHours(idEmployee, day, startTime, endTime, status)
values
    (1,'2023-02-25','14:35:20','15:35:20','available'),
    (1, '2023-02-26','14:35:20','15:35:20','available'),
    (2,'2023-02-26','14:35:20','15:35:20','available'),
    (2, '2023-02-27','15:35:20','16:35:20','available'),
    (3, '2023-03-01','10:35:20','11:35:20','available'),
    (3, '2023-03-02','09:35:20','12:35:20','taken'),
    (4, '2023-03-03','16:35:20','13:35:20','available'),
    (5, '2023-03-05','17:35:20','14:35:20','available'),
    (6, '2023-03-06','13:35:20','15:35:20','taken');

insert into customers(idUser)
values
    (1),
    (2),
    (3);