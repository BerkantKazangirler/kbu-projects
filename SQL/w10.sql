SELECT * FROM customers;
SELECT company_name, company_name, country FROM customers;
SELECT company_name AS "İletişim Bilgisi", company_name AS "Firma Adı", country AS "Ülke" FROM customers;
SELECT contact_name, phone, country FROM customers WHERE country = 'UK';
SELECT contact_name, phone, country FROM customers WHERE country LIKE 'U%';
SELECT contact_name, phone, country FROM customers WHERE contact_name LIKE '%na%';
SELECT contact_name, phone, country FROM customers WHERE contact_name LIKE '%';