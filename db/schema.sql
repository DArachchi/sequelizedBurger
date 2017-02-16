CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table events.
CREATE TABLE burgers
(
id int AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN NOT NULL,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);