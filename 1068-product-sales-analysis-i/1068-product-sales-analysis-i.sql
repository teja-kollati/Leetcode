# Write your MySQL query statement below
SELECT product_name,year,price
FROM Sales left join Product on Sales.Product_id = Product.Product_id;