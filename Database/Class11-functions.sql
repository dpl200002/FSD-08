DELIMITER //

-- FUNCTIONS
-- calcualte the total price given the unit price and the number of units
CREATE FUNCTION fnCalcTotal(i_price DECIMAL(10,2), i_quantity INT)
RETURNS DECIMAL(10,2) DETERMINISTIC
BEGIN
	DECLARE total DECIMAL(10,2);
    SET total = i_price * i_quantity;
    RETURN total;
END //


-- function that will return a static name
CREATE FUNCTION fnOwnerName()
RETURNS VARCHAR(5) DETERMINISTIC
BEGIN
	RETURN 'Steph';
END //


-- function that will randomly return a name
CREATE FUNCTION fnRandomName()
RETURNS VARCHAR(5) NOT DETERMINISTIC
BEGIN
	DECLARE randomName VARCHAR(5);
    
	SELECT firstName INTO randomName
    FROM employees 
    WHERE LENGTH(firstName) <= 5
    ORDER BY RAND()
    LIMIT 1;
    
	RETURN randomName;
END //

DELIMITER ;	-- reset the delimiter to semi-colon
