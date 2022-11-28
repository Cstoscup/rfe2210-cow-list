-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE

-- CREATE DATABASE cowlist;

USE cowlist;

CREATE TABLE cows (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(60) NOT NULL,
  description varchar(255),
  imageURL varchar(255),
  PRIMARY KEY (id)
)