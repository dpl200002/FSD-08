-- ALTER TABLE SCHEMA AND UPDATE DATA

ALTER TABLE employees ADD age INT NOT NULL DEFAULT 40 AFTER firstName;
ALTER TABLE customers ADD customerAge INT NOT NULL DEFAULT 40 AFTER contactFirstName;
UPDATE employees SET age = FLOOR(18+RAND()*50) WHERE employeeNumber > 1;
UPDATE customers SET customerAge = FLOOR(50+RAND()*35) WHERE customerNumber > 1;


