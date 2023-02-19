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
      idShop integer,
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
       idEmployee integer,
       day date ,
       startTime time,
       endTime time,
       CONSTRAINT fk_employees  FOREIGN KEY(idEmployee)
       REFERENCES employees(idEmployee) ON DELETE CASCADE
);

create table if not exists appointement (
      idAppointement serial not null unique primary key,
      idEmployee integer,
      idCustomer integer null,
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
    (1,'alex@gmail.com', '0632095234', 'alex', 'parent', 'dps', 'joue un dk givre (miskine)', 30);

insert into workingHours(idEmployee, day, startTime, endTime)
values
    (1,'2023-01-01','14:35:20','15:35:20'),
    (1, '2023-01-02','14:35:20','15:35:20'),
    (2,'2023-01-01','14:35:20','15:35:20'),
    (2, '2023-01-02','15:35:20','16:35:20')


