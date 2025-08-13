/** Q3
	 * This program calculates Compound Interest using the formula:
 		F = P × (1 + i)ⁿ
 		Where:
			P = Principal amount
			i = Rate/100
			n = Number of years
 			Here, F is the final amount (principal + interest)
	
		 Problem Flow:
		Input P, R, and N from user
		Calculate i = R / 100
		Use formula F = P × (1 + i)^N
		Display the final compound amount
		
		Input / Output Example:
		Input:
		Enter Principal Value: 10000  
		Enter Rate of Interest: 10  
		Enter No. of Years: 2
		Output:
		Compound Interest 12100.00
*/
let P=prompt("enter principal amount");
let R=prompt("enter rate of interest");
let N=prompt("emter number of years");
i=R/100;
F=P*(1+i)^N;
console.log("compound interests", F);

