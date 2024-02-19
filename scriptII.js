//II. Find logic and solve it.

//5. Check given number is armstrong or not.

var x=prompt("Enter a 3 digit number");
var a=x;
var rem;
var sum=0;

while(a>0){
	rem=a%10;
	sum+=rem**3;
	a=(a-rem)/10;
}
if(sum==x){
	console.log("The number is an Armstrong number");
}
else{
	console.log("The number is not an Armstrong number");
}
console.log(sum);


//1. input : 2345
   //output : 14
   
   var n=2345;
   var sum=0;
   var rem;
   while(n!=0){
	 rem=n%10;
     n=(n-rem)/10;
     sum+=rem;   
   }
   console.log(sum);
   
   
//2. input: 9834
   //output: 12
   
var m=9834;
var rem;
var sum=0;
while(m!=0){
	rem=m%10;
	m=(m-rem)/10;
	
	if(rem%2==0){
		sum+=rem;
	}
}  
console.log(sum);  


//3. input : 3456
  // output : 4
  
  var t=3456;
  var rem;
  var sum=0;
  var count=0;
  
  while(t>0){
	 rem=t%10;
	 t=(t-rem)/10;
	 
	 if(rem%2!=0){
		 sum+=rem;
		 count++;
	 }
  }
  console.log(sum/count);
  
  
  //4. input : 7656
   //output : 6
   
  var p=7656;
  var rem;
  var sum=0;
  var count=0;
  
  while(p>0){
	  rem=p%10;
	  p=(p-rem)/10;
	  sum+=rem;
	  count++;
  }
  console.log(sum/count);
