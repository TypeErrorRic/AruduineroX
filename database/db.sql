-- Active: 1668907371781@@127.0.0.1@3306@database_link
CREATE DATABASE database_link;

USE database_link;

CREATE TABLE user (
        id int NOT NULL auto_increment,
        name varchar(50) not NULL,
        edad int not NULL,
        email varchar(100) not NULL,
        PRIMARY KEY (id)
    );

ALTER TABLE user
    ADD primary key (id);

DESCRIBE user;
