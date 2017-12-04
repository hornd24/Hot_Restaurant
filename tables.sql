
USE  bsud9ij21mlz20o2;

CREATE TABLE table_list (
  id INT NOT NULL AUTO_INCREMENT,
  Table_Number INT(4) NULL,
  Table_Status BOOLEAN DEFAULT True,
  PRIMARY KEY (id)
);

CREATE TABLE customer_list(
  id INT NOT NULL AUTO_INCREMENT,
  Table_Number INT(4) NULL,
  customer_name VARCHAR(45) NOT NULL ,
  reservation_status VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO table_list (Table_Number)
VALUES (1);

INSERT INTO table_list (Table_Number)
VALUES (2);

INSERT INTO table_list (Table_Number)
VALUES (3);


INSERT INTO table_list (Table_Number)
VALUES (4);


INSERT INTO table_list (Table_Number)
VALUES (5);



