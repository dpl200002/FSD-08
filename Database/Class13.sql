use fsddemo;

-- CREATE TABLE OrderCount (
-- 		OrderId       int NOT NULL PRIMARY KEY,
-- 		totalPrice	int DEFAULT 0,
--         totalItems	int DEFAULT 0
-- );

-- What my OrderCount table should/would look like
-- SELECT OrderID, SUM(UnitPrice*Quantity), SUM(Quantity)
-- FROM OrderDetails
-- GROUP BY OrderID
-- ORDER BY OrderID;


INSERT INTO OrderDetails (OrderID, ProductID, UnitPrice, Quantity, Discount) 
VALUES (10010, 5, 1, 50, 0);

SELECT * FROM OrderCount;
SELECT * FROM OrderDetails WHERE OrderID = 10010;

