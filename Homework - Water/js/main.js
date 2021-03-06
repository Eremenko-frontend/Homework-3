
// water determination

function whatValueWater (rockHeight) {

  //Calculation of the right side of the array
  
  function risingShore() {

    while (rockHeight[0] < rockHeight[1]) {
      rockHeight.splice(0, 1);
    }
    
  };

  risingShore();

  /* Calculation of the left part of the array */

  var rockLength = rockHeight.length;

  while (rockHeight[rockHeight.length - 1] < rockHeight[rockHeight.length - 2]) {
    var numberLostElement = rockHeight.length - 1;
    rockHeight.splice(numberLostElement, 1);

  }

  //Calculation of the equality of elements of an array
  
  function smoothShore () {
    
    while (rockHeight[0] === rockHeight[1]) {
      rockHeight.splice(0, 1);
    }
    
  };
  
  smoothShore();
  
  var waterHeight = [];
  var valueWater = 0;

  function mathOper () {
    var numberOfTheNextRockHeight = 0;
    var zeroMassiv = [];

    //Calculation of the equality of elements of an array

    smoothShore();

    //Calculation if the first element is less than the other

    risingShore();

    /* Standard lake breakdown */

    var numberNextRockHeight = 0;
    var nextElement;
    var j = 2;//This index is used to get the next item number after the condition ceases to be fulfilled
    var rockHeightLength;

    while (rockHeight[0] > rockHeight[numberNextRockHeight + 1]) {

      nextElement = rockHeight[j];

      if (!(nextElement)) {
        nextElement = rockHeight[numberNextRockHeight];
      }

      j++;
      numberNextRockHeight++;

    }

    if (rockHeight[0] > nextElement) {

      while (rockHeight[rockHeight.length] > rockHeight[-1]) {
        rockHeightLength = rockHeight.length;
        valueWater = 0 + (rockHeight[rockHeight.length - 1] - rockHeight[i - 2]);

        if (valueWater < 0) {
          valueWater = 0;
        }

        waterHeight.push(valueWater);
        rockHeightLength--;
        zeroMassiv.push(1);

      }

      var zeroMassivLength = zeroMassiv.length + 1;
      rockHeight.splice(-1, zeroMassivLength);

    } else {

      while (rockHeight[0] > rockHeight[numberOfTheNextRockHeight + 1]) {
        valueWater = 0 + (rockHeight[0] - rockHeight[numberOfTheNextRockHeight + 1]);
        waterHeight.push(valueWater);
        numberOfTheNextRockHeight++;
        zeroMassiv.push(1);

      }

      var zeroMassivLength = zeroMassiv.length + 1;
      rockHeight.splice(0, zeroMassivLength);

    }

    if (rockHeight.length > 1) {
      mathOper ();
    }

  }

  mathOper ();

  var answerSum = 0;

  for (var numberLakes = 0; waterHeight.length > numberLakes; numberLakes++) {
    answerSum = answerSum + waterHeight[numberLakes];
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
