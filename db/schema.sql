CREATE DATABASE orders_db;
USE orders_db;

CREATE TABLE orders
(
    id int NOT NULL
    AUTO_INCREMENT,
	order_name varchar
    (255) NOT NULL,
	order_ready BOOLEAN DEFAULT false,
	PRIMARY KEY
    (id)
);