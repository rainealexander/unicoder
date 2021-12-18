
/* DROP TABLE */

DROP TABLE unicode_data;


/* CREATE TABLE */
/* create table to import "UnicodeData.txt" */
CREATE TABLE unicode_data
(
  id varchar(7) NOT NULL,
  name varchar(96) NOT NULL,
  general_category varchar(4),
  canonical_combining_class varchar(5),
  bidi_class varchar(4),
  decomposition varchar(128),
  numeric_value_1 varchar(16),
  numeric_value_2 varchar(16),
  numeric_value_3 varchar(16),
  bidi_mirrored char(1),
  unicode_1_name varchar(64),
  iso_comment varchar(1),
  simple_uppercase_mapping varchar(20),
  simple_lowercase_mapping varchar(20),
  simple_titlecase_mapping varchar(20)
);

ALTER TABLE unicode_data ADD CONSTRAINT id
  PRIMARY KEY (id);


/* Import data query */
LOAD DATA LOCAL
  INFILE '/home/r/datafiles/UnicodeData.txt'
  INTO TABLE unicoder.unicode_data
  FIELDS TERMINATED BY ';'
  (id, name, general_category, canonical_combining_class, bidi_class,
  decomposition, numeric_value_1, numeric_value_2, numeric_value_3,
  bidi_mirrored, @dummy, @dummy, simple_uppercase_mapping, simple_lowercase_mapping,
  simple_titlecase_mapping);
