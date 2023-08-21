(self["webpackChunkbrowser_extension"] = self["webpackChunkbrowser_extension"] || []).push([[771],{

/***/ 30838:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(70846);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(76644);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Select/SelectProvider.jsx


const noop = () => {};

const SelectContext = /*#__PURE__*/(0,react.createContext)({
  currentSelect: null,
  setCurrentSelect: noop
});
const SelectProvider = ({
  currentSelect: currentSelectProp = null,
  children
}) => {
  const [currentSelect, setCurrentSelect] = (0,react.useState)(currentSelectProp);
  const context = (0,react.useMemo)(() => {
    return {
      currentSelect,
      setCurrentSelect
    };
  }, [currentSelect]);
  return /*#__PURE__*/react.createElement(SelectContext.Provider, {
    value: context
  }, children);
};
const useSelect = id => {
  const {
    currentSelect,
    setCurrentSelect
  } = (0,react.useContext)(SelectContext);
  const hidden = currentSelect !== id;
  const setHidden = (0,react.useCallback)(hide => {
    setCurrentSelect(hide ? null : id);
  }, [setCurrentSelect, id]);
  return [hidden, setHidden];
};
// EXTERNAL MODULE: ./Extension/src/common/translators/reactTranslator.js
var reactTranslator = __webpack_require__(38647);
// EXTERNAL MODULE: ./Extension/src/common/translators/i18n.js
var i18n = __webpack_require__(57122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(41114);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(23229);
;// CONCATENATED MODULE: ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ const resolve_pathname = (resolvePathname);

;// CONCATENATED MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function tiny_invariant_esm_invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? prefix + ": " + provided : prefix;
    throw new Error(value);
}



;// CONCATENATED MODULE: ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function history_createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,esm_extends/* default */.Z)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function history_locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? 0 : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? 0 : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : tiny_invariant_esm_invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return history_createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.Z)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = history_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = history_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : tiny_invariant_esm_invariant(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return history_createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.Z)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = history_createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? 0 : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = history_createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? 0 : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.Z)(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? history_createLocation(entry, undefined, createKey()) : history_createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = history_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = history_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}



// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3660);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/mini-create-react-context/dist/esm/index.js





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    (0,inheritsLoose/* default */.Z)(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types_default()).object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    (0,inheritsLoose/* default */.Z)(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types_default()).object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react.createContext || createReactContext;

/* harmony default export */ const esm = (index);

// EXTERNAL MODULE: ./node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(21737);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(56041);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(59679);
;// CONCATENATED MODULE: ./node_modules/react-router/esm/react-router.js













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = esm();
  context.displayName = name;
  return context;
};

var historyContext = /*#__PURE__*/createNamedContext("Router-History");

var context = /*#__PURE__*/createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        _this._pendingLocation = location;
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._isMounted = true;

    if (this.unlisten) {
      // Any pre-mount location changes have been captured at
      // this point, so unregister the listener.
      this.unlisten();
    }

    if (!this.props.staticContext) {
      this.unlisten = this.props.history.listen(function (location) {
        if (_this2._isMounted) {
          _this2.setState({
            location: location
          });
        }
      });
    }

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /*#__PURE__*/react.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react.Component);

if (false) {}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = pathToRegexp.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp_default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? 0 : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  false ? 0 : tiny_invariant_esm_invariant(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,esm_extends/* default */.Z)({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }

      return /*#__PURE__*/react.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? 0 : children(props) : children : component ? /*#__PURE__*/react.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? 0 : children(props) : null);
    });
  };

  return Route;
}(react.Component);

if (false) {}

function react_router_addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,esm_extends/* default */.Z)({}, location, {
    pathname: react_router_addLeadingSlash(basename) + location.pathname
  });
}

function react_router_stripBasename(basename, location) {
  if (!basename) return location;
  var base = react_router_addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,esm_extends/* default */.Z)({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}

function staticHandler(methodName) {
  return function () {
      false ? 0 : tiny_invariant_esm_invariant(false) ;
  };
}

function react_router_noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return react_router_noop;
    };

    _this.handleBlock = function () {
      return react_router_noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, history_createLocation(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return react_router_addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: react_router_stripBasename(basename, history_createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /*#__PURE__*/react.createElement(Router, (0,esm_extends/* default */.Z)({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : tiny_invariant_esm_invariant(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react.Children.forEach(_this.props.children, function (child) {
        if (match == null && /*#__PURE__*/react.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,esm_extends/* default */.Z)({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? /*#__PURE__*/react.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : invariant(false) : void 0;
      return /*#__PURE__*/React.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoistStatics(C, Component);
}

var useContext = react.useContext;
function useHistory() {
  if (false) {}

  return useContext(historyContext);
}
function useLocation() {
  if (false) {}

  return useContext(context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, key, global; }



;// CONCATENATED MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? history_createLocation(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,esm_extends/* default */.Z)({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : tiny_invariant_esm_invariant(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,esm_extends/* default */.Z)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = createPath(context.location) === createPath(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : tiny_invariant_esm_invariant(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = (0,esm_extends/* default */.Z)({}, style, activeStyle);
    }

    var props = (0,esm_extends/* default */.Z)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }



// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js + 17 modules
var mobxreact_esm = __webpack_require__(82497);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8356);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Settings/SettingsSection.jsx



const SettingsSection = props => {
  const {
    title,
    description,
    renderBackButton,
    id,
    inlineControl,
    children,
    disabled,
    mode
  } = props;
  const settingGroupClassName = classnames_default()('settings__group', {
    'settings__group--disabled': disabled
  });
  const titleContainerClass = classnames_default()('title__container', {
    'title__container--small': mode === 'smallContainer',
    'title__container--back': renderBackButton,
    'title__container--sub': mode === 'subTitle',
    'title__container--control': id
  });
  const titleClass = classnames_default()('title', {
    'title--back-btn': renderBackButton,
    'title--sub': mode === 'subTitle'
  });
  return /*#__PURE__*/react.createElement("div", {
    className: settingGroupClassName,
    key: title
  }, /*#__PURE__*/react.createElement("label", {
    className: titleContainerClass,
    htmlFor: id
  }, renderBackButton ? renderBackButton() : /*#__PURE__*/react.createElement("div", {
    className: "title__inner"
  }, title && /*#__PURE__*/react.createElement("h2", {
    className: titleClass
  }, title), description && /*#__PURE__*/react.createElement("div", {
    className: "title__desc"
  }, description)), inlineControl && /*#__PURE__*/react.createElement("div", {
    className: "setting__container setting__container--inline setting__inline-control"
  }, inlineControl)), /*#__PURE__*/react.createElement("div", null, children));
};


// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Checkbox/index.js + 2 modules
var Checkbox = __webpack_require__(7681);
// EXTERNAL MODULE: ./Extension/src/pages/common/hooks/useOutsideClick.js
var useOutsideClick = __webpack_require__(31479);
// EXTERNAL MODULE: ./Extension/src/pages/common/hooks/useOutsideFocus.js
var useOutsideFocus = __webpack_require__(40536);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icon.jsx
var Icon = __webpack_require__(87235);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(35491);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(19532);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(48190);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(47630);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(60664);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(82563);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/common/components/ui/Select/select.pcss
var Select_select = __webpack_require__(79461);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Select/select.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Select_select/* default */.Z, options);




       /* harmony default export */ const ui_Select_select = (Select_select/* default */.Z && Select_select/* default.locals */.Z.locals ? Select_select/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Select/Select.jsx






const Select = ({
  id,
  handler,
  options,
  value
}) => {
  const ref = (0,react.useRef)(null);
  const refList = (0,react.useRef)(null);
  const [hidden, setHidden] = useSelect(id);

  const renderItems = () => options.map(option => {
    const {
      value: currentValue,
      title
    } = option;

    const handleOptionClick = e => {
      e.stopPropagation();
      handler(currentValue);
      setHidden(true);
    };

    return /*#__PURE__*/react.createElement("button", {
      type: "button",
      className: "select__item",
      onClick: handleOptionClick,
      key: currentValue,
      value: currentValue
    }, title);
  });

  (0,react.useEffect)(() => {
    return () => {
      setHidden(true);
    };
  }, [setHidden]);
  (0,useOutsideClick/* useOutsideClick */.O)(ref, () => {
    setHidden(true);
  });
  (0,useOutsideFocus/* useOutsideFocus */.W)(refList, () => {
    setHidden(true);
  });

  const handleSelectClick = e => {
    e.stopPropagation();
    setHidden(!hidden);
  };

  const currentValue = options.find(i => i.value === value);
  const currentTitle = currentValue.title;
  return /*#__PURE__*/react.createElement("div", {
    id: id,
    className: "select",
    ref: ref
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "select__value",
    onClick: handleSelectClick
  }, currentTitle), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#select",
    classname: "icon--select select__ico"
  }), !hidden && /*#__PURE__*/react.createElement("div", {
    className: "select__list",
    ref: refList
  }, renderItems(options)));
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Select/index.js

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Settings/TextInput/input.pcss
var input = __webpack_require__(11586);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Settings/TextInput/input.pcss

      
      
      
      
      
      
      
      
      

var input_options = {};

input_options.styleTagTransform = (styleTagTransform_default());
input_options.setAttributes = (setAttributesWithoutAttributes_default());

      input_options.insert = insertBySelector_default().bind(null, "head");
    
input_options.domAPI = (styleDomAPI_default());
input_options.insertStyleElement = (insertStyleElement_default());

var input_update = injectStylesIntoStyleTag_default()(input/* default */.Z, input_options);




       /* harmony default export */ const TextInput_input = (input/* default */.Z && input/* default.locals */.Z.locals ? input/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Settings/TextInput/TextInput.jsx




const TextInput = props => {
  const {
    id,
    value,
    handler,
    placeholder,
    disabled
  } = props;

  const changeHandler = e => {
    // eslint-disable-next-line no-shadow
    const {
      target: {
        name: id,
        value: data
      }
    } = e;
    handler({
      id,
      data
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "input"
  }, /*#__PURE__*/react.createElement("input", {
    disabled: disabled,
    type: "number",
    name: id,
    value: value,
    onChange: changeHandler,
    id: id,
    className: "input__in",
    placeholder: placeholder
  }));
};

TextInput.defaultProps = {
  placeholder: ''
};
TextInput.propTypes = {
  id: (prop_types_default()).string.isRequired,
  value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
  handler: (prop_types_default()).func.isRequired,
  placeholder: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
};

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Settings/TextInput/index.js

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Settings/Textarea/textarea.pcss
var Textarea_textarea = __webpack_require__(5470);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Settings/Textarea/textarea.pcss

      
      
      
      
      
      
      
      
      

var textarea_options = {};

textarea_options.styleTagTransform = (styleTagTransform_default());
textarea_options.setAttributes = (setAttributesWithoutAttributes_default());

      textarea_options.insert = insertBySelector_default().bind(null, "head");
    
textarea_options.domAPI = (styleDomAPI_default());
textarea_options.insertStyleElement = (insertStyleElement_default());

var textarea_update = injectStylesIntoStyleTag_default()(Textarea_textarea/* default */.Z, textarea_options);




       /* harmony default export */ const Settings_Textarea_textarea = (Textarea_textarea/* default */.Z && Textarea_textarea/* default.locals */.Z.locals ? Textarea_textarea/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Settings/Textarea/Textarea.jsx




const Textarea = props => {
  const {
    id,
    value,
    handler,
    placeholder,
    disabled
  } = props;

  const changeHandler = e => {
    // eslint-disable-next-line no-shadow
    const {
      target: {
        name: id,
        value: data
      }
    } = e;
    handler({
      id,
      data
    });
  };

  return /*#__PURE__*/react.createElement("textarea", {
    disabled: disabled,
    name: id,
    onChange: changeHandler,
    "aria-label": id,
    className: "textarea",
    defaultValue: value,
    placeholder: placeholder
  });
};

Textarea.defaultProps = {
  placeholder: ''
};
Textarea.propTypes = {
  id: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).string.isRequired,
  handler: (prop_types_default()).func.isRequired,
  placeholder: (prop_types_default()).string
};

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Settings/Textarea/index.js

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Settings/Setting.jsx





const SETTINGS_TYPES = {
  CHECKBOX: 'checkbox',
  SELECT: 'select',
  INPUT: 'input',
  TEXTAREA: 'textarea'
};
const Setting = props => {
  const {
    type
  } = props;

  switch (type) {
    case SETTINGS_TYPES.CHECKBOX:
      {
        const {
          id,
          handler,
          inverted,
          value,
          label,
          className,
          disabled
        } = props;
        return /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
          id: id,
          handler: handler,
          inverted: inverted,
          value: value,
          label: label,
          className: className,
          disabled: disabled
        });
      }

    case SETTINGS_TYPES.SELECT:
      {
        const {
          id,
          handler,
          options,
          value
        } = props;

        const changeHandler = currentValue => {
          let dataValue = parseInt(currentValue, 10);

          if (Number.isNaN(dataValue)) {
            dataValue = currentValue;
          }

          handler({
            id,
            data: dataValue
          });
        };

        return /*#__PURE__*/react.createElement(Select, {
          id: id,
          handler: changeHandler,
          options: options,
          value: value
        });
      }

    case SETTINGS_TYPES.INPUT:
      {
        const {
          id,
          value,
          handler,
          placeholder,
          disabled
        } = props;
        return /*#__PURE__*/react.createElement(TextInput, {
          id: id,
          disabled: disabled,
          value: value,
          handler: handler,
          placeholder: placeholder
        });
      }

    case SETTINGS_TYPES.TEXTAREA:
      {
        const {
          id,
          value,
          handler,
          placeholder,
          disabled
        } = props;
        return /*#__PURE__*/react.createElement(Textarea, {
          id: id,
          disabled: disabled,
          value: value,
          handler: handler,
          placeholder: placeholder
        });
      }

    default:
      throw new Error(`
                There is no right component for a type: "${type}".
                Available types: ${Object.values(SETTINGS_TYPES).join(', ')}
            `);
  }
};
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Settings/SettingsSet.jsx




const SettingsSet = props => {
  const {
    title,
    description,
    children,
    disabled,
    inlineControl,
    hideBorder
  } = props;
  const settingClassName = classnames_default()({
    setting: true,
    'setting--disabled': disabled,
    'setting--hide-border': hideBorder
  });
  return /*#__PURE__*/react.createElement("div", {
    className: settingClassName
  }, /*#__PURE__*/react.createElement("div", {
    className: "setting__container setting__container--vertical"
  }, /*#__PURE__*/react.createElement("div", {
    className: "setting__container setting__container--horizontal"
  }, /*#__PURE__*/react.createElement("div", {
    className: "setting__info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "setting__title"
  }, title), description && /*#__PURE__*/react.createElement("div", {
    className: "setting__desc"
  }, description)), inlineControl && /*#__PURE__*/react.createElement("div", {
    className: "setting__container setting__container--inline setting__inline-control"
  }, inlineControl)), children));
};

SettingsSet.defaultProps = {
  title: '',
  description: '',
  children: null,
  disabled: false,
  inlineControl: null
};
SettingsSet.propTypes = {
  title: (prop_types_default()).string,
  description: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).element, (prop_types_default()).node]),
  children: prop_types_default().oneOfType([(prop_types_default()).element, prop_types_default().arrayOf((prop_types_default()).element)]),
  disabled: (prop_types_default()).bool,
  inlineControl: (prop_types_default()).element
};

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Settings/SettingsSetCheckbox.jsx



 // clickable setting with a label wrap

const SettingsSetCheckbox = props => {
  const {
    title,
    description,
    children,
    disabled,
    id,
    handler,
    label,
    inverted,
    value,
    sectionDisabled
  } = props;
  return /*#__PURE__*/react.createElement("label", {
    htmlFor: id,
    className: "setting-checkbox"
  }, /*#__PURE__*/react.createElement(SettingsSet, {
    title: title,
    description: description,
    disabled: disabled,
    inlineControl: /*#__PURE__*/react.createElement(Setting, {
      id: id,
      type: SETTINGS_TYPES.CHECKBOX,
      inverted: inverted,
      label: label,
      handler: handler,
      value: value,
      disabled: sectionDisabled
    })
  }, children));
};

SettingsSetCheckbox.propTypes = {
  id: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
};

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Settings/SettingSetSelect.jsx





const SettingSetSelect = ({
  title,
  description,
  ...props
}) => {
  const [hidden, setHidden] = useSelect(props.id);

  const handleSettingClick = e => {
    e.stopPropagation();
    setHidden(!hidden);
  };

  return (
    /*#__PURE__*/
    // Interaction with the keyboard creates problems,
    // leaving the possibility of interaction through
    // the keyboard only with the internal selector
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    react.createElement("div", {
      className: "setting-checkbox setting-checkbox--button",
      onClick: handleSettingClick
    }, /*#__PURE__*/react.createElement(SettingsSet, {
      title: title,
      description: description,
      inlineControl: /*#__PURE__*/react.createElement(Setting, (0,esm_extends/* default */.Z)({
        type: SETTINGS_TYPES.SELECT
      }, props))
    }))
  );
};
// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(31056);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js
var initializerDefineProperty = __webpack_require__(5497);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js
var applyDecoratedDescriptor = __webpack_require__(26813);
// EXTERNAL MODULE: ./Extension/src/common/log.js
var log = __webpack_require__(9224);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/Editor/savingFSM.js
var savingFSM = __webpack_require__(85797);
// EXTERNAL MODULE: ./Extension/src/pages/common/constants.js
var constants = __webpack_require__(79735);
// EXTERNAL MODULE: ./Extension/src/pages/helpers.js
var helpers = __webpack_require__(96746);
// EXTERNAL MODULE: ./Extension/src/pages/services/messenger.js
var messenger = __webpack_require__(37916);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/Search/constants.js
const SEARCH_FILTERS = {
  ALL: 'all',
  ENABLED: 'enabled',
  DISABLED: 'disabled'
};
const TABLET_SCREEN_WIDTH = 1024;
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(89219);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/helpers.js

/**
 * Sorts filters by enabled status and displayNumber
 * @param filters
 */

const sortFilters = filters => {
  const sorted = [...filters].sort((a, b) => {
    // sort by enabled
    const enabledA = !!a.enabled;
    const enabledB = !!b.enabled;

    if (enabledA !== enabledB) {
      return enabledB - enabledA;
    } // sort by groupId


    if (a.groupId !== b.groupId) {
      return a.groupId - b.groupId;
    } // sort by display number


    if (a.displayNumber && b.displayNumber) {
      return a.displayNumber - b.displayNumber;
    }

    if (a.displayNumber) {
      return 1;
    }

    if (b.displayNumber) {
      return -1;
    }

    return 0;
  });
  return sorted;
};
/**
 * Updates filters state without changing order
 * @param currentFilters
 * @param newFilters
 */

const updateFilters = (currentFilters, newFilters) => {
  const updatedFilters = [...currentFilters];
  newFilters.forEach(newFilter => {
    const currentFilterIdx = currentFilters.findIndex(currentFilter => {
      return currentFilter.filterId === newFilter.filterId;
    });

    if (currentFilterIdx < 0) {
      updatedFilters.push(newFilter);
    } else {
      updatedFilters[currentFilterIdx] = newFilter;
    }
  });
  return updatedFilters;
};
/**
 * Updates groups state without changing order
 * @param currentGroups
 * @param newGroups
 */

const updateGroups = (currentGroups, newGroups) => {
  const updatedGroups = [...currentGroups];
  newGroups.forEach(newGroup => {
    const currentGroupIdx = currentGroups.findIndex(currentGroup => {
      return currentGroup.groupId === newGroup.groupId;
    });

    if (currentGroupIdx < 0) {
      updatedGroups.push(newGroup);
    } else {
      updatedGroups[currentGroupIdx] = newGroup;
    }
  });
  return updatedGroups;
};
const sortGroupsOnSearch = groups => {
  const sortedGroups = sortBy_default()(groups, 'displayNumber').sort((a, b) => {
    // enabled first
    if (a.enabled && !b.enabled) {
      return -1;
    }

    if (!a.enabled && b.enabled) {
      return 1;
    }

    return 0;
  });
  return sortedGroups;
};
// EXTERNAL MODULE: ./Extension/src/pages/options/options-storage/index.js + 1 modules
var options_storage = __webpack_require__(9698);
// EXTERNAL MODULE: ./Extension/src/common/constants.js
var common_constants = __webpack_require__(84568);
;// CONCATENATED MODULE: ./Extension/src/pages/options/stores/SettingsStore.js




var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35;











const savingAllowlistService = (0,savingFSM/* createSavingService */.iO)({
  id: 'allowlist',
  services: {
    saveData: async (_, e) => {
      /**
       * If saveAllowlist executes faster than MIN_EXECUTION_TIME_REQUIRED_MS we increase
       * execution time for smoother user experience
       */
      const MIN_EXECUTION_TIME_REQUIRED_MS = 500;
      const start = Date.now();
      await messenger/* messenger.saveAllowlist */.d.saveAllowlist(e.value);
      const end = Date.now();
      const timePassed = end - start;

      if (timePassed < MIN_EXECUTION_TIME_REQUIRED_MS) {
        await (0,helpers/* sleep */._v)(MIN_EXECUTION_TIME_REQUIRED_MS - timePassed);
      }
    }
  }
});
let SettingsStore = (_class = class SettingsStore {
  constructor(rootStore) {
    this.KEYS = {
      ALLOW_ACCEPTABLE_ADS: 'allowAcceptableAds',
      BLOCK_KNOWN_TRACKERS: 'blockKnownTrackers',
      STRIP_TRACKING_PARAMETERS: 'stripTrackingParameters'
    };

    (0,initializerDefineProperty/* default */.Z)(this, "settings", _descriptor, this);

    (0,initializerDefineProperty/* default */.Z)(this, "optionsReadyToRender", _descriptor2, this);

    (0,initializerDefineProperty/* default */.Z)(this, "version", _descriptor3, this);

    (0,initializerDefineProperty/* default */.Z)(this, "filters", _descriptor4, this);

    (0,initializerDefineProperty/* default */.Z)(this, "categories", _descriptor5, this);

    (0,initializerDefineProperty/* default */.Z)(this, "visibleFilters", _descriptor6, this);

    (0,initializerDefineProperty/* default */.Z)(this, "rulesCount", _descriptor7, this);

    (0,initializerDefineProperty/* default */.Z)(this, "allowAcceptableAds", _descriptor8, this);

    (0,initializerDefineProperty/* default */.Z)(this, "blockKnownTrackers", _descriptor9, this);

    (0,initializerDefineProperty/* default */.Z)(this, "stripTrackingParameters", _descriptor10, this);

    (0,initializerDefineProperty/* default */.Z)(this, "allowlist", _descriptor11, this);

    (0,initializerDefineProperty/* default */.Z)(this, "savingAllowlistState", _descriptor12, this);

    (0,initializerDefineProperty/* default */.Z)(this, "filtersUpdating", _descriptor13, this);

    (0,initializerDefineProperty/* default */.Z)(this, "selectedGroupId", _descriptor14, this);

    (0,initializerDefineProperty/* default */.Z)(this, "isChrome", _descriptor15, this);

    (0,initializerDefineProperty/* default */.Z)(this, "searchInput", _descriptor16, this);

    (0,initializerDefineProperty/* default */.Z)(this, "searchSelect", _descriptor17, this);

    (0,initializerDefineProperty/* default */.Z)(this, "allowlistEditorContentChanged", _descriptor18, this);

    (0,initializerDefineProperty/* default */.Z)(this, "allowlistEditorWrap", _descriptor19, this);

    (0,initializerDefineProperty/* default */.Z)(this, "fullscreenUserRulesEditorIsOpen", _descriptor20, this);

    (0,initializerDefineProperty/* default */.Z)(this, "allowlistSizeReset", _descriptor21, this);

    (0,initializerDefineProperty/* default */.Z)(this, "setFilterEnabledState", _descriptor22, this);

    (0,initializerDefineProperty/* default */.Z)(this, "setAllowlist", _descriptor23, this);

    (0,initializerDefineProperty/* default */.Z)(this, "getAllowlist", _descriptor24, this);

    (0,initializerDefineProperty/* default */.Z)(this, "appendAllowlist", _descriptor25, this);

    (0,initializerDefineProperty/* default */.Z)(this, "saveAllowlist", _descriptor26, this);

    (0,initializerDefineProperty/* default */.Z)(this, "setAllowlistEditorContentChangedState", _descriptor27, this);

    (0,initializerDefineProperty/* default */.Z)(this, "setSearchInput", _descriptor28, this);

    (0,initializerDefineProperty/* default */.Z)(this, "setSearchSelect", _descriptor29, this);

    (0,initializerDefineProperty/* default */.Z)(this, "sortFilters", _descriptor30, this);

    (0,initializerDefineProperty/* default */.Z)(this, "setFilters", _descriptor31, this);

    (0,initializerDefineProperty/* default */.Z)(this, "setVisibleFilters", _descriptor32, this);

    (0,initializerDefineProperty/* default */.Z)(this, "sortSearchGroups", _descriptor33, this);

    (0,initializerDefineProperty/* default */.Z)(this, "setGroups", _descriptor34, this);

    (0,initializerDefineProperty/* default */.Z)(this, "selectVisibleFilters", _descriptor35, this);

    (0,mobx_esm/* makeObservable */.rC)(this);
    this.rootStore = rootStore;
    savingAllowlistService.onTransition(state => {
      (0,mobx_esm/* runInAction */.z)(() => {
        this.savingAllowlistState = state.value;

        if (state.value === savingFSM/* STATES.SAVING */.PO.SAVING) {
          this.allowlistEditorContentChanged = false;
        }
      });
    });
  }

  async requestOptionsData(firstRender) {
    const data = await messenger/* messenger.getOptionsData */.d.getOptionsData();
    (0,mobx_esm/* runInAction */.z)(() => {
      this.settings = data.settings; // on first render we sort filters to show enabled on the top
      // filter should remain on the same place event after being enabled or disabled

      if (firstRender) {
        this.setFilters(sortFilters(data.filtersMetadata.filters));
      } else {
        // on the next filters updates, we update filters keeping order
        this.setFilters(updateFilters(this.filters, data.filtersMetadata.filters));
      } // do not rerender groups on its turning on/off while searching


      if (this.isSearching) {
        this.setGroups(updateGroups(this.categories, data.filtersMetadata.categories));
      } else {
        this.setGroups(data.filtersMetadata.categories);
      }

      this.rulesCount = data.filtersInfo.rulesCount;
      this.version = data.appVersion;
      this.constants = data.constants;
      this.setAllowAcceptableAds(data.filtersMetadata.filters);
      this.setBlockKnownTrackers(data.filtersMetadata.filters);
      this.setStripTrackingParameters(data.filtersMetadata.filters);
      this.isChrome = data.environmentOptions.isChrome;
      this.optionsReadyToRender = true;
      this.fullscreenUserRulesEditorIsOpen = data.fullscreenUserRulesEditorIsOpen;
    });
  }

  updateRulesCount(rulesCount) {
    this.rulesCount = rulesCount;
  }

  setSelectedGroupId(dirtyGroupId) {
    const groupId = Number.parseInt(dirtyGroupId, 10);

    if (Number.isNaN(groupId)) {
      this.selectedGroupId = null;
    } else {
      const groupExists = this.categories.find(category => category.groupId === groupId);

      if (groupExists) {
        this.selectedGroupId = groupId;
      } else {
        this.selectedGroupId = null;
      }
    }
  }

  updateSetting(settingId, value) {
    this.settings.values[settingId] = value;
    messenger/* messenger.changeUserSetting */.d.changeUserSetting(settingId, value);
  }

  async setFilterRelatedSettingState(filterId, optionKey, enabled) {
    const prevValue = this[optionKey];
    this[optionKey] = enabled;

    try {
      const relatedFilter = this.filters.find(f => f.filterId === filterId);

      if (enabled) {
        await messenger/* messenger.enableFilter */.d.enableFilter(filterId);
        await this.updateGroupSetting(relatedFilter.groupId, enabled);
      } else {
        await messenger/* messenger.disableFilter */.d.disableFilter(filterId);
      }

      relatedFilter.enabled = enabled;
      this.refreshFilter(relatedFilter);
    } catch (e) {
      (0,mobx_esm/* runInAction */.z)(() => {
        this[optionKey] = prevValue;
      });
    }
  }

  async setAllowAcceptableAdsState(enabled) {
    const {
      SEARCH_AND_SELF_PROMO_FILTER_ID
    } = this.constants.AntiBannerFiltersId;
    await this.setFilterRelatedSettingState(SEARCH_AND_SELF_PROMO_FILTER_ID, this.KEYS.ALLOW_ACCEPTABLE_ADS, !enabled);
  }

  async setBlockKnownTrackersState(enabled) {
    const {
      TRACKING_FILTER_ID
    } = this.constants.AntiBannerFiltersId;
    await this.setFilterRelatedSettingState(TRACKING_FILTER_ID, this.KEYS.BLOCK_KNOWN_TRACKERS, enabled);
  }

  async setStripTrackingParametersState(enabled) {
    const {
      URL_TRACKING_FILTER_ID
    } = this.constants.AntiBannerFiltersId;
    await this.setFilterRelatedSettingState(URL_TRACKING_FILTER_ID, this.KEYS.STRIP_TRACKING_PARAMETERS, enabled);
  }

  setSetting(filtersId, settingKey, filters) {
    const relatedFilter = filters.find(f => f.filterId === filtersId);
    this[settingKey] = !!relatedFilter.enabled;
  }

  setAllowAcceptableAds(filters) {
    const {
      SEARCH_AND_SELF_PROMO_FILTER_ID
    } = this.constants.AntiBannerFiltersId;
    this.setSetting(SEARCH_AND_SELF_PROMO_FILTER_ID, this.KEYS.ALLOW_ACCEPTABLE_ADS, filters);
  }

  setBlockKnownTrackers(filters) {
    const {
      TRACKING_FILTER_ID
    } = this.constants.AntiBannerFiltersId;
    this.setSetting(TRACKING_FILTER_ID, this.KEYS.BLOCK_KNOWN_TRACKERS, filters);
  }

  setStripTrackingParameters(filters) {
    const {
      URL_TRACKING_FILTER_ID
    } = this.constants.AntiBannerFiltersId;
    this.setSetting(URL_TRACKING_FILTER_ID, this.KEYS.STRIP_TRACKING_PARAMETERS, filters);
  }

  isFilterEnabled(filterId) {
    const filter = this.filters.find(f => f.filterId === filterId);
    return filter.enabled;
  }

  isCategoryEnabled(categoryId) {
    const category = this.categories.find(c => c.groupId === categoryId);
    return category.enabled;
  }

  isAllowAcceptableAdsFilterEnabled() {
    const {
      SEARCH_AND_SELF_PROMO_FILTER_ID
    } = this.constants.AntiBannerFiltersId;
    this.isFilterEnabled(SEARCH_AND_SELF_PROMO_FILTER_ID);
  }

  isBlockKnownTrackersFilterEnabled() {
    const {
      TRACKING_FILTER_ID
    } = this.constants.AntiBannerFiltersId;
    this.isFilterEnabled(TRACKING_FILTER_ID);
  }

  isStripTrackingParametersFilterEnabled() {
    const {
      URL_TRACKING_FILTER_ID
    } = this.constants.AntiBannerFiltersId;
    this.isFilterEnabled(URL_TRACKING_FILTER_ID);
  }

  get lastUpdateTime() {
    return Math.max(...this.filters.map(filter => filter.lastCheckTime || 0));
  }

  async updateGroupSetting(id, enabled) {
    await messenger/* messenger.updateGroupStatus */.d.updateGroupStatus(id, enabled);
    (0,mobx_esm/* runInAction */.z)(() => {
      const groupId = parseInt(id, 10);

      if (groupId === common_constants/* ANTIBANNER_GROUPS_ID.OTHER_FILTERS_GROUP_ID */.CI.OTHER_FILTERS_GROUP_ID && this.isAllowAcceptableAdsFilterEnabled()) {
        this.allowAcceptableAds = enabled;
      } else if (groupId === common_constants/* ANTIBANNER_GROUPS_ID.PRIVACY_FILTERS_GROUP_ID */.CI.PRIVACY_FILTERS_GROUP_ID) {
        if (this.isBlockKnownTrackersFilterEnabled()) {
          this.blockKnownTrackers = enabled;
        }

        if (this.isStripTrackingParametersFilterEnabled()) {
          this.stripTrackingParameters = enabled;
        }
      }

      this.categories.forEach(group => {
        if (group.groupId === groupId) {
          if (enabled) {
            // eslint-disable-next-line no-param-reassign
            group.enabled = true;
          } else {
            // eslint-disable-next-line no-param-reassign
            delete group.enabled;
          }
        }
      });
    });
  }

  refreshFilters(updatedFilters) {
    if (updatedFilters && updatedFilters.length) {
      updatedFilters.forEach(filter => this.refreshFilter(filter));
    }
  }

  refreshFilter(filter) {
    if (!filter) {
      return;
    }

    const idx = this.filters.findIndex(f => f.filterId === filter.filterId);

    if (idx !== -1) {
      Object.keys(filter).forEach(key => {
        this.filters[idx][key] = filter[key];
      });
    }
  }

  async updateFilterSetting(rawFilterId, enabled) {
    const filterId = Number.parseInt(rawFilterId, 10);
    this.setFilterEnabledState(filterId, enabled);

    try {
      const filters = await messenger/* messenger.updateFilterStatus */.d.updateFilterStatus(filterId, enabled);
      this.refreshFilters(filters); // update allow acceptable ads setting

      if (filterId === this.constants.AntiBannerFiltersId.SEARCH_AND_SELF_PROMO_FILTER_ID) {
        this.allowAcceptableAds = enabled;
      } else if (filterId === this.constants.AntiBannerFiltersId.TRACKING_FILTER_ID) {
        this.blockKnownTrackers = enabled;
      } else if (filterId === this.constants.AntiBannerFiltersId.URL_TRACKING_FILTER_ID) {
        this.stripTrackingParameters = enabled;
      }
    } catch (e) {
      log/* log.error */.c.error(e);
      this.setFilterEnabledState(filterId, !enabled);
    }
  }

  setFiltersUpdating(value) {
    this.filtersUpdating = value;
  }

  async updateFilters() {
    this.setFiltersUpdating(true);

    try {
      const filtersUpdates = await messenger/* messenger.updateFilters */.d.updateFilters();
      this.refreshFilters(filtersUpdates);
      setTimeout(() => {
        this.setFiltersUpdating(false);
      }, constants/* MIN_FILTERS_UPDATE_DISPLAY_DURATION */.Q);
      return filtersUpdates;
    } catch (error) {
      this.setFiltersUpdating(false);
      throw error;
    }
  }

  async addCustomFilter(filter) {
    const newFilter = await messenger/* messenger.addCustomFilter */.d.addCustomFilter(filter);

    if (!newFilter) {
      return;
    }

    (0,mobx_esm/* runInAction */.z)(() => {
      this.filters.push(newFilter);

      if (this.searchSelect !== SEARCH_FILTERS.ALL) {
        this.setSearchSelect(SEARCH_FILTERS.ALL);
      }
    });
  }

  async removeCustomFilter(filterId) {
    await messenger/* messenger.removeCustomFilter */.d.removeCustomFilter(filterId);
    (0,mobx_esm/* runInAction */.z)(() => {
      this.setFilters(this.filters.filter(filter => filter.filterId !== filterId));
      this.setVisibleFilters(this.visibleFilters.filter(filter => {
        return filter.filterId !== filterId;
      }));
    });
  }

  get isSearching() {
    return this.searchSelect !== SEARCH_FILTERS.ALL || this.searchInput;
  }
  /**
   * We do not sort filters on every filters data update for better UI experience
   * Filters sort happens when user exits from filters group, or changes search filters
   */


  get filtersToRender() {
    const searchInputString = this.searchInput.replace(common_constants/* WASTE_CHARACTERS */.XS, '\\$&');
    const searchQuery = new RegExp(searchInputString, 'ig');
    let selectedFilters;

    if (this.isSearching) {
      selectedFilters = this.visibleFilters;
    } else {
      selectedFilters = this.filters;
    }

    return selectedFilters.filter(filter => {
      if (Number.isInteger(this.selectedGroupId)) {
        return filter.groupId === this.selectedGroupId;
      }

      return true;
    }).filter(filter => {
      const nameIsMatching = filter.name.match(searchQuery);

      if (nameIsMatching) {
        return true;
      }

      if (filter.tagsDetails) {
        const tagKeywordIsMatching = filter.tagsDetails.some(tag => `#${tag.keyword}`.match(searchQuery));

        if (tagKeywordIsMatching) {
          return true;
        }
      } // AG-10491


      if (filter.trusted && filter.trusted === true) {
        const trustedTagMatching = `#${common_constants/* TRUSTED_TAG */.XR}`.match(searchQuery);

        if (trustedTagMatching) {
          return true;
        }
      }

      return false;
    });
  }

  get appearanceTheme() {
    if (!this.settings) {
      return null;
    }

    return this.settings.values[this.settings.names.APPEARANCE_THEME];
  }

  get showAdguardPromoInfo() {
    if (!this.settings) {
      return null;
    }

    return !this.settings.values[this.settings.names.DISABLE_SHOW_ADGUARD_PROMO_INFO];
  }

  async hideAdguardPromoInfo() {
    await this.updateSetting(this.settings.names.DISABLE_SHOW_ADGUARD_PROMO_INFO, true);
  }

  get allowlistEditorWrapState() {
    if (this.allowlistEditorWrap === null) {
      this.allowlistEditorWrap = options_storage/* optionsStorage.getItem */.P.getItem(options_storage/* optionsStorage.KEYS.ALLOWLIST_EDITOR_WRAP */.P.KEYS.ALLOWLIST_EDITOR_WRAP);
    }

    return this.allowlistEditorWrap;
  }

  toggleAllowlistEditorWrap() {
    this.allowlistEditorWrap = !this.allowlistEditorWrap;
    options_storage/* optionsStorage.setItem */.P.setItem(options_storage/* optionsStorage.KEYS.ALLOWLIST_EDITOR_WRAP */.P.KEYS.ALLOWLIST_EDITOR_WRAP, this.allowlistEditorWrap);
  }

  get footerRateShowState() {
    return !this.settings.values[this.settings.names.HIDE_RATE_BLOCK];
  }

  async hideFooterRateShow() {
    await this.updateSetting(this.settings.names.HIDE_RATE_BLOCK, true);
  }

  setFullscreenUserRulesEditorState(isOpen) {
    this.fullscreenUserRulesEditorIsOpen = isOpen;
  }

  get isFullscreenUserRulesEditorOpen() {
    return this.fullscreenUserRulesEditorIsOpen;
  }

  get userFilterEnabledSettingId() {
    return this.settings.names.USER_FILTER_ENABLED;
  }

  get userFilterEnabled() {
    return this.settings.values[this.userFilterEnabledSettingId];
  }

  setAllowlistSizeReset(value) {
    this.allowlistSizeReset = value;
  }

  get isUpdateFiltersButtonActive() {
    return this.filters.some(filter => filter.enabled && this.isCategoryEnabled(filter.groupId));
  }

}, (_descriptor = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "settings", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "optionsReadyToRender", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "version", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor4 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "filters", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor5 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "categories", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor6 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "visibleFilters", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor7 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "rulesCount", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor8 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "allowAcceptableAds", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor9 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "blockKnownTrackers", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor10 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "stripTrackingParameters", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor11 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "allowlist", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _descriptor12 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "savingAllowlistState", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return savingAllowlistService.initialState.value;
  }
}), _descriptor13 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "filtersUpdating", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor14 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "selectedGroupId", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor15 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "isChrome", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor16 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "searchInput", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _descriptor17 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "searchSelect", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return SEARCH_FILTERS.ALL;
  }
}), _descriptor18 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "allowlistEditorContentChanged", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor19 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "allowlistEditorWrap", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor20 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "fullscreenUserRulesEditorIsOpen", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor21 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "allowlistSizeReset", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "requestOptionsData", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "requestOptionsData"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "updateRulesCount", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "updateRulesCount"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setSelectedGroupId", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "setSelectedGroupId"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "updateSetting", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "updateSetting"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setAllowAcceptableAdsState", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "setAllowAcceptableAdsState"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setBlockKnownTrackersState", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "setBlockKnownTrackersState"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setStripTrackingParametersState", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "setStripTrackingParametersState"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setAllowAcceptableAds", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "setAllowAcceptableAds"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setBlockKnownTrackers", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "setBlockKnownTrackers"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setStripTrackingParameters", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "setStripTrackingParameters"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "lastUpdateTime", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "lastUpdateTime"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "updateGroupSetting", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "updateGroupSetting"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "refreshFilters", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "refreshFilters"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "refreshFilter", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "refreshFilter"), _class.prototype), _descriptor22 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setFilterEnabledState", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return (rawFilterId, enabled) => {
      const filterId = parseInt(rawFilterId, 10);
      this.filters.forEach(filter => {
        if (filter.filterId === filterId) {
          // eslint-disable-next-line no-param-reassign
          filter.enabled = !!enabled;
        }
      });
      this.visibleFilters.forEach(filter => {
        if (filter.filterId === filterId) {
          // eslint-disable-next-line no-param-reassign
          filter.enabled = !!enabled;
        }
      });
    };
  }
}), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "updateFilterSetting", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "updateFilterSetting"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setFiltersUpdating", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "setFiltersUpdating"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "updateFilters", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "updateFilters"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "addCustomFilter", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "addCustomFilter"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "removeCustomFilter", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "removeCustomFilter"), _class.prototype), _descriptor23 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setAllowlist", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return allowlist => {
      this.allowlist = allowlist;
    };
  }
}), _descriptor24 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "getAllowlist", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async () => {
      try {
        const {
          content
        } = await messenger/* messenger.getAllowlist */.d.getAllowlist();
        this.setAllowlist(content);
      } catch (e) {
        log/* log.debug */.c.debug(e);
      }
    };
  }
}), _descriptor25 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "appendAllowlist", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async allowlist => {
      await this.saveAllowlist(this.allowlist.concat('\n', allowlist));
    };
  }
}), _descriptor26 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "saveAllowlist", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async allowlist => {
      await savingAllowlistService.send(savingFSM/* EVENTS.SAVE */.FP.SAVE, {
        value: allowlist
      });
    };
  }
}), _descriptor27 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setAllowlistEditorContentChangedState", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return state => {
      this.allowlistEditorContentChanged = state;
    };
  }
}), _descriptor28 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setSearchInput", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return value => {
      this.searchInput = value;
      this.sortFilters();
      this.sortSearchGroups();
      this.selectVisibleFilters();
    };
  }
}), _descriptor29 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setSearchSelect", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return value => {
      this.searchSelect = value;
      this.sortFilters();
      this.sortSearchGroups();
      this.selectVisibleFilters();
    };
  }
}), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "isSearching", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "isSearching"), _class.prototype), _descriptor30 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "sortFilters", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.setFilters(sortFilters(this.filters));
    };
  }
}), _descriptor31 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setFilters", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return filters => {
      this.filters = filters;
    };
  }
}), _descriptor32 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setVisibleFilters", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return visibleFilters => {
      this.visibleFilters = visibleFilters;
    };
  }
}), _descriptor33 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "sortSearchGroups", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.setGroups(sortGroupsOnSearch(this.categories));
    };
  }
}), _descriptor34 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setGroups", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return categories => {
      this.categories = categories;
    };
  }
}), _descriptor35 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "selectVisibleFilters", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.visibleFilters = this.filters.filter(filter => {
        let searchMod;

        switch (this.searchSelect) {
          case SEARCH_FILTERS.ENABLED:
            searchMod = filter.enabled;
            break;

          case SEARCH_FILTERS.DISABLED:
            searchMod = !filter.enabled;
            break;

          default:
            searchMod = true;
        }

        return searchMod;
      });
    };
  }
}), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "filtersToRender", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "filtersToRender"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "appearanceTheme", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "appearanceTheme"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "showAdguardPromoInfo", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "showAdguardPromoInfo"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "hideAdguardPromoInfo", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "hideAdguardPromoInfo"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "allowlistEditorWrapState", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "allowlistEditorWrapState"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "toggleAllowlistEditorWrap", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "toggleAllowlistEditorWrap"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "footerRateShowState", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "footerRateShowState"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "hideFooterRateShow", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "hideFooterRateShow"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setFullscreenUserRulesEditorState", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "setFullscreenUserRulesEditorState"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "isFullscreenUserRulesEditorOpen", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "isFullscreenUserRulesEditorOpen"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "userFilterEnabledSettingId", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "userFilterEnabledSettingId"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "userFilterEnabled", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "userFilterEnabled"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setAllowlistSizeReset", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "setAllowlistSizeReset"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "isUpdateFiltersButtonActive", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "isUpdateFiltersButtonActive"), _class.prototype)), _class);
/* harmony default export */ const stores_SettingsStore = (SettingsStore);
// EXTERNAL MODULE: ./node_modules/nanoid/index.browser.js
var index_browser = __webpack_require__(32380);
;// CONCATENATED MODULE: ./Extension/src/pages/options/stores/UiStore.js




var UiStore_class, UiStore_descriptor;



let UiStore = (UiStore_class = class UiStore {
  constructor(rootStore) {
    (0,initializerDefineProperty/* default */.Z)(this, "notifications", UiStore_descriptor, this);

    this.rootStore = rootStore;
    (0,mobx_esm/* makeObservable */.rC)(this);
  }

  addNotification({
    title = '',
    description
  }) {
    const id = (0,index_browser/* nanoid */.x0)();
    this.notifications.push({
      id,
      title,
      description
    });
    return id;
  }

  removeNotification(id) {
    this.notifications = this.notifications.filter(notification => notification.id !== id);
  }

}, (UiStore_descriptor = (0,applyDecoratedDescriptor/* default */.Z)(UiStore_class.prototype, "notifications", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), (0,applyDecoratedDescriptor/* default */.Z)(UiStore_class.prototype, "addNotification", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(UiStore_class.prototype, "addNotification"), UiStore_class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(UiStore_class.prototype, "removeNotification", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(UiStore_class.prototype, "removeNotification"), UiStore_class.prototype)), UiStore_class);
/* harmony default export */ const stores_UiStore = (UiStore);
;// CONCATENATED MODULE: ./Extension/src/pages/options/stores/RootStore.js



 // Do not allow property change outside of store actions

(0,mobx_esm/* configure */.jQ)({
  enforceActions: 'observed'
});

class RootStore {
  constructor() {
    this.settingsStore = new stores_SettingsStore(this);
    this.uiStore = new stores_UiStore(this);
  }

}

const rootStore = /*#__PURE__*/(0,react.createContext)(new RootStore());
// EXTERNAL MODULE: ./Extension/src/pages/common/utils/export.js
var utils_export = __webpack_require__(22381);
// EXTERNAL MODULE: ./Extension/src/common/user-agent-utils.js
var user_agent_utils = __webpack_require__(3702);
// EXTERNAL MODULE: ./Extension/src/pages/constants.js
var pages_constants = __webpack_require__(32155);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/General/General.jsx













const filtersUpdatePeriodOptions = [{
  value: -1,
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_select_update_period_default')
}, {
  value: (0,helpers/* hoursToMs */.fg)(48),
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_select_update_period_48h')
}, {
  value: (0,helpers/* hoursToMs */.fg)(24),
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_select_update_period_24h')
}, {
  value: (0,helpers/* hoursToMs */.fg)(12),
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_select_update_period_12h')
}, {
  value: (0,helpers/* hoursToMs */.fg)(6),
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_select_update_period_6h')
}, {
  value: (0,helpers/* hoursToMs */.fg)(1),
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_select_update_period_1h')
}, {
  value: 0,
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_select_update_period_disabled')
}];
const APPEARANCE_THEMES_OPTIONS = [{
  value: pages_constants/* APPEARANCE_THEMES.SYSTEM */.cC.SYSTEM,
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_theme_selector_system')
}, {
  value: pages_constants/* APPEARANCE_THEMES.LIGHT */.cC.LIGHT,
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_theme_selector_light')
}, {
  value: pages_constants/* APPEARANCE_THEMES.DARK */.cC.DARK,
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_theme_selector_dark')
}];
const ALLOW_ACCEPTABLE_ADS = 'allowAcceptableAds';
let currentBrowserAddonStoreUrl = pages_constants/* BROWSER_ADDON_STORE_LINKS.CHROME */.wk.CHROME;

if (user_agent_utils/* isFirefox */.vU) {
  currentBrowserAddonStoreUrl = pages_constants/* BROWSER_ADDON_STORE_LINKS.FIREFOX */.wk.FIREFOX;
} else if (user_agent_utils/* isEdgeChromium */.kD) {
  currentBrowserAddonStoreUrl = pages_constants/* BROWSER_ADDON_STORE_LINKS.EDGE */.wk.EDGE;
} else if (user_agent_utils/* isOpera */.f0) {
  currentBrowserAddonStoreUrl = pages_constants/* BROWSER_ADDON_STORE_LINKS.OPERA */.wk.OPERA;
}

const General = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore,
    uiStore
  } = (0,react.useContext)(rootStore);
  const {
    settings,
    allowAcceptableAds
  } = settingsStore;

  if (!settings) {
    return null;
  }

  const handleExportSettings = () => {
    (0,utils_export/* exportData */.u)(utils_export/* ExportTypes.SETTINGS */.I.SETTINGS);
  };

  const inputChangeHandler = async event => {
    event.persist();
    const file = event.target.files[0];

    try {
      const content = await (0,helpers/* handleFileUpload */.$p)(file, 'json');
      const result = await messenger/* messenger.applySettingsJson */.d.applySettingsJson(content);

      if (result) {
        const successMessage = reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_import_success_title');
        uiStore.addNotification({
          description: successMessage
        });
      } else {
        const errorMessage = reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_import_error_file_description');
        uiStore.addNotification({
          description: errorMessage
        });
      }
    } catch (e) {
      const message = e.message || reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_import_error_title');
      uiStore.addNotification({
        description: message
      });
    } // eslint-disable-next-line no-param-reassign


    event.target.value = '';
  };

  const allowAcceptableAdsChangeHandler = async ({
    data
  }) => {
    await settingsStore.setAllowAcceptableAdsState(data);
  };

  const settingChangeHandler = async ({
    id,
    data
  }) => {
    await settingsStore.updateSetting(id, data);
  };

  const {
    DISABLE_DETECT_FILTERS,
    FILTERS_UPDATE_PERIOD,
    DISABLE_SAFEBROWSING,
    APPEARANCE_THEME
  } = settings.names; // eslint-disable-next-line max-len

  const ACCEPTABLE_ADS_LEARN_MORE_URL = 'https://link.adtidy.org/forward.html?action=self_promotion&from=options_screen&app=browser_extension'; // eslint-disable-next-line max-len

  const SAFEBROWSING_LEARN_MORE_URL = 'https://link.adtidy.org/forward.html?action=protection_works&from=options_screen&app=browser_extension';
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(SettingsSection, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_general_settings')
  }, /*#__PURE__*/react.createElement(SettingSetSelect, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_select_theme'),
    id: APPEARANCE_THEME,
    options: APPEARANCE_THEMES_OPTIONS,
    value: settings.values[APPEARANCE_THEME],
    handler: settingChangeHandler
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_block_acceptable_ads'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_block_acceptable_ads_desc', {
      a: chunks => /*#__PURE__*/react.createElement("a", {
        href: ACCEPTABLE_ADS_LEARN_MORE_URL,
        target: "_blank",
        rel: "noopener noreferrer"
      }, chunks)
    }),
    disabled: allowAcceptableAds,
    id: ALLOW_ACCEPTABLE_ADS,
    type: SETTINGS_TYPES.CHECKBOX,
    value: !allowAcceptableAds,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_block_acceptable_ads'),
    handler: allowAcceptableAdsChangeHandler
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_safebrowsing_enabled'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_safebrowsing_enabled_desc', {
      a: chunks => /*#__PURE__*/react.createElement("a", {
        href: SAFEBROWSING_LEARN_MORE_URL,
        target: "_blank",
        rel: "noopener noreferrer"
      }, chunks)
    }),
    disabled: settings.values[DISABLE_SAFEBROWSING],
    id: DISABLE_SAFEBROWSING,
    type: SETTINGS_TYPES.CHECKBOX,
    inverted: true,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_safebrowsing_enabled'),
    value: settings.values[DISABLE_SAFEBROWSING],
    handler: settingChangeHandler
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_enable_autodetect_filter'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_enable_autodetect_filter_desc'),
    disabled: settings.values[DISABLE_DETECT_FILTERS],
    id: DISABLE_DETECT_FILTERS,
    type: SETTINGS_TYPES.CHECKBOX,
    inverted: true,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_enable_autodetect_filter'),
    handler: settingChangeHandler,
    value: settings.values[DISABLE_DETECT_FILTERS]
  }), /*#__PURE__*/react.createElement(SettingSetSelect, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_set_update_interval'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_set_update_interval_desc'),
    id: FILTERS_UPDATE_PERIOD,
    options: filtersUpdatePeriodOptions,
    value: settings.values[FILTERS_UPDATE_PERIOD],
    handler: settingChangeHandler
  })), /*#__PURE__*/react.createElement("div", {
    className: "links-menu",
    style: {
      marginLeft: '16px'
    }
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "links-menu__item",
    onClick: handleExportSettings
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_export_settings')), /*#__PURE__*/react.createElement("input", {
    id: "inputEl",
    type: "file",
    accept: "application/json",
    onChange: inputChangeHandler,
    className: "actions__input-file"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "inputEl",
    className: "links-menu__item"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_import_settings')), /*#__PURE__*/react.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: pages_constants/* GITHUB_URL */.Kd,
    className: "links-menu__item"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_report_bug')), /*#__PURE__*/react.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: currentBrowserAddonStoreUrl,
    className: "links-menu__item"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_leave_feedback'))));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/General/index.js

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Nav/nav.pcss
var nav = __webpack_require__(12991);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Nav/nav.pcss

      
      
      
      
      
      
      
      
      

var nav_options = {};

nav_options.styleTagTransform = (styleTagTransform_default());
nav_options.setAttributes = (setAttributesWithoutAttributes_default());

      nav_options.insert = insertBySelector_default().bind(null, "head");
    
nav_options.domAPI = (styleDomAPI_default());
nav_options.insertStyleElement = (insertStyleElement_default());

var nav_update = injectStylesIntoStyleTag_default()(nav/* default */.Z, nav_options);




       /* harmony default export */ const Nav_nav = (nav/* default */.Z && nav/* default.locals */.Z.locals ? nav/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Nav/Nav.jsx





const Nav = ({
  closeSidebar
}) => {
  const onClick = () => {
    closeSidebar();
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nav"
  }, /*#__PURE__*/react.createElement(NavLink, {
    className: "nav__item",
    exact: true,
    activeClassName: "nav__item--active",
    to: "/",
    onClick: onClick
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_general_settings')), /*#__PURE__*/react.createElement(NavLink, {
    className: "nav__item",
    activeClassName: "nav__item--active",
    to: "/filters",
    onClick: onClick
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters')), /*#__PURE__*/react.createElement(NavLink, {
    className: "nav__item",
    activeClassName: "nav__item--active",
    to: "/stealth",
    onClick: onClick
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_privacy')), /*#__PURE__*/react.createElement(NavLink, {
    className: "nav__item",
    activeClassName: "nav__item--active",
    to: "/allowlist",
    onClick: onClick
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_allowlist')), /*#__PURE__*/react.createElement(NavLink, {
    className: "nav__item",
    activeClassName: "nav__item--active",
    to: "/user-filter",
    onClick: onClick
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter')), /*#__PURE__*/react.createElement(NavLink, {
    className: "nav__item",
    activeClassName: "nav__item--active",
    to: "/miscellaneous",
    onClick: onClick
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_miscellaneous_settings')), /*#__PURE__*/react.createElement(NavLink, {
    className: "nav__item",
    activeClassName: "nav__item--active",
    to: "/about",
    onClick: onClick
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_about')));
};


;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Nav/index.js

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Sidebar/sidebar.pcss
var sidebar = __webpack_require__(78201);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Sidebar/sidebar.pcss

      
      
      
      
      
      
      
      
      

var sidebar_options = {};

sidebar_options.styleTagTransform = (styleTagTransform_default());
sidebar_options.setAttributes = (setAttributesWithoutAttributes_default());

      sidebar_options.insert = insertBySelector_default().bind(null, "head");
    
sidebar_options.domAPI = (styleDomAPI_default());
sidebar_options.insertStyleElement = (insertStyleElement_default());

var sidebar_update = injectStylesIntoStyleTag_default()(sidebar/* default */.Z, sidebar_options);




       /* harmony default export */ const Sidebar_sidebar = (sidebar/* default */.Z && sidebar/* default.locals */.Z.locals ? sidebar/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Sidebar/Compare/compare.pcss
var compare = __webpack_require__(12166);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Sidebar/Compare/compare.pcss

      
      
      
      
      
      
      
      
      

var compare_options = {};

compare_options.styleTagTransform = (styleTagTransform_default());
compare_options.setAttributes = (setAttributesWithoutAttributes_default());

      compare_options.insert = insertBySelector_default().bind(null, "head");
    
compare_options.domAPI = (styleDomAPI_default());
compare_options.insertStyleElement = (insertStyleElement_default());

var compare_update = injectStylesIntoStyleTag_default()(compare/* default */.Z, compare_options);




       /* harmony default export */ const Compare_compare = (compare/* default */.Z && compare/* default.locals */.Z.locals ? compare/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Sidebar/Compare/Compare.jsx




const Compare = ({
  click,
  hide
}) => {
  return /*#__PURE__*/react.createElement("div", {
    className: "compare"
  }, /*#__PURE__*/react.createElement("div", {
    className: "compare__message"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_nav_better_than_extension')), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--green button--m button--compare",
    onClick: click
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_nav_compare')), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "compare__close",
    "aria-label": reactTranslator/* reactTranslator.getMessage */._.getMessage('close_button_title'),
    onClick: hide
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#cross"
  })));
};
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Sidebar/Compare/index.js

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Sidebar/Sidebar.jsx









const Sidebar = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore
  } = (0,react.useContext)(rootStore);
  const [isOpen, setOpen] = (0,react.useState)(false);

  const openSidebar = () => setOpen(true);

  const closeSidebar = () => setOpen(false);

  const handleCompareClick = async () => {
    await messenger/* messenger.openComparePage */.d.openComparePage();
  };

  const hideCompare = async () => {
    await settingsStore.hideAdguardPromoInfo();
  };

  const className = classnames_default()('sidebar', {
    /* styles only for mobile markup */
    'sidebar--open': isOpen
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, isOpen ? /*#__PURE__*/react.createElement("div", {
    role: "menu",
    tabIndex: 0,
    onClick: closeSidebar,
    onKeyUp: closeSidebar,
    className: "sidebar__overlay"
  }) : /*#__PURE__*/react.createElement("div", {
    className: "sidebar__menu",
    role: "menu"
  }, /*#__PURE__*/react.createElement("button", {
    onClick: openSidebar,
    className: "sidebar__open-button",
    type: "button"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#menu",
    classname: "icon--menu"
  }))), /*#__PURE__*/react.createElement("div", {
    className: className
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#logo",
    classname: "icon--logo sidebar__logo"
  }), /*#__PURE__*/react.createElement(Nav, {
    closeSidebar: closeSidebar
  }), settingsStore.showAdguardPromoInfo && /*#__PURE__*/react.createElement(Compare, {
    click: handleCompareClick,
    hide: hideCompare
  })));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Sidebar/index.js

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(68736);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(90943);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Filters/group.pcss
var group = __webpack_require__(45841);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/group.pcss

      
      
      
      
      
      
      
      
      

var group_options = {};

group_options.styleTagTransform = (styleTagTransform_default());
group_options.setAttributes = (setAttributesWithoutAttributes_default());

      group_options.insert = insertBySelector_default().bind(null, "head");
    
group_options.domAPI = (styleDomAPI_default());
group_options.insertStyleElement = (insertStyleElement_default());

var group_update = injectStylesIntoStyleTag_default()(group/* default */.Z, group_options);




       /* harmony default export */ const Filters_group = (group/* default */.Z && group/* default.locals */.Z.locals ? group/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/Group.jsx







const renderEnabledFilters = enabledFilters => {
  const enabledFiltersNames = enabledFilters.map(filter => filter.name);
  const SLICE_POINT = 3;
  const displayable = enabledFiltersNames.slice(0, SLICE_POINT);
  const countable = enabledFiltersNames.slice(SLICE_POINT);

  if (countable.length > 0) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_enabled'), ' ', reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_enabled_and_more', {
      enabled: displayable.join(', '),
      more: countable.length
    }));
  }

  if (displayable.length > 1) {
    const [last, ...rest] = displayable.reverse();
    return /*#__PURE__*/react.createElement(react.Fragment, null, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_enabled'), ' ', reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_enabled_and_last', {
      enabled: rest.join(', '),
      last
    }));
  }

  if (displayable.length === 1) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_enabled'), ' ', displayable[0]);
  }

  return reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_no_enabled');
};

const Group = ({
  groupName,
  groupId,
  enabledFilters,
  groupClickHandler,
  checkboxHandler,
  checkboxValue
}) => {
  const groupClassName = classnames_default()({
    setting: true,
    group: true,
    'group--disabled': !checkboxValue
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: groupClassName
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    tabIndex: 0,
    className: "setting__area setting__area_group",
    onClick: groupClickHandler
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: `#setting-${groupId}`,
    classname: "icon--setting setting__icon"
  }), /*#__PURE__*/react.createElement("div", {
    className: "setting__info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "setting__title group__title"
  }, groupName), /*#__PURE__*/react.createElement("div", {
    className: "setting__desc"
  }, renderEnabledFilters(enabledFilters)))), /*#__PURE__*/react.createElement("div", {
    className: "setting__inline-control setting__inline-control_group"
  }, /*#__PURE__*/react.createElement(Setting, {
    id: groupId,
    type: SETTINGS_TYPES.CHECKBOX,
    label: groupName,
    value: checkboxValue,
    handler: checkboxHandler,
    className: "group__checkbox"
  }))));
};


;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/Search/HighlightSearch.js





const HighlightSearch = (0,mobxreact_esm/* observer */.Pi)(({
  string
}) => {
  const {
    settingsStore: {
      searchInput
    }
  } = (0,react.useContext)(rootStore);

  const renderStr = () => {
    const strChunks = (0,helpers/* findChunks */.tE)(string, searchInput);
    const displayName = strChunks.map((chunk, i) => {
      const isSearchMatch = chunk.toLowerCase() === searchInput.toLowerCase();
      const chunkClassName = classnames_default()({
        filter__search: isSearchMatch
      });
      return /*#__PURE__*/react.createElement("span", {
        key: i // eslint-disable-line react/no-array-index-key
        ,
        className: chunkClassName
      }, chunk);
    });
    return displayName;
  };

  return searchInput.length > 0 && (0,helpers/* containsIgnoreCase */.ms)(string, searchInput) ? renderStr() : string;
});

// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Popover/index.js + 1 modules
var Popover = __webpack_require__(53657);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/FilterTags/FilterTag.jsx
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */




const FilterTag = (0,mobxreact_esm/* observer */.Pi)(({
  tag
}) => {
  const {
    settingsStore
  } = (0,react.useContext)(rootStore);
  const tagString = `#${tag.keyword}`;

  const handleClick = e => {
    e.preventDefault(); // we remove other content of search input when user clicks to tag

    settingsStore.setSearchInput(tagString);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "filter__tag",
    onClick: handleClick
  }, /*#__PURE__*/react.createElement(HighlightSearch, {
    string: tagString
  }));
});
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/FilterTags/FilterTags.jsx



const FilterTags = ({
  tags
}) => {
  if (tags.length === 0) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "filter__tags"
  }, tags.map(tag => /*#__PURE__*/react.createElement(Popover/* Popover */.J, {
    text: tag.description,
    key: tag.tagId
  }, /*#__PURE__*/react.createElement(FilterTag, {
    tag: tag
  }))));
};
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/FilterTags/index.js

// EXTERNAL MODULE: ./node_modules/react-modal/lib/index.js
var lib = __webpack_require__(28879);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ConfirmModal/ConfirmModal.jsx


const ConfirmModal = ({
  title,
  subtitle,
  isOpen,
  onConfirm,
  setIsOpen,
  customCancelTitle,
  customConfirmTitle
}) => {
  const confirmTitle = customConfirmTitle || 'OK';
  const cancelTitle = customCancelTitle || 'Cancel';

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    closeModal();
    onConfirm();
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement((lib_default()), {
    isOpen: isOpen,
    onRequestClose: closeModal
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal__title"
  }, title), subtitle && /*#__PURE__*/react.createElement("div", {
    className: "modal__subtitle modal__subtitle--confirm"
  }, subtitle), /*#__PURE__*/react.createElement("div", {
    className: "modal__content modal__content--button"
  }, /*#__PURE__*/react.createElement("button", {
    className: "button button--m button--red-bg modal__btn modal__btn--statistic",
    type: "button",
    onClick: handleConfirm
  }, confirmTitle), /*#__PURE__*/react.createElement("button", {
    className: "button button--m button--transparent modal__btn modal__btn--statistic",
    type: "button",
    onClick: closeModal
  }, cancelTitle))));
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ConfirmModal/index.js

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Filters/filter.pcss
var filter = __webpack_require__(40562);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/filter.pcss

      
      
      
      
      
      
      
      
      

var filter_options = {};

filter_options.styleTagTransform = (styleTagTransform_default());
filter_options.setAttributes = (setAttributesWithoutAttributes_default());

      filter_options.insert = insertBySelector_default().bind(null, "head");
    
filter_options.domAPI = (styleDomAPI_default());
filter_options.insertStyleElement = (insertStyleElement_default());

var filter_update = injectStylesIntoStyleTag_default()(filter/* default */.Z, filter_options);




       /* harmony default export */ const Filters_filter = (filter/* default */.Z && filter/* default.locals */.Z.locals ? filter/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/Filter.jsx
/*
eslint-disable jsx-a11y/anchor-is-valid,
jsx-a11y/click-events-have-key-events,
jsx-a11y/no-static-element-interactions
*/













const formatDate = date => {
  const dateObj = new Date(date);
  const formatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return dateObj.toLocaleDateString('default', formatOptions);
};

const FILTER_PREFIX = 'filter-';
/**
 * Appends prefix to filter id
 * @param filterId
 * @return {string}
 */

const addPrefix = filterId => {
  return `${FILTER_PREFIX}${filterId}`;
};
/**
 * Removes prefix from filter id
 * @param {string} extendedFilterId
 * @return {string}
 */


const removePrefix = extendedFilterId => {
  return extendedFilterId.replace(FILTER_PREFIX, '');
};

const Filter = (0,mobxreact_esm/* observer */.Pi)(({
  filter
}) => {
  const {
    settingsStore
  } = (0,react.useContext)(rootStore);
  const [isOpenRemoveFilterModal, setIsOpenRemoveFilterModal] = (0,react.useState)(false);
  const {
    name,
    filterId,
    description,
    version,
    lastCheckTime,
    timeUpdated,
    homepage,
    trusted,
    customUrl,
    enabled,
    tagsDetails = []
  } = filter; // Trusted tag can be only on custom filters,

  const tags = trusted ? [...tagsDetails, {
    tagId: common_constants/* TRUSTED_TAG */.XR,
    keyword: common_constants/* TRUSTED_TAG */.XR,
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_filter_trusted_tag_desc')
  }] : [...tagsDetails];

  const handleFilterSwitch = async ({
    id,
    data
  }) => {
    // remove prefix from filter id
    const filterIdWithoutPrefix = removePrefix(id);
    await settingsStore.updateFilterSetting(filterIdWithoutPrefix, data);
  };

  const handleRemoveFilterClick = async e => {
    e.preventDefault();
    setIsOpenRemoveFilterModal(true);
  };

  const handleRemoveFilterConfirm = async () => {
    await settingsStore.removeCustomFilter(filterId);
  };

  const renderRemoveButton = () => {
    if (customUrl) {
      return /*#__PURE__*/react.createElement(react.Fragment, null, isOpenRemoveFilterModal && /*#__PURE__*/react.createElement(ConfirmModal, {
        title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_remove_filter_confirm_modal_title'),
        subtitle: name,
        isOpen: isOpenRemoveFilterModal,
        setIsOpen: setIsOpenRemoveFilterModal,
        onConfirm: handleRemoveFilterConfirm,
        customConfirmTitle: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_remove_filter_confirm_modal_ok_button'),
        customCancelTitle: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_confirm_modal_cancel_button')
      }), /*#__PURE__*/react.createElement("a", {
        className: "filter__remove",
        onClick: handleRemoveFilterClick
      }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        id: "#trash",
        classname: "icon--trash"
      })));
    }

    return null;
  };

  const filterClassName = classnames_default()('filter', {
    'filter--disabled': !enabled
  }); // We add prefix to avoid id collisions with group ids

  const prefixedFilterId = addPrefix(filterId);
  return /*#__PURE__*/react.createElement("label", {
    htmlFor: prefixedFilterId,
    className: "setting-checkbox"
  }, /*#__PURE__*/react.createElement("div", {
    className: filterClassName,
    role: "presentation"
  }, /*#__PURE__*/react.createElement("div", {
    className: "filter__info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "setting__container setting__container--horizontal"
  }, /*#__PURE__*/react.createElement("div", {
    className: "setting__inner"
  }, /*#__PURE__*/react.createElement("div", {
    className: "filter__title"
  }, /*#__PURE__*/react.createElement("span", {
    className: "filter__title-in"
  }, /*#__PURE__*/react.createElement(HighlightSearch, {
    string: name
  })), /*#__PURE__*/react.createElement("span", {
    className: "filter__controls"
  }, renderRemoveButton())), /*#__PURE__*/react.createElement("div", {
    className: "filter__desc"
  }, /*#__PURE__*/react.createElement("div", {
    className: "filter__desc-item"
  }, description), /*#__PURE__*/react.createElement("div", {
    className: "filter__desc-item"
  }, version ? `${reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_filter_version')} ${version} ` : '', reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_filter_updated'), ' ', lastCheckTime ? formatDate(lastCheckTime) : formatDate(timeUpdated))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    className: "filter__link",
    href: homepage || customUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_filter_link'))), /*#__PURE__*/react.createElement(FilterTags, {
    tags: tags
  })), /*#__PURE__*/react.createElement("div", {
    className: "setting__inline-control"
  }, /*#__PURE__*/react.createElement(Setting, {
    id: prefixedFilterId,
    type: SETTINGS_TYPES.CHECKBOX,
    label: name,
    value: !!enabled,
    handler: handleFilterSwitch
  }))))));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/Search/SearchGroup.jsx







const renderFilters = matchedFilters => {
  return matchedFilters.map(filter => /*#__PURE__*/react.createElement(Filter, {
    key: filter.filterId,
    filter: filter
  }));
};

const SearchGroup = ({
  groupName,
  groupId,
  filtersToShow,
  groupClickHandler,
  checkboxHandler,
  checkboxValue
}) => {
  const groupClassName = classnames_default()('setting group', {
    'group--disabled': !checkboxValue
  });
  const filtersClassName = classnames_default()('filters', {
    'filters--disabled': !checkboxValue
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: groupClassName
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    tabIndex: 0,
    className: "setting__area setting__area_group",
    onClick: groupClickHandler
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: `#setting-${groupId}`,
    classname: "icon--setting setting__icon"
  }), /*#__PURE__*/react.createElement("div", {
    className: "setting__info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "setting__title group__title"
  }, groupName))), /*#__PURE__*/react.createElement("div", {
    className: "setting__inline-control setting__inline-control_group"
  }, /*#__PURE__*/react.createElement(Setting, {
    id: groupId,
    type: SETTINGS_TYPES.CHECKBOX,
    label: groupName,
    value: checkboxValue,
    handler: checkboxHandler,
    className: "group__checkbox"
  }))), /*#__PURE__*/react.createElement("div", {
    className: filtersClassName
  }, renderFilters(filtersToShow)));
};


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Filters/EmptyCustom/empty-custom.pcss
var empty_custom = __webpack_require__(21623);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/EmptyCustom/empty-custom.pcss

      
      
      
      
      
      
      
      
      

var empty_custom_options = {};

empty_custom_options.styleTagTransform = (styleTagTransform_default());
empty_custom_options.setAttributes = (setAttributesWithoutAttributes_default());

      empty_custom_options.insert = insertBySelector_default().bind(null, "head");
    
empty_custom_options.domAPI = (styleDomAPI_default());
empty_custom_options.insertStyleElement = (insertStyleElement_default());

var empty_custom_update = injectStylesIntoStyleTag_default()(empty_custom/* default */.Z, empty_custom_options);




       /* harmony default export */ const EmptyCustom_empty_custom = (empty_custom/* default */.Z && empty_custom/* default.locals */.Z.locals ? empty_custom/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/EmptyCustom/EmptyCustom.jsx





const EmptyCustom = () => /*#__PURE__*/react.createElement("div", {
  className: "empty-custom"
}, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
  id: "#empty",
  classname: "icon--empty empty-custom__ico"
}), /*#__PURE__*/react.createElement("div", {
  className: "empty-custom__desc"
}, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_empty_custom_filter')));


;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/EmptyCustom/index.js

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Filters/Search/search.pcss
var search = __webpack_require__(65228);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/Search/search.pcss

      
      
      
      
      
      
      
      
      

var search_options = {};

search_options.styleTagTransform = (styleTagTransform_default());
search_options.setAttributes = (setAttributesWithoutAttributes_default());

      search_options.insert = insertBySelector_default().bind(null, "head");
    
search_options.domAPI = (styleDomAPI_default());
search_options.insertStyleElement = (insertStyleElement_default());

var search_update = injectStylesIntoStyleTag_default()(search/* default */.Z, search_options);




       /* harmony default export */ const Search_search = (search/* default */.Z && search/* default.locals */.Z.locals ? search/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/Search/Search.jsx
/* eslint-disable jsx-a11y/no-autofocus */









const isDesktopScreen = window.innerWidth > TABLET_SCREEN_WIDTH;
const Search_options = [{
  value: SEARCH_FILTERS.ALL,
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_list_search_display_option_all_filters')
}, {
  value: SEARCH_FILTERS.ENABLED,
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_list_search_display_option_enabled')
}, {
  value: SEARCH_FILTERS.DISABLED,
  title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_list_search_display_option_disabled')
}];
const Search = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore
  } = (0,react.useContext)(rootStore);
  const searchInputRef = (0,react.useRef)();
  const searchRef = (0,react.useRef)();
  const {
    setSearchInput,
    searchInput,
    setSearchSelect,
    searchSelect
  } = settingsStore;
  (0,react.useEffect)(() => {
    const modifierKeyProperty = user_agent_utils/* isMacOs */.Q5 ? 'metaKey' : 'ctrlKey';

    const handleSearchHotkey = e => {
      const {
        code
      } = e;

      if (e[modifierKeyProperty] && code === 'KeyF') {
        e.preventDefault();
        searchInputRef.current.focus();
        searchInputRef.current.select();
      }
    };

    const handleResetHotkey = e => {
      const {
        code
      } = e;

      if (code === 'Escape') {
        e.preventDefault();
        setSearchInput('');
      }
    };

    window.addEventListener('keydown', handleSearchHotkey);
    window.addEventListener('keydown', handleResetHotkey);
    return function onUnmount() {
      window.removeEventListener('keydown', handleSearchHotkey);
      window.removeEventListener('keydown', handleResetHotkey);
    };
  }, [setSearchInput]);

  const searchInputHandler = e => {
    const {
      value
    } = e.target;
    setSearchInput(value);

    if (value.length === 0) {
      settingsStore.sortFilters();
      settingsStore.sortSearchGroups();
    }
  };

  const searchCloseHandler = () => {
    setSearchInput('');
    searchInputRef.current.focus();
    setSearchSelect(SEARCH_FILTERS.ALL);
    settingsStore.sortFilters();
    settingsStore.sortSearchGroups();
  };

  const searchSelectHandler = value => {
    setSearchSelect(value);
    settingsStore.sortFilters();
    settingsStore.sortSearchGroups();
  };

  const onSearchInputFocus = () => {
    if (searchRef.current) {
      searchRef.current.classList.add('search--focused');
    }
  };

  const onSearchInputBlur = () => {
    if (searchRef.current) {
      searchRef.current.classList.remove('search--focused');
    }
  };

  (0,react.useEffect)(() => {
    // autofocus triggers the keypad on mobile devices, which worsens tab navigation
    // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2117
    if (searchInputRef.current && isDesktopScreen) {
      searchInputRef.current.focus();
    }
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "search",
    ref: searchRef
  }, /*#__PURE__*/react.createElement("label", {
    className: "search__label",
    htmlFor: "search__input"
  }, /*#__PURE__*/react.createElement("input", {
    id: "search__input",
    onFocus: onSearchInputFocus,
    onBlur: onSearchInputBlur,
    className: "search__input",
    type: "text",
    placeholder: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_search'),
    ref: searchInputRef,
    onChange: searchInputHandler,
    value: searchInput
  })), searchInput ? /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button",
    "aria-label": reactTranslator/* reactTranslator.getMessage */._.getMessage('close_button_title'),
    onClick: searchCloseHandler
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#cross",
    classname: "search__cross"
  })) : /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#magnifying",
    classname: "icon--magnifying"
  }), /*#__PURE__*/react.createElement("div", {
    className: "search__select"
  }, /*#__PURE__*/react.createElement(Select, {
    id: "search-select",
    handler: searchSelectHandler,
    options: Search_options,
    value: searchSelect
  })));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/Search/index.js

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Filters/FiltersUpdate/filters-update.pcss
var filters_update = __webpack_require__(74749);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/FiltersUpdate/filters-update.pcss

      
      
      
      
      
      
      
      
      

var filters_update_options = {};

filters_update_options.styleTagTransform = (styleTagTransform_default());
filters_update_options.setAttributes = (setAttributesWithoutAttributes_default());

      filters_update_options.insert = insertBySelector_default().bind(null, "head");
    
filters_update_options.domAPI = (styleDomAPI_default());
filters_update_options.insertStyleElement = (insertStyleElement_default());

var filters_update_update = injectStylesIntoStyleTag_default()(filters_update/* default */.Z, filters_update_options);




       /* harmony default export */ const FiltersUpdate_filters_update = (filters_update/* default */.Z && filters_update/* default.locals */.Z.locals ? filters_update/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/FiltersUpdate/FiltersUpdate.jsx





const formatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};
const FiltersUpdate = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore
  } = (0,react.useContext)(rootStore);
  const {
    rulesCount,
    lastUpdateTime,
    filtersUpdating,
    isUpdateFiltersButtonActive
  } = settingsStore;

  const updateClickHandler = async () => {
    await settingsStore.updateFilters();
  };

  const dateObj = new Date(lastUpdateTime);
  return /*#__PURE__*/react.createElement("div", {
    className: "filters-update"
  }, /*#__PURE__*/react.createElement("div", {
    className: "filters-update__info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "filters-update__title"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_antibanner_rules_count', {
    rules_count: rulesCount
  })), /*#__PURE__*/react.createElement("div", {
    className: "filters-update__desc"
  }, dateObj.toLocaleDateString('default', formatOptions))), /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: updateClickHandler,
    className: "button button--m button--transparent filters-update__btn",
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_update_antibanner_filters'),
    disabled: !isUpdateFiltersButtonActive || filtersUpdating
  }, filtersUpdating ? reactTranslator/* reactTranslator.getMessage */._.getMessage('options_check_update_progress') : reactTranslator/* reactTranslator.getMessage */._.getMessage('options_check_update')));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/FiltersUpdate/index.js

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/AddCustomModal/ModalContentWrapper.jsx




const ModalContentWrapper = ({
  closeModalHandler,
  children,
  title
}) => {
  return /*#__PURE__*/react.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button",
    onClick: closeModalHandler
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#cross",
    classname: "modal__close"
  })), /*#__PURE__*/react.createElement("div", {
    className: "modal__title"
  }, title), children);
};

ModalContentWrapper.defaultProps = {
  title: ''
};
ModalContentWrapper.propTypes = {
  closeModalHandler: (prop_types_default()).func.isRequired,
  children: prop_types_default().oneOfType([(prop_types_default()).array, (prop_types_default()).object]).isRequired,
  title: (prop_types_default()).string
};

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/AddCustomModal/AddCustomModal.jsx
/* eslint-disable jsx-a11y/no-autofocus */









lib_default().setAppElement('#root');
const customStyles = {
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    width: '100%',
    height: '100%',
    zIndex: 7
  },
  content: {
    border: 0,
    width: '560px',
    height: 'auto',
    position: 'relative',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: '30px',
    overflow: 'auto'
  }
};

const AddCustomModal = ({
  closeModalHandler,
  modalIsOpen,
  initialUrl,
  initialTitle
}) => {
  const STEPS = {
    INPUT: 'input',
    CHECKING: 'checking',
    APPROVE: 'approve',
    ERROR: 'error'
  };
  const [customUrlToAdd, setCustomUrlToAdd] = (0,react.useState)(initialUrl);
  const [stepToRender, setStepToRender] = (0,react.useState)(STEPS.INPUT);
  const [error, setError] = (0,react.useState)(reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_check_false_description'));
  const [filterToAdd, setFilterToAdd] = (0,react.useState)(null);
  const [filterToAddName, setFilterToAddName] = (0,react.useState)(initialTitle);

  const closeModal = () => {
    closeModalHandler();
    setCustomUrlToAdd('');
    setStepToRender(STEPS.INPUT);
    setError('');
    setFilterToAdd(null);
    setFilterToAddName(initialTitle);
  };

  const {
    settingsStore
  } = (0,react.useContext)(rootStore);

  const handleInputChange = e => {
    const {
      value
    } = e.target;
    setCustomUrlToAdd(value);
  };

  const handleChangeFilterName = e => {
    const {
      value
    } = e.target;
    setFilterToAddName(value);
    filterToAdd.name = value;
  };

  const handleSendUrlToCheck = async () => {
    setStepToRender(STEPS.CHECKING);

    try {
      const result = await messenger/* messenger.checkCustomUrl */.d.checkCustomUrl(customUrlToAdd);

      if (result.error) {
        setError(result.error);
        setStepToRender(STEPS.ERROR);
      } else if (!result.filter) {
        setStepToRender(STEPS.ERROR);
      } else {
        setFilterToAdd(result.filter);
        setStepToRender(STEPS.APPROVE);
      }
    } catch (e) {
      log/* log.error */.c.error(e);
      setStepToRender(STEPS.ERROR);
    }
  };

  const renderInputStep = () => /*#__PURE__*/react.createElement(ModalContentWrapper, {
    closeModalHandler: closeModal,
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_url_title')
  }, /*#__PURE__*/react.createElement("form", {
    className: "modal__content",
    onSubmit: handleSendUrlToCheck
  }, /*#__PURE__*/react.createElement("input", {
    autoFocus: true,
    type: "text",
    placeholder: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_url_placeholder'),
    onChange: handleInputChange,
    className: "modal__input",
    value: customUrlToAdd
  }), /*#__PURE__*/react.createElement("div", {
    className: "modal__desc"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_call_to_action')), /*#__PURE__*/react.createElement("div", {
    className: "modal__desc"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_description'))), /*#__PURE__*/react.createElement("button", {
    className: "button button--m button--green modal__btn",
    type: "button",
    onClick: handleSendUrlToCheck
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_next_button')));

  const handleTrustedCheckbox = event => {
    filterToAdd.trusted = !!event.target.checked;
  };

  const handleApprove = async () => {
    try {
      if (!filterToAdd.name) {
        filterToAdd.name = filterToAddName || customUrlToAdd;
      }

      await settingsStore.addCustomFilter(filterToAdd);
    } catch (e) {
      setStepToRender(STEPS.ERROR);
      log/* log.error */.c.error(e);
    }

    closeModal();
  };

  const renderApproveStep = () => {
    const {
      name,
      description,
      version,
      rulesCount,
      homepage,
      customUrl
    } = filterToAdd;
    return /*#__PURE__*/react.createElement(ModalContentWrapper, {
      closeModalHandler: closeModal,
      title: "New filter subscription"
    }, /*#__PURE__*/react.createElement("form", {
      className: "modal__content",
      onSubmit: handleApprove
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal__row"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal__cell modal__cell--title"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_filter_title')), /*#__PURE__*/react.createElement("input", {
      className: "modal__input",
      type: "text",
      placeholder: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_title_placeholder'),
      onChange: handleChangeFilterName,
      defaultValue: name || filterToAddName || customUrlToAdd
    })), /*#__PURE__*/react.createElement("div", {
      className: "modal__row"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal__cell"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_filter_description')), /*#__PURE__*/react.createElement("div", {
      className: "modal__cell"
    }, description)), /*#__PURE__*/react.createElement("div", {
      className: "modal__row"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal__cell"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_filter_version')), /*#__PURE__*/react.createElement("div", {
      className: "modal__cell"
    }, version)), /*#__PURE__*/react.createElement("div", {
      className: "modal__row"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal__cell"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_filter_rules_count')), /*#__PURE__*/react.createElement("div", {
      className: "modal__cell"
    }, rulesCount)), /*#__PURE__*/react.createElement("div", {
      className: "modal__row"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal__cell"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_filter_homepage')), /*#__PURE__*/react.createElement("div", {
      className: "modal__cell modal__cell--url"
    }, homepage)), /*#__PURE__*/react.createElement("div", {
      className: "modal__row"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal__cell"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_filter_url')), /*#__PURE__*/react.createElement("div", {
      className: "modal__cell modal__cell--url"
    }, customUrl)), /*#__PURE__*/react.createElement("div", {
      className: "modal__row"
    }, /*#__PURE__*/react.createElement("label", {
      className: "checkbox-label",
      htmlFor: "trusted"
    }, /*#__PURE__*/react.createElement("input", {
      id: "trusted",
      type: "checkbox",
      onChange: handleTrustedCheckbox
    }), /*#__PURE__*/react.createElement("div", {
      className: "custom-checkbox"
    }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      id: "#checked",
      classname: "icon--checked"
    })), reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_trusted_filter_title')))), /*#__PURE__*/react.createElement("div", {
      className: "modal__row modal__row--info"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_trusted_filter_description')), /*#__PURE__*/react.createElement("button", {
      type: "button",
      onClick: handleApprove,
      className: "button button--m button--green modal__btn"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_subscribe_button')));
  };

  const renderCheckingStep = () => {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ModalContentWrapper, {
      closeModalHandler: closeModal
    }, /*#__PURE__*/react.createElement("form", {
      className: "modal__content modal__content--center-text"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal__desc"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_checking_filter')))));
  };

  const tryAgainHandler = () => {
    setStepToRender(STEPS.INPUT);
    setError('');
  };

  const renderErrorStep = () => {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ModalContentWrapper, {
      closeModalHandler: closeModal
    }, /*#__PURE__*/react.createElement("form", {
      className: "modal__content modal__content--center-text"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal__subtitle"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_check_false_title')), /*#__PURE__*/react.createElement("div", {
      className: "modal__desc"
    }, error || reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_check_false_description'))), /*#__PURE__*/react.createElement("button", {
      type: "button",
      onClick: tryAgainHandler,
      className: "button button--m button--transparent modal__btn"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_popup_try_again_button'))));
  };

  const renderStep = () => {
    switch (stepToRender) {
      case STEPS.INPUT:
        {
          return renderInputStep();
        }

      case STEPS.CHECKING:
        {
          return renderCheckingStep();
        }

      case STEPS.ERROR:
        {
          return renderErrorStep();
        }

      case STEPS.APPROVE:
        {
          return renderApproveStep();
        }

      default:
        throw new Error(`there is no such step: ${stepToRender}`);
    }
  };

  return /*#__PURE__*/react.createElement((lib_default()), {
    isOpen: modalIsOpen,
    style: customStyles,
    onRequestClose: closeModal
  }, renderStep());
};

AddCustomModal.propTypes = {
  closeModalHandler: (prop_types_default()).func.isRequired,
  modalIsOpen: (prop_types_default()).bool.isRequired
};

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/AddCustomModal/index.js

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/Filters.jsx





















const QUERY_PARAM_NAMES = {
  GROUP: 'group',
  TITLE: 'title',
  SUBSCRIBE: 'subscribe'
};
const Filters = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore
  } = (0,react.useContext)(rootStore);
  const history = useHistory();
  const location = useLocation();
  const query = (0,react.useMemo)(() => new URLSearchParams(location.search), [location.search]);
  const [modalIsOpen, setModalIsOpen] = (0,react.useState)(false);
  const [urlToSubscribe, setUrlToSubscribe] = (0,react.useState)(decodeURIComponent(query.get(QUERY_PARAM_NAMES.SUBSCRIBE) || ''));
  const [customFilterTitle, setCustomFilterTitle] = (0,react.useState)(query.get(QUERY_PARAM_NAMES.TITLE)); // This state used to remove blinking while filters to render were not selected

  const [groupDetermined, setGroupDetermined] = (0,react.useState)(false);
  const GROUP_DESCRIPTION = {
    0: reactTranslator/* reactTranslator.getMessage */._.getMessage('group_description_custom'),
    1: reactTranslator/* reactTranslator.getMessage */._.getMessage('group_description_adblocking'),
    2: reactTranslator/* reactTranslator.getMessage */._.getMessage('group_description_stealth'),
    3: reactTranslator/* reactTranslator.getMessage */._.getMessage('group_description_social'),
    4: reactTranslator/* reactTranslator.getMessage */._.getMessage('group_description_annoyances'),
    5: reactTranslator/* reactTranslator.getMessage */._.getMessage('group_description_security'),
    6: reactTranslator/* reactTranslator.getMessage */._.getMessage('group_description_miscellaneous'),
    7: reactTranslator/* reactTranslator.getMessage */._.getMessage('group_description_lang')
  };
  const {
    categories,
    filters,
    filtersToRender
  } = settingsStore;
  (0,react.useEffect)(() => {
    settingsStore.setSelectedGroupId(query.get(QUERY_PARAM_NAMES.GROUP));
    setGroupDetermined(true);
    settingsStore.setSearchInput('');
    settingsStore.setSearchSelect(SEARCH_FILTERS.ALL);
  }, [location.search, query, settingsStore]);

  const handleGroupSwitch = async ({
    id,
    data
  }) => {
    await settingsStore.updateGroupSetting(id, data);
  };

  const groupClickHandler = groupId => () => {
    // Prevent a click event after text selection
    if (!window.getSelection().toString()) {
      settingsStore.setSelectedGroupId(groupId);
      history.push(`/filters?group=${groupId}`);
    }
  };

  const getEnabledFiltersByGroup = group => filters.filter(filter => filter.groupId === group.groupId && filter.enabled);

  const renderGroups = groups => {
    const sortedGroups = sortBy_default()(groups, 'displayNumber');
    return sortedGroups.map(group => {
      const enabledFilters = getEnabledFiltersByGroup(group);
      return /*#__PURE__*/react.createElement(Group, {
        key: group.groupId,
        groupName: group.groupName,
        groupId: group.groupId,
        enabledFilters: enabledFilters,
        groupClickHandler: groupClickHandler(group.groupId),
        checkboxHandler: handleGroupSwitch,
        checkboxValue: !!group.enabled
      });
    });
  };

  const handleReturnToGroups = () => {
    history.push('/filters');
    settingsStore.setSelectedGroupId(null);
    settingsStore.setSearchInput('');
    settingsStore.setSearchSelect(SEARCH_FILTERS.ALL);
    settingsStore.sortFilters();
  };

  const renderFilters = filtersList => {
    return filtersList.map(filter => /*#__PURE__*/react.createElement(Filter, {
      key: filter.filterId,
      filter: filter
    }));
  };

  const renderGroupsOnSearch = matchedFilters => {
    // collect search data as object where
    // key is group id and value is searched filters
    const searchData = matchedFilters.reduce((acc, filter) => {
      const {
        groupId
      } = filter;

      if (typeof acc[groupId] === 'undefined') {
        acc[groupId] = [filter];
      } else {
        acc[groupId].push(filter);
      }

      return acc;
    }, {});
    const affectedGroupsIds = Object.keys(searchData).map(id => Number(id));
    const groupsToRender = categories.filter(group => affectedGroupsIds.includes(group.groupId));

    if (groupsToRender.length) {
      return groupsToRender.map(group => {
        const filtersToShow = searchData[group.groupId];
        return /*#__PURE__*/react.createElement(SearchGroup, {
          key: group.groupId,
          groupName: group.groupName,
          groupId: group.groupId,
          filtersToShow: filtersToShow,
          groupClickHandler: groupClickHandler(group.groupId),
          checkboxHandler: handleGroupSwitch,
          checkboxValue: !!group.enabled
        });
      });
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "filter__empty"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters_empty_title'));
  };

  const openModalHandler = (0,react.useCallback)(() => {
    setModalIsOpen(true);
  }, [setModalIsOpen]);

  const closeModalHandler = () => {
    setModalIsOpen(false);
    setUrlToSubscribe('');
    setCustomFilterTitle(''); // clear querystring params

    if (query.has(QUERY_PARAM_NAMES.TITLE) || query.has(QUERY_PARAM_NAMES.SUBSCRIBE)) {
      query.delete(QUERY_PARAM_NAMES.TITLE);
      query.delete(QUERY_PARAM_NAMES.SUBSCRIBE);
      history.push(`${history.location.pathname}?${decodeURIComponent(query.toString())}`);
    }
  };

  (0,react.useEffect)(() => {
    if (urlToSubscribe) {
      openModalHandler();
    }
  }, [urlToSubscribe, openModalHandler]);

  const renderAddFilterBtn = isEmpty => {
    const buttonClass = classnames_default()('button button--m button--green', {
      'button--empty-custom-filter': isEmpty,
      'button--add-custom-filter': !isEmpty
    });
    return /*#__PURE__*/react.createElement("button", {
      type: "button",
      onClick: openModalHandler,
      className: buttonClass
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_add_custom_filter'));
  };

  if (!groupDetermined) {
    return null;
  }

  if (Number.isInteger(settingsStore.selectedGroupId)) {
    const selectedGroup = categories.find(group => {
      return group.groupId === settingsStore.selectedGroupId;
    }); // eslint-disable-next-line max-len

    const isCustom = settingsStore.selectedGroupId === common_constants/* ANTIBANNER_GROUPS_ID.CUSTOM_FILTERS_GROUP_ID */.CI.CUSTOM_FILTERS_GROUP_ID;
    const isEmpty = filtersToRender.length === 0;

    const groupChangeHandler = async ({
      id,
      data
    }) => {
      await settingsStore.updateGroupSetting(id, !data);
    };

    const renderBackButton = () => /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("button", {
      type: "button",
      className: "button setting__back",
      onClick: handleReturnToGroups
    }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      id: "#arrow-back",
      classname: "icon--back"
    })), /*#__PURE__*/react.createElement("div", {
      className: "title__inner"
    }, /*#__PURE__*/react.createElement("button", {
      type: "button",
      onClick: handleReturnToGroups,
      className: "title title--back-btn"
    }, selectedGroup.groupName), /*#__PURE__*/react.createElement("div", {
      className: "title__desc title__desc--back"
    }, GROUP_DESCRIPTION[selectedGroup.groupId])));

    return /*#__PURE__*/react.createElement(SettingsSection, {
      title: selectedGroup.groupName,
      description: GROUP_DESCRIPTION[selectedGroup.groupId],
      inlineControl: /*#__PURE__*/react.createElement(Setting, {
        id: selectedGroup.groupId,
        type: SETTINGS_TYPES.CHECKBOX,
        label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_privacy_title'),
        inverted: true,
        value: !selectedGroup.enabled,
        handler: groupChangeHandler
      }),
      renderBackButton: renderBackButton
    }, isEmpty && isCustom && !settingsStore.isSearching ? /*#__PURE__*/react.createElement(EmptyCustom, null) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Search, null), renderFilters(filtersToRender)), isCustom && /*#__PURE__*/react.createElement(react.Fragment, null, renderAddFilterBtn(isEmpty && !settingsStore.isSearching), /*#__PURE__*/react.createElement(AddCustomModal, {
      closeModalHandler: closeModalHandler,
      modalIsOpen: modalIsOpen,
      initialUrl: urlToSubscribe,
      initialTitle: customFilterTitle
    })));
  }

  return /*#__PURE__*/react.createElement(SettingsSection, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_filters')
  }, /*#__PURE__*/react.createElement(FiltersUpdate, null), /*#__PURE__*/react.createElement(Search, null), settingsStore.isSearching ? renderGroupsOnSearch(filtersToRender) : renderGroups(categories));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Filters/index.js

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Stealth/Stealth.jsx









const BLOCK_KNOWN_TRACKERS = 'blockKnownTrackers';
const STRIP_TRACKING_PARAMETERS = 'stripTrackingParameters';
const Stealth = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore
  } = (0,react.useContext)(rootStore);
  const {
    settings,
    blockKnownTrackers,
    stripTrackingParameters
  } = settingsStore;

  if (!settings) {
    return null;
  }

  const blockKnownTrackersChangeHandler = async ({
    data
  }) => {
    await settingsStore.setBlockKnownTrackersState(data);
  };

  const stripTrackingParametersChangeHandler = async ({
    data
  }) => {
    await settingsStore.setStripTrackingParametersState(data);
  };

  const settingChangeHandler = async ({
    id,
    data
  }) => {
    log/* log.info */.c.info(`Setting ${id} set to ${data}`);
    await settingsStore.updateSetting(id, data);
  };

  const {
    DISABLE_STEALTH_MODE,
    SELF_DESTRUCT_THIRD_PARTY_COOKIES,
    SELF_DESTRUCT_THIRD_PARTY_COOKIES_TIME,
    SELF_DESTRUCT_FIRST_PARTY_COOKIES,
    SELF_DESTRUCT_FIRST_PARTY_COOKIES_TIME,
    HIDE_REFERRER,
    HIDE_SEARCH_QUERIES,
    SEND_DO_NOT_TRACK,
    BLOCK_WEBRTC,
    BLOCK_CHROME_CLIENT_DATA
  } = settings.names;
  const isStealthModeDisabled = settings.values[DISABLE_STEALTH_MODE];
  const isThirdPartyCookiesEnabled = settings.values[SELF_DESTRUCT_THIRD_PARTY_COOKIES];
  const isFirstPartyCookiesEnabled = settings.values[SELF_DESTRUCT_FIRST_PARTY_COOKIES];
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(SettingsSection, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_privacy_title'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_privacy_desc'),
    mode: "smallContainer",
    id: DISABLE_STEALTH_MODE,
    inlineControl: /*#__PURE__*/react.createElement(Setting, {
      id: DISABLE_STEALTH_MODE,
      type: SETTINGS_TYPES.CHECKBOX,
      label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_privacy_title'),
      inverted: true,
      value: settings.values[DISABLE_STEALTH_MODE],
      handler: settingChangeHandler
    })
  }), /*#__PURE__*/react.createElement(SettingsSection, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_stealth_general_title'),
    mode: "subTitle",
    disabled: isStealthModeDisabled
  }, /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_block_known_trackers_title'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_block_known_trackers_description'),
    disabled: !blockKnownTrackers,
    sectionDisabled: isStealthModeDisabled,
    id: BLOCK_KNOWN_TRACKERS,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_block_known_trackers_title'),
    value: blockKnownTrackers,
    handler: blockKnownTrackersChangeHandler
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_strip_tracking_params_title'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_strip_tracking_params_description'),
    disabled: !stripTrackingParameters,
    sectionDisabled: isStealthModeDisabled,
    id: STRIP_TRACKING_PARAMETERS,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_strip_tracking_params_title'),
    value: stripTrackingParameters,
    handler: stripTrackingParametersChangeHandler
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_hide_search_queries_title'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_hide_search_queries_desc'),
    disabled: !settings.values[HIDE_SEARCH_QUERIES],
    sectionDisabled: isStealthModeDisabled,
    id: HIDE_SEARCH_QUERIES,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_hide_search_queries_title'),
    value: settings.values[HIDE_SEARCH_QUERIES],
    handler: settingChangeHandler
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_send_not_track_title'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_send_not_track_desc', {
      gpc: chunks => /*#__PURE__*/react.createElement("a", {
        className: "desc--link",
        href: pages_constants/* GLOBAL_PRIVACY_CONTROL_URL */.Y0,
        target: "_blank",
        rel: "noreferrer"
      }, chunks),
      dnt: chunks => /*#__PURE__*/react.createElement("a", {
        className: "desc--link",
        href: pages_constants/* DO_NOT_TRACK_URL */.Z5,
        target: "_blank",
        rel: "noreferrer"
      }, chunks)
    }),
    disabled: !settings.values[SEND_DO_NOT_TRACK],
    sectionDisabled: isStealthModeDisabled,
    id: SEND_DO_NOT_TRACK,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_send_not_track_title'),
    value: settings.values[SEND_DO_NOT_TRACK],
    handler: settingChangeHandler
  })), /*#__PURE__*/react.createElement(SettingsSection, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_stealth_cookies_title'),
    mode: "subTitle",
    disabled: isStealthModeDisabled
  }, /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_third_party_title'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_third_party_desc'),
    disabled: !isThirdPartyCookiesEnabled,
    sectionDisabled: isStealthModeDisabled,
    id: SELF_DESTRUCT_THIRD_PARTY_COOKIES,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_third_party_title'),
    value: isThirdPartyCookiesEnabled,
    handler: settingChangeHandler
  }, /*#__PURE__*/react.createElement(Setting, {
    id: SELF_DESTRUCT_THIRD_PARTY_COOKIES_TIME,
    disabled: !isThirdPartyCookiesEnabled || isStealthModeDisabled,
    type: SETTINGS_TYPES.INPUT,
    value: settings.values[SELF_DESTRUCT_THIRD_PARTY_COOKIES_TIME],
    handler: settingChangeHandler,
    placeholder: pages_constants/* DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN */.eN
  })), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_first_party_title'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_first_party_desc'),
    disabled: !isFirstPartyCookiesEnabled,
    sectionDisabled: isStealthModeDisabled,
    id: SELF_DESTRUCT_FIRST_PARTY_COOKIES,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_first_party_title'),
    value: isFirstPartyCookiesEnabled,
    handler: settingChangeHandler
  }, /*#__PURE__*/react.createElement(Setting, {
    id: SELF_DESTRUCT_FIRST_PARTY_COOKIES_TIME,
    disabled: !isFirstPartyCookiesEnabled || isStealthModeDisabled,
    type: SETTINGS_TYPES.INPUT,
    value: settings.values[SELF_DESTRUCT_FIRST_PARTY_COOKIES_TIME],
    handler: settingChangeHandler,
    placeholder: pages_constants/* DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN */.uj
  }))), /*#__PURE__*/react.createElement(SettingsSection, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_stealth_miscellaneous_title'),
    mode: "subTitle",
    disabled: isStealthModeDisabled
  }, /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_hide_referrer_title'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_hide_referrer_desc'),
    disabled: !settings.values[HIDE_REFERRER],
    sectionDisabled: isStealthModeDisabled,
    id: HIDE_REFERRER,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_hide_referrer_title'),
    value: settings.values[HIDE_REFERRER],
    handler: settingChangeHandler
  }), settingsStore.isChrome && /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_remove_client_data_title'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_remove_client_data_desc'),
    disabled: !settings.values[BLOCK_CHROME_CLIENT_DATA],
    sectionDisabled: isStealthModeDisabled,
    id: BLOCK_CHROME_CLIENT_DATA,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_remove_client_data_title'),
    value: settings.values[BLOCK_CHROME_CLIENT_DATA],
    handler: settingChangeHandler
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_disable_webrtc_title'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_disable_webrtc_desc'),
    disabled: !settings.values[BLOCK_WEBRTC],
    sectionDisabled: isStealthModeDisabled,
    id: BLOCK_WEBRTC,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_disable_webrtc_title'),
    value: settings.values[BLOCK_WEBRTC],
    handler: settingChangeHandler
  })));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Stealth/index.js

// EXTERNAL MODULE: ./Extension/src/pages/common/components/Editor/index.js + 3 modules
var Editor = __webpack_require__(34340);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/SavingButton/index.js + 1 modules
var SavingButton = __webpack_require__(84952);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Allowlist/AllowlistSavingButton.jsx




const AllowlistSavingButton = (0,mobxreact_esm/* observer */.Pi)(({
  onClick
}) => {
  const {
    settingsStore
  } = (0,react.useContext)(rootStore);
  return /*#__PURE__*/react.createElement(SavingButton/* SavingButton */.Z, {
    onClick: onClick,
    contentChanged: settingsStore.allowlistEditorContentChanged,
    savingState: settingsStore.savingAllowlistState
  });
});
;// CONCATENATED MODULE: ./Extension/src/pages/common/hooks/usePrevious.js
// Hook

const usePrevious = value => {
  const ref = (0,react.useRef)();
  (0,react.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Allowlist/Allowlist.jsx













const Allowlist = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore,
    uiStore
  } = (0,react.useContext)(rootStore); // rerender allowlist after removed and none-saved domains and import
  // AG-10492

  const [shouldAllowlistRerender, setAllowlistRerender] = (0,react.useState)(false);
  const editorRef = (0,react.useRef)(null);
  const inputRef = (0,react.useRef)(null);
  const prevAllowlist = usePrevious(settingsStore.allowlist);
  (0,react.useEffect)(() => {
    (async () => {
      await settingsStore.getAllowlist();
      setAllowlistRerender(false);
    })();
  }, [settingsStore, shouldAllowlistRerender]);
  (0,react.useEffect)(() => {
    if (prevAllowlist === '') {
      // reset undo manager, otherwise ctrl+z after initial load removes all content
      editorRef.current.editor.session.getUndoManager().reset();
    }
  }, [settingsStore.allowlist, prevAllowlist]);
  const {
    settings
  } = settingsStore;
  const {
    DEFAULT_ALLOWLIST_MODE
  } = settings.names;

  const importClickHandler = e => {
    e.preventDefault();
    inputRef.current.click();
  };

  const exportClickHandler = () => {
    (0,utils_export/* exportData */.u)(utils_export/* ExportTypes.ALLOW_LIST */.I.ALLOW_LIST);
  };

  const inputChangeHandler = async event => {
    event.persist();
    const file = event.target.files[0];

    try {
      const content = await (0,helpers/* handleFileUpload */.$p)(file, 'txt');
      await settingsStore.appendAllowlist(content);
      setAllowlistRerender(true);
    } catch (e) {
      log/* log.debug */.c.debug(e.message);
      uiStore.addNotification({
        description: e.message
      });
    } // eslint-disable-next-line no-param-reassign


    event.target.value = '';
  };

  const saveClickHandler = async () => {
    if (settingsStore.allowlistEditorContentChanged) {
      const value = editorRef.current.editor.getValue();
      await settingsStore.saveAllowlist(value);
    }
  };

  const editorChangeHandler = () => {
    settingsStore.setAllowlistEditorContentChangedState(true);
  };

  const shortcuts = [{
    name: 'save',
    bindKey: {
      win: 'Ctrl-S',
      mac: 'Command-S'
    },
    exec: async () => {
      await saveClickHandler();
    }
  }];

  const allowlistChangeHandler = async e => {
    const {
      id,
      data
    } = e;
    await settingsStore.updateSetting(id, data);
  };

  const {
    ALLOWLIST_ENABLED
  } = settings.names;
  let shouldResetSize = false;

  if (settingsStore.allowlistSizeReset) {
    settingsStore.setAllowlistSizeReset(false);
    shouldResetSize = true;
  }

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(SettingsSection, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_allowlist'),
    id: ALLOWLIST_ENABLED,
    mode: "smallContainer",
    description: settings.values[DEFAULT_ALLOWLIST_MODE] ? reactTranslator/* reactTranslator.getMessage */._.getMessage('options_allowlist_desc') : /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
      className: "setting__alert-desc"
    }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_allowlist_alert_invert', {
      a: chunks => /*#__PURE__*/react.createElement(Link, {
        className: "setting__alert-link",
        to: "/miscellaneous"
      }, chunks)
    }))),
    inlineControl: /*#__PURE__*/react.createElement(Setting, {
      id: ALLOWLIST_ENABLED,
      type: SETTINGS_TYPES.CHECKBOX,
      value: settings.values[ALLOWLIST_ENABLED],
      handler: allowlistChangeHandler
    })
  }), /*#__PURE__*/react.createElement(Editor/* Editor */.M, {
    name: "allowlist",
    editorRef: editorRef,
    shortcuts: shortcuts,
    onChange: editorChangeHandler,
    value: settingsStore.allowlist,
    wrapEnabled: settingsStore.allowlistEditorWrap,
    shouldResetSize: shouldResetSize
  }), /*#__PURE__*/react.createElement("div", {
    className: "actions actions--divided"
  }, /*#__PURE__*/react.createElement("div", {
    className: "actions__group"
  }, /*#__PURE__*/react.createElement(AllowlistSavingButton, {
    onClick: saveClickHandler
  }), /*#__PURE__*/react.createElement("input", {
    type: "file",
    id: "inputEl",
    accept: "text/plain",
    ref: inputRef,
    onChange: inputChangeHandler,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--m button--transparent actions__btn",
    onClick: importClickHandler
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter_import')), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--m button--transparent actions__btn",
    onClick: exportClickHandler,
    disabled: !settingsStore.allowlist
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter_export')))));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Allowlist/index.js

// EXTERNAL MODULE: ./Extension/src/pages/common/components/UserRulesEditor/index.js + 3 modules
var UserRulesEditor = __webpack_require__(98118);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(79412);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/UserRules/UserRulesSwitcher.jsx






const UserRulesSwitcher = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore
  } = (0,react.useContext)(rootStore);
  const handleUserGroupToggle = debounce_default()(e => {
    settingsStore.updateSetting(e.id, e.data);
  }, constants/* HANDLER_DELAY_MS */.d);
  return /*#__PURE__*/react.createElement(Setting, {
    id: settingsStore.userFilterEnabledSettingId,
    type: SETTINGS_TYPES.CHECKBOX,
    value: settingsStore.userFilterEnabled,
    handler: handleUserGroupToggle
  });
});
// EXTERNAL MODULE: ./Extension/src/pages/options/components/UserRules/styles.pcss
var styles = __webpack_require__(96433);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/UserRules/UserRules.jsx











const UserRules = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore,
    uiStore
  } = (0,react.useContext)(rootStore);

  const handleGoToEditorClick = async () => {
    await messenger/* messenger.sendMessage */.d.sendMessage(common_constants/* MESSAGE_TYPES.OPEN_FULLSCREEN_USER_RULES */.oK.OPEN_FULLSCREEN_USER_RULES);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(SettingsSection, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter'),
    id: settingsStore.userFilterEnabledSettingId,
    mode: "smallContainer",
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter_description_key', {
      a: chunks => /*#__PURE__*/react.createElement("a", {
        className: "desc--link",
        href: pages_constants/* HOW_TO_CREATE_RULES_URL */.l7,
        target: "_blank",
        rel: "noreferrer"
      }, chunks)
    }),
    inlineControl: /*#__PURE__*/react.createElement(UserRulesSwitcher, null)
  }), settingsStore.isFullscreenUserRulesEditorOpen ? /*#__PURE__*/react.createElement("div", {
    className: "editor__open"
  }, /*#__PURE__*/react.createElement("div", {
    className: "editor__open-title"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_user_rules_editor_stub_title')), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--m button--green actions__btn",
    onClick: handleGoToEditorClick
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_user_rules_editor_stub_go_to_editor_button'))) : /*#__PURE__*/react.createElement(UserRulesEditor/* UserRulesEditor */.R, {
    uiStore: uiStore
  }));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/UserRules/index.js

// EXTERNAL MODULE: ./Extension/src/pages/common/components/UserRulesEditor/UserRulesEditorStore.js
var UserRulesEditorStore = __webpack_require__(13135);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Miscellaneous/Miscellaneous.jsx











const Miscellaneous = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore,
    uiStore
  } = (0,react.useContext)(rootStore);
  const userRulesEditorStoreContext = (0,react.useContext)(UserRulesEditorStore/* userRulesEditorStore */.O);
  const {
    settings
  } = settingsStore;
  const [isOpenResetStatsModal, setIsOpenResetStatsModal] = (0,react.useState)(false);
  const [isOpenResetSettingsModal, setIsOpenResetSettingsModal] = (0,react.useState)(false);

  if (!settings) {
    return null;
  } // eslint-disable-next-line max-len


  const COLLECT_HITS_LEARN_MORE_URL = 'https://link.adtidy.org/forward.html?action=filter_rules&from=options_screen&app=browser_extension';

  const settingChangeHandler = async ({
    id,
    data
  }) => {
    log/* log.info */.c.info(`Setting ${id} set to ${data}`);
    await settingsStore.updateSetting(id, data);
  };

  const handleFilteringLogClick = async () => {
    await messenger/* messenger.openFilteringLog */.d.openFilteringLog();
  };

  const handleResetStatisticsClick = async () => {
    setIsOpenResetStatsModal(true);
  };

  const handleResetStatisticsConfirm = async () => {
    await messenger/* messenger.resetStatistics */.d.resetStatistics();
    uiStore.addNotification({
      description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_reset_stats_done')
    });
  };

  const handleResetSettingsClick = async () => {
    setIsOpenResetSettingsModal(true);
  };

  const handleResetSettingsConfirm = async () => {
    settingsStore.setAllowlistSizeReset(true);
    userRulesEditorStoreContext.setUserRulesEditorPrefsDropped(true);
    const result = await messenger/* messenger.resetSettings */.d.resetSettings();

    if (result) {
      /* force all setting context data update with 'firstRender' option */
      settingsStore.requestOptionsData(true);
      uiStore.addNotification({
        description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_reset_settings_done')
      });
    } else {
      uiStore.addNotification({
        description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_reset_settings_error')
      });
    }
  };

  const {
    USE_OPTIMIZED_FILTERS,
    DISABLE_COLLECT_HITS,
    DISABLE_SHOW_CONTEXT_MENU,
    DISABLE_SHOW_ADGUARD_PROMO_INFO,
    DISABLE_SHOW_APP_UPDATED_NOTIFICATION,
    DISABLE_SHOW_PAGE_STATS,
    DEFAULT_ALLOWLIST_MODE
  } = settings.names;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(SettingsSection, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_miscellaneous_settings')
  }, /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_use_optimized_filters'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_use_optimized_filters_desc'),
    disabled: !settings.values[USE_OPTIMIZED_FILTERS],
    id: USE_OPTIMIZED_FILTERS,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_use_optimized_filters'),
    type: SETTINGS_TYPES.CHECKBOX,
    value: settings.values[USE_OPTIMIZED_FILTERS],
    handler: settingChangeHandler
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_allowlist_invert'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_allowlist_invert_desc'),
    id: DEFAULT_ALLOWLIST_MODE,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_allowlist_invert'),
    type: SETTINGS_TYPES.CHECKBOX,
    value: settings.values[DEFAULT_ALLOWLIST_MODE],
    handler: settingChangeHandler,
    inverted: true
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_collect_hit_stats_title'),
    description: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_collect_hit_stats_desc', {
      a: chunks => /*#__PURE__*/react.createElement("a", {
        href: COLLECT_HITS_LEARN_MORE_URL,
        target: "_blank",
        rel: "noopener noreferrer"
      }, chunks)
    }),
    disabled: settings.values[DISABLE_COLLECT_HITS],
    id: DISABLE_COLLECT_HITS,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_collect_hit_stats_title'),
    inverted: true,
    value: settings.values[DISABLE_COLLECT_HITS],
    handler: settingChangeHandler
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_show_blocked_ads_count_title'),
    disabled: settings.values[DISABLE_SHOW_PAGE_STATS],
    id: DISABLE_SHOW_PAGE_STATS,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_show_blocked_ads_count_title'),
    inverted: true,
    value: settings.values[DISABLE_SHOW_PAGE_STATS],
    handler: settingChangeHandler
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_show_context_menu_title'),
    disabled: settings.values[DISABLE_SHOW_CONTEXT_MENU],
    id: DISABLE_SHOW_CONTEXT_MENU,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_show_context_menu_title'),
    inverted: true,
    value: settings.values[DISABLE_SHOW_CONTEXT_MENU],
    handler: settingChangeHandler
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_show_adguard_full_version_title'),
    disabled: settings.values[DISABLE_SHOW_ADGUARD_PROMO_INFO],
    id: DISABLE_SHOW_ADGUARD_PROMO_INFO,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_show_adguard_full_version_title'),
    inverted: true,
    value: settings.values[DISABLE_SHOW_ADGUARD_PROMO_INFO],
    handler: settingChangeHandler
  }), /*#__PURE__*/react.createElement(SettingsSetCheckbox, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_show_app_updated_notification'),
    disabled: settings.values[DISABLE_SHOW_APP_UPDATED_NOTIFICATION],
    id: DISABLE_SHOW_APP_UPDATED_NOTIFICATION,
    type: SETTINGS_TYPES.CHECKBOX,
    label: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_show_app_updated_notification'),
    inverted: true,
    value: settings.values[DISABLE_SHOW_APP_UPDATED_NOTIFICATION],
    handler: settingChangeHandler
  }), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--list",
    onClick: handleFilteringLogClick
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_open_log')), isOpenResetStatsModal && /*#__PURE__*/react.createElement(ConfirmModal, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_clear_stats_confirm_modal_title'),
    isOpen: isOpenResetStatsModal,
    setIsOpen: setIsOpenResetStatsModal,
    onConfirm: handleResetStatisticsConfirm,
    customConfirmTitle: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_clear_stats_confirm_modal_clear_button'),
    customCancelTitle: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_confirm_modal_cancel_button')
  }), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--list button--red",
    onClick: handleResetStatisticsClick
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_reset_stats')), isOpenResetSettingsModal && /*#__PURE__*/react.createElement(ConfirmModal, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_reset_settings_confirm_modal_title'),
    isOpen: isOpenResetSettingsModal,
    setIsOpen: setIsOpenResetSettingsModal,
    onConfirm: handleResetSettingsConfirm,
    customConfirmTitle: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_reset_settings_confirm_modal_clear_button'),
    customCancelTitle: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_confirm_modal_cancel_button')
  }), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--list button--red",
    onClick: handleResetSettingsClick
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_reset_settings'))));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Miscellaneous/index.js

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/About/about-page.pcss
var about_page = __webpack_require__(20853);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/About/about-page.pcss

      
      
      
      
      
      
      
      
      

var about_page_options = {};

about_page_options.styleTagTransform = (styleTagTransform_default());
about_page_options.setAttributes = (setAttributesWithoutAttributes_default());

      about_page_options.insert = insertBySelector_default().bind(null, "head");
    
about_page_options.domAPI = (styleDomAPI_default());
about_page_options.insertStyleElement = (insertStyleElement_default());

var about_page_update = injectStylesIntoStyleTag_default()(about_page/* default */.Z, about_page_options);




       /* harmony default export */ const About_about_page = (about_page/* default */.Z && about_page/* default.locals */.Z.locals ? about_page/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/About/About.jsx






const About = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore
  } = (0,react.useContext)(rootStore);
  const {
    version
  } = settingsStore;

  if (!version) {
    return null;
  }

  const currentYear = new Date().getFullYear();
  const copyRightText = `© 2009-${currentYear} AdGuard Software Ltd.`;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "title__container title__container--about"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_about'))), /*#__PURE__*/react.createElement("div", {
    className: "about"
  }, /*#__PURE__*/react.createElement("div", {
    className: "about__title"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_about_title')), /*#__PURE__*/react.createElement("div", {
    className: "about__version"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_about_version'), ' ', version), /*#__PURE__*/react.createElement("div", {
    className: "about__copyright"
  }, /*#__PURE__*/react.createElement("div", {
    className: "about__copyright-item"
  }, copyRightText), /*#__PURE__*/react.createElement("div", {
    className: "about__copyright-item"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_copyright'))), /*#__PURE__*/react.createElement("div", {
    className: "links-menu"
  }, /*#__PURE__*/react.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: pages_constants/* CHANGELOG_URL */.D2,
    className: "links-menu__item"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_open_changelog')), /*#__PURE__*/react.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: pages_constants/* PRIVACY_URL */.Sb,
    className: "links-menu__item"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_privacy_policy')), /*#__PURE__*/react.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: pages_constants/* WEBSITE_URL */.o6,
    className: "links-menu__item"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_site')), /*#__PURE__*/react.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: pages_constants/* DISCUSS_URL */.sn,
    className: "links-menu__item"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_discuss')), /*#__PURE__*/react.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: pages_constants/* ACKNOWLEDGMENTS_URL */.YH,
    className: "links-menu__item"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_acknowledgment')), /*#__PURE__*/react.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: pages_constants/* GITHUB_URL */.Kd,
    className: "links-menu__item"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_github')))));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/About/index.js

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Footer/footer.pcss
var footer = __webpack_require__(97970);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Footer/footer.pcss

      
      
      
      
      
      
      
      
      

var footer_options = {};

footer_options.styleTagTransform = (styleTagTransform_default());
footer_options.setAttributes = (setAttributesWithoutAttributes_default());

      footer_options.insert = insertBySelector_default().bind(null, "head");
    
footer_options.domAPI = (styleDomAPI_default());
footer_options.insertStyleElement = (insertStyleElement_default());

var footer_update = injectStylesIntoStyleTag_default()(footer/* default */.Z, footer_options);




       /* harmony default export */ const Footer_footer = (footer/* default */.Z && footer/* default.locals */.Z.locals ? footer/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Footer/Footer.jsx







const Footer = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore
  } = (0,react.useContext)(rootStore);

  const hideRate = () => {
    settingsStore.hideFooterRateShow();
  };

  const handleRateClick = async () => {
    await messenger/* messenger.openExtensionStore */.d.openExtensionStore();
    settingsStore.hideFooterRateShow();
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "footer"
  }, settingsStore.footerRateShowState && /*#__PURE__*/react.createElement("div", {
    className: "footer__rate"
  }, /*#__PURE__*/react.createElement("div", {
    className: "footer__in footer__in--rate container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "footer__rate-desc"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_do_you_like_question')), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--green button--s",
    onClick: handleRateClick
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_footer_like_us_cta')), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "footer__rate-close",
    onClick: hideRate,
    "aria-label": reactTranslator/* reactTranslator.getMessage */._.getMessage('close_button_title')
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#cross",
    classname: "icon--cross"
  })))));
});
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Footer/index.js

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Notifications/Notification.jsx





const Notification = props => {
  const [notificationOnClose, setNotificationOnClose] = (0,react.useState)(false);
  const {
    id,
    title,
    description
  } = props;
  const {
    uiStore
  } = (0,react.useContext)(rootStore);
  const displayTimeoutAnimationMs = 5000;
  const displayTimeoutMs = 5300;
  (0,react.useEffect)(() => {
    const displayTimeoutAnimationId = setTimeout(() => {
      setNotificationOnClose(true);
    }, displayTimeoutAnimationMs);
    const displayTimeout = setTimeout(() => {
      uiStore.removeNotification(id);
    }, displayTimeoutMs);
    return () => {
      clearTimeout(displayTimeoutAnimationId);
      clearTimeout(displayTimeout);
    };
  }, [id, uiStore]);
  const notificationClassnames = classnames_default()('notification', {
    'notification--close': notificationOnClose
  });

  const close = () => {
    setNotificationOnClose(true);
    setTimeout(() => {
      uiStore.removeNotification(id);
    }, 300);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: notificationClassnames
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#info",
    classname: "notification__icon notification__icon--info"
  }), /*#__PURE__*/react.createElement("div", {
    className: "notification__message"
  }, title.length > 0 && /*#__PURE__*/react.createElement("div", {
    className: "notification__title"
  }, title), /*#__PURE__*/react.createElement("div", {
    className: "notification__description"
  }, description)), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button notification__close",
    onClick: close
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#cross",
    classname: "notification__icon notification__icon--close"
  })));
};
Notification.propTypes = {
  id: (prop_types_default()).string.isRequired,
  title: (prop_types_default()).string.isRequired,
  description: (prop_types_default()).string.isRequired
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Notifications/notifications.pcss
var notifications = __webpack_require__(23667);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Notifications/notifications.pcss

      
      
      
      
      
      
      
      
      

var notifications_options = {};

notifications_options.styleTagTransform = (styleTagTransform_default());
notifications_options.setAttributes = (setAttributesWithoutAttributes_default());

      notifications_options.insert = insertBySelector_default().bind(null, "head");
    
notifications_options.domAPI = (styleDomAPI_default());
notifications_options.insertStyleElement = (insertStyleElement_default());

var notifications_update = injectStylesIntoStyleTag_default()(notifications/* default */.Z, notifications_options);




       /* harmony default export */ const Notifications_notifications = (notifications/* default */.Z && notifications/* default.locals */.Z.locals ? notifications/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Notifications/Notifications.jsx





const Notifications = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    uiStore
  } = (0,react.useContext)(rootStore);
  const {
    notifications
  } = uiStore;

  if (notifications.length === 0) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "notifications"
  }, notifications.map(notification => {
    const {
      id,
      description,
      title
    } = notification;
    return /*#__PURE__*/react.createElement(Notification, {
      key: id,
      id: id,
      title: title,
      description: description
    });
  }));
});
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Notifications/index.js

// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icons.jsx
var Icons = __webpack_require__(48241);
// EXTERNAL MODULE: ./Extension/src/pages/common/hooks/useAppearanceTheme.js
var useAppearanceTheme = __webpack_require__(72730);
// EXTERNAL MODULE: ./Extension/src/pages/options/styles/styles.pcss
var styles_styles = __webpack_require__(58575);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Options/Options.jsx





















const Options = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    settingsStore,
    uiStore
  } = (0,react.useContext)(rootStore);
  (0,useAppearanceTheme/* useAppearanceTheme */.D)(settingsStore.appearanceTheme);
  (0,react.useEffect)(() => {
    let removeListenerCallback = () => {};

    (async () => {
      await settingsStore.requestOptionsData(true);
      const events = [common_constants/* NOTIFIER_TYPES.REQUEST_FILTER_UPDATED */.Qp.REQUEST_FILTER_UPDATED, common_constants/* NOTIFIER_TYPES.UPDATE_ALLOWLIST_FILTER_RULES */.Qp.UPDATE_ALLOWLIST_FILTER_RULES, common_constants/* NOTIFIER_TYPES.FILTERS_UPDATE_CHECK_READY */.Qp.FILTERS_UPDATE_CHECK_READY, common_constants/* NOTIFIER_TYPES.SETTING_UPDATED */.Qp.SETTING_UPDATED, common_constants/* NOTIFIER_TYPES.FULLSCREEN_USER_RULES_EDITOR_UPDATED */.Qp.FULLSCREEN_USER_RULES_EDITOR_UPDATED];
      removeListenerCallback = await messenger/* messenger.createEventListener */.d.createEventListener(events, async message => {
        const {
          type
        } = message;

        switch (type) {
          case common_constants/* NOTIFIER_TYPES.REQUEST_FILTER_UPDATED */.Qp.REQUEST_FILTER_UPDATED:
            {
              await settingsStore.requestOptionsData();
              break;
            }

          case common_constants/* NOTIFIER_TYPES.UPDATE_ALLOWLIST_FILTER_RULES */.Qp.UPDATE_ALLOWLIST_FILTER_RULES:
            {
              await settingsStore.getAllowlist();
              break;
            }

          case common_constants/* NOTIFIER_TYPES.FILTERS_UPDATE_CHECK_READY */.Qp.FILTERS_UPDATE_CHECK_READY:
            {
              const [updatedFilters] = message.data;
              settingsStore.refreshFilters(updatedFilters);
              uiStore.addNotification((0,helpers/* updateFilterDescription */.$8)(updatedFilters));
              break;
            }

          case common_constants/* NOTIFIER_TYPES.SETTING_UPDATED */.Qp.SETTING_UPDATED:
            {
              await settingsStore.requestOptionsData();
              break;
            }

          case common_constants/* NOTIFIER_TYPES.FULLSCREEN_USER_RULES_EDITOR_UPDATED */.Qp.FULLSCREEN_USER_RULES_EDITOR_UPDATED:
            {
              const [isOpen] = message.data;
              await settingsStore.setFullscreenUserRulesEditorState(isOpen);
              break;
            }

          default:
            {
              log/* log.debug */.c.debug('Undefined message type:', type);
              break;
            }
        }
      });
    })();

    return () => {
      removeListenerCallback();
    };
  }, [settingsStore, uiStore]);

  if (!settingsStore.optionsReadyToRender) {
    return null;
  }

  return /*#__PURE__*/react.createElement(HashRouter, {
    hashType: "noslash"
  }, /*#__PURE__*/react.createElement(Icons/* Icons */.P, null), /*#__PURE__*/react.createElement("div", {
    className: "page"
  }, /*#__PURE__*/react.createElement(Sidebar, null), /*#__PURE__*/react.createElement("div", {
    className: "inner"
  }, /*#__PURE__*/react.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react.createElement(Notifications, null), /*#__PURE__*/react.createElement(Switch, null, /*#__PURE__*/react.createElement(Route, {
    path: "/",
    exact: true,
    component: General
  }), /*#__PURE__*/react.createElement(Route, {
    path: "/filters",
    component: Filters
  }), /*#__PURE__*/react.createElement(Route, {
    path: "/stealth",
    component: Stealth
  }), /*#__PURE__*/react.createElement(Route, {
    path: "/allowlist",
    component: Allowlist
  }), /*#__PURE__*/react.createElement(Route, {
    path: "/user-filter",
    component: UserRules
  }), /*#__PURE__*/react.createElement(Route, {
    path: "/miscellaneous",
    component: Miscellaneous
  }), /*#__PURE__*/react.createElement(Route, {
    path: "/about",
    component: About
  }), /*#__PURE__*/react.createElement(Route, {
    component: General
  }))), /*#__PURE__*/react.createElement(Footer, null))));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Options/index.js

;// CONCATENATED MODULE: ./Extension/src/pages/options/index.jsx






const optionsPage = {
  init: () => {
    document.title = reactTranslator/* reactTranslator.getMessage */._.getMessage('options_settings');
    document.documentElement.lang = i18n/* i18n.getUILanguage */.a.getUILanguage();
    react_dom.render( /*#__PURE__*/react.createElement(SelectProvider, null, /*#__PURE__*/react.createElement(Options, null)), document.getElementById('root'));
  }
};
;// CONCATENATED MODULE: ./Extension/pages/options/index.js

optionsPage.init();

/***/ }),

/***/ 92273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* reexport default from dynamic */ webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53679);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _windows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5802);


(0,_windows__WEBPACK_IMPORTED_MODULE_1__/* .patchWindows */ .x)((webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ 5802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ patchWindows)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * This function patches if necessary browser.windows implementation for Firefox for Android
 */
const patchWindows = function (browser) {
  // Make compatible with Android WebExt
  if (typeof browser.windows === 'undefined') {
    browser.windows = function () {
      const defaultWindow = {
        id: 1,
        type: 'normal'
      };
      const emptyListener = {
        addListener() {// Doing nothing
        }

      };

      const create = function (createData) {
        return Promise.resolve(defaultWindow);
      };

      const update = function (windowId, data) {
        return Promise.resolve();
      };

      const getAll = function (query) {
        return Promise.resolve(defaultWindow);
      };

      const getLastFocused = function () {
        return Promise.resolve(defaultWindow);
      };

      return {
        onCreated: emptyListener,
        onRemoved: emptyListener,
        onFocusChanged: emptyListener,
        create,
        update,
        getAll,
        getLastFocused
      };
    }();
  }
};

/***/ }),

/***/ 71351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VX": () => (/* binding */ runtimeImpl),
/* harmony export */   "ey": () => (/* binding */ addMinDurationTime)
/* harmony export */ });
/* unused harmony exports i18n, sleep, sleepIfNecessary */
/* harmony import */ var _background_extension_api_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92273);
/**
 * This file is part of Adguard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * Adguard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Adguard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adguard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

const runtimeImpl = (() => {
  return {
    onMessage: _background_extension_api_browser__WEBPACK_IMPORTED_MODULE_0__/* .browser.runtime.onMessage */ .X.runtime.onMessage,
    sendMessage: _background_extension_api_browser__WEBPACK_IMPORTED_MODULE_0__/* .browser.runtime.sendMessage */ .X.runtime.sendMessage
  };
})(); // eslint-disable-next-line prefer-destructuring

const i18n = _background_extension_api_browser__WEBPACK_IMPORTED_MODULE_0__/* .browser.i18n */ .X.i18n;
/**
 * Sleeps given period of time
 * @param wait
 * @returns {Promise<unknown>}
 */

const sleep = wait => {
  return new Promise(resolve => {
    setTimeout(resolve, wait);
  });
};
/**
 * Sleeps necessary period of time if minimum duration didn't pass since entry time
 * @param {number} entryTimeMs
 * @param {number} minDurationMs
 * @returns {Promise<void>}
 */

const sleepIfNecessary = async (entryTimeMs, minDurationMs) => {
  if (Date.now() - entryTimeMs < minDurationMs) {
    await sleep(minDurationMs - (Date.now() - entryTimeMs));
  }
};
/**
 * Executes async function with at least required time
 * @param fn
 * @param minDurationMs
 */

const addMinDurationTime = (fn, minDurationMs) => {
  return async (...args) => {
    const start = Date.now();

    try {
      const response = await fn(...args);
      await sleepIfNecessary(start, minDurationMs);
      return response;
    } catch (e) {
      await sleepIfNecessary(start, minDurationMs);
      throw e;
    }
  };
};

/***/ }),

/***/ 84568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CI": () => (/* binding */ ANTIBANNER_GROUPS_ID),
/* harmony export */   "Jn": () => (/* binding */ STEALTH_ACTIONS),
/* harmony export */   "Oi": () => (/* binding */ FULLSCREEN_USER_RULES_EDITOR),
/* harmony export */   "Qp": () => (/* binding */ NOTIFIER_TYPES),
/* harmony export */   "TJ": () => (/* binding */ NAVIGATION_TAGS),
/* harmony export */   "VC": () => (/* binding */ CUSTOM_FILTERS_GROUP_DISPLAY_NUMBER),
/* harmony export */   "XR": () => (/* binding */ TRUSTED_TAG),
/* harmony export */   "XS": () => (/* binding */ WASTE_CHARACTERS),
/* harmony export */   "du": () => (/* binding */ FILTERING_LOG),
/* harmony export */   "gu": () => (/* binding */ ANTIBANNER_FILTERS_ID),
/* harmony export */   "ih": () => (/* binding */ CUSTOM_FILTERS_START_ID),
/* harmony export */   "nn": () => (/* binding */ SCROLLBAR_WIDTH),
/* harmony export */   "oK": () => (/* binding */ MESSAGE_TYPES)
/* harmony export */ });
/**
 * Filter ids used in the code on the background page and filtering log page
 */
const ANTIBANNER_FILTERS_ID = {
  STEALTH_MODE_FILTER_ID: -1,
  USER_FILTER_ID: 0,
  RUSSIAN_FILTER_ID: 1,
  ENGLISH_FILTER_ID: 2,
  TRACKING_FILTER_ID: 3,
  SOCIAL_FILTER_ID: 4,
  SEARCH_AND_SELF_PROMO_FILTER_ID: 10,
  URL_TRACKING_FILTER_ID: 17,
  ALLOWLIST_FILTER_ID: 100,
  EASY_PRIVACY: 118,
  FANBOY_ANNOYANCES: 122,
  FANBOY_SOCIAL: 123,
  FANBOY_ENHANCED: 215,
  MOBILE_ADS_FILTER_ID: 11
};
/**
 * Group ids used in the code on the multiple entry points
 */

const ANTIBANNER_GROUPS_ID = {
  // custom filters group identifier
  CUSTOM_FILTERS_GROUP_ID: 0,
  PRIVACY_FILTERS_GROUP_ID: 2,
  // other filters group identifier
  OTHER_FILTERS_GROUP_ID: 6,
  // language-specific group identifier
  LANGUAGE_FILTERS_GROUP_ID: 7
};
/**
 * Stealth action bitwise masks used o the background page and on the filtering log page
 */

const STEALTH_ACTIONS = {
  HIDE_REFERRER: 1 << 0,
  HIDE_SEARCH_QUERIES: 1 << 1,
  BLOCK_CHROME_CLIENT_DATA: 1 << 2,
  SEND_DO_NOT_TRACK: 1 << 3,
  STRIPPED_TRACKING_URL: 1 << 4,
  FIRST_PARTY_COOKIES: 1 << 5,
  THIRD_PARTY_COOKIES: 1 << 6
};
/**
 * Message types used for message passing between background page and
 * other pages (popup, filtering log, content scripts)
 */

const MESSAGE_TYPES = {
  SCRIPTLET_CLOSE_WINDOW: 'scriptletCloseWindow',
  CREATE_EVENT_LISTENER: 'createEventListener',
  REMOVE_LISTENER: 'removeListener',
  OPEN_EXTENSION_STORE: 'openExtensionStore',
  OPEN_COMPARE_PAGE: 'openComparePage',
  ADD_AND_ENABLE_FILTER: 'addAndEnableFilter',
  APPLY_SETTINGS_JSON: 'applySettingsJson',
  OPEN_FILTERING_LOG: 'openFilteringLog',
  SET_FILTERING_LOG_WINDOW_STATE: 'setFilteringLogWindowState',
  OPEN_FULLSCREEN_USER_RULES: 'openFullscreenUserRules',
  RESET_BLOCKED_ADS_COUNT: 'resetBlockedAdsCount',
  RESET_SETTINGS: 'resetSettings',
  GET_USER_RULES: 'getUserRules',
  SAVE_USER_RULES: 'saveUserRules',
  GET_ALLOWLIST_DOMAINS: 'getAllowlistDomains',
  SAVE_ALLOWLIST_DOMAINS: 'saveAllowlistDomains',
  CHECK_ANTIBANNER_FILTERS_UPDATE: 'checkAntiBannerFiltersUpdate',
  DISABLE_FILTERS_GROUP: 'disableFiltersGroup',
  DISABLE_ANTIBANNER_FILTER: 'disableAntiBannerFilter',
  LOAD_CUSTOM_FILTER_INFO: 'loadCustomFilterInfo',
  SUBSCRIBE_TO_CUSTOM_FILTER: 'subscribeToCustomFilter',
  REMOVE_ANTIBANNER_FILTER: 'removeAntiBannerFilter',
  GET_TAB_INFO_FOR_POPUP: 'getTabInfoForPopup',
  CHANGE_APPLICATION_FILTERING_DISABLED: 'changeApplicationFilteringDisabled',
  OPEN_SETTINGS_TAB: 'openSettingsTab',
  OPEN_ASSISTANT: 'openAssistant',
  OPEN_ABUSE_TAB: 'openAbuseTab',
  OPEN_SITE_REPORT_TAB: 'openSiteReportTab',
  RESET_CUSTOM_RULES_FOR_PAGE: 'resetCustomRulesForPage',
  REMOVE_ALLOWLIST_DOMAIN: 'removeAllowlistDomainPopup',
  ADD_ALLOWLIST_DOMAIN_POPUP: 'addAllowlistDomainPopup',
  GET_STATISTICS_DATA: 'getStatisticsData',
  ON_OPEN_FILTERING_LOG_PAGE: 'onOpenFilteringLogPage',
  GET_FILTERING_LOG_DATA: 'getFilteringLogData',
  INITIALIZE_FRAME_SCRIPT: 'initializeFrameScript',
  ON_CLOSE_FILTERING_LOG_PAGE: 'onCloseFilteringLogPage',
  GET_FILTERING_INFO_BY_TAB_ID: 'getFilteringInfoByTabId',
  SYNCHRONIZE_OPEN_TABS: 'synchronizeOpenTabs',
  CLEAR_EVENTS_BY_TAB_ID: 'clearEventsByTabId',
  REFRESH_PAGE: 'refreshPage',
  OPEN_TAB: 'openTab',
  CONTENT_SCRIPT_ADD_USER_RULE: 'contentScriptAddUserRule',
  FILTERING_LOG_ADD_USER_RULE: 'filteringLogAddUserRule',
  DEVTOOLS_ADD_USER_RULE: 'devtoolsAddUserRule',
  UN_ALLOWLIST_FRAME: 'unAllowlistFrame',
  REMOVE_USER_RULE: 'removeUserRule',
  GET_TAB_FRAME_INFO_BY_ID: 'getTabFrameInfoById',
  ENABLE_FILTERS_GROUP: 'enableFiltersGroup',
  NOTIFY_LISTENERS: 'notifyListeners',
  ADD_LONG_LIVED_CONNECTION: 'addLongLivedConnection',
  GET_OPTIONS_DATA: 'getOptionsData',
  CHANGE_USER_SETTING: 'changeUserSetting',
  CHECK_REQUEST_FILTER_READY: 'checkRequestFilterReady',
  OPEN_THANKYOU_PAGE: 'openThankYouPage',
  OPEN_SAFEBROWSING_TRUSTED: 'openSafebrowsingTrusted',
  GET_SELECTORS_AND_SCRIPTS: 'getSelectorsAndScripts',
  CHECK_PAGE_SCRIPT_WRAPPER_REQUEST: 'checkPageScriptWrapperRequest',
  PROCESS_SHOULD_COLLAPSE: 'processShouldCollapse',
  PROCESS_SHOULD_COLLAPSE_MANY: 'processShouldCollapseMany',
  ADD_FILTERING_SUBSCRIPTION: 'addFilterSubscription',
  SET_NOTIFICATION_VIEWED: 'setNotificationViewed',
  SAVE_CSS_HITS_STATS: 'saveCssHitStats',
  GET_COOKIE_RULES: 'getCookieRules',
  SAVE_COOKIE_LOG_EVENT: 'saveCookieRuleEvent',
  LOAD_SETTINGS_JSON: 'loadSettingsJson',
  ADD_URL_TO_TRUSTED: 'addUrlToTrusted',
  SET_PRESERVE_LOG_STATE: 'setPreserveLogState',
  GET_USER_RULES_EDITOR_DATA: 'getUserRulesEditorData',
  GET_EDITOR_STORAGE_CONTENT: 'getEditorStorageContent',
  SET_EDITOR_STORAGE_CONTENT: 'setEditorStorageContent',
  CONVERT_RULES_TEXT: 'convertRulesText'
};
const NOTIFIER_TYPES = {
  ADD_RULES: 'event.add.rules',
  REMOVE_RULE: 'event.remove.rule',
  UPDATE_FILTER_RULES: 'event.update.filter.rules',
  FILTER_GROUP_ENABLE_DISABLE: 'filter.group.enable.disable',
  // enabled or disabled filter group
  FILTER_ENABLE_DISABLE: 'event.filter.enable.disable',
  // Enabled or disabled
  FILTER_ADD_REMOVE: 'event.filter.add.remove',
  // Added or removed
  ADS_BLOCKED: 'event.ads.blocked',
  START_DOWNLOAD_FILTER: 'event.start.download.filter',
  SUCCESS_DOWNLOAD_FILTER: 'event.success.download.filter',
  ERROR_DOWNLOAD_FILTER: 'event.error.download.filter',
  ENABLE_FILTER_SHOW_POPUP: 'event.enable.filter.show.popup',
  LOG_EVENT: 'event.log.track',
  UPDATE_TAB_BUTTON_STATE: 'event.update.tab.button.state',
  REQUEST_FILTER_UPDATED: 'event.request.filter.updated',
  APPLICATION_INITIALIZED: 'event.application.initialized',
  APPLICATION_UPDATED: 'event.application.updated',
  CHANGE_PREFS: 'event.change.prefs',
  UPDATE_FILTERS_SHOW_POPUP: 'event.update.filters.show.popup',
  USER_FILTER_UPDATED: 'event.user.filter.updated',
  UPDATE_ALLOWLIST_FILTER_RULES: 'event.update.allowlist.filter.rules',
  SETTING_UPDATED: 'event.update.setting.value',
  FILTERS_UPDATE_CHECK_READY: 'event.update.filters.check',
  // Log events
  TAB_ADDED: 'log.tab.added',
  TAB_CLOSE: 'log.tab.close',
  TAB_UPDATE: 'log.tab.update',
  TAB_RESET: 'log.tab.reset',
  LOG_EVENT_ADDED: 'log.event.added',
  // Sync events
  SETTINGS_UPDATED: 'event.sync.finished',
  // Fullscreen user rules events
  FULLSCREEN_USER_RULES_EDITOR_UPDATED: 'event.user.rules.editor.updated'
};
const FULLSCREEN_USER_RULES_EDITOR = 'fullscreen_user_rules_editor';
const FILTERING_LOG = 'filtering-log';
const NAVIGATION_TAGS = {
  REGULAR: 'regular',
  PARTY: 'party'
};
/**
 * Trusted tag for custom filters
 */

const TRUSTED_TAG = 'trusted';
/**
 * Custom filters group display number
 *
 * @type {number}
 */

const CUSTOM_FILTERS_GROUP_DISPLAY_NUMBER = 99;
/**
 * Custom filters identifiers starts from this number
 *
 * @type {number}
 */

const CUSTOM_FILTERS_START_ID = 1000; // Unnecessary characters that will be replaced

const WASTE_CHARACTERS = /[.*+?^${}()|[\]\\]/g; // Custom scrollbar width

const SCROLLBAR_WIDTH = 12;

/***/ }),

/***/ 57122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ i18n)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53679);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);

const i18n = {
  getMessage: (webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().i18n.getMessage),
  getUILanguage: (webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().i18n.getUILanguage),
  getBaseMessage: key => key,
  getBaseUILanguage: () => 'en'
};

/***/ }),

/***/ 38647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ reactTranslator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70846);
/* harmony import */ var _adguard_translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58396);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57122);



/**
 * Retrieves localised messages by key, formats and converts into react components or string
 */

const reactTranslator = _adguard_translate__WEBPACK_IMPORTED_MODULE_1__/* .translate.createReactTranslator */ .Iu.createReactTranslator(_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .a, react__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ 99875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ translator)
/* harmony export */ });
/* harmony import */ var _adguard_translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58396);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57122);


/**
 * Retrieves localised message by key, formats it and converts into string
 */

const translator = _adguard_translate__WEBPACK_IMPORTED_MODULE_0__/* .translate.createTranslator */ .Iu.createTranslator(_i18n__WEBPACK_IMPORTED_MODULE_1__/* .i18n */ .a);

/***/ }),

/***/ 3702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CA": () => (/* binding */ isWindowsOs),
/* harmony export */   "CE": () => (/* binding */ chromeVersion),
/* harmony export */   "Dt": () => (/* binding */ isAndroid),
/* harmony export */   "Q5": () => (/* binding */ isMacOs),
/* harmony export */   "f0": () => (/* binding */ isOpera),
/* harmony export */   "kD": () => (/* binding */ isEdgeChromium),
/* harmony export */   "rI": () => (/* binding */ firefoxVersion),
/* harmony export */   "un": () => (/* binding */ isEdge),
/* harmony export */   "vU": () => (/* binding */ isFirefox),
/* harmony export */   "vs": () => (/* binding */ isYaBrowser)
/* harmony export */ });
/* unused harmony export isChrome */
/**
 * Check if current browser is as given
 * @param {string} browserName
 * @returns {boolean}
 */
const isTargetBrowser = browserName => {
  var _navigator$userAgentD;

  let brand;
  let uaStringName;

  if (browserName === 'Chrome') {
    brand = 'Google Chrome';
    uaStringName = 'Chrome';
  } else if (browserName === 'Firefox') {
    uaStringName = 'Firefox';
  } else if (browserName === 'Safari') {
    uaStringName = 'Safari';
  } else if (browserName === 'Opera') {
    brand = 'Opera';
    uaStringName = 'OPR';
  } else if (browserName === 'YaBrowser') {
    brand = 'Yandex';
    uaStringName = 'YaBrowser';
  } else if (browserName === 'Edge') {
    uaStringName = 'edge';
  } else if (browserName === 'EdgeChromium') {
    brand = 'Microsoft Edge';
    uaStringName = 'edg';
  }

  const brandsData = (_navigator$userAgentD = navigator.userAgentData) === null || _navigator$userAgentD === void 0 ? void 0 : _navigator$userAgentD.brands;

  if (!brandsData || !brand) {
    return navigator.userAgent.indexOf(uaStringName) >= 0;
  } // eslint-disable-next-line no-restricted-syntax


  for (const data of brandsData) {
    if (data.brand === brand) {
      return true;
    }
  }

  return false;
};
/**
 * Check if current platform is as given
 * @param {string} platformName
 * @returns
 */


const isTargetPlatform = platformName => {
  var _navigator$userAgentD2;

  const platformString = (_navigator$userAgentD2 = navigator.userAgentData) === null || _navigator$userAgentD2 === void 0 ? void 0 : _navigator$userAgentD2.platform;
  return platformString ? platformString.toUpperCase().indexOf(platformName) >= 0 : navigator.userAgent.toUpperCase().indexOf(platformName) >= 0;
};
/**
 * Get browser version by name
 * @param {string} browserName
 * @returns {number|null}
 */


const getBrowserVersion = browserName => {
  var _navigator$userAgentD3;

  let brand;
  let uaStringMask;

  if (browserName === 'Chrome') {
    brand = 'Google Chrome';
    uaStringMask = /\sChrome\/(\d+)\./;
  } else if (browserName === 'Firefox') {
    uaStringMask = /\sFirefox\/(\d+)\./;
  }

  const brandsData = (_navigator$userAgentD3 = navigator.userAgentData) === null || _navigator$userAgentD3 === void 0 ? void 0 : _navigator$userAgentD3.brands;

  if (!brandsData || !brand) {
    const match = uaStringMask.exec(navigator.userAgent);
    return match === null ? null : Number.parseInt(match[1], 10);
  } // eslint-disable-next-line no-restricted-syntax


  for (const data of brandsData) {
    if (data.brand === brand) {
      const {
        version
      } = data;
      return Number.parseInt(version, 10);
    }
  }

  return null;
};

const isChrome = isTargetBrowser('Chrome');
const isFirefox = isTargetBrowser('Firefox');
const isOpera = isTargetBrowser('Opera');
const isYaBrowser = isTargetBrowser('YaBrowser');
const isEdge = isTargetBrowser('Edge');
const isEdgeChromium = isTargetBrowser('EdgeChromium');
const chromeVersion = getBrowserVersion('Chrome');
const firefoxVersion = getBrowserVersion('Firefox');
const isMacOs = isTargetPlatform('MAC');
const isWindowsOs = isTargetPlatform('WIN');
const isAndroid = isTargetPlatform('ANDROID');

/***/ }),

/***/ 89089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* reexport */ AttachmentPortal)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(70846);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(76644);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/AttachmentPortal/AttacmentPortal.jsx


const TOOLTIP_EDGE_PADDING = 4; // px

const getCssString = (position, visible) => {
  const {
    x,
    y
  } = position;
  let css = `z-index:999;position:absolute;top:${y}px;left:${x}px;`;

  if (!visible) {
    css += 'visibility:hidden;';
  }

  return css;
};

const AttachmentPortal = ({
  rootId,
  position,
  children
}) => {
  const parent = document.getElementById(rootId);
  const ref = (0,react.useRef)(document.createElement('div'));
  (0,react.useEffect)(() => {
    const el = ref.current;
    el.setAttribute('style', getCssString(position, false));
    parent.appendChild(el);
    const rect = el.getBoundingClientRect();
    const offsetEdge = {
      top: rect.y,
      right: window.innerWidth - rect.right,
      bottom: window.innerHeight - rect.bottom,
      left: rect.x
    };
    const nextPosition = { ...position
    };

    if (offsetEdge.right < TOOLTIP_EDGE_PADDING) {
      nextPosition.x = rect.x + offsetEdge.right - TOOLTIP_EDGE_PADDING;
    }

    if (offsetEdge.left < TOOLTIP_EDGE_PADDING) {
      nextPosition.x = rect.x - offsetEdge.left + TOOLTIP_EDGE_PADDING;
    }

    if (offsetEdge.top < TOOLTIP_EDGE_PADDING) {
      nextPosition.y = rect.y - offsetEdge.top + TOOLTIP_EDGE_PADDING;
    }

    if (offsetEdge.bottom < TOOLTIP_EDGE_PADDING) {
      nextPosition.y = rect.y + offsetEdge.bottom - TOOLTIP_EDGE_PADDING;
    }

    el.setAttribute('style', getCssString(nextPosition, true));
    return () => {
      parent.removeChild(el);
    };
  }, [ref, parent, position]);
  return /*#__PURE__*/(0,react_dom.createPortal)(children, ref.current);
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/AttachmentPortal/index.js


/***/ }),

/***/ 85797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FP": () => (/* binding */ EVENTS),
/* harmony export */   "PO": () => (/* binding */ STATES),
/* harmony export */   "iO": () => (/* binding */ createSavingService)
/* harmony export */ });
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59989);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65697);
/* harmony import */ var _common_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9224);


const STATES = {
  IDLE: 'idle',
  SAVING: 'saving',
  SAVED: 'saved'
};
const EVENTS = {
  SAVE: 'save',
  SUCCESS: 'success',
  ERROR: 'error',
  TIMEOUT: 'timeout'
};
const SAVED_DISPLAY_TIMEOUT_MS = 1000;
const savingStateMachine = {
  initial: 'idle',
  states: {
    [STATES.IDLE]: {
      on: {
        [EVENTS.SAVE]: STATES.SAVING
      }
    },
    [STATES.SAVING]: {
      invoke: {
        src: 'saveData',
        onDone: {
          target: STATES.SAVED
        },
        onError: {
          target: STATES.SAVED,
          actions: (context, event) => {
            const {
              data: error
            } = event;
            _common_log__WEBPACK_IMPORTED_MODULE_0__/* .log.error */ .c.error(error.message);
          }
        }
      }
    },
    [STATES.SAVED]: {
      after: [{
        delay: SAVED_DISPLAY_TIMEOUT_MS,
        target: STATES.IDLE
      }]
    }
  }
};
const createSavingService = ({
  id,
  services
}) => {
  return (0,xstate__WEBPACK_IMPORTED_MODULE_1__/* .interpret */ .kJ)((0,xstate__WEBPACK_IMPORTED_MODULE_2__/* .Machine */ .J)({ ...savingStateMachine,
    id
  }, {
    services
  })).start().onEvent(event => {
    _common_log__WEBPACK_IMPORTED_MODULE_0__/* .log.debug */ .c.debug(id, event);
  }).onTransition(state => {
    _common_log__WEBPACK_IMPORTED_MODULE_0__/* .log.debug */ .c.debug(id, {
      currentState: state.value
    });
  });
};

/***/ }),

/***/ 84952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ SavingButton)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(70846);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8356);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/Editor/savingFSM.js
var savingFSM = __webpack_require__(85797);
// EXTERNAL MODULE: ./Extension/src/common/translators/reactTranslator.js
var reactTranslator = __webpack_require__(38647);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icon.jsx
var Icon = __webpack_require__(87235);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/SavingButton/SavingButton.jsx






const renderSavingState = savingRulesState => {
  const indicatorTextMap = {
    [savingFSM/* STATES.SAVED */.PO.SAVED]: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_editor_indicator_saved'),
    [savingFSM/* STATES.SAVING */.PO.SAVING]: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_editor_indicator_saving')
  };
  const indicatorText = indicatorTextMap[savingRulesState] || '';

  if (indicatorText === '') {
    return null;
  }

  const indicatorClassnames = classnames_default()('editor__label', {
    'editor__label--saved': savingRulesState === savingFSM/* STATES.SAVED */.PO.SAVED
  });
  return /*#__PURE__*/react.createElement("div", {
    className: indicatorClassnames
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#tick",
    classname: "icon--checked editor__icon"
  }), indicatorText);
};

const SavingButton = ({
  onClick,
  savingState,
  contentChanged
}) => {
  return /*#__PURE__*/react.createElement("div", {
    className: "actions__saving"
  }, renderSavingState(savingState), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--m button--green actions__btn",
    onClick: onClick,
    disabled: !contentChanged
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_editor_save')));
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/SavingButton/index.js


/***/ }),

/***/ 13135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ userRulesEditorStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5497);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26813);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70846);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31056);
/* harmony import */ var _services_messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37916);
/* harmony import */ var _Editor_savingFSM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85797);




var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;





const savingService = (0,_Editor_savingFSM__WEBPACK_IMPORTED_MODULE_2__/* .createSavingService */ .iO)({
  id: 'userRules',
  services: {
    saveData: (_, e) => _services_messenger__WEBPACK_IMPORTED_MODULE_1__/* .messenger.saveUserRules */ .d.saveUserRules(e.value)
  }
});
let UserRulesEditorStore = (_class = class UserRulesEditorStore {
  constructor() {
    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "settings", _descriptor, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "userRulesEditorContentChanged", _descriptor2, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "userRulesEditorWrap", _descriptor3, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "savingUserRulesState", _descriptor4, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "userRulesExportAvailable", _descriptor5, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "userRulesEditorPrefsDropped", _descriptor6, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "setUserRulesEditorContentChangedState", _descriptor7, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "setUserRulesExportAvailableState", _descriptor8, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "setUserRulesEditorPrefsDropped", _descriptor9, this);

    (0,mobx__WEBPACK_IMPORTED_MODULE_4__/* .makeObservable */ .rC)(this);
    savingService.onTransition(state => {
      (0,mobx__WEBPACK_IMPORTED_MODULE_4__/* .runInAction */ .z)(() => {
        this.savingUserRulesState = state.value;

        if (state.value === _Editor_savingFSM__WEBPACK_IMPORTED_MODULE_2__/* .STATES.SAVING */ .PO.SAVING) {
          this.userRulesEditorContentChanged = false;
        }
      });
    });
  }

  async requestSettingsData() {
    const data = await _services_messenger__WEBPACK_IMPORTED_MODULE_1__/* .messenger.getOptionsData */ .d.getOptionsData();
    (0,mobx__WEBPACK_IMPORTED_MODULE_4__/* .runInAction */ .z)(() => {
      this.settings = data.settings;
    });
  }

  updateSetting(settingId, value) {
    if (this.settings) {
      this.settings.values[settingId] = value;
    }

    _services_messenger__WEBPACK_IMPORTED_MODULE_1__/* .messenger.changeUserSetting */ .d.changeUserSetting(settingId, value);
  }

  async toggleUserRulesEditorWrapMode() {
    this.userRulesEditorWrap = !this.userRulesEditorWrap;

    if (this.settings) {
      await this.updateSetting(this.settings.names.USER_RULES_EDITOR_WRAP, this.userRulesEditorWrap);
    }
  }

  setUserRulesEditorWrapMode(value) {
    this.userRulesEditorWrap = value;
  }

  get userRulesEditorWrapState() {
    if (this.settings) {
      this.setUserRulesEditorWrapMode(this.settings.values[this.settings.names.USER_RULES_EDITOR_WRAP]);
    }

    return this.userRulesEditorWrap;
  }

  get userFilterEnabledSettingId() {
    return this.settings.names.USER_FILTER_ENABLED;
  }

  get userFilterEnabled() {
    if (this.settings) {
      return this.settings.values[this.userFilterEnabledSettingId];
    }

    return false;
  } // eslint-disable-next-line class-methods-use-this


  async saveUserRules(value) {
    savingService.send(_Editor_savingFSM__WEBPACK_IMPORTED_MODULE_2__/* .EVENTS.SAVE */ .FP.SAVE, {
      value
    });
  }

}, (_descriptor = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "settings", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "userRulesEditorContentChanged", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "userRulesEditorWrap", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor4 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "savingUserRulesState", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return savingService.initialState.value;
  }
}), _descriptor5 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "userRulesExportAvailable", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor6 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "userRulesEditorPrefsDropped", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "requestSettingsData", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], Object.getOwnPropertyDescriptor(_class.prototype, "requestSettingsData"), _class.prototype), _descriptor7 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "setUserRulesEditorContentChangedState", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return state => {
      this.userRulesEditorContentChanged = state;
    };
  }
}), _descriptor8 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "setUserRulesExportAvailableState", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return state => {
      this.userRulesExportAvailable = state;
    };
  }
}), _descriptor9 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "setUserRulesEditorPrefsDropped", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return state => {
      this.userRulesEditorPrefsDropped = state;
    };
  }
}), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "updateSetting", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], Object.getOwnPropertyDescriptor(_class.prototype, "updateSetting"), _class.prototype), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "toggleUserRulesEditorWrapMode", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], Object.getOwnPropertyDescriptor(_class.prototype, "toggleUserRulesEditorWrapMode"), _class.prototype), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "setUserRulesEditorWrapMode", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], Object.getOwnPropertyDescriptor(_class.prototype, "setUserRulesEditorWrapMode"), _class.prototype), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "userRulesEditorWrapState", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .Fl], Object.getOwnPropertyDescriptor(_class.prototype, "userRulesEditorWrapState"), _class.prototype), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "userFilterEnabledSettingId", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .Fl], Object.getOwnPropertyDescriptor(_class.prototype, "userFilterEnabledSettingId"), _class.prototype), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "userFilterEnabled", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .Fl], Object.getOwnPropertyDescriptor(_class.prototype, "userFilterEnabled"), _class.prototype)), _class);
const userRulesEditorStore = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(new UserRulesEditorStore());

/***/ }),

/***/ 98118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* reexport */ UserRulesEditor)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(70846);
// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js + 17 modules
var mobxreact_esm = __webpack_require__(82497);
// EXTERNAL MODULE: ./node_modules/ace-builds/src-noconflict/ace.js
var ace = __webpack_require__(50350);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(79412);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/@adguard/tsurlfilter/dist/es/simple-regex.js
var simple_regex = __webpack_require__(66167);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/UserRulesEditor/UserRulesEditorStore.js
var UserRulesEditorStore = __webpack_require__(13135);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/Editor/index.js + 3 modules
var Editor = __webpack_require__(34340);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/SavingButton/index.js + 1 modules
var SavingButton = __webpack_require__(84952);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/UserRulesEditor/UserRulesSavingButton.jsx




const UserRulesSavingButton = (0,mobxreact_esm/* observer */.Pi)(({
  onClick
}) => {
  const store = (0,react.useContext)(UserRulesEditorStore/* userRulesEditorStore */.O);
  return /*#__PURE__*/react.createElement(SavingButton/* SavingButton */.Z, {
    onClick: onClick,
    contentChanged: store.userRulesEditorContentChanged,
    savingState: store.savingUserRulesState
  });
});
// EXTERNAL MODULE: ./Extension/src/common/translators/reactTranslator.js
var reactTranslator = __webpack_require__(38647);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Popover/index.js + 1 modules
var Popover = __webpack_require__(53657);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Checkbox/index.js + 2 modules
var Checkbox = __webpack_require__(7681);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icon.jsx
var Icon = __webpack_require__(87235);
// EXTERNAL MODULE: ./Extension/src/pages/services/messenger.js
var messenger = __webpack_require__(37916);
// EXTERNAL MODULE: ./Extension/src/common/constants.js
var constants = __webpack_require__(84568);
// EXTERNAL MODULE: ./Extension/src/pages/common/constants.js
var common_constants = __webpack_require__(79735);
// EXTERNAL MODULE: ./Extension/src/pages/helpers.js
var helpers = __webpack_require__(96746);
// EXTERNAL MODULE: ./Extension/src/common/log.js
var log = __webpack_require__(9224);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8356);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/UserRulesEditor/ToggleWrapButton.jsx







/**
 * This button is extracted in the separate file
 * to stop editor re-renderings on wrap mode changes
 */

const ToggleWrapButton = (0,mobxreact_esm/* observer */.Pi)(({
  onClick
}) => {
  const store = (0,react.useContext)(UserRulesEditorStore/* userRulesEditorStore */.O);
  const lineBreakClassNames = classnames_default()('button actions__btn actions__btn--icon', {
    'actions__btn--active': store.userRulesEditorWrapState
  });
  const tooltipText = store.userRulesEditorWrapState ? reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter_line_break_on') : reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter_line_break_off');
  return /*#__PURE__*/react.createElement(Popover/* Popover */.J, {
    text: tooltipText
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: lineBreakClassNames,
    onClick: onClick,
    "aria-label": tooltipText
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    classname: "icon--extend",
    id: "#line-break"
  })));
});
// EXTERNAL MODULE: ./Extension/src/pages/common/utils/export.js
var utils_export = __webpack_require__(22381);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/UserRulesEditor/UserRulesEditor.jsx



















/**
 * This module is placed in the common directory because it is used in the options page
 * and fullscreen-user-rules page
 */

const UserRulesEditor = (0,mobxreact_esm/* observer */.Pi)(({
  fullscreen,
  uiStore
}) => {
  const store = (0,react.useContext)(UserRulesEditorStore/* userRulesEditorStore */.O);
  const editorRef = (0,react.useRef)(null);
  const inputRef = (0,react.useRef)(null);
  let shouldResetSize = false;

  if (store.userRulesEditorPrefsDropped) {
    store.setUserRulesEditorPrefsDropped(false);
    shouldResetSize = true;
  }

  (0,react.useEffect)(() => {
    let removeListenerCallback = () => {};

    (async () => {
      await store.requestSettingsData();
      const events = [constants/* NOTIFIER_TYPES.SETTING_UPDATED */.Qp.SETTING_UPDATED];
      removeListenerCallback = await messenger/* messenger.createEventListener */.d.createEventListener(events, async message => {
        const {
          type
        } = message;

        switch (type) {
          case constants/* NOTIFIER_TYPES.SETTING_UPDATED */.Qp.SETTING_UPDATED:
            {
              await store.requestSettingsData();
              break;
            }

          default:
            {
              log/* log.debug */.c.debug('Undefined message type:', type);
              break;
            }
        }
      });
    })();

    return () => {
      removeListenerCallback();
    };
  }, [store]); // Get initial storage content and set to the editor

  (0,react.useEffect)(() => {
    (async () => {
      let editorContent = await messenger/* messenger.getEditorStorageContent */.d.getEditorStorageContent(); // clear editor content from storage after reading it

      await messenger/* messenger.setEditorStorageContent */.d.setEditorStorageContent(null);
      let resetInfoThatContentChanged = false;

      if (!editorContent) {
        const {
          content
        } = await messenger/* messenger.getUserRules */.d.getUserRules();
        editorContent = content;
        resetInfoThatContentChanged = true;
      }

      editorRef.current.editor.setValue(editorContent, 1);
      editorRef.current.editor.session.getUndoManager().reset();

      if (resetInfoThatContentChanged) {
        store.setUserRulesEditorContentChangedState(false);
      } // initial export button state


      const {
        userRules
      } = await messenger/* messenger.sendMessage */.d.sendMessage(constants/* MESSAGE_TYPES.GET_USER_RULES_EDITOR_DATA */.oK.GET_USER_RULES_EDITOR_DATA);

      if (userRules.length > 0) {
        store.setUserRulesExportAvailableState(true);
      } else {
        store.setUserRulesExportAvailableState(false);
      }
    })();
  }, [store]);
  /**
   * One of the reasons for request filter to update
   * may be adding user rules from other places like assistant and others
   * @return {Promise<void>}
   */

  const handleUserFilterUpdated = (0,react.useCallback)(async () => {
    const {
      userRules
    } = await messenger/* messenger.sendMessage */.d.sendMessage(constants/* MESSAGE_TYPES.GET_USER_RULES_EDITOR_DATA */.oK.GET_USER_RULES_EDITOR_DATA);

    if (!store.userRulesEditorContentChanged) {
      if (editorRef.current) {
        editorRef.current.editor.setValue(userRules, 1);
      }

      store.setUserRulesEditorContentChangedState(false);
      await messenger/* messenger.setEditorStorageContent */.d.setEditorStorageContent(null);
    } // disable or enable export button


    if (userRules.length > 0) {
      store.setUserRulesExportAvailableState(true);
    } else {
      store.setUserRulesExportAvailableState(false);
    }
  }, [store]); // Append listeners

  (0,react.useEffect)(() => {
    let removeListenerCallback = () => {};

    (async () => {
      // Subscribe to events of request filter update
      // to have actual user rules in the editor
      const events = [constants/* NOTIFIER_TYPES.USER_FILTER_UPDATED */.Qp.USER_FILTER_UPDATED];
      removeListenerCallback = await messenger/* messenger.createEventListener */.d.createEventListener(events, async message => {
        const {
          type
        } = message;

        switch (type) {
          case constants/* NOTIFIER_TYPES.USER_FILTER_UPDATED */.Qp.USER_FILTER_UPDATED:
            {
              await handleUserFilterUpdated();
              break;
            }

          default:
            {
              log/* log.debug */.c.debug('Undefined message type:', type);
              break;
            }
        }
      });
    })();

    return () => {
      removeListenerCallback();
    };
  }, [handleUserFilterUpdated]); // save editor content to the storage after close of fullscreen

  (0,react.useEffect)(() => {
    if (fullscreen) {
      const beforeUnloadListener = async () => {
        if (store.userRulesEditorContentChanged) {
          // send content to the storage only before switching editors
          const content = editorRef.current.editor.session.getValue();
          await messenger/* messenger.setEditorStorageContent */.d.setEditorStorageContent(content);
        }
      };

      window.addEventListener('beforeunload', beforeUnloadListener);
    }
  }, [store.userRulesEditorContentChanged, fullscreen]); // subscribe to editor changes, to update editor storage content

  (0,react.useEffect)(() => {
    const changeHandler = () => {
      store.setUserRulesEditorContentChangedState(true);
    };

    editorRef.current.editor.session.on('change', changeHandler);
  }, [store]); // set initial wrap mode

  (0,react.useEffect)(() => {
    editorRef.current.editor.session.setUseWrapMode(store.userRulesEditorWrapState);
  }, [store.userRulesEditorWrapState]);

  const inputChangeHandler = async event => {
    event.persist();
    const file = event.target.files[0];

    try {
      const rawNewRules = await (0,helpers/* handleFileUpload */.$p)(file, 'txt');
      const trimmedNewRules = rawNewRules.trim();

      if (trimmedNewRules.length < 0) {
        return;
      }

      const oldRulesString = editorRef.current.editor.getValue();
      const oldRules = oldRulesString.split('\n');
      const newRules = trimmedNewRules.split('\n');
      const uniqNewRules = newRules.filter(newRule => {
        const trimmedNewRule = newRule.trim();

        if (trimmedNewRule.length === 0) {
          return true;
        }

        const isInOldRules = oldRules.some(oldRule => oldRule === trimmedNewRule);
        return !isInOldRules;
      });
      const rulesUnion = [...oldRules, ...uniqNewRules];
      const rulesUnionString = rulesUnion.join('\n').trim();

      if (oldRulesString !== rulesUnionString) {
        editorRef.current.editor.setValue(rulesUnionString, 1);
        await store.saveUserRules(rulesUnionString);
      }
    } catch (e) {
      log/* log.debug */.c.debug(e.message);

      if (uiStore !== null && uiStore !== void 0 && uiStore.addNotification) {
        uiStore.addNotification({
          description: e.message
        });
      }
    } // eslint-disable-next-line no-param-reassign


    event.target.value = '';
  };

  const importClickHandler = e => {
    e.preventDefault();
    inputRef.current.click();
  };

  const saveClickHandler = async () => {
    if (store.userRulesEditorContentChanged) {
      const value = editorRef.current.editor.getValue();
      await store.saveUserRules(value);
    }
  };

  const shortcuts = [{
    name: 'save',
    bindKey: {
      win: 'Ctrl-S',
      mac: 'Command-S'
    },
    exec: saveClickHandler
  }, {
    name: 'togglecomment',
    bindKey: {
      win: 'Ctrl-/',
      mac: 'Command-/'
    },
    exec: editor => {
      const selection = editor.getSelection();
      const ranges = selection.getAllRanges();
      const rowsSelected = ranges.map(range => {
        const [start, end] = [range.start.row, range.end.row];
        return Array.from({
          length: end - start + 1
        }, (_, idx) => idx + start);
      }).flat();
      const allRowsCommented = rowsSelected.every(row => {
        const rowLine = editor.session.getLine(row);
        return rowLine.trim().startsWith(simple_regex/* SimpleRegex.MASK_COMMENT */.H.MASK_COMMENT);
      });
      rowsSelected.forEach(row => {
        const rawLine = editor.session.getLine(row); // if all lines start with comment mark we remove it

        if (allRowsCommented) {
          const lineWithRemovedComment = rawLine.replace(simple_regex/* SimpleRegex.MASK_COMMENT */.H.MASK_COMMENT, '');
          editor.session.replace(new ace.Range(row, 0, row), lineWithRemovedComment); // otherwise we add it
        } else {
          editor.session.insert({
            row,
            column: 0
          }, simple_regex/* SimpleRegex.MASK_COMMENT */.H.MASK_COMMENT);
        }
      });
    }
  }];

  const exportClickHandler = () => {
    (0,utils_export/* exportData */.u)(utils_export/* ExportTypes.USER_FILTER */.I.USER_FILTER);
  }; // We set wrap mode directly in order to avoid editor re-rendering
  // Otherwise editor would remove all unsaved content


  const toggleWrap = () => {
    const toggledWrapMode = !store.userRulesEditorWrapState;
    editorRef.current.editor.session.setUseWrapMode(toggledWrapMode);
    store.toggleUserRulesEditorWrapMode(toggledWrapMode);
  };

  const openEditorFullscreen = async () => {
    // send dirty content to the storage only before switching editors
    if (store.userRulesEditorContentChanged) {
      const content = editorRef.current.editor.session.getValue();
      await messenger/* messenger.setEditorStorageContent */.d.setEditorStorageContent(content);
    }

    await messenger/* messenger.sendMessage */.d.sendMessage(constants/* MESSAGE_TYPES.OPEN_FULLSCREEN_USER_RULES */.oK.OPEN_FULLSCREEN_USER_RULES);
  };

  const closeEditorFullscreen = async () => {
    // send dirty content to the storage only before switching editors
    if (store.userRulesEditorContentChanged) {
      const content = editorRef.current.editor.session.getValue();
      await messenger/* messenger.setEditorStorageContent */.d.setEditorStorageContent(content);
    }

    window.close();
  };

  const handleUserRulesToggle = debounce_default()(e => {
    store.updateSetting(e.id, e.data);
  }, common_constants/* HANDLER_DELAY_MS */.d);
  const fullscreenTooltipText = fullscreen ? reactTranslator/* reactTranslator.getMessage */._.getMessage('options_editor_close_fullscreen_button_tooltip') : reactTranslator/* reactTranslator.getMessage */._.getMessage('options_editor_open_fullscreen_button_tooltip');
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Editor/* Editor */.M, {
    name: "user-rules",
    editorRef: editorRef,
    shortcuts: shortcuts,
    fullscreen: fullscreen,
    shouldResetSize: shouldResetSize,
    highlightRules: true
  }), /*#__PURE__*/react.createElement("div", {
    className: "actions actions--divided"
  }, /*#__PURE__*/react.createElement("div", {
    className: "actions__group"
  }, fullscreen && /*#__PURE__*/react.createElement("label", {
    className: "actions__label",
    htmlFor: "user-filter-enabled"
  }, /*#__PURE__*/react.createElement("div", {
    className: "actions__title"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('fullscreen_user_rules_title')), /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    id: "user-filter-enabled",
    handler: handleUserRulesToggle,
    value: store.userFilterEnabled,
    className: "checkbox__label--actions"
  })), /*#__PURE__*/react.createElement(UserRulesSavingButton, {
    onClick: saveClickHandler
  }), /*#__PURE__*/react.createElement("input", {
    type: "file",
    id: "inputEl",
    accept: "text/plain",
    ref: inputRef,
    onChange: inputChangeHandler,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--m button--transparent actions__btn",
    onClick: importClickHandler
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter_import')), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--m button--transparent actions__btn",
    onClick: exportClickHandler,
    disabled: !store.userRulesExportAvailable
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter_export'))), /*#__PURE__*/react.createElement("div", {
    className: "actions__group"
  }, /*#__PURE__*/react.createElement(ToggleWrapButton, {
    onClick: toggleWrap
  }), /*#__PURE__*/react.createElement(Popover/* Popover */.J, {
    text: fullscreenTooltipText
  }, fullscreen ? /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button actions__btn actions__btn--icon",
    onClick: closeEditorFullscreen,
    "aria-label": reactTranslator/* reactTranslator.getMessage */._.getMessage('options_editor_close_fullscreen_button_tooltip')
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    classname: "icon--extend",
    id: "#reduce"
  })) : /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button actions__btn actions__btn--icon",
    onClick: openEditorFullscreen,
    "aria-label": reactTranslator/* reactTranslator.getMessage */._.getMessage('options_editor_open_fullscreen_button_tooltip')
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    classname: "icon--extend",
    id: "#extend"
  }))))));
});
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/UserRulesEditor/index.js


/***/ }),

/***/ 7681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* reexport */ Checkbox)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(70846);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3660);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8356);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(35491);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(19532);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(48190);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(47630);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(60664);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(82563);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/common/components/ui/Checkbox/checkbox.pcss
var Checkbox_checkbox = __webpack_require__(43121);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Checkbox/checkbox.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Checkbox_checkbox/* default */.Z, options);




       /* harmony default export */ const ui_Checkbox_checkbox = (Checkbox_checkbox/* default */.Z && Checkbox_checkbox/* default.locals */.Z.locals ? Checkbox_checkbox/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Checkbox/Checkbox.jsx





const Checkbox = props => {
  const {
    id,
    handler,
    inverted,
    label,
    value,
    className,
    disabled
  } = props;
  const computedValue = inverted ? !value : value;
  const [state, setState] = (0,react.useState)(computedValue);
  (0,react.useEffect)(() => {
    setState(computedValue);
  }, [computedValue]);

  const changeHandler = e => {
    setState(!state);
    const {
      target: {
        name: targetId,
        checked: data
      }
    } = e;
    handler({
      id: targetId,
      data: inverted ? !data : data
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "checkbox"
  }, /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    name: id,
    checked: state,
    onChange: changeHandler,
    id: id,
    className: "checkbox__in",
    tabIndex: "0",
    disabled: disabled
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: id,
    className: classnames_default()('checkbox__label', className)
  }, label));
};

Checkbox.defaultProps = {
  value: false,
  inverted: false,
  label: ''
};
Checkbox.propTypes = {
  id: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
  value: (prop_types_default()).bool,
  inverted: (prop_types_default()).bool,
  handler: (prop_types_default()).func.isRequired,
  label: (prop_types_default()).string
};

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Checkbox/index.js


/***/ }),

/***/ 87235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70846);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8356);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const Icon = ({
  id,
  classname,
  title
}) => {
  const iconClassname = classnames__WEBPACK_IMPORTED_MODULE_1___default()('icon', classname);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: iconClassname
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
    xlinkHref: id
  }));
};

/***/ }),

/***/ 48241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70846);
/* eslint-disable max-len */

const Icons = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    display: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "arrow-left",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15 18L9 12L15 6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "cross",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.42857 6.42857L17.6043 17.6043",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.42871 17.5714L17.6045 6.39563",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-0",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 21C11.8929 21 11.7857 20.9571 11.7 20.8714L3.12857 12.3C2.95714 12.1286 2.95714 11.8714 3.12857 11.7L11.7 3.12857C11.8714 2.95714 12.1286 2.95714 12.3 3.12857L15.2571 6.08571C15.3643 6.19286 15.4071 6.38571 15.3643 6.53571C15.3 6.68571 15.1714 6.79286 15 6.81429C14.8286 6.83571 14.6571 6.87857 14.4857 6.94286C14.2286 7.05 13.9929 7.2 13.8 7.39286C13.4143 7.77857 13.2214 8.27143 13.2214 8.80714C13.2214 9.34286 13.4357 9.83571 13.8 10.2214C14.5714 10.9929 15.8357 10.9929 16.6286 10.2214C16.8214 10.0286 16.9714 9.79286 17.0786 9.53571C17.1429 9.36429 17.1857 9.19286 17.2071 9.02143C17.2286 8.85 17.3357 8.72143 17.4857 8.65714C17.6357 8.59286 17.8071 8.63571 17.9357 8.76429L20.8929 11.7214C20.9571 11.7857 21 11.8929 21 12C21 12.1071 20.9571 12.2143 20.8714 12.3L18.4071 14.7857C18.8143 14.9143 19.2 15.15 19.5214 15.4714C20.6357 16.5857 20.6357 18.3857 19.5214 19.5C18.9857 20.0357 18.2571 20.3357 17.5071 20.3357C16.7357 20.3357 16.0286 20.0357 15.4929 19.5C15.1714 19.1786 14.9357 18.8143 14.8071 18.3857L12.3 20.8714C12.2143 20.9571 12.1071 21 12 21Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-1",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8V16C21 16.5523 20.5523 17 20 17H4C3.44772 17 3 16.5523 3 16V8Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 21L20 3",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-2",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M17.3918 9.16765C18.2612 9.86669 19.1306 10.7348 20 11.772C17.3333 15.1053 14.6667 16.772 12 16.772C11.5607 16.772 11.1214 16.7267 10.682 16.6363M8.17168 15.613C7.16728 14.9541 5.77672 13.6737 4 11.772C6.66667 8.59065 9.33333 7 12 7C13.0715 7 14.143 7.25682 15.2145 7.77047M4 21L20 3M10.5858 13.4142C10.2239 13.0523 10 12.5523 10 12C10 10.8954 10.8954 10 12 10C12.4707 10 12.9035 10.1626 13.2451 10.4348L10.5858 13.4142Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-3",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.4329 3.11422C19.2819 3.59182 20.3776 5.42998 19.8801 7.21987C19.3826 9.00972 17.4803 10.0735 15.6312 9.59596C14.9631 9.42336 14.3933 9.07313 13.9615 8.6117C13.9409 8.58968 13.5387 8.09486 13.5187 8.07234L9.57868 10.5162C9.58906 10.544 9.55928 10.4771 9.75726 10.9627C9.94902 11.4331 9.95505 12.5639 9.70219 13.2307C9.69399 13.2524 9.47622 13.7721 9.46747 13.7927L13.4484 16.0226C13.4643 16.0026 13.8177 15.5521 13.8341 15.5325C14.2784 14.9999 14.8951 14.5942 15.6312 14.4041C17.4803 13.9264 19.3826 14.9903 19.8801 16.7802C20.3776 18.57 19.2819 20.4082 17.4329 20.8858C15.5838 21.3634 13.6815 20.2996 13.184 18.5097C13.0032 17.8591 13.0328 17.2021 13.2327 16.6064C13.241 16.5817 13.4395 16.0471 13.4484 16.0226L9.46747 13.7927C9.45298 13.809 9.07024 14.2391 9.05542 14.2552C8.62165 14.7256 8.0457 15.0828 7.3688 15.2576C5.51972 15.7352 3.61746 14.6714 3.11993 12.8815C2.62243 11.0917 3.71807 9.25349 5.56713 8.7759C6.90126 8.43129 8.26309 8.88914 9.10499 9.84317C9.13404 9.8761 9.55089 10.4821 9.57868 10.5162L13.5187 8.07234C13.5079 8.04686 13.3019 7.58131 13.2918 7.55557C13.0401 6.9182 12.9866 6.20046 13.184 5.49031C13.6815 3.70043 15.5838 2.63662 17.4329 3.11422Z",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    fill: "none",
    id: "setting-4",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 6.21997C21 5.1154 20.1046 4.21997 19 4.21997H5C3.89543 4.21997 3 5.1154 3 6.21997V15.2353C3 16.3398 3.89543 17.2353 5 17.2353H14.0317L18.18 21.5737V17.2353H19C20.1046 17.2353 21 16.3398 21 15.2353V6.21997Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 7.5V11",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.997 13.5955C12.009 13.5975 11.997 13.4045 11.997 13.4045",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-5",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 11L12 14L16 9",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9998 3C9.18674 3 5.79348 3.6454 3 5.06597C3 8.13403 2.96144 15.7775 11.9998 21C21.0384 15.7775 21 8.13403 21 5.06597C18.2063 3.6454 14.8131 3 11.9998 3V3Z",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-6",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 6H20",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 10H16",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 14H20",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 18H12",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-7",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13 14C13 14 15.5308 13.4189 17.0263 11.6741C18.5218 9.92934 19 7 19 7",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M20 14C20 14 17.4692 13.4189 15.9737 11.6741C14.4782 9.92934 14 7 14 7",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 20L7.00509 11L11 20",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 17.5H9.5",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.5 6.5H21.5",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M16.5 6V4.5",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "arrow-back",
    viewBox: "0 0 10 18"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m442 124 8-8 8 8",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.32",
    transform: "matrix(0 -1 1 0 -115 459)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "checked",
    viewBox: "0 0 12 9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m4.05 8.12903226 4.47096774 4.47096774 5.42903226-7.02580645",
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: "1.08",
    transform: "translate(-3 -5)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "code",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    transform: "matrix(1 0 0 -1 0 24)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m0 0h24v24h-24z",
    fill: "#878787",
    fillOpacity: ".01",
    fillRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m9 19 5-13m3 10 2-3.5-2-3.5m-10.5 7-2-3.5 2-3.5",
    stroke: "#67b279",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "empty",
    viewBox: "0 0 81 104"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 2)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    fill: "#99eaa8",
    fillRule: "nonzero",
    height: "10.424528",
    rx: "5.212264",
    width: "40",
    x: "12.573151",
    y: "90.69107"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "7.701977",
    cy: "61.254354",
    fill: "#3b3b3b",
    fillRule: "nonzero",
    rx: "1.607724",
    ry: "1.632159"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "66.099384",
    cy: "45.782087",
    fill: "#3b3b3b",
    fillRule: "nonzero",
    rx: "1.607724",
    ry: "1.632159"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    stroke: "#3b3b3b",
    strokeWidth: "2.4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "61.676972",
    cy: "7.966934",
    rx: "7.734348",
    ry: "7.8519"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "76.103476",
    cy: "27.32482",
    rx: "2.572358",
    ry: "2.611454"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m8.25989762 35.9026387h49.24320728",
    strokeLinecap: "square"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m25.7687677 54.0385167c.0168909-.1011429.2411898.2687114 0 .9658067v28.2082899c0 1.1045695.8954305 2 2 2 .3835033 0 .7589206-.1102607 1.0815152-.317643l11.1497171-6.8949703v-1l-.7099385-21.9956766c-.2414363-.6970953-.0171374-1.0669496 0-.9658067l24.4467768-23.6037845c.7946289-.7672279.8168418-2.033363.0496139-2.8279919-.3768878-.390348-.8962019-.610811-1.4388029-.610811h-59.63646934c-1.1045695 0-2 .8954305-2 2 0 .5426011.22046295 1.0619152.61081097 1.4388029z",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "like",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m0 0h24v24h-24z",
    fill: "#878787",
    fillOpacity: ".01",
    fillRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m8.52086095 12.7600465c-.06262152-.5082327-.06262152-1.0164654.12524303-1.4611691.25048607-.69882.06262152-4.38350731-.06262152-5.27291459-.06262151-.25411637-.25048606-.63529092-.43835061-.95293638l-.17925468-.36160511c-.2663414-.55930421-.45265335-1.16886847.36711923-1.48073855 2.8805897-1.01646547 3.4441834 1.5246982 3.8199125 3.74821641.1878645.7623491.125243 1.01646547.4383506 1.27058184l.3483031-.31159728c1.0201765-.90742216 2.3147593-1.97545003 3.6594739-1.97545003 1.4402949 0 1.816024.95293638 1.8786455 1.52469821 1.0019443.25411636 1.5655379 1.5246982 1.3150519 2.47763458.7514581.5082327.9393227 1.5246982.6262151 2.3505764.3131076.4447036.9393228 1.6517564.3131076 2.6046928-.5009721.69882-7.5145819 4.5105655-8.3286617 4.8282109-.0626215.4447037-.375729.8258782-.7514581 1.0799946l-1.6281595.9529364c-.75145816.4447036-1.6907809.1905872-2.06651-.5717619l-3.06845429-5.2729146c-.3757291-.7623491-.12524303-1.7152855.56359365-2.1599891l1.69078093-.9529364c.43835062-.2541163.93932275-.2541163 1.37767336-.0635291zm3.97913905 6.7399535-3.97913905-6.7399535",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "link",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    transform: "translate(1 1)",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    transform: "rotate(-180 6 3.5)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 1.16666667L0 7 5.71428571 7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M.079 6.96L6.869.03"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2.76672046 1L0 1 0 12 11 12 11 9.29613954"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "logo",
    viewBox: "0 0 160 35"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m125.470968 24.653125-1.21659-3.040625h-6.06083l-1.15023 3.040625h-4.114286l6.569585-15.4875h3.67189l6.503226 15.4875zm-4.202765-11.353125-1.990784 5.315625h3.937328z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m112.309677 18.8125c0 .933338-.158523 1.7828087-.475576 2.5484375-.317052.7656288-.770504 1.4218723-1.360368 1.96875-.589865.5468777-1.301379.973436-2.134563 1.2796875-.833183.3062515-1.75852.459375-2.776036.459375-1.032264 0-1.961287-.1531235-2.787097-.459375-.825811-.3062515-1.526265-.7328098-2.101383-1.2796875s-1.0175096-1.2031212-1.3271886-1.96875c-.3096789-.7656288-.4645161-1.6150995-.4645161-2.5484375v-9.646875h3.7603687v9.340625c0 .4229188.055299.8239564.165899 1.203125.110599.3791686.280183.7182277.508755 1.0171875.228573.2989598.530874.5359366.906913.7109375s.82949.2625 1.360368.2625c.530879 0 .98433-.0874991 1.360369-.2625s.682027-.4119777.917972-.7109375c.235946-.2989598.40553-.6380189.508756-1.0171875.103227-.3791686.154839-.7802062.154839-1.203125v-9.340625h3.782488z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m96.7889401 23.7125c-.7668241.393752-1.6626677.7145821-2.6875576.9625s-2.1419295.371875-3.3511521.371875c-1.2534625 0-2.407368-.196873-3.4617511-.590625-1.0543832-.393752-1.9612866-.9479131-2.7207374-1.6625s-1.3529932-1.5713492-1.7806451-2.5703125-.6414747-2.1109314-.6414747-3.3359375c0-1.2395895.2175094-2.362495.6525346-3.36875s1.0359408-1.8630173 1.802765-2.5703125c.7668241-.7072952 1.6663542-1.25051894 2.6986175-1.6296875 1.0322632-.37916856 2.1456161-.56875 3.3400921-.56875 1.2387159 0 2.3889348.18593564 3.4506913.5578125 1.0617564.37187686 1.9244206.871351 2.5880184 1.4984375l-2.3889401 2.690625c-.3686654-.4229188-.8552965-.7692695-1.4599078-1.0390625s-1.2903188-.4046875-2.0571429-.4046875c-.6635978 0-1.2755732.1203113-1.8359447.3609375-.5603714.2406262-1.0470025.5760395-1.4599078 1.00625s-.7336394.940622-.962212 1.53125-.3428571 1.235934-.3428571 1.9359375c0 .7145869.1032247 1.3708303.3096774 1.96875.2064526.5979197.5124404 1.111977.9179723 1.5421875.405532.4302105.9069095.7656238 1.5041475 1.00625s1.2792588.3609375 2.0460829.3609375c.4423986 0 .8626709-.0328122 1.2608295-.0984375.3981587-.0656253.7668186-.1713534 1.1059908-.3171875v-2.821875h-2.9861751v-3.01875h6.4589862z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m159.306912 16.865625c0 1.3562568-.254375 2.5265576-.763133 3.5109375-.508759.9843799-1.17972 1.7937468-2.012903 2.428125-.833184.6343782-1.773267 1.1010402-2.820277 1.4s-2.10875.4484375-3.185253.4484375h-5.839632v-15.4875h5.662673c1.105996 0 2.19723.12760289 3.273733.3828125s2.035019.678122 2.875576 1.26875 1.518891 1.3817659 2.035023 2.3734375c.516131.9916716.774193 2.2166594.774193 3.675zm-3.937327 0c0-.8750044-.143777-1.600518-.431336-2.1765625s-.670966-1.035415-1.150231-1.378125-1.024881-.5869784-1.636866-.7328125-1.242393-.21875-1.891244-.21875h-1.880185v9.05625h1.791706c.678344 0 1.330872-.0765617 1.957603-.2296875s1.179721-.4046858 1.658986-.7546875c.479265-.3500018.862672-.8166638 1.150231-1.4.287559-.5833363.431336-1.305204.431336-2.165625z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m80.4866359 16.865625c0 1.3562568-.2543753 2.5265576-.7631336 3.5109375s-1.1797193 1.7937468-2.0129032 2.428125-1.7732667 1.1010402-2.8202765 1.4c-1.0470099.2989598-2.1087504.4484375-3.1852535.4484375h-5.8396313v-15.4875h5.6626728c1.1059963 0 2.1972296.12760289 3.2737327.3828125s2.0350189.678122 2.8755761 1.26875c.8405571.590628 1.5188914 1.3817659 2.035023 2.3734375s.7741935 2.2166594.7741935 3.675zm-3.9373271 0c0-.8750044-.1437774-1.600518-.4313365-2.1765625-.287559-.5760445-.6709653-1.035415-1.1502304-1.378125-.479265-.34271-1.0248817-.5869784-1.6368663-.7328125-.6119847-.1458341-1.2423931-.21875-1.8912443-.21875h-1.8801843v9.05625h1.7917051c.6783444 0 1.3308724-.0765617 1.9576037-.2296875.6267312-.1531258 1.1797211-.4046858 1.6589861-.7546875.4792651-.3500018.8626714-.8166638 1.1502304-1.4.2875591-.5833363.4313365-1.305204.4313365-2.165625z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m60.4682028 24.653125-1.2165899-3.040625h-6.0608295l-1.1502304 3.040625h-4.1142857l6.5695852-15.4875h3.6718894l6.5032258 15.4875zm-4.202765-11.353125-1.9907834 5.315625h3.9373272z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m139.251613 24.653125-3.384332-6.146875h-1.282949v6.146875h-3.716129v-15.4875h5.97235c.752077 0 1.485711.07656173 2.200922.2296875s1.356679.41197734 1.924424.7765625c.567744.3645852 1.021196.8458303 1.360368 1.44375s.508756 1.3416622.508756 2.23125c0 1.0500052-.287555 1.9322881-.862673 2.646875s-1.371423 1.2249985-2.38894 1.53125l4.092166 6.628125zm-.154839-10.740625c0-.3645852-.077418-.6598947-.232258-.8859375-.154839-.2260428-.353916-.401041-.597235-.525s-.516127-.2078123-.818433-.2515625-.593547-.065625-.873733-.065625h-2.012903v3.609375h1.791705c.309679 0 .626727-.0255206.951152-.0765625.324426-.0510419.619354-.1421868.884793-.2734375s.482948-.3208321.652534-.56875.254378-.568748.254378-.9625z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m17.1543031 0c-5.3619081 0-11.8297098 1.25180851-17.15429784 4.00712766 0 5.95074468-.07349775 20.77585104 17.15429784 30.90537234 17.2281765-10.1295213 17.1550595-24.95462766 17.1550595-30.90537234-5.3249688-2.75531915-11.7927705-4.00712766-17.1550595-4.00712766z",
    fill: "#68bc71"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m17.1367803 34.9021919c-17.21022294-10.1292683-17.13677504-24.9463378-17.13677504-30.89506424 5.31878904-2.75231834 11.77830294-4.00439919 17.13677504-4.00712321v34.90219085z",
    fill: "#67b279"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m16.5285819 23.2947567 10.3734917-13.88033502c-.7601484-.60488994-1.4269071-.17797112-1.7939502.15254668l-.0133931.00105935-8.6494027 8.93280849-3.2588648-3.8934714c-1.5546844-1.7832424-3.66825892-.4230346-4.1619934-.0635611z",
    fill: "#fff"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "magnifying",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: "9.5",
    cy: "9.5",
    r: "5.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14 14L19 19",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "tick",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0l-306.704 306.707-117.892-117.892c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0l324.806-324.806c9.998-9.997 9.997-26.206 0-36.204z",
    fill: "#5ba575"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "trash",
    viewBox: "0 0 14 17"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "currentColor",
    transform: "translate(1 1)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m.54 3.5.888 11.538a.5.5 0 0 0 .498.462h8.148a.5.5 0 0 0 .498-.462l.888-11.538z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    strokeLinecap: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m0 1.5h12"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m4 0v1h4v-1",
    strokeLinejoin: "round",
    transform: "matrix(-1 0 0 -1 12 1)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m7.5 6v7zm-3 0v7z",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "reload",
    viewBox: "0 0 22 18"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(-1 -3)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m0 0h24v24h-24z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m18.2914876 16.0083773 1.3630986.8811449c-1.6728314 2.5741257-4.5051373 4.1104778-7.5761878 4.1104778-4.81798368 0-8.7658011-3.7849237-9.01152001-8.5303624l-.86406377.9492119-1.20281462-1.0890722 2.78585217-3.06015904 3.0683106 2.77882364-1.09209788 1.199619-1.07615668-.9745507c.14496544 3.9426702 3.40419703 7.1060476 7.39236569 7.1060476 2.5184631 0 4.8411482-1.2599851 6.2132137-3.3711805zm3.3921166-6.91004447-.7710318 1.06360927c-.8533533-4.08414531-4.4900679-7.1619421-8.834174-7.1619421-2.76281212 0-5.33619776 1.23700627-7.06046453 3.39403517l1.27044025 1.0100748c1.41403574-1.76924563 3.52450339-2.78379199 5.79002428-2.78379199 3.5634847 0 6.5466094 2.52568384 7.2446603 5.87661822l-1.1577308-.83506311-.951865 1.31314691 3.3584905 2.4217202 2.4280466-3.3493196z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "menu",
    viewBox: "0 0 24 27"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 .5)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m0 0h24v26h-24z",
    fill: "#878787",
    fillOpacity: ".01",
    fillRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m4 13h16m-16-5.41666667h16m-16 10.83333337h16",
    stroke: "#888",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "select",
    viewBox: "0 0 14 8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m6 10 6 6 6-6",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "1.5",
    transform: "translate(-5 -9)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "arrow-bottom",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.0354 10.9305L11.965 14.9997L16.0342 11.0702",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "filters",
    viewBox: "0 0 14 13"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(-5 -6)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m0 0h24v24h-24z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    stroke: "#67b279",
    strokeLinecap: "square"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m5.5 6.5h13"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m10.5 12.25h8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m15.5 18.25h3"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "extend",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: "24",
    height: "24",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6 10V6H10M6 14V18H10M18 10V6H14M18 14V18H14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "line-break",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.08398 4.73584C3.66977 4.73584 3.33398 5.07163 3.33398 5.48584C3.33398 5.90005 3.66977 6.23584 4.08398 6.23584H19.6176C20.0318 6.23584 20.3676 5.90005 20.3676 5.48584C20.3676 5.07163 20.0318 4.73584 19.6176 4.73584H4.08398ZM4 8.95654C3.58579 8.95654 3.25 9.29233 3.25 9.70654C3.25 10.1208 3.58579 10.4565 4 10.4565H12C12.026 10.4565 12.0517 10.4552 12.077 10.4526H15.5396C17.3324 10.4526 18.7857 11.906 18.7857 13.6987C18.7857 15.4833 17.3456 16.9316 15.5641 16.9447L16.2941 16.2144C16.5869 15.9215 16.5868 15.4466 16.2939 15.1538C16.0009 14.861 15.5261 14.8611 15.2332 15.154L13.2915 17.0966C12.9988 17.3894 12.9988 17.8641 13.2915 18.157L15.2332 20.0996C15.5261 20.3925 16.0009 20.3926 16.2939 20.0998C16.5868 19.807 16.5869 19.3321 16.2941 19.0391L15.6975 18.4422C18.2456 18.359 20.2857 16.2671 20.2857 13.6987C20.2857 11.0775 18.1608 8.95264 15.5396 8.95264H10V8.95654H4ZM3.33398 13.7417C3.33398 13.3275 3.66977 12.9917 4.08398 12.9917H10.8799C11.2941 12.9917 11.6299 13.3275 11.6299 13.7417C11.6299 14.1559 11.2941 14.4917 10.8799 14.4917H4.08398C3.66977 14.4917 3.33398 14.1559 3.33398 13.7417ZM3.33398 17.6265C3.33398 17.2123 3.66977 16.8765 4.08398 16.8765H10.8799C11.2941 16.8765 11.6299 17.2123 11.6299 17.6265C11.6299 18.0407 11.2941 18.3765 10.8799 18.3765H4.08398C3.66977 18.3765 3.33398 18.0407 3.33398 17.6265Z",
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "info",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 16V10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.997 7.59552C12.009 7.59745 11.997 7.40446 11.997 7.40446",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "reduce",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: "24",
    height: "24",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 6V10H6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 18V14H6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14 6V10H18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14 18V14H18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "ban",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 14C11.3137 14 14 11.3137 14 8C14 6.34315 13.3284 4.84315 12.2426 3.75736C11.69 3.20469 11.03 2.75934 10.2966 2.45524C9.58921 2.1619 8.81351 2 8 2C4.68629 2 2 4.68629 2 8C2 8.81351 2.1619 9.58921 2.45524 10.2966C2.75934 11.03 3.20469 11.69 3.75736 12.2426C4.84315 13.3284 6.34315 14 8 14Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2.21513 13.8442L13.5485 2.51087",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "arrow-status",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.7038 4.66663L14.6667 7.99996L1.33341 7.99996",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.7038 11.3334L14.6667 8.00004",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "profile-status",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "7.99992",
    cy: "5.33329",
    rx: "2.66667",
    ry: "2.66667",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2.66675 13.3334V13.3334C2.66675 11.1242 4.45761 9.33337 6.66675 9.33337H9.33341C11.5426 9.33337 13.3334 11.1242 13.3334 13.3334V13.3334H2.66675Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "transfer-status",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.3333 2.66663L12.3333 4.66663",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.3333 6.66663L12.3333 4.66663",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.3334 4.66671H3.66675",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5.66675 9.33337L3.66675 11.3334",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5.66675 13.3334L3.66675 11.3334",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3.66659 11.3333H12.3333",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "arrow-scrollbar",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: "32",
    height: "32",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13.8958 21.9468L19.9996 16.0524L14.1052 9.9486",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "radio",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9.5 12C9.5 10.6196 10.6188 9.50046 11.9991 9.5C13.3795 9.5021 14.4979 10.6206 14.5 12.0009C14.4995 13.3812 13.3804 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12Z",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: "12.0001",
    cy: "12",
    r: "8.33333",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

/***/ }),

/***/ 53657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ Popover)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(23229);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(70846);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/AttachmentPortal/index.js + 1 modules
var AttachmentPortal = __webpack_require__(89089);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Tooltip/index.js + 2 modules
var Tooltip = __webpack_require__(37565);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Popover/Popover.jsx




const TOOLTIP_SHOW_DELAY_MS = 1000;
/*
    Wrap child container for handle tooltips rendering in overlay on hover
*/

const Popover = ({
  text,
  delay,
  children,
  ...props
}) => {
  const [tooltip, setTooltip] = (0,react.useState)({
    visible: false,
    position: null
  });
  const timer = (0,react.useRef)(); // clear timer on unmounting

  (0,react.useEffect)(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleMouseEnter = e => {
    const rect = e.target.getBoundingClientRect();
    timer.current = setTimeout(() => {
      setTooltip({
        visible: true,
        position: {
          x: rect.left + window.scrollX,
          y: rect.bottom + window.scrollY
        }
      });
    }, delay || TOOLTIP_SHOW_DELAY_MS);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer.current);
    setTooltip({
      visible: false,
      position: null
    });
  };

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: "popover"
  }, props, {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }), tooltip.visible && /*#__PURE__*/react.createElement(AttachmentPortal/* AttachmentPortal */.g, {
    rootId: "root-portal",
    position: tooltip.position
  }, /*#__PURE__*/react.createElement(Tooltip/* Tooltip */.u, {
    text: text
  })), children);
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Popover/index.js


/***/ }),

/***/ 37565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* reexport */ Tooltip)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(70846);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3660);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8356);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(35491);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(19532);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(48190);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(47630);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(60664);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(82563);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/common/components/ui/Tooltip/tooltip.pcss
var tooltip = __webpack_require__(49970);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Tooltip/tooltip.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(tooltip/* default */.Z, options);




       /* harmony default export */ const Tooltip_tooltip = (tooltip/* default */.Z && tooltip/* default.locals */.Z.locals ? tooltip/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Tooltip/Tooltip.jsx




const Tooltip = ({
  text,
  visible
}) => {
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()('tooltip', visible ? 'tooltip--on' : 'tooltip--off')
  }, text);
};
Tooltip.propTypes = {
  text: (prop_types_default()).string.isRequired,
  visible: (prop_types_default()).bool
};
Tooltip.defaultProps = {
  visible: true
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Tooltip/index.js


/***/ }),

/***/ 79735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ MIN_FILTERS_UPDATE_DISPLAY_DURATION),
/* harmony export */   "d": () => (/* binding */ HANDLER_DELAY_MS)
/* harmony export */ });
const MIN_FILTERS_UPDATE_DISPLAY_DURATION = 2000;
const HANDLER_DELAY_MS = 2000; // less time leads to interface freeze

/***/ }),

/***/ 72730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useAppearanceTheme)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49789);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70846);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32155);



const useAppearanceTheme = appearanceTheme => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    const STORAGE_KEY = 'appearance_theme';
    const DARK_THEME_CLASS = 'dark-mode';
    const LIGHT_THEME_CLASS = 'light-mode';
    const SET_TO_STORAGE_TIMEOUT = 500;
    const throttledSetToStorage = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(mode => {
      localStorage.setItem(STORAGE_KEY, mode);
    }, SET_TO_STORAGE_TIMEOUT);
    let theme = appearanceTheme;

    if (!theme) {
      theme = localStorage.getItem(STORAGE_KEY);
    } else {
      throttledSetToStorage(theme);
    }

    switch (theme) {
      case _constants__WEBPACK_IMPORTED_MODULE_2__/* .APPEARANCE_THEMES.DARK */ .cC.DARK:
        {
          document.documentElement.classList.add(DARK_THEME_CLASS);
          document.documentElement.classList.remove(LIGHT_THEME_CLASS);
          break;
        }

      case _constants__WEBPACK_IMPORTED_MODULE_2__/* .APPEARANCE_THEMES.LIGHT */ .cC.LIGHT:
        {
          document.documentElement.classList.add(LIGHT_THEME_CLASS);
          document.documentElement.classList.remove(DARK_THEME_CLASS);
          break;
        }

      default:
        {
          document.documentElement.classList.remove(DARK_THEME_CLASS);
          document.documentElement.classList.remove(LIGHT_THEME_CLASS);
        }
    }
  }, [appearanceTheme]);
};

/***/ }),

/***/ 31479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useOutsideClick)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70846);

const useOutsideClick = (ref, callback) => {
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }, [ref, callback]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
};

/***/ }),

/***/ 40536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ useOutsideFocus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70846);

const useOutsideFocus = (ref, callback) => {
  const handleFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }, [ref, callback]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.addEventListener('focusin', handleFocus);
    return () => {
      document.removeEventListener('focusin', handleFocus);
    };
  }, [handleFocus]);
};

/***/ }),

/***/ 22381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ExportTypes),
/* harmony export */   "u": () => (/* binding */ exportData)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53570);
/* harmony import */ var _common_common_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71351);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84568);
/**
 * This file is part of Adguard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * Adguard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Adguard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adguard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



/**
 * Export types.
 * @readonly
 * @enum {string}
 */

const ExportTypes = {
  USER_FILTER: 'user_filter',
  ALLOW_LIST: 'allow_list',
  SETTINGS: 'settings'
};
const exportMetadata = {
  [ExportTypes.USER_FILTER]: {
    name: 'user_rules',
    messageType: _common_constants__WEBPACK_IMPORTED_MODULE_1__/* .MESSAGE_TYPES.GET_USER_RULES */ .oK.GET_USER_RULES,
    ext: 'txt'
  },
  [ExportTypes.ALLOW_LIST]: {
    name: 'allowlist',
    messageType: _common_constants__WEBPACK_IMPORTED_MODULE_1__/* .MESSAGE_TYPES.GET_ALLOWLIST_DOMAINS */ .oK.GET_ALLOWLIST_DOMAINS,
    ext: 'txt'
  },
  [ExportTypes.SETTINGS]: {
    name: 'settings',
    messageType: _common_constants__WEBPACK_IMPORTED_MODULE_1__/* .MESSAGE_TYPES.LOAD_SETTINGS_JSON */ .oK.LOAD_SETTINGS_JSON,
    ext: 'json'
  }
};
/**
 * @param {ExportTypes} type
 */

const exportData = async type => {
  const {
    messageType,
    name,
    ext
  } = exportMetadata[type];
  const currentTimeString = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Date.now(), 'yyyyMMdd_HHmmss');
  const {
    content,
    appVersion
  } = await _common_common_script__WEBPACK_IMPORTED_MODULE_0__/* .runtimeImpl.sendMessage */ .VX.sendMessage({
    type: messageType
  });
  const filename = `${currentTimeString}_adg_ext_${name}_${appVersion}.${ext}`;
  const blob = new Blob([content]);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

/***/ }),

/***/ 32155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D2": () => (/* binding */ CHANGELOG_URL),
/* harmony export */   "Kd": () => (/* binding */ GITHUB_URL),
/* harmony export */   "Sb": () => (/* binding */ PRIVACY_URL),
/* harmony export */   "Y0": () => (/* binding */ GLOBAL_PRIVACY_CONTROL_URL),
/* harmony export */   "YH": () => (/* binding */ ACKNOWLEDGMENTS_URL),
/* harmony export */   "Z5": () => (/* binding */ DO_NOT_TRACK_URL),
/* harmony export */   "cC": () => (/* binding */ APPEARANCE_THEMES),
/* harmony export */   "eN": () => (/* binding */ DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN),
/* harmony export */   "l7": () => (/* binding */ HOW_TO_CREATE_RULES_URL),
/* harmony export */   "o6": () => (/* binding */ WEBSITE_URL),
/* harmony export */   "pR": () => (/* binding */ COMPARE_URL),
/* harmony export */   "sn": () => (/* binding */ DISCUSS_URL),
/* harmony export */   "uj": () => (/* binding */ DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN),
/* harmony export */   "wk": () => (/* binding */ BROWSER_ADDON_STORE_LINKS)
/* harmony export */ });
/* eslint-disable max-len */
const PRIVACY_URL = 'https://link.adtidy.org/forward.html?action=privacy&from=options_screen&app=browser_extension';
const ACKNOWLEDGMENTS_URL = 'https://link.adtidy.org/forward.html?action=acknowledgments&from=options_screen&app=browser_extension';
const GITHUB_URL = 'https://link.adtidy.org/forward.html?action=github_options&from=options_screen&app=browser_extension';
const WEBSITE_URL = 'https://link.adtidy.org/forward.html?action=adguard_site&from=options_screen_footer&app=browser_extension';
const DISCUSS_URL = 'https://link.adtidy.org/forward.html?action=discuss&from=options_screen&app=browser_extension';
const COMPARE_URL = 'https://link.adtidy.org/forward.html?action=compare&from=options_screen&app=browser_extension';
const CHANGELOG_URL = 'https://link.adtidy.org/forward.html?action=github_version_popup&from=options_screen&app=browser_extension';
const GLOBAL_PRIVACY_CONTROL_URL = 'https://link.adtidy.org/forward.html?action=global_privacy_control&from=options_screen&app=browser_extension';
const DO_NOT_TRACK_URL = 'https://link.adtidy.org/forward.html?action=do_not_track&from=options_screen&app=browser_extension';
const HOW_TO_CREATE_RULES_URL = 'https://link.adtidy.org/forward.html?action=userfilter_description&from=options&app=browser_extension';
const DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN = 4320;
const DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN = 2880;
const APPEARANCE_THEMES = {
  SYSTEM: 'system',
  DARK: 'dark',
  LIGHT: 'light'
};
const BROWSER_ADDON_STORE_LINKS = {
  CHROME: 'https://agrd.io/extension_chrome',
  FIREFOX: 'https://agrd.io/extension_firefox',
  OPERA: 'https://agrd.io/extension_opera',
  EDGE: 'https://agrd.io/extension_edge'
};

/***/ }),

/***/ 96746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* binding */ updateFilterDescription),
/* harmony export */   "$p": () => (/* binding */ handleFileUpload),
/* harmony export */   "Ux": () => (/* binding */ measureTextWidth),
/* harmony export */   "_v": () => (/* binding */ sleep),
/* harmony export */   "fQ": () => (/* binding */ isVerticalScroll),
/* harmony export */   "fg": () => (/* binding */ hoursToMs),
/* harmony export */   "ms": () => (/* binding */ containsIgnoreCase),
/* harmony export */   "n$": () => (/* binding */ passiveEventSupported),
/* harmony export */   "tE": () => (/* binding */ findChunks),
/* harmony export */   "vQ": () => (/* binding */ copyToClipboard)
/* harmony export */ });
/* unused harmony exports getFilenameExtension, indexOfIgnoreCase */
/* harmony import */ var _common_translators_translator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99875);

const getFilenameExtension = filename => {
  if (!filename) {
    return undefined;
  }

  const parts = filename.split('.');

  if (parts.length < 2) {
    return undefined;
  }

  return parts[parts.length - 1];
};
/**
 * Handles file upload
 * @param file
 * @param requiredExtension
 * @returns {Promise<string>}
 */

const handleFileUpload = (file, requiredExtension) => new Promise((resolve, reject) => {
  if (getFilenameExtension(file.name) !== requiredExtension) {
    reject(new Error(_common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator.getMessage */ .O.getMessage('options_popup_import_settings_wrong_file_ext', {
      extension: requiredExtension
    })));
  }

  const reader = new FileReader();
  reader.readAsText(file, 'UTF-8');

  reader.onload = evt => {
    resolve(evt.target.result);
  };

  reader.onerror = () => {
    reject(new Error(_common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator.getMessage */ .O.getMessage('options_popup_import_error_file_description')));
  };
});
const hoursToMs = hours => {
  const MS_IN_HOUR = 1000 * 60 * 60;
  return hours * MS_IN_HOUR;
};
/**
 * Awaits required period of time
 * @param timeoutMs
 * @returns {Promise<unknown>}
 */

const sleep = timeoutMs => {
  return new Promise(resolve => {
    setTimeout(resolve, timeoutMs);
  });
};
const indexOfIgnoreCase = (str, searchString) => {
  return str.toLowerCase().indexOf(searchString.toLowerCase());
};
const containsIgnoreCase = (str, searchString) => {
  return !!(str && searchString && indexOfIgnoreCase(str, searchString) >= 0);
};
const findChunks = (str, searchString, chunks = []) => {
  const ind = indexOfIgnoreCase(str, searchString);

  if (ind > -1) {
    chunks.push(str.slice(0, ind));
    chunks.push(str.slice(ind, ind + searchString.length));
    const restStr = str.slice(ind + searchString.length);

    if (containsIgnoreCase(restStr, searchString)) {
      findChunks(restStr, searchString, chunks);
    } else {
      chunks.push(restStr);
    }
  }

  return chunks.filter(i => !!i);
};
const passiveEventSupported = (() => {
  let passiveSupported = null;
  return () => {
    // memoize support to avoid adding multiple test events
    if (typeof passiveSupported === 'boolean') {
      return passiveSupported;
    }

    let supported = false;

    try {
      const options = {
        get passive() {
          supported = true;
          return false;
        }

      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {
      supported = false;
    }

    passiveSupported = supported;
    return passiveSupported;
  };
})();
const copyToClipboard = text => {
  const textarea = document.createElement('textarea');
  textarea.innerText = text;
  textarea.style = `
        position: absolute;
        display: hidden;
        width: 0;
        height: 0;
    `;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
};
const measureTextWidth = text => {
  const el = document.createElement('p');
  el.innerText = text;
  el.style = `
        position: absolute;
        display: hidden;
        height: 0;
        white-space: nowrap;
        font-family: Roboto, "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, Arial, sans-serif;
        font-size: 14px;
    `;
  document.body.appendChild(el);
  const pxLength = el.clientWidth;
  el.remove();
  return pxLength;
};
/**
 * Сalculate the angle of radius vector of the scroll motion
 * and detect whether scroll is vertical
 *
 * @param {number} deltaY - wheel event deltaY value
 * @param {number} deltaX - wheel event deltaX value
 * @returns {boolean}
 */

const isVerticalScroll = (() => {
  const degToRad = deg => deg * (Math.PI / 180);

  const deg60ToRad = degToRad(60);
  const deg90ToRad = degToRad(90);
  const deg120ToRad = degToRad(120);
  const deg240ToRad = degToRad(240);
  const deg270ToRad = degToRad(270);
  const deg300ToRad = degToRad(300);
  return (deltaY, deltaX) => {
    if (deltaY === 0) {
      return false;
    }

    let angle = Math.atan(deltaX / deltaY);
    angle = deltaY > 0 ? angle + deg90ToRad : angle + deg270ToRad;
    return angle > deg60ToRad && angle < deg120ToRad || angle > deg240ToRad && angle < deg300ToRad;
  };
})();
/**
 * Checks the length of the array with filters and returns the contents for notification
 *
 * @param updatedFilters
 */

const updateFilterDescription = updatedFilters => {
  if (!updatedFilters) {
    return {
      title: _common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator.getMessage */ .O.getMessage('options_popup_update_title_error'),
      description: _common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator.getMessage */ .O.getMessage('options_popup_update_error')
    };
  }

  const filterNames = updatedFilters.map(filter => filter.name).join(', ');
  let description;

  if (updatedFilters.length === 0) {
    description = `${filterNames} ${_common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator.getMessage */ .O.getMessage('options_popup_update_not_found')}`;
  } else if (updatedFilters.length === 1) {
    description = `${filterNames} ${_common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator.getMessage */ .O.getMessage('options_popup_update_filter')}`;
  } else if (updatedFilters.length > 1) {
    description = `${filterNames} ${_common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator.getMessage */ .O.getMessage('options_popup_update_filters')}`;
  }

  return {
    description
  };
};

/***/ }),

/***/ 9698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ optionsStorage)
});

// EXTERNAL MODULE: ./Extension/src/common/log.js
var log = __webpack_require__(9224);
;// CONCATENATED MODULE: ./Extension/src/pages/options/options-storage/OptionsStorage.js

/**
 * Module used to keep options page settings, which do not need extension level persistence
 */

class OptionsStorage {
  constructor() {
    this.KEYS = {
      /* allowlist editor wrap setting */
      ALLOWLIST_EDITOR_WRAP: 'allowlist-editor-wrap',

      /**
       * Filtering log columns widths
       */
      COLUMNS_WIDTHS_PX: 'columns-widths-px',

      /**
       * Filtering log columns widths
       */
      COLUMNS_DATA: 'columns-data',

      /**
       * Request modal width
       */
      REQUEST_INFO_MODAL_WIDTH: 'request-info-modal-width'
    };
    this.DEFAULTS = {
      [this.KEYS.ALLOWLIST_EDITOR_WRAP]: false,
      [this.KEYS.REQUEST_INFO_MODAL_WIDTH]: null,
      [this.KEYS.COLUMNS_DATA]: {
        status: {
          width: 260
        },
        url: {
          width: 260
        },
        type: {
          width: 100
        },
        rule: {
          width: 260
        },
        filter: {
          width: 260
        },
        source: {
          width: 200
        }
      }
    };
    this.storage = localStorage;
  }

  setItem(key, value) {
    try {
      this.storage.setItem(key, JSON.stringify(value));
    } catch (e) {
      log/* log.debug */.c.debug(e);
    }
  }

  getItem(key) {
    let storedValue;

    try {
      storedValue = JSON.parse(this.storage.getItem(key));
    } catch (e) {
      log/* log.debug */.c.debug(e);
      storedValue = null;
    }

    return storedValue === null ? this.DEFAULTS[key] : storedValue;
  }

}
;// CONCATENATED MODULE: ./Extension/src/pages/options/options-storage/index.js

const optionsStorage = new OptionsStorage();

/***/ }),

/***/ 37916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ messenger)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53679);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32380);
/* harmony import */ var _common_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9224);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84568);





class Messenger {
  constructor() {
    this.onMessage = (webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.onMessage);

    this.createLongLivedConnection = (page, events, callback) => {
      const eventListener = (...args) => {
        callback(...args);
      };

      const port = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.connect({
        name: `${page}_${(0,nanoid__WEBPACK_IMPORTED_MODULE_3__/* .nanoid */ .x0)()}`
      });
      port.postMessage({
        type: _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ADD_LONG_LIVED_CONNECTION */ .oK.ADD_LONG_LIVED_CONNECTION,
        data: {
          events
        }
      });
      port.onMessage.addListener(message => {
        if (message.type === _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.NOTIFY_LISTENERS */ .oK.NOTIFY_LISTENERS) {
          const [type, ...data] = message.data;
          eventListener({
            type,
            data
          });
        }
      });
      port.onDisconnect.addListener(() => {
        if ((webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.lastError)) {
          _common_log__WEBPACK_IMPORTED_MODULE_1__/* .log.error */ .c.error((webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.lastError.message));
        }
      });

      const onUnload = () => {
        port.disconnect();
      };

      window.addEventListener('beforeunload', onUnload);
      window.addEventListener('unload', onUnload);
      return onUnload;
    };

    this.createEventListener = async (events, callback, onUnloadCallback) => {
      const eventListener = (...args) => {
        callback(...args);
      };

      let {
        listenerId
      } = await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.CREATE_EVENT_LISTENER */ .oK.CREATE_EVENT_LISTENER, {
        events
      });
      webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.onMessage.addListener(message => {
        if (message.type === _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.NOTIFY_LISTENERS */ .oK.NOTIFY_LISTENERS) {
          const [type, ...data] = message.data;
          eventListener({
            type,
            data
          });
        }
      });

      const onUnload = async () => {
        if (listenerId) {
          const type = _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.REMOVE_LISTENER */ .oK.REMOVE_LISTENER;
          this.sendMessage(type, {
            listenerId
          });
          listenerId = null;

          if (typeof onUnloadCallback === 'function') {
            onUnloadCallback();
          }
        }
      };

      window.addEventListener('beforeunload', onUnload);
      window.addEventListener('unload', onUnload);
      return onUnload;
    };

    this.openExtensionStore = async () => {
      return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_EXTENSION_STORE */ .oK.OPEN_EXTENSION_STORE);
    };

    this.openComparePage = async () => {
      return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_COMPARE_PAGE */ .oK.OPEN_COMPARE_PAGE);
    };
  }

  // eslint-disable-next-line class-methods-use-this
  async sendMessage(type, data) {
    _common_log__WEBPACK_IMPORTED_MODULE_1__/* .log.debug */ .c.debug('Request type:', type);

    if (data) {
      _common_log__WEBPACK_IMPORTED_MODULE_1__/* .log.debug */ .c.debug('Request data:', data);
    }

    const response = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
      type,
      data
    });

    if (response) {
      _common_log__WEBPACK_IMPORTED_MODULE_1__/* .log.debug */ .c.debug('Response type:', type);
      _common_log__WEBPACK_IMPORTED_MODULE_1__/* .log.debug */ .c.debug('Response data:', response);
    }

    return response;
  }
  /**
   * Creates long lived connections between popup and background page
   * @param {string} page
   * @param events
   * @param callback
   * @returns {function}
   */


  async getOptionsData() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_OPTIONS_DATA */ .oK.GET_OPTIONS_DATA);
  } // eslint-disable-next-line class-methods-use-this


  async changeUserSetting(settingId, value) {
    // FIXME refactor message handler to use common message format { type, data }
    await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
      type: _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.CHANGE_USER_SETTING */ .oK.CHANGE_USER_SETTING,
      key: settingId,
      value
    });
  }

  async enableFilter(filterId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ADD_AND_ENABLE_FILTER */ .oK.ADD_AND_ENABLE_FILTER, {
      filterId
    });
  }

  async disableFilter(filterId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.DISABLE_ANTIBANNER_FILTER */ .oK.DISABLE_ANTIBANNER_FILTER, {
      filterId
    });
  }

  async applySettingsJson(json) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.APPLY_SETTINGS_JSON */ .oK.APPLY_SETTINGS_JSON, {
      json
    });
  }

  async openFilteringLog() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_FILTERING_LOG */ .oK.OPEN_FILTERING_LOG);
  }

  async resetStatistics() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.RESET_BLOCKED_ADS_COUNT */ .oK.RESET_BLOCKED_ADS_COUNT);
  }

  async setFilteringLogWindowState(windowState) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SET_FILTERING_LOG_WINDOW_STATE */ .oK.SET_FILTERING_LOG_WINDOW_STATE, {
      windowState
    });
  }

  async resetSettings() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.RESET_SETTINGS */ .oK.RESET_SETTINGS);
  }

  async getUserRules() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_USER_RULES */ .oK.GET_USER_RULES);
  }

  async saveUserRules(value) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SAVE_USER_RULES */ .oK.SAVE_USER_RULES, {
      value
    });
  }

  async getAllowlist() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_ALLOWLIST_DOMAINS */ .oK.GET_ALLOWLIST_DOMAINS);
  }

  async saveAllowlist(value) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SAVE_ALLOWLIST_DOMAINS */ .oK.SAVE_ALLOWLIST_DOMAINS, {
      value
    });
  }

  async updateFilters() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.CHECK_ANTIBANNER_FILTERS_UPDATE */ .oK.CHECK_ANTIBANNER_FILTERS_UPDATE);
  }

  async updateGroupStatus(id, data) {
    const type = data ? _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ENABLE_FILTERS_GROUP */ .oK.ENABLE_FILTERS_GROUP : _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.DISABLE_FILTERS_GROUP */ .oK.DISABLE_FILTERS_GROUP;
    const groupId = id - 0;
    await this.sendMessage(type, {
      groupId
    });
  }

  async updateFilterStatus(filterId, data) {
    const type = data ? _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ADD_AND_ENABLE_FILTER */ .oK.ADD_AND_ENABLE_FILTER : _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.DISABLE_ANTIBANNER_FILTER */ .oK.DISABLE_ANTIBANNER_FILTER;
    await this.sendMessage(type, {
      filterId
    });
  }

  async checkCustomUrl(url) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.LOAD_CUSTOM_FILTER_INFO */ .oK.LOAD_CUSTOM_FILTER_INFO, {
      url
    });
  }

  async addCustomFilter(filter) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SUBSCRIBE_TO_CUSTOM_FILTER */ .oK.SUBSCRIBE_TO_CUSTOM_FILTER, {
      filter
    });
  }

  async removeCustomFilter(filterId) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.REMOVE_ANTIBANNER_FILTER */ .oK.REMOVE_ANTIBANNER_FILTER, {
      filterId
    });
  }

  async getTabInfoForPopup(tabId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_TAB_INFO_FOR_POPUP */ .oK.GET_TAB_INFO_FOR_POPUP, {
      tabId
    });
  }

  async changeApplicationFilteringDisabled(state) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.CHANGE_APPLICATION_FILTERING_DISABLED */ .oK.CHANGE_APPLICATION_FILTERING_DISABLED, {
      state
    });
  }

  async openSettingsTab() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_SETTINGS_TAB */ .oK.OPEN_SETTINGS_TAB);
  }

  async openAssistant() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_ASSISTANT */ .oK.OPEN_ASSISTANT);
  }

  async openAbuseSite(url, from) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_ABUSE_TAB */ .oK.OPEN_ABUSE_TAB, {
      url,
      from
    });
  }

  async checkSiteSecurity(url) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_SITE_REPORT_TAB */ .oK.OPEN_SITE_REPORT_TAB, {
      url
    });
  }

  async resetCustomRulesForPage(url) {
    const [currentTab] = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().tabs.query({
      active: true,
      currentWindow: true
    });
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.RESET_CUSTOM_RULES_FOR_PAGE */ .oK.RESET_CUSTOM_RULES_FOR_PAGE, {
      url,
      tabId: currentTab === null || currentTab === void 0 ? void 0 : currentTab.id
    });
  }

  async removeAllowlistDomain(tabId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.REMOVE_ALLOWLIST_DOMAIN */ .oK.REMOVE_ALLOWLIST_DOMAIN, {
      tabId
    });
  }

  async addAllowlistDomain(tabId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ADD_ALLOWLIST_DOMAIN_POPUP */ .oK.ADD_ALLOWLIST_DOMAIN_POPUP, {
      tabId
    });
  }

  async getStatisticsData() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_STATISTICS_DATA */ .oK.GET_STATISTICS_DATA);
  }

  async onOpenFilteringLogPage() {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ON_OPEN_FILTERING_LOG_PAGE */ .oK.ON_OPEN_FILTERING_LOG_PAGE);
  }

  async getFilteringLogData() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_FILTERING_LOG_DATA */ .oK.GET_FILTERING_LOG_DATA);
  }

  async onCloseFilteringLogPage() {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ON_CLOSE_FILTERING_LOG_PAGE */ .oK.ON_CLOSE_FILTERING_LOG_PAGE);
  }

  async getFilteringInfoByTabId(tabId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_FILTERING_INFO_BY_TAB_ID */ .oK.GET_FILTERING_INFO_BY_TAB_ID, {
      tabId
    });
  }

  async synchronizeOpenTabs() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SYNCHRONIZE_OPEN_TABS */ .oK.SYNCHRONIZE_OPEN_TABS);
  }

  async clearEventsByTabId(tabId, ignorePreserveLog) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.CLEAR_EVENTS_BY_TAB_ID */ .oK.CLEAR_EVENTS_BY_TAB_ID, {
      tabId,
      ignorePreserveLog
    });
  }

  async refreshPage(tabId, preserveLogEnabled) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.REFRESH_PAGE */ .oK.REFRESH_PAGE, {
      tabId,
      preserveLogEnabled
    });
  }

  async openTab(url, options) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_TAB */ .oK.OPEN_TAB, {
      url,
      options
    });
  }

  async filteringLogAddUserRule(ruleText) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.FILTERING_LOG_ADD_USER_RULE */ .oK.FILTERING_LOG_ADD_USER_RULE, {
      ruleText
    });
  }

  async unAllowlistFrame(frameInfo) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.UN_ALLOWLIST_FRAME */ .oK.UN_ALLOWLIST_FRAME, {
      frameInfo
    });
  }

  async removeUserRule(ruleText) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.REMOVE_USER_RULE */ .oK.REMOVE_USER_RULE, {
      ruleText
    });
  }

  async getTabFrameInfoById(tabId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_TAB_FRAME_INFO_BY_ID */ .oK.GET_TAB_FRAME_INFO_BY_ID, {
      tabId
    });
  }

  async setPreserveLogState(state) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SET_PRESERVE_LOG_STATE */ .oK.SET_PRESERVE_LOG_STATE, {
      state
    });
  }

  async getEditorStorageContent() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_EDITOR_STORAGE_CONTENT */ .oK.GET_EDITOR_STORAGE_CONTENT);
  }

  async setEditorStorageContent(content) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SET_EDITOR_STORAGE_CONTENT */ .oK.SET_EDITOR_STORAGE_CONTENT, {
      content
    });
  }

  async convertRuleText(content) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.CONVERT_RULES_TEXT */ .oK.CONVERT_RULES_TEXT, {
      content
    });
  }

}

const messenger = new Messenger();


/***/ }),

/***/ 43121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".checkbox {\n    position: relative;\n    height: 100%;\n}\n\n    .checkbox__in {\n        position: absolute;\n        right: 14px;\n        top: -3px;\n        height: 20px;\n        width: 40px;\n        overflow: hidden;\n        clip: rect(1px, 1px, 1px, 1px);\n    }\n\n    .checkbox__in.focus-visible + .checkbox__label:after {\n            outline: 2px solid var(--outline);\n        }\n\n    .checkbox__in:focus-visible + .checkbox__label:after {\n            outline: 2px solid var(--outline);\n        }\n\n    .checkbox__in:checked + .checkbox__label:after {\n                background-color: var(--green74);\n            }\n\n    .checkbox__in:checked + .checkbox__label:before {\n                transform: translate(22px, 2px);\n            }\n\n    @media (min-width: 640px) {\n\n    .checkbox__in:checked + .checkbox__label:before {\n                    transform: translate(86px, 18px)\n            }\n                }\n\n    .checkbox__label {\n        cursor: pointer;\n        display: flex;\n        align-items: flex-start;\n        justify-content: flex-end;\n        position: relative;\n        width: 40px;\n        height: 20px;\n        font-size: 0;\n        border-radius: 8px;\n        transition: 0.3s ease background-color;\n    }\n\n    @media (min-width: 640px) {\n\n    .checkbox__label {\n            width: 120px;\n            height: 100%;\n            padding: 0 16px\n    }\n        }\n\n    .checkbox__label:hover {\n            background-color: var(--gray100);\n        }\n\n    @media (color-index: 48) {\n\n    .checkbox__label:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .checkbox__label:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .checkbox__label:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (min-width: 640px) {\n\n    .checkbox__label--actions {\n                transform: translate(-40px, 6px)\n        }\n            }\n\n    .checkbox__label--actions:hover {\n                background-color: transparent !important;\n            }\n\n    @media (color-index: 48) {\n\n    .checkbox__label--actions:hover {\n                    background-color: transparent !important\n            }\n                }\n\n    @media (color: 48842621) {\n\n    .checkbox__label--actions:hover {\n                    background-color: transparent !important\n            }\n                }\n\n    @media (prefers-color-scheme: dark) {\n\n    .checkbox__label--actions:hover {\n                    background-color: transparent !important\n            }\n                }\n\n    .checkbox__label:before {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            left: 0;\n            transform: translate(2px, 2px);\n            z-index: 1;\n            width: 16px;\n            height: 16px;\n            border-radius: 50%;\n            background-color: var(--white);\n            transition: var(--t3) transform;\n        }\n\n    @media (min-width: 640px) {\n\n    .checkbox__label:before {\n                top: -16px;\n                transform: translate(66px, 18px)\n        }\n            }\n\n    .checkbox__label:after {\n            content: \"\";\n            font-size: 0;\n            display: block;\n            width: 40px;\n            height: 20px;\n            border-radius: 10px;\n            background-color: var(--gray700);\n            cursor: pointer;\n        }\n\n    @media (color-index: 48) {\n\n    .checkbox__label:after {\n                background-color: var(--gray700)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .checkbox__label:after {\n                background-color: var(--gray700)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .checkbox__label:after {\n                background-color: var(--gray700)\n        }\n            }\n\n.light-mode .checkbox__label:hover {\n                background-color: var(--gray100);\n            }\n\n\n.dark-mode .checkbox__label:hover {\n                background-color: var(--gray900);\n            }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 79461:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".select {\n    display: inline-block;\n    position: relative;\n}\n\n    .select__value {\n        font-weight: 500;\n        white-space: nowrap;\n        font-size: 16px;\n        -moz-text-align-last: right;\n             text-align-last: right;\n        color: var(--gray-base);\n        padding-right: 25px;\n        cursor: pointer;\n        border: 0;\n        background-color: transparent;\n        -webkit-appearance: none;\n    }\n\n    @media (color-index: 48) {\n\n    .select__value {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .select__value {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .select__value {\n            color: var(--gray300)\n    }\n        }\n\n    .select__ico {\n        position: absolute;\n        pointer-events: none;\n        right: 5px;\n        top: calc(50% - 4px);\n    }\n\n    .select__list {\n        position: absolute;\n        right: 0;\n        z-index: 10;\n        border: 1px solid var(--gray700);\n        border-radius: 4px;\n        max-height: 265px;\n        min-width: 160px;\n        max-width: 220px;\n        overflow-y: auto;\n        box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.1);\n        margin: 13px 0 0 0;\n        background-color: var(--white);\n        scrollbar-width: thin;\n    }\n\n    @media (color-index: 48) {\n\n    .select__list {\n            background-color: var(--black)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .select__list {\n            background-color: var(--black)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .select__list {\n            background-color: var(--black)\n    }\n        }\n\n    .select__list[hidden] {\n            display: none;\n        }\n\n    .select__list::-webkit-scrollbar {\n            width: 4px;\n        }\n\n    .select__list::-webkit-scrollbar-thumb {\n            border-radius: 0;\n            background-color: var(--gray700);\n        }\n\n    .select__item {\n        font-size: 15px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        padding: 16px 25px;\n        cursor: pointer;\n        border: 0;\n        background-color: transparent;\n        color: var(--gray900);\n        width: 100%;\n        text-align: left;\n    }\n\n    .select__item.focus-visible {\n            outline: none;\n            box-shadow: inset 0 0 0 2px var(--outline);\n        }\n\n    .select__item:focus-visible {\n            outline: none;\n            box-shadow: inset 0 0 0 2px var(--outline);\n        }\n\n    @media (color-index: 48) {\n\n    .select__item {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .select__item {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .select__item {\n            color: var(--gray300)\n    }\n        }\n\n    .select__item:hover {\n            background-color: var(--gray100);\n        }\n\n    @media (color-index: 48) {\n\n    .select__item:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .select__item:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .select__item:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n.light-mode .select__value {\n            color: var(--gray-base);\n        }\n\n.light-mode .select__list {\n            background-color: var(--white);\n        }\n\n.light-mode .select__item {\n            color: var(--gray900);\n        }\n\n.light-mode .select__item:hover {\n                background-color: var(--gray100);\n                color: var(--gray900);\n            }\n\n.dark-mode .select__value {\n            color: var(--gray300);\n        }\n\n.dark-mode .select__list {\n            background-color: var(--black);\n        }\n\n.dark-mode .select__item {\n            color: var(--gray300);\n        }\n\n.dark-mode .select__item:hover {\n                background-color: var(--gray900);\n            }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 49970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tooltip {\n    white-space: nowrap;\n    visibility: hidden;\n    opacity: 0;\n    padding: 8px 16px;\n    color: var(--gray-base);\n    background-color: var(--white);\n    font-size: 14px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);\n    border-radius: 4px;\n}\n\n    @media (color-index: 48) {.tooltip {\n        color: var(--gray300);\n        background-color: var(--gray700)\n}\n    }\n\n    @media (color: 48842621) {.tooltip {\n        color: var(--gray300);\n        background-color: var(--gray700)\n}\n    }\n\n    @media (prefers-color-scheme: dark) {.tooltip {\n        color: var(--gray300);\n        background-color: var(--gray700)\n}\n    }\n\n    .tooltip--on {\n        visibility: visible;\n        opacity: 1;\n    }\n\n    .tooltip--off {\n        visibility: hidden;\n        opacity: 0;\n    }\n\n.popover {\n    display: inline-block;\n}\n\n.light-mode .tooltip {\n        color: var(--gray-base);\n        background-color: var(--white);\n    }\n\n.dark-mode .tooltip {\n        color: var(--gray300);\n        background-color: var(--gray700);\n    }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 84381:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Roboto Flex';\n    src: url('../../../../assets/fonts/Roboto-Flex-Regular.woff2') format('woff2 supports variations'),\n       url('../../../../assets/fonts/Roboto-Flex-Regular.woff2') format('woff2-variations');\n    font-weight: 100 1000;\n    font-stretch: 25% 151%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 46949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon {\n    display: inline-block;\n    vertical-align: middle;\n    flex-shrink: 0;\n}\n\n    .icon--contain {\n        width: 100%;\n        height: 100%;\n    }\n\n    .icon--24 {\n        width: 24px;\n        height: 24px;\n    }\n\n    .icon--setting {\n        width: 24px;\n        height: 24px;\n    }\n\n    .icon--back {\n        width: 10px;\n        height: 18px;\n    }\n\n    .icon--checked {\n        width: 13px;\n        height: 12px;\n    }\n\n    .icon--empty {\n        width: 82px;\n        height: 104px;\n    }\n\n    .icon--link {\n        width: 14px;\n        height: 14px;\n        color: var(--green400);\n    }\n\n    .icon--logo {\n        width: 126px;\n        height: 28px;\n        color: #232323;\n    }\n\n    @media (color-index: 48) {\n\n    .icon--logo {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .icon--logo {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .icon--logo {\n            color: var(--gray300)\n    }\n        }\n\n    .icon--magnifying {\n        width: 20px;\n        height: 20px;\n        color: var(--gray400);\n    }\n\n    @media (color-index: 48) {\n\n    .icon--magnifying {\n            color: var(--gray700)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .icon--magnifying {\n            color: var(--gray700)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .icon--magnifying {\n            color: var(--gray700)\n    }\n        }\n\n    .icon--trash {\n        width: 14px;\n        height: 17px;\n    }\n\n    .icon--reload {\n        width: 22px;\n        height: 15px;\n    }\n\n    .icon--menu {\n        width: 24px;\n        height: 26px;\n    }\n\n    .icon--select {\n        width: 14px;\n        height: 8px;\n    }\n\n    @media (max-width: 640px) {\n\n    .icon--select {\n            width: 10px;\n            height: 6px\n    }\n        }\n\n    .icon--filters {\n        width: 14px;\n        height: 13px;\n    }\n\n    .icon--like {\n        color: var(--gray900);\n    }\n\n    @media (color-index: 48) {\n\n    .icon--like {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .icon--like {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .icon--like {\n            color: var(--gray300)\n    }\n        }\n\n    .icon--extend {\n        width: 24px;\n        height: 24px;\n        color: var(--gray700);\n    }\n\n.light-mode .icon--logo {\n            color: #232323;\n        }\n\n.light-mode .icon--like {\n            color: var(--gray900);\n        }\n\n.light-mode .icon--magnifying {\n            color: var(--gray400);\n        }\n\n.light-mode .icon--extend {\n            color: var(--gray700);\n        }\n\n.dark-mode .icon--logo {\n            color: var(--gray300);\n        }\n\n.dark-mode .icon--like {\n            color: var(--gray300);\n        }\n\n.dark-mode .icon--magnifying {\n            color: var(--gray700);\n        }\n\n.dark-mode .icon--extend {\n            color: var(--gray300);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 26834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    /*GRAYSCALE*/\n    --white: #ffffff;\n    --gray100: #f3f3f3;\n    --gray300: #d8d8d8;\n    --gray400: #a4a4a4;\n    --gray700: #888888;\n    --gray900: #4d4d4d;\n    --grayDark: #2a2a2a;\n    --black: #131313;\n    /*FEEDBACK*/\n    --red300: #bf4829;\n    --red400: #c23814;\n    --orange400: #eb9300;\n    /*BRAND*/\n    --green400: #67b279;\n    --green700: #4d995f;\n    /*ADDITIONAL*/\n    --purple400: #b267a0;\n    --purple700: #994d87;\n    --slateblue400: #677bb2;\n    --slateblue700: #4d6199;\n    --outline: #005ecc;\n    /*EDITOR*/\n    --green-editor: #338033;\n    --yellow-editor500: #ffff00;\n    --blue-selection: rgb(181, 213, 255);\n    /* - dark mode*/\n    --cyan-editor: #4093d6;\n    --yellow-editor: #dbdb84;\n    --pink-editor: #c46cbd;\n    --orange-editor: #cf8263;\n    --blueDark-editor: #264f78;\n    /* - light mode*/\n    --blue-editor: #4141e2;\n    --brown-editor: #795e26;\n    --purple-editor: #9e45b4;\n    --red-editor: #a31515;\n    /*FILTERING-LOG*/\n    --regular-row-hover: var(--gray100);\n    --regular-row-active: var(--gray300);\n    --red-row: #ffd3c7;\n    --red-row-hover: #ffb5a1;\n    --red-row-active: #ff967b;\n    --green-row: #dcffe5;\n    --green-row-hover: #c3ffd1;\n    --green-row-active: #a9ffbe;\n    --orange-row: #ffe4b7;\n    --orange-row-hover: #ffdda5;\n    --orange-row-active: #ffcf7d;\n    /*GRADIENTS*/\n}\n    /*FILTERING-LOG-DARK*/\n    @media (color-index: 48) {:root {\n        --regular-row-hover: #2f2f2f;\n        --regular-row-active: #3b3b3b;\n        --red-row: #46231a;\n        --red-row-hover: #692d1e;\n        --red-row-active: #7a3320;\n        --green-row: #2c4332;\n        --green-row-hover: #3d6246;\n        --green-row-active: #457250;\n        --orange-row: #4d350d;\n        --orange-row-hover: #61410B;\n        --orange-row-active: #744c0a;\n        --blue-selection: #556a86;\n        --outline: #99c9ff;\n}\n    }\n    @media (color: 48842621) {:root {\n        --regular-row-hover: #2f2f2f;\n        --regular-row-active: #3b3b3b;\n        --red-row: #46231a;\n        --red-row-hover: #692d1e;\n        --red-row-active: #7a3320;\n        --green-row: #2c4332;\n        --green-row-hover: #3d6246;\n        --green-row-active: #457250;\n        --orange-row: #4d350d;\n        --orange-row-hover: #61410B;\n        --orange-row-active: #744c0a;\n        --blue-selection: #556a86;\n        --outline: #99c9ff;\n}\n    }\n    @media (prefers-color-scheme: dark) {:root {\n        --regular-row-hover: #2f2f2f;\n        --regular-row-active: #3b3b3b;\n        --red-row: #46231a;\n        --red-row-hover: #692d1e;\n        --red-row-active: #7a3320;\n        --green-row: #2c4332;\n        --green-row-hover: #3d6246;\n        --green-row-active: #457250;\n        --orange-row: #4d350d;\n        --orange-row-hover: #61410B;\n        --orange-row-active: #744c0a;\n        --blue-selection: #556a86;\n        --outline: #99c9ff;\n}\n    }\n    :root {\n\n    --switch-btn-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n    --swamp: #547b88;\n    --switch-field-enabled: linear-gradient(90deg, #67B279 0%, #39774C 100%);\n    --switch-field-disabled: linear-gradient(90deg, #732613 0%, #BF4829 100%);\n\n    --greyf7: #f7f7f7;\n    --gray05: rgba(239, 239, 239, 0.5);\n    --greye7: #e7e7e7;\n    --gey6a: #d1d1d1;\n    --grayd8: var(--gray700);\n    --grey78: #787878;\n    --gray-base: var(--gray900);\n    --gray4a: #4a4a4a;\n    --gray88: var(--gray700);\n    --green74: #66b574;\n    --green86: #68bc86;\n    --green75: #5ba575;\n    --red23: #F66F23;\n    --t3: 0.3s ease;\n    --overlay-gray: rgba(137, 137, 137, 0.5);\n    --light-shadow: rgba(0, 0, 0, 0.05);\n    --sidebar-transition: 0.3s ease;\n    --z-idx5: 5;\n    --z-idx6: 6;\n    --z-idx7: 7;\n    --z-idx8: 8;\n}\n\n.dark-mode {\n    --regular-row-hover: #2f2f2f;\n    --regular-row-active: #3b3b3b;\n    --red-row: #46231a;\n    --red-row-hover: #692d1e;\n    --red-row-active: #7a3320;\n    --green-row: #2c4332;\n    --green-row-hover: #3d6246;\n    --green-row-active: #457250;\n    --orange-row: #4d350d;\n    --orange-row-hover: #61410B;\n    --orange-row-active: #744c0a;\n    --blue-selection: #556a86;\n    --outline: #99c9ff;\n}\n\n.light-mode {\n    --regular-row-hover: var(--gray100);\n    --regular-row-active: var(--gray300);\n    --red-row: #ffd3c7;\n    --red-row-hover: #ffb5a1;\n    --red-row-active: #ff967b;\n    --green-row: #dcffe5;\n    --green-row-hover: #c3ffd1;\n    --green-row-active: #a9ffbe;\n    --orange-row: #ffe4b7;\n    --orange-row-hover: #ffdda5;\n    --orange-row-active: #ffcf7d;\n    --blue-selection: rgb(181, 213, 255);\n    --outline: #005ecc;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 20853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".about {\n    padding: 16px 16px 40px 16px;\n    font-weight: 400;\n}\n\n    .about__title {\n        font-weight: 700;\n        font-size: 20px;\n        margin-bottom: 8px;\n    }\n\n    .about__version {\n        color: var(--gray4a);\n        font-size: 16px;\n    }\n\n    @media (color-index: 48) {\n\n    .about__version {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .about__version {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .about__version {\n            color: var(--gray300)\n    }\n        }\n\n    .about__copyright {\n        font-size: 16px;\n        color: var(--gray4a);\n        margin-bottom: 32px;\n    }\n\n    @media (color-index: 48) {\n\n    .about__copyright {\n            color: var(--gray400)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .about__copyright {\n            color: var(--gray400)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .about__copyright {\n            color: var(--gray400)\n    }\n        }\n\n.light-mode .about__version {\n            color: var(--gray4a);\n        }\n\n.light-mode .about__copyright {\n            color: var(--gray4a);\n        }\n\n.light-mode .about__menu-item {\n            color: var(--gray4a);\n        }\n\n.dark-mode .about__version {\n            color: var(--gray300);\n        }\n\n.dark-mode .about__copyright {\n            color: var(--gray400);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 21623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-custom {\n    padding-top: 80px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n    .empty-custom__ico {\n        margin: 0 auto 62px auto;\n        transform: translateX(6px);\n    }\n\n    .empty-custom__desc {\n        margin-bottom: 30px;\n        font-size: 14px;\n        line-height: 22px;\n        text-align: center;\n    }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 74749:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".filters-update {\n    border: 0;\n    outline: none;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 0 16px;\n    flex-wrap: wrap;\n    margin-bottom: 24px;\n}\n\n    @media (min-width: 640px) {.filters-update {\n        flex-wrap: nowrap\n}\n    }\n\n    .filters-update__info {\n        flex-shrink: 1;\n        font-size: 14px;\n        color: var(--gray700);\n        display: flex;\n        flex-direction: column;\n        margin: 0 5px 8px 0;\n    }\n\n    @media (min-width: 640px) {\n\n    .filters-update__info {\n            margin: 0 8px 0 0\n    }\n        }\n\n    @media (color-index: 48) {\n\n    .filters-update__info {\n            opacity: 0.5;\n            color: var(--white)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .filters-update__info {\n            opacity: 0.5;\n            color: var(--white)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .filters-update__info {\n            opacity: 0.5;\n            color: var(--white)\n    }\n        }\n\n    .filters-update__btn {\n        flex-shrink: 0;\n        min-width: 200px;\n    }\n\n.light-mode .filters-update__info {\n        opacity: 1;\n        color: var(--gray700);\n    }\n\n.dark-mode .filters-update__info {\n        color: var(--white);\n        opacity: 0.5;\n    }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 65228:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search {\n    height: 40px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: var(--gray100);\n    border-radius: 8px;\n    margin: 8px 16px 24px;\n    padding: 0 16px 0 0;\n}\n\n    @media (color-index: 48) {.search {\n        border: 1px solid var(--gray900);\n        background-color: var(--black)\n}\n    }\n\n    @media (color: 48842621) {.search {\n        border: 1px solid var(--gray900);\n        background-color: var(--black)\n}\n    }\n\n    @media (prefers-color-scheme: dark) {.search {\n        border: 1px solid var(--gray900);\n        background-color: var(--black)\n}\n    }\n\n    .search--focused {\n        background-color: var(--gray300);\n    }\n\n    @media (color-index: 48) {\n\n    .search--focused {\n            background-color: var(--gray900)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .search--focused {\n            background-color: var(--gray900)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .search--focused {\n            background-color: var(--gray900)\n    }\n        }\n\n    .search__label {\n        min-width: 90px;\n        flex-grow: 1;\n    }\n\n    .search__input {\n        border: 0;\n        background: none;\n        padding: 10px 8px 10px 16px;\n        outline: none;\n        font-size: 14px;\n        width: 100%;\n    }\n\n    @media (min-width: 640px) {\n\n    .search__input {\n            font-size: 16px\n    }\n        }\n\n    .search__input::-moz-placeholder {\n            opacity: 1;\n            color: var(--gray700);\n            font-size: 14px;\n        }\n\n    .search__input::placeholder {\n            opacity: 1;\n            color: var(--gray700);\n            font-size: 14px;\n        }\n\n    @media (min-width: 640px) {\n\n    .search__input::-moz-placeholder {\n                font-size: 16px\n        }\n\n    .search__input::placeholder {\n                font-size: 16px\n        }\n            }\n\n    .search__input:focus {\n            outline: none;\n        }\n\n    @media (color-index: 48) {\n\n    .search__input {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .search__input {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .search__input {\n            color: var(--gray300)\n    }\n        }\n\n    @media (min-width: 640px) {\n\n    .search__select {\n            padding-left: 16px;\n            margin-left: 20px;\n            border-left: 1px solid var(--gray700)\n    }\n        }\n\n    .search__select .select__ico,\n        .search__select .select__value,\n        .search__select option {\n            color: var(--gray700);\n            font-size: 14px;\n            font-weight: 400;\n        }\n\n    @media (min-width: 640px) {\n\n    .search__select .select__ico,\n        .search__select .select__value,\n        .search__select option {\n                font-size: 16px\n        }\n            }\n\n    .search__cross {\n        width: 20px;\n        min-width: 20px;\n        height: 20px;\n        position: relative;\n        color: var(--gray400);\n    }\n\n    @media (color-index: 48) {\n\n    .search__cross {\n            color: var(--gray400)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .search__cross {\n            color: var(--gray400)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .search__cross {\n            color: var(--gray400)\n    }\n        }\n\n.filters {\n    margin-bottom: 16px;\n}\n\n.filters--disabled {\n        opacity: 0.5;\n        pointer-events: none;\n    }\n\n.light-mode .search {\n        border: 0;\n        background-color: var(--gray100);\n    }\n\n.light-mode .search__input {\n            color: var(--gray-base);\n        }\n\n.light-mode .search__cross {\n            color: var(--gray400);\n        }\n\n.light-mode .search--focused {\n            background-color: var(--gray300);\n        }\n\n.dark-mode .search {\n        border: 1px solid var(--gray900);\n        background-color: var(--black);\n    }\n\n.dark-mode .search__input {\n            color: var(--gray300);\n        }\n\n.dark-mode .search__cross {\n            color: var(--gray400);\n        }\n\n.dark-mode .search--focused {\n            background-color: var(--gray900);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 40562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".filter {\n    display: flex;\n    align-items: center;\n    position: relative;\n    padding: 16px;\n    min-height: 70px;\n}\n\n    .filter__title {\n        display: inline-block;\n        word-break: break-word;\n        font-weight: 500;\n        font-size: 16px;\n        margin-bottom: 4px;\n    }\n\n    .filter__search {\n        background-color: var(--orange400);\n    }\n\n    .filter__title-in {\n        margin-right: 12px;\n    }\n\n    .filter:last-child {\n        box-shadow: none;\n    }\n\n    .filter__link {\n        color: var(--gray700);\n        display: inline-block;\n        font-size: 14px;\n    }\n\n    .filter__controls {\n        white-space: nowrap;\n    }\n\n    .filter__info {\n        width: 100%;\n    }\n\n    .filter__title-container{\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .filter__desc {\n        margin-right: 55px;\n        color: var(--grayd8);\n        font-size: 14px;\n        word-break: break-word;\n    }\n\n    .filter__desc a {\n            color: var(--green74);\n            text-decoration: underline;\n        }\n\n    .filter__desc-item {\n        margin-bottom: 4px;\n    }\n\n    .filter__tags {\n        display: flex;\n        font-size: 14px;\n        flex-wrap: wrap;\n    }\n\n    .filter__tag {\n        position: relative;\n        cursor: pointer;\n        margin-right: 20px;\n        margin-top: 6px;\n        color: var(--green74);\n        word-break: break-word;\n    }\n\n    .filter__tag .filter__search {\n            color: var(--gray-base);\n        }\n\n    @media (color-index: 48) {\n\n    .filter__tag .filter__search {\n                color: var(--gray300)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .filter__tag .filter__search {\n                color: var(--gray300)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .filter__tag .filter__search {\n                color: var(--gray300)\n        }\n            }\n\n    .filter__remove {\n        color: var(--red400);\n        position: relative;\n        top: -2px;\n        cursor: pointer;\n    }\n\n    .filter__empty {\n        padding-top: 40px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    @media (min-width: 640px) {\n\n    .filter__empty {\n            padding-top: 120px\n    }\n        }\n\n.light-mode .filter__tag .filter__search {\n                color: var(--gray-base);\n            }\n\n.dark-mode .filter__tag .filter__search {\n                color: var(--gray300);\n            }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 45841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".group {\n    cursor: pointer;\n}\n\n    .group--disabled .setting__icon {\n            color: var(--gray400);\n        }\n\n    @media (min-width: 640px) {\n\n    .group__checkbox {\n            border-radius: 8px\n    }\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 97970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer > .footer__rate {\n        padding: 32px 32px 40px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n        @media (min-width: 640px) {.footer > .footer__rate {\n            padding: 0 32px\n    }\n        }\n    .footer__in {\n        display: flex;\n        justify-content: space-between;\n        height: 100%;\n        width: 100%;\n        flex-direction: column;\n        align-items: flex-start;\n        max-width: 100%;\n    }\n    @media (min-width: 640px) {\n    .footer__in {\n            flex-direction: row;\n            align-items: center\n    }\n        }\n    .footer__in--rate {\n            position: relative;\n            justify-content: center;\n        }\n    .footer__rate {\n        height: 158px;\n        background-color: var(--greyf7);\n    }\n    @media (color-index: 48) {\n    .footer__rate {\n            background-color: var(--grayDark)\n    }\n        }\n    @media (color: 48842621) {\n    .footer__rate {\n            background-color: var(--grayDark)\n    }\n        }\n    @media (prefers-color-scheme: dark) {\n    .footer__rate {\n            background-color: var(--grayDark)\n    }\n        }\n    @media (min-width: 640px) {\n    .footer__rate {\n            height: 56px\n    }\n        }\n    .footer__rate-desc {\n        margin: 0 0 17px 0;\n    }\n    @media (min-width: 640px) {\n    .footer__rate-desc {\n            margin: 0 17px 0 0\n    }\n        }\n    .footer__rate-close {\n        position: absolute;\n        right: 0;\n        cursor: pointer;\n        padding: 0;\n        background-color: transparent;\n        border: 0;\n    }\n    .footer__rate-close .icon {\n            width: 12px;\n            height: 12px;\n            color: var(--gray400);\n        }\n\n.light-mode .footer__rate {\n            background-color: var(--greyf7);\n        }\n\n.dark-mode .footer__rate {\n            background-color: var(--grayDark);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 12991:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 24px 0;\n}\n\n    .nav__item {\n        padding: 15px 38px;\n        margin-bottom: 8px;\n        line-height: 20px;\n        color: var(--gray-base);\n        text-decoration: none;\n        display: inline-block;\n        font-size: 16px;\n        cursor: pointer;\n        transition: var(--t3) box-shadow, var(--t3)  background-color, var(--t3) color;\n        width: 100%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    @media (color-index: 48) {\n\n    .nav__item {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .nav__item {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .nav__item {\n            color: var(--gray300)\n    }\n        }\n\n    .nav__item:hover {\n            background-color: var(--white);\n        }\n\n    @media (color-index: 48) {\n\n    .nav__item:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .nav__item:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .nav__item:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    .nav__item--active {\n            background-color: var(--white);\n            position: relative;\n            font-weight: 600;\n            overflow: visible;\n        }\n\n    @media (color-index: 48) {\n\n    .nav__item--active {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .nav__item--active {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .nav__item--active {\n                background-color: var(--gray900)\n        }\n            }\n\n    .nav__item:last-child {\n            margin-bottom: 40px;\n        }\n\n    @media (min-width: 640px) {.nav {\n        padding: 0\n}\n    }\n\n.light-mode .nav__item {\n            color: var(--gray-base);\n        }\n\n.light-mode .nav__item:hover {\n                color: var(--gray-base);\n                background-color: var(--white);\n            }\n\n.light-mode .nav__item--active {\n                color: var(--gray-base);\n                background-color: var(--white);\n            }\n\n.dark-mode .nav__item {\n            color: var(--gray300);\n        }\n\n.dark-mode .nav__item:hover {\n                background-color: var(--gray900);\n            }\n\n.dark-mode .nav__item--active {\n                background-color: var(--gray900);\n            }\n\n.dark-mode .nav__item--active:before {\n                    background-color: var(--grayDark);\n                }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 23667:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".notifications {\n    position: sticky;\n    z-index: 10;\n    top: 66px;\n    left: 0;\n    height: 0;\n    width: 100%;\n    transform: translateY(-50px);\n    padding: 0 10px;\n}\n\n.notification {\n    top: 0;\n    left: 0;\n    width: 100%;\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    padding: 16px 23px 16px 19px;\n    border-radius: 8px;\n    background-color: var(--gray900);\n    color: var(--white);\n    min-height: 50px;\n    z-index: var(--z-idx8);\n    animation: notify-show 0.3s ease-in;\n    margin-bottom: 15px;\n}\n\n@media (color-index: 48) {\n\n.notification {\n        background-color: var(--gray700)\n}\n    }\n\n@media (color: 48842621) {\n\n.notification {\n        background-color: var(--gray700)\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\n.notification {\n        background-color: var(--gray700)\n}\n    }\n\n.notification--close {\n        animation: notify-show-reverse 0.3s ease-out;\n        animation-fill-mode: forwards;\n    }\n\n.notification__close {\n        margin-left: auto;\n        transform: translateY(-3px);\n    }\n\n.notification__icon {\n        color: var(--white);\n    }\n\n.notification__icon--info {\n            width: 24px;\n            height: 24px;\n        }\n\n.notification__icon--close {\n            width: 24px;\n            height: 24px;\n        }\n\n.notification__message {\n        display: flex;\n        flex-direction: column;\n        align-self: center;\n        margin: 0 22px 0 19px;\n        line-height: 16px;\n    }\n\n.notification__title {\n        font-size: 14px;\n        font-weight: 600;\n        margin-bottom: 8px;\n    }\n\n.notification__description {\n        font-size: 12px;\n    }\n\n@keyframes notify-show {\n    0% {\n        transform: translateY(-50px);\n    }\n\n    100% {\n        transform: translateY(0);\n    }\n}\n\n@keyframes notify-show-reverse {\n    0% {\n        transform: translateY(0);\n    }\n\n    100% {\n        transform: translateY(-50px);\n    }\n}\n\n.light-mode .notification {\n        background-color: var(--gray900);\n    }\n\n.dark-mode .notification {\n        background-color: var(--gray700);\n    }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 11586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".input__in {\n        height: 32px;\n        border: 1px solid var(--gray300);\n        padding: 2px 12px;\n        margin-top: 20px;\n        margin-bottom: 4px;\n        width: 100%;\n        border-radius: 4px;\n        outline: none;\n    }\n\n        @media (color-index: 48) {.input__in {\n            border: 1px solid var(--gray900);\n            background-color: var(--black);\n            color: var(--gray300)\n    }\n        }\n\n        @media (color: 48842621) {.input__in {\n            border: 1px solid var(--gray900);\n            background-color: var(--black);\n            color: var(--gray300)\n    }\n        }\n\n        @media (prefers-color-scheme: dark) {.input__in {\n            border: 1px solid var(--gray900);\n            background-color: var(--black);\n            color: var(--gray300)\n    }\n        }\n\n        /* Chrome, Edge, Opera */\n\n        .input__in::-webkit-outer-spin-button,\n        .input__in::-webkit-inner-spin-button {\n            -webkit-appearance: none;\n            margin: 0;\n        }\n\n        /* Firefox */\n\n        .input__in[type=number] {\n            -moz-appearance: textfield;\n        }\n\n.light-mode .input__in {\n            border: 1px solid var(--gray88);\n            background-color: transparent;\n            color: var(--gray-base);\n        }\n\n.dark-mode .input__in {\n            border: 1px solid var(--gray900);\n            background-color: var(--black);\n            color: var(--gray300);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".textarea {\n    width: 100%;\n    height: 80px;\n    resize: none;\n    padding: 8px 12px;\n    margin-top: 20px;\n    color: var(--gray-base);\n    font-size: 16px;\n    background-color: white;\n    border: 1px solid var(--gray300);\n    border-radius: 4px;\n}\n\n    @media (color-index: 48) {.textarea {\n        color: var(--gray300);\n        border: 1px solid var(--gray900);\n        background-color: var(--black)\n}\n    }\n\n    @media (color: 48842621) {.textarea {\n        color: var(--gray300);\n        border: 1px solid var(--gray900);\n        background-color: var(--black)\n}\n    }\n\n    @media (prefers-color-scheme: dark) {.textarea {\n        color: var(--gray300);\n        border: 1px solid var(--gray900);\n        background-color: var(--black)\n}\n    }\n\n.light-mode .textarea {\n        border: 1px solid var(--gray88);\n        color: var(--gray-base);\n        background-color: white;\n    }\n\n\n.dark-mode .textarea {\n        color: var(--gray300);\n        border: 1px solid var(--gray900);\n        background-color: var(--black);\n    }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 12166:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".compare {\n    position: fixed;\n    z-index: 6;\n    margin: auto auto 0;\n    width: 208px;\n    bottom: 16px;\n    left: 16px;\n    padding: 24px;\n    border-radius: 8px;\n    background-color: var(--white);\n    word-break: break-word;\n}\n\n    @media (color-index: 48) {.compare {\n        background-color: var(--grayDark)\n}\n    }\n\n    @media (color: 48842621) {.compare {\n        background-color: var(--grayDark)\n}\n    }\n\n    @media (prefers-color-scheme: dark) {.compare {\n        background-color: var(--grayDark)\n}\n    }\n\n    .compare__message {\n        margin-bottom: 16px;\n        line-height: 22px;\n    }\n\n    .compare__close {\n        position: absolute;\n        top: 8px;\n        right: 8px;\n        border: 0;\n        padding: 0;\n        background-color: transparent;\n        cursor: pointer;\n    }\n\n    .compare__close .icon {\n            width: 24px;\n            height: 24px;\n            color: var(--gray700);\n        }\n\n.light-mode .compare {\n        background-color: var(--white);\n    }\n\n.dark-mode .compare {\n        background-color: var(--grayDark);\n    }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 78201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sidebar {\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    padding: 48px 0 48px 0;\n    height: 100%;\n    position: fixed;\n    left: 0;\n    top: 0;\n    background: var(--gray100);\n    z-index: var(--z-idx6);\n    margin: 0;\n    width: 240px;\n    transform: translateX(-100%);\n    transition: transform var(--sidebar-transition);\n    overflow-y: auto;\n    overflow-x: hidden;;\n}\n\n    @media (color-index: 48) {.sidebar {\n        background: var(--black);\n        border-right: 1px solid var(--gray900);\n}\n    }\n\n    @media (color: 48842621) {.sidebar {\n        background: var(--black);\n        border-right: 1px solid var(--gray900);\n}\n    }\n\n    @media (prefers-color-scheme: dark) {.sidebar {\n        background: var(--black);\n        border-right: 1px solid var(--gray900);\n}\n    }\n\n    .sidebar__menu {\n        display: block;\n        position: fixed;\n        top: 0;\n        z-index: var(--z-idx6);\n        height: 40px;\n        width: 100%;\n        background-color: var(--white);\n        box-shadow: 0 2px 4px 0 var(--light-shadow);\n        font-size: 14px;\n        color: var(--gray-base);\n        line-height: 18px;\n    }\n\n    @media (color-index: 48) {\n\n    .sidebar__menu {\n            color: var(--gray300);\n            background-color: var(--black)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .sidebar__menu {\n            color: var(--gray300);\n            background-color: var(--black)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .sidebar__menu {\n            color: var(--gray300);\n            background-color: var(--black)\n    }\n        }\n\n    .sidebar__link-logo {\n        display: block;\n        color: inherit;\n    }\n\n    .sidebar__logo {\n        margin: 32px 102px 0 37px;\n    }\n\n    .sidebar__open-button {\n        margin: 6px 9px;\n        border: 0;\n        background-color: transparent;\n    }\n\n    .sidebar__overlay {\n        height: 100%;\n        width: 100%;\n        position: fixed;\n        z-index: var(--z-idx5);\n        left: 0;\n        top: 0;\n        background-color: var(--overlay-gray);\n        overflow-x: hidden;\n        animation-delay: 0.3s;\n    }\n\n    .sidebar--open {\n        transform: translateX(0);\n    }\n\n    @media (min-width: 640px) {.sidebar {\n        transform: none;\n        transform: initial;\n        position: relative;\n}\n\n        .sidebar__menu {\n            display: none;\n        }\n\n        .sidebar__logo {\n            margin: 0 0 26px 37px;\n        }\n\n        .sidebar__overlay {\n            display: none;\n        }\n    }\n\n.light-mode .sidebar {\n        background: var(--gray100);\n        border-right: none;\n    }\n\n.light-mode .sidebar__menu {\n            color: var(--gray-base);\n            background-color: var(--white);\n        }\n\n.dark-mode .sidebar {\n        background: var(--black);\n        border-right: 1px solid var(--gray900);\n    }\n\n.dark-mode .sidebar__menu {\n            color: var(--gray300);\n            background-color: var(--black);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 78168:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".editor__label {\n    position: absolute;\n    top: -15px;\n    left: 15px;\n    right: 15px;\n    max-width: 200px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: 300;\n    font-size: 12px;\n    line-height: 22px;\n}\n\n    @media (max-width: 500px) {.editor__label {\n        right: 0;\n        padding-left: 12px\n}\n    }\n\n    .editor__label .editor__icon {\n        display: none;\n        position: absolute;\n        right: 0;\n        top: 4px;\n    }\n\n    .editor__label--saved {\n        padding-right: 20px;\n    }\n\n    .editor__label--saved .editor__icon {\n            display: block;\n        }\n\n.editor__open {\n    text-align: center;\n    padding: 48px 16px;\n}\n\n.editor__open-title {\n    font-size: 24px;\n    font-weight: 700;\n    margin-bottom: 12px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51258:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button {\n    cursor: pointer;\n    text-decoration: none;\n    text-align: center;\n    display: inline-block;\n    border: 0;\n    background-color: transparent;\n    padding: 0;\n}\n\n    .button--s {\n        padding: 0 29px;\n        height: 32px;\n        border-radius: 4px;\n        font-size: 16px;\n    }\n\n    .button--m {\n        padding: 10px 35px;\n        line-height: 20px;\n        border-radius: 8px;\n        font-size: 16px;\n    }\n\n    .button:disabled {\n        opacity: 0.5;\n        cursor: default;\n        pointer-events: none;\n    }\n\n    .button--green {\n        color: var(--white);\n        background-color: var(--green86);\n        transition: 0.3s ease background-color;\n    }\n\n    .button--green:hover {\n            background-color: var(--green75);\n        }\n\n    .button--green-bd {\n        color: var(--green86);\n        box-shadow: inset 0 0 0 1px var(--green86);\n        transition: 0.3s ease background-color;\n    }\n\n    @media (color-index: 48) {\n\n    .button--green-bd {\n            color: var(--white);\n            box-shadow: inset 0 0 0 1px var(--white)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .button--green-bd {\n            color: var(--white);\n            box-shadow: inset 0 0 0 1px var(--white)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .button--green-bd {\n            color: var(--white);\n            box-shadow: inset 0 0 0 1px var(--white)\n    }\n        }\n\n    .button--green-bd:hover {\n            background-color: var(--gray05);\n        }\n\n    .button--red-bg {\n        color: var(--white);\n        background-color: var(--red300);\n        transition: 0.3s ease background-color;\n    }\n\n    .button--red-bg:hover {\n            background-color: var(--red400);\n        }\n\n    .button--transparent {\n        box-shadow: 0 0 0 1px var(--gray700);\n        color: var(--gray700);\n        background-color: transparent;\n        transition: var(--t3) box-shadow, var(--t3) color;\n    }\n\n    .button--transparent:hover {\n            box-shadow: 0 0 0 1px var(--gray400);\n            color: var(--gray400);\n        }\n\n    .button--add-custom-filter {\n        margin: 20px 0 0 15px;\n    }\n\n    .button--empty-custom-filter {\n        display: block;\n        margin: 0 auto;\n    }\n\n    .button--compare {\n        padding: 12px 32px;\n        word-break: break-word;\n    }\n\n    .button__img {\n        margin-right: 7px;\n    }\n\n    .button__label {\n        line-height: 26px;\n        max-height: 26px;\n        overflow: hidden;\n    }\n\n    .button--list {\n        display: block;\n        font-weight: 500;\n        font-size: 16px;\n        line-height: 20px;\n        color: var(--gray-base);\n        width: 100%;\n        text-align: left;\n        min-height: 52px;\n        padding: 16px;\n        border-radius: 8px;\n        transition: var(--t3) background-color;\n    }\n\n    @media (color-index: 48) {\n\n    .button--list {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .button--list {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .button--list {\n            color: var(--gray300)\n    }\n        }\n\n    .button--list:hover {\n            background-color: var(--gray100);\n        }\n\n    @media (color-index: 48) {\n\n    .button--list:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .button--list:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .button--list:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    .button--red {\n        color: var(--red400);\n    }\n\n.light-mode .button--green-bd {\n            color: var(--green86);\n            box-shadow: inset 0 0 0 1px var(--green86);\n        }\n\n.light-mode .button--list {\n            color: var(--gray-base);\n        }\n\n.light-mode .button--list:hover {\n                background-color: var(--gray100);\n            }\n\n.light-mode .button--red {\n            color: var(--red400);\n        }\n\n.dark-mode .button--green-bd {\n            color: var(--white);\n            box-shadow: inset 0 0 0 1px var(--white);\n        }\n\n.dark-mode .button--list {\n            color: var(--gray300);\n        }\n\n.dark-mode .button--list:hover {\n                background-color: var(--gray900);\n            }\n\n.dark-mode .button--red {\n            color: var(--red400);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 66843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\n:root {\n    color-scheme: light dark;\n}\n\nhtml,\n.root {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Roboto Flex', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, Arial, sans-serif;\n    font-optical-sizing: none;\n    margin: 0;\n    height: 100%;\n    font-size: 16px;\n    color: var(--gray-base);\n}\n\n@media (color-index: 48) {\n\nbody {\n        background-color: var(--black);\n        color: var(--gray300)\n}\n    }\n\n@media (color: 48842621) {\n\nbody {\n        background-color: var(--black);\n        color: var(--gray300)\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\nbody {\n        background-color: var(--black);\n        color: var(--gray300)\n}\n    }\n\n.options {\n    overflow-y: scroll;\n}\n\nh2 {\n    margin: 0;\n    font-size: inherit;\n}\n\na.focus-visible {\n        outline: 2px solid var(--outline);\n    }\n\na:focus-visible {\n        outline: 2px solid var(--outline);\n    }\n\nbutton,\ninput,\ntextarea,\nselect {\n    font-family: inherit;\n}\n\nbutton.focus-visible, input.focus-visible, textarea.focus-visible, select.focus-visible {\n        outline: 2px solid var(--outline);\n    }\n\nbutton:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible {\n        outline: 2px solid var(--outline);\n    }\n\n/* custom checkbox */\nlabel.checkbox-label {\n    cursor: pointer;\n    color: var(--gray900);\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n}\n@media (color-index: 48) {\nlabel.checkbox-label {\n        color: var(--gray300)\n}\n    }\n@media (color: 48842621) {\nlabel.checkbox-label {\n        color: var(--gray300)\n}\n    }\n@media (prefers-color-scheme: dark) {\nlabel.checkbox-label {\n        color: var(--gray300)\n}\n    }\nlabel.checkbox-label input[type=\"checkbox\"] {\n        display: none;\n    }\nlabel.checkbox-label input[type=\"checkbox\"]:checked + .custom-checkbox {\n                background-color: var(--green400);\n                border-color: var(--green400);\n            }\n@media (color-index: 48) {\nlabel.checkbox-label input[type=\"checkbox\"]:checked + .custom-checkbox {\n                    background-color: var(--green700);\n                    border-color: var(--green700)\n            }\n                }\n@media (color: 48842621) {\nlabel.checkbox-label input[type=\"checkbox\"]:checked + .custom-checkbox {\n                    background-color: var(--green700);\n                    border-color: var(--green700)\n            }\n                }\n@media (prefers-color-scheme: dark) {\nlabel.checkbox-label input[type=\"checkbox\"]:checked + .custom-checkbox {\n                    background-color: var(--green700);\n                    border-color: var(--green700)\n            }\n                }\nlabel.checkbox-label input[type=\"checkbox\"]:checked + .custom-checkbox .icon {\n                    display: block;\n                }\nlabel.checkbox-label .custom-checkbox {\n        width: 16px;\n        height: 16px;\n        background-color: transparent;\n        border: 2px solid var(--gray700);\n        border-radius: 2px;\n        margin-right: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n    }\n@media (color-index: 48) {\nlabel.checkbox-label .custom-checkbox {\n            border: 2px solid var(--gray400)\n    }\n        }\n@media (color: 48842621) {\nlabel.checkbox-label .custom-checkbox {\n            border: 2px solid var(--gray400)\n    }\n        }\n@media (prefers-color-scheme: dark) {\nlabel.checkbox-label .custom-checkbox {\n            border: 2px solid var(--gray400)\n    }\n        }\nlabel.checkbox-label .custom-checkbox .icon {\n            display: none;\n        }\n\n.inner {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.content {\n    position: relative;\n    padding: 50px 16px;\n    width: 100%;\n    max-width: 100%;\n}\n\n@media (min-width: 640px) {\n\n.content {\n        max-width: 672px\n}\n    }\n\n.content__btn {\n        margin-left: 15px;\n    }\n\n.wrapper {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.page {\n    flex: 1 0 auto;\n    display: flex;\n}\n\n.links-menu {\n    flex-direction: column;\n    align-items: flex-start;\n    display: flex;\n}\n\n.links-menu button {\n        background: none;\n        border: none;\n        padding: 0;\n    }\n\n.links-menu__item {\n        color: var(--gray4a);\n        margin-bottom: 15px;\n        font-size: 16px;\n        text-decoration: underline;\n        cursor: pointer;\n    }\n\n@media (color-index: 48) {\n\n.links-menu__item {\n            color: var(--gray300)\n    }\n        }\n\n@media (color: 48842621) {\n\n.links-menu__item {\n            color: var(--gray300)\n    }\n        }\n\n@media (prefers-color-scheme: dark) {\n\n.links-menu__item {\n            color: var(--gray300)\n    }\n        }\n\n.footer {\n    width: 100%;\n    flex: 0 0 auto;\n}\n\n.title {\n    color: var(--gray-base);\n    font-size: 24px;\n    font-weight: 700;\n    padding: 0;\n    padding-right: 8px;\n    margin-top: -5px;\n    line-height: 30px;\n}\n\n@media (color-index: 48) {\n\n.title {\n        color: var(--gray300)\n}\n    }\n\n@media (color: 48842621) {\n\n.title {\n        color: var(--gray300)\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\n.title {\n        color: var(--gray300)\n}\n    }\n\n.title__container {\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        padding: 32px 16px 16px;\n    }\n\n.title__container--sub > .title__inner {\n            padding-top: 0;\n        }\n\n.title__container--control {\n            border-radius: 8px;\n            cursor: pointer;\n            transition: var(--t3) background-color;\n        }\n\n.title__container--control .checkbox__label:hover {\n                background-color: transparent;\n            }\n\n@media (min-width: 1024px) {\n\n.title__container--control:hover {\n                    background-color: var(--gray100)\n            }\n\n                    @media (color-index: 48) {\n\n.title__container--control:hover {\n                        background-color: var(--gray900)\n            }\n                    }\n\n                    @media (color: 48842621) {\n\n.title__container--control:hover {\n                        background-color: var(--gray900)\n            }\n                    }\n\n                    @media (prefers-color-scheme: dark) {\n\n.title__container--control:hover {\n                        background-color: var(--gray900)\n            }\n                    }\n                }\n\n@media (min-width: 640px) {\n\n.title {\n        padding-right: 16px\n}\n\n        .title__container {\n            padding: 16px 0 16px 16px;\n        }\n\n            .title__container--small {\n                padding: 16px;\n            }\n\n            .title__container--back {\n                padding: 0 16px 16px 16px;\n            }\n\n                .title__container--back .title__inner {\n                    padding-top: 16px;\n                }\n                    @media (min-width: 640px) {\n\n                .title__container--back .checkbox__label {\n                        padding: 16px\n                }\n\n                        .title__container--back .checkbox__label:before {\n                            top: 0;\n                        }\n                    }\n\n            .title__container--sub > .title__inner {\n                padding-top: 0;\n            }\n                @media (min-width: 640px) {\n\n            .title__container--about {\n                    padding: 16px 0 16px 16px\n            }\n                }\n    }\n\n.title__desc {\n        font-size: 14px;\n        font-weight: 400;\n        color: var(--gray700);\n        margin-top: 8px;\n    }\n\n.title__desc--back {\n            cursor: pointer;\n        }\n\n.title--back-btn {\n        background-color: transparent;\n        border: 0;\n        cursor: pointer;\n    }\n\n.title--sub {\n        font-size: 20px;\n    }\n\n.subtitle {\n    padding: 0 15px;\n    color: var(--gray4a);\n    font-size: 20px;\n    font-weight: normal;\n    line-height: 28px;\n    margin: 0 0 8px;\n}\n\n.desc {\n    font-size: 16px;\n    margin-bottom: 20px;\n    color: var(--gray-base);\n    line-height: 22px;\n    padding-left: 15px;\n}\n\n@media (color-index: 48) {\n\n.desc {\n        color: var(--gray300)\n}\n    }\n\n@media (color: 48842621) {\n\n.desc {\n        color: var(--gray300)\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\n.desc {\n        color: var(--gray300)\n}\n    }\n\n.desc--link {\n        color: var(--green74);\n    }\n\n.settings__group {\n    margin-bottom: 24px;\n}\n\n.settings__group--disabled {\n        opacity: 0.5;\n        pointer-events: none;\n    }\n\n.actions {\n    padding: 22px 0;\n    display: inline-block;\n}\n\n.actions--divided {\n        display: inline-block;\n    }\n\n@media (min-width: 500px) {\n\n.actions--divided {\n            display: flex;\n            justify-content: space-between;\n            padding: 24px 5px 24px\n    }\n        }\n\n.actions__group {\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n    }\n\n.actions__saving {\n        position: relative;\n    }\n\n.actions__btn {\n        margin: 12px;\n        position: relative;\n    }\n\n.actions__btn--icon {\n            background-color: transparent;\n            border: 0;\n            padding: 0;\n            cursor: pointer;\n        }\n\n.actions__btn--active {\n            background-color: var(--gray100);\n        }\n\n@media (color-index: 48) {\n\n.actions__btn--active {\n                background-color: var(--gray900)\n        }\n            }\n\n@media (color: 48842621) {\n\n.actions__btn--active {\n                background-color: var(--gray900)\n        }\n            }\n\n@media (prefers-color-scheme: dark) {\n\n.actions__btn--active {\n                background-color: var(--gray900)\n        }\n            }\n\n.actions__input-file {\n        position: absolute;\n        clip: rect(1px, 1px, 1px, 1px);\n    }\n\n.actions__input-file:focus + .links-menu__item {\n            outline: 2px solid var(--outline);\n        }\n\n.actions__label {\n        margin: 12px;\n        cursor: pointer;\n        display: inline-flex;\n        justify-content: flex-start;\n        align-content: center;\n    }\n\n.actions__title {\n        display: none;\n        font-weight: 700;\n        font-size: 24px;\n        line-height: 28px;\n    }\n\n@media (min-width: 640px) {\n\n.actions__title {\n            display: block\n    }\n        }\n\nselect:focus {\n    outline: none;\n}\n\n.ReactModal__Overlay {\n    background-color: rgba(0, 0, 0, 0.5)!important;\n}\n\n.ReactModal__Overlay {\n    z-index: 10;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.ReactModal__Content--after-open {\n    position: static!important;\n}\n\n.ReactModal__Content--after-open {\n    min-width: 300px;\n}\n\n@media (color-index: 48) {\n\n.ReactModal__Content--after-open {\n        background-color: var(--black)!important;\n        border: 1px solid var(--gray900)!important\n}\n    }\n\n@media (color: 48842621) {\n\n.ReactModal__Content--after-open {\n        background-color: var(--black)!important;\n        border: 1px solid var(--gray900)!important\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\n.ReactModal__Content--after-open {\n        background-color: var(--black)!important;\n        border: 1px solid var(--gray900)!important\n}\n    }\n\n@media (color-index: 48) {\n\n.ace_cursor {\n        color: var(--gray300)!important\n}\n    }\n\n@media (color: 48842621) {\n\n.ace_cursor {\n        color: var(--gray300)!important\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\n.ace_cursor {\n        color: var(--gray300)!important\n}\n    }\n\n@media (color-index: 48) {\n\n.ace_content {\n        background-color: var(--black)!important;\n        color: var(--gray300)!important\n}\n    }\n\n@media (color: 48842621) {\n\n.ace_content {\n        background-color: var(--black)!important;\n        color: var(--gray300)!important\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\n.ace_content {\n        background-color: var(--black)!important;\n        color: var(--gray300)!important\n}\n    }\n\n\n.light-mode {\n    color-scheme: light;\n}\n\n\n.light-mode body {\n        background-color: var(--transparent);\n        color: var(--gray-base);\n    }\n\n\n.light-mode label.checkbox-label {\n        color: var(--gray900);\n    }\n\n\n.light-mode label.checkbox-label input[type=\"checkbox\"] {\n            background-color: var(--green400);\n            border-color: var(--green400);\n        }\n\n\n.light-mode label.checkbox-label .custom-checkbox {\n            border: 2px solid var(--gray700);\n        }\n\n\n.light-mode .title {\n        color: var(--gray-base);\n    }\n\n\n.light-mode .title__container--control:hover {\n                    background-color: var(--gray100);\n                }\n\n\n.light-mode .ReactModal__Content--after-open {\n        background-color: var(--white)!important;\n        border: 0!important;\n    }\n\n\n.light-mode .ace_content {\n        background-color: var(--transparent)!important;\n        color: var(--gray-base)!important;\n    }\n\n\n.light-mode .desc {\n        color: var(--gray-base);\n    }\n\n\n.light-mode .ace_cursor {\n        color: var(--black)!important;\n    }\n\n\n.light-mode .actions__btn--active {\n        background-color: var(--gray100);\n    }\n\n\n.light-mode .links-menu__item {\n            color: var(--gray4a);\n        }\n\n.dark-mode {\n    color-scheme: dark;\n}\n\n.dark-mode body {\n        background-color: var(--black);\n        color: var(--gray300)\n    }\n\n.dark-mode label.checkbox-label {\n        color: var(--gray300);\n    }\n\n.dark-mode label.checkbox-label input[type=\"checkbox\"] {\n            background-color: var(--green700);\n            border-color: var(--green700);\n        }\n\n.dark-mode label.checkbox-label .custom-checkbox {\n            border: 2px solid var(--gray400);\n        }\n\n.dark-mode .title {\n        color: var(--gray300);\n    }\n\n.dark-mode .title__container--control:hover {\n                    background-color: var(--gray900);\n                }\n\n.dark-mode .ReactModal__Content--after-open {\n        background-color: var(--black)!important;\n        border: 1px solid var(--gray700)!important;\n    }\n\n.dark-mode .ace_content {\n        background-color: var(--black)!important;\n        color: var(--gray300)!important;\n    }\n\n.dark-mode .desc {\n        color: var(--gray300);\n    }\n\n.dark-mode .ace_cursor {\n        color: var(--gray300)!important;\n    }\n\n.dark-mode .actions__btn--active {\n        background-color: var(--gray900);\n    }\n\n.dark-mode .links-menu__item {\n            color:  var(--gray300);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 99674:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    min-height: 330px;\n}\n\n    .modal__title {\n        font-size: 24px;\n        font-weight: 500;\n        margin-bottom: 15px;\n    }\n\n    .modal__subtitle {\n        font-size: 16px;\n        font-weight: 400;\n        margin-bottom: 15px;\n    }\n\n    .modal__subtitle--confirm {\n            text-overflow: ellipsis;\n            overflow: hidden;\n            max-width: 300px;\n            white-space: nowrap;\n        }\n\n    .modal__close {\n        position: absolute;\n        width: 15px;\n        height: 15px;\n        top: 30px;\n        right: 30px;\n        color: var(--gray700);\n    }\n\n    @media (color-index: 48) {\n\n    .modal__close {\n            color: var(--gray400)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .modal__close {\n            color: var(--gray400)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .modal__close {\n            color: var(--gray400)\n    }\n        }\n\n    .modal__content {\n        width: 100%;\n        margin: auto 0;\n    }\n\n    .modal__content--button {\n            display: flex;\n            justify-content: space-between;\n        }\n\n    .modal__content--center-text {\n            text-align: center;\n        }\n\n    .modal__input {\n        width: 100%;\n        border: 0;\n        line-height: 22px;\n        font-size: 14px;\n        border-bottom: 2px solid var(--green74);\n        margin-bottom: 22px;\n        padding: 7px 8px;\n        outline: none;\n    }\n\n    .modal__input.focus-visible {\n            outline: none;\n            background-color: var(--gray300);\n        }\n\n    @media (color-index: 48) {\n\n    .modal__input.focus-visible {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .modal__input.focus-visible {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .modal__input.focus-visible {\n                background-color: var(--gray900)\n        }\n            }\n\n    .modal__input:focus-visible {\n            outline: none;\n            background-color: var(--gray300);\n        }\n\n    @media (color-index: 48) {\n\n    .modal__input.focus-visible {\n                background-color: var(--gray900)\n        }\n\n    .modal__input:focus-visible {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .modal__input.focus-visible {\n                background-color: var(--gray900)\n        }\n\n    .modal__input:focus-visible {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color-index: 48) {\n\n    .modal__input.focus-visible {\n                background-color: var(--gray900)\n        }\n\n    .modal__input.focus-visible {\n                background-color: var(--gray900)\n        }\n\n    .modal__input:focus-visible {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .modal__input.focus-visible {\n                background-color: var(--gray900)\n        }\n\n    .modal__input.focus-visible {\n                background-color: var(--gray900)\n        }\n\n    .modal__input:focus-visible {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .modal__input.focus-visible {\n                background-color: var(--gray900)\n        }\n\n    .modal__input:focus-visible {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color-index: 48) {\n\n    .modal__input {\n            background-color: var(--black);\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .modal__input {\n            background-color: var(--black);\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .modal__input {\n            background-color: var(--black);\n            color: var(--gray300)\n    }\n        }\n\n    .modal__desc {\n        font-size: 14px;\n        line-height: 22px;\n        color: rgba(27, 27, 27, 0.9);\n    }\n\n    @media (color-index: 48) {\n\n    .modal__desc {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .modal__desc {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .modal__desc {\n            color: var(--gray300)\n    }\n        }\n\n    .modal__btn {\n        margin: 0 auto;\n        margin-top: 15px;\n        min-width: 175px;\n    }\n\n    .modal__btn--statistic {\n            min-width: 100px;\n        }\n\n    .modal__btn--statistic:first-child {\n                margin-right: 25px;\n            }\n\n    .modal__row {\n        display: flex;\n        margin-bottom: 7px;\n    }\n\n    .modal__row--info {\n            color: var(--grayd8);\n            font-size: 12px;\n            line-height: 15px;\n        }\n\n    .modal__cell {\n        font-size: 14px;\n        line-height: 22px;\n    }\n\n    .modal__cell:first-child {\n            width: 160px;\n            padding-right: 10px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            flex-grow: 0;\n            flex-shrink: 0;\n        }\n\n    .modal__cell--title {\n            padding-top: 7px;\n        }\n\n    .modal__cell--url {\n            word-break: break-all;\n        }\n\n.light-mode .modal__desc {\n        color: rgba(27, 27, 27, 0.9);\n    }\n\n.light-mode .modal__input {\n        color: var(--gray-base);\n        background-color: transparent;\n    }\n\n.light-mode .modal__input.focus-visible {\n            background-color: var(--gray300);\n        }\n\n.light-mode .modal__input:focus-visible {\n            background-color: var(--gray300);\n        }\n\n.dark-mode .modal__desc {\n        color: var(--gray300);\n    }\n\n.dark-mode .modal__input {\n        background-color: var(--black);\n        color: var(--gray300);\n    }\n\n.dark-mode .modal__input.focus-visible {\n            background-color: var(--gray900);\n        }\n\n.dark-mode .modal__input:focus-visible {\n            background-color: var(--gray900);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 40478:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: initial;\n    position: relative;\n    padding: 16px;\n    min-height: 52px;\n}\n\n    .setting.group {\n        padding: 16px;\n    }\n\n    @media (min-width: 640px) {\n\n    .setting.group {\n            justify-content: flex-start;\n            padding: 0 16px 0 0\n    }\n        }\n\n    .setting--disabled .textarea,\n        .setting--disabled .input__in {\n            pointer-events: none;\n            cursor: default;\n            opacity: 0.5;\n        }\n\n    .setting__area {\n        display: flex;\n        width: 80%;\n        border: 0;\n        border-radius: 8px;\n        cursor: pointer;\n        outline: none;\n        text-align: left;\n        background-color: transparent;\n        transition: 0.3s ease background-color;\n    }\n\n    @media (min-width: 640px) {\n\n    .setting__area {\n            padding: 15px 0 15px 16px\n    }\n\n            .setting__area_group {\n                flex-grow: 1;\n                border-radius: 8px;\n            }\n        }\n\n    .setting__area:hover {\n            background-color: var(--gray100);\n        }\n\n    @media (color-index: 48) {\n\n    .setting__area:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .setting__area:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .setting__area:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    .setting__inline-control {\n        margin-left: 22px;\n        height: auto;\n    }\n\n    @media (min-width: 640px) {\n            .setting__inline-control_group {\n                margin-left: 0;\n            }\n\n                .setting__inline-control_group .checkbox__label {\n                    padding: 16px;\n                }\n\n                    .setting__inline-control_group .checkbox__label:before {\n                        top: 0;\n                    }\n        }\n\n    .setting__container {\n        display: flex;\n    }\n\n    .setting__container--vertical {\n            flex-direction: column;\n            width: 100%;\n        }\n\n    .setting__container--horizontal {\n            flex-direction: row;\n            justify-content: space-between;\n            width: 100%;\n        }\n\n    .setting__container--inline {\n            display: block;\n        }\n\n    .setting__info {\n        max-width: 530px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n    }\n\n    .setting__title {\n        font-weight: 500;\n        font-size: 16px;\n        color: var(--gray-base);\n        line-height: 20px;\n        word-break: break-word;\n    }\n\n    @media (color-index: 48) {\n\n    .setting__title {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .setting__title {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .setting__title {\n            color: var(--gray300)\n    }\n        }\n\n    .setting__desc {\n        line-height: 18px;\n        padding: 4px 0 0;\n        color: var(--gray700);\n        font-size: 14px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        word-break: break-word;\n    }\n\n    .setting__desc a {\n            color: var(--green74);\n            text-decoration: underline;\n        }\n\n    .setting__desc a.focus-visible {\n                outline: none;\n                box-shadow: inset 0 0 0 1px var(--outline);\n            }\n\n    .setting__desc a:focus-visible {\n                outline: none;\n                box-shadow: inset 0 0 0 1px var(--outline);\n            }\n\n    .setting__desc-item {\n        margin-bottom: 13px;\n    }\n\n    .setting__desc-item:last-child {\n            margin-bottom: 0;\n        }\n\n    .setting__tags {\n        display: flex;\n        font-size: 13px;\n        flex-wrap: wrap;\n    }\n\n    .setting__icon {\n        color: var(--green400);\n        margin-right: 20px;\n    }\n\n    .setting__back {\n        color: var(--gray700);\n        position: absolute;\n        padding-top: 16px;\n        left: -8px;\n        top: 33px;\n    }\n\n    @media (min-width: 640px) {\n\n    .setting__back {\n            top: 3px\n    }\n        }\n\n    .setting__alert-desc,\n    .setting__alert-link {\n        color: var(--red400);\n    }\n\n    .setting__checkbox {\n        display: none;\n    }\n\n.setting-checkbox {\n    display: block;\n    border-radius: 8px;\n    cursor: pointer;\n    transition: var(--t3) background-color;\n}\n\n.setting-checkbox--button {\n        background-color: transparent;\n        border: 0;\n        text-align: left;\n        padding: 0;\n        width: 100%;\n    }\n\n.setting-checkbox:hover {\n        background-color: var(--gray100);\n    }\n\n@media (color-index: 48) {\n\n.setting-checkbox:hover {\n            background-color: var(--gray900)\n    }\n        }\n\n@media (color: 48842621) {\n\n.setting-checkbox:hover {\n            background-color: var(--gray900)\n    }\n        }\n\n@media (prefers-color-scheme: dark) {\n\n.setting-checkbox:hover {\n            background-color: var(--gray900)\n    }\n        }\n\n.setting-checkbox .checkbox__label:hover {\n        background-color: transparent;\n    }\n\n.light-mode .setting--checkbox:hover {\n                background-color: var(--gray100);\n            }\n\n.light-mode .setting__title {\n            color: var(--gray-base);\n        }\n\n.light-mode .setting__area:hover {\n                background-color: var(--gray100);\n            }\n\n.light-mode .setting-checkbox:hover {\n            background-color: var(--gray100);\n        }\n\n.dark-mode .setting--checkbox:hover {\n                background-color: var(--gray900);\n            }\n\n.dark-mode .setting__title {\n            color: var(--gray300)\n        }\n\n.dark-mode .setting__area:hover {\n                background-color: var(--gray900);\n            }\n\n.dark-mode .setting-checkbox:hover {\n            background-color: var(--gray900);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 72060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_fonts_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84381);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_vars_pcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26834);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_icons_pcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46949);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_pcss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66843);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_button_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51258);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_setting_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40478);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_modal_pcss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99674);
// Imports









var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_fonts_pcss__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_vars_pcss__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_icons_pcss__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_pcss__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_button_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_setting_pcss__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_modal_pcss__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 58396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Iu": () => (/* binding */ translate)
/* harmony export */ });
/* unused harmony exports Translator, validator */
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var NODE_TYPES;

(function (NODE_TYPES) {
  NODE_TYPES["PLACEHOLDER"] = "placeholder";
  NODE_TYPES["TEXT"] = "text";
  NODE_TYPES["TAG"] = "tag";
  NODE_TYPES["VOID_TAG"] = "void_tag";
})(NODE_TYPES || (NODE_TYPES = {}));

var isTextNode = function isTextNode(node) {
  return node.type === NODE_TYPES.TEXT;
};
var isTagNode = function isTagNode(node) {
  return node.type === NODE_TYPES.TAG;
};
var isPlaceholderNode = function isPlaceholderNode(node) {
  return node.type === NODE_TYPES.PLACEHOLDER;
};
var isVoidTagNode = function isVoidTagNode(node) {
  return node.type === NODE_TYPES.VOID_TAG;
};
var placeholderNode = function placeholderNode(value) {
  return {
    type: NODE_TYPES.PLACEHOLDER,
    value: value
  };
};
var textNode = function textNode(str) {
  return {
    type: NODE_TYPES.TEXT,
    value: str
  };
};
var tagNode = function tagNode(tagName, children) {
  var value = tagName.trim();
  return {
    type: NODE_TYPES.TAG,
    value: value,
    children: children
  };
};
var voidTagNode = function voidTagNode(tagName) {
  var value = tagName.trim();
  return {
    type: NODE_TYPES.VOID_TAG,
    value: value
  };
};
/**
 * Checks if target is node
 * @param target
 */

var isNode = function isNode(target) {
  if (typeof target === 'string') {
    return false;
  }

  return !!target.type;
};

var STATE;

(function (STATE) {
  /**
   * Parser function switches to the text state when parses simple text,
   * or content between open and close tags
   */
  STATE["TEXT"] = "text";
  /**
   * Parser function switches to the tag state when meets open tag brace ("<"), and switches back,
   * when meets closing tag brace (">")
   */

  STATE["TAG"] = "tag";
  /**
   * Parser function switches to the placeholder state when meets in the text
   * open placeholders brace ("{") and switches back to the text state,
   * when meets close placeholder brace ("}")
   */

  STATE["PLACEHOLDER"] = "placeholder";
})(STATE || (STATE = {}));

var CONTROL_CHARS = {
  TAG_OPEN_BRACE: '<',
  TAG_CLOSE_BRACE: '>',
  CLOSING_TAG_MARK: '/',
  PLACEHOLDER_MARK: '%'
};
/**
 * Checks if text length is enough to create text node
 * If text node created, then if stack is not empty it is pushed into stack,
 * otherwise into result
 * @param context
 */

var createTextNodeIfPossible = function createTextNodeIfPossible(context) {
  var text = context.text;

  if (text.length > 0) {
    var node = textNode(text);

    if (context.stack.length > 0) {
      context.stack.push(node);
    } else {
      context.result.push(node);
    }
  }

  context.text = '';
};
/**
 * Checks if lastFromStack tag has any attributes
 * @param lastFromStack
 */


var hasAttributes = function hasAttributes(lastFromStack) {
  // e.g. "a class" or "a href='#'"
  var tagStrParts = lastFromStack.split(' ');
  return tagStrParts.length > 1;
};
/**
 * Handles text state
 */


var textStateHandler = function textStateHandler(context) {
  var currChar = context.currChar,
      currIdx = context.currIdx; // switches to the tag state

  if (currChar === CONTROL_CHARS.TAG_OPEN_BRACE) {
    context.lastTextStateChangeIdx = currIdx;
    return STATE.TAG;
  } // switches to the placeholder state


  if (currChar === CONTROL_CHARS.PLACEHOLDER_MARK) {
    context.lastTextStateChangeIdx = currIdx;
    return STATE.PLACEHOLDER;
  } // remains in the text state


  context.text += currChar;
  return STATE.TEXT;
};
/**
 * Handles placeholder state
 * @param context
 */


var placeholderStateHandler = function placeholderStateHandler(context) {
  var currChar = context.currChar,
      currIdx = context.currIdx,
      lastTextStateChangeIdx = context.lastTextStateChangeIdx,
      placeholder = context.placeholder,
      stack = context.stack,
      result = context.result,
      str = context.str;

  if (currChar === CONTROL_CHARS.PLACEHOLDER_MARK) {
    // if distance between current index and last state change equal to 1,
    // it means that placeholder mark was escaped by itself e.g. "%%",
    // so we return to the text state
    if (currIdx - lastTextStateChangeIdx === 1) {
      context.text += str.substring(lastTextStateChangeIdx, currIdx);
      return STATE.TEXT;
    }

    createTextNodeIfPossible(context);
    var node = placeholderNode(placeholder); // push node to the appropriate stack

    if (stack.length > 0) {
      stack.push(node);
    } else {
      result.push(node);
    }

    context.placeholder = '';
    return STATE.TEXT;
  }

  context.placeholder += currChar;
  return STATE.PLACEHOLDER;
};
/**
 * Switches current state to the tag state and returns tag state handler
 */


var tagStateHandler = function tagStateHandler(context) {
  var currChar = context.currChar,
      text = context.text,
      stack = context.stack,
      result = context.result,
      lastTextStateChangeIdx = context.lastTextStateChangeIdx,
      currIdx = context.currIdx,
      str = context.str;
  var tag = context.tag; // if found tag end ">"

  if (currChar === CONTROL_CHARS.TAG_CLOSE_BRACE) {
    // if the tag is close tag e.g. </a>
    if (tag.indexOf(CONTROL_CHARS.CLOSING_TAG_MARK) === 0) {
      // remove slash from tag
      tag = tag.substring(1);
      var children = [];

      if (text.length > 0) {
        children.push(textNode(text));
        context.text = '';
      }

      var pairTagFound = false; // looking for the pair to the close tag

      while (!pairTagFound && stack.length > 0) {
        var lastFromStack = stack.pop(); // if tag from stack equal to close tag

        if (lastFromStack === tag) {
          // create tag node
          var node = tagNode(tag, children); // and add it to the appropriate stack

          if (stack.length > 0) {
            stack.push(node);
          } else {
            result.push(node);
          }

          children = [];
          pairTagFound = true;
        } else if (isNode(lastFromStack)) {
          // add nodes between close tag and open tag to the children
          children.unshift(lastFromStack);
        } else {
          if (typeof lastFromStack === 'string' && hasAttributes(lastFromStack)) {
            throw new Error("Tags in string should not have attributes: ".concat(str));
          } else {
            throw new Error("String has unbalanced tags: ".concat(str));
          }
        }

        if (stack.length === 0 && children.length > 0) {
          throw new Error("String has unbalanced tags: ".concat(str));
        }
      }

      context.tag = '';
      return STATE.TEXT;
    } // if the tag is void tag e.g. <img/>


    if (tag.lastIndexOf(CONTROL_CHARS.CLOSING_TAG_MARK) === tag.length - 1) {
      tag = tag.substring(0, tag.length - 1);
      createTextNodeIfPossible(context);

      var _node = voidTagNode(tag); // add node to the appropriate stack


      if (stack.length > 0) {
        stack.push(_node);
      } else {
        result.push(_node);
      }

      context.tag = '';
      return STATE.TEXT;
    }

    createTextNodeIfPossible(context);
    stack.push(tag);
    context.tag = '';
    return STATE.TEXT;
  } // If we meet open tag "<" it means that we wrongly moved into tag state


  if (currChar === CONTROL_CHARS.TAG_OPEN_BRACE) {
    context.text += str.substring(lastTextStateChangeIdx, currIdx);
    context.lastTextStateChangeIdx = currIdx;
    context.tag = '';
    return STATE.TAG;
  }

  context.tag += currChar;
  return STATE.TAG;
};
/**
 * Parses string into AST (abstract syntax tree) and returns it
 * e.g.
 * parse("String to <a>translate</a>") ->
 * ```
 *      [
 *           { type: 'text', value: 'String to ' },
 *           { type: 'tag', value: 'a', children: [{ type: 'text', value: 'translate' }] }
 *      ];
 * ```
 * Empty string is parsed into empty AST (abstract syntax tree): "[]"
 * If founds unbalanced tags, it throws error about it
 *
 * @param {string} str - message in simplified ICU like syntax without plural support
 */


var parser = function parser() {
  var _STATE_HANDLERS;

  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = {
    /**
     * Stack is used to keep and search nested tag nodes
     */
    stack: [],

    /**
     * Result is stack where function allocates nodes
     */
    result: [],

    /**
     * Current char index
     */
    currIdx: 0,

    /**
     * Saves index of the last state change from the text state,
     * used to restore parsed text if we moved into other state wrongly
     */
    lastTextStateChangeIdx: 0,

    /**
     * Accumulated tag value
     */
    tag: '',

    /**
     * Accumulated text value
     */
    text: '',

    /**
     * Accumulated placeholder value
     */
    placeholder: '',

    /**
     * Parsed string
     */
    str: str
  };
  var STATE_HANDLERS = (_STATE_HANDLERS = {}, _defineProperty(_STATE_HANDLERS, STATE.TEXT, textStateHandler), _defineProperty(_STATE_HANDLERS, STATE.PLACEHOLDER, placeholderStateHandler), _defineProperty(_STATE_HANDLERS, STATE.TAG, tagStateHandler), _STATE_HANDLERS); // Start from text state

  var currentState = STATE.TEXT;

  while (context.currIdx < str.length) {
    context.currChar = str[context.currIdx];
    var currentStateHandler = STATE_HANDLERS[currentState];
    currentState = currentStateHandler(context);
    context.currIdx += 1;
  }

  var result = context.result,
      text = context.text,
      stack = context.stack,
      lastTextStateChangeIdx = context.lastTextStateChangeIdx; // Means that tag or placeholder nodes were not closed, so we consider them as text

  if (currentState !== STATE.TEXT) {
    var restText = str.substring(lastTextStateChangeIdx);

    if ((restText + text).length > 0) {
      result.push(textNode(text + restText));
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (text.length > 0) {
      result.push(textNode(text));
    }
  }

  if (stack.length > 0) {
    throw new Error("String has unbalanced tags: ".concat(context.str));
  }

  return result;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Helper functions used by default to assemble strings from tag nodes
 * @param tagName
 * @param children
 */

var createStringElement = function createStringElement(tagName, children) {
  if (children) {
    return "<".concat(tagName, ">").concat(children, "</").concat(tagName, ">");
  }

  return "<".concat(tagName, "/>");
};
/**
 * Creates map with default values for tag converters
 */


var createDefaultValues = function createDefaultValues() {
  return {
    p: function p(children) {
      return createStringElement('p', children);
    },
    b: function b(children) {
      return createStringElement('b', children);
    },
    strong: function strong(children) {
      return createStringElement('strong', children);
    },
    tt: function tt(children) {
      return createStringElement('tt', children);
    },
    s: function s(children) {
      return createStringElement('s', children);
    },
    i: function i(children) {
      return createStringElement('i', children);
    }
  };
};
/**
 * This function accepts an AST (abstract syntax tree) which is a result
 * of the parser function call, and converts tree nodes into array of strings replacing node
 * values with provided values.
 * Values is a map with functions or strings, where each key is related to placeholder value
 * or tag value
 * e.g.
 * string "text <tag>tag text</tag> %placeholder%" is parsed into next AST
 *
 *      [
 *          { type: 'text', value: 'text ' },
 *          {
 *              type: 'tag',
 *              value: 'tag',
 *              children: [{ type: 'text', value: 'tag text' }],
 *          },
 *          { type: 'text', value: ' ' },
 *          { type: 'placeholder', value: 'placeholder' }
 *      ];
 *
 * this AST after format and next values
 *
 *      {
 *          // here used template strings, but it can be react components as well
 *          tag: (chunks) => `<b>${chunks}</b>`,
 *          placeholder: 'placeholder text'
 *      }
 *
 * will return next array
 *
 * [ 'text ', '<b>tag text</b>', ' ', 'placeholder text' ]
 *
 * as you can see, <tag> was replaced by <b>, and placeholder was replaced by placeholder text
 *
 * @param ast - AST (abstract syntax tree)
 * @param values
 */


var format = function format() {
  var ast = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var result = [];

  var tmplValues = _objectSpread(_objectSpread({}, createDefaultValues()), values);

  var i = 0;

  while (i < ast.length) {
    var currentNode = ast[i]; // if current node is text node, there is nothing to change, append value to the result

    if (isTextNode(currentNode)) {
      result.push(currentNode.value);
    } else if (isTagNode(currentNode)) {
      var children = _toConsumableArray(format(currentNode.children, tmplValues));

      var value = tmplValues[currentNode.value];

      if (value) {
        // TODO consider using strong typing
        if (typeof value === 'function') {
          result.push(value(children.join('')));
        } else {
          result.push(value);
        }
      } else {
        throw new Error("Value ".concat(currentNode.value, " wasn't provided"));
      }
    } else if (isVoidTagNode(currentNode)) {
      var _value = tmplValues[currentNode.value]; // TODO consider using strong typing

      if (_value && typeof _value === 'string') {
        result.push(_value);
      } else {
        throw new Error("Value ".concat(currentNode.value, " wasn't provided"));
      }
    } else if (isPlaceholderNode(currentNode)) {
      var _value2 = tmplValues[currentNode.value]; // TODO consider using strong typing

      if (_value2 && typeof _value2 === 'string') {
        result.push(_value2);
      } else {
        throw new Error("Value ".concat(currentNode.value, " wasn't provided"));
      }
    }

    i += 1;
  }

  return result;
};
/**
 * Function gets AST (abstract syntax tree) or string and formats messages,
 * replacing values accordingly
 * e.g.
 *      const message = formatter('<a>some text</a>', {
 *          a: (chunks) => `<a href="#">${chunks}</a>`,
 *      });
 *      console.log(message); // ['<a href="#">some text</a>']
 * @param message
 * @param [values]
 */


var formatter = function formatter(message, values) {
  var ast = parser(message);
  var preparedValues = {}; // convert values to strings if not a function

  if (values) {
    Object.keys(values).forEach(function (key) {
      var value = values[key]; // TODO consider using strong typing

      if (typeof value === 'function') {
        preparedValues[key] = value;
      } else {
        preparedValues[key] = String(value);
      }
    });
  }

  return format(ast, preparedValues);
};

var _pluralFormsCount;

var AvailableLocales;

(function (AvailableLocales) {
  AvailableLocales["az"] = "az";
  AvailableLocales["bo"] = "bo";
  AvailableLocales["dz"] = "dz";
  AvailableLocales["id"] = "id";
  AvailableLocales["ja"] = "ja";
  AvailableLocales["jv"] = "jv";
  AvailableLocales["ka"] = "ka";
  AvailableLocales["km"] = "km";
  AvailableLocales["kn"] = "kn";
  AvailableLocales["ko"] = "ko";
  AvailableLocales["ms"] = "ms";
  AvailableLocales["th"] = "th";
  AvailableLocales["tr"] = "tr";
  AvailableLocales["vi"] = "vi";
  AvailableLocales["zh"] = "zh";
  AvailableLocales["zh_cn"] = "zh_cn";
  AvailableLocales["zh_tw"] = "zh_tw";
  AvailableLocales["af"] = "af";
  AvailableLocales["bn"] = "bn";
  AvailableLocales["bg"] = "bg";
  AvailableLocales["ca"] = "ca";
  AvailableLocales["da"] = "da";
  AvailableLocales["de"] = "de";
  AvailableLocales["el"] = "el";
  AvailableLocales["en"] = "en";
  AvailableLocales["eo"] = "eo";
  AvailableLocales["es"] = "es";
  AvailableLocales["et"] = "et";
  AvailableLocales["eu"] = "eu";
  AvailableLocales["fa"] = "fa";
  AvailableLocales["fi"] = "fi";
  AvailableLocales["fo"] = "fo";
  AvailableLocales["fur"] = "fur";
  AvailableLocales["fy"] = "fy";
  AvailableLocales["gl"] = "gl";
  AvailableLocales["gu"] = "gu";
  AvailableLocales["ha"] = "ha";
  AvailableLocales["he"] = "he";
  AvailableLocales["hu"] = "hu";
  AvailableLocales["is"] = "is";
  AvailableLocales["it"] = "it";
  AvailableLocales["ku"] = "ku";
  AvailableLocales["lb"] = "lb";
  AvailableLocales["ml"] = "ml";
  AvailableLocales["mn"] = "mn";
  AvailableLocales["mr"] = "mr";
  AvailableLocales["nah"] = "nah";
  AvailableLocales["nb"] = "nb";
  AvailableLocales["ne"] = "ne";
  AvailableLocales["nl"] = "nl";
  AvailableLocales["nn"] = "nn";
  AvailableLocales["no"] = "no";
  AvailableLocales["oc"] = "oc";
  AvailableLocales["om"] = "om";
  AvailableLocales["or"] = "or";
  AvailableLocales["pa"] = "pa";
  AvailableLocales["pap"] = "pap";
  AvailableLocales["ps"] = "ps";
  AvailableLocales["pt"] = "pt";
  AvailableLocales["pt_pt"] = "pt_pt";
  AvailableLocales["pt_br"] = "pt_br";
  AvailableLocales["so"] = "so";
  AvailableLocales["sq"] = "sq";
  AvailableLocales["sv"] = "sv";
  AvailableLocales["sw"] = "sw";
  AvailableLocales["ta"] = "ta";
  AvailableLocales["te"] = "te";
  AvailableLocales["tk"] = "tk";
  AvailableLocales["ur"] = "ur";
  AvailableLocales["zu"] = "zu";
  AvailableLocales["am"] = "am";
  AvailableLocales["bh"] = "bh";
  AvailableLocales["fil"] = "fil";
  AvailableLocales["fr"] = "fr";
  AvailableLocales["gun"] = "gun";
  AvailableLocales["hi"] = "hi";
  AvailableLocales["hy"] = "hy";
  AvailableLocales["ln"] = "ln";
  AvailableLocales["mg"] = "mg";
  AvailableLocales["nso"] = "nso";
  AvailableLocales["xbr"] = "xbr";
  AvailableLocales["ti"] = "ti";
  AvailableLocales["wa"] = "wa";
  AvailableLocales["be"] = "be";
  AvailableLocales["bs"] = "bs";
  AvailableLocales["hr"] = "hr";
  AvailableLocales["ru"] = "ru";
  AvailableLocales["sr"] = "sr";
  AvailableLocales["uk"] = "uk";
  AvailableLocales["cs"] = "cs";
  AvailableLocales["sk"] = "sk";
  AvailableLocales["ga"] = "ga";
  AvailableLocales["lt"] = "lt";
  AvailableLocales["sl"] = "sl";
  AvailableLocales["mk"] = "mk";
  AvailableLocales["mt"] = "mt";
  AvailableLocales["lv"] = "lv";
  AvailableLocales["pl"] = "pl";
  AvailableLocales["cy"] = "cy";
  AvailableLocales["ro"] = "ro";
  AvailableLocales["ar"] = "ar";
})(AvailableLocales || (AvailableLocales = {}));

var getPluralFormId = function getPluralFormId(locale, number) {
  var _supportedForms;

  if (number === 0) {
    return 0;
  }

  var slavNum = number % 10 === 1 && number % 100 !== 11 ? 1 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20) ? 2 : 3;
  var supportedForms = (_supportedForms = {}, _defineProperty(_supportedForms, AvailableLocales.az, 1), _defineProperty(_supportedForms, AvailableLocales.bo, 1), _defineProperty(_supportedForms, AvailableLocales.dz, 1), _defineProperty(_supportedForms, AvailableLocales.id, 1), _defineProperty(_supportedForms, AvailableLocales.ja, 1), _defineProperty(_supportedForms, AvailableLocales.jv, 1), _defineProperty(_supportedForms, AvailableLocales.ka, 1), _defineProperty(_supportedForms, AvailableLocales.km, 1), _defineProperty(_supportedForms, AvailableLocales.kn, 1), _defineProperty(_supportedForms, AvailableLocales.ko, 1), _defineProperty(_supportedForms, AvailableLocales.ms, 1), _defineProperty(_supportedForms, AvailableLocales.th, 1), _defineProperty(_supportedForms, AvailableLocales.tr, 1), _defineProperty(_supportedForms, AvailableLocales.vi, 1), _defineProperty(_supportedForms, AvailableLocales.zh, 1), _defineProperty(_supportedForms, AvailableLocales.zh_tw, 1), _defineProperty(_supportedForms, AvailableLocales.zh_cn, 1), _defineProperty(_supportedForms, AvailableLocales.af, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.bn, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.bg, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ca, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.da, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.de, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.el, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.en, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.eo, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.es, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.et, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.eu, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fa, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fi, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fo, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fur, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fy, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.gl, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.gu, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ha, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.he, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.hu, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.is, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.it, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ku, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.lb, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ml, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.mn, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.mr, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.nah, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.nb, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ne, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.nl, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.nn, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.no, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.oc, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.om, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.or, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pa, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pap, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ps, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pt, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pt_pt, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pt_br, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.so, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.sq, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.sv, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.sw, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ta, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.te, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.tk, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ur, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.zu, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.am, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.bh, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.fil, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.fr, number === 0 || number >= 2 ? 2 : 1), _defineProperty(_supportedForms, AvailableLocales.gun, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.hi, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.hy, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.ln, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.mg, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.nso, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.xbr, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.ti, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.wa, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.be, slavNum), _defineProperty(_supportedForms, AvailableLocales.bs, slavNum), _defineProperty(_supportedForms, AvailableLocales.hr, slavNum), _defineProperty(_supportedForms, AvailableLocales.ru, slavNum), _defineProperty(_supportedForms, AvailableLocales.sr, slavNum), _defineProperty(_supportedForms, AvailableLocales.uk, slavNum), _defineProperty(_supportedForms, AvailableLocales.cs, number === 1 ? 1 : number >= 2 && number <= 4 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.sk, number === 1 ? 1 : number >= 2 && number <= 4 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.ga, number === 1 ? 1 : number === 2 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.lt, number % 10 === 1 && number % 100 !== 11 ? 1 : number % 10 >= 2 && (number % 100 < 10 || number % 100 >= 20) ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.sl, number % 100 === 1 ? 1 : number % 100 === 2 ? 2 : number % 100 === 3 || number % 100 === 4 ? 3 : 4), _defineProperty(_supportedForms, AvailableLocales.mk, number % 10 === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.mt, number === 1 ? 1 : number === 0 || number % 100 > 1 && number % 100 < 11 ? 2 : number % 100 > 10 && number % 100 < 20 ? 3 : 4), _defineProperty(_supportedForms, AvailableLocales.lv, number === 0 ? 0 : number % 10 === 1 && number % 100 !== 11 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pl, number === 1 ? 1 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 12 || number % 100 > 14) ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.cy, number === 1 ? 0 : number === 2 ? 1 : number === 8 || number === 11 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.ro, number === 1 ? 1 : number === 1 || number % 100 > 0 && number % 100 < 20 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.ar, number === 0 ? 0 : number === 1 ? 1 : number === 2 ? 2 : number % 100 >= 3 && number % 100 <= 10 ? 3 : number % 100 >= 11 && number % 100 <= 99 ? 4 : 5), _supportedForms);
  return supportedForms[locale];
};

var pluralFormsCount = (_pluralFormsCount = {}, _defineProperty(_pluralFormsCount, AvailableLocales.az, 2), _defineProperty(_pluralFormsCount, AvailableLocales.bo, 2), _defineProperty(_pluralFormsCount, AvailableLocales.dz, 2), _defineProperty(_pluralFormsCount, AvailableLocales.id, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ja, 2), _defineProperty(_pluralFormsCount, AvailableLocales.jv, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ka, 2), _defineProperty(_pluralFormsCount, AvailableLocales.km, 2), _defineProperty(_pluralFormsCount, AvailableLocales.kn, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ko, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ms, 2), _defineProperty(_pluralFormsCount, AvailableLocales.th, 2), _defineProperty(_pluralFormsCount, AvailableLocales.tr, 2), _defineProperty(_pluralFormsCount, AvailableLocales.vi, 2), _defineProperty(_pluralFormsCount, AvailableLocales.zh, 2), _defineProperty(_pluralFormsCount, AvailableLocales.zh_cn, 2), _defineProperty(_pluralFormsCount, AvailableLocales.zh_tw, 2), _defineProperty(_pluralFormsCount, AvailableLocales.af, 3), _defineProperty(_pluralFormsCount, AvailableLocales.bn, 3), _defineProperty(_pluralFormsCount, AvailableLocales.bg, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ca, 3), _defineProperty(_pluralFormsCount, AvailableLocales.da, 3), _defineProperty(_pluralFormsCount, AvailableLocales.de, 3), _defineProperty(_pluralFormsCount, AvailableLocales.el, 3), _defineProperty(_pluralFormsCount, AvailableLocales.en, 3), _defineProperty(_pluralFormsCount, AvailableLocales.eo, 3), _defineProperty(_pluralFormsCount, AvailableLocales.es, 3), _defineProperty(_pluralFormsCount, AvailableLocales.et, 3), _defineProperty(_pluralFormsCount, AvailableLocales.eu, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fa, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fi, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fo, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fur, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fy, 3), _defineProperty(_pluralFormsCount, AvailableLocales.gl, 3), _defineProperty(_pluralFormsCount, AvailableLocales.gu, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ha, 3), _defineProperty(_pluralFormsCount, AvailableLocales.he, 3), _defineProperty(_pluralFormsCount, AvailableLocales.hu, 3), _defineProperty(_pluralFormsCount, AvailableLocales.is, 3), _defineProperty(_pluralFormsCount, AvailableLocales.it, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ku, 3), _defineProperty(_pluralFormsCount, AvailableLocales.lb, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ml, 3), _defineProperty(_pluralFormsCount, AvailableLocales.mn, 3), _defineProperty(_pluralFormsCount, AvailableLocales.mr, 3), _defineProperty(_pluralFormsCount, AvailableLocales.nah, 3), _defineProperty(_pluralFormsCount, AvailableLocales.nb, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ne, 3), _defineProperty(_pluralFormsCount, AvailableLocales.nl, 3), _defineProperty(_pluralFormsCount, AvailableLocales.nn, 3), _defineProperty(_pluralFormsCount, AvailableLocales.no, 3), _defineProperty(_pluralFormsCount, AvailableLocales.oc, 3), _defineProperty(_pluralFormsCount, AvailableLocales.om, 3), _defineProperty(_pluralFormsCount, AvailableLocales.or, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pa, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pap, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ps, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pt, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pt_pt, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pt_br, 3), _defineProperty(_pluralFormsCount, AvailableLocales.so, 3), _defineProperty(_pluralFormsCount, AvailableLocales.sq, 3), _defineProperty(_pluralFormsCount, AvailableLocales.sv, 3), _defineProperty(_pluralFormsCount, AvailableLocales.sw, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ta, 3), _defineProperty(_pluralFormsCount, AvailableLocales.te, 3), _defineProperty(_pluralFormsCount, AvailableLocales.tk, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ur, 3), _defineProperty(_pluralFormsCount, AvailableLocales.zu, 3), _defineProperty(_pluralFormsCount, AvailableLocales.am, 2), _defineProperty(_pluralFormsCount, AvailableLocales.bh, 2), _defineProperty(_pluralFormsCount, AvailableLocales.fil, 2), _defineProperty(_pluralFormsCount, AvailableLocales.fr, 3), _defineProperty(_pluralFormsCount, AvailableLocales.gun, 2), _defineProperty(_pluralFormsCount, AvailableLocales.hi, 2), _defineProperty(_pluralFormsCount, AvailableLocales.hy, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ln, 2), _defineProperty(_pluralFormsCount, AvailableLocales.mg, 2), _defineProperty(_pluralFormsCount, AvailableLocales.nso, 2), _defineProperty(_pluralFormsCount, AvailableLocales.xbr, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ti, 2), _defineProperty(_pluralFormsCount, AvailableLocales.wa, 2), _defineProperty(_pluralFormsCount, AvailableLocales.be, 4), _defineProperty(_pluralFormsCount, AvailableLocales.bs, 4), _defineProperty(_pluralFormsCount, AvailableLocales.hr, 4), _defineProperty(_pluralFormsCount, AvailableLocales.ru, 4), _defineProperty(_pluralFormsCount, AvailableLocales.sr, 4), _defineProperty(_pluralFormsCount, AvailableLocales.uk, 4), _defineProperty(_pluralFormsCount, AvailableLocales.cs, 4), _defineProperty(_pluralFormsCount, AvailableLocales.sk, 4), _defineProperty(_pluralFormsCount, AvailableLocales.ga, 4), _defineProperty(_pluralFormsCount, AvailableLocales.lt, 4), _defineProperty(_pluralFormsCount, AvailableLocales.sl, 5), _defineProperty(_pluralFormsCount, AvailableLocales.mk, 3), _defineProperty(_pluralFormsCount, AvailableLocales.mt, 5), _defineProperty(_pluralFormsCount, AvailableLocales.lv, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pl, 4), _defineProperty(_pluralFormsCount, AvailableLocales.cy, 4), _defineProperty(_pluralFormsCount, AvailableLocales.ro, 4), _defineProperty(_pluralFormsCount, AvailableLocales.ar, 6), _pluralFormsCount);
var PLURAL_STRING_DELIMITER = '|';

var checkForms = function checkForms(str, locale, key) {
  var forms = str.split(PLURAL_STRING_DELIMITER);

  if (forms.length !== pluralFormsCount[locale]) {
    throw new Error("Invalid plural string \"".concat(key, "\" for locale ").concat(locale, ": ").concat(forms.length, " given; need: ").concat(pluralFormsCount[locale]));
  }
};
/**
 * Checks if plural forms are valid
 * @param str - message string
 * @param locale - message locale
 * @param key - message key, used for clearer log message
 */


var isPluralFormValid = function isPluralFormValid(str, locale, key) {
  try {
    checkForms(str, locale, key);
    return true;
  } catch (error) {
    return false;
  }
};
/**
 * Returns plural form corresponding to number
 * @param str
 * @param number
 * @param locale - current locale
 * @param key - message key
 */

var getForm = function getForm(str, number, locale, key) {
  checkForms(str, locale, key);
  var forms = str.split(PLURAL_STRING_DELIMITER);
  var currentForm = getPluralFormId(locale, number);
  return forms[currentForm].trim();
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultMessageConstructor = function defaultMessageConstructor(formatted) {
  return formatted.join('');
};

var Translator = /*#__PURE__*/function () {
  function Translator(i18n, messageConstructor, values) {
    _classCallCheck(this, Translator);

    this.i18n = i18n;
    this.messageConstructor = messageConstructor || defaultMessageConstructor;
    this.values = values || {};
  }
  /**
   * Retrieves message and translates it, substituting parameters where necessary
   * @param key - translation message key
   * @param params - values used to substitute placeholders and tags
   */


  _createClass(Translator, [{
    key: "getMessage",
    value: function getMessage(key) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var message = this.i18n.getMessage(key);

      if (!message) {
        message = this.i18n.getBaseMessage(key);

        if (!message) {
          throw new Error("Was unable to find message for key: \"".concat(key, "\""));
        }
      }

      var formatted = formatter(message, _objectSpread$1(_objectSpread$1({}, this.values), params));
      return this.messageConstructor(formatted);
    }
    /**
     * Retrieves correct plural form and translates it
     * @param key - translation message key
     * @param number - plural form number
     * @param params - values used to substitute placeholders or tags if necessary,
     * if params has "count" property it will be overridden by number (plural form number)
     */

  }, {
    key: "getPlural",
    value: function getPlural(key, number) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var message = this.i18n.getMessage(key);
      var language = this.i18n.getUILanguage();

      if (!message) {
        message = this.i18n.getBaseMessage(key);

        if (!message) {
          throw new Error("Was unable to find message for key: \"".concat(key, "\""));
        }

        language = this.i18n.getBaseUILanguage();
      }

      var form = getForm(message, number, language, key);
      var formatted = formatter(form, _objectSpread$1(_objectSpread$1(_objectSpread$1({}, this.values), params), {}, {
        count: number
      }));
      return this.messageConstructor(formatted);
    }
  }]);

  return Translator;
}();

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Creates translation function for strings used in the React components
 * We do not import React directly, because translator module can be used
 * in the modules without React too
 *
 * e.g.
 * const translateReact = createReactTranslator(getMessage, React);
 * in locales folder you should have messages.json file
 * ```
 * message:
 *     "popup_auth_agreement_consent": {
 *          "message": "You agree to our <eula>EULA</eula>",
 *      },
 * ```
 *
 * this message can be retrieved and translated into react components next way:
 *
 * const component = translateReact('popup_auth_agreement_consent', {
 *          eula: (chunks) => (
 *              <button
 *                  className="auth__privacy-link"
 *                  onClick={handleEulaClick}
 *              >
 *                  {chunks}
 *              </button>
 *          ),
 *       });
 *
 * Note how functions in the values argument can be used with handlers
 *
 * @param i18n - object with methods which get translated message by key and return current locale
 * @param React - instance of react library
 */

var createReactTranslator = function createReactTranslator(i18n, react, defaults) {
  /**
   * Helps to build nodes without values
   *
   * @param tagName
   * @param children
   */
  var createReactElement = function createReactElement(tagName, children) {
    if (children) {
      return react.createElement(tagName, null, react.Children.toArray(children));
    }

    return react.createElement(tagName, null);
  };
  /**
   * Function creates default values to be used if user didn't provide function values for tags
   */


  var createDefaultValues = function createDefaultValues() {
    var externalDefaults = {};

    if (defaults) {
      defaults.tags.forEach(function (t) {
        externalDefaults[t.key] = function (children) {
          return createReactElement(t.createdTag, children);
        };
      });
    }

    if (defaults !== null && defaults !== void 0 && defaults.override) {
      return externalDefaults;
    }

    return _objectSpread$2({
      p: function p(children) {
        return createReactElement('p', children);
      },
      b: function b(children) {
        return createReactElement('b', children);
      },
      strong: function strong(children) {
        return createReactElement('strong', children);
      },
      tt: function tt(children) {
        return createReactElement('tt', children);
      },
      s: function s(children) {
        return createReactElement('s', children);
      },
      i: function i(children) {
        return createReactElement('i', children);
      }
    }, externalDefaults);
  };

  var reactMessageConstructor = function reactMessageConstructor(formatted) {
    var reactChildren = react.Children.toArray(formatted); // if there is only strings in the array we join them

    if (reactChildren.every(function (child) {
      return typeof child === 'string';
    })) {
      return reactChildren.join('');
    }

    return reactChildren;
  };

  var defaultValues = createDefaultValues();
  return new Translator(i18n, reactMessageConstructor, defaultValues);
};

var r,
    f;

function A(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    A(n, l);
  }) : l.push(n)), l;
}

r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = 0;

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Creates translation function for strings used in the Preact components
 * We do not import Preact directly, because translator module can be used
 * in the modules without Preact too
 *
 * e.g.
 * const translatePreact = createPreactTranslator(getMessage, Preact);
 * in locales folder you should have messages.json file
 * ```
 * message:
 *     "popup_auth_agreement_consent": {
 *          "message": "You agree to our <eula>EULA</eula>",
 *      },
 * ```
 *
 * this message can be retrieved and translated into preact components next way:
 *
 * const component = translatePreact('popup_auth_agreement_consent', {
 *          eula: (chunks) => (
 *              <button
 *                  className="auth__privacy-link"
 *                  onClick={handleEulaClick}
 *              >
 *                  {chunks}
 *              </button>
 *          ),
 *       });
 *
 * Note how functions in the values argument can be used with handlers
 *
 * @param i18n - object with methods which get translated message by key and return current locale
 * @param Preact - instance of preact library
 */

var createPreactTranslator = function createPreactTranslator(i18n, preact, defaults) {
  /**
   * Helps to build nodes without values
   *
   * @param tagName
   * @param children
   */
  var createPreactElement = function createPreactElement(tagName, children) {
    if (children) {
      return preact.createElement(tagName, null, A(children));
    }

    return preact.createElement(tagName, null);
  };
  /**
   * Function creates default values to be used if user didn't provide function values for tags
   */


  var createDefaultValues = function createDefaultValues() {
    var externalDefaults = {};

    if (defaults) {
      defaults.tags.forEach(function (t) {
        externalDefaults[t.key] = function (children) {
          return createPreactElement(t.createdTag, children);
        };
      });
    }

    if (defaults !== null && defaults !== void 0 && defaults.override) {
      return externalDefaults;
    }

    return _objectSpread$3({
      p: function p(children) {
        return createPreactElement('p', children);
      },
      b: function b(children) {
        return createPreactElement('b', children);
      },
      strong: function strong(children) {
        return createPreactElement('strong', children);
      },
      tt: function tt(children) {
        return createPreactElement('tt', children);
      },
      s: function s(children) {
        return createPreactElement('s', children);
      },
      i: function i(children) {
        return createPreactElement('i', children);
      }
    }, externalDefaults);
  };

  var preactMessageConstructor = function preactMessageConstructor(formatted) {
    var preactChildren = A(formatted); // if there is only strings in the array we join them

    if (preactChildren.every(function (child) {
      return typeof child === 'string';
    })) {
      return preactChildren.join('');
    }

    return preactChildren;
  };

  var defaultValues = createDefaultValues();
  return new Translator(i18n, preactMessageConstructor, defaultValues);
};

/**
 * Creates translator instance strings, by default for simple strings
 * @param i18n - function which returns translated message by key
 * @param messageConstructor - function that will collect messages
 * @param values - map with default values for tag converters
 */

var createTranslator = function createTranslator(i18n, messageConstructor, values) {
  return new Translator(i18n, messageConstructor, values);
};

var translate = {
  createTranslator: createTranslator,
  createReactTranslator: createReactTranslator,
  createPreactTranslator: createPreactTranslator
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/**
 * Compares two AST (abstract syntax tree) structures,
 * view tests for examples
 * @param baseAst
 * @param targetAst
 */

var areAstStructuresSame = function areAstStructuresSame(baseAst, targetAst) {
  var textNodeFilter = function textNodeFilter(node) {
    return !isTextNode(node);
  };

  var filteredBaseAst = baseAst.filter(textNodeFilter);
  var filteredTargetAst = targetAst.filter(textNodeFilter); // if AST structures have different lengths, they are not equal

  if (filteredBaseAst.length !== filteredTargetAst.length) {
    return false;
  }

  var _loop = function _loop(i) {
    var baseNode = filteredBaseAst[i];
    var targetNode = filteredTargetAst.find(function (node) {
      return node.type === baseNode.type && node.value === baseNode.value;
    });

    if (!targetNode) {
      return {
        v: false
      };
    }

    if (targetNode.children && baseNode.children) {
      var areChildrenSame = areAstStructuresSame(baseNode.children, targetNode.children);

      if (!areChildrenSame) {
        return {
          v: false
        };
      }
    }
  };

  for (var i = 0; i < filteredBaseAst.length; i += 1) {
    var _ret = _loop(i);

    if (_typeof(_ret) === "object") return _ret.v;
  }

  return true;
};
/**
 * Validates translation against base string by AST (abstract syntax tree) structure
 * @param baseMessage - base message
 * @param translatedMessage - translated message
 */


var isTranslationValid = function isTranslationValid(baseMessage, translatedMessage) {
  var baseMessageAst = parser(baseMessage);
  var translatedMessageAst = parser(translatedMessage);
  return areAstStructuresSame(baseMessageAst, translatedMessageAst);
};
var validator = {
  isTranslationValid: isTranslationValid,
  isPluralFormValid: isPluralFormValid
};




/***/ }),

/***/ 87922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SimpleRegex),
/* harmony export */   "a": () => (/* binding */ stringArraysEquals),
/* harmony export */   "b": () => (/* binding */ stringArraysHaveIntersection),
/* harmony export */   "f": () => (/* binding */ fastHash),
/* harmony export */   "h": () => (/* binding */ hasUnquotedSubstring),
/* harmony export */   "i": () => (/* binding */ indexOfAny),
/* harmony export */   "r": () => (/* binding */ replaceAll),
/* harmony export */   "s": () => (/* binding */ splitByDelimiterWithEscapeCharacter)
/* harmony export */ });
/**
 * Splits the string by the delimiter, ignoring escaped delimiters.
 *
 * @param str - string to split
 * @param delimiter - delimiter
 * @param escapeCharacter - escape character
 * @param preserveAllTokens - if true, preserve empty parts
 * @param unescape - if true, delete EscapeCharacter
 * @return array of string parts
 */
function splitByDelimiterWithEscapeCharacter(str, delimiter, escapeCharacter, preserveAllTokens, unescape) {
    if (unescape === void 0) { unescape = true; }
    var parts = [];
    if (!str) {
        return parts;
    }
    if (str.startsWith(delimiter)) {
        // eslint-disable-next-line no-param-reassign
        str = str.substring(1);
    }
    if (!str.includes(escapeCharacter)) {
        parts = str.split(delimiter);
        if (!preserveAllTokens) {
            parts = parts.filter(function (x) { return !!x; });
        }
        return parts;
    }
    var sb = [];
    for (var i = 0; i < str.length; i += 1) {
        var c = str.charAt(i);
        if (c === delimiter) {
            if (i > 0 && str.charAt(i - 1) === escapeCharacter) {
                if (unescape) {
                    sb.splice(sb.length - 1, 1);
                }
                sb.push(c);
            }
            else if (preserveAllTokens || sb.length > 0) {
                var part = sb.join('');
                parts.push(part);
                sb = [];
            }
        }
        else {
            sb.push(c);
        }
    }
    if (preserveAllTokens || sb.length > 0) {
        parts.push(sb.join(''));
    }
    return parts;
}
/**
 * Checks if the specified string starts with a substr at the specified index.
 *
 * @param str - String to check
 * @param startIndex - Index to start checking from
 * @param substr - Substring to check
 * @return boolean true if it does start
 */
function startsAtIndexWith(str, startIndex, substr) {
    if (str.length - startIndex < substr.length) {
        return false;
    }
    for (var i = 0; i < substr.length; i += 1) {
        if (str.charAt(startIndex + i) !== substr.charAt(i)) {
            return false;
        }
    }
    return true;
}
/**
 * Checks if str has unquoted substr
 *
 * @param str
 * @param substr
 */
function hasUnquotedSubstring(str, substr) {
    var quotes = ['"', "'", '/'];
    if (!str.includes(substr)) {
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (indexOfAny(str, quotes) === -1) {
        return true;
    }
    var stack = [];
    for (var i = 0; i < str.length; i += 1) {
        var cursor = str[i];
        if (stack.length === 0) {
            if (startsAtIndexWith(str, i, substr)) {
                return true;
            }
        }
        if (quotes.indexOf(cursor) >= 0
            && (i === 0 || str[i - 1] !== '\\')) {
            var last = stack.pop();
            if (!last) {
                stack.push(cursor);
            }
            else if (last !== cursor) {
                stack.push(last);
                stack.push(cursor);
            }
        }
    }
    return false;
}
/**
 * djb2 hash algorithm
 *
 * @param str string to get hash
 * @param begin index from
 * @param end index to
 * @return {number} hash
 */
function fastHashBetween(str, begin, end) {
    var hash = 5381;
    for (var idx = begin; idx < end; idx += 1) {
        hash = 33 * hash + str.charCodeAt(idx);
    }
    return hash;
}
/**
 * djb2 hash algorithm
 *
 * @param str string to get hash
 * @return {number} hash
 */
function fastHash(str) {
    if (str === '') {
        return 0;
    }
    var len = str.length;
    return fastHashBetween(str, 0, len);
}
/**
 * Look for any symbol from "chars" array starting at "start" index or from the start of the string
 *
 * @param str   String to search
 * @param chars Chars to search for
 * @param start Start index (optional, inclusive)
 * @return int Index of the element found or -1 if not
 */
function indexOfAny(str, chars, start) {
    if (start === void 0) { start = 0; }
    if (str.length <= start) {
        return -1;
    }
    for (var i = start; i < str.length; i += 1) {
        var c = str.charAt(i);
        if (chars.indexOf(c) > -1) {
            return i;
        }
    }
    return -1;
}
/**
 * Replaces all occurences of find with replace in str
 *
 * @param str
 * @param find
 * @param replace
 */
function replaceAll(str, find, replace) {
    if (!str) {
        return str;
    }
    return str.split(find).join(replace);
}
/**
 * Checks if arrays are equal
 *
 * @param left array
 * @param right array
 * @return {boolean} true on equality
 */
function stringArraysEquals(left, right) {
    if (!left || !right) {
        return !left && !right;
    }
    if (left.length !== right.length) {
        return false;
    }
    for (var i = 0; i < left.length; i += 1) {
        if (left[i] !== right[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Checks if arrays have an intersection
 *
 * @param left array
 * @param right array
 * @return {boolean} true on equality
 */
function stringArraysHaveIntersection(left, right) {
    if (!left || !right) {
        return true;
    }
    for (var i = 0; i < left.length; i += 1) {
        if (right.includes(left[i])) {
            return true;
        }
    }
    return false;
}

// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/regexp
// should be escaped . * + ? ^ $ { } ( ) | [ ] / \
// except of * | ^
var specialCharacters = ['.', '+', '?', '$', '{', '}', '(', ')', '[', ']', '/', '\\'];
var reSpecialCharacters = new RegExp("[".concat(specialCharacters.join('\\'), "]"), 'g');
var reSpecialCharactersFull = /[.*+?^${}()|[\]\\]/g;
var reEscapedSpecialCharactersFull = /\\[.*+?^${}()|[\]\\]/g;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings
var escapeSequence = {
    'n': '\n',
    'r': '\r',
    't': '\t',
    'b': '\b',
    'f': '\f',
    'v': '\v',
};
/**
 * Class with static helper methods for working with basic filtering rules patterns.
 * https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules
 */
var SimpleRegex = /** @class */ (function () {
    function SimpleRegex() {
    }
    /**
     * Extracts the shortcut from the rule's pattern.
     * Shortcut is the longest substring of the pattern that does not contain
     * any special characters.
     *
     * Please note, that the shortcut is always lower-case!
     *
     * @param pattern - network rule's pattern.
     * @returns the shortcut or the empty string if we could not extract any.
     */
    SimpleRegex.extractShortcut = function (pattern) {
        if (pattern.startsWith(this.MASK_REGEX_RULE) && pattern.endsWith(this.MASK_REGEX_RULE)) {
            return this.extractRegexpShortcut(pattern);
        }
        return this.extractBasicShortcut(pattern);
    };
    /**
     * Searches for the longest substring of the pattern that
     * does not contain any special characters: *,^,|.
     *
     * @param pattern - network rule's pattern.
     * @returns the shortcut or the empty string
     */
    SimpleRegex.extractBasicShortcut = function (pattern) {
        var longest = '';
        var parts = pattern.split(this.rePatternSpecialCharacters);
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (part.length > longest.length) {
                longest = part;
            }
        }
        return (longest || '').toLowerCase();
    };
    /**
     * Searches for a shortcut inside of a regexp pattern.
     * Shortcut in this case is a longest string with no REGEX special characters.
     * Also, we discard complicated regexps right away.
     *
     * @param pattern - network rule's pattern (regexp).
     * @returns the shortcut or the empty string
     */
    SimpleRegex.extractRegexpShortcut = function (pattern) {
        var reText = pattern.substring(this.MASK_REGEX_RULE.length, pattern.length - this.MASK_REGEX_RULE.length);
        if (reText.length === 0) {
            // The rule is too short, doing nothing
            return '';
        }
        if (reText.indexOf('?') >= 0) {
            // Do not mess with complex expressions which use lookahead
            // And with those using ? special character
            // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/978
            return '';
        }
        var specialCharacter = '$$$';
        // Prepend specialCharacter for the following replace calls to work properly
        reText = specialCharacter + reText;
        // Strip all types of brackets
        reText = reText.replace(/[^\\]\(.*[^\\]\)/, specialCharacter);
        reText = reText.replace(/[^\\]\[.*[^\\]\]/, specialCharacter);
        reText = reText.replace(/[^\\]\{.*[^\\]\}/, specialCharacter);
        // Strip some special characters
        reText = reText.replace(/[^\\]\\[a-zA-Z]/, specialCharacter);
        // Replace \. with .
        reText = reText.replace(/\\\./g, '.');
        // Split by special characters
        // `.` is one of the special characters so our `specialCharacter`
        // will be removed from the resulting array
        var parts = reText.split(/[\\^$*+?()|[\]{}]/);
        var longest = '';
        for (var i = 0; i < parts.length; i += 1) {
            var part = parts[i];
            if (part.length > longest.length) {
                longest = part;
            }
        }
        return longest.toLowerCase();
    };
    /**
     * patternToRegexp is a helper method for creating regular expressions from the simple
     * wildcard-based syntax which is used in basic filters:
     * https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules
     *
     * @param pattern - basic rule pattern
     * @returns regular expression
     */
    SimpleRegex.patternToRegexp = function (pattern) {
        if (pattern === this.MASK_START_URL
            || pattern === this.MASK_PIPE
            || pattern === this.MASK_ANY_CHARACTER
            || pattern === '') {
            return this.REGEX_ANY_CHARACTER;
        }
        if (pattern.startsWith(this.MASK_REGEX_RULE) && pattern.endsWith(this.MASK_REGEX_RULE)) {
            // This is a regex rule, just remove the regex markers
            return pattern.substring(this.MASK_REGEX_RULE.length, pattern.length - this.MASK_REGEX_RULE.length);
        }
        // Escape special characters except of * | ^
        var regex = pattern.replace(reSpecialCharacters, '\\$&');
        // Now escape "|" characters but avoid escaping them in the special places
        if (regex.startsWith(this.MASK_START_URL)) {
            regex = regex.substring(0, this.MASK_START_URL.length)
                + replaceAll(regex.substring(this.MASK_START_URL.length, regex.length - this.MASK_PIPE.length), this.MASK_PIPE, "\\".concat(this.MASK_PIPE))
                + regex.substring(regex.length - this.MASK_PIPE.length);
        }
        else {
            regex = regex.substring(0, this.MASK_PIPE.length)
                + replaceAll(regex.substring(this.MASK_PIPE.length, regex.length - this.MASK_PIPE.length), this.MASK_PIPE, "\\".concat(this.MASK_PIPE))
                + regex.substring(regex.length - this.MASK_PIPE.length);
        }
        // Replace special URL masks
        regex = replaceAll(regex, this.MASK_ANY_CHARACTER, this.REGEX_ANY_CHARACTER);
        regex = replaceAll(regex, this.MASK_SEPARATOR, this.REGEX_SEPARATOR);
        // Replace start URL and pipes
        if (regex.startsWith(this.MASK_START_URL)) {
            regex = this.REGEX_START_URL + regex.substring(this.MASK_START_URL.length);
        }
        else if (regex.startsWith(this.MASK_PIPE)) {
            regex = this.REGEX_START_STRING + regex.substring(this.MASK_PIPE.length);
        }
        if (regex.endsWith(this.MASK_PIPE)) {
            regex = regex.substring(0, regex.length - this.MASK_PIPE.length) + this.REGEX_END_STRING;
        }
        return regex;
    };
    /**
     * Creates RegExp object from string in '/reg_exp/gi' format
     *
     * @param str
     */
    SimpleRegex.patternFromString = function (str) {
        var parts = splitByDelimiterWithEscapeCharacter(str, '/', '\\', true);
        var modifiers = (parts[1] || '');
        if (modifiers.indexOf('g') < 0) {
            modifiers += 'g';
        }
        return new RegExp(parts[0], modifiers);
    };
    /**
     * Escapes characters with special meaning inside a regular expression.
     *
     * @param str
     * @param searchPattern - Pattern for detecting special characters. Optional.
     */
    SimpleRegex.escapeRegexSpecials = function (str, searchPattern) {
        if (searchPattern === void 0) { searchPattern = reSpecialCharactersFull; }
        return str.replace(searchPattern, '\\$&');
    };
    /**
     * Unescapes characters with special meaning inside a regular expression.
     *
     * @param str
     * @param searchPattern - Pattern for detecting special characters. Optional.
     */
    SimpleRegex.unescapeRegexSpecials = function (str, searchPattern) {
        if (searchPattern === void 0) { searchPattern = reEscapedSpecialCharactersFull; }
        return str.replace(searchPattern, function (match) { return match.substring(1); });
    };
    /**
     * Check if pattern is Regex
     */
    SimpleRegex.isRegexPattern = function (str) {
        return str.startsWith('/') && str.endsWith('/');
    };
    /**
     * Unescapes special characters in a string
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings
     */
    SimpleRegex.unescapeSpecials = function (str) {
        var keys = Object.keys(escapeSequence).join('|');
        var regex = new RegExp("\\\\(".concat(keys, ")"), 'g');
        return str.replace(regex, function (match, group) {
            return escapeSequence[group];
        });
    };
    /**
     * Matching the beginning of an address. With this character you don't
     * have to specify a particular protocol and subdomain in address mask.
     * It means, || stands for http://*., https://*., ws://*., wss://*. at once.
     */
    SimpleRegex.MASK_START_URL = '||';
    /**
     * REGEX_START_URL corresponds to MASK_START_URL
     */
    SimpleRegex.REGEX_START_URL = '^(http|https|ws|wss)://([a-z0-9-_.]+\\.)?';
    /**
     * A pointer to the beginning or the end of address. The value depends on the
     * character placement in the mask. For example, a rule swf| corresponds
     * to http://example.com/annoyingflash.swf , but not to http://example.com/swf/index.html.
     * |http://example.org corresponds to http://example.org,
     * but not to http://domain.com?url=http://example.org.
     */
    SimpleRegex.MASK_PIPE = '|';
    /**
     * REGEX_END_STRING corresponds to MASK_PIPE if it is in the end of a pattern.
     */
    SimpleRegex.REGEX_END_STRING = '$';
    /**
     * REGEX_START_STRING corresponds to MASK_PIPE if it is in the beginning of a pattern.
     */
    SimpleRegex.REGEX_START_STRING = '^';
    /**
     * Separator character mark. Separator character is any character,
     * but a letter, a digit, or one of the following: _ - .
     */
    SimpleRegex.MASK_SEPARATOR = '^';
    /**
     * REGEX_SEPARATOR corresponds to MASK_SEPARATOR
     */
    SimpleRegex.REGEX_SEPARATOR = '([^ a-zA-Z0-9.%_-]|$)';
    /**
     * This is a wildcard character. It is used to represent "any set of characters".
     * This can also be an empty string or a string of any length.
     */
    SimpleRegex.MASK_ANY_CHARACTER = '*';
    /**
     * Path separator
     */
    SimpleRegex.MASK_BACKSLASH = '/';
    /**
     * REGEX_ANY_CHARACTER corresponds to MASK_ANY_CHARACTER.
     */
    SimpleRegex.REGEX_ANY_CHARACTER = '.*';
    /**
     * Enclose regex in two backslashes to mark a regex rule:
     * https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#regular-expressions-support
     */
    SimpleRegex.MASK_REGEX_RULE = '/';
    /**
     *  Regex for matching special characters in modifier regex pattern
     */
    SimpleRegex.reModifierPatternSpecialCharacters = /[[\],\\]/g;
    /**
      *  Regex for matching escaped special characters in modifier regex pattern
      */
    SimpleRegex.reModifierPatternEscapedSpecialCharacters = /\\[[\],\\]/g;
    /**
     * If string starts with exclamation mark "!" we consider it as comment
     */
    SimpleRegex.MASK_COMMENT = '!';
    /**
     * Min length of rule shortcut
     * This value has been picked as a result of performance experiments
     */
    SimpleRegex.MIN_SHORTCUT_LENGTH = 3;
    /**
     * Min length of generic rule shortcut
     */
    SimpleRegex.MIN_GENERIC_RULE_LENGTH = 4;
    /** Regex with basic matching pattern special characters */
    SimpleRegex.rePatternSpecialCharacters = new RegExp('[*^|]');
    return SimpleRegex;
}());




/***/ }),

/***/ 66167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* reexport safe */ _simple_regex_ea3ddcd2_js__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _simple_regex_ea3ddcd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87922);



/***/ }),

/***/ 38146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(92163);
var tryToString = __webpack_require__(40368);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 78875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(4259);
var create = __webpack_require__(28603);
var defineProperty = (__webpack_require__(16572).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 98514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(23041);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 64465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(19130);
var toAbsoluteIndex = __webpack_require__(63828);
var lengthOfArrayLike = __webpack_require__(25474);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 20592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(7931);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ 70939:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(38146);
var toObject = __webpack_require__(77410);
var IndexedObject = __webpack_require__(52170);
var lengthOfArrayLike = __webpack_require__(25474);

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ 74021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 61401:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(21325);
var ownKeys = __webpack_require__(20810);
var getOwnPropertyDescriptorModule = __webpack_require__(99206);
var definePropertyModule = __webpack_require__(16572);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 27767:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var definePropertyModule = __webpack_require__(16572);
var createPropertyDescriptor = __webpack_require__(48602);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 48602:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 14039:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(92163);
var definePropertyModule = __webpack_require__(16572);
var makeBuiltIn = __webpack_require__(85954);
var defineGlobalProperty = __webpack_require__(95861);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 95861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 46372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7931);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 94193:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var isObject = __webpack_require__(23041);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 3584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(74021);
var global = __webpack_require__(63406);

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ 20283:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(39997);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 55111:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var userAgent = __webpack_require__(20283);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 46606:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 65942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var getOwnPropertyDescriptor = (__webpack_require__(99206).f);
var createNonEnumerableProperty = __webpack_require__(27767);
var defineBuiltIn = __webpack_require__(14039);
var defineGlobalProperty = __webpack_require__(95861);
var copyConstructorProperties = __webpack_require__(61401);
var isForced = __webpack_require__(21637);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7931:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 62637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7931);

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 48624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(62637);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 30233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var hasOwn = __webpack_require__(21325);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 73074:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(62637);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 39997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var isCallable = __webpack_require__(92163);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 54462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(38146);
var isNullOrUndefined = __webpack_require__(57900);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 63406:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 21325:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);
var toObject = __webpack_require__(77410);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 43730:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 79150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(39997);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 53202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var fails = __webpack_require__(7931);
var createElement = __webpack_require__(94193);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 52170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);
var fails = __webpack_require__(7931);
var classof = __webpack_require__(74021);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 22089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);
var isCallable = __webpack_require__(92163);
var store = __webpack_require__(12846);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 3987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(24617);
var global = __webpack_require__(63406);
var uncurryThis = __webpack_require__(73074);
var isObject = __webpack_require__(23041);
var createNonEnumerableProperty = __webpack_require__(27767);
var hasOwn = __webpack_require__(21325);
var shared = __webpack_require__(12846);
var sharedKey = __webpack_require__(1320);
var hiddenKeys = __webpack_require__(43730);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 92163:
/***/ ((module) => {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 21637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7931);
var isCallable = __webpack_require__(92163);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 57900:
/***/ ((module) => {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 23041:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(92163);

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var SPECIAL_DOCUMENT_ALL = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = SPECIAL_DOCUMENT_ALL ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 2884:
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 85666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(39997);
var isCallable = __webpack_require__(92163);
var isPrototypeOf = __webpack_require__(3071);
var USE_SYMBOL_AS_UID = __webpack_require__(99525);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 25474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toLength = __webpack_require__(1403);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 85954:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7931);
var isCallable = __webpack_require__(92163);
var hasOwn = __webpack_require__(21325);
var DESCRIPTORS = __webpack_require__(46372);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(30233).CONFIGURABLE);
var inspectSource = __webpack_require__(22089);
var InternalStateModule = __webpack_require__(3987);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 855:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 28603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(98514);
var definePropertiesModule = __webpack_require__(98857);
var enumBugKeys = __webpack_require__(46606);
var hiddenKeys = __webpack_require__(43730);
var html = __webpack_require__(79150);
var documentCreateElement = __webpack_require__(94193);
var sharedKey = __webpack_require__(1320);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 98857:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(58814);
var definePropertyModule = __webpack_require__(16572);
var anObject = __webpack_require__(98514);
var toIndexedObject = __webpack_require__(19130);
var objectKeys = __webpack_require__(5390);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 16572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var IE8_DOM_DEFINE = __webpack_require__(53202);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(58814);
var anObject = __webpack_require__(98514);
var toPropertyKey = __webpack_require__(41973);

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 99206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var call = __webpack_require__(48624);
var propertyIsEnumerableModule = __webpack_require__(42251);
var createPropertyDescriptor = __webpack_require__(48602);
var toIndexedObject = __webpack_require__(19130);
var toPropertyKey = __webpack_require__(41973);
var hasOwn = __webpack_require__(21325);
var IE8_DOM_DEFINE = __webpack_require__(53202);

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 83311:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(51429);
var enumBugKeys = __webpack_require__(46606);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 50395:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 3071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 51429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);
var hasOwn = __webpack_require__(21325);
var toIndexedObject = __webpack_require__(19130);
var indexOf = (__webpack_require__(64465).indexOf);
var hiddenKeys = __webpack_require__(43730);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 5390:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(51429);
var enumBugKeys = __webpack_require__(46606);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 42251:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 29207:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(48624);
var isCallable = __webpack_require__(92163);
var isObject = __webpack_require__(23041);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 20810:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(39997);
var uncurryThis = __webpack_require__(73074);
var getOwnPropertyNamesModule = __webpack_require__(83311);
var getOwnPropertySymbolsModule = __webpack_require__(50395);
var anObject = __webpack_require__(98514);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 65727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNullOrUndefined = __webpack_require__(57900);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 1320:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(78519);
var uid = __webpack_require__(76004);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 12846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var defineGlobalProperty = __webpack_require__(95861);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 78519:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(2884);
var store = __webpack_require__(12846);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 73874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(55111);
var fails = __webpack_require__(7931);

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 63828:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(70400);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 19130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(52170);
var requireObjectCoercible = __webpack_require__(65727);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 70400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trunc = __webpack_require__(855);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 1403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(70400);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 77410:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(65727);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 18732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(48624);
var isObject = __webpack_require__(23041);
var isSymbol = __webpack_require__(85666);
var getMethod = __webpack_require__(54462);
var ordinaryToPrimitive = __webpack_require__(29207);
var wellKnownSymbol = __webpack_require__(4259);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 41973:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPrimitive = __webpack_require__(18732);
var isSymbol = __webpack_require__(85666);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 40368:
/***/ ((module) => {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 76004:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 99525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(73874);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 58814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var fails = __webpack_require__(7931);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 24617:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var isCallable = __webpack_require__(92163);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 4259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var shared = __webpack_require__(78519);
var hasOwn = __webpack_require__(21325);
var uid = __webpack_require__(76004);
var NATIVE_SYMBOL = __webpack_require__(73874);
var USE_SYMBOL_AS_UID = __webpack_require__(99525);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 90943:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var $includes = (__webpack_require__(64465).includes);
var fails = __webpack_require__(7931);
var addToUnscopables = __webpack_require__(78875);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 68736:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var $reduce = (__webpack_require__(70939).left);
var arrayMethodIsStrict = __webpack_require__(20592);
var CHROME_VERSION = __webpack_require__(55111);
var IS_NODE = __webpack_require__(3584);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 53570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ format)
});

;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/isDate/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/toDate/index.js
function toDate_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { toDate_typeof = function _typeof(obj) { return typeof obj; }; } else { toDate_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return toDate_typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || toDate_typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/isValid/index.js



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  requiredArgs(1, arguments);

  if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/addMilliseconds/index.js



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/subMilliseconds/index.js



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js


function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js



function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js



function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/defaultOptions/index.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js




var getUTCWeek_MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / getUTCWeek_MILLISECONDS_IN_WEEK) + 1;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const lightFormatters = (formatters);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/format/formatters/index.js







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters_formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return lightFormatters.m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const format_formatters = (formatters_formatters);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const format_longFormatters = (longFormatters);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/protectedTokens/index.js
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const _lib_formatDistance = (formatDistance);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const _lib_formatLong = (formatLong);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const _lib_formatRelative = (formatRelative);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const _lib_localize = (localize);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const _lib_match = (match);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/index.js






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance,
  formatLong: _lib_formatLong,
  formatRelative: _lib_formatRelative,
  localize: _lib_localize,
  match: _lib_match,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const en_US = (locale);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/defaultLocale/index.js

/* harmony default export */ const defaultLocale = (en_US);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/format/index.js










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = getDefaultOptions();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = format_longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = format_formatters[firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ 93429:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ 59679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(56041);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 82497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pi": () => (/* binding */ mobxreact_esm_observer)
});

// UNUSED EXPORTS: MobXProviderContext, Observer, PropTypes, Provider, disposeOnUnmount, enableStaticRendering, inject, isUsingStaticRendering, observerBatching, useAsObservableSource, useLocalObservable, useLocalStore, useObserver, useStaticRendering

// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(31056);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(70846);
;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/assertEnvironment.js


if (!react.useState) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx_esm/* makeObservable */.rC) {
    throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
}

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(76644);
;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js


;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/observerBatching.js

function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (false) {}
    }
    (0,mobx_esm/* configure */.jQ)({ reactionScheduler: reactionScheduler });
}
var isObserverBatched = function () {
    if (false) {}
    return true;
};

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/printDebugValue.js

function printDebugValue(v) {
    return (0,mobx_esm/* getDependencyTree */.Gf)(v);
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/FinalizationRegistryWrapper.js
var FinalizationRegistryLocal = typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry;


;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/reactionCleanupTrackingCommon.js
function createTrackingData(reaction) {
    var trackingData = {
        reaction: reaction,
        mounted: false,
        changedBeforeMount: false,
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/createReactionCleanupTrackingUsingFinalizationRegister.js

/**
 * FinalizationRegistry-based uncommitted reaction cleanup
 */
function createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistry) {
    var cleanupTokenToReactionTrackingMap = new Map();
    var globalCleanupTokensCounter = 1;
    var registry = new FinalizationRegistry(function cleanupFunction(token) {
        var trackedReaction = cleanupTokenToReactionTrackingMap.get(token);
        if (trackedReaction) {
            trackedReaction.reaction.dispose();
            cleanupTokenToReactionTrackingMap.delete(token);
        }
    });
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, objectRetainedByReact) {
            var token = globalCleanupTokensCounter++;
            registry.register(objectRetainedByReact, token, reactionTrackingRef);
            reactionTrackingRef.current = createTrackingData(reaction);
            reactionTrackingRef.current.finalizationRegistryCleanupToken = token;
            cleanupTokenToReactionTrackingMap.set(token, reactionTrackingRef.current);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: function (reactionRef) {
            registry.unregister(reactionRef);
            if (reactionRef.current && reactionRef.current.finalizationRegistryCleanupToken) {
                cleanupTokenToReactionTrackingMap.delete(reactionRef.current.finalizationRegistryCleanupToken);
            }
        },
        forceCleanupTimerToRunNowForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        },
        resetCleanupScheduleForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/createTimerBasedReactionCleanupTracking.js
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

/**
 * timers, gc-style, uncommitted reaction cleanup
 */
function createTimerBasedReactionCleanupTracking() {
    /**
     * Reactions created by components that have yet to be fully mounted.
     */
    var uncommittedReactionRefs = new Set();
    /**
     * Latest 'uncommitted reactions' cleanup timer handle.
     */
    var reactionCleanupHandle;
    /* istanbul ignore next */
    /**
     * Only to be used by test functions; do not export outside of mobx-react-lite
     */
    function forceCleanupTimerToRunNowForTests() {
        // This allows us to control the execution of the cleanup timer
        // to force it to run at awkward times in unit tests.
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            cleanUncommittedReactions();
        }
    }
    /* istanbul ignore next */
    function resetCleanupScheduleForTests() {
        var e_1, _a;
        if (uncommittedReactionRefs.size > 0) {
            try {
                for (var uncommittedReactionRefs_1 = __values(uncommittedReactionRefs), uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next(); !uncommittedReactionRefs_1_1.done; uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next()) {
                    var ref = uncommittedReactionRefs_1_1.value;
                    var tracking = ref.current;
                    if (tracking) {
                        tracking.reaction.dispose();
                        ref.current = null;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (uncommittedReactionRefs_1_1 && !uncommittedReactionRefs_1_1.done && (_a = uncommittedReactionRefs_1.return)) _a.call(uncommittedReactionRefs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            uncommittedReactionRefs.clear();
        }
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            reactionCleanupHandle = undefined;
        }
    }
    function ensureCleanupTimerRunning() {
        if (reactionCleanupHandle === undefined) {
            reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
        }
    }
    function scheduleCleanupOfReactionIfLeaked(ref) {
        uncommittedReactionRefs.add(ref);
        ensureCleanupTimerRunning();
    }
    function recordReactionAsCommitted(reactionRef) {
        uncommittedReactionRefs.delete(reactionRef);
    }
    /**
     * Run by the cleanup timer to dispose any outstanding reactions
     */
    function cleanUncommittedReactions() {
        reactionCleanupHandle = undefined;
        // Loop through all the candidate leaked reactions; those older
        // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
        var now = Date.now();
        uncommittedReactionRefs.forEach(function (ref) {
            var tracking = ref.current;
            if (tracking) {
                if (now >= tracking.cleanAt) {
                    // It's time to tidy up this leaked reaction.
                    tracking.reaction.dispose();
                    ref.current = null;
                    uncommittedReactionRefs.delete(ref);
                }
            }
        });
        if (uncommittedReactionRefs.size > 0) {
            // We've just finished a round of cleanups but there are still
            // some leak candidates outstanding.
            ensureCleanupTimerRunning();
        }
    }
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, 
        /**
         * On timer based implementation we don't really need this object,
         * but we keep the same api
         */
        objectRetainedByReact) {
            reactionTrackingRef.current = createTrackingData(reaction);
            scheduleCleanupOfReactionIfLeaked(reactionTrackingRef);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: recordReactionAsCommitted,
        forceCleanupTimerToRunNowForTests: forceCleanupTimerToRunNowForTests,
        resetCleanupScheduleForTests: resetCleanupScheduleForTests
    };
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/reactionCleanupTracking.js



var _a = FinalizationRegistryLocal
    ? createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistryLocal)
    : createTimerBasedReactionCleanupTracking(), addReactionToTrack = _a.addReactionToTrack, recordReactionAsCommitted = _a.recordReactionAsCommitted, resetCleanupScheduleForTests = _a.resetCleanupScheduleForTests, forceCleanupTimerToRunNowForTests = _a.forceCleanupTimerToRunNowForTests;


;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/staticRendering.js
var globalIsUsingStaticRendering = false;
function staticRendering_enableStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useObserver.js
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





function observerComponentNameFor(baseComponentName) {
    return "observer".concat(baseComponentName);
}
/**
 * We use class to make it easier to detect in heap snapshots by name
 */
var ObjectToBeRetainedByReact = /** @class */ (function () {
    function ObjectToBeRetainedByReact() {
    }
    return ObjectToBeRetainedByReact;
}());
function objectToBeRetainedByReactFactory() {
    return new ObjectToBeRetainedByReact();
}
function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (isUsingStaticRendering()) {
        return fn();
    }
    var _a = __read(react.useState(objectToBeRetainedByReactFactory), 1), objectRetainedByReact = _a[0];
    // Force update, see #2982
    var _b = __read(react.useState(), 2), setState = _b[1];
    var forceUpdate = function () { return setState([]); };
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = react.useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction = new mobx_esm/* Reaction */.le(observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                forceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.
                trackingData_1.changedBeforeMount = true;
            }
        });
        var trackingData_1 = addReactionToTrack(reactionTrackingRef, newReaction, objectRetainedByReact);
    }
    var reaction = reactionTrackingRef.current.reaction;
    react.useDebugValue(reaction, printDebugValue);
    react.useEffect(function () {
        // Called on first mount only
        recordReactionAsCommitted(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
            // Got a change before first mount, force an update
            if (reactionTrackingRef.current.changedBeforeMount) {
                reactionTrackingRef.current.changedBeforeMount = false;
                forceUpdate();
            }
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This can be due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new mobx_esm/* Reaction */.le(observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    forceUpdate();
                }),
                mounted: true,
                changedBeforeMount: false,
                cleanAt: Infinity
            };
            forceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        throw exception; // re-throw any exceptions caught during rendering
    }
    return rendering;
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/observer.js



var warnObserverOptionsDeprecated = true;
var hasSymbol = typeof Symbol === "function" && Symbol.for;
// Using react-is had some issues (and operates on elements, not on types), see #608 / #609
var ReactForwardRefSymbol = hasSymbol
    ? Symbol.for("react.forward_ref")
    : typeof react.forwardRef === "function" && (0,react.forwardRef)(function (props) { return null; })["$$typeof"];
var ReactMemoSymbol = hasSymbol
    ? Symbol.for("react.memo")
    : typeof react.memo === "function" && (0,react.memo)(function (props) { return null; })["$$typeof"];
// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, 
// TODO remove in next major
options) {
    var _a;
    if (false) {}
    if (ReactMemoSymbol && baseComponent["$$typeof"] === ReactMemoSymbol) {
        throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
    }
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (isUsingStaticRendering()) {
        return baseComponent;
    }
    var useForwardRef = (_a = options === null || options === void 0 ? void 0 : options.forwardRef) !== null && _a !== void 0 ? _a : false;
    var render = baseComponent;
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    // If already wrapped with forwardRef, unwrap,
    // so we can patch render and apply memo
    if (ReactForwardRefSymbol && baseComponent["$$typeof"] === ReactForwardRefSymbol) {
        useForwardRef = true;
        render = baseComponent["render"];
        if (typeof render !== "function") {
            throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
        }
    }
    var observerComponent = function (props, ref) {
        return useObserver(function () { return render(props, ref); }, baseComponentName);
    };
    // Don't set `displayName` for anonymous components,
    // so the `displayName` can be customized by user, see #3192.
    if (baseComponentName !== "") {
        ;
        observerComponent.displayName = baseComponentName;
    }
    // Support legacy context: `contextTypes` must be applied before `memo`
    if (baseComponent.contextTypes) {
        ;
        observerComponent.contextTypes = baseComponent.contextTypes;
    }
    if (useForwardRef) {
        // `forwardRef` must be applied prior `memo`
        // `forwardRef(observer(cmp))` throws:
        // "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))"
        observerComponent = (0,react.forwardRef)(observerComponent);
    }
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    observerComponent = (0,react.memo)(observerComponent);
    copyStaticProperties(baseComponent, observerComponent);
    if (false) {}
    return observerComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true,
    // Don't redefine `displayName`,
    // it's defined as getter-setter pair on `memo` (see #3192).
    displayName: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/ObserverComponent.js

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return useObserver(component);
}
if (false) {}
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useLocalObservable.js


function useLocalObservable(initializer, annotations) {
    return useState(function () { return observable(initializer(), annotations, { autoBind: true }); })[0];
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useAsObservableSource.js
var useAsObservableSource_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSource_useAsObservableSource(current) {
    if (false)
        {}
    var _a = useAsObservableSource_read(useState(function () { return observable(current, {}, { deep: false }); }), 1), res = _a[0];
    runInAction(function () {
        Object.assign(res, current);
    });
    return res;
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useLocalStore.js




function useLocalStore(initializer, current) {
    if (false)
        {}
    var source = current && useAsObservableSource(current);
    return useState(function () { return observable(initializer(source), undefined, { autoBind: true }); })[0];
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/index.js






observerBatching(react_dom.unstable_batchedUpdates);







function es_useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (false) {}
    return useObserverOriginal(fn, baseComponentName);
}

function useStaticRendering(enable) {
    if (false) {}
    enableStaticRendering(enable);
}

;// CONCATENATED MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js





var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};
function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}
function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var mobxreact_esm_hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  displayName: 1,
  propTypes: 1
};
function mobxreact_esm_copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!mobxreact_esm_hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */

var mobxMixins = /*#__PURE__*/newSymbol("patchMixins");
var mobxPatchedDefinition = /*#__PURE__*/newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls
  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx_esm/* $mobx */.so || "$mobx"; // BC

var mobxObserverProperty = /*#__PURE__*/newSymbol("isMobXReactObserver");
var mobxIsUnmounted = /*#__PURE__*/newSymbol("isUnmounted");
var skipRenderKey = /*#__PURE__*/newSymbol("skipRender");
var isForcingUpdateKey = /*#__PURE__*/newSymbol("isForcingUpdate");
function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;

  if (componentClass[mobxObserverProperty]) {
    var displayName = getDisplayName(target);
    console.warn("The provided component class (" + displayName + ")\n                has already been declared as an observer component.");
  } else {
    componentClass[mobxObserverProperty] = true;
  }

  if (target.componentWillReact) {
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  }

  if (componentClass["__proto__"] !== react.PureComponent) {
    if (!target.shouldComponentUpdate) {
      target.shouldComponentUpdate = observerSCU;
    } else if (target.shouldComponentUpdate !== observerSCU) {
      // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
    }
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");

  if (componentClass.contextType) {
    makeObservableProp(target, "context");
  }

  var originalRender = target.render;

  if (typeof originalRender !== "function") {
    var _displayName = getDisplayName(target);

    throw new Error("[mobx-react] class component (" + _displayName + ") is missing `render` method." + "\n`observer` requires `render` being a function defined on prototype." + "\n`render = () => {}` or `render = function() {}` is not supported.");
  }

  target.render = function () {
    this.render = isUsingStaticRendering() ? originalRender : createReactiveRender.call(this, originalRender);
    return this.render();
  };

  patch(target, "componentDidMount", function () {
    this[mobxIsUnmounted] = false;

    if (!this.render[mobxAdminProperty]) {
      // Reaction is re-created automatically during render, but a component can re-mount and skip render #3395.
      // To re-create the reaction and re-subscribe to relevant observables we have to force an update.
      react.Component.prototype.forceUpdate.call(this);
    }
  });
  patch(target, "componentWillUnmount", function () {
    if (isUsingStaticRendering()) {
      return;
    }

    var reaction = this.render[mobxAdminProperty];

    if (reaction) {
      reaction.dispose(); // Forces reaction to be re-created on next render

      this.render[mobxAdminProperty] = null;
    } else {
      // Render may have been hot-swapped and/or overridden by a subclass.
      var _displayName2 = getDisplayName(this);

      console.warn("The reactive render of an observer class component (" + _displayName2 + ")\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.");
    }

    this[mobxIsUnmounted] = true;
  });
  return componentClass;
} // Generates a friendly name for debugging

function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function createReactiveRender(originalRender) {
  var _this = this;

  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */
  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var boundOriginalRender = originalRender.bind(this);
  var isRenderingPending = false;

  var createReaction = function createReaction() {
    var reaction = new mobx_esm/* Reaction */.le(initialName + ".render()", function () {
      if (!isRenderingPending) {
        // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.test.tsx)
        // This unidiomatic React usage but React will correctly warn about this so we continue as usual
        // See #85 / Pull #44
        isRenderingPending = true;

        if (_this[mobxIsUnmounted] !== true) {
          var hasError = true;

          try {
            setHiddenProp(_this, isForcingUpdateKey, true);

            if (!_this[skipRenderKey]) {
              react.Component.prototype.forceUpdate.call(_this);
            }

            hasError = false;
          } finally {
            setHiddenProp(_this, isForcingUpdateKey, false);

            if (hasError) {
              reaction.dispose(); // Forces reaction to be re-created on next render

              _this.render[mobxAdminProperty] = null;
            }
          }
        }
      }
    });
    reaction["reactComponent"] = _this;
    return reaction;
  };

  function reactiveRender() {
    var _reactiveRender$mobxA;

    isRenderingPending = false; // Create reaction lazily to support re-mounting #3395

    var reaction = (_reactiveRender$mobxA = reactiveRender[mobxAdminProperty]) != null ? _reactiveRender$mobxA : reactiveRender[mobxAdminProperty] = createReaction();
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        // TODO@major
        // Optimization: replace with _allowStateChangesStart/End (not available in mobx@6.0.0)
        rendering = (0,mobx_esm/* _allowStateChanges */.$$)(false, boundOriginalRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender;
}

function observerSCU(nextProps, nextState) {
  if (isUsingStaticRendering()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, (0,mobx_esm/* createAtom */.cp)("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false; // Why this check? BC?
      // @ts-expect-error

      if (mobx_esm/* _allowStateReadsStart */.wM && mobx_esm/* _allowStateReadsEnd */.mJ) {
        prevReadState = (0,mobx_esm/* _allowStateReadsStart */.wM)(true);
      }

      getAtom.call(this).reportObserved(); // Why this check? BC?
      // @ts-expect-error

      if (mobx_esm/* _allowStateReadsStart */.wM && mobx_esm/* _allowStateReadsEnd */.mJ) {
        (0,mobx_esm/* _allowStateReadsEnd */.mJ)(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

/**
 * Observer function / decorator
 */

function mobxreact_esm_observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`");
  }

  if (Object.prototype.isPrototypeOf.call(react.Component, component) || Object.prototype.isPrototypeOf.call(react.PureComponent, component)) {
    // Class component
    return makeClassComponentObserver(component);
  } else {
    // Function component
    return observer(component);
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["children"];
var MobXProviderContext = /*#__PURE__*/react.createContext({});
function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, _excluded);

  var parentValue = react.useContext(MobXProviderContext);
  var mutableProviderRef = react.useRef(_extends({}, parentValue, stores));
  var value = mutableProviderRef.current;

  if (false) { var newValue; }

  return react.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}
Provider.displayName = "MobXProvider";

/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = React__default.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = React__default.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return React__default.createElement(component, newProps);
  });
  if (makeReactive) Injector = mobxreact_esm_observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  mobxreact_esm_copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey = /*#__PURE__*/(/* unused pure expression or super */ null && (newSymbol("disposeOnUnmountProto")));
var instStoreKey = /*#__PURE__*/(/* unused pure expression or super */ null && (newSymbol("disposeOnUnmountInst")));

function runDisposersOnWillUnmount() {
  var _this = this;
  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor;
  var c2 = Object.getPrototypeOf(target.constructor); // Special case for react-hot-loader

  var c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));

  if (!(c === React__default.Component || c === React__default.PureComponent || c2 === React__default.Component || c2 === React__default.PureComponent || c3 === React__default.Component || c3 === React__default.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return (0,mobx_esm/* untracked */.rg)(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return (0,mobx_esm/* untracked */.rg)(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx_esm/* isObservableArray */.Ei;
          break;

        case "Object":
          mobxChecker = mobx_esm/* isObservableObject */.Pb;
          break;

        case "Map":
          mobxChecker = mobx_esm/* isObservableMap */.LJ;
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return (0,mobx_esm/* untracked */.rg)(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Map");
var observableObject = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

if (!react.Component) throw new Error("mobx-react requires React to be available");
if (!mobx_esm/* observable */.LO) throw new Error("mobx-react requires mobx to be available");




/***/ }),

/***/ 21737:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isarray = __webpack_require__(65075)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ 65075:
/***/ ((module) => {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 11075:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 56041:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(11075);
} else {}


/***/ }),

/***/ 78760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ 89106:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(70846);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(76644);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(3660);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(87792);

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(82716);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(28549);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(78760);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== undefined;

var createHTMLElement = function createHTMLElement(name) {
  return document.createElement(name);
};

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent && parent.contains(_this.node)) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = createHTMLElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = createHTMLElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  preventScroll: false,
  parentSelector: function parentSelector() {
    return document.body;
  },
  overlayElement: function overlayElement(props, contentEl) {
    return _react2.default.createElement(
      "div",
      props,
      contentEl
    );
  },
  contentElement: function contentElement(props, children) {
    return _react2.default.createElement(
      "div",
      props,
      children
    );
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

if (false) {}

exports["default"] = Modal;

/***/ }),

/***/ 87792:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(70846);

var _propTypes = __webpack_require__(3660);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(89937);

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(29319);

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(82716);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(17154);

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(28549);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _portalOpenInstances = __webpack_require__(24951);

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

__webpack_require__(20452);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus(_this.props.preventScroll);
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2.default.deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.openAnimationFrame = requestAnimationFrame(function () {
            _this.setState({ afterOpen: true });

            if (_this.props.isOpen && _this.props.onAfterOpen) {
              _this.props.onAfterOpen({
                overlayEl: _this.overlay,
                contentEl: _this.content
              });
            }
          });
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (false) {}

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
      cancelAnimationFrame(this.openAnimationFrame);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }

      _portalOpenInstances2.default.register(this);
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles,
          children = _props2.children;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      if (this.shouldBeClosed()) {
        return null;
      }

      var overlayProps = {
        ref: this.setOverlayRef,
        className: this.buildClassName("overlay", overlayClassName),
        style: _extends({}, overlayStyles, this.props.style.overlay),
        onClick: this.handleOverlayOnClick,
        onMouseDown: this.handleOverlayOnMouseDown
      };

      var contentProps = _extends({
        id: id,
        ref: this.setContentRef,
        style: _extends({}, contentStyles, this.props.style.content),
        className: this.buildClassName("content", className),
        tabIndex: "-1",
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleContentOnMouseDown,
        onMouseUp: this.handleContentOnMouseUp,
        onClick: this.handleContentOnClick,
        role: this.props.role,
        "aria-label": this.props.contentLabel
      }, this.attributesFromObject("aria", _extends({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
        "data-testid": this.props.testId
      });

      var contentElement = this.props.contentElement(contentProps, children);
      return this.props.overlayElement(overlayProps, contentElement);
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func,
  testId: _propTypes2.default.string
};
exports["default"] = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ 82716:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;

var _warning = __webpack_require__(84966);

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(28549);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  if (globalElement) {
    if (globalElement.removeAttribute) {
      globalElement.removeAttribute("aria-hidden");
    } else if (globalElement.length != null) {
      globalElement.forEach(function (element) {
        return element.removeAttribute("aria-hidden");
      });
    } else {
      document.querySelectorAll(globalElement).forEach(function (element) {
        return element.removeAttribute("aria-hidden");
      });
    }
  }
  globalElement = null;
}

/* istanbul ignore next */
function log() {
  if (false) { var check; }
}
/* eslint-enable no-console */

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  var el = appElement || globalElement;
  if (el) {
    return Array.isArray(el) || el instanceof HTMLCollection || el instanceof NodeList ? el : [el];
  } else {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return [];
  }
}

function hide(appElement) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = validateElement(appElement)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;

      el.setAttribute("aria-hidden", "true");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function show(appElement) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = validateElement(appElement)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var el = _step2.value;

      el.removeAttribute("aria-hidden");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

/***/ }),

/***/ 20452:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;

var _portalOpenInstances = __webpack_require__(24951);

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Body focus trap see Issue #742

var before = void 0,
    after = void 0,
    instances = [];

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  var _arr = [before, after];

  for (var _i = 0; _i < _arr.length; _i++) {
    var item = _arr[_i];
    if (!item) continue;
    item.parentNode && item.parentNode.removeChild(item);
  }
  before = after = null;
  instances = [];
}

/* istanbul ignore next */
function log() {
  console.log("bodyTrap ----------");
  console.log(instances.length);
  var _arr2 = [before, after];
  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var item = _arr2[_i2];
    var check = item || {};
    console.log(check.nodeName, check.className, check.id);
  }
  console.log("edn bodyTrap ----------");
}
/* eslint-enable no-console */

function focusContent() {
  if (instances.length === 0) {
    if (false) {}
    return;
  }
  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before && !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2.default.subscribe(bodyTrap);

/***/ }),

/***/ 17154:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;
var htmlClassList = {};
var docBodyClassList = {};

/* eslint-disable no-console */
/* istanbul ignore next */
function removeClass(at, cls) {
  at.classList.remove(cls);
}

/* istanbul ignore next */
function resetState() {
  var htmlElement = document.getElementsByTagName("html")[0];
  for (var cls in htmlClassList) {
    removeClass(htmlElement, htmlClassList[cls]);
  }

  var body = document.body;
  for (var _cls in docBodyClassList) {
    removeClass(body, docBodyClassList[_cls]);
  }

  htmlClassList = {};
  docBodyClassList = {};
}

/* istanbul ignore next */
function log() {
  if (false) { var _x, x, buffer, classes; }
}
/* eslint-enable no-console */

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ 89937:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(32840);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  focusLaterElements = [];
}

/* istanbul ignore next */
function log() {
  if (false) {}
}
/* eslint-enable no-console */

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var preventScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus({ preventScroll: preventScroll });
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ 24951:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.log = log;
exports.resetState = resetState;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tracks portals that are open and emits events to subscribers

var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      if (false) {}
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      if (false) {}
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType,
      // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();

/* eslint-disable no-console */
/* istanbul ignore next */
function log() {
  console.log("portalOpenInstances ----------");
  console.log(portalOpenInstances.openInstances.length);
  portalOpenInstances.openInstances.forEach(function (p) {
    return console.log(p);
  });
  console.log("end portalOpenInstances ----------");
}

/* istanbul ignore next */
function resetState() {
  portalOpenInstances = new PortalOpenInstances();
}
/* eslint-enable no-console */

exports["default"] = portalOpenInstances;

/***/ }),

/***/ 28549:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.canUseDOM = exports.SafeNodeList = exports.SafeHTMLCollection = undefined;

var _exenv = __webpack_require__(93429);

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var SafeHTMLCollection = exports.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {};

var SafeNodeList = exports.SafeNodeList = EE.canUseDOM ? window.NodeList : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports["default"] = SafeHTMLElement;

/***/ }),

/***/ 29319:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = scopeTab;

var _tabbable = __webpack_require__(32840);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getActiveElement() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  return el.activeElement.shadowRoot ? getActiveElement(el.activeElement.shadowRoot) : el.activeElement;
}

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];
  var activeElement = getActiveElement();

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === activeElement && !shiftKey) {
    target = head;
  }

  if (head === activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x];

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  target.focus();
}
module.exports = exports["default"];

/***/ }),

/***/ 32840:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object|iframe/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  try {
    // Otherwise we need to check some styles
    var style = window.getComputedStyle(element);
    return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
    // if 'overflow: visible' set, check if there is actually any overflow
    element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.warn("Failed to inspect element style");
    return false;
  }
}

function visible(element) {
  var parentElement = element;
  var rootNode = element.getRootNode && element.getRootNode();
  while (parentElement) {
    if (parentElement === document.body) break;

    // if we are not hidden yet, skip to checking outside the Web Component
    if (rootNode && parentElement === rootNode) parentElement = rootNode.host.parentNode;

    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  var descendants = [].slice.call(element.querySelectorAll("*"), 0).reduce(function (finished, el) {
    return finished.concat(!el.shadowRoot ? [el] : findTabbableDescendants(el.shadowRoot));
  }, []);
  return descendants.filter(tabbable);
}
module.exports = exports["default"];

/***/ }),

/***/ 28879:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _Modal = __webpack_require__(89106);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = _Modal2.default;
module.exports = exports["default"];

/***/ }),

/***/ 84966:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 53679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.10.0 - Fri Aug 12 2022 19:42:44 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (!globalThis.chrome?.runtime?.id) {
    throw new Error("This script should only be loaded in a browser extension.");
  }

  if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received."; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      });

      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */


        return function onRequestFinished(req) {
          const wrappedReq = wrapObject(req, {}
          /* wrappers */
          , {
            getContent: {
              minArgs: 0,
              maxArgs: 0
            }
          });
          listener(wrappedReq);
        };
      });
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(new Error(extensionAPIs.runtime.lastError.message));
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        devtools: {
          network: {
            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
          }
        },
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    }; // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = globalThis.browser;
  }
});


/***/ }),

/***/ 82418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xg": () => (/* binding */ createDeferredActor),
/* harmony export */   "f3": () => (/* binding */ isSpawnedActor),
/* harmony export */   "mu": () => (/* binding */ createInvocableActor),
/* harmony export */   "vk": () => (/* binding */ toActorRef)
/* harmony export */ });
/* unused harmony exports createNullActor, isActor */
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3388);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98351);
/* harmony import */ var _serviceScope_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9010);




function createNullActor(id) {
  var _a;

  return _a = {
    id: id,
    send: function () {
      return void 0;
    },
    subscribe: function () {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    },
    getSnapshot: function () {
      return undefined;
    },
    toJSON: function () {
      return {
        id: id
      };
    }
  }, _a[_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolObservable */ .L$] = function () {
    return this;
  }, _a;
}
/**
 * Creates a deferred actor that is able to be invoked given the provided
 * invocation information in its `.meta` value.
 *
 * @param invokeDefinition The meta information needed to invoke the actor.
 */

function createInvocableActor(invokeDefinition, machine, context, _event) {
  var _a;

  var invokeSrc = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .toInvokeSource */ .j)(invokeDefinition.src);
  var serviceCreator = (_a = machine === null || machine === void 0 ? void 0 : machine.options.services) === null || _a === void 0 ? void 0 : _a[invokeSrc.type];
  var resolvedData = invokeDefinition.data ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .mapContext */ .QX)(invokeDefinition.data, context, _event) : undefined;
  var tempActor = serviceCreator ? createDeferredActor(serviceCreator, invokeDefinition.id, resolvedData) : createNullActor(invokeDefinition.id); // @ts-ignore

  tempActor.meta = invokeDefinition;
  return tempActor;
}
function createDeferredActor(entity, id, data) {
  var tempActor = createNullActor(id); // @ts-ignore

  tempActor.deferred = true;

  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMachine */ .O4)(entity)) {
    // "mute" the existing service scope so potential spawned actors within the `.initialState` stay deferred here
    var initialState_1 = tempActor.state = (0,_serviceScope_js__WEBPACK_IMPORTED_MODULE_1__/* .provide */ .J)(undefined, function () {
      return (data ? entity.withContext(data) : entity).initialState;
    });

    tempActor.getSnapshot = function () {
      return initialState_1;
    };
  }

  return tempActor;
}
function isActor(item) {
  try {
    return typeof item.send === 'function';
  } catch (e) {
    return false;
  }
}
function isSpawnedActor(item) {
  return isActor(item) && 'id' in item;
} // TODO: refactor the return type, this could be written in a better way but it's best to avoid unneccessary breaking changes now

function toActorRef(actorRefLike) {
  var _a;

  return (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((_a = {
    subscribe: function () {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    },
    id: 'anonymous',
    getSnapshot: function () {
      return undefined;
    }
  }, _a[_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolObservable */ .L$] = function () {
    return this;
  }, _a), actorRefLike);
}




/***/ }),

/***/ 65697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ Machine),
  "C": () => (/* binding */ createMachine)
});

// EXTERNAL MODULE: ./node_modules/xstate/es/_virtual/_tslib.js
var _tslib = __webpack_require__(3388);
// EXTERNAL MODULE: ./node_modules/xstate/es/utils.js
var utils = __webpack_require__(98351);
// EXTERNAL MODULE: ./node_modules/xstate/es/types.js
var types = __webpack_require__(21329);
// EXTERNAL MODULE: ./node_modules/xstate/es/State.js
var State = __webpack_require__(44242);
// EXTERNAL MODULE: ./node_modules/xstate/es/actionTypes.js
var actionTypes = __webpack_require__(80127);
// EXTERNAL MODULE: ./node_modules/xstate/es/actions.js
var es_actions = __webpack_require__(11020);
// EXTERNAL MODULE: ./node_modules/xstate/es/environment.js
var environment = __webpack_require__(88685);
// EXTERNAL MODULE: ./node_modules/xstate/es/constants.js
var constants = __webpack_require__(11231);
// EXTERNAL MODULE: ./node_modules/xstate/es/stateUtils.js
var stateUtils = __webpack_require__(92002);
// EXTERNAL MODULE: ./node_modules/xstate/es/Actor.js
var Actor = __webpack_require__(82418);
;// CONCATENATED MODULE: ./node_modules/xstate/es/invokeUtils.js






function toInvokeSource(src) {
  if (typeof src === 'string') {
    var simpleSrc = {
      type: src
    };

    simpleSrc.toString = function () {
      return src;
    }; // v4 compat - TODO: remove in v5


    return simpleSrc;
  }

  return src;
}
function toInvokeDefinition(invokeConfig) {
  return (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({
    type: actionTypes/* invoke */.dw
  }, invokeConfig), {
    toJSON: function () {
      invokeConfig.onDone;
          invokeConfig.onError;
          var invokeDef = (0,_tslib/* __rest */._T)(invokeConfig, ["onDone", "onError"]);

      return (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, invokeDef), {
        type: actionTypes/* invoke */.dw,
        src: toInvokeSource(invokeConfig.src)
      });
    }
  });
}



;// CONCATENATED MODULE: ./node_modules/xstate/es/StateNode.js












var NULL_EVENT = '';
var STATE_IDENTIFIER = '#';
var WILDCARD = '*';
var EMPTY_OBJECT = {};

var isStateId = function (str) {
  return str[0] === STATE_IDENTIFIER;
};

var createDefaultOptions = function () {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
};

var validateArrayifiedTransitions = function (stateNode, event, transitions) {
  var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function (transition) {
    return !('cond' in transition) && !('in' in transition) && ((0,utils/* isString */.HD)(transition.target) || (0,utils/* isMachine */.O4)(transition.target));
  });
  var eventText = event === NULL_EVENT ? 'the transient event' : "event '".concat(event, "'");
  (0,utils/* warn */.ZK)(!hasNonLastUnguardedTarget, "One or more transitions for ".concat(eventText, " on state '").concat(stateNode.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
};

var StateNode =
/*#__PURE__*/

/** @class */
function () {
  function StateNode(
  /**
   * The raw config used to create the machine.
   */
  config, options,
  /**
   * The initial extended state
   */
  _context, // TODO: this is unsafe, but we're removing it in v5 anyway
  _stateInfo) {
    if (_context === void 0) {
      _context = 'context' in config ? config.context : undefined;
    }

    var _this = this;

    var _a;

    this.config = config;
    this._context = _context;
    /**
     * The order this state node appears. Corresponds to the implicit SCXML document order.
     */

    this.order = -1;
    this.__xstatenode = true;
    this.__cache = {
      events: undefined,
      relativeValue: new Map(),
      initialStateValue: undefined,
      initialState: undefined,
      on: undefined,
      transitions: undefined,
      candidates: {},
      delayedTransitions: undefined
    };
    this.idMap = {};
    this.tags = [];
    this.options = Object.assign(createDefaultOptions(), options);
    this.parent = _stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.parent;
    this.key = this.config.key || (_stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.key) || this.config.id || '(machine)';
    this.machine = this.parent ? this.parent.machine : this;
    this.path = this.parent ? this.parent.path.concat(this.key) : [];
    this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : constants/* STATE_DELIMITER */.iS);
    this.id = this.config.id || (0,_tslib/* __spreadArray */.ev)([this.machine.key], (0,_tslib/* __read */.CR)(this.path), false).join(this.delimiter);
    this.version = this.parent ? this.parent.version : this.config.version;
    this.type = this.config.type || (this.config.parallel ? 'parallel' : this.config.states && Object.keys(this.config.states).length ? 'compound' : this.config.history ? 'history' : 'atomic');
    this.schema = this.parent ? this.machine.schema : (_a = this.config.schema) !== null && _a !== void 0 ? _a : {};
    this.description = this.config.description;

    if (!environment/* IS_PRODUCTION */.M) {
      (0,utils/* warn */.ZK)(!('parallel' in this.config), "The \"parallel\" property is deprecated and will be removed in version 4.1. ".concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead."));
    }

    this.initial = this.config.initial;
    this.states = this.config.states ? (0,utils/* mapValues */.Q8)(this.config.states, function (stateConfig, key) {
      var _a;

      var stateNode = new StateNode(stateConfig, {}, undefined, {
        parent: _this,
        key: key
      });
      Object.assign(_this.idMap, (0,_tslib/* __assign */.pi)((_a = {}, _a[stateNode.id] = stateNode, _a), stateNode.idMap));
      return stateNode;
    }) : EMPTY_OBJECT; // Document order

    var order = 0;

    function dfs(stateNode) {
      var e_1, _a;

      stateNode.order = order++;

      try {
        for (var _b = (0,_tslib/* __values */.XA)((0,stateUtils/* getAllChildren */.nI)(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          dfs(child);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    dfs(this); // History config

    this.history = this.config.history === true ? 'shallow' : this.config.history || false;
    this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function (_a) {
      var event = _a.event;
      return event === NULL_EVENT;
    }) : NULL_EVENT in this.config.on);
    this.strict = !!this.config.strict; // TODO: deprecate (entry)

    this.onEntry = (0,utils/* toArray */.qo)(this.config.entry || this.config.onEntry).map(function (action) {
      return (0,es_actions/* toActionObject */.Q8)(action);
    }); // TODO: deprecate (exit)

    this.onExit = (0,utils/* toArray */.qo)(this.config.exit || this.config.onExit).map(function (action) {
      return (0,es_actions/* toActionObject */.Q8)(action);
    });
    this.meta = this.config.meta;
    this.doneData = this.type === 'final' ? this.config.data : undefined;
    this.invoke = (0,utils/* toArray */.qo)(this.config.invoke).map(function (invokeConfig, i) {
      var _a, _b;

      if ((0,utils/* isMachine */.O4)(invokeConfig)) {
        var invokeId = (0,utils/* createInvokeId */.bx)(_this.id, i);
        _this.machine.options.services = (0,_tslib/* __assign */.pi)((_a = {}, _a[invokeId] = invokeConfig, _a), _this.machine.options.services);
        return toInvokeDefinition({
          src: invokeId,
          id: invokeId
        });
      } else if ((0,utils/* isString */.HD)(invokeConfig.src)) {
        var invokeId = invokeConfig.id || (0,utils/* createInvokeId */.bx)(_this.id, i);
        return toInvokeDefinition((0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, invokeConfig), {
          id: invokeId,
          src: invokeConfig.src
        }));
      } else if ((0,utils/* isMachine */.O4)(invokeConfig.src) || (0,utils/* isFunction */.mf)(invokeConfig.src)) {
        var invokeId = invokeConfig.id || (0,utils/* createInvokeId */.bx)(_this.id, i);
        _this.machine.options.services = (0,_tslib/* __assign */.pi)((_b = {}, _b[invokeId] = invokeConfig.src, _b), _this.machine.options.services);
        return toInvokeDefinition((0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({
          id: invokeId
        }, invokeConfig), {
          src: invokeId
        }));
      } else {
        var invokeSource = invokeConfig.src;
        return toInvokeDefinition((0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({
          id: (0,utils/* createInvokeId */.bx)(_this.id, i)
        }, invokeConfig), {
          src: invokeSource
        }));
      }
    });
    this.activities = (0,utils/* toArray */.qo)(this.config.activities).concat(this.invoke).map(function (activity) {
      return (0,es_actions/* toActivityDefinition */.XA)(activity);
    });
    this.transition = this.transition.bind(this);
    this.tags = (0,utils/* toArray */.qo)(this.config.tags); // TODO: this is the real fix for initialization once
    // state node getters are deprecated
    // if (!this.parent) {
    //   this._init();
    // }
  }

  StateNode.prototype._init = function () {
    if (this.__cache.transitions) {
      return;
    }

    (0,stateUtils/* getAllStateNodes */.ac)(this).forEach(function (stateNode) {
      return stateNode.on;
    });
  };
  /**
   * Clones this state machine with custom options and context.
   *
   * @param options Options (actions, guards, activities, services) to recursively merge with the existing options.
   * @param context Custom context (will override predefined context)
   */


  StateNode.prototype.withConfig = function (options, context) {
    var _a = this.options,
        actions = _a.actions,
        activities = _a.activities,
        guards = _a.guards,
        services = _a.services,
        delays = _a.delays;
    return new StateNode(this.config, {
      actions: (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, actions), options.actions),
      activities: (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, activities), options.activities),
      guards: (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, guards), options.guards),
      services: (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, services), options.services),
      delays: (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, delays), options.delays)
    }, context !== null && context !== void 0 ? context : this.context);
  };
  /**
   * Clones this state machine with custom context.
   *
   * @param context Custom context (will override predefined context, not recursive)
   */


  StateNode.prototype.withContext = function (context) {
    return new StateNode(this.config, this.options, context);
  };

  Object.defineProperty(StateNode.prototype, "context", {
    get: function () {
      return (0,utils/* isFunction */.mf)(this._context) ? this._context() : this._context;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "definition", {
    /**
     * The well-structured state node definition.
     */
    get: function () {
      return {
        id: this.id,
        key: this.key,
        version: this.version,
        context: this.context,
        type: this.type,
        initial: this.initial,
        history: this.history,
        states: (0,utils/* mapValues */.Q8)(this.states, function (state) {
          return state.definition;
        }),
        on: this.on,
        transitions: this.transitions,
        entry: this.onEntry,
        exit: this.onExit,
        activities: this.activities || [],
        meta: this.meta,
        order: this.order || -1,
        data: this.doneData,
        invoke: this.invoke,
        description: this.description,
        tags: this.tags
      };
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.toJSON = function () {
    return this.definition;
  };

  Object.defineProperty(StateNode.prototype, "on", {
    /**
     * The mapping of events to transitions.
     */
    get: function () {
      if (this.__cache.on) {
        return this.__cache.on;
      }

      var transitions = this.transitions;
      return this.__cache.on = transitions.reduce(function (map, transition) {
        map[transition.eventType] = map[transition.eventType] || [];
        map[transition.eventType].push(transition);
        return map;
      }, {});
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "after", {
    get: function () {
      return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "transitions", {
    /**
     * All the transitions that can be taken from this state node.
     */
    get: function () {
      return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.getCandidates = function (eventName) {
    if (this.__cache.candidates[eventName]) {
      return this.__cache.candidates[eventName];
    }

    var transient = eventName === NULL_EVENT;
    var candidates = this.transitions.filter(function (transition) {
      var sameEventType = transition.eventType === eventName; // null events should only match against eventless transitions

      return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
    });
    this.__cache.candidates[eventName] = candidates;
    return candidates;
  };
  /**
   * All delayed transitions from the config.
   */


  StateNode.prototype.getDelayedTransitions = function () {
    var _this = this;

    var afterConfig = this.config.after;

    if (!afterConfig) {
      return [];
    }

    var mutateEntryExit = function (delay, i) {
      var delayRef = (0,utils/* isFunction */.mf)(delay) ? "".concat(_this.id, ":delay[").concat(i, "]") : delay;
      var eventType = (0,es_actions/* after */.e4)(delayRef, _this.id);

      _this.onEntry.push((0,es_actions/* send */.lW)(eventType, {
        delay: delay
      }));

      _this.onExit.push((0,es_actions/* cancel */.al)(eventType));

      return eventType;
    };

    var delayedTransitions = (0,utils/* isArray */.kJ)(afterConfig) ? afterConfig.map(function (transition, i) {
      var eventType = mutateEntryExit(transition.delay, i);
      return (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, transition), {
        event: eventType
      });
    }) : (0,utils/* flatten */.xH)(Object.keys(afterConfig).map(function (delay, i) {
      var configTransition = afterConfig[delay];
      var resolvedTransition = (0,utils/* isString */.HD)(configTransition) ? {
        target: configTransition
      } : configTransition;
      var resolvedDelay = !isNaN(+delay) ? +delay : delay;
      var eventType = mutateEntryExit(resolvedDelay, i);
      return (0,utils/* toArray */.qo)(resolvedTransition).map(function (transition) {
        return (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, transition), {
          event: eventType,
          delay: resolvedDelay
        });
      });
    }));
    return delayedTransitions.map(function (delayedTransition) {
      var delay = delayedTransition.delay;
      return (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, _this.formatTransition(delayedTransition)), {
        delay: delay
      });
    });
  };
  /**
   * Returns the state nodes represented by the current state value.
   *
   * @param state The state value or State instance
   */


  StateNode.prototype.getStateNodes = function (state) {
    var _a;

    var _this = this;

    if (!state) {
      return [];
    }

    var stateValue = state instanceof State/* State */.ZM ? state.value : (0,utils/* toStateValue */.WM)(state, this.delimiter);

    if ((0,utils/* isString */.HD)(stateValue)) {
      var initialStateValue = this.getStateNode(stateValue).initial;
      return initialStateValue !== undefined ? this.getStateNodes((_a = {}, _a[stateValue] = initialStateValue, _a)) : [this, this.states[stateValue]];
    }

    var subStateKeys = Object.keys(stateValue);
    var subStateNodes = [this];
    subStateNodes.push.apply(subStateNodes, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)((0,utils/* flatten */.xH)(subStateKeys.map(function (subStateKey) {
      return _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);
    }))), false));
    return subStateNodes;
  };
  /**
   * Returns `true` if this state node explicitly handles the given event.
   *
   * @param event The event in question
   */


  StateNode.prototype.handles = function (event) {
    var eventType = (0,utils/* getEventType */.x6)(event);
    return this.events.includes(eventType);
  };
  /**
   * Resolves the given `state` to a new `State` instance relative to this machine.
   *
   * This ensures that `.events` and `.nextEvents` represent the correct values.
   *
   * @param state The state to resolve
   */


  StateNode.prototype.resolveState = function (state) {
    var stateFromConfig = state instanceof State/* State */.ZM ? state : State/* State.create */.ZM.create(state);
    var configuration = Array.from((0,stateUtils/* getConfiguration */.P_)([], this.getStateNodes(stateFromConfig.value)));
    return new State/* State */.ZM((0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, stateFromConfig), {
      value: this.resolve(stateFromConfig.value),
      configuration: configuration,
      done: (0,stateUtils/* isInFinalState */.Ij)(configuration, this),
      tags: (0,stateUtils/* getTagsFromConfiguration */.Oe)(configuration),
      machine: this.machine
    }));
  };

  StateNode.prototype.transitionLeafNode = function (stateValue, state, _event) {
    var stateNode = this.getStateNode(stateValue);
    var next = stateNode.next(state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionCompoundNode = function (stateValue, state, _event) {
    var subStateKeys = Object.keys(stateValue);
    var stateNode = this.getStateNode(subStateKeys[0]);

    var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionParallelNode = function (stateValue, state, _event) {
    var e_2, _a;

    var transitionMap = {};

    try {
      for (var _b = (0,_tslib/* __values */.XA)(Object.keys(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var subStateKey = _c.value;
        var subStateValue = stateValue[subStateKey];

        if (!subStateValue) {
          continue;
        }

        var subStateNode = this.getStateNode(subStateKey);

        var next = subStateNode._transition(subStateValue, state, _event);

        if (next) {
          transitionMap[subStateKey] = next;
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    var stateTransitions = Object.keys(transitionMap).map(function (key) {
      return transitionMap[key];
    });
    var enabledTransitions = (0,utils/* flatten */.xH)(stateTransitions.map(function (st) {
      return st.transitions;
    }));
    var willTransition = stateTransitions.some(function (st) {
      return st.transitions.length > 0;
    });

    if (!willTransition) {
      return this.next(state, _event);
    }

    var entryNodes = (0,utils/* flatten */.xH)(stateTransitions.map(function (t) {
      return t.entrySet;
    }));
    var configuration = (0,utils/* flatten */.xH)(Object.keys(transitionMap).map(function (key) {
      return transitionMap[key].configuration;
    }));
    return {
      transitions: enabledTransitions,
      entrySet: entryNodes,
      exitSet: (0,utils/* flatten */.xH)(stateTransitions.map(function (t) {
        return t.exitSet;
      })),
      configuration: configuration,
      source: state,
      actions: (0,utils/* flatten */.xH)(Object.keys(transitionMap).map(function (key) {
        return transitionMap[key].actions;
      }))
    };
  };

  StateNode.prototype._transition = function (stateValue, state, _event) {
    // leaf node
    if ((0,utils/* isString */.HD)(stateValue)) {
      return this.transitionLeafNode(stateValue, state, _event);
    } // hierarchical node


    if (Object.keys(stateValue).length === 1) {
      return this.transitionCompoundNode(stateValue, state, _event);
    } // orthogonal node


    return this.transitionParallelNode(stateValue, state, _event);
  };

  StateNode.prototype.getTransitionData = function (state, event) {
    return this._transition(state.value, state, (0,utils/* toSCXMLEvent */.g5)(event));
  };

  StateNode.prototype.next = function (state, _event) {
    var e_3, _a;

    var _this = this;

    var eventName = _event.name;
    var actions = [];
    var nextStateNodes = [];
    var selectedTransition;

    try {
      for (var _b = (0,_tslib/* __values */.XA)(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var candidate = _c.value;
        var cond = candidate.cond,
            stateIn = candidate.in;
        var resolvedContext = state.context;
        var isInState = stateIn ? (0,utils/* isString */.HD)(stateIn) && isStateId(stateIn) ? // Check if in state by ID
        state.matches((0,utils/* toStateValue */.WM)(this.getStateNodeById(stateIn).path, this.delimiter)) : // Check if in state by relative grandparent
        (0,utils/* matchesState */.W)((0,utils/* toStateValue */.WM)(stateIn, this.delimiter), (0,utils/* path */.ET)(this.path.slice(0, -2))(state.value)) : true;
        var guardPassed = false;

        try {
          guardPassed = !cond || (0,utils/* evaluateGuard */.vx)(this.machine, cond, resolvedContext, _event, state);
        } catch (err) {
          throw new Error("Unable to evaluate guard '".concat(cond.name || cond.type, "' in transition for event '").concat(eventName, "' in state node '").concat(this.id, "':\n").concat(err.message));
        }

        if (guardPassed && isInState) {
          if (candidate.target !== undefined) {
            nextStateNodes = candidate.target;
          }

          actions.push.apply(actions, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(candidate.actions), false));
          selectedTransition = candidate;
          break;
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    if (!selectedTransition) {
      return undefined;
    }

    if (!nextStateNodes.length) {
      return {
        transitions: [selectedTransition],
        entrySet: [],
        exitSet: [],
        configuration: state.value ? [this] : [],
        source: state,
        actions: actions
      };
    }

    var allNextStateNodes = (0,utils/* flatten */.xH)(nextStateNodes.map(function (stateNode) {
      return _this.getRelativeStateNodes(stateNode, state.historyValue);
    }));
    var isInternal = !!selectedTransition.internal;
    var reentryNodes = [];

    if (!isInternal) {
      nextStateNodes.forEach(function (targetNode) {
        reentryNodes.push.apply(reentryNodes, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(_this.getExternalReentryNodes(targetNode)), false));
      });
    }

    return {
      transitions: [selectedTransition],
      entrySet: reentryNodes,
      exitSet: isInternal ? [] : [this],
      configuration: allNextStateNodes,
      source: state,
      actions: actions
    };
  };

  StateNode.prototype.getExternalReentryNodes = function (targetNode) {
    var nodes = [];

    var _a = (0,_tslib/* __read */.CR)(targetNode.order > this.order ? [targetNode, this] : [this, targetNode], 2),
        marker = _a[0],
        possibleAncestor = _a[1];

    while (marker && marker !== possibleAncestor) {
      nodes.push(marker);
      marker = marker.parent;
    }

    if (marker !== possibleAncestor) {
      // we never got to `possibleAncestor`, therefore the initial `marker` "escapes" it
      // it's in a different part of the tree so no states will be reentered for such an external transition
      return [];
    }

    nodes.push(possibleAncestor);
    return nodes;
  };

  StateNode.prototype.getActions = function (resolvedConfig, isDone, transition, currentContext, _event, prevState, predictableExec) {
    var e_4, _a, e_5, _b;

    var _this = this;

    var prevConfig = (0,stateUtils/* getConfiguration */.P_)([], prevState ? this.getStateNodes(prevState.value) : [this]);

    try {
      for (var resolvedConfig_1 = (0,_tslib/* __values */.XA)(resolvedConfig), resolvedConfig_1_1 = resolvedConfig_1.next(); !resolvedConfig_1_1.done; resolvedConfig_1_1 = resolvedConfig_1.next()) {
        var sn = resolvedConfig_1_1.value;

        if (!(0,stateUtils/* has */.e$)(prevConfig, sn) || (0,stateUtils/* has */.e$)(transition.entrySet, sn.parent)) {
          transition.entrySet.push(sn);
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (resolvedConfig_1_1 && !resolvedConfig_1_1.done && (_a = resolvedConfig_1.return)) _a.call(resolvedConfig_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    try {
      for (var prevConfig_1 = (0,_tslib/* __values */.XA)(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
        var sn = prevConfig_1_1.value;

        if (!(0,stateUtils/* has */.e$)(resolvedConfig, sn) || (0,stateUtils/* has */.e$)(transition.exitSet, sn.parent)) {
          transition.exitSet.push(sn);
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return)) _b.call(prevConfig_1);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    var doneEvents = (0,utils/* flatten */.xH)(transition.entrySet.map(function (sn) {
      var events = [];

      if (sn.type !== 'final') {
        return events;
      }

      var parent = sn.parent;

      if (!parent.parent) {
        return events;
      }

      events.push((0,es_actions/* done */.aT)(sn.id, sn.doneData), // TODO: deprecate - final states should not emit done events for their own state.
      (0,es_actions/* done */.aT)(parent.id, sn.doneData ? (0,utils/* mapContext */.QX)(sn.doneData, currentContext, _event) : undefined));
      var grandparent = parent.parent;

      if (grandparent.type === 'parallel') {
        if ((0,stateUtils/* getChildren */.G)(grandparent).every(function (parentNode) {
          return (0,stateUtils/* isInFinalState */.Ij)(transition.configuration, parentNode);
        })) {
          events.push((0,es_actions/* done */.aT)(grandparent.id));
        }
      }

      return events;
    }));
    transition.exitSet.sort(function (a, b) {
      return b.order - a.order;
    });
    transition.entrySet.sort(function (a, b) {
      return a.order - b.order;
    });
    var entryStates = new Set(transition.entrySet);
    var exitStates = new Set(transition.exitSet);
    var entryActions = Array.from(entryStates).map(function (stateNode) {
      var entryActions = stateNode.onEntry;
      var invokeActions = stateNode.activities.map(function (activity) {
        return (0,es_actions/* start */.BL)(activity);
      });
      return (0,es_actions/* toActionObjects */.AE)(predictableExec ? (0,_tslib/* __spreadArray */.ev)((0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(entryActions), false), (0,_tslib/* __read */.CR)(invokeActions), false) : (0,_tslib/* __spreadArray */.ev)((0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(invokeActions), false), (0,_tslib/* __read */.CR)(entryActions), false), _this.machine.options.actions);
    }).concat([doneEvents.map(es_actions/* raise */.OU)]);
    var exitActions = Array.from(exitStates).map(function (stateNode) {
      return (0,es_actions/* toActionObjects */.AE)((0,_tslib/* __spreadArray */.ev)((0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(stateNode.onExit), false), (0,_tslib/* __read */.CR)(stateNode.activities.map(function (activity) {
        return (0,es_actions/* stop */.sT)(activity);
      })), false), _this.machine.options.actions);
    });
    var actions = exitActions.concat([(0,es_actions/* toActionObjects */.AE)(transition.actions, this.machine.options.actions)]).concat(entryActions);

    if (isDone) {
      var stopActions = (0,es_actions/* toActionObjects */.AE)((0,utils/* flatten */.xH)((0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(resolvedConfig), false).sort(function (a, b) {
        return b.order - a.order;
      }).map(function (stateNode) {
        return stateNode.onExit;
      })), this.machine.options.actions).filter(function (action) {
        return action.type !== actionTypes/* raise */.OU && (action.type !== actionTypes/* send */.lW || !!action.to && action.to !== types/* SpecialTargets.Internal */.K.Internal);
      });
      return actions.concat([stopActions]);
    }

    return actions;
  };
  /**
   * Determines the next state given the current `state` and sent `event`.
   *
   * @param state The current State instance or state value
   * @param event The event that was sent at the current state
   * @param context The current context (extended state) of the current state
   */


  StateNode.prototype.transition = function (state, event, context, exec) {
    if (state === void 0) {
      state = this.initialState;
    }

    var _event = (0,utils/* toSCXMLEvent */.g5)(event);

    var currentState;

    if (state instanceof State/* State */.ZM) {
      currentState = context === undefined ? state : this.resolveState(State/* State.from */.ZM.from(state, context));
    } else {
      var resolvedStateValue = (0,utils/* isString */.HD)(state) ? this.resolve((0,utils/* pathToStateValue */.on)(this.getResolvedPath(state))) : this.resolve(state);
      var resolvedContext = context !== null && context !== void 0 ? context : this.machine.context;
      currentState = this.resolveState(State/* State.from */.ZM.from(resolvedStateValue, resolvedContext));
    }

    if (!environment/* IS_PRODUCTION */.M && _event.name === WILDCARD) {
      throw new Error("An event cannot have the wildcard type ('".concat(WILDCARD, "')"));
    }

    if (this.strict) {
      if (!this.events.includes(_event.name) && !(0,utils/* isBuiltInEvent */.JQ)(_event.name)) {
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(_event.name, "'"));
      }
    }

    var stateTransition = this._transition(currentState.value, currentState, _event) || {
      transitions: [],
      configuration: [],
      entrySet: [],
      exitSet: [],
      source: currentState,
      actions: []
    };
    var prevConfig = (0,stateUtils/* getConfiguration */.P_)([], this.getStateNodes(currentState.value));
    var resolvedConfig = stateTransition.configuration.length ? (0,stateUtils/* getConfiguration */.P_)(prevConfig, stateTransition.configuration) : prevConfig;
    stateTransition.configuration = (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(resolvedConfig), false);
    return this.resolveTransition(stateTransition, currentState, currentState.context, exec, _event);
  };

  StateNode.prototype.resolveRaisedTransition = function (state, _event, originalEvent, predictableExec) {
    var _a;

    var currentActions = state.actions;
    state = this.transition(state, _event, undefined, predictableExec); // Save original event to state
    // TODO: this should be the raised event! Delete in V5 (breaking)

    state._event = originalEvent;
    state.event = originalEvent.data;

    (_a = state.actions).unshift.apply(_a, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(currentActions), false));

    return state;
  };

  StateNode.prototype.resolveTransition = function (stateTransition, currentState, context, predictableExec, _event) {
    var e_6, _a, e_7, _b;

    var _this = this;

    if (_event === void 0) {
      _event = es_actions/* initEvent */.bf;
    }

    var configuration = stateTransition.configuration; // Transition will "apply" if:
    // - this is the initial state (there is no current state)
    // - OR there are transitions

    var willTransition = !currentState || stateTransition.transitions.length > 0;
    var resolvedConfiguration = willTransition ? stateTransition.configuration : currentState ? currentState.configuration : [];
    var isDone = (0,stateUtils/* isInFinalState */.Ij)(resolvedConfiguration, this);
    var resolvedStateValue = willTransition ? (0,stateUtils/* getValue */.NA)(this.machine, configuration) : undefined;
    var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : undefined : undefined;
    var actionBlocks = this.getActions(new Set(resolvedConfiguration), isDone, stateTransition, context, _event, currentState, predictableExec);
    var activities = currentState ? (0,_tslib/* __assign */.pi)({}, currentState.activities) : {};

    try {
      for (var actionBlocks_1 = (0,_tslib/* __values */.XA)(actionBlocks), actionBlocks_1_1 = actionBlocks_1.next(); !actionBlocks_1_1.done; actionBlocks_1_1 = actionBlocks_1.next()) {
        var block = actionBlocks_1_1.value;

        try {
          for (var block_1 = (e_7 = void 0, (0,_tslib/* __values */.XA)(block)), block_1_1 = block_1.next(); !block_1_1.done; block_1_1 = block_1.next()) {
            var action = block_1_1.value;

            if (action.type === actionTypes/* start */.BL) {
              activities[action.activity.id || action.activity.type] = action;
            } else if (action.type === actionTypes/* stop */.sT) {
              activities[action.activity.id || action.activity.type] = false;
            }
          }
        } catch (e_7_1) {
          e_7 = {
            error: e_7_1
          };
        } finally {
          try {
            if (block_1_1 && !block_1_1.done && (_b = block_1.return)) _b.call(block_1);
          } finally {
            if (e_7) throw e_7.error;
          }
        }
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (actionBlocks_1_1 && !actionBlocks_1_1.done && (_a = actionBlocks_1.return)) _a.call(actionBlocks_1);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    var _c = (0,_tslib/* __read */.CR)((0,es_actions/* resolveActions */.yC)(this, currentState, context, _event, actionBlocks, predictableExec, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2),
        resolvedActions = _c[0],
        updatedContext = _c[1];

    var _d = (0,_tslib/* __read */.CR)((0,utils/* partition */.uK)(resolvedActions, function (action) {
      return action.type === actionTypes/* raise */.OU || action.type === actionTypes/* send */.lW && action.to === types/* SpecialTargets.Internal */.K.Internal;
    }), 2),
        raisedEvents = _d[0],
        nonRaisedActions = _d[1];

    var invokeActions = resolvedActions.filter(function (action) {
      var _a;

      return action.type === actionTypes/* start */.BL && ((_a = action.activity) === null || _a === void 0 ? void 0 : _a.type) === actionTypes/* invoke */.dw;
    });
    var children = invokeActions.reduce(function (acc, action) {
      acc[action.activity.id] = (0,Actor/* createInvocableActor */.mu)(action.activity, _this.machine, updatedContext, _event);
      return acc;
    }, currentState ? (0,_tslib/* __assign */.pi)({}, currentState.children) : {});
    var nextState = new State/* State */.ZM({
      value: resolvedStateValue || currentState.value,
      context: updatedContext,
      _event: _event,
      // Persist _sessionid between states
      _sessionid: currentState ? currentState._sessionid : null,
      historyValue: resolvedStateValue ? historyValue ? (0,utils/* updateHistoryValue */.yv)(historyValue, resolvedStateValue) : undefined : currentState ? currentState.historyValue : undefined,
      history: !resolvedStateValue || stateTransition.source ? currentState : undefined,
      actions: resolvedStateValue ? nonRaisedActions : [],
      activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
      events: [],
      configuration: resolvedConfiguration,
      transitions: stateTransition.transitions,
      children: children,
      done: isDone,
      tags: (0,stateUtils/* getTagsFromConfiguration */.Oe)(resolvedConfiguration),
      machine: this
    });
    var didUpdateContext = context !== updatedContext;
    nextState.changed = _event.name === actionTypes/* update */.Vx || didUpdateContext; // Dispose of penultimate histories to prevent memory leaks

    var history = nextState.history;

    if (history) {
      delete history.history;
    } // There are transient transitions if the machine is not in a final state
    // and if some of the state nodes have transient ("always") transitions.


    var hasAlwaysTransitions = !isDone && (this._transient || configuration.some(function (stateNode) {
      return stateNode._transient;
    })); // If there are no enabled transitions, check if there are transient transitions.
    // If there are transient transitions, continue checking for more transitions
    // because an transient transition should be triggered even if there are no
    // enabled transitions.
    //
    // If we're already working on an transient transition then stop to prevent an infinite loop.
    //
    // Otherwise, if there are no enabled nor transient transitions, we are done.

    if (!willTransition && (!hasAlwaysTransitions || _event.name === NULL_EVENT)) {
      return nextState;
    }

    var maybeNextState = nextState;

    if (!isDone) {
      if (hasAlwaysTransitions) {
        maybeNextState = this.resolveRaisedTransition(maybeNextState, {
          type: actionTypes/* nullEvent */.IA
        }, _event, predictableExec);
      }

      while (raisedEvents.length) {
        var raisedEvent = raisedEvents.shift();
        maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event, predictableExec);
      }
    } // Detect if state changed


    var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || didUpdateContext || typeof history.value !== typeof maybeNextState.value || !(0,State/* stateValuesEqual */.j_)(maybeNextState.value, history.value) : undefined);
    maybeNextState.changed = changed; // Preserve original history after raised events

    maybeNextState.history = history;
    return maybeNextState;
  };
  /**
   * Returns the child state node from its relative `stateKey`, or throws.
   */


  StateNode.prototype.getStateNode = function (stateKey) {
    if (isStateId(stateKey)) {
      return this.machine.getStateNodeById(stateKey);
    }

    if (!this.states) {
      throw new Error("Unable to retrieve child state '".concat(stateKey, "' from '").concat(this.id, "'; no child states exist."));
    }

    var result = this.states[stateKey];

    if (!result) {
      throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
    }

    return result;
  };
  /**
   * Returns the state node with the given `stateId`, or throws.
   *
   * @param stateId The state ID. The prefix "#" is removed.
   */


  StateNode.prototype.getStateNodeById = function (stateId) {
    var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;

    if (resolvedStateId === this.id) {
      return this;
    }

    var stateNode = this.machine.idMap[resolvedStateId];

    if (!stateNode) {
      throw new Error("Child state node '#".concat(resolvedStateId, "' does not exist on machine '").concat(this.id, "'"));
    }

    return stateNode;
  };
  /**
   * Returns the relative state node from the given `statePath`, or throws.
   *
   * @param statePath The string or string array relative path to the state node.
   */


  StateNode.prototype.getStateNodeByPath = function (statePath) {
    if (typeof statePath === 'string' && isStateId(statePath)) {
      try {
        return this.getStateNodeById(statePath.slice(1));
      } catch (e) {// try individual paths
        // throw e;
      }
    }

    var arrayStatePath = (0,utils/* toStatePath */.Q9)(statePath, this.delimiter).slice();
    var currentStateNode = this;

    while (arrayStatePath.length) {
      var key = arrayStatePath.shift();

      if (!key.length) {
        break;
      }

      currentStateNode = currentStateNode.getStateNode(key);
    }

    return currentStateNode;
  };
  /**
   * Resolves a partial state value with its full representation in this machine.
   *
   * @param stateValue The partial state value to resolve.
   */


  StateNode.prototype.resolve = function (stateValue) {
    var _a;

    var _this = this;

    if (!stateValue) {
      return this.initialStateValue || EMPTY_OBJECT; // TODO: type-specific properties
    }

    switch (this.type) {
      case 'parallel':
        return (0,utils/* mapValues */.Q8)(this.initialStateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
        });

      case 'compound':
        if ((0,utils/* isString */.HD)(stateValue)) {
          var subStateNode = this.getStateNode(stateValue);

          if (subStateNode.type === 'parallel' || subStateNode.type === 'compound') {
            return _a = {}, _a[stateValue] = subStateNode.initialStateValue, _a;
          }

          return stateValue;
        }

        if (!Object.keys(stateValue).length) {
          return this.initialStateValue || {};
        }

        return (0,utils/* mapValues */.Q8)(stateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
        });

      default:
        return stateValue || EMPTY_OBJECT;
    }
  };

  StateNode.prototype.getResolvedPath = function (stateIdentifier) {
    if (isStateId(stateIdentifier)) {
      var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];

      if (!stateNode) {
        throw new Error("Unable to find state node '".concat(stateIdentifier, "'"));
      }

      return stateNode.path;
    }

    return (0,utils/* toStatePath */.Q9)(stateIdentifier, this.delimiter);
  };

  Object.defineProperty(StateNode.prototype, "initialStateValue", {
    get: function () {
      var _a;

      if (this.__cache.initialStateValue) {
        return this.__cache.initialStateValue;
      }

      var initialStateValue;

      if (this.type === 'parallel') {
        initialStateValue = (0,utils/* mapFilterValues */.ib)(this.states, function (state) {
          return state.initialStateValue || EMPTY_OBJECT;
        }, function (stateNode) {
          return !(stateNode.type === 'history');
        });
      } else if (this.initial !== undefined) {
        if (!this.states[this.initial]) {
          throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
        }

        initialStateValue = (0,stateUtils/* isLeafNode */.N9)(this.states[this.initial]) ? this.initial : (_a = {}, _a[this.initial] = this.states[this.initial].initialStateValue, _a);
      } else {
        // The finite state value of a machine without child states is just an empty object
        initialStateValue = {};
      }

      this.__cache.initialStateValue = initialStateValue;
      return this.__cache.initialStateValue;
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.getInitialState = function (stateValue, context) {
    this._init(); // TODO: this should be in the constructor (see note in constructor)


    var configuration = this.getStateNodes(stateValue);
    return this.resolveTransition({
      configuration: configuration,
      entrySet: (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(configuration), false),
      exitSet: [],
      transitions: [],
      source: undefined,
      actions: []
    }, undefined, context !== null && context !== void 0 ? context : this.machine.context, undefined);
  };

  Object.defineProperty(StateNode.prototype, "initialState", {
    /**
     * The initial State instance, which includes all actions to be executed from
     * entering the initial state.
     */
    get: function () {
      var initialStateValue = this.initialStateValue;

      if (!initialStateValue) {
        throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
      }

      return this.getInitialState(initialStateValue);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "target", {
    /**
     * The target state value of the history state node, if it exists. This represents the
     * default state value to transition to if no history value exists yet.
     */
    get: function () {
      var target;

      if (this.type === 'history') {
        var historyConfig = this.config;

        if ((0,utils/* isString */.HD)(historyConfig.target)) {
          target = isStateId(historyConfig.target) ? (0,utils/* pathToStateValue */.on)(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
        } else {
          target = historyConfig.target;
        }
      }

      return target;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Returns the leaf nodes from a state path relative to this state node.
   *
   * @param relativeStateId The relative state path to retrieve the state nodes
   * @param history The previous state to retrieve history
   * @param resolve Whether state nodes should resolve to initial child state nodes
   */

  StateNode.prototype.getRelativeStateNodes = function (relativeStateId, historyValue, resolve) {
    if (resolve === void 0) {
      resolve = true;
    }

    return resolve ? relativeStateId.type === 'history' ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
  };

  Object.defineProperty(StateNode.prototype, "initialStateNodes", {
    get: function () {
      var _this = this;

      if ((0,stateUtils/* isLeafNode */.N9)(this)) {
        return [this];
      } // Case when state node is compound but no initial state is defined


      if (this.type === 'compound' && !this.initial) {
        if (!environment/* IS_PRODUCTION */.M) {
          (0,utils/* warn */.ZK)(false, "Compound state node '".concat(this.id, "' has no initial state."));
        }

        return [this];
      }

      var initialStateNodePaths = (0,utils/* toStatePaths */.SA)(this.initialStateValue);
      return (0,utils/* flatten */.xH)(initialStateNodePaths.map(function (initialPath) {
        return _this.getFromRelativePath(initialPath);
      }));
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Retrieves state nodes from a relative path to this state node.
   *
   * @param relativePath The relative path from this state node
   * @param historyValue
   */

  StateNode.prototype.getFromRelativePath = function (relativePath) {
    if (!relativePath.length) {
      return [this];
    }

    var _a = (0,_tslib/* __read */.CR)(relativePath),
        stateKey = _a[0],
        childStatePath = _a.slice(1);

    if (!this.states) {
      throw new Error("Cannot retrieve subPath '".concat(stateKey, "' from node with no states"));
    }

    var childStateNode = this.getStateNode(stateKey);

    if (childStateNode.type === 'history') {
      return childStateNode.resolveHistory();
    }

    if (!this.states[stateKey]) {
      throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
    }

    return this.states[stateKey].getFromRelativePath(childStatePath);
  };

  StateNode.prototype.historyValue = function (relativeStateValue) {
    if (!Object.keys(this.states).length) {
      return undefined;
    }

    return {
      current: relativeStateValue || this.initialStateValue,
      states: (0,utils/* mapFilterValues */.ib)(this.states, function (stateNode, key) {
        if (!relativeStateValue) {
          return stateNode.historyValue();
        }

        var subStateValue = (0,utils/* isString */.HD)(relativeStateValue) ? undefined : relativeStateValue[key];
        return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
      }, function (stateNode) {
        return !stateNode.history;
      })
    };
  };
  /**
   * Resolves to the historical value(s) of the parent state node,
   * represented by state nodes.
   *
   * @param historyValue
   */


  StateNode.prototype.resolveHistory = function (historyValue) {
    var _this = this;

    if (this.type !== 'history') {
      return [this];
    }

    var parent = this.parent;

    if (!historyValue) {
      var historyTarget = this.target;
      return historyTarget ? (0,utils/* flatten */.xH)((0,utils/* toStatePaths */.SA)(historyTarget).map(function (relativeChildPath) {
        return parent.getFromRelativePath(relativeChildPath);
      })) : parent.initialStateNodes;
    }

    var subHistoryValue = (0,utils/* nestedPath */.gk)(parent.path, 'states')(historyValue).current;

    if ((0,utils/* isString */.HD)(subHistoryValue)) {
      return [parent.getStateNode(subHistoryValue)];
    }

    return (0,utils/* flatten */.xH)((0,utils/* toStatePaths */.SA)(subHistoryValue).map(function (subStatePath) {
      return _this.history === 'deep' ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
    }));
  };

  Object.defineProperty(StateNode.prototype, "stateIds", {
    /**
     * All the state node IDs of this state node and its descendant state nodes.
     */
    get: function () {
      var _this = this;

      var childStateIds = (0,utils/* flatten */.xH)(Object.keys(this.states).map(function (stateKey) {
        return _this.states[stateKey].stateIds;
      }));
      return [this.id].concat(childStateIds);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "events", {
    /**
     * All the event types accepted by this state node and its descendants.
     */
    get: function () {
      var e_8, _a, e_9, _b;

      if (this.__cache.events) {
        return this.__cache.events;
      }

      var states = this.states;
      var events = new Set(this.ownEvents);

      if (states) {
        try {
          for (var _c = (0,_tslib/* __values */.XA)(Object.keys(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var stateId = _d.value;
            var state = states[stateId];

            if (state.states) {
              try {
                for (var _e = (e_9 = void 0, (0,_tslib/* __values */.XA)(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var event_1 = _f.value;
                  events.add("".concat(event_1));
                }
              } catch (e_9_1) {
                e_9 = {
                  error: e_9_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                } finally {
                  if (e_9) throw e_9.error;
                }
              }
            }
          }
        } catch (e_8_1) {
          e_8 = {
            error: e_8_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_8) throw e_8.error;
          }
        }
      }

      return this.__cache.events = Array.from(events);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "ownEvents", {
    /**
     * All the events that have transitions directly from this state node.
     *
     * Excludes any inert events.
     */
    get: function () {
      var events = new Set(this.transitions.filter(function (transition) {
        return !(!transition.target && !transition.actions.length && transition.internal);
      }).map(function (transition) {
        return transition.eventType;
      }));
      return Array.from(events);
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.resolveTarget = function (_target) {
    var _this = this;

    if (_target === undefined) {
      // an undefined target signals that the state node should not transition from that state when receiving that event
      return undefined;
    }

    return _target.map(function (target) {
      if (!(0,utils/* isString */.HD)(target)) {
        return target;
      }

      var isInternalTarget = target[0] === _this.delimiter; // If internal target is defined on machine,
      // do not include machine key on target

      if (isInternalTarget && !_this.parent) {
        return _this.getStateNodeByPath(target.slice(1));
      }

      var resolvedTarget = isInternalTarget ? _this.key + target : target;

      if (_this.parent) {
        try {
          var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);

          return targetStateNode;
        } catch (err) {
          throw new Error("Invalid transition definition for state node '".concat(_this.id, "':\n").concat(err.message));
        }
      } else {
        return _this.getStateNodeByPath(resolvedTarget);
      }
    });
  };

  StateNode.prototype.formatTransition = function (transitionConfig) {
    var _this = this;

    var normalizedTarget = (0,utils/* normalizeTarget */.rg)(transitionConfig.target);
    var internal = 'internal' in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function (_target) {
      return (0,utils/* isString */.HD)(_target) && _target[0] === _this.delimiter;
    }) : true;
    var guards = this.machine.options.guards;
    var target = this.resolveTarget(normalizedTarget);

    var transition = (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, transitionConfig), {
      actions: (0,es_actions/* toActionObjects */.AE)((0,utils/* toArray */.qo)(transitionConfig.actions)),
      cond: (0,utils/* toGuard */.Qi)(transitionConfig.cond, guards),
      target: target,
      source: this,
      internal: internal,
      eventType: transitionConfig.event,
      toJSON: function () {
        return (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, transition), {
          target: transition.target ? transition.target.map(function (t) {
            return "#".concat(t.id);
          }) : undefined,
          source: "#".concat(_this.id)
        });
      }
    });

    return transition;
  };

  StateNode.prototype.formatTransitions = function () {
    var e_10, _a;

    var _this = this;

    var onConfig;

    if (!this.config.on) {
      onConfig = [];
    } else if (Array.isArray(this.config.on)) {
      onConfig = this.config.on;
    } else {
      var _b = this.config.on,
          _c = WILDCARD,
          _d = _b[_c],
          wildcardConfigs = _d === void 0 ? [] : _d,
          strictTransitionConfigs_1 = (0,_tslib/* __rest */._T)(_b, [typeof _c === "symbol" ? _c : _c + ""]);

      onConfig = (0,utils/* flatten */.xH)(Object.keys(strictTransitionConfigs_1).map(function (key) {
        if (!environment/* IS_PRODUCTION */.M && key === NULL_EVENT) {
          (0,utils/* warn */.ZK)(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + "Please check the `on` configuration for \"#".concat(_this.id, "\"."));
        }

        var transitionConfigArray = (0,utils/* toTransitionConfigArray */.jh)(key, strictTransitionConfigs_1[key]);

        if (!environment/* IS_PRODUCTION */.M) {
          validateArrayifiedTransitions(_this, key, transitionConfigArray);
        }

        return transitionConfigArray;
      }).concat((0,utils/* toTransitionConfigArray */.jh)(WILDCARD, wildcardConfigs)));
    }

    var eventlessConfig = this.config.always ? (0,utils/* toTransitionConfigArray */.jh)('', this.config.always) : [];
    var doneConfig = this.config.onDone ? (0,utils/* toTransitionConfigArray */.jh)(String((0,es_actions/* done */.aT)(this.id)), this.config.onDone) : [];

    if (!environment/* IS_PRODUCTION */.M) {
      (0,utils/* warn */.ZK)(!(this.config.onDone && !this.parent), "Root nodes cannot have an \".onDone\" transition. Please check the config of \"".concat(this.id, "\"."));
    }

    var invokeConfig = (0,utils/* flatten */.xH)(this.invoke.map(function (invokeDef) {
      var settleTransitions = [];

      if (invokeDef.onDone) {
        settleTransitions.push.apply(settleTransitions, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)((0,utils/* toTransitionConfigArray */.jh)(String((0,es_actions/* doneInvoke */.Sl)(invokeDef.id)), invokeDef.onDone)), false));
      }

      if (invokeDef.onError) {
        settleTransitions.push.apply(settleTransitions, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)((0,utils/* toTransitionConfigArray */.jh)(String((0,es_actions/* error */.vU)(invokeDef.id)), invokeDef.onError)), false));
      }

      return settleTransitions;
    }));
    var delayedTransitions = this.after;
    var formattedTransitions = (0,utils/* flatten */.xH)((0,_tslib/* __spreadArray */.ev)((0,_tslib/* __spreadArray */.ev)((0,_tslib/* __spreadArray */.ev)((0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(doneConfig), false), (0,_tslib/* __read */.CR)(invokeConfig), false), (0,_tslib/* __read */.CR)(onConfig), false), (0,_tslib/* __read */.CR)(eventlessConfig), false).map(function (transitionConfig) {
      return (0,utils/* toArray */.qo)(transitionConfig).map(function (transition) {
        return _this.formatTransition(transition);
      });
    }));

    try {
      for (var delayedTransitions_1 = (0,_tslib/* __values */.XA)(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
        var delayedTransition = delayedTransitions_1_1.value;
        formattedTransitions.push(delayedTransition);
      }
    } catch (e_10_1) {
      e_10 = {
        error: e_10_1
      };
    } finally {
      try {
        if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a = delayedTransitions_1.return)) _a.call(delayedTransitions_1);
      } finally {
        if (e_10) throw e_10.error;
      }
    }

    return formattedTransitions;
  };

  return StateNode;
}();



;// CONCATENATED MODULE: ./node_modules/xstate/es/Machine.js



var warned = false;
function Machine(config, options, initialContext) {
  if (initialContext === void 0) {
    initialContext = config.context;
  }

  return new StateNode(config, options, initialContext);
}
function createMachine(config, options) {
  if (!environment/* IS_PRODUCTION */.M && !config.predictableActionArguments && !warned) {
    warned = true;
    console.warn('It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html');
  }

  return new StateNode(config, options);
}




/***/ }),

/***/ 44242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TL": () => (/* binding */ isStateConfig),
/* harmony export */   "ZM": () => (/* binding */ State),
/* harmony export */   "j1": () => (/* binding */ bindActionToState),
/* harmony export */   "j_": () => (/* binding */ stateValuesEqual)
/* harmony export */ });
/* unused harmony export isState */
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3388);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11231);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98351);
/* harmony import */ var _stateUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92002);
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11020);
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88685);







function stateValuesEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a === undefined || b === undefined) {
    return false;
  }

  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(a) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(b)) {
    return a === b;
  }

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  return aKeys.length === bKeys.length && aKeys.every(function (key) {
    return stateValuesEqual(a[key], b[key]);
  });
}
function isStateConfig(state) {
  if (typeof state !== 'object' || state === null) {
    return false;
  }

  return 'value' in state && '_event' in state;
}
/**
 * @deprecated Use `isStateConfig(object)` or `state instanceof State` instead.
 */

var isState = (/* unused pure expression or super */ null && (isStateConfig));
function bindActionToState(action, state) {
  var exec = action.exec;

  var boundAction = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, action), {
    exec: exec !== undefined ? function () {
      return exec(state.context, state.event, {
        action: action,
        state: state,
        _event: state._event
      });
    } : undefined
  });

  return boundAction;
}

var State =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new State instance.
   * @param value The state value
   * @param context The extended state
   * @param historyValue The tree representing historical values of the state nodes
   * @param history The previous state
   * @param actions An array of action objects to execute as side-effects
   * @param activities A mapping of activities and whether they are started (`true`) or stopped (`false`).
   * @param meta
   * @param events Internal event queue. Should be empty with run-to-completion semantics.
   * @param configuration
   */
  function State(config) {
    var _this = this;

    var _a;

    this.actions = [];
    this.activities = _constants_js__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_ACTIVITY_MAP */ .qP;
    this.meta = {};
    this.events = [];
    this.value = config.value;
    this.context = config.context;
    this._event = config._event;
    this._sessionid = config._sessionid;
    this.event = this._event.data;
    this.historyValue = config.historyValue;
    this.history = config.history;
    this.actions = config.actions || [];
    this.activities = config.activities || _constants_js__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_ACTIVITY_MAP */ .qP;
    this.meta = (0,_stateUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getMeta */ .xZ)(config.configuration);
    this.events = config.events || [];
    this.matches = this.matches.bind(this);
    this.toStrings = this.toStrings.bind(this);
    this.configuration = config.configuration;
    this.transitions = config.transitions;
    this.children = config.children;
    this.done = !!config.done;
    this.tags = (_a = Array.isArray(config.tags) ? new Set(config.tags) : config.tags) !== null && _a !== void 0 ? _a : new Set();
    this.machine = config.machine;
    Object.defineProperty(this, 'nextEvents', {
      get: function () {
        return (0,_stateUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .nextEvents */ .nJ)(_this.configuration);
      }
    });
  }
  /**
   * Creates a new State instance for the given `stateValue` and `context`.
   * @param stateValue
   * @param context
   */


  State.from = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (stateValue.context !== context) {
        return new State({
          value: stateValue.value,
          context: context,
          _event: stateValue._event,
          _sessionid: null,
          historyValue: stateValue.historyValue,
          history: stateValue.history,
          actions: [],
          activities: stateValue.activities,
          meta: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        });
      }

      return stateValue;
    }

    var _event = _actions_js__WEBPACK_IMPORTED_MODULE_4__/* .initEvent */ .bf;
    return new State({
      value: stateValue,
      context: context,
      _event: _event,
      _sessionid: null,
      historyValue: undefined,
      history: undefined,
      actions: [],
      activities: undefined,
      meta: undefined,
      events: [],
      configuration: [],
      transitions: [],
      children: {}
    });
  };
  /**
   * Creates a new State instance for the given `config`.
   * @param config The state config
   */


  State.create = function (config) {
    return new State(config);
  };
  /**
   * Creates a new `State` instance for the given `stateValue` and `context` with no actions (side-effects).
   * @param stateValue
   * @param context
   */


  State.inert = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (!stateValue.actions.length) {
        return stateValue;
      }

      var _event = _actions_js__WEBPACK_IMPORTED_MODULE_4__/* .initEvent */ .bf;
      return new State({
        value: stateValue.value,
        context: context,
        _event: _event,
        _sessionid: null,
        historyValue: stateValue.historyValue,
        history: stateValue.history,
        activities: stateValue.activities,
        configuration: stateValue.configuration,
        transitions: [],
        children: {}
      });
    }

    return State.from(stateValue, context);
  };
  /**
   * Returns an array of all the string leaf state node paths.
   * @param stateValue
   * @param delimiter The character(s) that separate each subpath in the string state node path.
   */


  State.prototype.toStrings = function (stateValue, delimiter) {
    var _this = this;

    if (stateValue === void 0) {
      stateValue = this.value;
    }

    if (delimiter === void 0) {
      delimiter = '.';
    }

    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(stateValue)) {
      return [stateValue];
    }

    var valueKeys = Object.keys(stateValue);
    return valueKeys.concat.apply(valueKeys, (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadArray */ .ev)([], (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__read */ .CR)(valueKeys.map(function (key) {
      return _this.toStrings(stateValue[key], delimiter).map(function (s) {
        return key + delimiter + s;
      });
    })), false));
  };

  State.prototype.toJSON = function () {
    var _a = this;
        _a.configuration;
        _a.transitions;
        var tags = _a.tags;
        _a.machine;
        var jsonValues = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__rest */ ._T)(_a, ["configuration", "transitions", "tags", "machine"]);

    return (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, jsonValues), {
      tags: Array.from(tags)
    });
  };

  State.prototype.matches = function (parentStateValue) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .matchesState */ .W)(parentStateValue, this.value);
  };
  /**
   * Whether the current state configuration has a state node with the specified `tag`.
   * @param tag
   */


  State.prototype.hasTag = function (tag) {
    return this.tags.has(tag);
  };
  /**
   * Determines whether sending the `event` will cause a non-forbidden transition
   * to be selected, even if the transitions have no actions nor
   * change the state value.
   *
   * @param event The event to test
   * @returns Whether the event will cause a transition
   */


  State.prototype.can = function (event) {
    var _a;

    if (_environment_js__WEBPACK_IMPORTED_MODULE_5__/* .IS_PRODUCTION */ .M) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .warn */ .ZK)(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    }

    var transitionData = (_a = this.machine) === null || _a === void 0 ? void 0 : _a.getTransitionData(this, event);
    return !!(transitionData === null || transitionData === void 0 ? void 0 : transitionData.transitions.length) && // Check that at least one transition is not forbidden
    transitionData.transitions.some(function (t) {
      return t.target !== undefined || t.actions.length;
    });
  };

  return State;
}();




/***/ }),

/***/ 59989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kJ": () => (/* binding */ interpret)
});

// UNUSED EXPORTS: Interpreter, InterpreterStatus, spawn

// EXTERNAL MODULE: ./node_modules/xstate/es/_virtual/_tslib.js
var _tslib = __webpack_require__(3388);
// EXTERNAL MODULE: ./node_modules/xstate/es/types.js
var types = __webpack_require__(21329);
// EXTERNAL MODULE: ./node_modules/xstate/es/State.js
var State = __webpack_require__(44242);
// EXTERNAL MODULE: ./node_modules/xstate/es/actionTypes.js
var actionTypes = __webpack_require__(80127);
// EXTERNAL MODULE: ./node_modules/xstate/es/actions.js
var actions = __webpack_require__(11020);
// EXTERNAL MODULE: ./node_modules/xstate/es/environment.js
var environment = __webpack_require__(88685);
// EXTERNAL MODULE: ./node_modules/xstate/es/utils.js
var utils = __webpack_require__(98351);
;// CONCATENATED MODULE: ./node_modules/xstate/es/scheduler.js


var defaultOptions = {
  deferEvents: false
};

var Scheduler =
/*#__PURE__*/

/** @class */
function () {
  function Scheduler(options) {
    this.processingEvent = false;
    this.queue = [];
    this.initialized = false;
    this.options = (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, defaultOptions), options);
  }

  Scheduler.prototype.initialize = function (callback) {
    this.initialized = true;

    if (callback) {
      if (!this.options.deferEvents) {
        this.schedule(callback);
        return;
      }

      this.process(callback);
    }

    this.flushEvents();
  };

  Scheduler.prototype.schedule = function (task) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(task);
      return;
    }

    if (this.queue.length !== 0) {
      throw new Error('Event queue should be empty when it is not processing events');
    }

    this.process(task);
    this.flushEvents();
  };

  Scheduler.prototype.clear = function () {
    this.queue = [];
  };

  Scheduler.prototype.flushEvents = function () {
    var nextCallback = this.queue.shift();

    while (nextCallback) {
      this.process(nextCallback);
      nextCallback = this.queue.shift();
    }
  };

  Scheduler.prototype.process = function (callback) {
    this.processingEvent = true;

    try {
      callback();
    } catch (e) {
      // there is no use to keep the future events
      // as the situation is not anymore the same
      this.clear();
      throw e;
    } finally {
      this.processingEvent = false;
    }
  };

  return Scheduler;
}();



// EXTERNAL MODULE: ./node_modules/xstate/es/Actor.js
var Actor = __webpack_require__(82418);
;// CONCATENATED MODULE: ./node_modules/xstate/es/registry.js
var children = /*#__PURE__*/new Map();
var sessionIdIndex = 0;
var registry = {
  bookId: function () {
    return "x:".concat(sessionIdIndex++);
  },
  register: function (id, actor) {
    children.set(id, actor);
    return id;
  },
  get: function (id) {
    return children.get(id);
  },
  free: function (id) {
    children.delete(id);
  }
};



;// CONCATENATED MODULE: ./node_modules/xstate/es/devTools.js


function getGlobal() {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof __webpack_require__.g !== 'undefined') {
    return __webpack_require__.g;
  }

  if (!environment/* IS_PRODUCTION */.M) {
    console.warn('XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues');
  }
}

function getDevTools() {
  var global = getGlobal();

  if (global && '__xstate__' in global) {
    return global.__xstate__;
  }

  return undefined;
}

function registerService(service) {
  if (!getGlobal()) {
    return;
  }

  var devTools = getDevTools();

  if (devTools) {
    devTools.register(service);
  }
}



// EXTERNAL MODULE: ./node_modules/xstate/es/serviceScope.js
var serviceScope = __webpack_require__(9010);
;// CONCATENATED MODULE: ./node_modules/xstate/es/behaviors.js




/**
 * Returns an actor behavior from a reducer and its initial state.
 *
 * @param transition The pure reducer that returns the next state given the current state and event.
 * @param initialState The initial state of the reducer.
 * @returns An actor behavior
 */

function fromReducer(transition, initialState) {
  return {
    transition: transition,
    initialState: initialState
  };
}
function fromPromise(promiseFn) {
  var initialState = {
    error: undefined,
    data: undefined,
    status: 'pending'
  };
  return {
    transition: function (state, event, _a) {
      var parent = _a.parent,
          id = _a.id,
          observers = _a.observers;

      switch (event.type) {
        case 'fulfill':
          parent === null || parent === void 0 ? void 0 : parent.send(doneInvoke(id, event.data));
          return {
            error: undefined,
            data: event.data,
            status: 'fulfilled'
          };

        case 'reject':
          parent === null || parent === void 0 ? void 0 : parent.send(error(id, event.error));
          observers.forEach(function (observer) {
            observer.error(event.error);
          });
          return {
            error: event.error,
            data: undefined,
            status: 'rejected'
          };

        default:
          return state;
      }
    },
    initialState: initialState,
    start: function (_a) {
      var self = _a.self;
      promiseFn().then(function (data) {
        self.send({
          type: 'fulfill',
          data: data
        });
      }, function (reason) {
        self.send({
          type: 'reject',
          error: reason
        });
      });
      return initialState;
    }
  };
}
function spawnBehavior(behavior, options) {
  if (options === void 0) {
    options = {};
  }

  var state = behavior.initialState;
  var observers = new Set();
  var mailbox = [];
  var flushing = false;

  var flush = function () {
    if (flushing) {
      return;
    }

    flushing = true;

    while (mailbox.length > 0) {
      var event_1 = mailbox.shift();
      state = behavior.transition(state, event_1, actorCtx);
      observers.forEach(function (observer) {
        return observer.next(state);
      });
    }

    flushing = false;
  };

  var actor = (0,Actor/* toActorRef */.vk)({
    id: options.id,
    send: function (event) {
      mailbox.push(event);
      flush();
    },
    getSnapshot: function () {
      return state;
    },
    subscribe: function (next, handleError, complete) {
      var observer = (0,utils/* toObserver */.zM)(next, handleError, complete);
      observers.add(observer);
      observer.next(state);
      return {
        unsubscribe: function () {
          observers.delete(observer);
        }
      };
    }
  });
  var actorCtx = {
    parent: options.parent,
    self: actor,
    id: options.id || 'anonymous',
    observers: observers
  };
  state = behavior.start ? behavior.start(actorCtx) : state;
  return actor;
}



;// CONCATENATED MODULE: ./node_modules/xstate/es/interpreter.js














var DEFAULT_SPAWN_OPTIONS = {
  sync: false,
  autoForward: false
};
var InterpreterStatus;

(function (InterpreterStatus) {
  InterpreterStatus[InterpreterStatus["NotStarted"] = 0] = "NotStarted";
  InterpreterStatus[InterpreterStatus["Running"] = 1] = "Running";
  InterpreterStatus[InterpreterStatus["Stopped"] = 2] = "Stopped";
})(InterpreterStatus || (InterpreterStatus = {}));

var Interpreter =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new Interpreter instance (i.e., service) for the given machine with the provided options, if any.
   *
   * @param machine The machine to be interpreted
   * @param options Interpreter options
   */
  function Interpreter(machine, options) {
    if (options === void 0) {
      options = Interpreter.defaultOptions;
    }

    var _this = this;

    this.machine = machine;
    this.delayedEventsMap = {};
    this.listeners = new Set();
    this.contextListeners = new Set();
    this.stopListeners = new Set();
    this.doneListeners = new Set();
    this.eventListeners = new Set();
    this.sendListeners = new Set();
    /**
     * Whether the service is started.
     */

    this.initialized = false;
    this.status = InterpreterStatus.NotStarted;
    this.children = new Map();
    this.forwardTo = new Set();
    this._outgoingQueue = [];
    /**
     * Alias for Interpreter.prototype.start
     */

    this.init = this.start;
    /**
     * Sends an event to the running interpreter to trigger a transition.
     *
     * An array of events (batched) can be sent as well, which will send all
     * batched events to the running interpreter. The listeners will be
     * notified only **once** when all events are processed.
     *
     * @param event The event(s) to send
     */

    this.send = function (event, payload) {
      if ((0,utils/* isArray */.kJ)(event)) {
        _this.batch(event);

        return _this.state;
      }

      var _event = (0,utils/* toSCXMLEvent */.g5)((0,utils/* toEventObject */._v)(event, payload));

      if (_this.status === InterpreterStatus.Stopped) {
        // do nothing
        if (!environment/* IS_PRODUCTION */.M) {
          (0,utils/* warn */.ZK)(false, "Event \"".concat(_event.name, "\" was sent to stopped service \"").concat(_this.machine.id, "\". This service has already reached its final state, and will not transition.\nEvent: ").concat(JSON.stringify(_event.data)));
        }

        return _this.state;
      }

      if (_this.status !== InterpreterStatus.Running && !_this.options.deferEvents) {
        throw new Error("Event \"".concat(_event.name, "\" was sent to uninitialized service \"").concat(_this.machine.id // tslint:disable-next-line:max-line-length
        , "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ").concat(JSON.stringify(_event.data)));
      }

      _this.scheduler.schedule(function () {
        // Forward copy of event to child actors
        _this.forward(_event);

        var nextState = _this._nextState(_event);

        _this.update(nextState, _event);
      });

      return _this._state; // TODO: deprecate (should return void)
      // tslint:disable-next-line:semicolon
    };

    this.sendTo = function (event, to, immediate) {
      var isParent = _this.parent && (to === types/* SpecialTargets.Parent */.K.Parent || _this.parent.id === to);
      var target = isParent ? _this.parent : (0,utils/* isString */.HD)(to) ? _this.children.get(to) || registry.get(to) : (0,utils/* isActor */.Bc)(to) ? to : undefined;

      if (!target) {
        if (!isParent) {
          throw new Error("Unable to send event to child '".concat(to, "' from service '").concat(_this.id, "'."));
        } // tslint:disable-next-line:no-console


        if (!environment/* IS_PRODUCTION */.M) {
          (0,utils/* warn */.ZK)(false, "Service '".concat(_this.id, "' has no parent: unable to send event ").concat(event.type));
        }

        return;
      }

      if ('machine' in target) {
        // perhaps those events should be rejected in the parent
        // but atm it doesn't have easy access to all of the information that is required to do it reliably
        if (_this.status !== InterpreterStatus.Stopped || _this.parent !== target || // we need to send events to the parent from exit handlers of a machine that reached its final state
        _this.state.done) {
          // Send SCXML events to machines
          var scxmlEvent = (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, event), {
            name: event.name === actionTypes/* error */.vU ? "".concat((0,actions/* error */.vU)(_this.id)) : event.name,
            origin: _this.sessionId
          });

          if (!immediate && _this.machine.config.predictableActionArguments) {
            _this._outgoingQueue.push([target, scxmlEvent]);
          } else {
            target.send(scxmlEvent);
          }
        }
      } else {
        // Send normal events to other targets
        if (!immediate && _this.machine.config.predictableActionArguments) {
          _this._outgoingQueue.push([target, event.data]);
        } else {
          target.send(event.data);
        }
      }
    };

    this._exec = function (action, context, _event, actionFunctionMap) {
      if (actionFunctionMap === void 0) {
        actionFunctionMap = _this.machine.options.actions;
      }

      var actionOrExec = action.exec || (0,actions/* getActionFunction */.o$)(action.type, actionFunctionMap);
      var exec = (0,utils/* isFunction */.mf)(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;

      if (exec) {
        try {
          return exec(context, _event.data, !_this.machine.config.predictableActionArguments ? {
            action: action,
            state: _this.state,
            _event: _event
          } : {
            action: action,
            _event: _event
          });
        } catch (err) {
          if (_this.parent) {
            _this.parent.send({
              type: 'xstate.error',
              data: err
            });
          }

          throw err;
        }
      }

      switch (action.type) {
        case actionTypes/* send */.lW:
          var sendAction = action;

          if (typeof sendAction.delay === 'number') {
            _this.defer(sendAction);

            return;
          } else {
            if (sendAction.to) {
              _this.sendTo(sendAction._event, sendAction.to, _event === actions/* initEvent */.bf);
            } else {
              _this.send(sendAction._event);
            }
          }

          break;

        case actionTypes/* cancel */.al:
          _this.cancel(action.sendId);

          break;

        case actionTypes/* start */.BL:
          {
            if (_this.status !== InterpreterStatus.Running) {
              return;
            }

            var activity = action.activity; // If the activity will be stopped right after it's started
            // (such as in transient states)
            // don't bother starting the activity.

            if ( // in v4 with `predictableActionArguments` invokes are called eagerly when the `this.state` still points to the previous state
            !_this.machine.config.predictableActionArguments && !_this.state.activities[activity.id || activity.type]) {
              break;
            } // Invoked services


            if (activity.type === types/* ActionTypes.Invoke */.M.Invoke) {
              var invokeSource = (0,utils/* toInvokeSource */.j)(activity.src);
              var serviceCreator = _this.machine.options.services ? _this.machine.options.services[invokeSource.type] : undefined;
              var id = activity.id,
                  data = activity.data;

              if (!environment/* IS_PRODUCTION */.M) {
                (0,utils/* warn */.ZK)(!('forward' in activity), // tslint:disable-next-line:max-line-length
                "`forward` property is deprecated (found in invocation of '".concat(activity.src, "' in in machine '").concat(_this.machine.id, "'). ") + "Please use `autoForward` instead.");
              }

              var autoForward = 'autoForward' in activity ? activity.autoForward : !!activity.forward;

              if (!serviceCreator) {
                // tslint:disable-next-line:no-console
                if (!environment/* IS_PRODUCTION */.M) {
                  (0,utils/* warn */.ZK)(false, "No service found for invocation '".concat(activity.src, "' in machine '").concat(_this.machine.id, "'."));
                }

                return;
              }

              var resolvedData = data ? (0,utils/* mapContext */.QX)(data, context, _event) : undefined;

              if (typeof serviceCreator === 'string') {
                // TODO: warn
                return;
              }

              var source = (0,utils/* isFunction */.mf)(serviceCreator) ? serviceCreator(context, _event.data, {
                data: resolvedData,
                src: invokeSource,
                meta: activity.meta
              }) : serviceCreator;

              if (!source) {
                // TODO: warn?
                return;
              }

              var options = void 0;

              if ((0,utils/* isMachine */.O4)(source)) {
                source = resolvedData ? source.withContext(resolvedData) : source;
                options = {
                  autoForward: autoForward
                };
              }

              _this.spawn(source, id, options);
            } else {
              _this.spawnActivity(activity);
            }

            break;
          }

        case actionTypes/* stop */.sT:
          {
            _this.stopChild(action.activity.id);

            break;
          }

        case actionTypes/* log */.cM:
          var label = action.label,
              value = action.value;

          if (label) {
            _this.logger(label, value);
          } else {
            _this.logger(value);
          }

          break;

        default:
          if (!environment/* IS_PRODUCTION */.M) {
            (0,utils/* warn */.ZK)(false, "No implementation found for action type '".concat(action.type, "'"));
          }

          break;
      }
    };

    var resolvedOptions = (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, Interpreter.defaultOptions), options);

    var clock = resolvedOptions.clock,
        logger = resolvedOptions.logger,
        parent = resolvedOptions.parent,
        id = resolvedOptions.id;
    var resolvedId = id !== undefined ? id : machine.id;
    this.id = resolvedId;
    this.logger = logger;
    this.clock = clock;
    this.parent = parent;
    this.options = resolvedOptions;
    this.scheduler = new Scheduler({
      deferEvents: this.options.deferEvents
    });
    this.sessionId = registry.bookId();
  }

  Object.defineProperty(Interpreter.prototype, "initialState", {
    get: function () {
      var _this = this;

      if (this._initialState) {
        return this._initialState;
      }

      return (0,serviceScope/* provide */.J)(this, function () {
        _this._initialState = _this.machine.initialState;
        return _this._initialState;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Interpreter.prototype, "state", {
    /**
     * @deprecated Use `.getSnapshot()` instead.
     */
    get: function () {
      if (!environment/* IS_PRODUCTION */.M) {
        (0,utils/* warn */.ZK)(this.status !== InterpreterStatus.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first."));
      }

      return this._state;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Executes the actions of the given state, with that state's `context` and `event`.
   *
   * @param state The state whose actions will be executed
   * @param actionsConfig The action implementations to use
   */

  Interpreter.prototype.execute = function (state, actionsConfig) {
    var e_1, _a;

    try {
      for (var _b = (0,_tslib/* __values */.XA)(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
        var action = _c.value;
        this.exec(action, state, actionsConfig);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  Interpreter.prototype.update = function (state, _event) {
    var e_2, _a, e_3, _b, e_4, _c, e_5, _d;

    var _this = this; // Attach session ID to state


    state._sessionid = this.sessionId; // Update state

    this._state = state; // Execute actions

    if ((!this.machine.config.predictableActionArguments || // this is currently required to execute initial actions as the `initialState` gets cached
    // we can't just recompute it (and execute actions while doing so) because we try to preserve identity of actors created within initial assigns
    _event === actions/* initEvent */.bf) && this.options.execute) {
      this.execute(this.state);
    } else {
      var item = void 0;

      while (item = this._outgoingQueue.shift()) {
        item[0].send(item[1]);
      }
    } // Update children


    this.children.forEach(function (child) {
      _this.state.children[child.id] = child;
    }); // Dev tools

    if (this.devTools) {
      this.devTools.send(_event.data, state);
    } // Execute listeners


    if (state.event) {
      try {
        for (var _e = (0,_tslib/* __values */.XA)(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()) {
          var listener = _f.value;
          listener(state.event);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }

    try {
      for (var _g = (0,_tslib/* __values */.XA)(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
        var listener = _h.value;
        listener(state, state.event);
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    try {
      for (var _j = (0,_tslib/* __values */.XA)(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
        var contextListener = _k.value;
        contextListener(this.state.context, this.state.history ? this.state.history.context : undefined);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    if (this.state.done) {
      // get final child state node
      var finalChildStateNode = state.configuration.find(function (sn) {
        return sn.type === 'final' && sn.parent === _this.machine;
      });
      var doneData = finalChildStateNode && finalChildStateNode.doneData ? (0,utils/* mapContext */.QX)(finalChildStateNode.doneData, state.context, _event) : undefined;

      try {
        for (var _l = (0,_tslib/* __values */.XA)(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
          var listener = _m.value;
          listener((0,actions/* doneInvoke */.Sl)(this.id, doneData));
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
        } finally {
          if (e_5) throw e_5.error;
        }
      }

      this._stop();

      this._stopChildren();
    }
  };
  /*
   * Adds a listener that is notified whenever a state transition happens. The listener is called with
   * the next state and the event object that caused the state transition.
   *
   * @param listener The state listener
   */


  Interpreter.prototype.onTransition = function (listener) {
    this.listeners.add(listener); // Send current state to listener

    if (this.status === InterpreterStatus.Running) {
      listener(this.state, this.state.event);
    }

    return this;
  };

  Interpreter.prototype.subscribe = function (nextListenerOrObserver, _, // TODO: error listener
  completeListener) {
    var _this = this;

    var observer = (0,utils/* toObserver */.zM)(nextListenerOrObserver, _, completeListener);
    this.listeners.add(observer.next); // Send current state to listener

    if (this.status !== InterpreterStatus.NotStarted) {
      observer.next(this.state);
    }

    var completeOnce = function () {
      _this.doneListeners.delete(completeOnce);

      _this.stopListeners.delete(completeOnce);

      observer.complete();
    };

    if (this.status === InterpreterStatus.Stopped) {
      observer.complete();
    } else {
      this.onDone(completeOnce);
      this.onStop(completeOnce);
    }

    return {
      unsubscribe: function () {
        _this.listeners.delete(observer.next);

        _this.doneListeners.delete(completeOnce);

        _this.stopListeners.delete(completeOnce);
      }
    };
  };
  /**
   * Adds an event listener that is notified whenever an event is sent to the running interpreter.
   * @param listener The event listener
   */


  Interpreter.prototype.onEvent = function (listener) {
    this.eventListeners.add(listener);
    return this;
  };
  /**
   * Adds an event listener that is notified whenever a `send` event occurs.
   * @param listener The event listener
   */


  Interpreter.prototype.onSend = function (listener) {
    this.sendListeners.add(listener);
    return this;
  };
  /**
   * Adds a context listener that is notified whenever the state context changes.
   * @param listener The context listener
   */


  Interpreter.prototype.onChange = function (listener) {
    this.contextListeners.add(listener);
    return this;
  };
  /**
   * Adds a listener that is notified when the machine is stopped.
   * @param listener The listener
   */


  Interpreter.prototype.onStop = function (listener) {
    this.stopListeners.add(listener);
    return this;
  };
  /**
   * Adds a state listener that is notified when the statechart has reached its final state.
   * @param listener The state listener
   */


  Interpreter.prototype.onDone = function (listener) {
    this.doneListeners.add(listener);
    return this;
  };
  /**
   * Removes a listener.
   * @param listener The listener to remove
   */


  Interpreter.prototype.off = function (listener) {
    this.listeners.delete(listener);
    this.eventListeners.delete(listener);
    this.sendListeners.delete(listener);
    this.stopListeners.delete(listener);
    this.doneListeners.delete(listener);
    this.contextListeners.delete(listener);
    return this;
  };
  /**
   * Starts the interpreter from the given state, or the initial state.
   * @param initialState The state to start the statechart from
   */


  Interpreter.prototype.start = function (initialState) {
    var _this = this;

    if (this.status === InterpreterStatus.Running) {
      // Do not restart the service if it is already started
      return this;
    } // yes, it's a hack but we need the related cache to be populated for some things to work (like delayed transitions)
    // this is usually called by `machine.getInitialState` but if we rehydrate from a state we might bypass this call
    // we also don't want to call this method here as it resolves the full initial state which might involve calling assign actions
    // and that could potentially lead to some unwanted side-effects (even such as creating some rogue actors)


    this.machine._init();

    registry.register(this.sessionId, this);
    this.initialized = true;
    this.status = InterpreterStatus.Running;
    var resolvedState = initialState === undefined ? this.initialState : (0,serviceScope/* provide */.J)(this, function () {
      return (0,State/* isStateConfig */.TL)(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(State/* State.from */.ZM.from(initialState, _this.machine.context));
    });

    if (this.options.devTools) {
      this.attachDev();
    }

    this.scheduler.initialize(function () {
      _this.update(resolvedState, actions/* initEvent */.bf);
    });
    return this;
  };

  Interpreter.prototype._stopChildren = function () {
    // TODO: think about converting those to actions
    this.children.forEach(function (child) {
      if ((0,utils/* isFunction */.mf)(child.stop)) {
        child.stop();
      }
    });
    this.children.clear();
  };

  Interpreter.prototype._stop = function () {
    var e_6, _a, e_7, _b, e_8, _c, e_9, _d, e_10, _e;

    try {
      for (var _f = (0,_tslib/* __values */.XA)(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
        var listener = _g.value;
        this.listeners.delete(listener);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    try {
      for (var _h = (0,_tslib/* __values */.XA)(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
        var listener = _j.value; // call listener, then remove

        listener();
        this.stopListeners.delete(listener);
      }
    } catch (e_7_1) {
      e_7 = {
        error: e_7_1
      };
    } finally {
      try {
        if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
      } finally {
        if (e_7) throw e_7.error;
      }
    }

    try {
      for (var _k = (0,_tslib/* __values */.XA)(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
        var listener = _l.value;
        this.contextListeners.delete(listener);
      }
    } catch (e_8_1) {
      e_8 = {
        error: e_8_1
      };
    } finally {
      try {
        if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
      } finally {
        if (e_8) throw e_8.error;
      }
    }

    try {
      for (var _m = (0,_tslib/* __values */.XA)(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
        var listener = _o.value;
        this.doneListeners.delete(listener);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
      } finally {
        if (e_9) throw e_9.error;
      }
    }

    if (!this.initialized) {
      // Interpreter already stopped; do nothing
      return this;
    }

    this.initialized = false;
    this.status = InterpreterStatus.Stopped;
    this._initialState = undefined;

    try {
      // we are going to stop within the current sync frame
      // so we can safely just cancel this here as nothing async should be fired anyway
      for (var _p = (0,_tslib/* __values */.XA)(Object.keys(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
        var key = _q.value;
        this.clock.clearTimeout(this.delayedEventsMap[key]);
      }
    } catch (e_10_1) {
      e_10 = {
        error: e_10_1
      };
    } finally {
      try {
        if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
      } finally {
        if (e_10) throw e_10.error;
      }
    } // clear everything that might be enqueued


    this.scheduler.clear();
    this.scheduler = new Scheduler({
      deferEvents: this.options.deferEvents
    });
  };
  /**
   * Stops the interpreter and unsubscribe all listeners.
   *
   * This will also notify the `onStop` listeners.
   */


  Interpreter.prototype.stop = function () {
    // TODO: add warning for stopping non-root interpreters
    var _this = this; // grab the current scheduler as it will be replaced in _stop


    var scheduler = this.scheduler;

    this._stop(); // let what is currently processed to be finished


    scheduler.schedule(function () {
      // it feels weird to handle this here but we need to handle this even slightly "out of band"
      var _event = (0,utils/* toSCXMLEvent */.g5)({
        type: 'xstate.stop'
      });

      var nextState = (0,serviceScope/* provide */.J)(_this, function () {
        var exitActions = (0,utils/* flatten */.xH)((0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(_this.state.configuration), false).sort(function (a, b) {
          return b.order - a.order;
        }).map(function (stateNode) {
          return (0,actions/* toActionObjects */.AE)(stateNode.onExit, _this.machine.options.actions);
        }));

        var _a = (0,_tslib/* __read */.CR)((0,actions/* resolveActions */.yC)(_this.machine, _this.state, _this.state.context, _event, [exitActions], _this.machine.config.predictableActionArguments ? _this._exec : undefined, _this.machine.config.predictableActionArguments || _this.machine.config.preserveActionOrder), 2),
            resolvedActions = _a[0],
            updatedContext = _a[1];

        var newState = new State/* State */.ZM({
          value: _this.state.value,
          context: updatedContext,
          _event: _event,
          _sessionid: _this.sessionId,
          historyValue: undefined,
          history: _this.state,
          actions: resolvedActions.filter(function (action) {
            return action.type !== actionTypes/* raise */.OU && (action.type !== actionTypes/* send */.lW || !!action.to && action.to !== types/* SpecialTargets.Internal */.K.Internal);
          }),
          activities: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {},
          done: _this.state.done,
          tags: _this.state.tags,
          machine: _this.machine
        });
        newState.changed = true;
        return newState;
      });

      _this.update(nextState, _event);

      _this._stopChildren();

      registry.free(_this.sessionId);
    });
    return this;
  };

  Interpreter.prototype.batch = function (events) {
    var _this = this;

    if (this.status === InterpreterStatus.NotStarted && this.options.deferEvents) {
      // tslint:disable-next-line:no-console
      if (!environment/* IS_PRODUCTION */.M) {
        (0,utils/* warn */.ZK)(false, "".concat(events.length, " event(s) were sent to uninitialized service \"").concat(this.machine.id, "\" and are deferred. Make sure .start() is called for this service.\nEvent: ").concat(JSON.stringify(event)));
      }
    } else if (this.status !== InterpreterStatus.Running) {
      throw new Error( // tslint:disable-next-line:max-line-length
      "".concat(events.length, " event(s) were sent to uninitialized service \"").concat(this.machine.id, "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options."));
    }

    if (!events.length) {
      return;
    }

    var exec = !!this.machine.config.predictableActionArguments && this._exec;
    this.scheduler.schedule(function () {
      var e_11, _a;

      var nextState = _this.state;
      var batchChanged = false;
      var batchedActions = [];

      var _loop_1 = function (event_1) {
        var _event = (0,utils/* toSCXMLEvent */.g5)(event_1);

        _this.forward(_event);

        nextState = (0,serviceScope/* provide */.J)(_this, function () {
          return _this.machine.transition(nextState, _event, undefined, exec || undefined);
        });
        batchedActions.push.apply(batchedActions, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(_this.machine.config.predictableActionArguments ? nextState.actions : nextState.actions.map(function (a) {
          return (0,State/* bindActionToState */.j1)(a, nextState);
        })), false));
        batchChanged = batchChanged || !!nextState.changed;
      };

      try {
        for (var events_1 = (0,_tslib/* __values */.XA)(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
          var event_1 = events_1_1.value;

          _loop_1(event_1);
        }
      } catch (e_11_1) {
        e_11 = {
          error: e_11_1
        };
      } finally {
        try {
          if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
        } finally {
          if (e_11) throw e_11.error;
        }
      }

      nextState.changed = batchChanged;
      nextState.actions = batchedActions;

      _this.update(nextState, (0,utils/* toSCXMLEvent */.g5)(events[events.length - 1]));
    });
  };
  /**
   * Returns a send function bound to this interpreter instance.
   *
   * @param event The event to be sent by the sender.
   */


  Interpreter.prototype.sender = function (event) {
    return this.send.bind(this, event);
  };

  Interpreter.prototype._nextState = function (event, exec) {
    var _this = this;

    if (exec === void 0) {
      exec = !!this.machine.config.predictableActionArguments && this._exec;
    }

    var _event = (0,utils/* toSCXMLEvent */.g5)(event);

    if (_event.name.indexOf(actionTypes/* errorPlatform */.Mg) === 0 && !this.state.nextEvents.some(function (nextEvent) {
      return nextEvent.indexOf(actionTypes/* errorPlatform */.Mg) === 0;
    })) {
      throw _event.data.data;
    }

    var nextState = (0,serviceScope/* provide */.J)(this, function () {
      return _this.machine.transition(_this.state, _event, undefined, exec || undefined);
    });
    return nextState;
  };
  /**
   * Returns the next state given the interpreter's current state and the event.
   *
   * This is a pure method that does _not_ update the interpreter's state.
   *
   * @param event The event to determine the next state
   */


  Interpreter.prototype.nextState = function (event) {
    return this._nextState(event, false);
  };

  Interpreter.prototype.forward = function (event) {
    var e_12, _a;

    try {
      for (var _b = (0,_tslib/* __values */.XA)(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
        var id = _c.value;
        var child = this.children.get(id);

        if (!child) {
          throw new Error("Unable to forward event '".concat(event, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(id, "'."));
        }

        child.send(event);
      }
    } catch (e_12_1) {
      e_12 = {
        error: e_12_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_12) throw e_12.error;
      }
    }
  };

  Interpreter.prototype.defer = function (sendAction) {
    var _this = this;

    this.delayedEventsMap[sendAction.id] = this.clock.setTimeout(function () {
      if (sendAction.to) {
        _this.sendTo(sendAction._event, sendAction.to, true);
      } else {
        _this.send(sendAction._event);
      }
    }, sendAction.delay);
  };

  Interpreter.prototype.cancel = function (sendId) {
    this.clock.clearTimeout(this.delayedEventsMap[sendId]);
    delete this.delayedEventsMap[sendId];
  };

  Interpreter.prototype.exec = function (action, state, actionFunctionMap) {
    if (actionFunctionMap === void 0) {
      actionFunctionMap = this.machine.options.actions;
    }

    this._exec(action, state.context, state._event, actionFunctionMap);
  };

  Interpreter.prototype.removeChild = function (childId) {
    var _a;

    this.children.delete(childId);
    this.forwardTo.delete(childId); // this.state might not exist at the time this is called,
    // such as when a child is added then removed while initializing the state

    (_a = this.state) === null || _a === void 0 ? true : delete _a.children[childId];
  };

  Interpreter.prototype.stopChild = function (childId) {
    var child = this.children.get(childId);

    if (!child) {
      return;
    }

    this.removeChild(childId);

    if ((0,utils/* isFunction */.mf)(child.stop)) {
      child.stop();
    }
  };

  Interpreter.prototype.spawn = function (entity, name, options) {
    if (this.status !== InterpreterStatus.Running) {
      return (0,Actor/* createDeferredActor */.Xg)(entity, name);
    }

    if ((0,utils/* isPromiseLike */.y8)(entity)) {
      return this.spawnPromise(Promise.resolve(entity), name);
    } else if ((0,utils/* isFunction */.mf)(entity)) {
      return this.spawnCallback(entity, name);
    } else if ((0,Actor/* isSpawnedActor */.f3)(entity)) {
      return this.spawnActor(entity, name);
    } else if ((0,utils/* isObservable */.bi)(entity)) {
      return this.spawnObservable(entity, name);
    } else if ((0,utils/* isMachine */.O4)(entity)) {
      return this.spawnMachine(entity, (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, options), {
        id: name
      }));
    } else if ((0,utils/* isBehavior */.HV)(entity)) {
      return this.spawnBehavior(entity, name);
    } else {
      throw new Error("Unable to spawn entity \"".concat(name, "\" of type \"").concat(typeof entity, "\"."));
    }
  };

  Interpreter.prototype.spawnMachine = function (machine, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    var childService = new Interpreter(machine, (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, this.options), {
      parent: this,
      id: options.id || machine.id
    }));

    var resolvedOptions = (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, DEFAULT_SPAWN_OPTIONS), options);

    if (resolvedOptions.sync) {
      childService.onTransition(function (state) {
        _this.send(actionTypes/* update */.Vx, {
          state: state,
          id: childService.id
        });
      });
    }

    var actor = childService;
    this.children.set(childService.id, actor);

    if (resolvedOptions.autoForward) {
      this.forwardTo.add(childService.id);
    }

    childService.onDone(function (doneEvent) {
      _this.removeChild(childService.id);

      _this.send((0,utils/* toSCXMLEvent */.g5)(doneEvent, {
        origin: childService.id
      }));
    }).start();
    return actor;
  };

  Interpreter.prototype.spawnBehavior = function (behavior, id) {
    var actorRef = spawnBehavior(behavior, {
      id: id,
      parent: this
    });
    this.children.set(id, actorRef);
    return actorRef;
  };

  Interpreter.prototype.spawnPromise = function (promise, id) {
    var _a;

    var _this = this;

    var canceled = false;
    var resolvedData;
    promise.then(function (response) {
      if (!canceled) {
        resolvedData = response;

        _this.removeChild(id);

        _this.send((0,utils/* toSCXMLEvent */.g5)((0,actions/* doneInvoke */.Sl)(id, response), {
          origin: id
        }));
      }
    }, function (errorData) {
      if (!canceled) {
        _this.removeChild(id);

        var errorEvent = (0,actions/* error */.vU)(id, errorData);

        try {
          // Send "error.platform.id" to this (parent).
          _this.send((0,utils/* toSCXMLEvent */.g5)(errorEvent, {
            origin: id
          }));
        } catch (error) {
          (0,utils/* reportUnhandledExceptionOnInvocation */.v4)(errorData, error, id);

          if (_this.devTools) {
            _this.devTools.send(errorEvent, _this.state);
          }

          if (_this.machine.strict) {
            // it would be better to always stop the state machine if unhandled
            // exception/promise rejection happens but because we don't want to
            // break existing code so enforce it on strict mode only especially so
            // because documentation says that onError is optional
            _this.stop();
          }
        }
      }
    });
    var actor = (_a = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function (next, handleError, complete) {
        var observer = (0,utils/* toObserver */.zM)(next, handleError, complete);
        var unsubscribed = false;
        promise.then(function (response) {
          if (unsubscribed) {
            return;
          }

          observer.next(response);

          if (unsubscribed) {
            return;
          }

          observer.complete();
        }, function (err) {
          if (unsubscribed) {
            return;
          }

          observer.error(err);
        });
        return {
          unsubscribe: function () {
            return unsubscribed = true;
          }
        };
      },
      stop: function () {
        canceled = true;
      },
      toJSON: function () {
        return {
          id: id
        };
      },
      getSnapshot: function () {
        return resolvedData;
      }
    }, _a[utils/* symbolObservable */.L$] = function () {
      return this;
    }, _a);
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnCallback = function (callback, id) {
    var _a;

    var _this = this;

    var canceled = false;
    var receivers = new Set();
    var listeners = new Set();
    var emitted;

    var receive = function (e) {
      emitted = e;
      listeners.forEach(function (listener) {
        return listener(e);
      });

      if (canceled) {
        return;
      }

      _this.send((0,utils/* toSCXMLEvent */.g5)(e, {
        origin: id
      }));
    };

    var callbackStop;

    try {
      callbackStop = callback(receive, function (newListener) {
        receivers.add(newListener);
      });
    } catch (err) {
      this.send((0,actions/* error */.vU)(id, err));
    }

    if ((0,utils/* isPromiseLike */.y8)(callbackStop)) {
      // it turned out to be an async function, can't reliably check this before calling `callback`
      // because transpiled async functions are not recognizable
      return this.spawnPromise(callbackStop, id);
    }

    var actor = (_a = {
      id: id,
      send: function (event) {
        return receivers.forEach(function (receiver) {
          return receiver(event);
        });
      },
      subscribe: function (next) {
        var observer = (0,utils/* toObserver */.zM)(next);
        listeners.add(observer.next);
        return {
          unsubscribe: function () {
            listeners.delete(observer.next);
          }
        };
      },
      stop: function () {
        canceled = true;

        if ((0,utils/* isFunction */.mf)(callbackStop)) {
          callbackStop();
        }
      },
      toJSON: function () {
        return {
          id: id
        };
      },
      getSnapshot: function () {
        return emitted;
      }
    }, _a[utils/* symbolObservable */.L$] = function () {
      return this;
    }, _a);
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnObservable = function (source, id) {
    var _a;

    var _this = this;

    var emitted;
    var subscription = source.subscribe(function (value) {
      emitted = value;

      _this.send((0,utils/* toSCXMLEvent */.g5)(value, {
        origin: id
      }));
    }, function (err) {
      _this.removeChild(id);

      _this.send((0,utils/* toSCXMLEvent */.g5)((0,actions/* error */.vU)(id, err), {
        origin: id
      }));
    }, function () {
      _this.removeChild(id);

      _this.send((0,utils/* toSCXMLEvent */.g5)((0,actions/* doneInvoke */.Sl)(id), {
        origin: id
      }));
    });
    var actor = (_a = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function (next, handleError, complete) {
        return source.subscribe(next, handleError, complete);
      },
      stop: function () {
        return subscription.unsubscribe();
      },
      getSnapshot: function () {
        return emitted;
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    }, _a[utils/* symbolObservable */.L$] = function () {
      return this;
    }, _a);
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnActor = function (actor, name) {
    this.children.set(name, actor);
    return actor;
  };

  Interpreter.prototype.spawnActivity = function (activity) {
    var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : undefined;

    if (!implementation) {
      if (!environment/* IS_PRODUCTION */.M) {
        (0,utils/* warn */.ZK)(false, "No implementation found for activity '".concat(activity.type, "'"));
      } // tslint:disable-next-line:no-console


      return;
    } // Start implementation


    var dispose = implementation(this.state.context, activity);
    this.spawnEffect(activity.id, dispose);
  };

  Interpreter.prototype.spawnEffect = function (id, dispose) {
    var _a;

    this.children.set(id, (_a = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function () {
        return {
          unsubscribe: function () {
            return void 0;
          }
        };
      },
      stop: dispose || undefined,
      getSnapshot: function () {
        return undefined;
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    }, _a[utils/* symbolObservable */.L$] = function () {
      return this;
    }, _a));
  };

  Interpreter.prototype.attachDev = function () {
    var global = getGlobal();

    if (this.options.devTools && global) {
      if (global.__REDUX_DEVTOOLS_EXTENSION__) {
        var devToolsOptions = typeof this.options.devTools === 'object' ? this.options.devTools : undefined;
        this.devTools = global.__REDUX_DEVTOOLS_EXTENSION__.connect((0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({
          name: this.id,
          autoPause: true,
          stateSanitizer: function (state) {
            return {
              value: state.value,
              context: state.context,
              actions: state.actions
            };
          }
        }, devToolsOptions), {
          features: (0,_tslib/* __assign */.pi)({
            jump: false,
            skip: false
          }, devToolsOptions ? devToolsOptions.features : undefined)
        }), this.machine);
        this.devTools.init(this.state);
      } // add XState-specific dev tooling hook


      registerService(this);
    }
  };

  Interpreter.prototype.toJSON = function () {
    return {
      id: this.id
    };
  };

  Interpreter.prototype[utils/* symbolObservable */.L$] = function () {
    return this;
  };

  Interpreter.prototype.getSnapshot = function () {
    if (this.status === InterpreterStatus.NotStarted) {
      return this.initialState;
    }

    return this._state;
  };
  /**
   * The default interpreter options:
   *
   * - `clock` uses the global `setTimeout` and `clearTimeout` functions
   * - `logger` uses the global `console.log()` method
   */


  Interpreter.defaultOptions = {
    execute: true,
    deferEvents: true,
    clock: {
      setTimeout: function (fn, ms) {
        return setTimeout(fn, ms);
      },
      clearTimeout: function (id) {
        return clearTimeout(id);
      }
    },
    logger: /*#__PURE__*/console.log.bind(console),
    devTools: false
  };
  Interpreter.interpret = interpret;
  return Interpreter;
}();

var resolveSpawnOptions = function (nameOrOptions) {
  if (isString(nameOrOptions)) {
    return __assign(__assign({}, DEFAULT_SPAWN_OPTIONS), {
      name: nameOrOptions
    });
  }

  return __assign(__assign(__assign({}, DEFAULT_SPAWN_OPTIONS), {
    name: uniqueId()
  }), nameOrOptions);
};

function spawn(entity, nameOrOptions) {
  var resolvedOptions = resolveSpawnOptions(nameOrOptions);
  return consume(function (service) {
    if (!IS_PRODUCTION) {
      var isLazyEntity = isMachine(entity) || isFunction(entity);
      warn(!!service || isLazyEntity, "Attempted to spawn an Actor (ID: \"".concat(isMachine(entity) ? entity.id : 'undefined', "\") outside of a service. This will have no effect."));
    }

    if (service) {
      return service.spawn(entity, resolvedOptions.name, resolvedOptions);
    } else {
      return createDeferredActor(entity, resolvedOptions.name);
    }
  });
}
/**
 * Creates a new Interpreter instance for the given machine with the provided options, if any.
 *
 * @param machine The machine to interpret
 * @param options Interpreter options
 */

function interpret(machine, options) {
  var interpreter = new Interpreter(machine, options);
  return interpreter;
}




/***/ }),

/***/ 9010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ provide)
/* harmony export */ });
/* unused harmony export consume */
/**
 * Maintains a stack of the current service in scope.
 * This is used to provide the correct service to spawn().
 */
var serviceStack = [];
var provide = function (service, fn) {
  serviceStack.push(service);
  var result = fn(service);
  serviceStack.pop();
  return result;
};
var consume = function (fn) {
  return fn(serviceStack[serviceStack.length - 1]);
};




/***/ }),

/***/ 92002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getChildren),
/* harmony export */   "Ij": () => (/* binding */ isInFinalState),
/* harmony export */   "N9": () => (/* binding */ isLeafNode),
/* harmony export */   "NA": () => (/* binding */ getValue),
/* harmony export */   "Oe": () => (/* binding */ getTagsFromConfiguration),
/* harmony export */   "P_": () => (/* binding */ getConfiguration),
/* harmony export */   "ac": () => (/* binding */ getAllStateNodes),
/* harmony export */   "e$": () => (/* binding */ has),
/* harmony export */   "nI": () => (/* binding */ getAllChildren),
/* harmony export */   "nJ": () => (/* binding */ nextEvents),
/* harmony export */   "xZ": () => (/* binding */ getMeta)
/* harmony export */ });
/* unused harmony export getAdjList */
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3388);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98351);



var isLeafNode = function (stateNode) {
  return stateNode.type === 'atomic' || stateNode.type === 'final';
};
function getAllChildren(stateNode) {
  return Object.keys(stateNode.states).map(function (key) {
    return stateNode.states[key];
  });
}
function getChildren(stateNode) {
  return getAllChildren(stateNode).filter(function (sn) {
    return sn.type !== 'history';
  });
}
function getAllStateNodes(stateNode) {
  var stateNodes = [stateNode];

  if (isLeafNode(stateNode)) {
    return stateNodes;
  }

  return stateNodes.concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .flatten */ .xH)(getChildren(stateNode).map(getAllStateNodes)));
}
function getConfiguration(prevStateNodes, stateNodes) {
  var e_1, _a, e_2, _b, e_3, _c, e_4, _d;

  var prevConfiguration = new Set(prevStateNodes);
  var prevAdjList = getAdjList(prevConfiguration);
  var configuration = new Set(stateNodes);

  try {
    // add all ancestors
    for (var configuration_1 = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
      var s = configuration_1_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configuration_1_1 && !configuration_1_1.done && (_a = configuration_1.return)) _a.call(configuration_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  var adjList = getAdjList(configuration);

  try {
    // add descendants
    for (var configuration_2 = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
      var s = configuration_2_1.value; // if previously active, add existing child nodes

      if (s.type === 'compound' && (!adjList.get(s) || !adjList.get(s).length)) {
        if (prevAdjList.get(s)) {
          prevAdjList.get(s).forEach(function (sn) {
            return configuration.add(sn);
          });
        } else {
          s.initialStateNodes.forEach(function (sn) {
            return configuration.add(sn);
          });
        }
      } else {
        if (s.type === 'parallel') {
          try {
            for (var _e = (e_3 = void 0, (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()) {
              var child = _f.value;

              if (!configuration.has(child)) {
                configuration.add(child);

                if (prevAdjList.get(child)) {
                  prevAdjList.get(child).forEach(function (sn) {
                    return configuration.add(sn);
                  });
                } else {
                  child.initialStateNodes.forEach(function (sn) {
                    return configuration.add(sn);
                  });
                }
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return)) _b.call(configuration_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  try {
    // add all ancestors
    for (var configuration_3 = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
      var s = configuration_3_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return)) _d.call(configuration_3);
    } finally {
      if (e_4) throw e_4.error;
    }
  }

  return configuration;
}

function getValueFromAdj(baseNode, adjList) {
  var childStateNodes = adjList.get(baseNode);

  if (!childStateNodes) {
    return {}; // todo: fix?
  }

  if (baseNode.type === 'compound') {
    var childStateNode = childStateNodes[0];

    if (childStateNode) {
      if (isLeafNode(childStateNode)) {
        return childStateNode.key;
      }
    } else {
      return {};
    }
  }

  var stateValue = {};
  childStateNodes.forEach(function (csn) {
    stateValue[csn.key] = getValueFromAdj(csn, adjList);
  });
  return stateValue;
}

function getAdjList(configuration) {
  var e_5, _a;

  var adjList = new Map();

  try {
    for (var configuration_4 = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
      var s = configuration_4_1.value;

      if (!adjList.has(s)) {
        adjList.set(s, []);
      }

      if (s.parent) {
        if (!adjList.has(s.parent)) {
          adjList.set(s.parent, []);
        }

        adjList.get(s.parent).push(s);
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (configuration_4_1 && !configuration_4_1.done && (_a = configuration_4.return)) _a.call(configuration_4);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return adjList;
}
function getValue(rootNode, configuration) {
  var config = getConfiguration([rootNode], configuration);
  return getValueFromAdj(rootNode, getAdjList(config));
}
function has(iterable, item) {
  if (Array.isArray(iterable)) {
    return iterable.some(function (member) {
      return member === item;
    });
  }

  if (iterable instanceof Set) {
    return iterable.has(item);
  }

  return false; // TODO: fix
}
function nextEvents(configuration) {
  return (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadArray */ .ev)([], (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__read */ .CR)(new Set((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .flatten */ .xH)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadArray */ .ev)([], (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__read */ .CR)(configuration.map(function (sn) {
    return sn.ownEvents;
  })), false)))), false);
}
function isInFinalState(configuration, stateNode) {
  if (stateNode.type === 'compound') {
    return getChildren(stateNode).some(function (s) {
      return s.type === 'final' && has(configuration, s);
    });
  }

  if (stateNode.type === 'parallel') {
    return getChildren(stateNode).every(function (sn) {
      return isInFinalState(configuration, sn);
    });
  }

  return false;
}
function getMeta(configuration) {
  if (configuration === void 0) {
    configuration = [];
  }

  return configuration.reduce(function (acc, stateNode) {
    if (stateNode.meta !== undefined) {
      acc[stateNode.id] = stateNode.meta;
    }

    return acc;
  }, {});
}
function getTagsFromConfiguration(configuration) {
  return new Set((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .flatten */ .xH)(configuration.map(function (sn) {
    return sn.tags;
  })));
}




/***/ }),

/***/ 96433:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35491);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19532);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48190);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47630);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60664);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82563);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78168);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 58575:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35491);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19532);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48190);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47630);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60664);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82563);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72060);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 26813:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _applyDecoratedDescriptor)
/* harmony export */ });
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

/***/ }),

/***/ 23229:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 41114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _inheritsLoose)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ 5497:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _initializerDefineProperty)
/* harmony export */ });
function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

/***/ }),

/***/ 32380:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x0": () => (/* binding */ nanoid)
/* harmony export */ });
/* unused harmony exports customAlphabet, customRandom, random */

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [374,49,981,407,367], () => (__webpack_exec__(30838)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);