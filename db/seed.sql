CREATE TABLE product (
product_id SERIAL primary key,
name varchar (40) not null,
price integer not null,
image_url text not null
)