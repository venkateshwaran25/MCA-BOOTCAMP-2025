/** Q25
	 * This program reads n integers into an array and finds the second
	 largest number among them. It uses a class with methods for input, 
	 processing (finding second largest), and output. It showcases 
	 array handling and object-oriented principles in Java.
	 
	Problem Flow 
	Read input size n
	Store values in array
	Use loop to compare and find:
		largest
		secondLargest
	Display result
	
	Input / Output Example
Input:
Enter how many numbers: 6
Enter the numbers:
10
45
22
45
8
19

Output:
Second largest number is: 22


	 */

class SecondLargestFinder {
  constructor() {
    this.numbers = [];
  }

  readInput() {
    let n = parseInt(prompt("Enter how many numbers:"));
    for (let i = 0; i < n; i++) {
      let value = parseInt(prompt(`Enter number ${i + 1}:`));
      this.numbers.push(value);
    }
  }

  findSecondLargest() {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of this.numbers) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }

    return secondLargest;
  }

  displayResult(secondLargest) {
    console.log(`Second largest number is: ${secondLargest}`);
  }
}

// Main execution
let finder = new SecondLargestFinder();
finder.readInput();
let secondLargest = finder.findSecondLargest();
finder.displayResult(secondLargest);