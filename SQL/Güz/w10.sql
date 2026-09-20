SELECT * FROM customers;
SELECT contact_name, country FROM customers WHERE contact_name LIKE 'A%';
SELECT contact_name, country FROM customers WHERE contact_name SIMILAR TO '[A-H]%';
SELECT contact_name, country FROM customers WHERE country LIKE 'U_';
SELECT contact_name, country FROM customers WHERE country LIKE '%e_m%';
SELECT contact_name, country FROM customers WHERE contact_name SIMILAR TO '[^DH]%';
SELECT contact_title, country FROM customers WHERE contact_title LIKE '%_w_e%' AND country LIKE '%M_x%';
