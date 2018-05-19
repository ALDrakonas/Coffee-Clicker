//Base code comes from http://dhmstark.co.uk/articles/incrementals.html
//Thanks for the starting point! I hope to make this unrecognizable!

var coffee = 0;

function brewCoffee(number){
    coffee = coffee + number;
    document.getElementById("coffee").innerHTML = coffee;
};

var baristas = 0;

function hireBarista(){
    var baristaCost = Math.floor(10 * Math.pow(1.1,baristas));     //works out the cost of this cursor
    if(coffee >= baristaCost){                                   //checks that the player can afford the cursor
        baristas = baristas + 1;                                   //increases number of cursors
    	coffee = coffee - baristaCost;                          //removes the cookies spent
        document.getElementById('baristas').innerHTML = baristas;  //updates the number of cursors for the user
        document.getElementById('coffee').innerHTML = coffee;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,baristas));       //works out the cost of the next cursor
    document.getElementById('baristaCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var espressoMachines = 0;

function buyEspressoMachine(){
    var espressoMachineCost = Math.floor(10 * Math.pow(1.2,espressoMachines));
    if(coffee >= espressoMachineCost){
        espressoMachines = espressoMachines + 1;
        coffee = coffee - espressoMachineCost;
        document.getElementById('espressoMachines').innerHTML = espressoMachines;
        document.getElementById('coffee').innerHTML = coffee;
    };
    var nextCostEspresso = Math.floor(100 * Math.pow(1.2,espressoMachines));
    document.getElementById('espressoMachineCost').innerHTML = nextCostEspresso;
}


var frenchPresses = 0;

function buyFrenchPress(){
    var frenchPressCost = Math.floor(150 * Math.pow(1.5,frenchPresses));
    if (coffee >= frenchPressCost) {
        frenchPresses = frenchPresses + 1;
        coffee = coffee - frenchPressCost;
        document.getElementById('frenchPresses').innerHTML = frenchPresses;
        document.getElementById('coffee').innerHTML = coffee;
    };
    var nextCostFrenchPress = Math.floor(150 * Math.pow(1.5,frenchPresses));
    document.getElementById('frenchPressCost').innerHTML = nextCostFrenchPress;
}

//Upgrades
//One function per upgrade; fix later to make this
//function reusable for all upgrades by passing
//new arguments to it.

function buyGrinder(){
    if (coffee >= 500){
//hide the button
//Add .2 to coffeeUpgradeMultiplier
        coffeeUpgradeMultiplier = coffeeUpgradeMultiplier + 0.2;
    }
}


//All upgrades should contribute to a multiplier
//in a function that's run at the end of each
//second, which multiplies the coffee variable
//by a fraction of a percentage.

var coffeeUpgradeMultiplier = 1;


/*

var totalCoffee = 0;

//A function that will check, each interval, the total number of coffees generated.

function totalCoffeeCheck(){
    
}

*/





window.setInterval(function(){
	
	brewCoffee(baristas);
    brewCoffee(espressoMachines * 2);
    brewCoffee(frenchPresses * 4)


}, 1000);