"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var apiURL = 'https://fav-prom.com/api_your_promo';
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay"),
    stagesTabs = document.querySelectorAll('.predictor__stages-item'),
    stagesBlocks = document.querySelectorAll('.stages__item'),
    stagesMatchupTabs = document.querySelectorAll('.stages__tabs-item'),
    predictorPersLeft = document.querySelector('.predictor__pers-left'),
    predictorPersRight = document.querySelector('.predictor__pers-right'),
    makePredictBtn = document.querySelector('.make-predict'),
    matchupArrowRight = document.querySelector('.stages__tabs-right'),
    matchupArrowLeft = document.querySelector('.stages__tabs-left');
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var testCounties = [{
    left: 'africa',
    right: 'africa'
  }, {
    left: 'asia',
    right: 'asia'
  }, {
    left: 'europa',
    right: 'europa'
  }, {
    left: 'ocean',
    right: 'ocean'
  }, {
    left: 'usa',
    right: 'usa'
  }];
  var loaderBtn = false;
  var locale = "en";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var activeStage = 1;
  var activeMatchup = 1;
  var predictorTabsData = [{
    stage: 1,
    activeMatchup: 1,
    score: [{
      team1: 1,
      team2: 0
    }, {
      team1: 2,
      team2: 0
    }, {
      team1: 3,
      team2: 0
    }, {
      team1: 3,
      team2: 0
    }, {
      team1: 3,
      team2: 0
    }]
  }, {
    stage: 2,
    activeMatchup: 1,
    score: [{
      team1: 1,
      team2: 0
    }, {
      team1: 2,
      team2: 0
    }, {
      team1: 3,
      team2: 0
    }, {
      team1: 3,
      team2: 0
    }, {
      team1: 3,
      team2: 0
    }]
  }, {
    stage: 3,
    activeMatchup: 1,
    score: [{
      team1: 1,
      team2: 0
    }, {
      team1: 2,
      team2: 0
    }, {
      team1: 3,
      team2: 0
    }, {
      team1: 3,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }]
  }, {
    stage: 4,
    activeMatchup: 1,
    score: [{
      team1: 1,
      team2: 0
    }, {
      team1: 2,
      team2: 0
    }, {
      team1: 3,
      team2: 0
    }, {
      team1: 3,
      team2: 0
    }]
  }, {
    stage: 5,
    activeMatchup: 1,
    score: [{
      team1: 1,
      team2: 0
    }, {
      team1: 2,
      team2: 0
    }, {
      team1: 3,
      team2: 0
    }, {
      team1: 3,
      team2: 0
    }]
  }, {
    stage: 6,
    activeMatchup: 1,
    score: [{
      team1: 1,
      team2: 0
    }, {
      team1: 2,
      team2: 0
    }]
  }, {
    stage: 7,
    activeMatchup: 1,
    score: [{
      team1: 1,
      team2: 0
    }]
  }];
  function setActiveBlocks(stage, matchup) {
    if (stage === undefined) {
      stage = 1;
    }
    if (matchup === undefined) {
      matchup = 1;
    }
    console.log(matchup);
    var activeStageTab = document.querySelector(".predictor__stages-item[data-stage=\"".concat(stage, "\"]"));
    var activeStageBlock = document.querySelector(".stages__item[data-stage=\"".concat(stage, "\"]"));
    var activeMatchups = activeStageBlock.querySelectorAll('.matchup');
    var activeMatchupTabs = activeStageBlock.querySelectorAll('.stages__tabs-item');
    var activeTeam1Counters = activeStageBlock.querySelectorAll('[data-matchup-counter="1"]');
    var activeTeam2Counters = activeStageBlock.querySelectorAll('[data-matchup-counter="2"]');
    var activeTeam1CounterNum = activeTeam1Counters[matchup - 1].querySelector('.matchup__counter-number');
    var activeTeam2CounterNum = activeTeam2Counters[matchup - 1].querySelector('.matchup__counter-number');
    //
    // console.log(activeTeam1Counters[1])
    // console.log(activeTeam1CounterNum)

    activeTeam1CounterNum.textContent = predictorTabsData[stage - 1].score[matchup - 1].team1;
    activeTeam2CounterNum.textContent = predictorTabsData[stage - 1].score[matchup - 1].team2;

    // console.log(predictorTabsData[stage - 1].score[matchup - 1])

    toggleActiveByDataAttribute(stagesTabs, 'stage', stage);
    toggleActiveByDataAttribute(stagesBlocks, 'stage', stage);
    toggleActiveByDataAttribute(activeMatchupTabs, 'matchup', matchup);
    toggleActiveByDataAttribute(activeMatchups, 'matchup', matchup);
    makePredictBtn.setAttribute('data-stage', stage);
    makePredictBtn.setAttribute('data-matchup', matchup);
  }
  var debug = true;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  var userId = null;
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              // checkUserAuth();
              setActiveBlocks(activeStage, activeMatchup);
              stagesTabs.forEach(function (tab) {
                tab.addEventListener('click', function () {
                  var _predictorPersLeft$cl, _predictorPersRight$c;
                  var regions = ['africa', 'usa', 'europa', 'ocean', 'asia'];
                  (_predictorPersLeft$cl = predictorPersLeft.classList).remove.apply(_predictorPersLeft$cl, regions);
                  (_predictorPersRight$c = predictorPersRight.classList).remove.apply(_predictorPersRight$c, regions);

                  // console.log(predictorTabsData)
                  // console.log(regions[predictorTabsData[activeStage - 1].activeMatchup])
                  // console.log(predictorTabsData[activeStage - 1].activeMatchup)

                  setStageFromTab(tab);
                  setActiveBlocks(activeStage, predictorTabsData[activeStage - 1].activeMatchup);
                  predictorPersLeft.classList.add("".concat(regions[predictorTabsData[activeStage - 1].activeMatchup - 1]));
                  predictorPersRight.classList.add("".concat(regions[predictorTabsData[activeStage - 1].activeMatchup - 1]));
                });
              });
              stagesMatchupTabs.forEach(function (tab, i) {
                tab.addEventListener('click', function () {
                  var _predictorPersLeft$cl2, _predictorPersRight$c2;
                  setMatchupFromTab(tab);
                  var regions = ['africa', 'usa', 'europa', 'ocean', 'asia'];
                  (_predictorPersLeft$cl2 = predictorPersLeft.classList).remove.apply(_predictorPersLeft$cl2, regions);
                  (_predictorPersRight$c2 = predictorPersRight.classList).remove.apply(_predictorPersRight$c2, regions);
                  predictorPersLeft.classList.add("".concat(regions[activeMatchup - 1]));
                  predictorPersRight.classList.add("".concat(regions[activeMatchup - 1]));
                  console.log(predictorTabsData[activeStage - 1].activeMatchup);
                  setActiveBlocks(activeStage, predictorTabsData[activeStage - 1].activeMatchup);
                });
              });
              document.addEventListener("click", function (e) {
                if (e.target.closest(".matchup__counter-increase")) {
                  var btnStageNum = Number(e.target.closest('[data-stage]').getAttribute('data-stage'));
                  var btnMatchupNum = Number(e.target.closest('[data-matchup]').getAttribute('data-matchup'));
                  var btnTeamNum = Number(e.target.closest('[data-matchup-counter]').getAttribute('data-matchup-counter'));
                  var teamScore = Number(predictorTabsData[btnStageNum - 1].score[btnMatchupNum - 1]["team".concat(btnTeamNum)]);
                  setMatchupScore(btnStageNum, "team".concat(btnTeamNum), btnMatchupNum, teamScore + 1);
                  setActiveBlocks(btnStageNum, btnMatchupNum);
                }
                if (e.target.closest(".matchup__counter-decrease")) {
                  var _btnStageNum = Number(e.target.closest('[data-stage]').getAttribute('data-stage'));
                  var _btnTeamNum = Number(e.target.closest('[data-matchup-counter]').getAttribute('data-matchup-counter'));
                  var _btnMatchupNum = Number(e.target.closest('[data-matchup]').getAttribute('data-matchup'));
                  var _teamScore = Number(predictorTabsData[_btnStageNum - 1].score[_btnMatchupNum - 1]["team".concat(_btnTeamNum)]);
                  var newScore = _teamScore ? _teamScore - 1 : 0;
                  setMatchupScore(_btnStageNum, "team".concat(_btnTeamNum), _btnMatchupNum, newScore);
                  setActiveBlocks(_btnStageNum, _btnMatchupNum);
                }
              });
              matchupArrowRight.addEventListener("click", function () {
                setMatchupFromArrow(matchupArrowRight, "right");
                setActiveBlocks(activeStage, predictorTabsData[activeStage - 1].activeMatchup);
              });
              matchupArrowLeft.addEventListener("click", function () {
                setMatchupFromArrow(matchupArrowLeft, "left");
                setActiveBlocks(activeStage, predictorTabsData[activeStage - 1].activeMatchup);
              });
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale)).then(function (json) {
      i18nData = json;
      translate();
      var targetNode = document.getElementById("goals-or-zeros-leage");
      var mutationObserver = new MutationObserver(function (mutations) {
        mutationObserver.disconnect();
        translate();
        mutationObserver.observe(targetNode, {
          childList: true,
          subtree: true
        });
      });
      mutationObserver.observe(targetNode, {
        childList: true,
        subtree: true
      });
    });
  }
  function toggleActiveByDataAttribute(elements, attributeName, valueToMatch) {
    elements.forEach(function (el) {
      var attrValue = Number(el.dataset[attributeName]);
      // console.log(el, el.dataset[attributeName], valueToMatch);
      if (attrValue === Number(valueToMatch)) {
        el.classList.add('_active');
      } else {
        el.classList.remove('_active');
      }
    });
  }
  function setMatchupScore(stage, team, matchup, num) {
    console.log(num);
    // console.log( predictorTabsData[stage - 1].score[matchup])
    predictorTabsData[stage - 1].score[matchup - 1]["".concat(team)] = num;
  }
  function setStageFromTab(block) {
    var blockStageNum = Number(block.dataset.stage);

    // predictorTabsData[blockStageNum - 1].stage = blockStageNum;

    return activeStage = blockStageNum;
  }
  function setMatchupFromTab(block) {
    var matchupNum = Number(block.dataset.matchup);
    predictorTabsData[activeStage - 1].activeMatchup = matchupNum;
    activeMatchup = matchupNum;
    return activeMatchup;
  }
  function setMatchupFromArrow(arrow, direction) {
    var tabWrap = arrow.closest(".stages__tabs");
    var activeTab = tabWrap.querySelector("._active");
    var activeTabs = tabWrap.querySelectorAll(".stages__tabs-item");
    var activeTabMatchup = Number(activeTab.dataset.matchup);
    console.log(activeTabMatchup);
    if (direction === 'left') {
      console.log(direction);
      console.log(activeTabMatchup);
      if (activeTabMatchup) {
        activeTabMatchup = activeTabMatchup - 1;
        predictorTabsData[activeStage - 1].activeMatchup = activeTabMatchup;
      }
      if (activeTabMatchup === 0) {
        activeTabMatchup = activeTabs.length;
        predictorTabsData[activeStage - 1].activeMatchup = activeTabMatchup;
      }
    }
    if (direction === 'right') {
      console.log(direction);
      console.log(activeTabs);
      if (activeTabMatchup >= activeTabs.length) {
        activeTabMatchup = 1;
        predictorTabsData[activeStage - 1].activeMatchup = activeTabMatchup;
      } else {
        activeTabMatchup = activeTabMatchup + 1;
        predictorTabsData[activeStage - 1].activeMatchup = activeTabMatchup;
      }
    }
    console.log(activeTabMatchup);
    activeMatchup = activeTabMatchup;
    return activeMatchup;
  }
  function checkUserAuth() {
    var loadTime = 200;
    setTimeout(function () {
      var showElements = function showElements(elements) {
        return elements.forEach(function (el) {
          return el.classList.remove('hide');
        });
      };
      var hideElements = function hideElements(elements) {
        return elements.forEach(function (el) {
          return el.classList.add('hide');
        });
      };
      if (!userId) {
        hideElements(participateBtns);
        hideElements(redirectBtns);
        showElements(unauthMsgs);
        hideLoader();
        return Promise.resolve(false);
      }
      hideElements(unauthMsgs);
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          hideElements(participateBtns);
          showElements(redirectBtns);
        } else {
          showElements(participateBtns);
          hideElements(redirectBtns);
        }
        hideLoader();
      });
    }, loadTime);
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    refreshLocalizedClass(mainPage);
  }
  function refreshLocalizedClass(element) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(lang);
    }
    element.classList.add(locale);
  }
  function renderUsers(week) {
    request("/users/".concat(week)).then(function (data) {
      var users = data;
      populateUsersTable(users, userId, week);
    });
  }
  function populateUsersTable(users, currentUserId, week) {
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    var currentUser = users.find(function (user) {
      return user.userid === currentUserId;
    });
    var isTopCurrentUser = currentUser && users.slice(0, 10).some(function (user) {
      return user.userid === currentUserId;
    });
    var topUsersLength = !userId || isTopCurrentUser ? 13 : 10;
    var topUsers = users.slice(0, topUsersLength);
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (!isTopCurrentUser && currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(userData.points, "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  function getPrizeTranslationKey(place, week) {
    if (place <= 3) return "prize_".concat(week, "-").concat(place);
    if (place <= 10) return "prize_".concat(week, "-4-10");
    if (place <= 25) return "prize_".concat(week, "-11-25");
    if (place <= 50) return "prize_".concat(week, "-26-50");
    if (place <= 75) return "prize_".concat(week, "-51-75");
    if (place <= 100) return "prize_".concat(week, "-76-100");
    if (place <= 125) return "prize_".concat(week, "-101-125");
    if (place <= 150) return "prize_".concat(week, "-126-150");
    if (place <= 175) return "prize_".concat(week, "-151-175");
    if (place <= 200) return "prize_".concat(week, "-176-200");
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
      }, 1000);
    });
  }

  // loadTranslations().then(init) запуск ініту сторінки

  init();
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInN0YWdlc1RhYnMiLCJzdGFnZXNCbG9ja3MiLCJzdGFnZXNNYXRjaHVwVGFicyIsInByZWRpY3RvclBlcnNMZWZ0IiwicHJlZGljdG9yUGVyc1JpZ2h0IiwibWFrZVByZWRpY3RCdG4iLCJtYXRjaHVwQXJyb3dSaWdodCIsIm1hdGNodXBBcnJvd0xlZnQiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsInRlc3RDb3VudGllcyIsImxlZnQiLCJyaWdodCIsImxvYWRlckJ0biIsImxvY2FsZSIsImFjdGl2ZVN0YWdlIiwiYWN0aXZlTWF0Y2h1cCIsInByZWRpY3RvclRhYnNEYXRhIiwic3RhZ2UiLCJzY29yZSIsInRlYW0xIiwidGVhbTIiLCJzZXRBY3RpdmVCbG9ja3MiLCJtYXRjaHVwIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZVN0YWdlVGFiIiwiYWN0aXZlU3RhZ2VCbG9jayIsImFjdGl2ZU1hdGNodXBzIiwiYWN0aXZlTWF0Y2h1cFRhYnMiLCJhY3RpdmVUZWFtMUNvdW50ZXJzIiwiYWN0aXZlVGVhbTJDb3VudGVycyIsImFjdGl2ZVRlYW0xQ291bnRlck51bSIsImFjdGl2ZVRlYW0yQ291bnRlck51bSIsInRleHRDb250ZW50IiwidG9nZ2xlQWN0aXZlQnlEYXRhQXR0cmlidXRlIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwiUHJvbWlzZSIsInJlamVjdCIsImFkZCIsImJvZHkiLCJvdmVyZmxvdyIsInJlbW92ZSIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwidGFiIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZ2lvbnMiLCJzZXRTdGFnZUZyb21UYWIiLCJpIiwic2V0TWF0Y2h1cEZyb21UYWIiLCJlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImJ0blN0YWdlTnVtIiwiTnVtYmVyIiwiZ2V0QXR0cmlidXRlIiwiYnRuTWF0Y2h1cE51bSIsImJ0blRlYW1OdW0iLCJ0ZWFtU2NvcmUiLCJzZXRNYXRjaHVwU2NvcmUiLCJuZXdTY29yZSIsInNldE1hdGNodXBGcm9tQXJyb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJ0YXJnZXROb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImF0dHJpYnV0ZU5hbWUiLCJ2YWx1ZVRvTWF0Y2giLCJhdHRyVmFsdWUiLCJkYXRhc2V0IiwidGVhbSIsIm51bSIsImJsb2NrIiwiYmxvY2tTdGFnZU51bSIsIm1hdGNodXBOdW0iLCJhcnJvdyIsImRpcmVjdGlvbiIsInRhYldyYXAiLCJhY3RpdmVUYWIiLCJhY3RpdmVUYWJzIiwiYWN0aXZlVGFiTWF0Y2h1cCIsImxlbmd0aCIsImNoZWNrVXNlckF1dGgiLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJ1c2VyaWQiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2VlayIsImRhdGEiLCJ1c2VycyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImN1cnJlbnRVc2VyIiwiZmluZCIsInVzZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93IiwidXNlckRhdGEiLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwiY3JlYXRlRWxlbWVudCIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwidG9TdHJpbmciLCJwbGFjZSIsInBhcnRpY2lwYXRlIiwicGFyYW1zIl0sIm1h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QUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDO0VBQUMsQ0FBQyxFQUNuSjtJQUFDSCxLQUFLLEVBQUUsQ0FBQztJQUFFRixhQUFhLEVBQUUsQ0FBQztJQUFFRyxLQUFLLEVBQUUsQ0FBQztNQUFDQyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDO0VBQUMsQ0FBQyxFQUM3SDtJQUFDSCxLQUFLLEVBQUUsQ0FBQztJQUFFRixhQUFhLEVBQUUsQ0FBQztJQUFFRyxLQUFLLEVBQUUsQ0FBQztNQUFDQyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDO0VBQUMsQ0FBQyxFQUM3SDtJQUFDSCxLQUFLLEVBQUUsQ0FBQztJQUFFRixhQUFhLEVBQUUsQ0FBQztJQUFFRyxLQUFLLEVBQUUsQ0FBQztNQUFDQyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQztFQUFDLENBQUMsRUFDakY7SUFB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O0VBRUEsU0FBU3NDLFdBQVcsR0FBRztJQUNuQixJQUFJLENBQUN4SixNQUFNLEVBQUU7TUFDVDtJQUNKO0lBQ0EsSUFBTXlKLE1BQU0sR0FBRztNQUFFM0QsTUFBTSxFQUFFOUY7SUFBTyxDQUFDO0lBQ2pDSSxLQUFLLENBQUNsRSxNQUFNLEdBQUcsUUFBUSxFQUFFO01BQ3JCbUUsT0FBTyxFQUFFO1FBQ0wsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixjQUFjLEVBQUU7TUFDcEIsQ0FBQztNQUNEa0csTUFBTSxFQUFFLE1BQU07TUFDZGhGLElBQUksRUFBRWlGLElBQUksQ0FBQ0MsU0FBUyxDQUFDZ0QsTUFBTTtJQUMvQixDQUFDLENBQUMsQ0FBQ25KLElBQUksQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ3JCSixJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO01BQ1RsQyxTQUFTLEdBQUcsSUFBSTtNQUNoQmhCLGFBQWEsQ0FBQ2IsZUFBZSxFQUFFLFFBQVEsQ0FBQztNQUN4Q29CLGdCQUFnQixDQUFDcEIsZUFBZSxFQUFFLFFBQVEsQ0FBQztNQUMzQ21KLFVBQVUsQ0FBQyxZQUFLO1FBQ1ovSCxnQkFBZ0IsQ0FBQ3BCLGVBQWUsRUFBRSxjQUFjLENBQUM7UUFDakRhLGFBQWEsQ0FBQ2IsZUFBZSxFQUFFLE1BQU0sQ0FBQztRQUN0Q2EsYUFBYSxDQUFDYixlQUFlLEVBQUUsUUFBUSxDQUFDO01BQzVDLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDUG1KLFVBQVUsQ0FBQyxZQUFJO1FBQ1hGLGFBQWEsRUFBRTtNQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO0lBRVosQ0FBQyxDQUFDO0VBQ1Y7O0VBRUE7O0VBRUEvRCxJQUFJLEVBQUU7QUFFVixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3lvdXJfcHJvbW8nXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICBzdGFnZXNUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3Rvcl9fc3RhZ2VzLWl0ZW0nKSxcbiAgICAgICAgc3RhZ2VzQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlc19faXRlbScpLFxuICAgICAgICBzdGFnZXNNYXRjaHVwVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFnZXNfX3RhYnMtaXRlbScpLFxuICAgICAgICBwcmVkaWN0b3JQZXJzTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0b3JfX3BlcnMtbGVmdCcpLFxuICAgICAgICBwcmVkaWN0b3JQZXJzUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdG9yX19wZXJzLXJpZ2h0JyksXG4gICAgICAgIG1ha2VQcmVkaWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1ha2UtcHJlZGljdCcpLFxuICAgICAgICBtYXRjaHVwQXJyb3dSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZXNfX3RhYnMtcmlnaHQnKSxcbiAgICAgICAgbWF0Y2h1cEFycm93TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZXNfX3RhYnMtbGVmdCcpO1xuXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRlc3RDb3VudGllcyA9XG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgbGVmdDogJ2FmcmljYScsIHJpZ2h0OiAnYWZyaWNhJyB9LFxuICAgICAgICAgICAgeyBsZWZ0OiAnYXNpYScsIHJpZ2h0OiAnYXNpYScgfSxcbiAgICAgICAgICAgIHsgbGVmdDogJ2V1cm9wYScsIHJpZ2h0OiAnZXVyb3BhJyB9LFxuICAgICAgICAgICAgeyBsZWZ0OiAnb2NlYW4nLCByaWdodDogJ29jZWFuJyB9LFxuICAgICAgICAgICAgeyBsZWZ0OiAndXNhJywgcmlnaHQ6ICd1c2EnIH1cbiAgICAgICAgXVxuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICBsZXQgbG9jYWxlID0gXCJlblwiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgYWN0aXZlU3RhZ2UgPSAxXG4gICAgbGV0IGFjdGl2ZU1hdGNodXAgPSAxXG5cbiAgICBsZXQgcHJlZGljdG9yVGFic0RhdGEgPSBbXG4gICAgICAgIHtzdGFnZTogMSwgYWN0aXZlTWF0Y2h1cDogMSwgc2NvcmU6IFt7dGVhbTE6IDEsIHRlYW0yOiAwfSwge3RlYW0xOiAyLCB0ZWFtMjogMH0sIHt0ZWFtMTogMywgdGVhbTI6IDB9LCB7dGVhbTE6IDMsIHRlYW0yOiAwfSwge3RlYW0xOiAzLCB0ZWFtMjogMH1dfSxcbiAgICAgICAge3N0YWdlOiAyLCBhY3RpdmVNYXRjaHVwOiAxLCBzY29yZTogW3t0ZWFtMTogMSwgdGVhbTI6IDB9LCB7dGVhbTE6IDIsIHRlYW0yOiAwfSwge3RlYW0xOiAzLCB0ZWFtMjogMH0sIHt0ZWFtMTogMywgdGVhbTI6IDB9LCB7dGVhbTE6IDMsIHRlYW0yOiAwfV19LFxuICAgICAgICB7c3RhZ2U6IDMsIGFjdGl2ZU1hdGNodXA6IDEsIHNjb3JlOiBbe3RlYW0xOiAxLCB0ZWFtMjogMH0sIHt0ZWFtMTogMiwgdGVhbTI6IDB9LCB7dGVhbTE6IDMsIHRlYW0yOiAwfSwge3RlYW0xOiAzLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9XX0sXG4gICAgICAgIHtzdGFnZTogNCwgYWN0aXZlTWF0Y2h1cDogMSwgc2NvcmU6IFt7dGVhbTE6IDEsIHRlYW0yOiAwfSwge3RlYW0xOiAyLCB0ZWFtMjogMH0sIHt0ZWFtMTogMywgdGVhbTI6IDB9LCB7dGVhbTE6IDMsIHRlYW0yOiAwfV19LFxuICAgICAgICB7c3RhZ2U6IDUsIGFjdGl2ZU1hdGNodXA6IDEsIHNjb3JlOiBbe3RlYW0xOiAxLCB0ZWFtMjogMH0sIHt0ZWFtMTogMiwgdGVhbTI6IDB9LCB7dGVhbTE6IDMsIHRlYW0yOiAwfSwge3RlYW0xOiAzLCB0ZWFtMjogMH1dfSxcbiAgICAgICAge3N0YWdlOiA2LCBhY3RpdmVNYXRjaHVwOiAxLCBzY29yZTogW3t0ZWFtMTogMSwgdGVhbTI6IDB9LCB7dGVhbTE6IDIsIHRlYW0yOiAwfV19LFxuICAgICAgICB7c3RhZ2U6IDcsIGFjdGl2ZU1hdGNodXA6IDEsIHNjb3JlOiBbe3RlYW0xOiAxLCB0ZWFtMjogMH1dfSxcbiAgICBdXG5cbiAgICBmdW5jdGlvbiBzZXRBY3RpdmVCbG9ja3MgKHN0YWdlLCBtYXRjaHVwKXtcblxuICAgICAgICBpZihzdGFnZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHN0YWdlID0gMVxuICAgICAgICB9XG4gICAgICAgIGlmKG1hdGNodXAgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBtYXRjaHVwID0gMVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cobWF0Y2h1cClcblxuICAgICAgICBjb25zdCBhY3RpdmVTdGFnZVRhYiA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJlZGljdG9yX19zdGFnZXMtaXRlbVtkYXRhLXN0YWdlPVwiJHtzdGFnZX1cIl1gKVxuICAgICAgICBjb25zdCBhY3RpdmVTdGFnZUJsb2NrID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdGFnZXNfX2l0ZW1bZGF0YS1zdGFnZT1cIiR7c3RhZ2V9XCJdYCk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU1hdGNodXBzID0gYWN0aXZlU3RhZ2VCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCcubWF0Y2h1cCcpO1xuICAgICAgICBjb25zdCBhY3RpdmVNYXRjaHVwVGFicyA9IGFjdGl2ZVN0YWdlQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlc19fdGFicy1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRlYW0xQ291bnRlcnMgPSBhY3RpdmVTdGFnZUJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1hdGNodXAtY291bnRlcj1cIjFcIl0nKTtcbiAgICAgICAgY29uc3QgYWN0aXZlVGVhbTJDb3VudGVycyA9IGFjdGl2ZVN0YWdlQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWF0Y2h1cC1jb3VudGVyPVwiMlwiXScpO1xuICAgICAgICBjb25zdCBhY3RpdmVUZWFtMUNvdW50ZXJOdW0gPSBhY3RpdmVUZWFtMUNvdW50ZXJzW21hdGNodXAgLSAxXS5xdWVyeVNlbGVjdG9yKCcubWF0Y2h1cF9fY291bnRlci1udW1iZXInKTtcbiAgICAgICAgY29uc3QgYWN0aXZlVGVhbTJDb3VudGVyTnVtID0gYWN0aXZlVGVhbTJDb3VudGVyc1ttYXRjaHVwIC0gMV0ucXVlcnlTZWxlY3RvcignLm1hdGNodXBfX2NvdW50ZXItbnVtYmVyJyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVRlYW0xQ291bnRlcnNbMV0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVRlYW0xQ291bnRlck51bSlcblxuICAgICAgICBhY3RpdmVUZWFtMUNvdW50ZXJOdW0udGV4dENvbnRlbnQgPSBwcmVkaWN0b3JUYWJzRGF0YVtzdGFnZSAtIDFdLnNjb3JlW21hdGNodXAgLSAxXS50ZWFtMVxuICAgICAgICBhY3RpdmVUZWFtMkNvdW50ZXJOdW0udGV4dENvbnRlbnQgPSBwcmVkaWN0b3JUYWJzRGF0YVtzdGFnZSAtIDFdLnNjb3JlW21hdGNodXAgLSAxXS50ZWFtMlxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByZWRpY3RvclRhYnNEYXRhW3N0YWdlIC0gMV0uc2NvcmVbbWF0Y2h1cCAtIDFdKVxuXG4gICAgICAgIHRvZ2dsZUFjdGl2ZUJ5RGF0YUF0dHJpYnV0ZShzdGFnZXNUYWJzLCAnc3RhZ2UnLCBzdGFnZSk7XG4gICAgICAgIHRvZ2dsZUFjdGl2ZUJ5RGF0YUF0dHJpYnV0ZShzdGFnZXNCbG9ja3MsICdzdGFnZScsIHN0YWdlKTtcbiAgICAgICAgdG9nZ2xlQWN0aXZlQnlEYXRhQXR0cmlidXRlKGFjdGl2ZU1hdGNodXBUYWJzLCAnbWF0Y2h1cCcsIG1hdGNodXApO1xuICAgICAgICB0b2dnbGVBY3RpdmVCeURhdGFBdHRyaWJ1dGUoYWN0aXZlTWF0Y2h1cHMsICdtYXRjaHVwJywgbWF0Y2h1cCk7XG5cbiAgICAgICAgbWFrZVByZWRpY3RCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlJywgc3RhZ2UpO1xuICAgICAgICBtYWtlUHJlZGljdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWF0Y2h1cCcsIG1hdGNodXApO1xuXG4gICAgfVxuXG4gICAgbGV0IGRlYnVnID0gdHJ1ZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gbnVsbDtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICAvLyBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICBzZXRBY3RpdmVCbG9ja3MoYWN0aXZlU3RhZ2UsIGFjdGl2ZU1hdGNodXApXG5cbiAgICAgICAgICAgIHN0YWdlc1RhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2lvbnMgPSBbJ2FmcmljYScsICd1c2EnLCAnZXVyb3BhJywgJ29jZWFuJywgJ2FzaWEnXVxuXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3RvclBlcnNMZWZ0LmNsYXNzTGlzdC5yZW1vdmUoLi4ucmVnaW9ucylcbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yUGVyc1JpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoLi4ucmVnaW9ucylcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcmVkaWN0b3JUYWJzRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVnaW9uc1twcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXBdKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXApXG5cblxuXG4gICAgICAgICAgICAgICAgICAgIHNldFN0YWdlRnJvbVRhYih0YWIpXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJsb2NrcyhhY3RpdmVTdGFnZSwgcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwKVxuXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3RvclBlcnNMZWZ0LmNsYXNzTGlzdC5hZGQoYCR7cmVnaW9uc1twcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXAgLSAxXX1gKVxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0b3JQZXJzUmlnaHQuY2xhc3NMaXN0LmFkZChgJHtyZWdpb25zW3ByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cCAtIDFdfWApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzdGFnZXNNYXRjaHVwVGFicy5mb3JFYWNoKCh0YWIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2h1cEZyb21UYWIodGFiKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2lvbnMgPSBbJ2FmcmljYScsICd1c2EnLCAnZXVyb3BhJywgJ29jZWFuJywgJ2FzaWEnXVxuXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3RvclBlcnNMZWZ0LmNsYXNzTGlzdC5yZW1vdmUoLi4ucmVnaW9ucylcbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yUGVyc1JpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoLi4ucmVnaW9ucylcblxuXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3RvclBlcnNMZWZ0LmNsYXNzTGlzdC5hZGQoYCR7cmVnaW9uc1thY3RpdmVNYXRjaHVwIC0gMV19YClcbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yUGVyc1JpZ2h0LmNsYXNzTGlzdC5hZGQoYCR7cmVnaW9uc1thY3RpdmVNYXRjaHVwIC0gMV19YClcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXApXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJsb2NrcyhhY3RpdmVTdGFnZSwgcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwKVxuXG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi5tYXRjaHVwX19jb3VudGVyLWluY3JlYXNlXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuU3RhZ2VOdW0gPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtc3RhZ2VdJykuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlJykpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0bk1hdGNodXBOdW0gPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtbWF0Y2h1cF0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF0Y2h1cCcpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidG5UZWFtTnVtID0gTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLW1hdGNodXAtY291bnRlcl0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF0Y2h1cC1jb3VudGVyJykpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1TY29yZSA9IE51bWJlcihwcmVkaWN0b3JUYWJzRGF0YVtidG5TdGFnZU51bSAtIDFdLnNjb3JlW2J0bk1hdGNodXBOdW0gLSAxXVtgdGVhbSR7YnRuVGVhbU51bX1gXSlcbiAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2h1cFNjb3JlKGJ0blN0YWdlTnVtLCBgdGVhbSR7YnRuVGVhbU51bX1gLCBidG5NYXRjaHVwTnVtLCB0ZWFtU2NvcmUgKyAxKVxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVCbG9ja3MoYnRuU3RhZ2VOdW0sIGJ0bk1hdGNodXBOdW0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi5tYXRjaHVwX19jb3VudGVyLWRlY3JlYXNlXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuU3RhZ2VOdW0gPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtc3RhZ2VdJykuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlJykpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0blRlYW1OdW0gPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtbWF0Y2h1cC1jb3VudGVyXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXRjaHVwLWNvdW50ZXInKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuTWF0Y2h1cE51bSA9IE51bWJlcihlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tYXRjaHVwXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXRjaHVwJykpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbVNjb3JlID0gTnVtYmVyKHByZWRpY3RvclRhYnNEYXRhW2J0blN0YWdlTnVtIC0gMV0uc2NvcmVbYnRuTWF0Y2h1cE51bSAtIDFdW2B0ZWFtJHtidG5UZWFtTnVtfWBdKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Njb3JlID0gdGVhbVNjb3JlID8gdGVhbVNjb3JlIC0gMSA6IDBcblxuICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaHVwU2NvcmUoYnRuU3RhZ2VOdW0sIGB0ZWFtJHtidG5UZWFtTnVtfWAsIGJ0bk1hdGNodXBOdW0sIG5ld1Njb3JlKVxuXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJsb2NrcyhidG5TdGFnZU51bSwgYnRuTWF0Y2h1cE51bSlcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG1hdGNodXBBcnJvd1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICBzZXRNYXRjaHVwRnJvbUFycm93KG1hdGNodXBBcnJvd1JpZ2h0LCBcInJpZ2h0XCIpXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlQmxvY2tzKGFjdGl2ZVN0YWdlLCBwcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbWF0Y2h1cEFycm93TGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgc2V0TWF0Y2h1cEZyb21BcnJvdyhtYXRjaHVwQXJyb3dMZWZ0LCBcImxlZnRcIilcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVCbG9ja3MoYWN0aXZlU3RhZ2UsIHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cClcbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvYWxzLW9yLXplcm9zLWxlYWdlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVBY3RpdmVCeURhdGFBdHRyaWJ1dGUoZWxlbWVudHMsIGF0dHJpYnV0ZU5hbWUsIHZhbHVlVG9NYXRjaCkge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IE51bWJlcihlbC5kYXRhc2V0W2F0dHJpYnV0ZU5hbWVdKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsLCBlbC5kYXRhc2V0W2F0dHJpYnV0ZU5hbWVdLCB2YWx1ZVRvTWF0Y2gpO1xuICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gTnVtYmVyKHZhbHVlVG9NYXRjaCkpIHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TWF0Y2h1cFNjb3JlKHN0YWdlLCB0ZWFtLCBtYXRjaHVwLCBudW0pe1xuICAgICAgICBjb25zb2xlLmxvZyhudW0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBwcmVkaWN0b3JUYWJzRGF0YVtzdGFnZSAtIDFdLnNjb3JlW21hdGNodXBdKVxuICAgICAgICBwcmVkaWN0b3JUYWJzRGF0YVtzdGFnZSAtIDFdLnNjb3JlW21hdGNodXAgLSAxXVtgJHt0ZWFtfWBdID0gbnVtXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RhZ2VGcm9tVGFiKGJsb2NrKXtcbiAgICAgICAgY29uc3QgYmxvY2tTdGFnZU51bSA9IE51bWJlcihibG9jay5kYXRhc2V0LnN0YWdlKVxuXG4gICAgICAgIC8vIHByZWRpY3RvclRhYnNEYXRhW2Jsb2NrU3RhZ2VOdW0gLSAxXS5zdGFnZSA9IGJsb2NrU3RhZ2VOdW07XG5cblxuICAgICAgICByZXR1cm4gYWN0aXZlU3RhZ2UgPSBibG9ja1N0YWdlTnVtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE1hdGNodXBGcm9tVGFiKGJsb2NrKSB7XG4gICAgICAgIGNvbnN0IG1hdGNodXBOdW0gPSBOdW1iZXIoYmxvY2suZGF0YXNldC5tYXRjaHVwKTtcbiAgICAgICAgcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwID0gbWF0Y2h1cE51bTtcbiAgICAgICAgYWN0aXZlTWF0Y2h1cCA9IG1hdGNodXBOdW07XG4gICAgICAgIHJldHVybiBhY3RpdmVNYXRjaHVwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE1hdGNodXBGcm9tQXJyb3coYXJyb3csIGRpcmVjdGlvbikge1xuICAgICAgICBjb25zdCB0YWJXcmFwID0gYXJyb3cuY2xvc2VzdChcIi5zdGFnZXNfX3RhYnNcIilcblxuICAgICAgICBjb25zdCBhY3RpdmVUYWIgPSB0YWJXcmFwLnF1ZXJ5U2VsZWN0b3IoXCIuX2FjdGl2ZVwiKTtcbiAgICAgICAgY29uc3QgYWN0aXZlVGFicyA9IHRhYldyYXAucXVlcnlTZWxlY3RvckFsbChcIi5zdGFnZXNfX3RhYnMtaXRlbVwiKTtcblxuICAgICAgICBsZXQgYWN0aXZlVGFiTWF0Y2h1cCA9IE51bWJlcihhY3RpdmVUYWIuZGF0YXNldC5tYXRjaHVwKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVUYWJNYXRjaHVwKTtcblxuXG5cbiAgICAgICAgaWYoZGlyZWN0aW9uID09PSAnbGVmdCcpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGlyZWN0aW9uKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFiTWF0Y2h1cCk7XG4gICAgICAgICAgICBpZihhY3RpdmVUYWJNYXRjaHVwKXtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWJNYXRjaHVwID0gYWN0aXZlVGFiTWF0Y2h1cCAtIDE7XG4gICAgICAgICAgICAgICAgcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwID0gYWN0aXZlVGFiTWF0Y2h1cDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGFjdGl2ZVRhYk1hdGNodXAgPT09IDApe1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYk1hdGNodXAgPSBhY3RpdmVUYWJzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBwcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXAgPSBhY3RpdmVUYWJNYXRjaHVwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkaXJlY3Rpb24pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVUYWJzKVxuICAgICAgICAgICAgaWYoYWN0aXZlVGFiTWF0Y2h1cCA+PSBhY3RpdmVUYWJzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiTWF0Y2h1cCA9IDE7XG4gICAgICAgICAgICAgICAgcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwID0gYWN0aXZlVGFiTWF0Y2h1cDtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYk1hdGNodXAgPSBhY3RpdmVUYWJNYXRjaHVwICsgMTtcbiAgICAgICAgICAgICAgICBwcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXAgPSBhY3RpdmVUYWJNYXRjaHVwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFiTWF0Y2h1cCk7XG4gICAgICAgIGFjdGl2ZU1hdGNodXAgPSBhY3RpdmVUYWJNYXRjaHVwO1xuICAgICAgICByZXR1cm4gYWN0aXZlTWF0Y2h1cDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zdCBsb2FkVGltZSA9IDIwMDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgY29uc3QgaGlkZUVsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG5cbiAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgbG9hZFRpbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9YClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZGF0YTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCwgd2Vlayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWspIHtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMyA6IDEwO1xuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJEYXRhLnBvaW50c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMykgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LSR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNC0xMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTExLTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMjYtNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS01MS03NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS03Ni0xMDBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTAxLTEyNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMjYtMTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE1MS0xNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTc2LTIwMGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdCkg0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG4gICAgaW5pdCgpXG5cbn0pKCk7XG4iXX0=
