'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  user: {
    type: String,
    required: 'Por favor ingresar el nombre de usuario'
  },
  password: {
    type: String,
    required: 'Por favor ingresar la contraseña del usuario'
  },
  name: {
    type: String,
    required: 'Por favor ingresar el nombre del usuario'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Users', UserSchema);