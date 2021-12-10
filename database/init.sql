

/* create table to import "UnicodeData.txt" */
CREATE TABLE `unicode_data`
(
 `id`                        varchar(7) NOT NULL ,
 `name`                      varchar(96) NULL ,
 `general_category`          varchar(4) NULL ,
 `canonical_combining_class` varchar(5) NULL ,
 `bidi_class`                varchar(4) NULL ,
 `decomposition`             varchar(128) NULL ,
 `numeric_value_1`           varchar(20) NULL ,
 `numeric_value_2`           varchar(20) NULL ,
 `numeric_value_3`           varchar(20) NULL ,
 `bidi_mirrored`             char(2) NULL ,
 `simple_uppercase_mapping`  varchar(20) NULL ,
 `simple_lowercase_mapping`  varchar(20) NULL ,
 `simple_titlecase_mapping`  varchar(20) NULL ,

PRIMARY KEY (`id`)
);

/* Import data query */
LOAD DATA LOCAL
  INFILE '/home/r/datafiles/UnicodeData.txt'
  INTO TABLE unicoder.unicode_data
  FIELDS TERMINATED BY ';'
  (id, name, general_category, canonical_combining_class, bidi_class,
  decomposition, numeric_value_1, numeric_value_2, numeric_value_3,
  bidi_mirrored, @dummy, @dummy, simple_uppercase_mapping, simple_lowercase_mapping,
  simple_titlecase_mapping);

