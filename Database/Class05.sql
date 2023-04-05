-- use freedb_fsd_db;
/*
-- CREATE A TABLE NAMEd program with  program id and program name 

CREATE TABLE IF NOT EXISTS program(
	program_id int PRIMARY KEY AUTO_INCREMENT,
    program_name varchar(100) NOT NULL
);


-- FOREIGN KEYS
ALTER TABLE student	 
	ADD CONSTRAINT FK_StudentProgram2 
	FOREIGN KEY (program_id) 
	REFERENCES program(program_id);
    
SELECT * FROM student;

-- INDEX

CREATE INDEX idx_studentName ON student(student_name);

DROP INDEX idx_studentName ON student;
*/
/*
-- SETUP DATA
INSERT INTO program (program_name) VALUES ("Science");
INSERT INTO program (program_name) VALUES ("Arts");
INSERT INTO program (program_name) VALUES ("Languages");

TRUNCATE student;
INSERT INTO student (student_name, program_id) VALUES ("Steph", 2);
INSERT INTO student (student_name, program_id) VALUES ("Adele", 1);
INSERT INTO student (student_name, program_id) VALUES ("Henri", 1);
INSERT INTO student (student_name, program_id) VALUES ("Bob", 2);
*/

SELECT * FROM student;
SELECT * FROM program;

/* CREATE VIEW student_programs AS 
SELECT s.student_id, s.student_name, p.program_id, p.program_name
FROM student AS s, program AS p
WHERE s.program_id = p.program_id;
*/

SELECT * FROM student_programs;

INSERT INTO student (student_name, program_id) VALUES ("Julie", 2);
 
SELECT student_name FROM student_programs WHERE program_id = 2;


CREATE OR REPLACE VIEW science_students AS
SELECT s.student_id, s.student_name
FROM student AS s, program AS p
WHERE s.program_id = p.program_id AND p.program_name = "Science";






