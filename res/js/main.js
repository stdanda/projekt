const cookie = document.getElementById("barikada");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickUpgrade = document.getElementById("autoclickUpgrade");


let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;
let autoclickIncrease = 0;
let autoclick;
let autoclickCost = 100;

autoclickUpgrade.onclick = () => {
    if (numberOfCookies >= autoclickCost) {
        numberOfCookies -= autoclickCost;
        autoclickCost *= 2;
        autoclickUpgrade.innerText = "Autofuse upgrade: " + autoclickCost;

        counter.innerText = "Kills: " + numberOfCookies;
        autoclickIncrease ++;
        
        clearInterval(autoclick);

        
        autoclick = setInterval(() => {
            
            numberOfCookies += autoclickIncrease

            
            counter.innerText = "Kills: " + numberOfCookies;

        }, 1000);

    }
}



cookie.onclick = () => {
    console.log("click");
    
    numberOfCookies += clickUpgradeIncrease;
    console.log(numberOfCookies);
    counter.innerText = "Kills: " + numberOfCookies;
};


const clickUpgradeFunction = () => {
    if(numberOfCookies >= costOfClickUpgrade) {
        
        numberOfCookies -= costOfClickUpgrade;

counter.innerText = "Kills:" + numberOfCookies
        
        clickUpgradeIncrease++;
    }
};

clickUpgrade.onclick = clickUpgradeFunction;








