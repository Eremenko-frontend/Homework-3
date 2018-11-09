
// water determination

function whatValueWater (rockHeight) {

  //Calculation of the right side of the array
  
  function rising_shore() {
    
    while (rockHeight[0] < rockHeight[1]) {

      rockHeight.splice(0, 1);

    }
    
  };

  rising_shore();

  /* Calculation of the left part of the array */

  var rockLength = rockHeight.length;

  while (rockHeight[rockHeight.length - 1] < rockHeight[rockHeight.length - 2]) {

    var numberLostElement = rockHeight.length - 1;

    rockHeight.splice(numberLostElement, 1);

  }

  //Calculation of the equality of elements of an array
  
  function smooth_shore () {
    
    while (rockHeight[0] === rockHeight[1]) {

      rockHeight.splice(0, 1);

    }
    
  };
  
  smooth_shore();
  
  var waterHeight = [];

  var valueWater = 0;

  function mathOper () {

    var n =0;
    
    var u = 0;
    
    var zeroMassiv = [];

    //Calculation of the equality of elements of an array

    smooth_shore();

    //Calculation if the first element is less than the other

    rising_shore();

    /* Standard lake breakdown */

    var e = 0;
    var i = 0;
    var firstElement;

    var nextElement;

    var j = 2;//This index is used to get the next item number after the condition ceases to be fulfilled

    var t;

    while (rockHeight[0] > rockHeight[e + 1]) {

      firstElement = rockHeight[0];

      nextElement = rockHeight[j];

      if (!(nextElement)) {

        nextElement = rockHeight[e];

      }

      j++;

      e++;

    }

    if (firstElement > nextElement) {

      while (rockHeight[rockHeight.length] > rockHeight[t - 1]) {

        t = rockHeight.length;

        valueWater = 0 + (rockHeight[rockHeight.length - 1] - rockHeight[i - 2]);

        if (valueWater < 0) {

          valueWater = 0;

        }

        waterHeight.push(valueWater);

        t--;

        zeroMassiv.push(u++);

      }

      var p = zeroMassiv.length + 1;

      rockHeight.splice(-1, p);

    } else {

      while (rockHeight[0] > rockHeight[n + 1]) {

        valueWater = 0 + (rockHeight[0] - rockHeight[n + 1]);

        waterHeight.push(valueWater);

        n++;

        zeroMassiv.push(u++);

      }

      var p = zeroMassiv.length + 1;

      rockHeight.splice(0, p);

    }

    if (rockHeight.length > 1) {

      mathOper ();

    }

  }

  mathOper ();

  var answerSum = 0;

  for (var i = 0; waterHeight.length > i; i++) {

    answerSum = answerSum + waterHeight[i];

  }

  console.log('Number of water in lakes:' + answerSum);

}

whatValueWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]);

whatValueWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]);

whatValueWater([7, 0, 1, 3, 4, 1, 2, 1]);

whatValueWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]);

whatValueWater([2, 2, 1, 2, 2, 3, 0, 1, 2] );

whatValueWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]);

whatValueWater([2, 2, 2, 2, 2]);
