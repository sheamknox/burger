create database burgers_db;
use burgers_db;


create table burgers(
id integer(100) auto_increment primary key,
burger_name varchar(50),
devoured bool,
date timestamp
);