/** Q6
	 * This program allows the user to enter 3 test marks of a student, 
	 calculates the total and average, and displays the result.
	 
	Problem Flow:
	Get 3 marks from user
	Add marks → total
	Divide total by 3.0 → average
	Display total and average
	
	Input / Output Example:
	Input:
	Enter Mark 1: 80  
	Enter Mark 2: 75  
	Enter Mark 3: 85  
	Output:
	Total Marks   = 240  
	Average Marks = 80.0
	 */
let sub1=Number(prompt("enter mark 1"));
let sub2=Number(prompt("enter mark 2"));
let sub3=Number(prompt("enter mark 3"));
let total=sub1 + sub2 + sub3;
let avg=total/3.0;
console.log("total marks ="+total);
console.log("average marks ="+ avg);


