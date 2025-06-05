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
  var _document$querySelect, _document$querySelect2, _document$querySelect3;
  var apiURL = 'https://fav-prom.com/api_divine_battle';
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
    matchupArrowRight = document.querySelectorAll('.stages__tabs-right'),
    matchupArrowLeft = document.querySelectorAll('.stages__tabs-left'),
    progressBlock = document.querySelector(".progress__body"),
    progressItems = document.querySelectorAll('.progress__item'),
    predictor = document.querySelector('.predictor'),
    overlay = document.querySelector('.popups'),
    popup = document.querySelector('.popup'),
    closePopup = document.querySelector('.popup__close');
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
  var locale = sessionStorage.getItem("locale") || "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var activeStage = 1;
  var activeMatchup = 1;
  var predictorTabsData = [{
    stage: 1,
    activeMatchup: 1,
    score: [{
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }]
  }, {
    stage: 2,
    activeMatchup: 1,
    score: [{
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }]
  }, {
    stage: 3,
    activeMatchup: 1,
    score: [{
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }]
  }, {
    stage: 4,
    activeMatchup: 1,
    score: [{
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }]
  }, {
    stage: 5,
    activeMatchup: 1,
    score: [{
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }]
  }, {
    stage: 6,
    activeMatchup: 1,
    score: [{
      team1: 0,
      team2: 0
    }, {
      team1: 0,
      team2: 0
    }]
  }, {
    stage: 7,
    activeMatchup: 1,
    score: [{
      team1: 0,
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
  userId = Number(sessionStorage.getItem("userId")) || null;
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

      // reportError(err);
      //
      // document.querySelector('.fav-page').style.display = 'none';
      // if (window.location.href.startsWith("https://www.favbet.hr/")) {
      //     window.location.href = '/promocije/promocija/stub/';
      // } else {
      //     window.location.href = '/promos/promo/stub/';
      // }

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
              checkUserAuth();

              //go to predict
              document.querySelector(".toPredict").addEventListener('click', function () {
                var targetElement = document.getElementById("predict");
                var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 2;
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
                });
              });
              var openPopup = document.querySelector('.unconfirm-popup');
              setPopup(popup, overlay, closePopup, openPopup);
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
              matchupArrowRight.forEach(function (tab, i) {
                tab.addEventListener("click", function () {
                  var currentStage = Number(document.querySelector('[data-stage]._active').getAttribute('data-stage'));
                  setMatchupFromArrow(tab, "right");
                  setActiveBlocks(currentStage, predictorTabsData[currentStage - 1].activeMatchup);
                });
              });
              matchupArrowLeft.forEach(function (tab, i) {
                tab.addEventListener("click", function () {
                  var currentStage = Number(document.querySelector('[data-stage]._active').getAttribute('data-stage'));
                  setMatchupFromArrow(tab, "left");
                  setActiveBlocks(currentStage, predictorTabsData[currentStage - 1].activeMatchup);
                });
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
      var targetNode = document.getElementById("divine-battle");
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
      console.log(userId);
      if (!userId) {
        hideElements(participateBtns);
        // hideElements(redirectBtns);
        makePredictBtn.classList.add('hide');
        showElements(unauthMsgs);
        hideLoader();
        return Promise.resolve(false);
      }
      if (userId) {
        //userid
        hideElements(unauthMsgs);
        showElements(participateBtns);
        makePredictBtn.classList.remove('hide');
      }

      // setTimeout(() => {
      //     else {
      //         showElements(participateBtns);
      //         hideElements(redirectBtns);
      //     }
      //     hideLoader();
      // }, 500)

      // return request(`/favuser/${userId}?nocache=1`).then(res => {
      //     if (res.userid) {
      //         hideElements(participateBtns);
      //         showElements(redirectBtns);
      //     } else {
      //         showElements(participateBtns);
      //         hideElements(redirectBtns);
      //     }
      //     hideLoader();
      // });
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
  function setPopup(popup, overlay, closeBtn, openBtn) {
    popup.classList.add('hide');
    overlay.classList.add('overlay-opacity');
    openBtn.addEventListener('click', function (e) {
      overlay.classList.remove('overlay-opacity');
      popup.classList.remove('hide');
      document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', function (e) {
      overlay.classList.add('overlay-opacity');
      popup.classList.add('hide');
      document.body.style.overflow = 'auto';
    });
    document.addEventListener('click', function (e) {
      var popupSelector = '.' + popup.classList[0];
      if (!e.target.closest(popupSelector) && e.target !== openBtn) {
        overlay.classList.add('overlay-opacity');
        popup.classList.add('hide');
        document.body.style.overflow = 'auto';
      }
    });
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
  loadTranslations().then(init);

  // test

  function setPredictorNormal() {
    var block = document.querySelector(".predictor");
    block.classList.remove('_lock');
    block.classList.remove('_done');
  }
  function setPredictorLock() {
    var block = document.querySelector(".predictor");
    block.classList.add('_lock');
    block.classList.remove('_done');
  }
  function toggleConfirm(item) {
    if (item.classList.contains('confirmed')) {
      item.classList.add('unconfirmed');
      item.classList.remove('confirmed');
      return;
    }
    if (item.classList.contains('unconfirmed')) {
      item.classList.add('confirmed');
      item.classList.remove('unconfirmed');
      return;
    }
  }
  function toggleWinLose(item) {
    if (item.classList.contains('_win')) {
      item.classList.add('_lose');
      item.classList.remove('_win');
      return;
    } else {
      item.classList.add('_win');
    }
    if (item.classList.contains('_lose')) {
      item.classList.add('_win');
      item.classList.remove('_lose');
      return;
    }
  }
  document.querySelector(".confirm-btn").addEventListener('click', function (e) {
    document.querySelectorAll('.predictor__confirm').forEach(function (item) {
      toggleConfirm(item);
    });
  });
  document.querySelector(".status-btn").addEventListener('click', function (e) {
    document.querySelectorAll('.stages__predict-status').forEach(function (item) {
      toggleWinLose(item);
    });
  });
  function setPredictorDone() {
    var block = document.querySelector(".predictor");
    block.classList.add('_lock');
    block.classList.add('_done');
  }
  (_document$querySelect = document.querySelector('.lock-btn')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener('click', setPredictorLock);
  (_document$querySelect2 = document.querySelector('.done-btn')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.addEventListener('click', setPredictorDone);
  (_document$querySelect3 = document.querySelector('.normal-btn')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.addEventListener('click', setPredictorNormal);
  document.querySelector('.dark-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "100300268");
    }
    window.location.reload();
  });
  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect4;
    (_document$querySelect4 = document.querySelector(".menu-btn")) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.addEventListener("click", function () {
      var _document$querySelect5;
      (_document$querySelect5 = document.querySelector(".menu-test")) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.classList.toggle("hide");
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInN0YWdlc1RhYnMiLCJzdGFnZXNCbG9ja3MiLCJzdGFnZXNNYXRjaHVwVGFicyIsInByZWRpY3RvclBlcnNMZWZ0IiwicHJlZGljdG9yUGVyc1JpZ2h0IiwibWFrZVByZWRpY3RCdG4iLCJtYXRjaHVwQXJyb3dSaWdodCIsIm1hdGNodXBBcnJvd0xlZnQiLCJwcm9ncmVzc0Jsb2NrIiwicHJvZ3Jlc3NJdGVtcyIsInByZWRpY3RvciIsIm92ZXJsYXkiLCJwb3B1cCIsImNsb3NlUG9wdXAiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsInRlc3RDb3VudGllcyIsImxlZnQiLCJyaWdodCIsImxvYWRlckJ0biIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImFjdGl2ZVN0YWdlIiwiYWN0aXZlTWF0Y2h1cCIsInByZWRpY3RvclRhYnNEYXRhIiwic3RhZ2UiLCJzY29yZSIsInRlYW0xIiwidGVhbTIiLCJzZXRBY3RpdmVCbG9ja3MiLCJtYXRjaHVwIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZVN0YWdlVGFiIiwiYWN0aXZlU3RhZ2VCbG9jayIsImFjdGl2ZU1hdGNodXBzIiwiYWN0aXZlTWF0Y2h1cFRhYnMiLCJhY3RpdmVUZWFtMUNvdW50ZXJzIiwiYWN0aXZlVGVhbTJDb3VudGVycyIsImFjdGl2ZVRlYW0xQ291bnRlck51bSIsImFjdGl2ZVRlYW0yQ291bnRlck51bSIsInRleHRDb250ZW50IiwidG9nZ2xlQWN0aXZlQnlEYXRhQXR0cmlidXRlIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsImFkZCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRhcmdldFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwib3BlblBvcHVwIiwic2V0UG9wdXAiLCJzZXRUaW1lb3V0IiwidGFiIiwicmVnaW9ucyIsInNldFN0YWdlRnJvbVRhYiIsImkiLCJzZXRNYXRjaHVwRnJvbVRhYiIsImUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiYnRuU3RhZ2VOdW0iLCJnZXRBdHRyaWJ1dGUiLCJidG5NYXRjaHVwTnVtIiwiYnRuVGVhbU51bSIsInRlYW1TY29yZSIsInNldE1hdGNodXBTY29yZSIsIm5ld1Njb3JlIiwiY3VycmVudFN0YWdlIiwic2V0TWF0Y2h1cEZyb21BcnJvdyIsInNob3dQcm9ncmVzc0l0ZW1zT25TY3JvbGwiLCJhbmltYXRlT25TY3JvbGwiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJ0YXJnZXROb2RlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhdHRyaWJ1dGVOYW1lIiwidmFsdWVUb01hdGNoIiwiYXR0clZhbHVlIiwiZGF0YXNldCIsInRlYW0iLCJudW0iLCJibG9jayIsImJsb2NrU3RhZ2VOdW0iLCJtYXRjaHVwTnVtIiwiYXJyb3ciLCJkaXJlY3Rpb24iLCJ0YWJXcmFwIiwiYWN0aXZlVGFiIiwiYWN0aXZlVGFicyIsImFjdGl2ZVRhYk1hdGNodXAiLCJsZW5ndGgiLCJsb2FkVGltZSIsInNob3dFbGVtZW50cyIsImhpZGVFbGVtZW50cyIsInJlcG9ydEVycm9yIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImxvY2F0aW9uIiwiaHJlZiIsInVzZXJpZCIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWsiLCJkYXRhIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJhbmltYXRpb25DbGFzcyIsIm9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwiaXRlbXMiLCJpdGVtIiwidW5vYnNlcnZlIiwiY3VycmVudFVzZXJJZCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInBvaW50cyIsImFwcGVuZCIsImluZGV4IiwibW9uaXRvclZpc2liaWxpdHkiLCJzZWxlY3RvciIsImFuaW1hdGlvbiIsImRlbGF5IiwiZGVmYXVsdFZhbHVlIiwibmVlZEtleSIsInRvU3RyaW5nIiwiY2xvc2VCdG4iLCJvcGVuQnRuIiwicG9wdXBTZWxlY3RvciIsInBsYWNlIiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJzZXRQcmVkaWN0b3JOb3JtYWwiLCJzZXRQcmVkaWN0b3JMb2NrIiwidG9nZ2xlQ29uZmlybSIsImNvbnRhaW5zIiwidG9nZ2xlV2luTG9zZSIsInNldFByZWRpY3RvckRvbmUiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQUE7RUFFVCxJQUFNQSxNQUFNLEdBQUcsd0NBQXdDO0VBRXZELElBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2hEQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JEQyxlQUFlLEdBQUdKLFFBQVEsQ0FB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QUFFLENBQUM7TUFBQ0MsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUM7RUFBQyxDQUFDLEVBQ25KO0lBQUNILEtBQUssRUFBRSxDQUFDO0lBQUVGLGFBQWEsRUFBRSxDQUFDO0lBQUVHLEtBQUssRUFBRSxDQUFDO01BQUNDLEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUM7RUFBQyxDQUFDLEVBQzdIO0lBQUNILEtBQUssRUFBRSxDQUFDO0lBQUVGLGFBQWEsRUFBRSxDQUFDO0lBQUVHLEtBQUssRUFBRSxDQUFDO01BQUNDLEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUM7RUFBQyxDQUFDLEVBQzdIO0lBQUNILEtBQUssRUFBRSxDQUFDO0lBQUVGLGFBQWEsRUFBRSxDQUFDO0lBQUVHLEtBQUssRUFB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SyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNuQyxJQUFHekIsTUFBTSxFQUFDO01BQ04zQixjQUFjLENBQUMwTixVQUFVLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUMsTUFBSTtNQUNEMU4sY0FBYyxDQUFDMk4sT0FBTyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7SUFDakQ7SUFDQWpLLE1BQU0sQ0FBQ3lFLFFBQVEsQ0FBQ3lGLE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7RUFFRnJRLFFBQVEsQ0FBQzZGLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07SUFBQTtJQUNoRCwwQkFBQTdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQywyREFBbkMsdUJBQXFDNEYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFBQTtNQUNqRSwwQkFBQTdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQywyREFBcEMsdUJBQXNDMkIsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xFLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUdOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfZGl2aW5lX2JhdHRsZSdcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHN0YWdlc1RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdG9yX19zdGFnZXMtaXRlbScpLFxuICAgICAgICBzdGFnZXNCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZ2VzX19pdGVtJyksXG4gICAgICAgIHN0YWdlc01hdGNodXBUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlc19fdGFicy1pdGVtJyksXG4gICAgICAgIHByZWRpY3RvclBlcnNMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3Rvcl9fcGVycy1sZWZ0JyksXG4gICAgICAgIHByZWRpY3RvclBlcnNSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0b3JfX3BlcnMtcmlnaHQnKSxcbiAgICAgICAgbWFrZVByZWRpY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFrZS1wcmVkaWN0JyksXG4gICAgICAgIG1hdGNodXBBcnJvd1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlc19fdGFicy1yaWdodCcpLFxuICAgICAgICBtYXRjaHVwQXJyb3dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlc19fdGFicy1sZWZ0JyksXG4gICAgICAgIHByb2dyZXNzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19ib2R5XCIpLFxuICAgICAgICBwcm9ncmVzc0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyZXNzX19pdGVtJyksXG4gICAgICAgIHByZWRpY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0b3InKSxcbiAgICAgICAgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKSxcbiAgICAgICAgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKSxcbiAgICAgICAgY2xvc2VQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2UnKTtcblxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZXN0Q291bnRpZXMgPVxuICAgICAgICBbXG4gICAgICAgICAgICB7IGxlZnQ6ICdhZnJpY2EnLCByaWdodDogJ2FmcmljYScgfSxcbiAgICAgICAgICAgIHsgbGVmdDogJ2FzaWEnLCByaWdodDogJ2FzaWEnIH0sXG4gICAgICAgICAgICB7IGxlZnQ6ICdldXJvcGEnLCByaWdodDogJ2V1cm9wYScgfSxcbiAgICAgICAgICAgIHsgbGVmdDogJ29jZWFuJywgcmlnaHQ6ICdvY2VhbicgfSxcbiAgICAgICAgICAgIHsgbGVmdDogJ3VzYScsIHJpZ2h0OiAndXNhJyB9XG4gICAgICAgIF1cblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgbGV0IGxvY2FsZSA9ICBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwidWtcIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGFjdGl2ZVN0YWdlID0gMVxuICAgIGxldCBhY3RpdmVNYXRjaHVwID0gMVxuXG4gICAgbGV0IHByZWRpY3RvclRhYnNEYXRhID0gW1xuICAgICAgICB7c3RhZ2U6IDEsIGFjdGl2ZU1hdGNodXA6IDEsIHNjb3JlOiBbe3RlYW0xOiAwLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9LCB7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9XX0sXG4gICAgICAgIHtzdGFnZTogMiwgYWN0aXZlTWF0Y2h1cDogMSwgc2NvcmU6IFt7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9LCB7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH1dfSxcbiAgICAgICAge3N0YWdlOiAzLCBhY3RpdmVNYXRjaHVwOiAxLCBzY29yZTogW3t0ZWFtMTogMCwgdGVhbTI6IDB9LCB7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9LCB7dGVhbTE6IDAsIHRlYW0yOiAwfV19LFxuICAgICAgICB7c3RhZ2U6IDQsIGFjdGl2ZU1hdGNodXA6IDEsIHNjb3JlOiBbe3RlYW0xOiAwLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9LCB7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH1dfSxcbiAgICAgICAge3N0YWdlOiA1LCBhY3RpdmVNYXRjaHVwOiAxLCBzY29yZTogW3t0ZWFtMTogMCwgdGVhbTI6IDB9LCB7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9XX0sXG4gICAgICAgIHtzdGFnZTogNiwgYWN0aXZlTWF0Y2h1cDogMSwgc2NvcmU6IFt7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH1dfSxcbiAgICAgICAge3N0YWdlOiA3LCBhY3RpdmVNYXRjaHVwOiAxLCBzY29yZTogW3t0ZWFtMTogMCwgdGVhbTI6IDB9XX0sXG4gICAgXVxuXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlQmxvY2tzIChzdGFnZSwgbWF0Y2h1cCl7XG5cbiAgICAgICAgaWYoc3RhZ2UgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBzdGFnZSA9IDFcbiAgICAgICAgfVxuICAgICAgICBpZihtYXRjaHVwID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgbWF0Y2h1cCA9IDFcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKG1hdGNodXApXG5cbiAgICAgICAgY29uc3QgYWN0aXZlU3RhZ2VUYWIgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByZWRpY3Rvcl9fc3RhZ2VzLWl0ZW1bZGF0YS1zdGFnZT1cIiR7c3RhZ2V9XCJdYClcbiAgICAgICAgY29uc3QgYWN0aXZlU3RhZ2VCbG9jayA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3RhZ2VzX19pdGVtW2RhdGEtc3RhZ2U9XCIke3N0YWdlfVwiXWApO1xuICAgICAgICBjb25zdCBhY3RpdmVNYXRjaHVwcyA9IGFjdGl2ZVN0YWdlQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLm1hdGNodXAnKTtcbiAgICAgICAgY29uc3QgYWN0aXZlTWF0Y2h1cFRhYnMgPSBhY3RpdmVTdGFnZUJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFnZXNfX3RhYnMtaXRlbScpO1xuICAgICAgICBjb25zdCBhY3RpdmVUZWFtMUNvdW50ZXJzID0gYWN0aXZlU3RhZ2VCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tYXRjaHVwLWNvdW50ZXI9XCIxXCJdJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRlYW0yQ291bnRlcnMgPSBhY3RpdmVTdGFnZUJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1hdGNodXAtY291bnRlcj1cIjJcIl0nKTtcbiAgICAgICAgY29uc3QgYWN0aXZlVGVhbTFDb3VudGVyTnVtID0gYWN0aXZlVGVhbTFDb3VudGVyc1ttYXRjaHVwIC0gMV0ucXVlcnlTZWxlY3RvcignLm1hdGNodXBfX2NvdW50ZXItbnVtYmVyJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRlYW0yQ291bnRlck51bSA9IGFjdGl2ZVRlYW0yQ291bnRlcnNbbWF0Y2h1cCAtIDFdLnF1ZXJ5U2VsZWN0b3IoJy5tYXRjaHVwX19jb3VudGVyLW51bWJlcicpO1xuICAgICAgICAvL1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVUZWFtMUNvdW50ZXJzWzFdKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVUZWFtMUNvdW50ZXJOdW0pXG5cbiAgICAgICAgYWN0aXZlVGVhbTFDb3VudGVyTnVtLnRleHRDb250ZW50ID0gcHJlZGljdG9yVGFic0RhdGFbc3RhZ2UgLSAxXS5zY29yZVttYXRjaHVwIC0gMV0udGVhbTFcbiAgICAgICAgYWN0aXZlVGVhbTJDb3VudGVyTnVtLnRleHRDb250ZW50ID0gcHJlZGljdG9yVGFic0RhdGFbc3RhZ2UgLSAxXS5zY29yZVttYXRjaHVwIC0gMV0udGVhbTJcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcmVkaWN0b3JUYWJzRGF0YVtzdGFnZSAtIDFdLnNjb3JlW21hdGNodXAgLSAxXSlcblxuICAgICAgICB0b2dnbGVBY3RpdmVCeURhdGFBdHRyaWJ1dGUoc3RhZ2VzVGFicywgJ3N0YWdlJywgc3RhZ2UpO1xuICAgICAgICB0b2dnbGVBY3RpdmVCeURhdGFBdHRyaWJ1dGUoc3RhZ2VzQmxvY2tzLCAnc3RhZ2UnLCBzdGFnZSk7XG4gICAgICAgIHRvZ2dsZUFjdGl2ZUJ5RGF0YUF0dHJpYnV0ZShhY3RpdmVNYXRjaHVwVGFicywgJ21hdGNodXAnLCBtYXRjaHVwKTtcbiAgICAgICAgdG9nZ2xlQWN0aXZlQnlEYXRhQXR0cmlidXRlKGFjdGl2ZU1hdGNodXBzLCAnbWF0Y2h1cCcsIG1hdGNodXApO1xuXG4gICAgICAgIG1ha2VQcmVkaWN0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGFnZScsIHN0YWdlKTtcbiAgICAgICAgbWFrZVByZWRpY3RCdG4uc2V0QXR0cmlidXRlKCdkYXRhLW1hdGNodXAnLCBtYXRjaHVwKTtcblxuICAgIH1cblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VySWQgPSBudWxsO1xuXG4gICAgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpIHx8IG51bGxcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyByZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG5cbiAgICAgICAgICAgIC8vZ28gdG8gcHJlZGljdFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b1ByZWRpY3RcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlZGljdFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gMjtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBvcGVuUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5jb25maXJtLXBvcHVwJyk7XG5cbiAgICAgICAgICAgIHNldFBvcHVwKHBvcHVwLCBvdmVybGF5LCBjbG9zZVBvcHVwLCBvcGVuUG9wdXApXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMTAwMClcblxuICAgICAgICAgICAgc2V0QWN0aXZlQmxvY2tzKGFjdGl2ZVN0YWdlLCBhY3RpdmVNYXRjaHVwKVxuXG4gICAgICAgICAgICBzdGFnZXNUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdpb25zID0gWydhZnJpY2EnLCAndXNhJywgJ2V1cm9wYScsICdvY2VhbicsICdhc2lhJ11cblxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0b3JQZXJzTGVmdC5jbGFzc0xpc3QucmVtb3ZlKC4uLnJlZ2lvbnMpXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3RvclBlcnNSaWdodC5jbGFzc0xpc3QucmVtb3ZlKC4uLnJlZ2lvbnMpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJlZGljdG9yVGFic0RhdGEpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlZ2lvbnNbcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwXSlcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwKVxuXG5cblxuICAgICAgICAgICAgICAgICAgICBzZXRTdGFnZUZyb21UYWIodGFiKVxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVCbG9ja3MoYWN0aXZlU3RhZ2UsIHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cClcblxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0b3JQZXJzTGVmdC5jbGFzc0xpc3QuYWRkKGAke3JlZ2lvbnNbcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwIC0gMV19YClcbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yUGVyc1JpZ2h0LmNsYXNzTGlzdC5hZGQoYCR7cmVnaW9uc1twcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXAgLSAxXX1gKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc3RhZ2VzTWF0Y2h1cFRhYnMuZm9yRWFjaCgodGFiLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHNldE1hdGNodXBGcm9tVGFiKHRhYilcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdpb25zID0gWydhZnJpY2EnLCAndXNhJywgJ2V1cm9wYScsICdvY2VhbicsICdhc2lhJ11cblxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0b3JQZXJzTGVmdC5jbGFzc0xpc3QucmVtb3ZlKC4uLnJlZ2lvbnMpXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3RvclBlcnNSaWdodC5jbGFzc0xpc3QucmVtb3ZlKC4uLnJlZ2lvbnMpXG5cblxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0b3JQZXJzTGVmdC5jbGFzc0xpc3QuYWRkKGAke3JlZ2lvbnNbYWN0aXZlTWF0Y2h1cCAtIDFdfWApXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3RvclBlcnNSaWdodC5jbGFzc0xpc3QuYWRkKGAke3JlZ2lvbnNbYWN0aXZlTWF0Y2h1cCAtIDFdfWApXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwKVxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVCbG9ja3MoYWN0aXZlU3RhZ2UsIHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cClcblxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoXCIubWF0Y2h1cF9fY291bnRlci1pbmNyZWFzZVwiKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0blN0YWdlTnVtID0gTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXN0YWdlXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFnZScpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidG5NYXRjaHVwTnVtID0gTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLW1hdGNodXBdJykuZ2V0QXR0cmlidXRlKCdkYXRhLW1hdGNodXAnKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuVGVhbU51bSA9IE51bWJlcihlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tYXRjaHVwLWNvdW50ZXJdJykuZ2V0QXR0cmlidXRlKCdkYXRhLW1hdGNodXAtY291bnRlcicpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtU2NvcmUgPSBOdW1iZXIocHJlZGljdG9yVGFic0RhdGFbYnRuU3RhZ2VOdW0gLSAxXS5zY29yZVtidG5NYXRjaHVwTnVtIC0gMV1bYHRlYW0ke2J0blRlYW1OdW19YF0pXG4gICAgICAgICAgICAgICAgICAgIHNldE1hdGNodXBTY29yZShidG5TdGFnZU51bSwgYHRlYW0ke2J0blRlYW1OdW19YCwgYnRuTWF0Y2h1cE51bSwgdGVhbVNjb3JlICsgMSlcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlQmxvY2tzKGJ0blN0YWdlTnVtLCBidG5NYXRjaHVwTnVtKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoXCIubWF0Y2h1cF9fY291bnRlci1kZWNyZWFzZVwiKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0blN0YWdlTnVtID0gTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXN0YWdlXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFnZScpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidG5UZWFtTnVtID0gTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLW1hdGNodXAtY291bnRlcl0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF0Y2h1cC1jb3VudGVyJykpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0bk1hdGNodXBOdW0gPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtbWF0Y2h1cF0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF0Y2h1cCcpKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1TY29yZSA9IE51bWJlcihwcmVkaWN0b3JUYWJzRGF0YVtidG5TdGFnZU51bSAtIDFdLnNjb3JlW2J0bk1hdGNodXBOdW0gLSAxXVtgdGVhbSR7YnRuVGVhbU51bX1gXSlcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTY29yZSA9IHRlYW1TY29yZSA/IHRlYW1TY29yZSAtIDEgOiAwXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2h1cFNjb3JlKGJ0blN0YWdlTnVtLCBgdGVhbSR7YnRuVGVhbU51bX1gLCBidG5NYXRjaHVwTnVtLCBuZXdTY29yZSlcblxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVCbG9ja3MoYnRuU3RhZ2VOdW0sIGJ0bk1hdGNodXBOdW0pXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIG1hdGNodXBBcnJvd1JpZ2h0LmZvckVhY2goKHRhYiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U3RhZ2UgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3RhZ2VdLl9hY3RpdmUnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhZ2UnKSlcblxuICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaHVwRnJvbUFycm93KHRhYiwgXCJyaWdodFwiKVxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVCbG9ja3MoY3VycmVudFN0YWdlLCBwcmVkaWN0b3JUYWJzRGF0YVtjdXJyZW50U3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBtYXRjaHVwQXJyb3dMZWZ0LmZvckVhY2goKHRhYiwgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGFnZSA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zdGFnZV0uX2FjdGl2ZScpLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFnZScpKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2h1cEZyb21BcnJvdyh0YWIsIFwibGVmdFwiKVxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVCbG9ja3MoY3VycmVudFN0YWdlLCBwcmVkaWN0b3JUYWJzRGF0YVtjdXJyZW50U3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG5cblxuICAgICAgICAgICAgc2hvd1Byb2dyZXNzSXRlbXNPblNjcm9sbCgpXG4gICAgICAgICAgICBhbmltYXRlT25TY3JvbGwocHJlZGljdG9yLCBcInNob3dEZWNvclwiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdmluZS1iYXR0bGVcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZUJ5RGF0YUF0dHJpYnV0ZShlbGVtZW50cywgYXR0cmlidXRlTmFtZSwgdmFsdWVUb01hdGNoKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gTnVtYmVyKGVsLmRhdGFzZXRbYXR0cmlidXRlTmFtZV0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWwsIGVsLmRhdGFzZXRbYXR0cmlidXRlTmFtZV0sIHZhbHVlVG9NYXRjaCk7XG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlID09PSBOdW1iZXIodmFsdWVUb01hdGNoKSkge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRNYXRjaHVwU2NvcmUoc3RhZ2UsIHRlYW0sIG1hdGNodXAsIG51bSl7XG4gICAgICAgIGNvbnNvbGUubG9nKG51bSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHByZWRpY3RvclRhYnNEYXRhW3N0YWdlIC0gMV0uc2NvcmVbbWF0Y2h1cF0pXG4gICAgICAgIHByZWRpY3RvclRhYnNEYXRhW3N0YWdlIC0gMV0uc2NvcmVbbWF0Y2h1cCAtIDFdW2Ake3RlYW19YF0gPSBudW1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTdGFnZUZyb21UYWIoYmxvY2spe1xuICAgICAgICBjb25zdCBibG9ja1N0YWdlTnVtID0gTnVtYmVyKGJsb2NrLmRhdGFzZXQuc3RhZ2UpXG5cbiAgICAgICAgLy8gcHJlZGljdG9yVGFic0RhdGFbYmxvY2tTdGFnZU51bSAtIDFdLnN0YWdlID0gYmxvY2tTdGFnZU51bTtcblxuXG4gICAgICAgIHJldHVybiBhY3RpdmVTdGFnZSA9IGJsb2NrU3RhZ2VOdW07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TWF0Y2h1cEZyb21UYWIoYmxvY2spIHtcbiAgICAgICAgY29uc3QgbWF0Y2h1cE51bSA9IE51bWJlcihibG9jay5kYXRhc2V0Lm1hdGNodXApO1xuICAgICAgICBwcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXAgPSBtYXRjaHVwTnVtO1xuICAgICAgICBhY3RpdmVNYXRjaHVwID0gbWF0Y2h1cE51bTtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZU1hdGNodXA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TWF0Y2h1cEZyb21BcnJvdyhhcnJvdywgZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHRhYldyYXAgPSBhcnJvdy5jbG9zZXN0KFwiLnN0YWdlc19fdGFic1wiKVxuXG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYiA9IHRhYldyYXAucXVlcnlTZWxlY3RvcihcIi5fYWN0aXZlXCIpO1xuICAgICAgICBjb25zdCBhY3RpdmVUYWJzID0gdGFiV3JhcC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0YWdlc19fdGFicy1pdGVtXCIpO1xuXG4gICAgICAgIGxldCBhY3RpdmVUYWJNYXRjaHVwID0gTnVtYmVyKGFjdGl2ZVRhYi5kYXRhc2V0Lm1hdGNodXApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYk1hdGNodXApO1xuXG5cblxuICAgICAgICBpZihkaXJlY3Rpb24gPT09ICdsZWZ0Jyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkaXJlY3Rpb24pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVUYWJNYXRjaHVwKTtcbiAgICAgICAgICAgIGlmKGFjdGl2ZVRhYk1hdGNodXApe1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYk1hdGNodXAgPSBhY3RpdmVUYWJNYXRjaHVwIC0gMTtcbiAgICAgICAgICAgICAgICBwcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXAgPSBhY3RpdmVUYWJNYXRjaHVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoYWN0aXZlVGFiTWF0Y2h1cCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiTWF0Y2h1cCA9IGFjdGl2ZVRhYnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cCA9IGFjdGl2ZVRhYk1hdGNodXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoZGlyZWN0aW9uID09PSAncmlnaHQnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpcmVjdGlvbilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYnMpXG4gICAgICAgICAgICBpZihhY3RpdmVUYWJNYXRjaHVwID49IGFjdGl2ZVRhYnMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWJNYXRjaHVwID0gMTtcbiAgICAgICAgICAgICAgICBwcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXAgPSBhY3RpdmVUYWJNYXRjaHVwO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiTWF0Y2h1cCA9IGFjdGl2ZVRhYk1hdGNodXAgKyAxO1xuICAgICAgICAgICAgICAgIHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cCA9IGFjdGl2ZVRhYk1hdGNodXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVUYWJNYXRjaHVwKTtcbiAgICAgICAgYWN0aXZlTWF0Y2h1cCA9IGFjdGl2ZVRhYk1hdGNodXA7XG4gICAgICAgIHJldHVybiBhY3RpdmVNYXRjaHVwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcklkKVxuXG4gICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIC8vIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodXNlcklkICkgeyAvL3VzZXJpZFxuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBtYWtlUHJlZGljdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgc2hvd0VsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAvLyB9LCA1MDApXG5cbiAgICAgICAgICAgIC8vIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgLy8gICAgICAgICBzaG93RWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICBzaG93RWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWspIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7d2Vla31gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCB3ZWVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVPblNjcm9sbChlbGVtZW50LCBhbmltYXRpb25DbGFzcykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLjJcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGlvbkNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UHJvZ3Jlc3NJdGVtc09uU2Nyb2xsKCkge1xuICAgICAgICBjb25zdCBwcm9ncmVzc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fYm9keVwiKVxuICAgICAgICBpZiAoIXByb2dyZXNzQmxvY2spIHJldHVyblxuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gMC4zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvZ3Jlc3NCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2dyZXNzX19pdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpICogMjAwKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUocHJvZ3Jlc3NCbG9jaylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuM1xuICAgICAgICB9KVxuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUocHJvZ3Jlc3NCbG9jaylcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2Vlaykge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEzIDogMTA7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbml0b3JWaXNpYmlsaXR5KHNlbGVjdG9yLCBhbmltYXRpb24sIGRlbGF5KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VsZW1lbnQgbm90IGZvdW5kIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChhbmltYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXAocG9wdXAsIG92ZXJsYXksIGNsb3NlQnRuLCBvcGVuQnRuKXtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICBvcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIH0pXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cFNlbGVjdG9yID0gJy4nICsgcG9wdXAuY2xhc3NMaXN0WzBdO1xuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KHBvcHVwU2VsZWN0b3IpICYmIGUudGFyZ2V0ICE9PSBvcGVuQnRuKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzKSByZXR1cm4gYHByaXplXyR7d2Vla30tJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS00LTEwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTEtMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0yNi01MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTUxLTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTc2LTEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMDEtMTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEyNi0xNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTUxLTE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNzYtMjAwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKCkudGhlbihpbml0KVxuXG4gICAgLy8gdGVzdFxuXG5cbiAgICBmdW5jdGlvbiBzZXRQcmVkaWN0b3JOb3JtYWwoKSB7XG4gICAgICAgbGV0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0b3JcIilcblxuICAgICAgICBibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICBibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdfZG9uZScpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJlZGljdG9yTG9jaygpIHtcbiAgICAgICAgbGV0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0b3JcIilcblxuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICBibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdfZG9uZScpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlQ29uZmlybShpdGVtKXtcbiAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbmZpcm1lZCcpKXtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgndW5jb25maXJtZWQnKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnY29uZmlybWVkJyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygndW5jb25maXJtZWQnKSl7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm1lZCcpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd1bmNvbmZpcm1lZCcpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVXaW5Mb3NlKGl0ZW0pe1xuXG5cbiAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ193aW4nKSl7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19sb3NlJyk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ193aW4nKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX3dpbicpXG4gICAgICAgIH1cbiAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ19sb3NlJykpe1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdfd2luJyk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19sb3NlJyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdG9yX19jb25maXJtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlQ29uZmlybShpdGVtKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0dXMtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlc19fcHJlZGljdC1zdGF0dXMnKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVXaW5Mb3NlKGl0ZW0pO1xuICAgICAgICB9KVxuICAgIH0pXG5cblxuXG4gICAgZnVuY3Rpb24gc2V0UHJlZGljdG9yRG9uZSgpIHtcbiAgICAgICAgbGV0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0b3JcIilcblxuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2stYnRuJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0UHJlZGljdG9yTG9jayk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvbmUtYnRuJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0UHJlZGljdG9yRG9uZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vcm1hbC1idG4nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRQcmVkaWN0b3JOb3JtYWwpO1xuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjEwMDMwMDI2OFwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG59KSgpO1xuIl19
