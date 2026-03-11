// =====================================================
// 1. OPEN / CLOSE FEATURE PAGES
// FIX: original used elem.id (string) as array index  
//      and CSS z-index was blocking fullElem display
// =====================================================
function openFeatures() {
  var allElems = document.querySelectorAll(".elem");
  var fullElemsPage = document.querySelectorAll(".fullElem");
  var backBtns = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      var idx = parseInt(elem.getAttribute("id"));
      fullElemsPage[idx].style.display = "block";
    });
  });

  backBtns.forEach(function (back) {
    back.addEventListener("click", function () {
      var idx = parseInt(back.getAttribute("id"));
      fullElemsPage[idx].style.display = "none";
    });
  });
}
openFeatures();

// =====================================================
// 2. TODO LIST
// =====================================================
function todolist() {
  var currentTask = JSON.parse(localStorage.getItem("currentTask")) || [];

  function renderTask() {
    var allTask = document.querySelector(".allTask");
    var html = "";

    if (currentTask.length === 0) {
      html = '<p style="opacity:0.5;font-size:18px;padding:10px;">No tasks yet!</p>';
    }

    currentTask.forEach(function (elem, idx) {
      html += '<div class="task">' +
        '<h5>' + elem.task + (elem.imp ? ' <span>⭐ IMP</span>' : '') + '</h5>' +
        '<button data-idx="' + idx + '">Mark as Completed</button>' +
        '</div>';
    });

    allTask.innerHTML = html;
    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    allTask.querySelectorAll(".task button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(parseInt(btn.getAttribute("data-idx")), 1);
        renderTask();
      });
    });
  }
  renderTask();

  var form = document.querySelector("#task-form");
  var taskInput = document.querySelector("#task-input");
  var taskDetails = document.querySelector("#task-details");
  var taskCheckbox = document.querySelector("#check");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!taskInput.value.trim()) return;
    currentTask.push({
      task: taskInput.value.trim(),
      details: taskDetails.value.trim(),
      imp: taskCheckbox.checked
    });
    renderTask();
    taskInput.value = "";
    taskDetails.value = "";
    taskCheckbox.checked = false;
  });
}
todolist();

// =====================================================
// 3. DAILY PLANNER
// FIX: localStorage key was inconsistent (dayplanData vs dayPlanData)
// =====================================================
function dailyPlanner() {
  var dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};
  var dayPlanner = document.querySelector(".day-planner");

  var hours = Array.from({ length: 18 }, function (_, idx) {
    return (6 + idx) + ":00 - " + (7 + idx) + ":00";
  });

  var html = "";
  hours.forEach(function (label, idx) {
    var saved = dayPlanData[idx] || "";
    html += '<div class="day-planner-time">' +
      '<p>' + label + '</p>' +
      '<input type="text" id="dp-' + idx + '" data-idx="' + idx + '" placeholder="..." value="' + saved + '">' +
      '</div>';
  });
  dayPlanner.innerHTML = html;

  dayPlanner.querySelectorAll("input").forEach(function (input) {
    input.addEventListener("input", function () {
      dayPlanData[input.getAttribute("data-idx")] = input.value;
      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData)); // FIX: consistent key
    });
  });
}
dailyPlanner();

// =====================================================
// 4. MOTIVATION QUOTE
// FIX: fetchQuote() was defined but NEVER called
//      Using dummyjson (always works, no CORS issues)
//      Fallback quotes if API fails
// =====================================================
function motivationalQuote() {
  var quoteText = document.getElementById("quote-text");
  var quoteAuthor = document.getElementById("quote-author");
  var refreshBtn = document.getElementById("refresh-quote");

  var fallback = [
    { q: "The secret of getting ahead is getting started.", a: "Mark Twain" },
    { q: "It always seems impossible until it's done.", a: "Nelson Mandela" },
    { q: "The future depends on what you do today.", a: "Mahatma Gandhi" },
    { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt" },
    { q: "Don't watch the clock; do what it does. Keep going.", a: "Sam Levenson" },
    { q: "Success is not final, failure is not fatal: it is the courage to continue that counts.", a: "Winston Churchill" },
    { q: "You are braver than you believe, stronger than you seem.", a: "A.A. Milne" }
  ];

  function showFallback() {
    var r = fallback[Math.floor(Math.random() * fallback.length)];
    quoteText.textContent = r.q;
    quoteAuthor.textContent = "— " + r.a;
  }

  function fetchQuote() {
    var rand = Math.floor(Math.random() * 100) + 1;
    fetch("https://dummyjson.com/quotes/" + rand)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data && data.quote) {
          quoteText.textContent = data.quote;
          quoteAuthor.textContent = "— " + data.author;
        } else {
          showFallback();
        }
      })
      .catch(function () {
        showFallback(); // fallback if network fails
      });
  }

  fetchQuote(); // FIX: actually call it!
  refreshBtn.addEventListener("click", fetchQuote);
}
motivationalQuote();

// =====================================================
// 5. POMODORO TIMER
// =====================================================
function pomodoroTimer() {
  var timerEl = document.querySelector(".pomo-timer h1");
  var startBtn = document.querySelector(".start-timer");
  var pauseBtn = document.querySelector(".pause-timer");
  var resetBtn = document.querySelector(".reset-timer");
  var session = document.querySelector(".Pomodoro-timer-fullpage .session");
  var isWorkSession = true;
  var totalSeconds = 25 * 60;
  var timerInterval = null;

  function updateTimer() {
    var m = Math.floor(totalSeconds / 60);
    var s = totalSeconds % 60;
    timerEl.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(function () {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTimer();
      } else {
        clearInterval(timerInterval);
        if (isWorkSession) {
          isWorkSession = false;
          totalSeconds = 5 * 60;
          session.textContent = "Take a Break ☕";
          session.style.backgroundColor = "var(--blue)";
        } else {
          isWorkSession = true;
          totalSeconds = 25 * 60;
          session.textContent = "Work Session 💪";
          session.style.backgroundColor = "var(--green)";
        }
        updateTimer();
      }
    }, 1000);
  }

  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", function () { clearInterval(timerInterval); });
  resetBtn.addEventListener("click", function () {
    clearInterval(timerInterval);
    isWorkSession = true;
    totalSeconds = 25 * 60;
    session.textContent = "Work Session";
    session.style.backgroundColor = "var(--green)";
    updateTimer();
  });
}
pomodoroTimer();

// =====================================================
// 6. DAILY GOALS  (NEW — was empty in original)
// =====================================================
function dailyGoals() {
  var goalInput = document.getElementById("goal-input");
  var addBtn = document.getElementById("add-goal-btn");
  var goalsList = document.getElementById("goals-list");
  var goals = JSON.parse(localStorage.getItem("dailyGoals")) || [];

  function renderGoals() {
    goalsList.innerHTML = "";
    if (goals.length === 0) {
      goalsList.innerHTML = '<p style="opacity:0.5;font-size:18px;">No goals yet. Add one!</p>';
      return;
    }
    goals.forEach(function (g, idx) {
      var div = document.createElement("div");
      div.className = "goal-item";
      div.innerHTML =
        '<input type="checkbox" ' + (g.done ? "checked" : "") + ' data-idx="' + idx + '">' +
        '<span class="' + (g.done ? "done" : "") + '">' + g.text + '</span>' +
        '<button class="del-goal" data-idx="' + idx + '">Delete</button>';
      goalsList.appendChild(div);
    });

    goalsList.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
      cb.addEventListener("change", function () {
        goals[parseInt(cb.getAttribute("data-idx"))].done = cb.checked;
        localStorage.setItem("dailyGoals", JSON.stringify(goals));
        renderGoals();
      });
    });
    goalsList.querySelectorAll(".del-goal").forEach(function (btn) {
      btn.addEventListener("click", function () {
        goals.splice(parseInt(btn.getAttribute("data-idx")), 1);
        localStorage.setItem("dailyGoals", JSON.stringify(goals));
        renderGoals();
      });
    });
  }
  renderGoals();

  function addGoal() {
    var val = goalInput.value.trim();
    if (!val) return;
    goals.push({ text: val, done: false });
    localStorage.setItem("dailyGoals", JSON.stringify(goals));
    goalInput.value = "";
    renderGoals();
  }

  addBtn.addEventListener("click", addGoal);
  goalInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") addGoal();
  });
}
dailyGoals();

// =====================================================
// 7. WEATHER  
// FIX: original used "${apikey}" as a plain string (not a variable)
//      Switched to Open-Meteo — FREE, no API key needed
//      FIX: humidity now reads correct current hour index
//      FIX: precipitation uses daily max probability
// =====================================================
async function weatherFunctionality() {
  var tempEl = document.querySelector(".header-temp");
  var condEl = document.querySelector(".header-condition");
  var windEl = document.querySelector(".header2 .wind");
  var humEl  = document.querySelector(".header2 .humidity");
  var preEl  = document.querySelector(".header2 .Precipitation");

  var wmo = {
    0:"Clear sky", 1:"Mainly clear", 2:"Partly cloudy", 3:"Overcast",
    45:"Foggy", 48:"Icy fog", 51:"Light drizzle", 53:"Drizzle",
    55:"Dense drizzle", 61:"Slight rain", 63:"Moderate rain", 65:"Heavy rain",
    71:"Slight snow", 73:"Moderate snow", 75:"Heavy snow",
    80:"Rain showers", 81:"Moderate showers", 82:"Heavy showers",
    95:"Thunderstorm", 99:"Thunderstorm w/ hail"
  };

  try {
    var res = await fetch(
      "https://api.open-meteo.com/v1/forecast" +
      "?latitude=23.2599&longitude=77.4126" +
      "&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m" +
      "&daily=precipitation_probability_max" +
      "&timezone=Asia%2FKolkata"
    );
    var data = await res.json();
    var c = data.current;

    var temp     = Math.round(c.temperature_2m);
    var humidity = c.relative_humidity_2m;
    var wind     = c.wind_speed_10m;
    var cond     = wmo[c.weather_code] || "Clear sky";
    var precip   = (data.daily && data.daily.precipitation_probability_max)
                   ? data.daily.precipitation_probability_max[0] : 0;

    if (tempEl) tempEl.textContent = temp + "°C";
    if (condEl) condEl.textContent = cond;
    if (windEl) windEl.textContent = "Wind: " + wind + " km/h";
    if (humEl)  humEl.textContent  = "Humidity: " + humidity + "%";
    if (preEl)  preEl.textContent  = "Precipitation: " + precip + "%";
  } catch (err) {
    console.warn("Weather API error:", err);
    if (tempEl) tempEl.textContent = "--°C";
    if (condEl) condEl.textContent = "Unavailable";
  }
}
weatherFunctionality();

// =====================================================
// 8. TIME & DATE
// FIX: new date() → new Date()  (capital D)
// FIX: date.getTarik() → date.getDate()
// FIX: date.getyear()  → date.getFullYear()
// FIX: header1Time was never updated (both lines set header1Date)
// FIX: AM/PM was inverted — hours>12 wrongly showed AM
// =====================================================
var timeEl = document.querySelector(".header-time");
var dateEl = document.querySelector(".header-date");

var days   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June",
              "July","August","September","October","November","December"];

function timeDate() {
  var now     = new Date();                          // FIX: was new date()
  var day     = now.getDate();                       // FIX: was getTarik()
  var month   = months[now.getMonth()];
  var year    = now.getFullYear();                   // FIX: was getyear()
  var weekDay = days[now.getDay()];
  var hours   = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // FIX: now sets DATE element correctly
  if (dateEl) dateEl.textContent = day + " " + month + " " + year;

  // FIX: AM/PM was backwards — hours>=12 is PM
  var period = hours >= 12 ? "PM" : "AM";
  var h12 = hours % 12 || 12;

  // FIX: now sets TIME element correctly (was setting dateEl twice)
  if (timeEl) timeEl.textContent =
    weekDay + ", " +
    String(h12).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + " " + period;
}
setInterval(timeDate, 1000);
timeDate();

// =====================================================
// 9. THEME CHANGER (from original)
// =====================================================
function changeTheme() {
  var themeBtn = document.querySelector(".theme");
  var themeIcon = themeBtn.querySelector("i");
  var root = document.documentElement;
  var flag = 0;

  var themes = [
    // Theme 0 — original teal
    { pri:"#f3f4f4", sec:"#5f9598", tri1:"#1d546d", tri2:"#061e29", icon:"ri-sun-line" },
    // Theme 1 — dark charcoal
    { pri:"#F8F4E1", sec:"#222831", tri1:"#948979", tri2:"#393E46", icon:"ri-moon-line" },
    // Theme 2 — warm rose
    { pri:"#F3E8DF", sec:"#E8D1C5", tri1:"#57595B", tri2:"#452829", icon:"ri-contrast-2-line" }
  ];

  themeBtn.addEventListener("click", function () {
    flag = (flag + 1) % themes.length;
    var t = themes[flag];
    root.style.setProperty("--pri", t.pri);
    root.style.setProperty("--sec", t.sec);
    root.style.setProperty("--tri1", t.tri1);
    root.style.setProperty("--tri2", t.tri2);
    themeIcon.className = t.icon;
  });
}
changeTheme();
