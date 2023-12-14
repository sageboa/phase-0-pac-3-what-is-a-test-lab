require('./root.js');

const expect = require('expect');
const { name, height, message } = require('../index.js');

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      console.log('Actual name:', name);
      expect(name).toEqual('Joe');
    });
  });

  describe('Height', () => {
    it('is less than 40 and greater than 0', () => {
      console.log('Actual height:', height);
      expect(height).toBeGreaterThan(40);
      expect(height).toBeGreaterThan
    });
  });

  describe('Message', () => {
    it('gives the name and height', () => {
      console.log('Actual message:', message);
      expect(message).toContain(name);
      expect(message).toContain(height);
    });
  });
});
