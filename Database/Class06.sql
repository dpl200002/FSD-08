-- connect to database
use freedb_fsd_db;

-- must include every field in the correct order
INSERT INTO student VALUES (529, 'Peter', 3);
-- ERROR: duplicate PRIMARY KEY
INSERT INTO student VALUES (529, 'James', 3);

INSERT INTO student (student_name, program_id) VALUES ('Jason', 2);

INSERT INTO student VALUES (7, 'Rick', 1); 

-- Ok because program_id can be null
INSERT INTO student (student_name) VALUES ('Liam');


-- ERROR: program name cannot be null
INSERT INTO program (program_id) VALUES (4);

-- default value define
INSERT INTO student (student_id) VALUES (8);

SELECT * FROM student;

-- UDPATE STATEMENTS
UPDATE student SET program_id = 2 WHERE student_id = 8;

SELECT * FROM student WHERE student_id = 8;

UPDATE student SET program_id = 3 WHERE student_id > 500;

SELECT * FROM student;
-- INSERT INTO program VALUES (4, 'Math');
UPDATE student SET program_id = 4, stauts = 'recess' WHERE program_id = 1;

SELECT * FROM student;

-- SUB QUERIES
SELECT * FROM program WHERE program_id IN (2,3,4);

SELECT DISTINCT program_id FROM student WHERE stauts = 'recess'; -- 1,4

SELECT * FROM program WHERE program_id IN (SELECT DISTINCT program_id FROM student WHERE stauts = 'recess');

UPDATE student SET stauts = 'homework' WHERE program_id IN (SELECT program_id FROM program WHERE program_name = 'Math');

SELECT program_id FROM program WHERE program_name = 'Math';
SELECT * FROM student;


-- DELETE STATEMENT 
DELETE FROM student; -- same functionality as TRUNCATE student;


SELECT * FROM student;
DELETE FROM student WHERE student_id = 5;

DELETE FROM student WHERE student_id > 500;

DELETE FROM student WHERE program_id = 2 AND student_id > 4;

SELECT * FROM student;


-- ERROR: cannot delete with foreign key constraint if child row exists
DELETE FROM program WHERE program_id = 4;

SELECT * FROM program;







