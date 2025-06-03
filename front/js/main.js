(function () {

    const apiURL = 'https://fav-prom.com/api_divine_battle'

    const mainPage = document.querySelector(".fav-page"),
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


    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
    const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
        el.setAttribute('data-translate', `${dataAttr}`)
        el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
        el.removeAttribute('data-translate');
    });

    const testCounties =
        [
            { left: 'africa', right: 'africa' },
            { left: 'asia', right: 'asia' },
            { left: 'europa', right: 'europa' },
            { left: 'ocean', right: 'ocean' },
            { left: 'usa', right: 'usa' }
        ]

    let loaderBtn = false

    let locale =  sessionStorage.getItem("locale") || "en"

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let activeStage = 1
    let activeMatchup = 1

    let predictorTabsData = [
        {stage: 1, activeMatchup: 1, score: [{team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}]},
        {stage: 2, activeMatchup: 1, score: [{team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}]},
        {stage: 3, activeMatchup: 1, score: [{team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}]},
        {stage: 4, activeMatchup: 1, score: [{team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}]},
        {stage: 5, activeMatchup: 1, score: [{team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}, {team1: 0, team2: 0}]},
        {stage: 6, activeMatchup: 1, score: [{team1: 0, team2: 0}, {team1: 0, team2: 0}]},
        {stage: 7, activeMatchup: 1, score: [{team1: 0, team2: 0}]},
    ]

    function setActiveBlocks (stage, matchup){

        if(stage === undefined){
            stage = 1
        }
        if(matchup === undefined){
            matchup = 1
        }

        console.log(matchup)

        const activeStageTab =  document.querySelector(`.predictor__stages-item[data-stage="${stage}"]`)
        const activeStageBlock =  document.querySelector(`.stages__item[data-stage="${stage}"]`);
        const activeMatchups = activeStageBlock.querySelectorAll('.matchup');
        const activeMatchupTabs = activeStageBlock.querySelectorAll('.stages__tabs-item');
        const activeTeam1Counters = activeStageBlock.querySelectorAll('[data-matchup-counter="1"]');
        const activeTeam2Counters = activeStageBlock.querySelectorAll('[data-matchup-counter="2"]');
        const activeTeam1CounterNum = activeTeam1Counters[matchup - 1].querySelector('.matchup__counter-number');
        const activeTeam2CounterNum = activeTeam2Counters[matchup - 1].querySelector('.matchup__counter-number');
        //
        // console.log(activeTeam1Counters[1])
        // console.log(activeTeam1CounterNum)

        activeTeam1CounterNum.textContent = predictorTabsData[stage - 1].score[matchup - 1].team1
        activeTeam2CounterNum.textContent = predictorTabsData[stage - 1].score[matchup - 1].team2

        // console.log(predictorTabsData[stage - 1].score[matchup - 1])

        toggleActiveByDataAttribute(stagesTabs, 'stage', stage);
        toggleActiveByDataAttribute(stagesBlocks, 'stage', stage);
        toggleActiveByDataAttribute(activeMatchupTabs, 'matchup', matchup);
        toggleActiveByDataAttribute(activeMatchups, 'matchup', matchup);

        makePredictBtn.setAttribute('data-stage', stage);
        makePredictBtn.setAttribute('data-matchup', matchup);

    }

    let debug = false

    if (debug) hideLoader()

    let i18nData = {};
    const translateState = true;
    let userId = null;

    userId = Number(sessionStorage.getItem("userId")) || null

    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        })
            .then(res => {
                if (!res.ok) throw new Error('API error');
                return res.json();
            })
            .catch(err => {
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

    }

    function hideLoader(){
        loader.classList.add("hide")
        document.body.style.overflow = "auto"
        mainPage.classList.remove("loading")
    }

    async function init() {
        let attempts = 0;
        const maxAttempts = 20;
        const attemptInterval = 50;

        function tryDetectUserId() {
            if (window.store) {
                const state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
            } else if (window.g_user_id) {
                userId = window.g_user_id;
            }
        }

        function quickCheckAndRender() {
            checkUserAuth();

            //go to predict
            document.querySelector(".toPredict").addEventListener('click', function () {
                const targetElement = document.getElementById("predict");
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 2;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });
            });

            const openPopup = document.querySelector('.unconfirm-popup');

            setPopup(popup, overlay, closePopup, openPopup)

            setTimeout(hideLoader, 1000)

            setActiveBlocks(activeStage, activeMatchup)

            stagesTabs.forEach(tab => {
                tab.addEventListener('click', () =>{

                    const regions = ['africa', 'usa', 'europa', 'ocean', 'asia']

                    predictorPersLeft.classList.remove(...regions)
                    predictorPersRight.classList.remove(...regions)

                    // console.log(predictorTabsData)
                    // console.log(regions[predictorTabsData[activeStage - 1].activeMatchup])
                    // console.log(predictorTabsData[activeStage - 1].activeMatchup)



                    setStageFromTab(tab)
                    setActiveBlocks(activeStage, predictorTabsData[activeStage - 1].activeMatchup)

                    predictorPersLeft.classList.add(`${regions[predictorTabsData[activeStage - 1].activeMatchup - 1]}`)
                    predictorPersRight.classList.add(`${regions[predictorTabsData[activeStage - 1].activeMatchup - 1]}`)
                });
            })

            stagesMatchupTabs.forEach((tab, i) => {
                tab.addEventListener('click', () =>{
                    setMatchupFromTab(tab)

                    const regions = ['africa', 'usa', 'europa', 'ocean', 'asia']

                    predictorPersLeft.classList.remove(...regions)
                    predictorPersRight.classList.remove(...regions)


                    predictorPersLeft.classList.add(`${regions[activeMatchup - 1]}`)
                    predictorPersRight.classList.add(`${regions[activeMatchup - 1]}`)

                    console.log(predictorTabsData[activeStage - 1].activeMatchup)
                    setActiveBlocks(activeStage, predictorTabsData[activeStage - 1].activeMatchup)


                });
            })

            document.addEventListener("click", (e) =>{
                if(e.target.closest(".matchup__counter-increase")){
                    const btnStageNum = Number(e.target.closest('[data-stage]').getAttribute('data-stage'))
                    const btnMatchupNum = Number(e.target.closest('[data-matchup]').getAttribute('data-matchup'))
                    const btnTeamNum = Number(e.target.closest('[data-matchup-counter]').getAttribute('data-matchup-counter'))
                    const teamScore = Number(predictorTabsData[btnStageNum - 1].score[btnMatchupNum - 1][`team${btnTeamNum}`])
                    setMatchupScore(btnStageNum, `team${btnTeamNum}`, btnMatchupNum, teamScore + 1)
                    setActiveBlocks(btnStageNum, btnMatchupNum)
                }

                if(e.target.closest(".matchup__counter-decrease")){
                    const btnStageNum = Number(e.target.closest('[data-stage]').getAttribute('data-stage'))
                    const btnTeamNum = Number(e.target.closest('[data-matchup-counter]').getAttribute('data-matchup-counter'))
                    const btnMatchupNum = Number(e.target.closest('[data-matchup]').getAttribute('data-matchup'))

                    const teamScore = Number(predictorTabsData[btnStageNum - 1].score[btnMatchupNum - 1][`team${btnTeamNum}`])

                    const newScore = teamScore ? teamScore - 1 : 0

                    setMatchupScore(btnStageNum, `team${btnTeamNum}`, btnMatchupNum, newScore)

                    setActiveBlocks(btnStageNum, btnMatchupNum)

                }
            })


            matchupArrowRight.forEach((tab, i) => {
                tab.addEventListener("click", () =>{
                    let currentStage = Number(document.querySelector('[data-stage]._active').getAttribute('data-stage'))

                    setMatchupFromArrow(tab, "right")
                    setActiveBlocks(currentStage, predictorTabsData[currentStage - 1].activeMatchup)
                })
            })

            matchupArrowLeft.forEach((tab, i) => {

                tab.addEventListener("click", () =>{
                    let currentStage = Number(document.querySelector('[data-stage]._active').getAttribute('data-stage'))
                    
                    setMatchupFromArrow(tab, "left")
                    setActiveBlocks(currentStage, predictorTabsData[currentStage - 1].activeMatchup)
                })
            })



            showProgressItemsOnScroll()
            animateOnScroll(predictor, "showDecor")
        }

        const waitForUserId = new Promise((resolve) => {
            const interval = setInterval(() => {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                    quickCheckAndRender();
                    clearInterval(interval);
                    resolve();
                }
                attempts++;
            }, attemptInterval);
        });

        await waitForUserId;
    }

    function loadTranslations() {
        return request(`/new-translates/${locale}`)
            .then(json => {
                i18nData = json;
                translate();
                const targetNode = document.getElementById("divine-battle");
                const mutationObserver = new MutationObserver(function (mutations) {
                    mutationObserver.disconnect();
                    translate();
                    mutationObserver.observe(targetNode, { childList: true, subtree: true });
                });
                mutationObserver.observe(targetNode, {
                    childList: true,
                    subtree: true
                });

            });
    }

    function toggleActiveByDataAttribute(elements, attributeName, valueToMatch) {
        elements.forEach(el => {
            const attrValue = Number(el.dataset[attributeName]);
            // console.log(el, el.dataset[attributeName], valueToMatch);
            if (attrValue === Number(valueToMatch)) {
                el.classList.add('_active');
            } else {
                el.classList.remove('_active');
            }
        });
    }

    function setMatchupScore(stage, team, matchup, num){
        console.log(num)
        // console.log( predictorTabsData[stage - 1].score[matchup])
        predictorTabsData[stage - 1].score[matchup - 1][`${team}`] = num
    }

    function setStageFromTab(block){
        const blockStageNum = Number(block.dataset.stage)

        // predictorTabsData[blockStageNum - 1].stage = blockStageNum;


        return activeStage = blockStageNum;
    }

    function setMatchupFromTab(block) {
        const matchupNum = Number(block.dataset.matchup);
        predictorTabsData[activeStage - 1].activeMatchup = matchupNum;
        activeMatchup = matchupNum;
        return activeMatchup;
    }

    function setMatchupFromArrow(arrow, direction) {
        const tabWrap = arrow.closest(".stages__tabs")

        const activeTab = tabWrap.querySelector("._active");
        const activeTabs = tabWrap.querySelectorAll(".stages__tabs-item");

        let activeTabMatchup = Number(activeTab.dataset.matchup);

        console.log(activeTabMatchup);



        if(direction === 'left'){
            console.log(direction)
            console.log(activeTabMatchup);
            if(activeTabMatchup){
                activeTabMatchup = activeTabMatchup - 1;
                predictorTabsData[activeStage - 1].activeMatchup = activeTabMatchup;
            }
            if(activeTabMatchup === 0){
                activeTabMatchup = activeTabs.length;
                predictorTabsData[activeStage - 1].activeMatchup = activeTabMatchup;
            }
        }
        if(direction === 'right'){
            console.log(direction)
            console.log(activeTabs)
            if(activeTabMatchup >= activeTabs.length){
                activeTabMatchup = 1;
                predictorTabsData[activeStage - 1].activeMatchup = activeTabMatchup;
            }else{
                activeTabMatchup = activeTabMatchup + 1;
                predictorTabsData[activeStage - 1].activeMatchup = activeTabMatchup;
            }

        }
        console.log(activeTabMatchup);
        activeMatchup = activeTabMatchup;
        return activeMatchup;
    }

    function checkUserAuth() {
        const loadTime = 200;

        setTimeout(() => {
            const showElements = (elements) => elements.forEach(el => el.classList.remove('hide'));
            const hideElements = (elements) => elements.forEach(el => el.classList.add('hide'));

            console.log(userId)

            if (!userId) {
                hideElements(participateBtns);
                // hideElements(redirectBtns);
                makePredictBtn.classList.add('hide');
                showElements(unauthMsgs);
                hideLoader();
                return Promise.resolve(false);
            }

            if (userId ) { //userid
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
        const reportData = {
            origin: window.location.href,
            userid: userId,
            errorText: err?.error || err?.text || err?.message || 'Unknown error',
            type: err?.name || 'UnknownError',
            stack: err?.stack || ''
        };

        fetch('https://fav-prom.com/api-cms/reports/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportData)
        }).catch(console.warn);
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    if (i18nData[key]) {
                        elem.removeAttribute('data-translate');
                    }
                })
            }else{
                console.log("translation works!")
            }
        }
        refreshLocalizedClass(mainPage);
    }

    function refreshLocalizedClass(element) {
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(lang);
        }
        element.classList.add(locale);
    }

    function renderUsers(week) {
        request(`/users/${week}`)
            .then(data => {
                const users = data;
                populateUsersTable(users, userId, week);
            });
    }

    function animateOnScroll(element, animationClass) {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
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
        const progressBlock = document.querySelector(".progress__body")
        if (!progressBlock) return

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                    const items = progressBlock.querySelectorAll(".progress__item")
                    items.forEach((item, i) => {
                        setTimeout(() => {
                            item.classList.add("showItem")
                        }, i * 200)
                    })
                    observer.unobserve(progressBlock)
                }
            })
        }, {
            threshold: 0.3
        })

        observer.observe(progressBlock)
    }


    function populateUsersTable(users, currentUserId, week) {
        resultsTable.innerHTML = '';
        resultsTableOther.innerHTML = '';
        if (!users?.length) return;
        const currentUser = users.find(user => user.userid === currentUserId);
        const isTopCurrentUser = currentUser && users.slice(0, 10).some(user => user.userid === currentUserId);
        const topUsersLength = !userId || isTopCurrentUser  ? 13 : 10;
        const topUsers = users.slice(0, topUsersLength);
        topUsers.forEach(user => {
            displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
        });
        if (!isTopCurrentUser && currentUser) {
            displayUser(currentUser, true, resultsTableOther, users, false, week);
        }
    }

    function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
        const renderRow = (userData, options = {}) => {
            const { highlight = false, neighbor = false } = options;
            const userRow = document.createElement('div');
            userRow.classList.add('table__row');

            const userPlace = users.indexOf(userData) + 1;
            const prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);

            if (userPlace <= 3) {
                userRow.classList.add(`place${userPlace}`);
            }

            if (highlight || isCurrentUser && !neighbor) {
                userRow.classList.add('you');
            } else if (neighbor) {
                userRow.classList.add('_neighbor');
            }

            userRow.innerHTML = `
            <div class="table__row-item">
                ${userPlace < 10 ? '0' + userPlace : userPlace}
                ${isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : ''}
            </div>
            <div class="table__row-item">
                ${isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid)}
            </div>
            <div class="table__row-item">
                ${userData.points}
            </div>
            <div class="table__row-item">
                ${prizeKey ? translateKey(prizeKey) : ' - '}
            </div>
        `;

            table.append(userRow);
        };
        if (isCurrentUser && !isTopCurrentUser) {
            const index = users.indexOf(user);
            if (users[index - 1]) {
                renderRow(users[index - 1], { neighbor: true });
            }
            renderRow(user, { highlight: true });
            if (users[index + 1]) {
                renderRow(users[index + 1], { neighbor: true });
            }
        } else {
            renderRow(user);
        }
    }

    function monitorVisibility(selector, animation, delay) {
        const element = document.querySelector(selector);

        if (!element) {
            console.error('Element not found!');
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() =>{
                        element.classList.add(animation)
                    }, delay)
                }
            });
        });

        observer.observe(element);
    }

    function translateKey(key, defaultValue) {
        if (!key) {
            return;
        }
        let needKey = debug ? key : `*----NEED TO BE TRANSLATED----* key: ${key}`

        defaultValue =  needKey || key;
        return i18nData[key] || defaultValue;
    }

    function maskUserId(userId) {
        return "**" + userId.toString().slice(2);
    }

    function setPopup(popup, overlay, closeBtn, openBtn){
        popup.classList.add('hide');
        overlay.classList.add('overlay-opacity');
        openBtn.addEventListener('click', (e) => {
            overlay.classList.remove('overlay-opacity');
            popup.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        })
        closeBtn.addEventListener('click', (e) => {
            overlay.classList.add('overlay-opacity');
            popup.classList.add('hide');
            document.body.style.overflow = 'auto';
        })
        document.addEventListener('click', (e) => {
            const popupSelector = '.' + popup.classList[0];
            if (!e.target.closest(popupSelector) && e.target !== openBtn) {
                overlay.classList.add('overlay-opacity');
                popup.classList.add('hide');
                document.body.style.overflow = 'auto';
            }
        });

    }

    function getPrizeTranslationKey(place, week) {
        if (place <= 3) return `prize_${week}-${place}`;
        if (place <= 10) return `prize_${week}-4-10`;
        if (place <= 25) return `prize_${week}-11-25`;
        if (place <= 50) return `prize_${week}-26-50`;
        if (place <= 75) return `prize_${week}-51-75`;
        if (place <= 100) return `prize_${week}-76-100`;
        if (place <= 125) return `prize_${week}-101-125`;
        if (place <= 150) return `prize_${week}-126-150`;
        if (place <= 175) return `prize_${week}-151-175`;
        if (place <= 200) return `prize_${week}-176-200`;
    }

    function participate() {
        if (!userId) {
            return;
        }
        const params = { userid: userId };
        fetch(apiURL + '/user/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => res.json())
            .then(res => {
                loaderBtn = true
                toggleClasses(participateBtns, "loader")
                toggleTranslates(participateBtns, "loader")
                setTimeout(() =>{
                    toggleTranslates(participateBtns, "loader_ready")
                    toggleClasses(participateBtns, "done")
                    toggleClasses(participateBtns, "loader")
                }, 500)
                setTimeout(()=>{
                    checkUserAuth()
                }, 1000)

            });
    }

    loadTranslations().then(init)

    // test


    function setPredictorNormal() {
       let block = document.querySelector(".predictor")

        block.classList.remove('_lock');
        block.classList.remove('_done');

    }

    function setPredictorLock() {
        let block = document.querySelector(".predictor")

        block.classList.add('_lock');
        block.classList.remove('_done');

    }

    function toggleConfirm(item){
        if(item.classList.contains('confirmed')){
            item.classList.add('unconfirmed');
            item.classList.remove('confirmed');
            return
        }
        if(item.classList.contains('unconfirmed')){
            item.classList.add('confirmed');
            item.classList.remove('unconfirmed');
            return
        }
    }

    function toggleWinLose(item){


        if(item.classList.contains('_win')){
            item.classList.add('_lose');
            item.classList.remove('_win');
            return
        }else{
            item.classList.add('_win')
        }
        if(item.classList.contains('_lose')){
            item.classList.add('_win');
            item.classList.remove('_lose');
            return
        }
    }

    document.querySelector(".confirm-btn").addEventListener('click', (e) => {
        document.querySelectorAll('.predictor__confirm').forEach((item) => {
            toggleConfirm(item);
        })
    })

    document.querySelector(".status-btn").addEventListener('click', (e) => {
        document.querySelectorAll('.stages__predict-status').forEach((item) => {
            toggleWinLose(item);
        })
    })



    function setPredictorDone() {
        let block = document.querySelector(".predictor")

        block.classList.add('_lock');
        block.classList.add('_done');

    }

    document.querySelector('.lock-btn')?.addEventListener('click', setPredictorLock);
    document.querySelector('.done-btn')?.addEventListener('click', setPredictorDone);
    document.querySelector('.normal-btn')?.addEventListener('click', setPredictorNormal);


    document.querySelector('.dark-btn').addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    const lngBtn = document.querySelector(".lng-btn")

    lngBtn.addEventListener("click", () => {
        if (sessionStorage.getItem("locale")) {
            sessionStorage.removeItem("locale");
        } else {
            sessionStorage.setItem("locale", "uk");
        }
        window.location.reload();
    });

    const authBtn = document.querySelector(".auth-btn")

    authBtn.addEventListener("click", () =>{
        if(userId){
            sessionStorage.removeItem("userId")
        }else{
            sessionStorage.setItem("userId", "100300268")
        }
        window.location.reload()
    });

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".menu-btn")?.addEventListener("click", () => {
            document.querySelector(".menu-test")?.classList.toggle("hide");
        });
    });


})();
