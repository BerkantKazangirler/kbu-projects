-- drop table fakulte;
-- drop table bolum_tablosu;

-- create table fakulte(
-- 	id serial primary key not null,
-- 	ad varchar(50) not null
-- );

-- create table bolum_tablosu(
-- 	id serial primary key not null,
-- 	bolumadi varchar(50) not null,
-- 	fakulte int not null
-- );

insert into fakulte (ad) values ('Mühendislik');
insert into fakulte (ad) values ('Fen');
insert into fakulte (ad) values ('Edebiyat');
insert into fakulte (ad) values ('Libf');
insert into fakulte (ad) values ('Tıp');

insert into bolum_tablosu (bolumadi, fakulte) values ('Yazılım', 26);
insert into bolum_tablosu (bolumadi, fakulte) values ('Makine', 27);
insert into bolum_tablosu (bolumadi, fakulte) values ('YBS', 28);
insert into bolum_tablosu (bolumadi, fakulte) values ('Türkçe', 29);
insert into bolum_tablosu (bolumadi, fakulte) values ('Matematik', 30);

select * from fakulte;
select * from bolum_tablosu;