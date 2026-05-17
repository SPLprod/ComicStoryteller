console.log("Script initialised");

// Menus
const HomePage = document.getElementById("home");
const ScenarioPage = document.getElementById("scenario");
const CharacterPage = document.getElementById("character");
const ConstraintPage = document.getElementById("constraint");
const BonusPage = document.getElementById("bonus");
const EmotionPage = document.getElementById("emotional");
const TwistPage = document.getElementById("twist");

// Creation buttons
const ScenarioCreationBtn = document.getElementById("scenario_cr");
const CharacterCreationBtn = document.getElementById("character_cr");
const ConstraintCreationBtn = document.getElementById("constraint_cr");
const BonusCreationBtn = document.getElementById("bonus_cr");
const EmotionalCreationBtn = document.getElementById("emotional-goal_cr");
const TwistCreationBtn = document.getElementById("twist_cr");
const BackBtn = document.querySelectorAll(".back");

// Forms
const ScenarioForm = document.getElementById("scenario_form");

// Tab navigation
ScenarioCreationBtn.addEventListener("click", () => {
    HomePage.style.display = "none";
    ScenarioPage.style.display = "flex";
});

CharacterCreationBtn.addEventListener("click", () => {
    HomePage.style.display = "none";
    CharacterPage.style.display = "flex";
});

ConstraintCreationBtn.addEventListener("click", () => {
    HomePage.style.display = "none";
    ConstraintPage.style.display = "flex";
});

BonusCreationBtn.addEventListener("click", () => {
    HomePage.style.display = "none";
    BonusPage.style.display = "flex";
});

EmotionalCreationBtn.addEventListener("click", () => {
    HomePage.style.display = "none";
    EmotionPage.style.display = "flex";
});

TwistCreationBtn.addEventListener("click", () => {
    HomePage.style.display = "none";
    TwistPage.style.display = "flex";
});

BackBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const menu = e.target.closest(".menu");
        menu.style.display = "none";
        HomePage.style.display = "grid";
    });
});