var mongoose = require('mongoose')
var marks = require("./marks.js")


var subjectSchema = mongoose.Schema({
    nom: {type: String, trim: true},
    coeff: {type: Number},
    notes: [marks],
})

module.exports = mongoose.model('Subject', subjectSchema)