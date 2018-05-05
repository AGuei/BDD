/* eslint-env jasmine, browser, webextensions, amd */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    factory(
      require('../openIndexedDB')
    );
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      'openIndexedDB'
    ], factory);
  } else {
    // Browser globals
    factory(root.openIndexedDB);
  }
}(this, function factory (openIndexedDB) {
  describe('open indexedDB', () => {
    beforeEach(() => {
      window.indexedDB = {
        open: (dbName, version) => {
        },
        deleteDatabase: () => {
        }
      };
      spyOn(window.indexedDB, 'open');
      spyOn(console, 'log');
      openIndexedDB('test', 1);
    });
    it('should call indexedDB.open to create a request', () => {
      expect(window.indexedDB.open).toHaveBeenCalled();
      expect(window.indexedDB.open).toHaveBeenCalledWith('test', 1);
    });
    it('should call console.log when window.indexedDB don\'t exist', () => {
      delete window.indexedDB;
      openIndexedDB('test', 1);
      expect(window.indexedDB).toBeUndefined();
      expect(console.log).toHaveBeenCalled();
    });
  });
}))
;
