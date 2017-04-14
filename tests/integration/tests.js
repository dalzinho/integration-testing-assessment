var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  var running_total;

 beforeEach(function() {
   browser.ignoreSynchronization = true;
   browser.get('http://localhost:3000');
   running_total = element(by.css('#running_total'));

 });

 // write integration tests here in the form of “it should do something...”

 it('should have working number buttons', function(){
   element(by.css('#number2')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('2')
 });

 it('should update the running total display when numbers are pressed', function(){
  element(by.css('#number1')).click();
  element(by.css('#number2')).click();
  element(by.css('#number3')).click();
  element(by.css('#number4')).click();
  element(by.css('#number5')).click();
  element(by.css('#number6')).click();
  element(by.css('#number7')).click();
  element(by.css('#number8')).click();
  element(by.css('#number9')).click();
  element(by.css('#number0')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('1234567890');
 });

 it('should update the display when a new operator button is pressed', function(){
  element(by.css('#number1')).click();
  element(by.css('#operator_add')).click();

  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('3');



 });

 it('can chain multiple operations together', function(){
  element(by.css('#number1')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('9');
 });

 it('works as expected for positive numbers', function(){
  element(by.css('#number7')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('9');
 });

 // it('works as expected for negative numbers');

 // it('works as expected for decimal numbers');

 // it('works as expected for large numbers');

 // it('shows error message when dividing by zero');

});