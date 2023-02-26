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
       day date ,
       startTime time,
       endTime time,
       CONSTRAINT fk_employees  FOREIGN KEY(idEmployee)
       REFERENCES employees(idEmployee) ON DELETE CASCADE
);

create table if not exists appointement (
      idAppointement serial not null unique primary key,
      idEmployee integer not null,
      idCustomer integer not null,
      day date ,
      startTime timestamp,
      CONSTRAINT fk_employeesAppointement  FOREIGN KEY(idEmployee)
      REFERENCES employees(idEmployee) ON DELETE CASCADE,
      CONSTRAINT fk_customerAppointement  FOREIGN KEY(idCustomer)
      REFERENCES customers(idCustomer) ON DELETE CASCADE
);

insert into users(email, name, password, role)
values
    ('juan@gmail.com', 'juan', 'password', 0),
    ('alex@gmail.com', 'alex', 'password', 1);

    
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

insert into workingHours(idEmployee, day, startTime, endTime)
values
    (1,'2023-02-25','14:35:20','15:35:20'),
    (1, '2023-02-26','14:35:20','15:35:20'),
    (2,'2023-02-26','14:35:20','15:35:20'),
    (2, '2023-02-27','15:35:20','16:35:20'),
    (3, '2023-03-01','10:35:20','11:35:20'),
    (3, '2023-03-02','09:35:20','12:35:20'),
    (4, '2023-03-03','16:35:20','13:35:20'),
    (5, '2023-03-05','17:35:20','14:35:20'),
    (6, '2023-03-06','13:35:20','15:35:20');