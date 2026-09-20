select distinct country from customers;
select distinct country from customers order by country;
select distinct country from customers order by country asc;
select distinct country from customers order by country desc;

select * from order_details limit 5;
select * from order_details limit 5 offset 10;
select min(unit_price) from order_details;
select max(unit_price) from order_details;
select avg(unit_price) from order_details;
select count(unit_price) from order_details;
select count(unit_price) from order_details where order_id = 10250;
select sum(unit_price) from order_details; -- toplama
select order_id, count(order_id) from order_details group by order_id;
select order_id, count(order_id) from order_details group by order_id order by order_id;
select * from products;
select country, count(country) from customers group by country order by country;

select product_name, unit_price from products where unit_price between 9 and 25;
select product_name, unit_price from products where product_name between 'A%' and 'H%';