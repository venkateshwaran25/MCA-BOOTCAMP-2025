/** Q5
	 *  This program calculates the Volume and Surface Area of a sphere 
	 *  using the following formulas:
			Volume (V) = (4/3) × π × r³
			Area (A) = 4 × π × r²
	
	Problem Flow:
	Get r (radius) from user
	Calculate area using A = 4πr²
	Calculate volume using V = (4/3)πr³
	Display both values
	
	 Input / Output Example:
	Input:
	Enter Radius of Sphere: 7
	Output:
	Volume of Sphere: 1436.571429
	Area of Sphere  : 615.428571
*/
let r=prompt(" enter radius of the sphere ");
v=(4/3)*22/7*r*r*r;
a=4*22/7*r*r;
console.log("volume of sphere",v);
console.log("area of sphere",a);


    
