/* CLASS 04 */

-- USE freedb_fsd_db;

/* CREATE TABLE - Don't forget to update your schemas view to see your new tables */
CREATE TABLE student (
	student_name varchar(50)
);

/* Insert new records */
INSERT INTO student VALUES ('Steph'); 
INSERT INTO student VALUES ('Henri'); 
INSERT INTO student VALUES ('Arthur');
INSERT INTO student VALUES ('Steph'); 

SELECT * FROM student; /* should see all 4 rows */

TRUNCATE student; /* Delete every record in my table */

SELECT * FROM student; /* table now empty */

DROP TABLE student; /* Delete the table from the database */ 
SELECT * FROM student; /* ERROR: Table does not exist */

/* Create Table again */
CREATE TABLE student(
	student_id int,
    student_name varchar(50)
);

/* Insert records */
INSERT INTO student VALUES (1, "Steph");
INSERT INTO student VALUES (2, "Henri");
INSERT INTO student VALUES (3, "Arthur");

SELECT * FROM student;

INSERT INTO student VALUES (1, "Bob"); /* UhOh it inserted - Should not have same student_id */

DROP TABLE student; 

/* Create table with primary key */
CREATE TABLE student(
	student_id int PRIMARY KEY,
    student_name varchar(50) NOT NULL
);
INSERT INTO student VALUES (1, "Steph");
INSERT INTO student VALUES (2, "Henri");
INSERT INTO student VALUES (3, "Arthur");
SELECT * FROM student;

INSERT INTO student VALUES (1, "Bob"); /* ERROR: duplicate primary key */
INSERT INTO student (student_id) VALUES (4); /* ERROR: student name needs a value */

DROP TABLE student; 

/* Create table with default and unique */
CREATE TABLE student(
	student_id int PRIMARY KEY,
    student_name varchar(50) UNIQUE,
    student_status varchar(10) DEFAULT "active"
);

INSERT INTO student (student_id, student_name) VALUES (1, "Steph");
INSERT INTO student (student_id, student_name, student_status) VALUES (2, "Bob", "pending");

INSERT INTO student (student_id, student_name, student_status) VALUES (3, "Bob", "graduated"); /* ERROR : duplicate value for student_name */

SELECT * FROM student;

DROP TABLE student; 

/* Create table check constraints */
CREATE TABLE student(
	student_id int PRIMARY KEY,
    student_name varchar(50) NOT NULL,
    student_status varchar(10) DEFAULT "active",
    student_age int CHECK (student_age >= 15)
);

INSERT INTO student (student_id, student_name, student_age) VALUES (1, "Steph", 20);
INSERT INTO student (student_id, student_name, student_age) VALUES (2, "Bob", 14); /* ERRIR : violated check constraint */
SELECT * FROM student;

DROP TABLE student; 

/* Create table auto numbering primary key */
CREATE TABLE IF NOT EXISTS student(
	student_id int PRIMARY KEY AUTO_INCREMENT,
    student_name varchar(50) NOT NULL
);

INSERT INTO student (student_name) VALUES ("Steph");
INSERT INTO student (student_name) VALUES ("Adele");
INSERT INTO student (student_name) VALUES ("Henri");

SELECT * FROM student;

/* ALTER TABLE - add new column */
ALTER TABLE student ADD program_id int;
ALTER TABLE student ADD program_name varchar(100);

/* ALTER TABLE - remove existsing column */
ALTER TABLE student DROP COLUMN program_name;

/* ALTER TABLE - modify existsing column */
ALTER TABLE student MODIFY student_name varchar(100);





