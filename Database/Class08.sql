-- ALTER TABLE SCHEMA AND UPDATE DATA

-- Pre Class script to run
-- ALTER TABLE employees ADD age INT NOT NULL DEFAULT 40 AFTER firstName;
-- ALTER TABLE customers ADD customerAge INT NOT NULL DEFAULT 40 AFTER contactFirstName;
-- UPDATE employees SET age = FLOOR(18+RAND()*50) WHERE employeeNumber > 1; -- between 18 and 68
-- UPDATE customers SET customerAge = FLOOR(50+RAND()*35) WHERE customerNumber > 1; -- between 50 and 85


-- Subquery
-- 1. find the youngest
-- 2. find everyone of the same age as the youngest

SELECT MIN(age) FROM employees; -- my MIN(age) = 20
SELECT * FROM employees WHERE age = 20;

SELECT * FROM employees WHERE age = ( SELECT MIN(age) FROM employees );

-- Single value expected
SELECT employeeNumber, (SELECT MIN(age) FROM employees) FROM employees;
SELECT * FROM employees WHERE age > ( SELECT AVG(age) FROM employees);

-- DO NOT DO THIS - subqueries are always on the right side of the operation
SELECT * FROM employees WHERE ( SELECT AVG(age) FROM employees) > age;


-- Multiple values
SELECT DISTINCT customerNumber FROM orders WHERE status <> 'shipped';
SELECT * 
FROM customers 
WHERE customerNumber IN ( SELECT customerNumber FROM orders WHERE status <> 'shipped' )
ORDER BY customerName;

-- ANY
SELECT customerAge FROM customers;
SELECT * FROM employees WHERE age = ANY ( SELECT customerAge FROM customers );
SELECT * FROM employees WHERE age IN ( SELECT customerAge FROM customers );
-- previous 2 line return the saem result

-- ALL
SELECT * FROM employees WHERE age < ALL ( SELECT customerAge FROM customers );

-- this will return an employee if they are older then the youngest customer
SELECT * FROM employees WHERE age > ANY ( SELECT customerAge FROM customers );
-- This should return nothing because all the empoyees are younger than oldest customer
SELECT * FROM employees WHERE age > ALL ( SELECT customerAge FROM customers );


-- PRACTICE
-- Write a query that returns all order that has at least one item that is priced over 150$
SELECT * FROM orderdetails WHERE priceEach > 150; -- inner query

SELECT orderNumber, orderDate FROM orders 
WHERE orderNumber IN ( SELECT orderNumber FROM orderdetails WHERE priceEach > 150 );

-- Write a query to select all the orders who have 70 or more of one product in an order
SELECT * FROM orderdetails WHERE quantityOrdered >= 70; -- inner query
SELECT * FROM orders WHERE orderNumber IN ( SELECT orderNumber FROM orderdetails WHERE quantityOrdered >= 70 ); 

-- Write a query that returns all employees that are reported to
SELECT * FROM employees WHERE employeeNumber = reportsTo; -- Won't work
SELECT * FROM employees WHERE employeeNumber IN (SELECT reportsTo FROM employees);

-- BEWARE OF NULL IN SUBQUERIES
SELECT reportsTo FROM employees WHERE employeeNumber = 1002; -- returns NULL 
SELECT * FROM employees WHERE reportsTo = ( SELECT reportsTo FROM employees WHERE employeeNumber = 1002 ); -- return nothing
SELECT * FROM employees WHERE reportsTo IS NULL; -- return employeeNumber 1002

-- GROUP BY
SELECT orderNumber, SUM(quantityOrdered) FROM orderdetails GROUP BY orderNumber;
SELECT officeCode, AVG(age), COUNT(age) FROM employees GROUP BY officeCode;

SELECT officeCode, AVG(age), COUNT(age) FROM employees WHERE age > 30 GROUP BY officeCode; 

-- HAVING 
SELECT officeCode, AVG(age), COUNT(age) FROM employees GROUP BY officeCode HAVING COUNT(age) >= 3;


-- PRACITCE
-- Find the total price for each order.​
SELECT orderNumber, SUM(priceEach*quantityOrdered) AS orderTotal
FROM orderdetails 
GROUP BY orderNumber 
ORDER BY orderTotal DESC;

-- Find the productCode and total number of products that were ordered for orders that have been shipped
SELECT productCode, SUM(quantityOrdered) 
FROM orderdetails
WHERE orderNumber IN (SELECT orderNumber FROM orders WHERE status = 'shipped')
GROUP BY productCode;

-- Find the total number of employees that work in each office that has 5 or more employees
SELECT officeCode, COUNT(employeeNumber)
FROM employees
GROUP BY officeCode
HAVING count(employeeNumber) >= 5;


-- CORRELATED SUBQUERY - using values from outer query
SELECT productCode, productName, buyPrice
FROM products AS p
WHERE buyPrice > (SELECT AVG(buyPrice) FROM product WHERE productLine = p.productLine);

-- if you wanted to prefix everything with the table alias
SELECT o.productCode, o.productName, o.buyPrice
FROM products AS o
WHERE o.buyPrice > (SELECT AVG(i.buyPrice) FROM product i WHERE i.productLine = o.productLine);


-- UNION
SELECT productName, 'product' FROM products
UNION
SELECT firstName, 'employee' FROM employees

ORDER BY 1 DESC;

-- PRACTICE 
-- Find the first name, last name and age of all employees and customers.
SELECT 'EMP' AS fieldType, CONCAT(firstName, ' ', lastName) as fieldName, age FROM employees
UNION
SELECT 'CUST', CONCAT(contactFirstName, ' ', contactLastName), customerAge FROM customers
UNION 
SELECT 'STU', student_name, NULL FROM student

ORDER BY 2 ASC;





