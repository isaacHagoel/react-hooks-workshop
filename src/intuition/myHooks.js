/*
 * This implementation follows the 'module pattern' which is quite common in Javascript (regardless of React).
 */
export const MyReact = function() {
    let _singleVal;
    let _vals = [], idx;
    return {
      /* This is a simple state management mechanism that supports a single state object, what React actually has is more
       * similar to the one below but this is easier to understand as a first step.
       * It is worth noting that it is a single state per importer but it is NOT a singleton (each importer gets a new isolated scope)
       */
      useSingleState: function (initialValue) {
          _singleVal = _singleVal || initialValue;
          function setState(setter) {
              if (typeof setter === 'function') {
                 _singleVal = setter(_singleVal);
              }
              else {
                  _singleVal = setter;
              }
          }
          return [_singleVal, setState];
      },

    ////////// Don't read below until you fully understand the example above ///////////////
      useState: function(initialValue) {
          idx = idx !== undefined ? idx + 1 : 0;
          _vals[idx] = _vals[idx] || initialValue;
          /* If we don't freeze the current idx like we do in the next line,
          * all of the setters will update the same idx, the wonders of closures!
          */
          const closureIdx = idx;
          function setState(setter) {
              if (typeof setter === 'function') {
                  _vals[closureIdx] = setter(_vals[closureIdx]);
              }
              else {
                  _vals[closureIdx] = setter;
              }
          }
          return [_vals[closureIdx], setState];
      },
      // A helper method because we are not part of the rendering engine :)
      resetIdx: function () {
        idx = undefined;
      }
    };
}();
