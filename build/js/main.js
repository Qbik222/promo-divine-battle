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
                  stagesTabs.forEach(function (item) {
                    item.style.pointerEvents = "none";
                  });
                  setTimeout(function () {
                    stagesTabs.forEach(function (item) {
                      item.style.pointerEvents = "initial";
                    });
                  }, 500);
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
                  stagesMatchupTabs.forEach(function (item) {
                    item.style.pointerEvents = "none";
                  });
                  setTimeout(function () {
                    stagesMatchupTabs.forEach(function (item) {
                      item.style.pointerEvents = "initial";
                    });
                  }, 500);
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
                  matchupArrowRight.forEach(function (item) {
                    item.style.pointerEvents = "none";
                  });
                  setTimeout(function () {
                    matchupArrowRight.forEach(function (item) {
                      item.style.pointerEvents = "initial";
                    });
                  }, 500);
                  var currentStage = Number(document.querySelector('[data-stage]._active').getAttribute('data-stage'));
                  setMatchupFromArrow(tab, "right");
                  setActiveBlocks(currentStage, predictorTabsData[currentStage - 1].activeMatchup);
                });
              });
              matchupArrowLeft.forEach(function (tab, i) {
                tab.addEventListener("click", function () {
                  matchupArrowLeft.forEach(function (item) {
                    item.style.pointerEvents = "none";
                  });
                  setTimeout(function () {
                    matchupArrowLeft.forEach(function (item) {
                      item.style.pointerEvents = "initial";
                    });
                  }, 500);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInN0YWdlc1RhYnMiLCJzdGFnZXNCbG9ja3MiLCJzdGFnZXNNYXRjaHVwVGFicyIsInByZWRpY3RvclBlcnNMZWZ0IiwicHJlZGljdG9yUGVyc1JpZ2h0IiwibWFrZVByZWRpY3RCdG4iLCJtYXRjaHVwQXJyb3dSaWdodCIsIm1hdGNodXBBcnJvd0xlZnQiLCJwcm9ncmVzc0Jsb2NrIiwicHJvZ3Jlc3NJdGVtcyIsInByZWRpY3RvciIsIm92ZXJsYXkiLCJwb3B1cCIsImNsb3NlUG9wdXAiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsInRlc3RDb3VudGllcyIsImxlZnQiLCJyaWdodCIsImxvYWRlckJ0biIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImFjdGl2ZVN0YWdlIiwiYWN0aXZlTWF0Y2h1cCIsInByZWRpY3RvclRhYnNEYXRhIiwic3RhZ2UiLCJzY29yZSIsInRlYW0xIiwidGVhbTIiLCJzZXRBY3RpdmVCbG9ja3MiLCJtYXRjaHVwIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZVN0YWdlVGFiIiwiYWN0aXZlU3RhZ2VCbG9jayIsImFjdGl2ZU1hdGNodXBzIiwiYWN0aXZlTWF0Y2h1cFRhYnMiLCJhY3RpdmVUZWFtMUNvdW50ZXJzIiwiYWN0aXZlVGVhbTJDb3VudGVycyIsImFjdGl2ZVRlYW0xQ291bnRlck51bSIsImFjdGl2ZVRlYW0yQ291bnRlck51bSIsInRleHRDb250ZW50IiwidG9nZ2xlQWN0aXZlQnlEYXRhQXR0cmlidXRlIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsImFkZCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRhcmdldFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwib3BlblBvcHVwIiwic2V0UG9wdXAiLCJzZXRUaW1lb3V0IiwidGFiIiwiaXRlbSIsInBvaW50ZXJFdmVudHMiLCJyZWdpb25zIiwic2V0U3RhZ2VGcm9tVGFiIiwiaSIsInNldE1hdGNodXBGcm9tVGFiIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJidG5TdGFnZU51bSIsImdldEF0dHJpYnV0ZSIsImJ0bk1hdGNodXBOdW0iLCJidG5UZWFtTnVtIiwidGVhbVNjb3JlIiwic2V0TWF0Y2h1cFNjb3JlIiwibmV3U2NvcmUiLCJjdXJyZW50U3RhZ2UiLCJzZXRNYXRjaHVwRnJvbUFycm93Iiwic2hvd1Byb2dyZXNzSXRlbXNPblNjcm9sbCIsImFuaW1hdGVPblNjcm9sbCIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsInRhcmdldE5vZGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImF0dHJpYnV0ZU5hbWUiLCJ2YWx1ZVRvTWF0Y2giLCJhdHRyVmFsdWUiLCJkYXRhc2V0IiwidGVhbSIsIm51bSIsImJsb2NrIiwiYmxvY2tTdGFnZU51bSIsIm1hdGNodXBOdW0iLCJhcnJvdyIsImRpcmVjdGlvbiIsInRhYldyYXAiLCJhY3RpdmVUYWIiLCJhY3RpdmVUYWJzIiwiYWN0aXZlVGFiTWF0Y2h1cCIsImxlbmd0aCIsImxvYWRUaW1lIiwic2hvd0VsZW1lbnRzIiwiaGlkZUVsZW1lbnRzIiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwibG9jYXRpb24iLCJocmVmIiwidXNlcmlkIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2VlayIsImRhdGEiLCJ1c2VycyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImFuaW1hdGlvbkNsYXNzIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJpdGVtcyIsInVub2JzZXJ2ZSIsImN1cnJlbnRVc2VySWQiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImN1cnJlbnRVc2VyIiwiZmluZCIsInVzZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93IiwidXNlckRhdGEiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJhcHBlbmQiLCJpbmRleCIsIm1vbml0b3JWaXNpYmlsaXR5Iiwic2VsZWN0b3IiLCJhbmltYXRpb24iLCJkZWxheSIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJ0b1N0cmluZyIsImNsb3NlQnRuIiwib3BlbkJ0biIsInBvcHVwU2VsZWN0b3IiLCJwbGFjZSIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwic2V0UHJlZGljdG9yTm9ybWFsIiwic2V0UHJlZGljdG9yTG9jayIsInRvZ2dsZUNvbmZpcm0iLCJjb250YWlucyIsInRvZ2dsZVdpbkxvc2UiLCJzZXRQcmVkaWN0b3JEb25lIiwibG5nQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQiLCJhdXRoQnRuIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUFBO0VBRVQsSUFBTUEsTUFBTSxHQUFHLHdDQUF3QztFQUV2RCxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoREMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyREMsZUFB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QUFDO0lBQUVHLEtBQUssRUFBRSxDQUFDO01BQUNDLEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDO0VBQUMsQ0FBQyxFQUNuSjtJQUFDSCxLQUFLLEVBQUUsQ0FBQztJQUFFRixhQUFhLEVBQUUsQ0FBQztJQUFFRyxLQUFLLEVBQUUsQ0FBQztNQUFDQyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDO0VBQUMsQ0FBQyxFQUM3SDtJQUFDSCxLQUFLLEVBQUUsQ0FBQztJQUFFRixhQUFhLEVBQUUsQ0FBQztJQUFFRyxLQUFLLEVBQUUsQ0FBQztNQUFDQyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDLEVBQUU7TUFBQ0QsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUMsQ0FBQyxFQUFFO01BQUNELEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFDLENBQUMsRUFBRTtNQUFDRCxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBQyxDQUFDO0VBQUMsQ0FBQyxFQUM3SDtJQUFDSCxLQUFLLEVBQUUsQ0FBQztJQUFFRixhQUFhLEVBQUUsQ0FB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Q3ZDLENBQUMsTUFBTTtNQUNIM04sY0FBYyxDQUFDNE4sT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDMUM7SUFDQWxLLE1BQU0sQ0FBQzJFLFFBQVEsQ0FBQ3dGLE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7RUFFRixJQUFNQyxPQUFPLEdBQUd2USxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFFbkRzUSxPQUFPLENBQUMxSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNuQyxJQUFHekIsTUFBTSxFQUFDO01BQ04zQixjQUFjLENBQUMyTixVQUFVLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUMsTUFBSTtNQUNEM04sY0FBYyxDQUFDNE4sT0FBTyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7SUFDakQ7SUFDQWxLLE1BQU0sQ0FBQzJFLFFBQVEsQ0FBQ3dGLE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7RUFFRnRRLFFBQVEsQ0FBQzZGLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07SUFBQTtJQUNoRCwwQkFBQTdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQywyREFBbkMsdUJBQXFDNEYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFBQTtNQUNqRSwwQkFBQTdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQywyREFBcEMsdUJBQXNDMkIsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xFLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUdOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfZGl2aW5lX2JhdHRsZSdcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHN0YWdlc1RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdG9yX19zdGFnZXMtaXRlbScpLFxuICAgICAgICBzdGFnZXNCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZ2VzX19pdGVtJyksXG4gICAgICAgIHN0YWdlc01hdGNodXBUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlc19fdGFicy1pdGVtJyksXG4gICAgICAgIHByZWRpY3RvclBlcnNMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3Rvcl9fcGVycy1sZWZ0JyksXG4gICAgICAgIHByZWRpY3RvclBlcnNSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0b3JfX3BlcnMtcmlnaHQnKSxcbiAgICAgICAgbWFrZVByZWRpY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFrZS1wcmVkaWN0JyksXG4gICAgICAgIG1hdGNodXBBcnJvd1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlc19fdGFicy1yaWdodCcpLFxuICAgICAgICBtYXRjaHVwQXJyb3dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlc19fdGFicy1sZWZ0JyksXG4gICAgICAgIHByb2dyZXNzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19ib2R5XCIpLFxuICAgICAgICBwcm9ncmVzc0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyZXNzX19pdGVtJyksXG4gICAgICAgIHByZWRpY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0b3InKSxcbiAgICAgICAgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKSxcbiAgICAgICAgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKSxcbiAgICAgICAgY2xvc2VQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2UnKTtcblxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZXN0Q291bnRpZXMgPVxuICAgICAgICBbXG4gICAgICAgICAgICB7IGxlZnQ6ICdhZnJpY2EnLCByaWdodDogJ2FmcmljYScgfSxcbiAgICAgICAgICAgIHsgbGVmdDogJ2FzaWEnLCByaWdodDogJ2FzaWEnIH0sXG4gICAgICAgICAgICB7IGxlZnQ6ICdldXJvcGEnLCByaWdodDogJ2V1cm9wYScgfSxcbiAgICAgICAgICAgIHsgbGVmdDogJ29jZWFuJywgcmlnaHQ6ICdvY2VhbicgfSxcbiAgICAgICAgICAgIHsgbGVmdDogJ3VzYScsIHJpZ2h0OiAndXNhJyB9XG4gICAgICAgIF1cblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgbGV0IGxvY2FsZSA9ICBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwidWtcIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGFjdGl2ZVN0YWdlID0gMVxuICAgIGxldCBhY3RpdmVNYXRjaHVwID0gMVxuXG4gICAgbGV0IHByZWRpY3RvclRhYnNEYXRhID0gW1xuICAgICAgICB7c3RhZ2U6IDEsIGFjdGl2ZU1hdGNodXA6IDEsIHNjb3JlOiBbe3RlYW0xOiAwLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9LCB7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9XX0sXG4gICAgICAgIHtzdGFnZTogMiwgYWN0aXZlTWF0Y2h1cDogMSwgc2NvcmU6IFt7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9LCB7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH1dfSxcbiAgICAgICAge3N0YWdlOiAzLCBhY3RpdmVNYXRjaHVwOiAxLCBzY29yZTogW3t0ZWFtMTogMCwgdGVhbTI6IDB9LCB7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9LCB7dGVhbTE6IDAsIHRlYW0yOiAwfV19LFxuICAgICAgICB7c3RhZ2U6IDQsIGFjdGl2ZU1hdGNodXA6IDEsIHNjb3JlOiBbe3RlYW0xOiAwLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9LCB7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH1dfSxcbiAgICAgICAge3N0YWdlOiA1LCBhY3RpdmVNYXRjaHVwOiAxLCBzY29yZTogW3t0ZWFtMTogMCwgdGVhbTI6IDB9LCB7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH0sIHt0ZWFtMTogMCwgdGVhbTI6IDB9XX0sXG4gICAgICAgIHtzdGFnZTogNiwgYWN0aXZlTWF0Y2h1cDogMSwgc2NvcmU6IFt7dGVhbTE6IDAsIHRlYW0yOiAwfSwge3RlYW0xOiAwLCB0ZWFtMjogMH1dfSxcbiAgICAgICAge3N0YWdlOiA3LCBhY3RpdmVNYXRjaHVwOiAxLCBzY29yZTogW3t0ZWFtMTogMCwgdGVhbTI6IDB9XX0sXG4gICAgXVxuXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlQmxvY2tzIChzdGFnZSwgbWF0Y2h1cCl7XG5cbiAgICAgICAgaWYoc3RhZ2UgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBzdGFnZSA9IDFcbiAgICAgICAgfVxuICAgICAgICBpZihtYXRjaHVwID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgbWF0Y2h1cCA9IDFcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKG1hdGNodXApXG5cbiAgICAgICAgY29uc3QgYWN0aXZlU3RhZ2VUYWIgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByZWRpY3Rvcl9fc3RhZ2VzLWl0ZW1bZGF0YS1zdGFnZT1cIiR7c3RhZ2V9XCJdYClcbiAgICAgICAgY29uc3QgYWN0aXZlU3RhZ2VCbG9jayA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3RhZ2VzX19pdGVtW2RhdGEtc3RhZ2U9XCIke3N0YWdlfVwiXWApO1xuICAgICAgICBjb25zdCBhY3RpdmVNYXRjaHVwcyA9IGFjdGl2ZVN0YWdlQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLm1hdGNodXAnKTtcbiAgICAgICAgY29uc3QgYWN0aXZlTWF0Y2h1cFRhYnMgPSBhY3RpdmVTdGFnZUJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFnZXNfX3RhYnMtaXRlbScpO1xuICAgICAgICBjb25zdCBhY3RpdmVUZWFtMUNvdW50ZXJzID0gYWN0aXZlU3RhZ2VCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tYXRjaHVwLWNvdW50ZXI9XCIxXCJdJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRlYW0yQ291bnRlcnMgPSBhY3RpdmVTdGFnZUJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1hdGNodXAtY291bnRlcj1cIjJcIl0nKTtcbiAgICAgICAgY29uc3QgYWN0aXZlVGVhbTFDb3VudGVyTnVtID0gYWN0aXZlVGVhbTFDb3VudGVyc1ttYXRjaHVwIC0gMV0ucXVlcnlTZWxlY3RvcignLm1hdGNodXBfX2NvdW50ZXItbnVtYmVyJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRlYW0yQ291bnRlck51bSA9IGFjdGl2ZVRlYW0yQ291bnRlcnNbbWF0Y2h1cCAtIDFdLnF1ZXJ5U2VsZWN0b3IoJy5tYXRjaHVwX19jb3VudGVyLW51bWJlcicpO1xuICAgICAgICAvL1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVUZWFtMUNvdW50ZXJzWzFdKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVUZWFtMUNvdW50ZXJOdW0pXG5cbiAgICAgICAgYWN0aXZlVGVhbTFDb3VudGVyTnVtLnRleHRDb250ZW50ID0gcHJlZGljdG9yVGFic0RhdGFbc3RhZ2UgLSAxXS5zY29yZVttYXRjaHVwIC0gMV0udGVhbTFcbiAgICAgICAgYWN0aXZlVGVhbTJDb3VudGVyTnVtLnRleHRDb250ZW50ID0gcHJlZGljdG9yVGFic0RhdGFbc3RhZ2UgLSAxXS5zY29yZVttYXRjaHVwIC0gMV0udGVhbTJcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcmVkaWN0b3JUYWJzRGF0YVtzdGFnZSAtIDFdLnNjb3JlW21hdGNodXAgLSAxXSlcblxuICAgICAgICB0b2dnbGVBY3RpdmVCeURhdGFBdHRyaWJ1dGUoc3RhZ2VzVGFicywgJ3N0YWdlJywgc3RhZ2UpO1xuICAgICAgICB0b2dnbGVBY3RpdmVCeURhdGFBdHRyaWJ1dGUoc3RhZ2VzQmxvY2tzLCAnc3RhZ2UnLCBzdGFnZSk7XG4gICAgICAgIHRvZ2dsZUFjdGl2ZUJ5RGF0YUF0dHJpYnV0ZShhY3RpdmVNYXRjaHVwVGFicywgJ21hdGNodXAnLCBtYXRjaHVwKTtcbiAgICAgICAgdG9nZ2xlQWN0aXZlQnlEYXRhQXR0cmlidXRlKGFjdGl2ZU1hdGNodXBzLCAnbWF0Y2h1cCcsIG1hdGNodXApO1xuXG4gICAgICAgIG1ha2VQcmVkaWN0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGFnZScsIHN0YWdlKTtcbiAgICAgICAgbWFrZVByZWRpY3RCdG4uc2V0QXR0cmlidXRlKCdkYXRhLW1hdGNodXAnLCBtYXRjaHVwKTtcblxuICAgIH1cblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VySWQgPSBudWxsO1xuXG4gICAgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpIHx8IG51bGxcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyByZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG5cbiAgICAgICAgICAgIC8vZ28gdG8gcHJlZGljdFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b1ByZWRpY3RcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlZGljdFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gMjtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBvcGVuUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5jb25maXJtLXBvcHVwJyk7XG5cbiAgICAgICAgICAgIHNldFBvcHVwKHBvcHVwLCBvdmVybGF5LCBjbG9zZVBvcHVwLCBvcGVuUG9wdXApXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMTAwMClcblxuICAgICAgICAgICAgc2V0QWN0aXZlQmxvY2tzKGFjdGl2ZVN0YWdlLCBhY3RpdmVNYXRjaHVwKVxuXG4gICAgICAgICAgICBzdGFnZXNUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcblxuICAgICAgICAgICAgICAgICAgICBzdGFnZXNUYWJzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2VzVGFicy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnaW9ucyA9IFsnYWZyaWNhJywgJ3VzYScsICdldXJvcGEnLCAnb2NlYW4nLCAnYXNpYSddXG5cbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yUGVyc0xlZnQuY2xhc3NMaXN0LnJlbW92ZSguLi5yZWdpb25zKVxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0b3JQZXJzUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSguLi5yZWdpb25zKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByZWRpY3RvclRhYnNEYXRhKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWdpb25zW3ByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cF0pXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cClcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhZ2VGcm9tVGFiKHRhYilcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlQmxvY2tzKGFjdGl2ZVN0YWdlLCBwcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXApXG5cbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yUGVyc0xlZnQuY2xhc3NMaXN0LmFkZChgJHtyZWdpb25zW3ByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cCAtIDFdfWApXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3RvclBlcnNSaWdodC5jbGFzc0xpc3QuYWRkKGAke3JlZ2lvbnNbcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwIC0gMV19YClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHN0YWdlc01hdGNodXBUYWJzLmZvckVhY2goKHRhYiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICBzdGFnZXNNYXRjaHVwVGFicy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlc01hdGNodXBUYWJzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2h1cEZyb21UYWIodGFiKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2lvbnMgPSBbJ2FmcmljYScsICd1c2EnLCAnZXVyb3BhJywgJ29jZWFuJywgJ2FzaWEnXVxuXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3RvclBlcnNMZWZ0LmNsYXNzTGlzdC5yZW1vdmUoLi4ucmVnaW9ucylcbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yUGVyc1JpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoLi4ucmVnaW9ucylcblxuXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3RvclBlcnNMZWZ0LmNsYXNzTGlzdC5hZGQoYCR7cmVnaW9uc1thY3RpdmVNYXRjaHVwIC0gMV19YClcbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yUGVyc1JpZ2h0LmNsYXNzTGlzdC5hZGQoYCR7cmVnaW9uc1thY3RpdmVNYXRjaHVwIC0gMV19YClcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmVkaWN0b3JUYWJzRGF0YVthY3RpdmVTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXApXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJsb2NrcyhhY3RpdmVTdGFnZSwgcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwKVxuXG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi5tYXRjaHVwX19jb3VudGVyLWluY3JlYXNlXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuU3RhZ2VOdW0gPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtc3RhZ2VdJykuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlJykpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0bk1hdGNodXBOdW0gPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtbWF0Y2h1cF0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF0Y2h1cCcpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidG5UZWFtTnVtID0gTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLW1hdGNodXAtY291bnRlcl0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF0Y2h1cC1jb3VudGVyJykpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1TY29yZSA9IE51bWJlcihwcmVkaWN0b3JUYWJzRGF0YVtidG5TdGFnZU51bSAtIDFdLnNjb3JlW2J0bk1hdGNodXBOdW0gLSAxXVtgdGVhbSR7YnRuVGVhbU51bX1gXSlcbiAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2h1cFNjb3JlKGJ0blN0YWdlTnVtLCBgdGVhbSR7YnRuVGVhbU51bX1gLCBidG5NYXRjaHVwTnVtLCB0ZWFtU2NvcmUgKyAxKVxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVCbG9ja3MoYnRuU3RhZ2VOdW0sIGJ0bk1hdGNodXBOdW0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi5tYXRjaHVwX19jb3VudGVyLWRlY3JlYXNlXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuU3RhZ2VOdW0gPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtc3RhZ2VdJykuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlJykpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0blRlYW1OdW0gPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtbWF0Y2h1cC1jb3VudGVyXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXRjaHVwLWNvdW50ZXInKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuTWF0Y2h1cE51bSA9IE51bWJlcihlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tYXRjaHVwXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXRjaHVwJykpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbVNjb3JlID0gTnVtYmVyKHByZWRpY3RvclRhYnNEYXRhW2J0blN0YWdlTnVtIC0gMV0uc2NvcmVbYnRuTWF0Y2h1cE51bSAtIDFdW2B0ZWFtJHtidG5UZWFtTnVtfWBdKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Njb3JlID0gdGVhbVNjb3JlID8gdGVhbVNjb3JlIC0gMSA6IDBcblxuICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaHVwU2NvcmUoYnRuU3RhZ2VOdW0sIGB0ZWFtJHtidG5UZWFtTnVtfWAsIGJ0bk1hdGNodXBOdW0sIG5ld1Njb3JlKVxuXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJsb2NrcyhidG5TdGFnZU51bSwgYnRuTWF0Y2h1cE51bSlcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgbWF0Y2h1cEFycm93UmlnaHQuZm9yRWFjaCgodGFiLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2h1cEFycm93UmlnaHQuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaHVwQXJyb3dSaWdodC5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U3RhZ2UgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3RhZ2VdLl9hY3RpdmUnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhZ2UnKSlcblxuICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaHVwRnJvbUFycm93KHRhYiwgXCJyaWdodFwiKVxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVCbG9ja3MoY3VycmVudFN0YWdlLCBwcmVkaWN0b3JUYWJzRGF0YVtjdXJyZW50U3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBtYXRjaHVwQXJyb3dMZWZ0LmZvckVhY2goKHRhYiwgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2h1cEFycm93TGVmdC5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNodXBBcnJvd0xlZnQuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YWdlID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXN0YWdlXS5fYWN0aXZlJykuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlJykpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaHVwRnJvbUFycm93KHRhYiwgXCJsZWZ0XCIpXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJsb2NrcyhjdXJyZW50U3RhZ2UsIHByZWRpY3RvclRhYnNEYXRhW2N1cnJlbnRTdGFnZSAtIDFdLmFjdGl2ZU1hdGNodXApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cblxuXG4gICAgICAgICAgICBzaG93UHJvZ3Jlc3NJdGVtc09uU2Nyb2xsKClcbiAgICAgICAgICAgIGFuaW1hdGVPblNjcm9sbChwcmVkaWN0b3IsIFwic2hvd0RlY29yXCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2aW5lLWJhdHRsZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlQWN0aXZlQnlEYXRhQXR0cmlidXRlKGVsZW1lbnRzLCBhdHRyaWJ1dGVOYW1lLCB2YWx1ZVRvTWF0Y2gpIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBOdW1iZXIoZWwuZGF0YXNldFthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbCwgZWwuZGF0YXNldFthdHRyaWJ1dGVOYW1lXSwgdmFsdWVUb01hdGNoKTtcbiAgICAgICAgICAgIGlmIChhdHRyVmFsdWUgPT09IE51bWJlcih2YWx1ZVRvTWF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE1hdGNodXBTY29yZShzdGFnZSwgdGVhbSwgbWF0Y2h1cCwgbnVtKXtcbiAgICAgICAgY29uc29sZS5sb2cobnVtKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyggcHJlZGljdG9yVGFic0RhdGFbc3RhZ2UgLSAxXS5zY29yZVttYXRjaHVwXSlcbiAgICAgICAgcHJlZGljdG9yVGFic0RhdGFbc3RhZ2UgLSAxXS5zY29yZVttYXRjaHVwIC0gMV1bYCR7dGVhbX1gXSA9IG51bVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFN0YWdlRnJvbVRhYihibG9jayl7XG4gICAgICAgIGNvbnN0IGJsb2NrU3RhZ2VOdW0gPSBOdW1iZXIoYmxvY2suZGF0YXNldC5zdGFnZSlcblxuICAgICAgICAvLyBwcmVkaWN0b3JUYWJzRGF0YVtibG9ja1N0YWdlTnVtIC0gMV0uc3RhZ2UgPSBibG9ja1N0YWdlTnVtO1xuXG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVN0YWdlID0gYmxvY2tTdGFnZU51bTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRNYXRjaHVwRnJvbVRhYihibG9jaykge1xuICAgICAgICBjb25zdCBtYXRjaHVwTnVtID0gTnVtYmVyKGJsb2NrLmRhdGFzZXQubWF0Y2h1cCk7XG4gICAgICAgIHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cCA9IG1hdGNodXBOdW07XG4gICAgICAgIGFjdGl2ZU1hdGNodXAgPSBtYXRjaHVwTnVtO1xuICAgICAgICByZXR1cm4gYWN0aXZlTWF0Y2h1cDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRNYXRjaHVwRnJvbUFycm93KGFycm93LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgdGFiV3JhcCA9IGFycm93LmNsb3Nlc3QoXCIuc3RhZ2VzX190YWJzXCIpXG5cbiAgICAgICAgY29uc3QgYWN0aXZlVGFiID0gdGFiV3JhcC5xdWVyeVNlbGVjdG9yKFwiLl9hY3RpdmVcIik7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYnMgPSB0YWJXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhZ2VzX190YWJzLWl0ZW1cIik7XG5cbiAgICAgICAgbGV0IGFjdGl2ZVRhYk1hdGNodXAgPSBOdW1iZXIoYWN0aXZlVGFiLmRhdGFzZXQubWF0Y2h1cCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFiTWF0Y2h1cCk7XG5cblxuXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpcmVjdGlvbilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYk1hdGNodXApO1xuICAgICAgICAgICAgaWYoYWN0aXZlVGFiTWF0Y2h1cCl7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiTWF0Y2h1cCA9IGFjdGl2ZVRhYk1hdGNodXAgLSAxO1xuICAgICAgICAgICAgICAgIHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cCA9IGFjdGl2ZVRhYk1hdGNodXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihhY3RpdmVUYWJNYXRjaHVwID09PSAwKXtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWJNYXRjaHVwID0gYWN0aXZlVGFicy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwID0gYWN0aXZlVGFiTWF0Y2h1cDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihkaXJlY3Rpb24gPT09ICdyaWdodCcpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGlyZWN0aW9uKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFicylcbiAgICAgICAgICAgIGlmKGFjdGl2ZVRhYk1hdGNodXAgPj0gYWN0aXZlVGFicy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYk1hdGNodXAgPSAxO1xuICAgICAgICAgICAgICAgIHByZWRpY3RvclRhYnNEYXRhW2FjdGl2ZVN0YWdlIC0gMV0uYWN0aXZlTWF0Y2h1cCA9IGFjdGl2ZVRhYk1hdGNodXA7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWJNYXRjaHVwID0gYWN0aXZlVGFiTWF0Y2h1cCArIDE7XG4gICAgICAgICAgICAgICAgcHJlZGljdG9yVGFic0RhdGFbYWN0aXZlU3RhZ2UgLSAxXS5hY3RpdmVNYXRjaHVwID0gYWN0aXZlVGFiTWF0Y2h1cDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYk1hdGNodXApO1xuICAgICAgICBhY3RpdmVNYXRjaHVwID0gYWN0aXZlVGFiTWF0Y2h1cDtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZU1hdGNodXA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc3QgbG9hZFRpbWUgPSAyMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG5cbiAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgLy8gaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1c2VySWQgKSB7IC8vdXNlcmlkXG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICBzaG93RWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIC8vIH0sIDUwMClcblxuICAgICAgICAgICAgLy8gcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIHNob3dFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgLy8gICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH0sIGxvYWRUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vlaykge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQsIHdlZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZU9uU2Nyb2xsKGVsZW1lbnQsIGFuaW1hdGlvbkNsYXNzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMlxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChhbmltYXRpb25DbGFzcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcm9ncmVzc0l0ZW1zT25TY3JvbGwoKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19ib2R5XCIpXG4gICAgICAgIGlmICghcHJvZ3Jlc3NCbG9jaykgcmV0dXJuXG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+PSAwLjMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBwcm9ncmVzc0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3NfX2l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGkgKiAyMDApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShwcm9ncmVzc0Jsb2NrKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRocmVzaG9sZDogMC4zXG4gICAgICAgIH0pXG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShwcm9ncmVzc0Jsb2NrKVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5wb2ludHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9uaXRvclZpc2liaWxpdHkoc2VsZWN0b3IsIGFuaW1hdGlvbiwgZGVsYXkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWxlbWVudCBub3QgZm91bmQhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cChwb3B1cCwgb3ZlcmxheSwgY2xvc2VCdG4sIG9wZW5CdG4pe1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIG9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgfSlcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwU2VsZWN0b3IgPSAnLicgKyBwb3B1cC5jbGFzc0xpc3RbMF07XG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QocG9wdXBTZWxlY3RvcikgJiYgZS50YXJnZXQgIT09IG9wZW5CdG4pIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpXG5cbiAgICAvLyB0ZXN0XG5cblxuICAgIGZ1bmN0aW9uIHNldFByZWRpY3Rvck5vcm1hbCgpIHtcbiAgICAgICBsZXQgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RvclwiKVxuXG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ19kb25lJyk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcmVkaWN0b3JMb2NrKCkge1xuICAgICAgICBsZXQgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RvclwiKVxuXG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ19kb25lJyk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVDb25maXJtKGl0ZW0pe1xuICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnY29uZmlybWVkJykpe1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCd1bmNvbmZpcm1lZCcpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjb25maXJtZWQnKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCd1bmNvbmZpcm1lZCcpKXtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnY29uZmlybWVkJyk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3VuY29uZmlybWVkJyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVdpbkxvc2UoaXRlbSl7XG5cblxuICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnX3dpbicpKXtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX2xvc2UnKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX3dpbicpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdfd2luJylcbiAgICAgICAgfVxuICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnX2xvc2UnKSl7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ193aW4nKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX2xvc2UnKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25maXJtLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0b3JfX2NvbmZpcm0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVDb25maXJtKGl0ZW0pO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXR1cy1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZ2VzX19wcmVkaWN0LXN0YXR1cycpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZVdpbkxvc2UoaXRlbSk7XG4gICAgICAgIH0pXG4gICAgfSlcblxuXG5cbiAgICBmdW5jdGlvbiBzZXRQcmVkaWN0b3JEb25lKCkge1xuICAgICAgICBsZXQgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RvclwiKVxuXG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ19kb25lJyk7XG5cbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jay1idG4nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRQcmVkaWN0b3JMb2NrKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9uZS1idG4nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRQcmVkaWN0b3JEb25lKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm9ybWFsLWJ0bicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldFByZWRpY3Rvck5vcm1hbCk7XG5cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiMTAwMzAwMjY4XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbn0pKCk7XG4iXX0=
