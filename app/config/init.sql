create table if not exists users (
    idUser serial not null unique primary key,
    email varchar(64) null,
    name varchar(64) null,
    password varchar(64) null,
    role integer null
);

create table if not exists customers (
     idCustomer serial not null unique primary key,
     idUser integer,
     CONSTRAINT fk_idUser FOREIGN KEY(idUser)
     REFERENCES users(idUser) ON DELETE CASCADE
);


create table if not exists shops (
     idShop serial not null unique primary key,
     idUser integer,
     name varchar(64)  null,
     address varchar(64)  null,
     service varchar(64)  null,
     CONSTRAINT fk_user  FOREIGN KEY(idUser)
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
       startTime timestamp,
       endTime timestamp,
       CONSTRAINT fk_employees  FOREIGN KEY(idEmployee)
       REFERENCES employees(idEmployee) ON DELETE CASCADE
);

create table if not exists appointement (
      idAppointement serial not null unique primary key,
      idEmployee integer,
      idCustomer integer,
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

