//Qns.1 Print Even number upto 50.

var i=1;
while(i<=50){
	if(i%2==0){
		console.log(i);
	}
	i++;
}


//Qns.2 Add 1 to 10.

var n=10;
var sum=0;
var i;
for(i=1;i<=n;i++){
	sum=sum+i;
}
console.log(sum);


//Qns.3 Print in reverse order 100 to 50.

var n=50;
var i;
for(i=100;i>=n;i--){
	console.log(i);
} 


//Qns.4 Find factorial of the given number.

function factorial(n){
	var n;
	var fact=1;
	while(n>=1){
		
		fact=fact*n;
		n--;
	}
	return fact;
}
console.log("The factorial of given number is" + factorial(5));


//Qns.5 Find given number is prime number or not.

var n=prompt("Enter a number");
var isitprime=true;
if(n>1){
	for(var i=2;i<n;i++){
		
		if(n%i==0){
			isitprime=false;
			break;
		}
	}
	if(isitprime){
		console.log(n+"is a prime number");
	}
	else{
		console.log(n+"is not a prime number");
	}

}


