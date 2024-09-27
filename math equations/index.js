function runMathProblems() {
    let n1 = 12; 
    let n2 = 15; 
    let n3 = 9;  
    let n4 = 14; 

    
    const sum = n1 + n2 + n3 + n4;
    const isOddCount = (n1 % 2 !== 0) + (n2 % 2 !== 0) + (n3 % 2 !== 0) + (n4 % 2 !== 0);
    const isAllUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
    const isAllUnique = new Set([n1, n2, n3, n4]).size === 4;

    const divisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
    const isFirstLargerThanLast = n1 > n4;


    let result = n2 - n1; 
    result *= n3;         
    result %= n4;         

    const areAllOver25 = !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);

  
    console.log("Math Problems Results:");
    console.log(`Sum of numbers: ${n1} + ${n2} + ${n3} + ${n4} = ${sum}`);
    console.log(`Number of odd numbers: ${isOddCount}`);
    console.log(`All numbers are under 25: ${isAllUnder25}`);
    console.log(`All numbers are unique: ${isAllUnique}`);
    console.log(`Are all numbers divisible by 5? ${divisibleBy5}`);
    console.log(`Is the first number larger than the last? ${isFirstLargerThanLast}`);
    console.log(`Result of arithmetic chain: (${n2} - ${n1}) * ${n3} % ${n4} = ${result}`);
    console.log(`Are all numbers over 25? ${areAllOver25}`);

    
    document.getElementById('mathResults').innerHTML = `
        <p>Equation for Sum: ${n1} + ${n2} + ${n3} + ${n4} = ${sum}</p>
        <p>Number of odd numbers: ${isOddCount}</p>
        <p>All numbers are under 25: ${isAllUnder25}</p>
        <p>All numbers are unique: ${isAllUnique}</p>
        <p>Are all numbers divisible by 5? ${divisibleBy5}</p>
        <p>Is the first number (${n1}) larger than the last (${n4})? ${isFirstLargerThanLast}</p>
        <p>Arithmetic Chain Result: (${n2} - ${n1}) * ${n3} % ${n4} = ${result}</p>
        <p>Are all numbers over 25? ${areAllOver25}</p>
    `;
}

document.getElementById('runMathProblems').addEventListener('click', runMathProblems);


function runPracticalMath() {
    const totalDistance = 1500; 
    const fuelPricePerGallon = 3; 
    const fuelBudget = 175; 

    const fuelEfficiencyAt55 = 30; 
    const fuelEfficiencyAt60 = 28; 
    const fuelEfficiencyAt75 = 23; 

   
    const gallonsAt55 = totalDistance / fuelEfficiencyAt55;
    const gallonsAt60 = totalDistance / fuelEfficiencyAt60;
    const gallonsAt75 = totalDistance / fuelEfficiencyAt75;


    const costAt55 = gallonsAt55 * fuelPricePerGallon;
    const costAt60 = gallonsAt60 * fuelPricePerGallon;
    const costAt75 = gallonsAt75 * fuelPricePerGallon;

    const timeAt55 = totalDistance / 55;
    const timeAt60 = totalDistance / 60;
    const timeAt75 = totalDistance / 75;


    console.log("Practical Math Results:");
    console.log(`At 55 MPH: You need ${gallonsAt55.toFixed(2)} gallons, costing $${costAt55.toFixed(2)}. Trip time: ${timeAt55.toFixed(2)} hours.`);
    console.log(`At 60 MPH: You need ${gallonsAt60.toFixed(2)} gallons, costing $${costAt60.toFixed(2)}. Trip time: ${timeAt60.toFixed(2)} hours.`);
    console.log(`At 75 MPH: You need ${gallonsAt75.toFixed(2)} gallons, costing $${costAt75.toFixed(2)}. Trip time: ${timeAt75.toFixed(2)} hours.`);

   
    const results = `
        <p>Distance: ${totalDistance} miles</p>
        <h4>At 55 MPH:</h4>
        <p>Gallons required = ${totalDistance} / ${fuelEfficiencyAt55} = ${gallonsAt55.toFixed(2)} gallons</p>
        <p>Cost = ${gallonsAt55.toFixed(2)} gallons * $${fuelPricePerGallon} per gallon = $${costAt55.toFixed(2)}</p>
        <p>Time = ${totalDistance} / 55 = ${timeAt55.toFixed(2)} hours</p>

        <h4>At 60 MPH:</h4>
        <p>Gallons required = ${totalDistance} / ${fuelEfficiencyAt60} = ${gallonsAt60.toFixed(2)} gallons</p>
        <p>Cost = ${gallonsAt60.toFixed(2)} gallons * $${fuelPricePerGallon} per gallon = $${costAt60.toFixed(2)}</p>
        <p>Time = ${totalDistance} / 60 = ${timeAt60.toFixed(2)} hours</p>

        <h4>At 75 MPH:</h4>
        <p>Gallons required = ${totalDistance} / ${fuelEfficiencyAt75} = ${gallonsAt75.toFixed(2)} gallons</p>
        <p>Cost = ${gallonsAt75.toFixed(2)} gallons * $${fuelPricePerGallon} per gallon = $${costAt75.toFixed(2)}</p>
        <p>Time = ${totalDistance} / 75 = ${timeAt75.toFixed(2)} hours</p>
    `;

    document.getElementById('practicalResults').innerHTML = results;
}

document.getElementById('runPracticalMath').addEventListener('click', runPracticalMath);
