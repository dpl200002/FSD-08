/* This is a comment */

/* How to tell workbench to connect to a specific Database */
USE `freedb_fsd_db`;

/* * means select column */
SELECT * FROM orders;

SELECT * FROM customers;

/* return only specific rows */
SELECT `orderNumber`, `status`, `comments`, `customerNumber` FROM `orders`;

/* WHERE clause */
SELECT * FROM orders WHERE customerNumber >= 450; /* NUmerical values do not need quotes */
SELECT * FROM orders WHERE `status` = 'On Hold'; /* Strings should be in single quotes */

/* <> means NOT EQUAL */
SELECT * FROM orders WHERE `status` <> 'Shipped'; 
SELECT * FROM orders WHERE `status` NOT IN ('Shipped');

/* AGGREGATE FUNCTIONS */
/* only applies to values that are not NULL */
SELECT MAX(creditLimit), MIN(creditLimit), AVG(creditLimit), SUM(creditLimit) FROM customers;
SELECT COUNT(customerNumber) AS customerCount, AVG(creditLimit) AS averageCredit FROM customers;
/* use AS as an alias to rename the column in the result set */

/* DISTINCT fetch unique values */
SELECT DISTINCT( 'status' ) FROM orders; /* careful not to use quotes ' or double quotes " */
SELECT DISTINCT( `status` ) FROM orders; 
SELECT COUNT( DISTINCT(`status`) ) AS uniqueStatusCount FROM orders;

/* LOGICAL OPERATORS */
SELECT * FROM orders WHERE `status` = 'Resolved' OR `status` = 'Cancelled'; 

SELECT * FROM orders WHERE `status` = 'Shipped' AND customerNumber >= 300;

SELECT * FROM customers;

/* credit is over 100,000 and	country is not the USA  */
SELECT customerName, country, creditLimit 
FROM customers 
WHERE country <> 'USA' AND creditLimit > 100000;


/* credit is over 100,000 but under 125,000 and	country is not the USA  */
SELECT customerName, country, creditLimit 
FROM customers 
WHERE country <> 'USA' AND creditLimit BETWEEN 100000 AND 125000;
/* WHERE country <> 'USA' AND creditLimit > 100000 AND creditLimit < 125000; */

/* countries that are either france, Italy, spain */
SELECT customerName, country, creditLimit 
FROM customers 
WHERE country IN ('France','Italy', 'Spain');
/*WHERE country = 'France' OR country = 'Italy' OR country = 'Spain';*/

SELECT customerName, contactLastName, contactFirstName
FROM customers
WHERE customerName LIKE '%toys__r%';

/*
% wildcard zero or more
_ wildcard one character

'%shop%' ==> shop must show up anywhere
'%shop'	==>	end in shop
'Q%'	==>	start with q
'%co._%'	==> must have at least 1 character _ after the co.
*/

SELECT * FROM orders WHERE shippedDate IS NOT NULL;


/* ORDER BY clause */
SELECT productName, productVendor 
FROM products
WHERE quantityInStock < 2000 
ORDER BY productVendor ASC, quantityInStock DESC;

