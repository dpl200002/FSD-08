DROP TRIGGER IF EXISTS update_orderDetails_totals;

DELIMITER //
CREATE TRIGGER update_orderDetails_totals
AFTER INSERT ON OrderDetails FOR EACH ROW
BEGIN
-- -- Code to be executed afrter I insert a new row into orderdetails
-- INSERT INTO orderCount VALUES (1, 2, 3);


-- -- Use the NEW keyword to use the values of the query that fired the trigger
-- INSERT INTO orderCount (OrderID, totalPrice, totalItems) 
-- VALUES (NEW.OrderID, NEW.UnitPrice, NEW.Quantity);


-- -- If the PK exists we can update fields instead of getting error on an insert
-- IF PK EXISTS THEN INSERT (see above) ELSE UPDATE orderCount SET totalPrice = NEW.UnitPrice, totalItems= NEW.Quantity WHERE OrderID = NEW.OrderID ; 

-- Achieve the previous algorithm
-- INSERT INTO orderCount (OrderID, totalPrice, totalItems) 
-- VALUES (NEW.OrderID, NEW.UnitPrice, NEW.Quantity)
-- ON DUPLICATE KEY UPDATE
-- totalPrice = (totalPrice + NEW.UnitPrice), totalItems = (totalItems + NEW.Quantity);


-- Actually update the fields, not jsut overwrite them
-- INSERT INTO orderCount (OrderID, totalPrice, totalItems) 
-- VALUES (NEW.OrderID, (NEW.UnitPrice*NEW.Quantity), NEW.Quantity)
-- ON DUPLICATE KEY UPDATE
-- totalPrice = (totalPrice + NEW.UnitPrice * NEW.Quantity), totalItems = (totalItems + NEW.Quantity);


-- Use variables
	DECLARE totalPriceForOrder FLOAT;
	SET totalPriceForOrder = NEW.UnitPrice * NEW.Quantity;

	INSERT INTO orderCount (OrderID, totalPrice, totalItems) 
	VALUES (NEW.OrderID, totalPriceForOrder, NEW.Quantity)
	ON DUPLICATE KEY UPDATE
	totalPrice = (totalPrice + totalPriceForOrder), totalItems = (totalItems + NEW.Quantity);

-- We can use conditionals to execute specific tasks
	IF totalPriceForOrder > 100 THEN
		-- do something
        SET totalPriceForOrder = NEW.UnitPrice * NEW.Quantity + 100; -- woudl do nothing cause after the query
	END IF;

-- we can use errors to stop queries from executing and to alert user of issues.
-- SIGNAL SQLSTATE '50002' SET MESSAGE_TEXT = 'Insufficient total price'; -- stop everything here

-- -----
END //
DELIMITER ;


