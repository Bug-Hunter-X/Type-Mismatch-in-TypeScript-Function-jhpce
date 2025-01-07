function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct usage

let num1:number = 1;
let num2: string = '2';
let num3: number = parseFloat(num2); 
let result2 = add(num1, num3); //Correct Usage after type casting