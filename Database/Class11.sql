-- STORED PROCEDURES
-- Query that is repeatly executed
SELECT firstName, lastName, jobTitle, extension FROM employees;
-- executed by store procedure
CALL spSelectStaffPhoneBad(); 
-- delete the store procedure
DROP PROCEDURE spSelectStaffPhoneBad;

CALL spSelectStaffPhoneBad(); 

CALL spUpdatePaymentDate();

CALL spUpdatePaymentDateByXDays(3);

CALL spUpdatePaymentDateByXDaysAfterDate(10, '2004-01-01');

-- FUNCTIONS
SELECT productCode, priceEach, quantityOrdered, (priceEach*quantityOrdered) FROM orderdetails;

-- test out function
SELECT productCode, priceEach, quantityOrdered, 
	fnCalcTotal(priceEach, quantityOrdered),
	(priceEach*quantityOrdered) 
FROM orderdetails;

-- not deterministic
SELECT fnOwnerName();
DROP FUNCTION fnOwnerName; -- delete function

SELECT fnRandomName();



-- PRACTICE
-- Create the stored procedure spFetchSalesRepCustomers
-- -- It will retrieve the customers full name, phone number and their total number of orders, 
-- -- for all the customers who have a specific sales rep. 
-- The sales rep will be the input parameter for the stored procedure.
-- -- Order the results by the total number of orders  but without repeating the aggregate function

-- original query
SELECT 
	CONCAT(c.contactFirstName,' ',c.contactLastName) AS fullName,
    c.phone,
    COUNT(o.customerNumber) AS totalOrders
FROM customers c
INNER JOIN orders o ON c.customerNumber = o.customerNumber
WHERE c.salesRepEmployeeNumber = 1337
GROUP BY o.customerNumber
ORDER BY COUNT(o.customerNumber);

SELECT salesRepEmployeeNumber FROM customers; -- get salesRep numbers

CALL spFetchSalesRepCustomers(1337);
DROP PROCEDURE spFetchSalesRepCustomers;