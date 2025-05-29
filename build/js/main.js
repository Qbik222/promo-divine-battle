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
    matchupArrowLeft = document.querySelector('.stages__tabs-left'),
    progressBlock = document.querySelector(".progress__body"),
    progressItems = document.querySelectorAll('.progress__item'),
    predictor = document.querySelector('.predictor');
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
  var debug = false;
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

              setTimeout(hideLoader, 1000);
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
              showProgressItemsOnScroll();
              animateOnScroll(predictor, "showDecor");
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
  function animateOnScroll(element, animationClass) {
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        } else {
          entry.target.classList.remove(animationClass);
        }
      });
    }, options);
    observer.observe(element);
  }
  function showProgressItemsOnScroll() {
    var progressBlock = document.querySelector(".progress__body");
    if (!progressBlock) return;
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          var items = progressBlock.querySelectorAll(".progress__item");
          items.forEach(function (item, i) {
            setTimeout(function () {
              item.classList.add("showItem");
            }, i * 200);
          });
          observer.unobserve(progressBlock);
        }
      });
    }, {
      threshold: 0.3
    });
    observer.observe(progressBlock);
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
  function monitorVisibility(selector, animation, delay) {
    var element = document.querySelector(selector);
    if (!element) {
      console.error('Element not found!');
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            element.classList.add(animation);
          }, delay);
        }
      });
    });
    observer.observe(element);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInN0YWdlc1RhYnMiLCJzdGFnZXNCbG9ja3MiLCJzdGFnZXNNYXRjaHVwVGFicyIsInByZWRpY3RvclBlcnNMZWZ0IiwicHJlZGljdG9yUGVyc1JpZ2h0IiwibWFrZVByZWRpY3RCdG4iLCJtYXRjaHVwQXJyb3dSaWdodCIsIm1hdGNodXBBcnJvd0xlZnQiLCJwcm9ncmVzc0Jsb2NrIiwicHJvZ3Jlc3NJdGVtcyIsInByZWRpY3RvciIsInVrTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwidGVzdENvdW50aWVzIiwibGVmdCIsInJpZ2h0IiwibG9hZGVyQnRuIiwibG9jYWxlIiwiYWN0aXZlU3RhZ2UiLCJhY3RpdmVNYXRjaHVwIiwicHJlZGljdG9yVGFic0RhdGEiLCJzdGFnZSIsInNjb3JlIiwidGVhbTEiLCJ0ZWFtMiIsInNldEFjdGl2ZUJsb2NrcyIsIm1hdGNodXAiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlU3RhZ2VUYWIiLCJhY3RpdmVTdGFnZUJsb2NrIiwiYWN0aXZlTWF0Y2h1cHMiLCJhY3RpdmVNYXRjaHVwVGFicyIsImFjdGl2ZVRlYW0xQ291bnRlcnMiLCJhY3RpdmVUZWFtMkNvdW50ZXJzIiwiYWN0aXZlVGVhbTFDb3VudGVyTnVtIiwiYWN0aXZlVGVhbTJDb3VudGVyTnVtIiwidGV4dENvbnRlbnQiLCJ0b2dnbGVBY3RpdmVCeURhdGFBdHRyaWJ1dGUiLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZXJyIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJzZXRUaW1lb3V0IiwidGFiIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZ2lvbnMiLCJzZXRTdGFnZUZyb21UYWIiLCJpIiwic2V0TWF0Y2h1cEZyb21UYWIiLCJlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImJ0blN0YWdlTnVtIiwiTnVtYmVyIiwiZ2V0QXR0cmlidXRlIiwiYnRuTWF0Y2h1cE51bSIsImJ0blRlYW1OdW0iLCJ0ZWFtU2NvcmUiLCJzZXRNYXRjaHVwU2NvcmUiLCJuZXdTY29yZSIsInNldE1hdGNodXBGcm9tQXJyb3ciLCJzaG93UHJvZ3Jlc3NJdGVtc09uU2Nyb2xsIiwiYW5pbWF0ZU9uU2Nyb2xsIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhdHRyaWJ1dGVOYW1lIiwidmFsdWVUb01hdGNoIiwiYXR0clZhbHVlIiwiZGF0YXNldCIsInRlYW0iLCJudW0iLCJibG9jayIsImJsb2NrU3RhZ2VOdW0iLCJtYXRjaHVwTnVtIiwiYXJyb3ciLCJkaXJlY3Rpb24iLCJ0YWJXcmFwIiwiYWN0aXZlVGFiIiwiYWN0aXZlVGFicyIsImFjdGl2ZVRhYk1hdGNodXAiLCJsZW5ndGgiLCJjaGVja1VzZXJBdXRoIiwibG9hZFRpbWUiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJ1c2VyaWQiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2VlayIsImRhdGEiLCJ1c2VycyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImFuaW1hdGlvbkNsYXNzIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJpdGVtcyIsIml0ZW0iLCJ1bm9ic2VydmUiLCJjdXJyZW50VXNlcklkIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJjdXJyZW50VXNlciIsImZpbmQiLCJ1c2VyIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsInVzZXJEYXRhIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwiY3JlYXRlRWxlbWVudCIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwiYXBwZW5kIiwiaW5kZXgiLCJtb25pdG9yVmlzaWJpbGl0eSIsInNlbGVjdG9yIiwiYW5pbWF0aW9uIiwiZGVsYXkiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwidG9TdHJpbmciLCJwbGFjZSIsInBhcnRpY2lwYXRlIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUVULElBQU1BLE1BQU0sR0FBRyxxQ0FBcUM7RUFFcEQsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERDLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDckRDLGVBQWUsR0FBR0osUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDeERFLFlBQVksR0FBR0wsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDckRHLE1BQU0sR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDbkRNLFVBQVUsR0FBR1AsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQztJQUNqRUssWUFBWSxHQUFHUixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztJQUN6RE0saUJBQWlCLEdBQUdULFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7SUFDbkVPLGlCQUFpQixHQUFHVixRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUNuRVUsa0JBQWtCLEdBQUdYLFFBQVEsQ0FB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QUFLLEVBQUUsQ0FBQztNQUFDQyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQztFQUFDLENBQUMsRUFDbko7SUFBQ0gsS0FBSyxFQUFFLENBQUM7SUFBRUYsYUFBYSxFQUFFLENBQUM7SUFBRUcsS0FBSyxFQUFFLENBQUM7TUFBQ0MsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUM7RUFBQyxDQUFDLEVBQ25KO0lBQUNILEtBQUssRUFBRSxDQUFDO0lBQUVGLGFBQWEsRUFBRSxDQUFDO0lBQUVHLEtBQUssRUFBRSxDQUFDO01BQUNDLEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUM7RUFBQyxDQUFDLEVBQzdIO0lBQUNILEtBQUssRUFBRSxDQUFDO0lBQUVGLGFBQWEsRUFBRSxDQUFDO0lBQUVHLEtBQUssRUFBRSxDQUFDO01BQUNDLEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUM7RUFBQyxDQUFDLEVBQzdIO0lBQUNILEtBQUssRUFBRSxDQUFDO0lBQUVGLGFBQWEsRUFBRSxDQUFDO0lBQUVHLEtBQUssRUFBRSxDQUFDO01BQUNDLEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDO0VBQUMsQ0FBQyxFQUNqRjtJQUFDSCxLQUFLLEVBQUUsQ0FBQztJQUFFRixhQUFhLEVBQUUsQ0FBQztJQUFFRyxLQUFLLEVBQUUsQ0FBQztNQUFDQyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDO0VBQUMsQ0FBQyxDQUM5RDtFQUVELFNBQVNDLGVBQWUsQ0FBRUosS0FBSyxFQUFFSyxPQUFPLEVBQUM7SUFFckMsSUFBR0wsS0FBSyxLQUFLTSxTQUFTLEVBQUM7TUFDbkJOLEtBQUssR0FBRyxDQUFDO0lBQ2I7SUFDQSxJQUFHSyxPQUFPLEtBQUtDLFNBQVMsRUFBQztNQUNyQkQsT0FBTyxHQUFHLENBQUM7SUFDZjtJQUVBRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxDQUFDO0lBRXBCLElBQU1JLGNBQWMsR0FBSWxELFFBQVEsQ0FBQ0MsYUFBYSxnREFBd0N3QyxLQUFLLFNBQUs7SUFDaEcsSUFBTVUsZ0JBQWdCLEdBQUluRCxRQUFRLENBQUNDLGFBQWEsc0NBQThCd0MsS0FBSyxTQUFLO0lBQ3hGLElBQU1XLGNBQWMsR0FBR0QsZ0JBQWdCLENBQUNoRCxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7SUFDcEUsSUFBTWtELGlCQUFpQixHQUFHRixnQkFBZ0IsQ0FBQ2hELGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0lBQ2pGLElBQU1tRCxtQkFBbUIsR0FBR0gsZ0JBQWdCLENBQUNoRCxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQztJQUMzRixJQUFNb0QsbUJBQW1CLEdBQUdKLGdCQUFnQixDQUFDaEQsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUM7SUFDM0YsSUFBTXFELHFCQUFxQixHQUFHRixtQkFBbUIsQ0FBQ1IsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDN0MsYUFBYSxDQUFDLDBCQUEwQixDQUFDO0lBQ3hHLElBQU13RCxxQkFBcUIsR0FBR0YsbUJBQW1CLENBQUNULE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzdDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQztJQUN4RztJQUNBO0lBQ0E7O0lBRUF1RCxxQkFBcUIsQ0FBQ0UsV0FBVyxHQUFHbEIsaUJBQWlCLENBQUNDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUNILEtBQUs7SUFDekZjLHFCQUFxQixDQUFDQyxXQUFXLEdBQUdsQixpQkFBaUIsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUNJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQ0YsS0FBSzs7SUFFekY7O0lBRUFlLDJCQUEyQixDQUFDcEQsVUFBVSxFQUFFLE9BQU8sRUFBRWtDLEtBQUssQ0FBQztJQUN2RGtCLDJCQUEyQixDQUFDbkQsWUFBWSxFQUFFLE9BQU8sRUFBRWlDLEtBQUssQ0FBQztJQUN6RGtCLDJCQUEyQixDQUFDTixpQkFBaUIsRUFBRSxTQUFTLEVBQUVQLE9BQU8sQ0FBQztJQUNsRWEsMkJBQTJCLENBQUNQLGNBQWMsRUFBRSxTQUFTLEVBQUVOLE9BQU8sQ0FBQztJQUUvRGxDLGNBQWMsQ0FBQ2lCLFlBQVksQ0FBQyxZQUFZLEVBQUVZLEtBQUssQ0FBQztJQUNoRDdCLGNBQWMsQ0FBQ2lCLFlBQVksQ0FBQyxjQUFjLEVBQUVpQixPQUFPLENBQUM7RUFFeEQ7RUFFQSxJQUFJYyxLQUFLLEdBQUcsS0FBSztFQUVqQixJQUFJQSxLQUFLLEVBQUVDLFVBQVUsRUFBRTtFQUV2QixJQUFJOUIsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNqQixJQUFNK0IsY0FBYyxHQUFHLElBQUk7RUFDM0IsSUFBSUMsTUFBTSxHQUFHLElBQUk7RUFFakIsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU8sQ0FBYUMsSUFBSSxFQUFFQyxZQUFZLEVBQUU7SUFDMUMsT0FBT0MsS0FBSyxDQUFDckUsTUFBTSxHQUFHbUUsSUFBSTtNQUN0QkcsT0FBTyxFQUFFO1FBQ0wsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixjQUFjLEVBQUU7TUFDcEI7SUFBQyxHQUNHRixZQUFZLElBQUksQ0FBQyxDQUFDLEVBQ3hCLENBQ0dHLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7TUFDVCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztNQUN6QyxPQUFPRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUNyQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtNQUNWMUIsT0FBTyxDQUFDMkIsS0FBSyxDQUFDLHFCQUFxQixFQUFFRCxHQUFHLENBQUM7TUFFekNFLFdBQVcsQ0FBQ0YsR0FBRyxDQUFDO01BRWhCMUUsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM0RSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQzFELElBQUlDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO1FBQzNESCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLDRCQUE0QjtNQUN2RCxDQUFDLE1BQU07UUFDSEYsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyxxQkFBcUI7TUFDaEQ7TUFFQSxPQUFPRSxPQUFPLENBQUNDLE1BQU0sQ0FBQ1YsR0FBRyxDQUFDO0lBQzlCLENBQUMsQ0FBQztFQUVWLENBQUM7RUFFRCxTQUFTYixVQUFVLEdBQUU7SUFDakJ2RCxNQUFNLENBQUNtQixTQUFTLENBQUM0RCxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzVCckYsUUFBUSxDQUFDc0YsSUFBSSxDQUFDVCxLQUFLLENBQUNVLFFBQVEsR0FBRyxNQUFNO0lBQ3JDeEYsUUFBUSxDQUFDMEIsU0FBUyxDQUFDK0QsTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUN4QztFQUFDLFNBRWNDLElBQUk7SUFBQTtFQUFBO0VBQUE7SUFBQSxtRUFBbkI7TUFBQSw0Q0FLYUMsZUFBZSxFQVNmQyxtQkFBbUI7TUFBQTtRQUFBO1VBQUE7WUFBbkJBLG1CQUFtQixtQ0FBRztjQUMzQjs7Y0FFQUMsVUFBVSxDQUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQztjQUU1QmhCLGVBQWUsQ0FBQ1AsV0FBVyxFQUFFQyxhQUFhLENBQUM7Y0FFM0NoQyxVQUFVLENBQUNnQixPQUFPLENBQUMsVUFBQXNFLEdBQUcsRUFBSTtnQkFDdEJBLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7a0JBQUE7a0JBRS9CLElBQU1DLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7a0JBRTVELHlCQUFBckYsaUJBQWlCLENBQUNlLFNBQVMsRUFBQytELE1BQU0sOEJBQUlPLE9BQU8sQ0FBQztrQkFDOUMseUJBQUFwRixrQkFBa0IsQ0FBQ2MsU0FBUyxFQUFDK0QsTUFBTSw4QkFBSU8sT0FBTyxDQUFDOztrQkFFL0M7a0JBQ0E7a0JBQ0E7O2tCQUlBQyxlQUFlLENBQUNILEdBQUcsQ0FBQztrQkFDcEJoRCxlQUFlLENBQUNQLFdBQVcsRUFBRUUsaUJBQWlCLENBQUNGLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsYUFBYSxDQUFDO2tCQUU5RTdCLGlCQUFpQixDQUFDZSxTQUFTLENBQUM0RCxHQUFHLFdBQUlVLE9BQU8sQ0FBQ3ZELGlCQUFpQixDQUFDRixXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUNDLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBRztrQkFDbkc1QixrQkFBa0IsQ0FBQ2MsU0FBUyxDQUFDNEQsR0FBRyxXQUFJVSxPQUFPLENBQUN2RCxpQkFBaUIsQ0FBQ0YsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUc7Z0JBQ3hHLENBQUMsQ0FBQztjQUNOLENBQUMsQ0FBQztjQUVGOUIsaUJBQWlCLENBQUNjLE9BQU8sQ0FBQyxVQUFDc0UsR0FBRyxFQUFFSSxDQUFDLEVBQUs7Z0JBQ2xDSixHQUFHLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO2tCQUFBO2tCQUMvQkksaUJBQWlCLENBQUNMLEdBQUcsQ0FBQztrQkFFdEIsSUFBTUUsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztrQkFFNUQsMEJBQUFyRixpQkFBaUIsQ0FBQ2UsU0FBUyxFQUFDK0QsTUFBTSwrQkFBSU8sT0FBTyxDQUFDO2tCQUM5QywwQkFBQXBGLGtCQUFrQixDQUFDYyxTQUFTLEVBQUMrRCxNQUFNLCtCQUFJTyxPQUFPLENBQUM7a0JBRy9DckYsaUJBQWlCLENBQUNlLFNBQVMsQ0FBQzRELEdBQUcsV0FBSVUsT0FBTyxDQUFDeEQsYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFHO2tCQUNoRTVCLGtCQUFrQixDQUFDYyxTQUFTLENBQUM0RCxHQUFHLFdBQUlVLE9BQU8sQ0FBQ3hELGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBRztrQkFFakVTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxpQkFBaUIsQ0FBQ0YsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxhQUFhLENBQUM7a0JBQzdETSxlQUFlLENBQUNQLFdBQVcsRUFBRUUsaUJBQWlCLENBQUNGLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsYUFBYSxDQUFDO2dCQUdsRixDQUFDLENBQUM7Y0FDTixDQUFDLENBQUM7Y0FFRnZDLFFBQVEsQ0FBQzhGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDSyxDQUFDLEVBQUk7Z0JBQ3JDLElBQUdBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsRUFBQztrQkFDOUMsSUFBTUMsV0FBVyxHQUFHQyxNQUFNLENBQUNKLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUNHLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztrQkFDdkYsSUFBTUMsYUFBYSxHQUFHRixNQUFNLENBQUNKLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0csWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2tCQUM3RixJQUFNRSxVQUFVLEdBQUdILE1BQU0sQ0FBQ0osQ0FBQyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsQ0FBQztrQkFDMUcsSUFBTUcsU0FBUyxHQUFHSixNQUFNLENBQUMvRCxpQkFBaUIsQ0FBQzhELFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQzVELEtBQUssQ0FBQytELGFBQWEsR0FBRyxDQUFDLENBQUMsZUFBUUMsVUFBVSxFQUFHLENBQUM7a0JBQzFHRSxlQUFlLENBQUNOLFdBQVcsZ0JBQVNJLFVBQVUsR0FBSUQsYUFBYSxFQUFFRSxTQUFTLEdBQUcsQ0FBQyxDQUFDO2tCQUMvRTlELGVBQWUsQ0FBQ3lELFdBQVcsRUFBRUcsYUFBYSxDQUFDO2dCQUMvQztnQkFFQSxJQUFHTixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLDRCQUE0QixDQUFDLEVBQUM7a0JBQzlDLElBQU1DLFlBQVcsR0FBR0MsTUFBTSxDQUFDSixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDRyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7a0JBQ3ZGLElBQU1FLFdBQVUsR0FBR0gsTUFBTSxDQUFDSixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUNHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2tCQUMxRyxJQUFNQyxjQUFhLEdBQUdGLE1BQU0sQ0FBQ0osQ0FBQyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDRyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7a0JBRTdGLElBQU1HLFVBQVMsR0FBR0osTUFBTSxDQUFDL0QsaUJBQWlCLENBQUM4RCxZQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM1RCxLQUFLLENBQUMrRCxjQUFhLEdBQUcsQ0FBQyxDQUFDLGVBQVFDLFdBQVUsRUFBRyxDQUFDO2tCQUUxRyxJQUFNRyxRQUFRLEdBQUdGLFVBQVMsR0FBR0EsVUFBUyxHQUFHLENBQUMsR0FBRyxDQUFDO2tCQUU5Q0MsZUFBZSxDQUFDTixZQUFXLGdCQUFTSSxXQUFVLEdBQUlELGNBQWEsRUFBRUksUUFBUSxDQUFDO2tCQUUxRWhFLGVBQWUsQ0FBQ3lELFlBQVcsRUFBRUcsY0FBYSxDQUFDO2dCQUUvQztjQUNKLENBQUMsQ0FBQztjQUVGNUYsaUJBQWlCLENBQUNpRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztnQkFDN0NnQixtQkFBbUIsQ0FBQ2pHLGlCQUFpQixFQUFFLE9BQU8sQ0FBQztnQkFDL0NnQyxlQUFlLENBQUNQLFdBQVcsRUFBRUUsaUJBQWlCLENBQUNGLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsYUFBYSxDQUFDO2NBQ2xGLENBQUMsQ0FBQztjQUNGekIsZ0JBQWdCLENBQUNnRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztnQkFDNUNnQixtQkFBbUIsQ0FBQ2hHLGdCQUFnQixFQUFFLE1BQU0sQ0FBQztnQkFDN0MrQixlQUFlLENBQUNQLFdBQVcsRUFBRUUsaUJBQWlCLENBQUNGLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsYUFBYSxDQUFDO2NBQ2xGLENBQUMsQ0FBQztjQUNGd0UseUJBQXlCLEVBQUU7Y0FDM0JDLGVBQWUsQ0FBQy9GLFNBQVMsRUFBRSxXQUFXLENBQUM7WUFDM0MsQ0FBQztZQTlGUXlFLGVBQWUsK0JBQUc7Y0FDdkIsSUFBSVgsTUFBTSxDQUFDa0MsS0FBSyxFQUFFO2dCQUNkLElBQU1DLEtBQUssR0FBR25DLE1BQU0sQ0FBQ2tDLEtBQUssQ0FBQ0UsUUFBUSxFQUFFO2dCQUNyQ3BELE1BQU0sR0FBR21ELEtBQUssQ0FBQ0UsSUFBSSxDQUFDQyxZQUFZLElBQUlILEtBQUssQ0FBQ0UsSUFBSSxDQUFDRSxFQUFFLElBQUksRUFBRTtjQUMzRCxDQUFDLE1BQU0sSUFBSXZDLE1BQU0sQ0FBQ3dDLFNBQVMsRUFBRTtnQkFDekJ4RCxNQUFNLEdBQUdnQixNQUFNLENBQUN3QyxTQUFTO2NBQzdCO1lBQ0osQ0FBQztZQVhHQyxRQUFRLEdBQUcsQ0FBQztZQUNWQyxXQUFXLEdBQUcsRUFBRTtZQUNoQkMsZUFBZSxHQUFHLEVBQUU7WUFrR3BCQyxhQUFhLEdBQUcsSUFBSXhDLE9BQU8sQ0FBQyxVQUFDeUMsT0FBTyxFQUFLO2NBQzNDLElBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07Z0JBQy9CcEMsZUFBZSxFQUFFO2dCQUNqQixJQUFJM0IsTUFBTSxJQUFJeUQsUUFBUSxJQUFJQyxXQUFXLEVBQUU7a0JBQ25DOUIsbUJBQW1CLEVBQUU7a0JBQ3JCb0MsYUFBYSxDQUFDRixRQUFRLENBQUM7a0JBQ3ZCRCxPQUFPLEVBQUU7Z0JBQ2I7Z0JBQ0FKLFFBQVEsRUFBRTtjQUNkLENBQUMsRUFBRUUsZUFBZSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQztZQUFBO1lBQUEsT0FFSUMsYUFBYTtVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQSxDQUN0QjtJQUFBO0VBQUE7RUFFRCxTQUFTSyxnQkFBZ0IsR0FBRztJQUN4QixPQUFPaEUsT0FBTywyQkFBb0IzQixNQUFNLEVBQUcsQ0FDdENnQyxJQUFJLENBQUMsVUFBQUksSUFBSSxFQUFJO01BQ1YxQyxRQUFRLEdBQUcwQyxJQUFJO01BQ2Z3RCxTQUFTLEVBQUU7TUFDWCxJQUFNQyxVQUFVLEdBQUdsSSxRQUFRLENBQUNtSSxjQUFjLENBQUMsc0JBQXNCLENBQUM7TUFDbEUsSUFBTUMsZ0JBQWdCLEdBQUcsSUFBSUMsZ0JBQWdCLENBQUMsVUFBVUMsU0FBUyxFQUFFO1FBQy9ERixnQkFBZ0IsQ0FBQ0csVUFBVSxFQUFFO1FBQzdCTixTQUFTLEVBQUU7UUFDWEcsZ0JBQWdCLENBQUNJLE9BQU8sQ0FBQ04sVUFBVSxFQUFFO1VBQUVPLFNBQVMsRUFBRSxJQUFJO1VBQUVDLE9BQU8sRUFBRTtRQUFLLENBQUMsQ0FBQztNQUM1RSxDQUFDLENBQUM7TUFDRk4sZ0JBQWdCLENBQUNJLE9BQU8sQ0FBQ04sVUFBVSxFQUFFO1FBQ2pDTyxTQUFTLEVBQUUsSUFBSTtRQUNmQyxPQUFPLEVBQUU7TUFDYixDQUFDLENBQUM7SUFFTixDQUFDLENBQUM7RUFDVjtFQUVBLFNBQVMvRSwyQkFBMkIsQ0FBQ3RDLFFBQVEsRUFBRXNILGFBQWEsRUFBRUMsWUFBWSxFQUFFO0lBQ3hFdkgsUUFBUSxDQUFDRSxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQ25CLElBQU1xSCxTQUFTLEdBQUd0QyxNQUFNLENBQUMvRSxFQUFFLENBQUNzSCxPQUFPLENBQUNILGFBQWEsQ0FBQyxDQUFDO01BQ25EO01BQ0EsSUFBSUUsU0FBUyxLQUFLdEMsTUFBTSxDQUFDcUMsWUFBWSxDQUFDLEVBQUU7UUFDcENwSCxFQUFFLENBQUNDLFNBQVMsQ0FBQzRELEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDL0IsQ0FBQyxNQUFNO1FBQ0g3RCxFQUFFLENBQUNDLFNBQVMsQ0FBQytELE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDbEM7SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBLFNBQVNvQixlQUFlLENBQUNuRSxLQUFLLEVBQUVzRyxJQUFJLEVBQUVqRyxPQUFPLEVBQUVrRyxHQUFHLEVBQUM7SUFDL0NoRyxPQUFPLENBQUNDLEdBQUcsQ0FBQytGLEdBQUcsQ0FBQztJQUNoQjtJQUNBeEcsaUJBQWlCLENBQUNDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFdBQUlpRyxJQUFJLEVBQUcsR0FBR0MsR0FBRztFQUNwRTtFQUVBLFNBQVNoRCxlQUFlLENBQUNpRCxLQUFLLEVBQUM7SUFDM0IsSUFBTUMsYUFBYSxHQUFHM0MsTUFBTSxDQUFDMEMsS0FBSyxDQUFDSCxPQUFPLENBQUNyRyxLQUFLLENBQUM7O0lBRWpEOztJQUdBLE9BQU9ILFdBQVcsR0FBRzRHLGFBQWE7RUFDdEM7RUFFQSxTQUFTaEQsaUJBQWlCLENBQUMrQyxLQUFLLEVBQUU7SUFDOUIsSUFBTUUsVUFBVSxHQUFHNUMsTUFBTSxDQUFDMEMsS0FBSyxDQUFDSCxPQUFPLENBQUNoRyxPQUFPLENBQUM7SUFDaEROLGlCQUFpQixDQUFDRixXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUNDLGFBQWEsR0FBRzRHLFVBQVU7SUFDN0Q1RyxhQUFhLEdBQUc0RyxVQUFVO0lBQzFCLE9BQU81RyxhQUFhO0VBQ3hCO0VBRUEsU0FBU3VFLG1CQUFtQixDQUFDc0MsS0FBSyxFQUFFQyxTQUFTLEVBQUU7SUFDM0MsSUFBTUMsT0FBTyxHQUFHRixLQUFLLENBQUMvQyxPQUFPLENBQUMsZUFBZSxDQUFDO0lBRTlDLElBQU1rRCxTQUFTLEdBQUdELE9BQU8sQ0FBQ3JKLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDbkQsSUFBTXVKLFVBQVUsR0FBR0YsT0FBTyxDQUFDbkosZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7SUFFakUsSUFBSXNKLGdCQUFnQixHQUFHbEQsTUFBTSxDQUFDZ0QsU0FBUyxDQUFDVCxPQUFPLENBQUNoRyxPQUFPLENBQUM7SUFFeERFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDd0csZ0JBQWdCLENBQUM7SUFJN0IsSUFBR0osU0FBUyxLQUFLLE1BQU0sRUFBQztNQUNwQnJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDb0csU0FBUyxDQUFDO01BQ3RCckcsT0FBTyxDQUFDQyxHQUFHLENBQUN3RyxnQkFBZ0IsQ0FBQztNQUM3QixJQUFHQSxnQkFBZ0IsRUFBQztRQUNoQkEsZ0JBQWdCLEdBQUdBLGdCQUFnQixHQUFHLENBQUM7UUFDdkNqSCxpQkFBaUIsQ0FBQ0YsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxhQUFhLEdBQUdrSCxnQkFBZ0I7TUFDdkU7TUFDQSxJQUFHQSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUM7UUFDdEJBLGdCQUFnQixHQUFHRCxVQUFVLENBQUNFLE1BQU07UUFDcENsSCxpQkFBaUIsQ0FBQ0YsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxhQUFhLEdBQUdrSCxnQkFBZ0I7TUFDdkU7SUFDSjtJQUNBLElBQUdKLFNBQVMsS0FBSyxPQUFPLEVBQUM7TUFDckJyRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ29HLFNBQVMsQ0FBQztNQUN0QnJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdUcsVUFBVSxDQUFDO01BQ3ZCLElBQUdDLGdCQUFnQixJQUFJRCxVQUFVLENBQUNFLE1BQU0sRUFBQztRQUNyQ0QsZ0JBQWdCLEdBQUcsQ0FBQztRQUNwQmpILGlCQUFpQixDQUFDRixXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUNDLGFBQWEsR0FBR2tILGdCQUFnQjtNQUN2RSxDQUFDLE1BQUk7UUFDREEsZ0JBQWdCLEdBQUdBLGdCQUFnQixHQUFHLENBQUM7UUFDdkNqSCxpQkFBaUIsQ0FBQ0YsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxhQUFhLEdBQUdrSCxnQkFBZ0I7TUFDdkU7SUFFSjtJQUNBekcsT0FBTyxDQUFDQyxHQUFHLENBQUN3RyxnQkFBZ0IsQ0FBQztJQUM3QmxILGFBQWEsR0FBR2tILGdCQUFnQjtJQUNoQyxPQUFPbEgsYUFBYTtFQUN4QjtFQUVBLFNBQVNvSCxhQUFhLEdBQUc7SUFDckIsSUFBTUMsUUFBUSxHQUFHLEdBQUc7SUFFcEJoRSxVQUFVLENBQUMsWUFBTTtNQUNiLElBQU1pRSxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJeEksUUFBUTtRQUFBLE9BQUtBLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLFVBQUFDLEVBQUU7VUFBQSxPQUFJQSxFQUFFLENBQUNDLFNBQVMsQ0FBQytELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFBQSxFQUFDO01BQUE7TUFDdEYsSUFBTXNFLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUl6SSxRQUFRO1FBQUEsT0FBS0EsUUFBUSxDQUFDRSxPQUFPLENBQUMsVUFBQUMsRUFBRTtVQUFBLE9BQUlBLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDNEQsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUFBLEVBQUM7TUFBQTtNQUVuRixJQUFJLENBQUN0QixNQUFNLEVBQUU7UUFDVCtGLFlBQVksQ0FBQzFKLGVBQWUsQ0FBQztRQUM3QjBKLFlBQVksQ0FBQ3pKLFlBQVksQ0FBQztRQUMxQndKLFlBQVksQ0FBQzNKLFVBQVUsQ0FBQztRQUN4QjJELFVBQVUsRUFBRTtRQUNaLE9BQU9zQixPQUFPLENBQUN5QyxPQUFPLENBQUMsS0FBSyxDQUFDO01BQ2pDO01BRUFrQyxZQUFZLENBQUM1SixVQUFVLENBQUM7TUFFeEIsT0FBTzhELE9BQU8sb0JBQWFELE1BQU0sZ0JBQWEsQ0FBQ00sSUFBSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtRQUN2RCxJQUFJQSxHQUFHLENBQUN5RixNQUFNLEVBQUU7VUFDWkQsWUFBWSxDQUFDMUosZUFBZSxDQUFDO1VBQzdCeUosWUFBWSxDQUFDeEosWUFBWSxDQUFDO1FBQzlCLENBQUMsTUFBTTtVQUNId0osWUFBWSxDQUFDekosZUFBZSxDQUFDO1VBQzdCMEosWUFBWSxDQUFDekosWUFBWSxDQUFDO1FBQzlCO1FBQ0F3RCxVQUFVLEVBQUU7TUFDaEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxFQUFFK0YsUUFBUSxDQUFDO0VBQ2hCO0VBRUEsU0FBU2hGLFdBQVcsQ0FBQ0YsR0FBRyxFQUFFO0lBQ3RCLElBQU1zRixVQUFVLEdBQUc7TUFDZkMsTUFBTSxFQUFFbEYsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUk7TUFDNUI4RSxNQUFNLEVBQUVoRyxNQUFNO01BQ2RtRyxTQUFTLEVBQUUsQ0FBQXhGLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFQyxLQUFLLE1BQUlELEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFeUYsSUFBSSxNQUFJekYsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUUwRixPQUFPLEtBQUksZUFBZTtNQUNyRUMsSUFBSSxFQUFFLENBQUEzRixHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRTRGLElBQUksS0FBSSxjQUFjO01BQ2pDQyxLQUFLLEVBQUUsQ0FBQTdGLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFNkYsS0FBSyxLQUFJO0lBQ3pCLENBQUM7SUFFRHBHLEtBQUssQ0FBQywwQ0FBMEMsRUFBRTtNQUM5Q3FHLE1BQU0sRUFBRSxNQUFNO01BQ2RwRyxPQUFPLEVBQUU7UUFDTCxjQUFjLEVBQUU7TUFDcEIsQ0FBQztNQUNEa0IsSUFBSSxFQUFFbUYsSUFBSSxDQUFDQyxTQUFTLENBQUNWLFVBQVU7SUFDbkMsQ0FBQyxDQUFDLFNBQU0sQ0FBQ2hILE9BQU8sQ0FBQzJILElBQUksQ0FBQztFQUMxQjtFQUVBLFNBQVMxQyxTQUFTLEdBQUc7SUFDakIsSUFBTTJDLEtBQUssR0FBRzVLLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7SUFDM0QsSUFBSXlLLEtBQUssSUFBSUEsS0FBSyxDQUFDbEIsTUFBTSxFQUFFO01BQ3ZCLElBQUc1RixjQUFjLEVBQUM7UUFDZDhHLEtBQUssQ0FBQ3JKLE9BQU8sQ0FBQyxVQUFBc0osSUFBSSxFQUFJO1VBQ2xCLElBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDckUsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1VBQy9DcUUsSUFBSSxDQUFDL0ksU0FBUyxHQUFHQyxRQUFRLENBQUMrSSxHQUFHLENBQUMsSUFBSSwwQ0FBMEMsR0FBR0EsR0FBRztVQUNsRixJQUFJL0ksUUFBUSxDQUFDK0ksR0FBRyxDQUFDLEVBQUU7WUFDZkQsSUFBSSxDQUFDN0ksZUFBZSxDQUFDLGdCQUFnQixDQUFDO1VBQzFDO1FBQ0osQ0FBQyxDQUFDO01BQ04sQ0FBQyxNQUFJO1FBQ0RnQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUNyQztJQUNKO0lBQ0E4SCxxQkFBcUIsQ0FBQ2hMLFFBQVEsQ0FBQztFQUNuQztFQUVBLFNBQVNnTCxxQkFBcUIsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3BDLElBQUksQ0FBQ0EsT0FBTyxFQUFFO01BQ1Y7SUFDSjtJQUNBLHdCQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsMEJBQUU7TUFBNUIsSUFBTUMsSUFBSTtNQUNYRCxPQUFPLENBQUN2SixTQUFTLENBQUMrRCxNQUFNLENBQUN5RixJQUFJLENBQUM7SUFDbEM7SUFDQUQsT0FBTyxDQUFDdkosU0FBUyxDQUFDNEQsR0FBRyxDQUFDaEQsTUFBTSxDQUFDO0VBQ2pDO0VBRUEsU0FBUzZJLFdBQVcsQ0FBQ0MsSUFBSSxFQUFFO0lBQ3ZCbkgsT0FBTyxrQkFBV21ILElBQUksRUFBRyxDQUNwQjlHLElBQUksQ0FBQyxVQUFBK0csSUFBSSxFQUFJO01BQ1YsSUFBTUMsS0FBSyxHQUFHRCxJQUFJO01BQ2xCRSxrQkFBa0IsQ0FBQ0QsS0FBSyxFQUFFdEgsTUFBTSxFQUFFb0gsSUFBSSxDQUFDO0lBQzNDLENBQUMsQ0FBQztFQUNWO0VBRUEsU0FBU25FLGVBQWUsQ0FBQ2dFLE9BQU8sRUFBRU8sY0FBYyxFQUFFO0lBQzlDLElBQU1DLE9BQU8sR0FBRztNQUNaQyxJQUFJLEVBQUUsSUFBSTtNQUNWQyxVQUFVLEVBQUUsS0FBSztNQUNqQkMsU0FBUyxFQUFFO0lBQ2YsQ0FBQztJQUVELElBQU1DLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FBQyxVQUFDQyxPQUFPLEVBQUs7TUFDbkRBLE9BQU8sQ0FBQ3ZLLE9BQU8sQ0FBQyxVQUFBd0ssS0FBSyxFQUFJO1FBQ3JCLElBQUlBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO1VBQ3RCRCxLQUFLLENBQUMzRixNQUFNLENBQUMzRSxTQUFTLENBQUM0RCxHQUFHLENBQUNrRyxjQUFjLENBQUM7UUFDOUMsQ0FBQyxNQUFNO1VBQ0hRLEtBQUssQ0FBQzNGLE1BQU0sQ0FBQzNFLFNBQVMsQ0FBQytELE1BQU0sQ0FBQytGLGNBQWMsQ0FBQztRQUNqRDtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsRUFBRUMsT0FBTyxDQUFDO0lBRVhJLFFBQVEsQ0FBQ3BELE9BQU8sQ0FBQ3dDLE9BQU8sQ0FBQztFQUM3QjtFQUVBLFNBQVNqRSx5QkFBeUIsR0FBRztJQUNqQyxJQUFNaEcsYUFBYSxHQUFHZixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUMvRCxJQUFJLENBQUNjLGFBQWEsRUFBRTtJQUVwQixJQUFNNkssUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUFDLFVBQUNDLE9BQU8sRUFBRUYsUUFBUSxFQUFLO01BQzdERSxPQUFPLENBQUN2SyxPQUFPLENBQUMsVUFBQXdLLEtBQUssRUFBSTtRQUNyQixJQUFJQSxLQUFLLENBQUNDLGNBQWMsSUFBSUQsS0FBSyxDQUFDRSxpQkFBaUIsSUFBSSxHQUFHLEVBQUU7VUFDeEQsSUFBTUMsS0FBSyxHQUFHbkwsYUFBYSxDQUFDWixnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztVQUMvRCtMLEtBQUssQ0FBQzNLLE9BQU8sQ0FBQyxVQUFDNEssSUFBSSxFQUFFbEcsQ0FBQyxFQUFLO1lBQ3ZCTCxVQUFVLENBQUMsWUFBTTtjQUNidUcsSUFBSSxDQUFDMUssU0FBUyxDQUFDNEQsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNsQyxDQUFDLEVBQUVZLENBQUMsR0FBRyxHQUFHLENBQUM7VUFDZixDQUFDLENBQUM7VUFDRjJGLFFBQVEsQ0FBQ1EsU0FBUyxDQUFDckwsYUFBYSxDQUFDO1FBQ3JDO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxFQUFFO01BQ0M0SyxTQUFTLEVBQUU7SUFDZixDQUFDLENBQUM7SUFFRkMsUUFBUSxDQUFDcEQsT0FBTyxDQUFDekgsYUFBYSxDQUFDO0VBQ25DO0VBR0EsU0FBU3VLLGtCQUFrQixDQUFDRCxLQUFLLEVBQUVnQixhQUFhLEVBQUVsQixJQUFJLEVBQUU7SUFDcERtQixZQUFZLENBQUN4SyxTQUFTLEdBQUcsRUFBRTtJQUMzQnlLLGlCQUFpQixDQUFDekssU0FBUyxHQUFHLEVBQUU7SUFDaEMsSUFBSSxFQUFDdUosS0FBSyxhQUFMQSxLQUFLLGVBQUxBLEtBQUssQ0FBRTNCLE1BQU0sR0FBRTtJQUNwQixJQUFNOEMsV0FBVyxHQUFHbkIsS0FBSyxDQUFDb0IsSUFBSSxDQUFDLFVBQUFDLElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUMzQyxNQUFNLEtBQUtzQyxhQUFhO0lBQUEsRUFBQztJQUNyRSxJQUFNTSxnQkFBZ0IsR0FBR0gsV0FBVyxJQUFJbkIsS0FBSyxDQUFDdUIsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUFILElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUMzQyxNQUFNLEtBQUtzQyxhQUFhO0lBQUEsRUFBQztJQUN0RyxJQUFNUyxjQUFjLEdBQUcsQ0FBQy9JLE1BQU0sSUFBSTRJLGdCQUFnQixHQUFJLEVBQUUsR0FBRyxFQUFFO0lBQzdELElBQU1JLFFBQVEsR0FBRzFCLEtBQUssQ0FBQ3VCLEtBQUssQ0FBQyxDQUFDLEVBQUVFLGNBQWMsQ0FBQztJQUMvQ0MsUUFBUSxDQUFDeEwsT0FBTyxDQUFDLFVBQUFtTCxJQUFJLEVBQUk7TUFDckJNLFdBQVcsQ0FBQ04sSUFBSSxFQUFFQSxJQUFJLENBQUMzQyxNQUFNLEtBQUtzQyxhQUFhLEVBQUVDLFlBQVksRUFBRVMsUUFBUSxFQUFFSixnQkFBZ0IsRUFBRXhCLElBQUksQ0FBQztJQUNwRyxDQUFDLENBQUM7SUFDRixJQUFJLENBQUN3QixnQkFBZ0IsSUFBSUgsV0FBVyxFQUFFO01BQ2xDUSxXQUFXLENBQUNSLFdBQVcsRUFBRSxJQUFJLEVBQUVELGlCQUFpQixFQUFFbEIsS0FBSyxFQUFFLEtBQUssRUFBRUYsSUFBSSxDQUFDO0lBQ3pFO0VBQ0o7RUFFQSxTQUFTNkIsV0FBVyxDQUFDTixJQUFJLEVBQUVPLGFBQWEsRUFBRUMsS0FBSyxFQUFFN0IsS0FBSyxFQUFFc0IsZ0JBQWdCLEVBQUV4QixJQUFJLEVBQUU7SUFDNUUsSUFBTWdDLFNBQVMsR0FBRyxTQUFaQSxTQUFTLENBQUlDLFFBQVEsRUFBbUI7TUFBQSxJQUFqQjVCLE9BQU8sdUVBQUcsQ0FBQyxDQUFDO01BQ3JDLHlCQUFnREEsT0FBTyxDQUEvQzZCLFNBQVM7UUFBVEEsU0FBUyxtQ0FBRyxLQUFLO1FBQUEsb0JBQXVCN0IsT0FBTyxDQUE1QjhCLFFBQVE7UUFBUkEsUUFBUSxrQ0FBRyxLQUFLO01BQzNDLElBQU1DLE9BQU8sR0FBR3ZOLFFBQVEsQ0FBQ3dOLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDN0NELE9BQU8sQ0FBQzlMLFNBQVMsQ0FBQzRELEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFFbkMsSUFBTW9JLFNBQVMsR0FBR3BDLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ04sUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUM3QyxJQUFNTyxRQUFRLEdBQUcvSixLQUFLLEdBQUcsSUFBSSxHQUFHZ0ssc0JBQXNCLENBQUNILFNBQVMsRUFBRXRDLElBQUksQ0FBQztNQUV2RSxJQUFJc0MsU0FBUyxJQUFJLENBQUMsRUFBRTtRQUNoQkYsT0FBTyxDQUFDOUwsU0FBUyxDQUFDNEQsR0FBRyxnQkFBU29JLFNBQVMsRUFBRztNQUM5QztNQUVBLElBQUlKLFNBQVMsSUFBSUosYUFBYSxJQUFJLENBQUNLLFFBQVEsRUFBRTtRQUN6Q0MsT0FBTyxDQUFDOUwsU0FBUyxDQUFDNEQsR0FBRyxDQUFDLEtBQUssQ0FBQztNQUNoQyxDQUFDLE1BQU0sSUFBSWlJLFFBQVEsRUFBRTtRQUNqQkMsT0FBTyxDQUFDOUwsU0FBUyxDQUFDNEQsR0FBRyxDQUFDLFdBQVcsQ0FBQztNQUN0QztNQUVBa0ksT0FBTyxDQUFDekwsU0FBUyw0RUFFWDJMLFNBQVMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHQSxTQUFTLEdBQUdBLFNBQVMsK0JBQzVDUixhQUFhLElBQUksQ0FBQ0ssUUFBUSxHQUFHLG9CQUFvQixHQUFHTyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxHQUFHLEVBQUUsZ0dBR3hGWixhQUFhLElBQUksQ0FBQ0ssUUFBUSxHQUFHRixRQUFRLENBQUNyRCxNQUFNLEdBQUcrRCxVQUFVLENBQUNWLFFBQVEsQ0FBQ3JELE1BQU0sQ0FBQyxnR0FHMUVxRCxRQUFRLENBQUNXLE1BQU0sZ0dBR2ZKLFFBQVEsR0FBR0UsWUFBWSxDQUFDRixRQUFRLENBQUMsR0FBRyxLQUFLLG1DQUVsRDtNQUVHVCxLQUFLLENBQUNjLE1BQU0sQ0FBQ1QsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJTixhQUFhLElBQUksQ0FBQ04sZ0JBQWdCLEVBQUU7TUFDcEMsSUFBTXNCLEtBQUssR0FBRzVDLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ2hCLElBQUksQ0FBQztNQUNqQyxJQUFJckIsS0FBSyxDQUFDNEMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2xCZCxTQUFTLENBQUM5QixLQUFLLENBQUM0QyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7VUFBRVgsUUFBUSxFQUFFO1FBQUssQ0FBQyxDQUFDO01BQ25EO01BQ0FILFNBQVMsQ0FBQ1QsSUFBSSxFQUFFO1FBQUVXLFNBQVMsRUFBRTtNQUFLLENBQUMsQ0FBQztNQUNwQyxJQUFJaEMsS0FBSyxDQUFDNEMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2xCZCxTQUFTLENBQUM5QixLQUFLLENBQUM0QyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7VUFBRVgsUUFBUSxFQUFFO1FBQUssQ0FBQyxDQUFDO01BQ25EO0lBQ0osQ0FBQyxNQUFNO01BQ0hILFNBQVMsQ0FBQ1QsSUFBSSxDQUFDO0lBQ25CO0VBQ0o7RUFFQSxTQUFTd0IsaUJBQWlCLENBQUNDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUU7SUFDbkQsSUFBTXJELE9BQU8sR0FBR2hMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDa08sUUFBUSxDQUFDO0lBRWhELElBQUksQ0FBQ25ELE9BQU8sRUFBRTtNQUNWaEksT0FBTyxDQUFDMkIsS0FBSyxDQUFDLG9CQUFvQixDQUFDO01BQ25DO0lBQ0o7SUFFQSxJQUFNaUgsUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUFDLFVBQUNDLE9BQU8sRUFBSztNQUNuREEsT0FBTyxDQUFDdkssT0FBTyxDQUFDLFVBQUN3SyxLQUFLLEVBQUs7UUFDdkIsSUFBSUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7VUFDdEJwRyxVQUFVLENBQUMsWUFBSztZQUNab0YsT0FBTyxDQUFDdkosU0FBUyxDQUFDNEQsR0FBRyxDQUFDK0ksU0FBUyxDQUFDO1VBQ3BDLENBQUMsRUFBRUMsS0FBSyxDQUFDO1FBQ2I7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFFRnpDLFFBQVEsQ0FBQ3BELE9BQU8sQ0FBQ3dDLE9BQU8sQ0FBQztFQUM3QjtFQUVBLFNBQVM2QyxZQUFZLENBQUMvQyxHQUFHLEVBQUV3RCxZQUFZLEVBQUU7SUFDckMsSUFBSSxDQUFDeEQsR0FBRyxFQUFFO01BQ047SUFDSjtJQUNBLElBQUl5RCxPQUFPLEdBQUczSyxLQUFLLEdBQUdrSCxHQUFHLGtEQUEyQ0EsR0FBRyxDQUFFO0lBRXpFd0QsWUFBWSxHQUFJQyxPQUFPLElBQUl6RCxHQUFHO0lBQzlCLE9BQU8vSSxRQUFRLENBQUMrSSxHQUFHLENBQUMsSUFBSXdELFlBQVk7RUFDeEM7RUFFQSxTQUFTUixVQUFVLENBQUMvSixNQUFNLEVBQUU7SUFDeEIsT0FBTyxJQUFJLEdBQUdBLE1BQU0sQ0FBQ3lLLFFBQVEsRUFBRSxDQUFDNUIsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUM1QztFQUVBLFNBQVNnQixzQkFBc0IsQ0FBQ2EsS0FBSyxFQUFFdEQsSUFBSSxFQUFFO0lBQ3pDLElBQUlzRCxLQUFLLElBQUksQ0FBQyxFQUFFLHVCQUFnQnRELElBQUksY0FBSXNELEtBQUs7SUFDN0MsSUFBSUEsS0FBSyxJQUFJLEVBQUUsRUFBRSx1QkFBZ0J0RCxJQUFJO0lBQ3JDLElBQUlzRCxLQUFLLElBQUksRUFBRSxFQUFFLHVCQUFnQnRELElBQUk7SUFDckMsSUFBSXNELEtBQUssSUFBSSxFQUFFLEVBQUUsdUJBQWdCdEQsSUFBSTtJQUNyQyxJQUFJc0QsS0FBSyxJQUFJLEVBQUUsRUFBRSx1QkFBZ0J0RCxJQUFJO0lBQ3JDLElBQUlzRCxLQUFLLElBQUksR0FBRyxFQUFFLHVCQUFnQnRELElBQUk7SUFDdEMsSUFBSXNELEtBQUssSUFBSSxHQUFHLEVBQUUsdUJBQWdCdEQsSUFBSTtJQUN0QyxJQUFJc0QsS0FBSyxJQUFJLEdBQUcsRUFBRSx1QkFBZ0J0RCxJQUFJO0lBQ3RDLElBQUlzRCxLQUFLLElBQUksR0FBRyxFQUFFLHVCQUFnQnRELElBQUk7SUFDdEMsSUFBSXNELEtBQUssSUFBSSxHQUFHLEVBQUUsdUJBQWdCdEQsSUFBSTtFQUMxQztFQUVBLFNBQVN1RCxXQUFXLEdBQUc7SUFDbkIsSUFBSSxDQUFDM0ssTUFBTSxFQUFFO01BQ1Q7SUFDSjtJQUNBLElBQU00SyxNQUFNLEdBQUc7TUFBRTVFLE1BQU0sRUFBRWhHO0lBQU8sQ0FBQztJQUNqQ0ksS0FBSyxDQUFDckUsTUFBTSxHQUFHLFFBQVEsRUFBRTtNQUNyQnNFLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsY0FBYyxFQUFFO01BQ3BCLENBQUM7TUFDRG9HLE1BQU0sRUFBRSxNQUFNO01BQ2RsRixJQUFJLEVBQUVtRixJQUFJLENBQUNDLFNBQVMsQ0FBQ2lFLE1BQU07SUFDL0IsQ0FBQyxDQUFDLENBQUN0SyxJQUFJLENBQUMsVUFBQUMsR0FBRztNQUFBLE9BQUlBLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUNyQkosSUFBSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtNQUNUbEMsU0FBUyxHQUFHLElBQUk7TUFDaEJoQixhQUFhLENBQUNoQixlQUFlLEVBQUUsUUFBUSxDQUFDO01BQ3hDdUIsZ0JBQWdCLENBQUN2QixlQUFlLEVBQUUsUUFBUSxDQUFDO01BQzNDd0YsVUFBVSxDQUFDLFlBQUs7UUFDWmpFLGdCQUFnQixDQUFDdkIsZUFBZSxFQUFFLGNBQWMsQ0FBQztRQUNqRGdCLGFBQWEsQ0FBQ2hCLGVBQWUsRUFBRSxNQUFNLENBQUM7UUFDdENnQixhQUFhLENBQUNoQixlQUFlLEVBQUUsUUFBUSxDQUFDO01BQzVDLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDUHdGLFVBQVUsQ0FBQyxZQUFJO1FBQ1grRCxhQUFhLEVBQUU7TUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUVaLENBQUMsQ0FBQztFQUNWOztFQUVBOztFQUVBbEUsSUFBSSxFQUFFO0FBRVYsQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV95b3VyX3Byb21vJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgc3RhZ2VzVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0b3JfX3N0YWdlcy1pdGVtJyksXG4gICAgICAgIHN0YWdlc0Jsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFnZXNfX2l0ZW0nKSxcbiAgICAgICAgc3RhZ2VzTWF0Y2h1cFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZ2VzX190YWJzLWl0ZW0nKSxcbiAgICAgICAgcHJlZGljdG9yUGVyc0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdG9yX19wZXJzLWxlZnQnKSxcbiAgICAgICAgcHJlZGljdG9yUGVyc1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3Rvcl9fcGVycy1yaWdodCcpLFxuICAgICAgICBtYWtlUHJlZGljdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWtlLXByZWRpY3QnKSxcbiAgICAgICAgbWF0Y2h1cEFycm93UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VzX190YWJzLXJpZ2h0JyksXG4gICAgICAgIG1hdGNodXBBcnJvd0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VzX190YWJzLWxlZnQnKSxcbiAgICAgICAgcHJvZ3Jlc3NCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX2JvZHlcIiksXG4gICAgICAgIHByb2dyZXNzSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZ3Jlc3NfX2l0ZW0nKSxcbiAgICAgICAgcHJlZGljdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RvcicpO1xuXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRlc3RDb3VudGllcyA9XG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgbGVmdDogJ2FmcmljYScsIHJpZ2h0OiAnYWZyaWNhJyB9LFxuICAgICAgICAgICAgeyBsZWZ0OiAnYXNpYScsIHJpZ2h0OiAnYXNpYScgfSxcbiAgICAgICAgICAgIHsgbGVmdDogJ2V1cm9wYScsIHJpZ2h0OiAnZXVyb3BhJyB9LFxuICAgICAgICAgICAgeyBsZWZ0OiAnb2NlYW4nLCByaWdodDogJ29jZWFuJyB9LFxuICAgICAgICAgICAgeyBsZWZ0OiAndXNhJywgcmlnaHQ6ICd1c2EnIH1cbiAgICAgICAgXVxuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICBsZXQgbG9jYWxlID0gXCJlblwiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgYWN0aXZlU3RhZ2UgPSAxXG4gICAgbGV0IGFjdGl2ZU1hdGNodXAgPSAxXG5cbiAgICBsZXQgcHJlZGljdG9yVGFic0RhdGEgPSBbXG4gICAgICAgIHtzdGFnZTogMSwgYWN0aXZlTWF0Y2h1cDogMSwgc2NvcmU6IFt7dGVhbTE6IDEsIHRlYW0yOiAwfSwge3RlYW0xOiAyLCB0ZWFtMjogMH0sIHt0ZWFtMTogMywgdGVhbTI6IDB9LCB7dGVhbTE6IDMsIHRlYW0yOiAwfSwge3RlYW0xOiAzLCB0ZWFtMjogMH1dfSxcbiAgICAgICAge3N0YWdlOiAyLCBhY3RpdmVNYXRjaHVwOiAxLCBzY29yZTogW3t0ZWFtMTogMSwgdGVhbTI6IDB9LCB7dGVhbTE6IDIsIHRlYW0yOiAwfSwge3RlYW0xOiAzLCB0ZWFtMjogMH0sIHt0ZWFtMTogMywgdGVhbTI6IDB9LCB7dGVhbTE6IDMsIHRlYW0yOiAwfV19LFxuICAgICAgICB7c3RhZ2U6IDMsIGFjdGl2ZU1hdGNodXA6IDEsIHNjb3JlOiBbe3RlYW0xOiAxLCB0ZWFtMjogMH0sIHt0ZWFtMTogMiwgdGVhbTI6IDB9LCB7dGVhbTE6IDMsIHRlYW0yOiAwfSwge3RlYW0xOiAzLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9XX0sXG4gICAgICAgIHtzdGFnZTogNCwgYWN0aXZlTWF0Y2h1cDogMSwgc2NvcmU6IFt7dGVhbTE6IDEsIHRlYW0yOiAwfSwge3RlYW0xOiAyLCB0ZWFtMjogMH0sIHt0ZWFtMTogMywgdGVhbTI6IDB9LCB7dGVhbTE6IDMsIHRlYW0yOiAwfV19LFxuICAgICAgICB7c3RhZ2U6IDUsIGFjdGl2ZU1hdGNodXA6IDEsIHNjb3JlOiBbe3RlYW0xOiAxLCB0ZWFtMjogMH0sIHt0ZWFtMTogMiwgdGVhbTI6IDB9LCB7dGVhbTE6IDMsIHRlYW0yOiAwfSwge3RlYW0xOiAzLCB0ZWFtMjogMH1dfSxcbiAgICAgICAge3N0YWdlOiA2LCBhY3RpdmVNYXRjaHVwOiAxLCBzY29yZTogW3t0ZWFtMTogMSwgdGVhbTI6IDB9LCB7dGVhbTE6IDIsIHRlYW0yOiAwfV19LFxuICAgICAgICB7c3RhZ2U6IDcsIGFjdGl2ZU1hdGNodXA6IDEsIHNjb3JlOiBbe3RlYW0xOiAxLCB0ZWFtMjogMH1dfSxcbiAgICBdXG5cbiAgICBmdW5jdGlvbiBzZXRBY3RpdmVCbG9ja3MgKHN0YWdlLCBtYXRjaHVwKXtcblxuICAgICAgICBpZihzdGFnZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHN0YWdlID0gMVxuICAgICAgICB9XG4gICAgICAgIGlmKG1hdGNodXAgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBtYXRjaHVwID0gMVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cobWF0Y2h1cClcblxuICAgICAgICBjb25zdCBhY3RpdmVTdGFnZVRhYiA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJlZGljdG9yX19zdGFnZXMtaXRlbVtkYXRhLXN0YWdlPVwiJHtzdGFnZX1cIl1gKVxuICAgICAgICBjb25zdCBhY3RpdmVTdGFnZUJsb2NrID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdGFnZXNfX2l0ZW1bZGF0YS1zdGFnZT1cIiR7c3RhZ2V9XCJdYCk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU1hdGNodXBzID0gYWN0aXZlU3RhZ2VCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCcubWF0Y2h1cCcpO1xuICAgICAgICBjb25zdCBhY3RpdmVNYXRjaHVwVGFicyA9IGFjdGl2ZVN0YWdlQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlc19fdGFicy1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRlYW0xQ291bnRlcnMgPSBhY3RpdmVTdGFnZUJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1hdGNodXAtY291bnRlcj1cIjFcIl0nKTtcbiAgICAgICAgY29uc3QgYWN0aXZlVGVhbTJDb3VudGVycyA9IGFjdGl2ZVN0YWdlQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWF0Y2h1cC1jb3VudGVyPVwiMlwiXScpO1xuICAgICAgICBjb25zdCBhY3RpdmVUZWFtMUNvdW50ZXJOdW0gPSBhY3RpdmVUZWFtMUNvdW50ZXJzW21hdGNodXAgLSAxXS5xdWVyeVNlbGVjdG9yKCcubWF0Y2h1cF9fY291bnRlci1udW1iZXInKTtcbiAgICAgICAgY29uc3QgYWN0aXZlVGVhbTJDb3VudGVyTnVtID0gYWN0aXZlVGVhbTJDb3VudGVyc1ttYXRjaHVwIC0gMV0ucXVlcnlTZWxlY3RvcignLm1hdGNodXBfX2NvdW50ZXItbnVtYmVyJyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVRlYW0xQ291bnRlcnNbMV0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVRlYW0xQ291bnRlck51bSlcblxuICAgICAgICBhY3RpdmVUZWFtMUNvdW50ZXJOdW0udGV4dENvbnRlbnQgPSBwcmVkaWN0b3JUYWJzRGF0YVtzdGFnZSAtIDFdLnNjb3JlW21hdGNodXAgLSAxXS50ZWFtMVxuICAgICAgICBhY3RpdmVUZWFtMkNvdW50ZXJOdW0udGV4dENvbnRlbnQgPSBwcmVkaWN0b3JUYWJzRGF0YVtzdGFnZSAtIDFdLnNjb3JlW21hdGNodXAgLSAxXS50ZWFtMlxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByZWRpY3RvclRhYnNEYXRhW3N0YWdlIC0gMV0uc2NvcmVbbWF0Y2h1cCAtIDFdKVxuXG4gICAgICAgIHRvZ2dsZUFjdGl2ZUJ5RGF0YUF0dHJpYnV0ZShzdGFnZXNUYWJzLCAnc3RhZ2UnLCBzdGFnZSk7XG4gICAgICAgIHRvZ2dsZUFjdGl2ZUJ5RGF0YUF0dHJpYnV0ZShzdGFnZXNCbG9ja3MsICdzdGFnZScsIHN0YWdlKTtcbiAgICAgICAgdG9nZ2xlQWN0aXZlQnlEYXRhQXR0cmlidXRlKGFjdGl2ZU1hdGNodXBUYWJzLCAnbWF0Y2h1cCcsIG1hdGNodXApO1xuICAgICAgICB0b2dnbGVBY3RpdmVCeURhdGFBdHRyaWJ1dGUoYWN0aXZlTWF0Y2h1cHMsICdtYXRjaHVwJywgbWF0Y2h1cCk7XG5cbiAgICAgICAgbWFrZVByZWRpY3RCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlJywgc3RhZ2UpO1xuICAgICAgICBtYWtlUHJlZGljdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWF0Y2h1cCcsIG1hdGNodXApO1xuXG4gICAgfVxuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgLy8gY2hlY2tVc2VyQXV0aCgpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDEwMDApXG5cbiAgICAgICAgICAgIHNldEFjdGl2ZUJsb2NrcyhhY3RpdmVTdGFnZSwgYWN0aXZlTWF0Y2h1cClcblxuICAgICAgICAgICAgc3RhZ2VzVGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnaW9ucyA9IFsnYWZyaWNhJywgJ3VzYScsICdldXJvcGEnLCAnb2NlYW4nLCAnYXNpYSddXG5cbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yUGVyc0xlZnQuY2xhc3NMaXN0LnJlbW92ZSguLi5yZWdpb25zKVxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0b3JQZXJzUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSguLi5yZWdpb25zKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByZWRpY3RvclRhYnNEYXRhKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWdpb25zW3ByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cF0pXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cClcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhZ2VGcm9tVGFiKHRhYilcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlQmxvY2tzKGFjdGl2ZVN0YWdlLCBwcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXApXG5cbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yUGVyc0xlZnQuY2xhc3NMaXN0LmFkZChgJHtyZWdpb25zW3ByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cCAtIDFdfWApXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3RvclBlcnNSaWdodC5jbGFzc0xpc3QuYWRkKGAke3JlZ2lvbnNbcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwIC0gMV19YClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHN0YWdlc01hdGNodXBUYWJzLmZvckVhY2goKHRhYiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaHVwRnJvbVRhYih0YWIpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnaW9ucyA9IFsnYWZyaWNhJywgJ3VzYScsICdldXJvcGEnLCAnb2NlYW4nLCAnYXNpYSddXG5cbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yUGVyc0xlZnQuY2xhc3NMaXN0LnJlbW92ZSguLi5yZWdpb25zKVxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0b3JQZXJzUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSguLi5yZWdpb25zKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yUGVyc0xlZnQuY2xhc3NMaXN0LmFkZChgJHtyZWdpb25zW2FjdGl2ZU1hdGNodXAgLSAxXX1gKVxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0b3JQZXJzUmlnaHQuY2xhc3NMaXN0LmFkZChgJHtyZWdpb25zW2FjdGl2ZU1hdGNodXAgLSAxXX1gKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cClcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlQmxvY2tzKGFjdGl2ZVN0YWdlLCBwcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXApXG5cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KFwiLm1hdGNodXBfX2NvdW50ZXItaW5jcmVhc2VcIikpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidG5TdGFnZU51bSA9IE51bWJlcihlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1zdGFnZV0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhZ2UnKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuTWF0Y2h1cE51bSA9IE51bWJlcihlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tYXRjaHVwXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXRjaHVwJykpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0blRlYW1OdW0gPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtbWF0Y2h1cC1jb3VudGVyXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXRjaHVwLWNvdW50ZXInKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbVNjb3JlID0gTnVtYmVyKHByZWRpY3RvclRhYnNEYXRhW2J0blN0YWdlTnVtIC0gMV0uc2NvcmVbYnRuTWF0Y2h1cE51bSAtIDFdW2B0ZWFtJHtidG5UZWFtTnVtfWBdKVxuICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaHVwU2NvcmUoYnRuU3RhZ2VOdW0sIGB0ZWFtJHtidG5UZWFtTnVtfWAsIGJ0bk1hdGNodXBOdW0sIHRlYW1TY29yZSArIDEpXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJsb2NrcyhidG5TdGFnZU51bSwgYnRuTWF0Y2h1cE51bSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KFwiLm1hdGNodXBfX2NvdW50ZXItZGVjcmVhc2VcIikpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidG5TdGFnZU51bSA9IE51bWJlcihlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1zdGFnZV0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhZ2UnKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuVGVhbU51bSA9IE51bWJlcihlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tYXRjaHVwLWNvdW50ZXJdJykuZ2V0QXR0cmlidXRlKCdkYXRhLW1hdGNodXAtY291bnRlcicpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidG5NYXRjaHVwTnVtID0gTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLW1hdGNodXBdJykuZ2V0QXR0cmlidXRlKCdkYXRhLW1hdGNodXAnKSlcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtU2NvcmUgPSBOdW1iZXIocHJlZGljdG9yVGFic0RhdGFbYnRuU3RhZ2VOdW0gLSAxXS5zY29yZVtidG5NYXRjaHVwTnVtIC0gMV1bYHRlYW0ke2J0blRlYW1OdW19YF0pXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2NvcmUgPSB0ZWFtU2NvcmUgPyB0ZWFtU2NvcmUgLSAxIDogMFxuXG4gICAgICAgICAgICAgICAgICAgIHNldE1hdGNodXBTY29yZShidG5TdGFnZU51bSwgYHRlYW0ke2J0blRlYW1OdW19YCwgYnRuTWF0Y2h1cE51bSwgbmV3U2NvcmUpXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlQmxvY2tzKGJ0blN0YWdlTnVtLCBidG5NYXRjaHVwTnVtKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbWF0Y2h1cEFycm93UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgIHNldE1hdGNodXBGcm9tQXJyb3cobWF0Y2h1cEFycm93UmlnaHQsIFwicmlnaHRcIilcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVCbG9ja3MoYWN0aXZlU3RhZ2UsIHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBtYXRjaHVwQXJyb3dMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICBzZXRNYXRjaHVwRnJvbUFycm93KG1hdGNodXBBcnJvd0xlZnQsIFwibGVmdFwiKVxuICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJsb2NrcyhhY3RpdmVTdGFnZSwgcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNob3dQcm9ncmVzc0l0ZW1zT25TY3JvbGwoKVxuICAgICAgICAgICAgYW5pbWF0ZU9uU2Nyb2xsKHByZWRpY3RvciwgXCJzaG93RGVjb3JcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb2Fscy1vci16ZXJvcy1sZWFnZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlQWN0aXZlQnlEYXRhQXR0cmlidXRlKGVsZW1lbnRzLCBhdHRyaWJ1dGVOYW1lLCB2YWx1ZVRvTWF0Y2gpIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBOdW1iZXIoZWwuZGF0YXNldFthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbCwgZWwuZGF0YXNldFthdHRyaWJ1dGVOYW1lXSwgdmFsdWVUb01hdGNoKTtcbiAgICAgICAgICAgIGlmIChhdHRyVmFsdWUgPT09IE51bWJlcih2YWx1ZVRvTWF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE1hdGNodXBTY29yZShzdGFnZSwgdGVhbSwgbWF0Y2h1cCwgbnVtKXtcbiAgICAgICAgY29uc29sZS5sb2cobnVtKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyggcHJlZGljdG9yVGFic0RhdGFbc3RhZ2UgLSAxXS5zY29yZVttYXRjaHVwXSlcbiAgICAgICAgcHJlZGljdG9yVGFic0RhdGFbc3RhZ2UgLSAxXS5zY29yZVttYXRjaHVwIC0gMV1bYCR7dGVhbX1gXSA9IG51bVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFN0YWdlRnJvbVRhYihibG9jayl7XG4gICAgICAgIGNvbnN0IGJsb2NrU3RhZ2VOdW0gPSBOdW1iZXIoYmxvY2suZGF0YXNldC5zdGFnZSlcblxuICAgICAgICAvLyBwcmVkaWN0b3JUYWJzRGF0YVtibG9ja1N0YWdlTnVtIC0gMV0uc3RhZ2UgPSBibG9ja1N0YWdlTnVtO1xuXG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVN0YWdlID0gYmxvY2tTdGFnZU51bTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRNYXRjaHVwRnJvbVRhYihibG9jaykge1xuICAgICAgICBjb25zdCBtYXRjaHVwTnVtID0gTnVtYmVyKGJsb2NrLmRhdGFzZXQubWF0Y2h1cCk7XG4gICAgICAgIHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cCA9IG1hdGNodXBOdW07XG4gICAgICAgIGFjdGl2ZU1hdGNodXAgPSBtYXRjaHVwTnVtO1xuICAgICAgICByZXR1cm4gYWN0aXZlTWF0Y2h1cDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRNYXRjaHVwRnJvbUFycm93KGFycm93LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgdGFiV3JhcCA9IGFycm93LmNsb3Nlc3QoXCIuc3RhZ2VzX190YWJzXCIpXG5cbiAgICAgICAgY29uc3QgYWN0aXZlVGFiID0gdGFiV3JhcC5xdWVyeVNlbGVjdG9yKFwiLl9hY3RpdmVcIik7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYnMgPSB0YWJXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhZ2VzX190YWJzLWl0ZW1cIik7XG5cbiAgICAgICAgbGV0IGFjdGl2ZVRhYk1hdGNodXAgPSBOdW1iZXIoYWN0aXZlVGFiLmRhdGFzZXQubWF0Y2h1cCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFiTWF0Y2h1cCk7XG5cblxuXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpcmVjdGlvbilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYk1hdGNodXApO1xuICAgICAgICAgICAgaWYoYWN0aXZlVGFiTWF0Y2h1cCl7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiTWF0Y2h1cCA9IGFjdGl2ZVRhYk1hdGNodXAgLSAxO1xuICAgICAgICAgICAgICAgIHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cCA9IGFjdGl2ZVRhYk1hdGNodXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihhY3RpdmVUYWJNYXRjaHVwID09PSAwKXtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWJNYXRjaHVwID0gYWN0aXZlVGFicy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwID0gYWN0aXZlVGFiTWF0Y2h1cDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihkaXJlY3Rpb24gPT09ICdyaWdodCcpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGlyZWN0aW9uKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFicylcbiAgICAgICAgICAgIGlmKGFjdGl2ZVRhYk1hdGNodXAgPj0gYWN0aXZlVGFicy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYk1hdGNodXAgPSAxO1xuICAgICAgICAgICAgICAgIHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cCA9IGFjdGl2ZVRhYk1hdGNodXA7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWJNYXRjaHVwID0gYWN0aXZlVGFiTWF0Y2h1cCArIDE7XG4gICAgICAgICAgICAgICAgcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwID0gYWN0aXZlVGFiTWF0Y2h1cDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYk1hdGNodXApO1xuICAgICAgICBhY3RpdmVNYXRjaHVwID0gYWN0aXZlVGFiTWF0Y2h1cDtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZU1hdGNodXA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc3QgbG9hZFRpbWUgPSAyMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGxvYWRUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vlaykge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQsIHdlZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZU9uU2Nyb2xsKGVsZW1lbnQsIGFuaW1hdGlvbkNsYXNzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMlxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChhbmltYXRpb25DbGFzcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcm9ncmVzc0l0ZW1zT25TY3JvbGwoKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19ib2R5XCIpXG4gICAgICAgIGlmICghcHJvZ3Jlc3NCbG9jaykgcmV0dXJuXG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+PSAwLjMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBwcm9ncmVzc0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3NfX2l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGkgKiAyMDApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShwcm9ncmVzc0Jsb2NrKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRocmVzaG9sZDogMC4zXG4gICAgICAgIH0pXG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShwcm9ncmVzc0Jsb2NrKVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5wb2ludHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9uaXRvclZpc2liaWxpdHkoc2VsZWN0b3IsIGFuaW1hdGlvbiwgZGVsYXkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWxlbWVudCBub3QgZm91bmQhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzKSByZXR1cm4gYHByaXplXyR7d2Vla30tJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS00LTEwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTEtMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0yNi01MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTUxLTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTc2LTEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMDEtMTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEyNi0xNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTUxLTE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNzYtMjAwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBsb2FkVHJhbnNsYXRpb25zKCkudGhlbihpbml0KSDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cbiAgICBpbml0KClcblxufSkoKTtcbiJdfQ==
