var drawm = 0;
var hasClone = 0;
function raffle (Length) {
	drawn = Math.round(Math.random() * Length);
};
function verifyClone (whichArray) {
	for(var u = 0; u <= whichArray.length; u++) {
		if(whichArray[u] == drawn) {
			hasClone++;
		}
	}
};
function loterry (amount,Length,whichArray) {
	for(var i = 0; i < amount; i++) {
		raffle(Length);
		verifyClone(whichArray);
		if(hasClone == 0) {
			numbers.push(drawn);
		} else {
			i--;
			hasClone = 0;
		}
	}
};

//Para sortear: crie uma array e dê loterry(QuantidadeDeNumeros, deZeroAtéQualNúmero, QualArray);
//For loterry: create one array and give loterry(AmountOfNumbers, zeroUntilTheNumber, whichArray);