'use strict';

import mongoose from 'mongoose';

var ThingSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  ssn: String,
  email: String
});

export default mongoose.model('Thing', ThingSchema);
