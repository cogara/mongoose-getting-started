var mongoose = require('mongoose');
var Kitten = require('./cat.js');
var db = mongoose.connect('mongodb://localhost/cat').connection;

db.once('open', function() {
  console.log('MongoDB Connected!');
})

var silence = new Kitten({name: 'Silence'});
console.log(silence.name);

var fluffy = new Kitten({name: 'fluffy'});
// fluffy.speak();

fluffy.save(function (err, fluffy){
  if(err){
    console.log('save error', err);
  }
  fluffy.speak();
});

Kitten.find(function(err, kittens) {
  if(err) {
    console.log('find error', err);
  }
  console.log('kittens', kittens);
});

Kitten.find({name: /^Fluff/ }, function(err, kitten) {
  if(err) {
    console.log('find error', err);
  }
  console.log('kittens', kitten);
});
