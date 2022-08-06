# Resources

- [SQLiteOnline][https://sqliteonline.com]
- [Web3School][https://www.w3school.com/sql]

# Basic Things To Do on a Database

CRUD

- Create
- Read
- Update
- Destroy

# Some commands

- PRIMARY KEY => unique indentifier
- CREATE TABLE
- INSERT
  - INSERT INTO
  - VALUES
- SELECT \* FROM \*\*
- SELECT \* FROM products WHERE id=1
- UPDATE products SET price=1 WHERE id=2
- ALTER TABLE => add column
- DELETE FROM
- FOREIGH KEY xx REFERENCES xx => link tables together
- INNER JOIN

```
SELECT orders.order_number, customers.name, customers.last_name
from orders
INNER join customers ON orders.customer_id = customers.id

```
