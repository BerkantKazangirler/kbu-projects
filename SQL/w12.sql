
SELECT * FROM customers;
SELECT contact_name, country FROM customers WHERE contact_name LIKE 'A%';
SELECT contact_name, country FROM customers WHERE contact_name SIMILAR TO '[A-H]%';
SELECT contact_name, country FROM customers WHERE country LIKE 'U_';