const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports.unicodeDataSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  general_category: String,
  canonical_combining_class: String,
  bidi_class: String,
  decomposition: String,
  num_val_1: String,
  num_val_2: String,
  num_val_3: String,
  bidi_mirrored: String,
  unicode_1_name: String,
  iso_comment: String,
  simple_uppercase_mapping: String,
  simple_lowercase_mapping: String,
  simple_titlecase_mapping: String
}, { collection: 'no_control'});

// user data currently not used
module.exports.userDataSchema = new Schema({
  email: { type: String, required: true },
  categories: [ String ],
  categoryLists: [{
    category: String,
    code_points: [ String ]
  }]
});
