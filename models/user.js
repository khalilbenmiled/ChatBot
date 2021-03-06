var mongoose = require('mongoose')
var specialite = require('./specialite.js').schema;

//5cb065f5a20a79011042c17a test

var subjects = require('./subject.js').schema;
var reclamations = require('./reclamation.js').schema;

var notes = new mongoose.Schema({
    "matiere" : {type : String},
    "note" : {type : Number},
    "coef" : {type : Number}
})

var userSchema = new mongoose.Schema({
    nom : {type : String , trim : true},
    prenom : {type : String},
    password : {type:String , required : true},
    email : {type : String , required : true},
    classe : {type : String , default : null},
    age : {type : Number},
    specialite : {type : specialite , default : null},
    notes : [notes],
    telephone : {type:String},
    subjects:[subjects],
    reclamations:[reclamations],
    role : {type : String , default : null}
})

module.exports = mongoose.model('User',userSchema)