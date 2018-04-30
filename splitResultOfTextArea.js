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
    root.splitResultOfTextArea = factory();
  }
}(this, function factory () {
  function splitResultOfTextArea (textarea) {
    let result = textarea.split(/\n\n/).filter(function (item) {
      return item !== '';
    });
    if (result.length > 1) {
      return result.map(item => {
        return item.split(/\n/).filter(function (item) {
          return item !== '';
        });
      });
    } else {
      return result[0].split(/\n/).filter(function (item) {
        return item !== '';
      });
    }
  }
  return splitResultOfTextArea;
}));
