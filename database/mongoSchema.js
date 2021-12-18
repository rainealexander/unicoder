const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports.unicodeDataSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  general_category: String,
  canonical_combining_class: String,
  bidi_class: String,
  decomposition: String,
  numeric_value_1: String,
  numeric_value_2: String,
  numeric_value_3: String,
  bidi_mirrored: String,
  simple_uppercase_mapping: String,
  simple_lowercase_mapping: String,
  simple_titlecase_mapping: String
});

module.exports.userDataSchema = new Schema({
  email: { type: String, required: true },
  categories: [ String ],
  categoryLists: [{
    category: String,
    code_points: [ String ]
  }]
});
