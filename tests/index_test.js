/* eslint-disable linebreak-style */
/* global describe it */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';
import { EventBus, EventBusSingleton } from '../src';

describe('index', function () {
  describe('event bus', function () {
    it('basic test', function () {
      // 1. ARRANGE
      const eventBus = new EventBus();

      const eventName = 'event1';
      const callback = sinon.stub();
      eventBus.subscribe(eventName, callback);
      // 2. ACT
      eventBus.publish(eventName, 'message #1');
      // 3. ASSERT
      expect(callback.calledOnce).to.be.true;
      expect(callback.calledWith('message #1')).to.be.true;
    });
  });

  describe('event bus singleton', function () {
    it('basic test', function () {
      // 1. ARRANGE
      const eventName = 'event1';
      const callback = sinon.stub();
      EventBusSingleton.subscribe(eventName, callback);
      // 2. ACT
      EventBusSingleton.publish(eventName, 'message #1');
      // 3. ASSERT
      expect(callback.calledOnce).to.be.true;
      expect(callback.calledWith('message #1')).to.be.true;
    });
  });
});
