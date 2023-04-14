-- STRING FUNCTION
SELECT UPPER(contactLastName), LOWER(contactFirstName) FROM customers;

SELECT customerName, LENGTH(customerName) FROM customers LIMIT 10;

SELECT customerName as oldName, REPLACE(customerName, 'Co.', 'Company') AS newName 
FROM customers
WHERE customerName LIKE '%co%';

SELECT contactLastName, SUBSTRING(contactLastName, 4, 3) FROM customers;

SELECT CONCAT( 
			contactFirstName, 
            ' ', 
            UPPER(
				SUBSTRING( contactLastName, 1,1 )
			),
			'.'
		) AS contactName,
        phone
FROM customers;


-- NUMERIC FUNCTIONS
SELECT ROUND(7.5), CEIL(6.415), FLOOR(4.63), (444%48.04), ABS(-1353135);


-- COALESCE

SELECT customerName, salesRepEmployeeNumber FROM customers;
SELECT customerName, COALESCE(salesRepEmployeeNumber, '0') AS salesRep FROM customers;
SELECT firstName, lastName, COALESCE(reportsTo, 'Themselves') AS boss FROM employees;

-- DATE
SELECT NOW(), CURRENT_TIMESTAMP;

SELECT * FROM orders LIMIT 10;

UPDATE orders SET shippedDate = '2023-04-14' WHERE orderNumber = 10100;
UPDATE orders 
SET shippedDate = CONCAT(YEAR(NOW()),'-',MONTH(NOW()),'-',DAY(NOW()))
WHERE orderNumber = 10101;
UPDATE orders SET shippedDate = DATE_FORMAT(NOW(), '%Y-%m-%d') WHERE orderNumber = 10102;

SELECT DATE_ADD(NOW(), INTERVAL 2 week);




