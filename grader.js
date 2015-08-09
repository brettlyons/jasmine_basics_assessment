module.exports = {

  //type Number -> String;
  letterGrader: function ( score ) {
    var outputString = "F";
    var scoreMap = {
      9: "A",
      8: "B",
      7: "C",
      6: "D",
    };
    if ( !Number(score) || score > 100 ) {
      return (score + " not a valid score");
    }

    if ( score > 59 ) {
      outputString = scoreMap[Math.floor(score/10)];
    }
    outputString += plusOrMinus ( score );
    return String(outputString);

    function plusOrMinus( score ) {
      var output = (score % 10  > 6 ) ? '+' : (score % 10 < 4 ) ? '-' : '';
      return output;
    }
  },

  //type [Number] -> String;
  averageGrade: function ( gradesArray ) {
    var sum = gradesArray.reduce(function ( a, b ) {
      return a + b;
    });
    return String(sum / gradesArray.length);
  },

  // type [Number] -> String;
  medianGrade: function ( gradesArray ) {
    if ( gradesArray.length % 2 == 0 ) {
      var a = gradesArray[gradesArray.length/2 - 1];
      var b = gradesArray[gradesArray.length/2];
      return (gradesArray[a] + gradesArray[b])/2;
    }
    else {
      var a = Math.floor(gradesArray.length/2);
      return String(gradesArray[a]);
    }
  },

  //type [Number] -> String;
  modeGrade: function ( gradesArray ) {
  var indexOfMax = 0;
  var countOfMax = 0;
  var newMode = 0;
  //Naive search
  for ( var i = 0 ; i < (gradesArray.length - countOfMax) ; i++ ) {
    countOfMax = 0;
    for ( var j = 0 ; j < (gradesArray.length - countOfMax) ; j++ ) {
      if (gradesArray[i] == gradesArray[j]) {
        indexOfMax = j;
        countOfMax++;
        }
      }
    if (countOfMax > 1 ) { newMode = gradesArray[indexOfMax] }
    }
  return String(newMode);
  }
};
