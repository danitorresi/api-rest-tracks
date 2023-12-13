create table users(
	id int unsigned auto_increment,
    name varchar(50),
    email varchar(50),
    password varchar(150),
    role enum('user','admin'),
    age int,
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);


create table traks(
	id int unsigned auto_increment,
    name varchar(50),
    albun varchar(150),
    cover varchar(150),
    artist_name varchar(150),
    artist_nationality varchar(150),
    duration_start INT(9),
    duration_end INT(9),
    media_id INT(9),
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);


create table storages(
	id int unsigned auto_increment,
    url mediumtext,
    filename mediumtext,
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);