/** Q4
	 * This program converts temperature from Fahrenheit to Celsius using the formula:
		C = (5/9) × (F - 32)
		
	Problem Flow:
	Input temperature in Fahrenheit
	Apply formula: C = (5 / 9.0) × (F - 32)
	Display result in Celsius
	
	Input / Output Example:
	Sample Inputs to Test (from question):
	68, 150, 212, 0, -22
	Sample Output (for 68°F):
	68.000000 deg F is 20.000000 deg C
	
	 */
    let f=parseFloat(prompt("enter fahrenheit"));
    c=(5/9)*(f-32);
    console.log(f,"deg f is",c,"deg c");
    