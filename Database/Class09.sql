-- JOINS

-- Fetch all customers that have orders
SELECT customers.customerNumber, orders.orderNumber, orders.status
FROM customers
INNER JOIN orders ON customers.customerNumber = orders.customerNumber
WHERE customers.customerNumber = 406;

-- Fetch all customers and (if they have) their orders
SELECT customers.customerNumber, orders.orderNumber, orders.status
FROM customers
RIGHT JOIN orders ON customers.customerNumber = orders.customerNumber; 


-- Fetch all the customers and their sales rep
SELECT customers.customerName, employees.firstName, employees.lastName
FROM customers
INNER JOIN employees ON customers.salesRepEmployeeNumber = employees.employeeNumber;

-- EMULATE A FULL JOIN IN MYSQL
SELECT customers.customerName, customers.salesRepEmployeeNumber, employees.firstName, employees.lastName
FROM customers
LEFT JOIN employees ON customers.salesRepEmployeeNumber = employees.employeeNumber
UNION 
SELECT customers.customerName, customers.salesRepEmployeeNumber, employees.firstName, employees.lastName
FROM customers
RIGHT JOIN employees ON customers.salesRepEmployeeNumber = employees.employeeNumber;

-- Fetch all customers and if they have any, the total sum of their payment
SELECT customers.customerNumber, SUM(payments.amount) AS totalPaid
FROM customers 
LEFT JOIN payments ON customers.customerNumber = payments.customerNumber
GROUP BY customers.customerNumber
ORDER BY totalPaid;

-- PRACTICE
-- Retrieve the full name of every employee and the full name of the person they report to. 
-- Order the results by the last name of the person reported to.
SELECT CONCAT(emp1.firstName, ' ', emp1.lastName) AS employeeName, CONCAT(emp2.firstName, ' ', emp2.lastName) AS bossName
FROM employees emp1
LEFT JOIN employees emp2 ON emp1.reportsTo = emp2.employeeNumber
ORDER BY emp2.lastName;

-- Retrieve the order number, status, customer name and sales rep full name (in a single column)
-- for all orders where customers have a credit limit higher then 100,000
SELECT o.orderNumber, o.status, c.customerName, CONCAT(e.firstName, ' ', e.lastName) AS saleRepName
FROM orders o
JOIN customers c ON c.customerNumber = o.customerNumber
JOIN employees e ON e.employeeNumber = c.salesRepEmployeeNumber
JOIN orderdetails od ON o.orderNumber = od.orderNumber
WHERE c.creditLimit > 100000;

-- Multiple ON clauses
SELECT od.quantityOrdered, o.status
FROM orders o
JOIN orderdetails od ON o.orderNumber = od.orderNumber AND o.status <> 'shipped';


-- Previous example
SELECT customers.customerNumber, orders.orderNumber, orders.status
FROM customers
INNER JOIN orders ON customers.customerNumber = orders.customerNumber;

SELECT customers.customerNumber, orders.orderNumber, orders.status
FROM customers, orders 
WHERE customers.customerNumber = orders.customerNumber;


-- WHERE vs JOIN
SELECT customers.customerNumber, orders.orderNumber, orders.status, employees.firstName
FROM customers
INNER JOIN orders ON customers.customerNumber = orders.customerNumber
INNER JOIN employees ON customers.salesRepEmployeeNumber = employees.employeeNumber
WHERE orders.status <> 'shipped';


SELECT customers.customerNumber, orders.orderNumber, orders.status, employees.firstName
FROM customers, orders, employees
WHERE customers.customerNumber = orders.customerNumber  
	AND customers.salesRepEmployeeNumber = employees.employeeNumber 
    AND orders.status <> 'shipped';

