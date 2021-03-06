var code = require('../grader.js');

describe('graderTests', function() {
  it('letterGrader( score ) is run and returns a letter grade', function () {
    expect(code.letterGrader(95)).toEqual("A");
    expect(code.letterGrader(98)).toEqual("A+");
    expect(code.letterGrader(92)).toEqual("A-");
  });
});

describe('graderTests', function() {
  it('letterGrader( score ) is run and returns an error msg', function () {
    expect(code.letterGrader("lizard")).toEqual("lizard not a valid score");
  });
});

describe('avgTests', function() {
  it('averageGrade( array ) is run and returns a mean score', function () {
    expect(code.averageGrade([90, 95, 87, 60])).toEqual("83");
  });
});

describe('avgTests', function() {
  it('medianGrade( array ) is run and returns a median score of the scores array', function () {
    expect(code.medianGrade([52,80,80,86,94])).toEqual("80");
  });
});

describe('avgTests', function() {
  it('modeGrade( array ) is run and returns a mode of the scores array', function () {
    expect(code.modeGrade([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual("92");
  });
})

describe('avgTests', function() {
  it('modeGrade( array ) is run and returns a mode of the array', function () {
    expect(code.modeGrade([82, 92, 82, 91, 92, 89, 82, 100, 86])).toEqual("82");
  });
})


