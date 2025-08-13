/** Q9
	 * This program finds the sum of even numbers between 2 and 30 (inclusive).
	 	
	 Problem Flow:
	Start loop from 2 to 30
	Check if number is even (i % 2 == 0)
	Add to sum
	Print final sum
	
	 Input / Output Example:
	Output:
	Sum of even numbers from 2 to 30 = 240
	(Even numbers: 2 + 4 + 6 + ... + 30 = 240)
	 */
    s=0;
    for(let i=2;i<=30;i++)
    {
        if(i%2==0)
        {
            s=s+i;
        }

    }
    console.log("sum of even numbers from 2 to 30 =",s);
    