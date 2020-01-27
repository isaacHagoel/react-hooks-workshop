/*
 * This implementation loosely follows the 'module pattern' which is quite common in Javascript (regardless of React).
 */
const makeHooks = function() {
    let _singleVal;
    let _vals = [], idx;
    return {
      /* This is a simple state management mechanism that supports a single state object, what React actually has is more
       * similar to the one below but this is easier to understand as a first step.
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
};

/* In order to not expose our internals and allow each importer to have its own context.
 * Notice that two instances of the same component will share the state which is NOT what we want (and not what React does),
 * this is just for intuition (we can make a context per instance by wrapping components instantiation, which React controls)
 */
export const initHooks = () => makeHooks();

