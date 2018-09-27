import chai from 'chai';
const sinon = require('sinon');
import {
  Event
} from '../common_problems/events';


chai.should();

describe('Events', () => {


  beforeEach(function () {

    sinon.spy(console, 'log');

  });

  afterEach(() => {
    console.log.restore();

  });

  it('should define function correctly', () => {
    (typeof (Event)).should.equal('function');
  });

  it('should add multiple event on "on"', () => {


    let ev = new Event();
    ev.on('log', function () {

    });

    ev.on('log', function () {

    });

    ev.events.hasOwnProperty('log').should.equal(true);
    ev.events['log'].length.should.equal(2);

  });
  it('should trigger multiple events on "trigger"', () => {



    let ev = new Event();
    ev.on('log', function () {
      console.log("Hello!");
    });
    ev.on('log', function () {
      console.log("There!");
    });

    ev.trigger('log');

    console.log.calledWith( 'Hello!');
    console.log.calledWith( 'There1!');

    //sinon.assert.calledWith(spy, 'Hello!');
    //sinon.assert.calledWith(spy, 'There!');


  });

  it('should turn off events on "off"', () => {


    let ev = new Event();
    ev.on('log', function () {
      console.log("Hello!");
    });
    ev.on('log', function () {
      console.log("There!");
    });

    ev.off('log');
    ev.trigger('log');
    
    let spyCall=console.log.getCall(0);
    (spyCall===null).should.equal(true);
 


  });





})