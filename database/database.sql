CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employees;

INSERT INTO  employees VALUES ('Joe', 1000)

INSERT INTO employees (name, salary) VALUES (?, ?)

SELECT * FROM employees;

DELETE FROM employees WHERE id=2;

UPDATE employee SET name="John", salary=1000 WHERE id=1;