var screen = document.getElementById("screen");
var c = screen.getContext("2d");
var drawm = 0;
var yes = 0;
var numbers = [];
function raffle (X) {
	drawn = Math.round(Math.random() * X);
};
function verifyClone (X) {
	for(var u = 0; u <= X.length; u++) {
		if(X[u] == drawn) {
			yes++;
		}
	}
};
function loterry (amount,Length,whichArray) {
	for(var i = 0; i < amount; i++) {
		raffle(Length);
		verifyClone(numbers);
		if(yes == 0) {
			numbers.push(drawn);
		} else {
			i--;
			yes = 0;
		}
	}
};
//Para sortear: loterry(QuantidadeDeNumeros, deZeroAtéQualNúmero, QualArray);
//For loterry: loterry(AmountOfNumbers, zeroUntilTheNumber, whichArray);