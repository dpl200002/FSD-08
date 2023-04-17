DELIMITER //
-- fetch employees and their extentions with an sql error
CREATE PROCEDURE spSelectStaffPhoneBad()
BEGIN
	SELECT firstName, lastName, jobTitle, extention FROM employees;
END // -- end of the stored procedure

-- fetch employees and their extentions 
CREATE PROCEDURE spSelectStaffPhone()
BEGIN
	SELECT firstName, lastName, jobTitle, extension FROM employees;
END // -- end of the stored procedure

-- update order payment date
CREATE PROCEDURE spUpdatePaymentDate()
BEGIN
	UPDATE payments 
    SET paymentDate = DATE_ADD(paymentDate, INTERVAL 1 day) 
    WHERE customerNumber > 0;
    
    SELECT * FROM payments ORDER BY paymentDate;
END //

-- update order payment date by specified number of days
CREATE PROCEDURE spUpdatePaymentDateByXDays(interval_step INT)
BEGIN
	UPDATE payments 
    SET paymentDate = DATE_ADD(paymentDate, INTERVAL interval_step day) 
    WHERE customerNumber > 0;
    
    SELECT * FROM payments ORDER BY paymentDate;
END //

-- update order payment date by specified number of days if after a specified date
CREATE PROCEDURE spUpdatePaymentDateByXDaysAfterDate(interval_step INT, check_pay_date DATE)
BEGIN
	UPDATE payments 
    SET paymentDate = DATE_ADD(paymentDate, INTERVAL interval_step day) 
    WHERE paymentDate > check_pay_date AND customerNumber > 0;
    
    SELECT * FROM payments WHERE paymentDate > check_pay_date ORDER BY paymentDate;
END //


CREATE PROCEDURE spFetchSalesRepCustomers(curSalesRep INT)
BEGIN
	SELECT 
		CONCAT(c.contactFirstName,' ',c.contactLastName) AS fullName,
		c.phone,
		COUNT(o.customerNumber) AS totalOrders
	FROM customers c
	INNER JOIN orders o ON c.customerNumber = o.customerNumber
	WHERE c.salesRepEmployeeNumber = curSalesRep
	GROUP BY o.customerNumber
	ORDER BY totalOrders;
END //




DELIMITER ; -- change it back to semi-colon


