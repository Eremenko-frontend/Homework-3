// convert array to object

var table = [11, 22, 44, 33, 99, 66];
var newTable = {};

function typeConversion (locMassiv) {

  for ( var i = 0; i  <  locMassiv.length; i++ ) {
    newTable[i] = table[i];
    console.log(newTable);
  }

};

typeConversion (table);

