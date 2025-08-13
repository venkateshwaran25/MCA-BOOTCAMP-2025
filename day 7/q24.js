/** Q24
	 * This program reads n numbers into an array, calculates the average 
	 of those numbers using a loop, and displays the result. 
	 It demonstrates how to use arrays and object-oriented concepts 
	 like classes and methods in Java.
	 
	Problem Flow
	Read input size n
	Read n elements into array
	Loop through array to compute sum
	Divide sum by n to get average
	Display result
	
	 Input / Output Example
Input:
Enter how many numbers: 5
Enter the numbers:
10
20
30
40
50

Output:
Average of the numbers: 30.00


	 */


let num=parseInt(prompt("enter how many numbers?"));
let c=0;
for(let i=0;i<num;i++)
{
    let a=parseInt(prompt("enter the numbers",+i));
     c+=a;
    
    
}
let avg=c/num;
console.log(avg);

