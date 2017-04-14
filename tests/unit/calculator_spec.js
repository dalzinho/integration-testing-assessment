var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('multiplies 3 by 5 and gets 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');

    assert.equal(15, calculator.runningTotal);
  }
    );

  it('divides 21 by 7 and gets 3', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');


    assert.equal(3, calculator.runningTotal);
  });

  it('adds 1 and 4 and gets 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');

    assert.equal(5, calculator.runningTotal);
  });

  it('subtracts 4 from 7 and gets 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');

    assert.equal(3, calculator.runningTotal);
  });

  it('concatenates multiple button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    assert.equal(12345, calculator.runningTotal);
  });

  it('chains multiple operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(4, calculator.runningTotal);
  });

  it('clears the running total without affecting the calculation', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 9)
  });

});
