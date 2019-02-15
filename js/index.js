let n;

do {
	n = parseInt(prompt("Enter number?"));
} while (n <= 0 && n != null);

console.time('Timer 1');
//Цикл 
function fibLoop(num) {
	let first = 1;
	let second = 1;
	for (let i = 3; i <= num; i++) {
		let result = first + second;
		first = second;
		second = result;
	}
	return second;
};
document.writeln(' Loop: ' + fibLoop(n))

//Біне

function bineFibonacci(num) {
	const Phi = (1 + Math.sqrt(5)) / 2;
	const phi = (1 - Math.sqrt(5)) / 2
	return Math.round((Math.pow(Phi, num) - Math.pow(phi, num)) / Math.sqrt(5));
};
document.writeln(' Bine: ' + bineFibonacci(n))

//Масив

function fibArr(num) {
	const arr = [0, 1];

	for (let i = 2; i < num + 1; i++) {
		arr.push(arr[i - 2] + arr[i - 1])
	}
	return arr[num]
}
document.writeln('Array: ' + fibArr(n))


//Рекурсія


function fibRec(num) {
	if (num > 37) {
		return console.log('the browser has died')
	}
	if (num < 2) {
		return num;
	}
	return (fibRec(num - 1) + fibRec(num - 2))
}

document.write(' Recursive: ' + fibRec(n));



const memoized = (function () {
  let memo = [0, 1];
  let fib = function (n) {
      let result = memo[n];
      if (typeof result !== 'number') {
        result = fib(n - 1) + fib(n - 2);
        memo[n] = result;
      }
      return result;
      };
  return fib;
}());

document.write(' Memoized: ' + memoized(n));




console.timeEnd('Timer 1'); 
