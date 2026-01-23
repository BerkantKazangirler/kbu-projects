select * from order_details;
select * from products;
select p.product_name, od.unit_price, od.quantity
from order_details od
join products p on od.product_id = p.product_id;

select * from orders;
select * from employees;
select e.first_name || ' ' || e.last_name as "Employee Name", 
o.customer_id from orders o 
join employees e on o.employee_id = e.employee_id;


select * from customers;
select e.first_name || ' ' || e.last_name as "Employee Name",
c.company_name from orders o 
join employees e on o.employee_id = e.employee_id 
join customers c on o.customer_id = c.customer_id;




select c.contact_name, o.order_date
from customers c right join orders o 
on c.customer_id = o.customer_id;


select c.company_name, sum(od.unit_price * od.quantity) as "Total" 
from customers c 
join orders o on c.customer_id = o.customer_id
join order_details od on o.order_id = od.order_id
group by c.company_name order by "Total" desc;



select company_name, country from customers;


select * from order_details order by unit_price desc limit 3;

select customer_id, shipped_date from orders 
where ship_country = 'Germany';



select product_id, sum(unit_price * quantity) as "Total" from order_details 
group by product_id order by "Total" desc limit 5;



select e.employee_id, count(e.employee_id) from employees e
join orders o on e.employee_id = o.employee_id 
group by e.employee_id;

select sum(od.unit_price * od.quantity),
e.first_name || ' ' || e.last_name as "Employee Name"
from orders o 
join order_details od on o.order_id = od.order_id
join employees e on o.employee_id = e.employee_id 
group by e.employee_id;

select c.category_id, count(c.category_id), c.category_name
from products p
join categories c on p.category_id = c.category_id
group by c.category_id order by c.category_id desc;

🟢 KOLAY SEVİYE

1️⃣ Tüm müşterilerin ad–soyad ve şehir bilgilerini listeleyiniz.
select ad_soyad, sehir from müşteriler;

2️⃣ Tüm ürünlerin adını ve fiyatını listeleyiniz.
select urun_adi, fiyat from urunler;

3️⃣ Türkiye menşeli markaları listeleyiniz.
select * from markalar where ulke = 'Türkiye';

4️⃣ Fiyatı 1000 TL’den büyük olan ürünleri listeleyiniz.
select * from urunler where fiyat < 1000;

5️⃣ İstanbul’da yaşayan müşterileri listeleyiniz.
select * from müşteriler where sehir = 'İstanbul';

⸻

🟡 ORTA SEVİYE (JOIN)

6️⃣ Müşteri adı, satın aldığı ürün adı ve ürün fiyatını listeleyiniz.
select m.ad_soyad, u.urun_adi, u.fiyat from müşteri m join satislar s on m.musteri_id = s.musteri_id join urunler u on s.urun_id = u.urun_id;

7️⃣ Hangi müşterinin hangi markadan alışveriş yaptığını listeleyiniz.
select m.ad_soyad, ma.marka_adi from satislar s join müşteriler m on s.musteri_id = m.musteri_id join markalar ma on s.marka_id = ma.marka_id;

8️⃣ Mavi markasından satın alınan ürünleri ve müşterilerini listeleyiniz.
select * from satislar s join markalar ma on s.marka_id = ma.marka_id join ürünler u on s.urun_id = u.urun_id join müsteriler m on s.musteri_id = m.musteri_id where ma.marka_adi = 'Mavi';

9️⃣ Her müşterinin yaptığı alışveriş sayısını listeleyiniz.


10️⃣ Her markanın kaç adet satış yaptığını listeleyiniz.


⸻

🔴 ZOR / SINAVLIK ⭐

11️⃣ Her müşterinin toplam harcama tutarını hesaplayınız.


12️⃣ Toplam harcaması 1500 TL’den fazla olan müşterileri listeleyiniz.


13️⃣ En pahalı ürünü satın alan müşterinin adını ve ürün adını bulunuz.


14️⃣ Markalara göre yapılan satışların ortalama fiyatını hesaplayınız.


15️⃣ En çok satış yapan markayı bulunuz.


⸻

🔥 BONUS (Hoca Tarzı 😄)

16️⃣ ‘Pantolon’ geçen ürünleri satın alan müşterileri listeleyiniz.


17️⃣ Zara markasından alışveriş yapan müşterileri ve şehirlerini listeleyiniz.


18️⃣ Ali Yılmaz’ın satın aldığı ürünlerin adını ve fiyatını listeleyiniz.

