create database contact_db;

use contact_db;

CREATE TABLE IF NOT EXISTS contact_form(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    number VARCHAR(10) NOT NULL,
    date datetime NOT NULL  	
);

CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

insert into users (name, role, email, password) values ("asmaa", "doctor", "asmaa@m.com", "1234"); 
