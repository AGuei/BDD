/* eslint-env jasmine, browser, webextensions, amd */
/* eslint-disable no-unused-vars */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else {
    // Browser globals
    root.openIndexedDB = factory();
  }
}(this, function factory () {
  function openIndexedDB (name, version) {
    let indexedDB = window.indexedDB;
    if (!indexedDB) {
      console.log('your browser don\'t support indexedDB');
    } else {
      let request = indexedDB.open(name, version);
    }
  }
  return openIndexedDB;
}));
