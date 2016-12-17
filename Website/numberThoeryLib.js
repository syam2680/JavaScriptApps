function divisors(number){
  var divisors=[];
  for(var i=1;i*i<=number;i++){
    if(number%i==0){
      divisors.push(i);
      if(i*i!=number){
      divisors.push(number/i);
      }
    }
  }
   return divisors;
}

function divisorsSum(number){
  var divisorList=divisors(number);
  var sum = 0;
   for(var i=0;i<divisorList.length;i++){
     sum+=divisorList[i];
   }
   return sum;
}

function factor(number){
   var factors=[];
   for(var i=2;i<=number;i++){
     var c=0;
      while(number%i==0){
         number/=i;
         c++;
       }
       if(c>0){
         factors.push([i,c]);
       }
   }
   return factors;
}

function isPrime(number){
    if(number<=1){
      return 0;
    }
    for(var i=2;i*i<=number;i++){
      if(number%i==0){
        return 0;
      }else{
        continue;
      }
    }
    return 1;
}

function isPerfectNumber(number){
  var divSum = divisorsSum(number)-number;
  if(divSum==number)
  {
    return 1;
  }
  return 0;
}
function generatePerfectNumber(number){
var perfectNumbers=[];
for(var i=1;i<=number;i++){
  if(isPerfectNumber(i)){
    perfectNumbers.push(i)
  }
}
return perfectNumbers;
}
/*
**************************************
*Code to run functions and update HTML*
**************************************
*/
function runIsPrime(){
var num = document.getElementById("number").value;
num=num.replace(/\D+/g, "");
var st = isPrime(num);
if(st){
  document.getElementById("output").innerHTML=num + " is Prime</br></br>";
 }else{
  document.getElementById("output").innerHTML=num + " is Not a Prime</br></br>";
  }
var f = factor(num);
  var html_text = "Factors of " + num +  " are ";
  for(var i=0;i<f.length;i++){
      html_text+=f[i][0];
      if(i<f.length-1){
        html_text+=",";
      }
  }
  html_text+="</br></br>Prime Factorisation is written as : ";
  for(var i=0;i<f.length;i++){
      html_text+=f[i][0];
      html_text+='^'+f[i][1];
      if(i<f.length-1){
        html_text+=" x ";
      }
  }
  document.getElementById("output").innerHTML+=html_text;
}

function runIsPerfectNumber(){
var num = document.getElementById("number").value;
num=num.replace(/\D+/g, "");
var st = isPerfectNumber(num);
if(st){
  document.getElementById("output").innerHTML=num + " is Perfect Number";
 }else{
  document.getElementById("output").innerHTML=num + " is Not a Perfect Number";
  }
}

function runFactor(){
  var num = document.getElementById("number").value;
  num=num.replace(/\D+/g, "");
  var f = factor(num);
  var html_text = "Factors of " + num +  " are ";
  for(var i=0;i<f.length;i++){
      html_text+=f[i][0];
      if(i<f.length-1){
        html_text+=",";
      }
  }
  html_text+="</br></br>Prime Factorisation is written as : ";
  for(var i=0;i<f.length;i++){
      html_text+=f[i][0];
      html_text+='^'+f[i][1];
      if(i<f.length-1){
        html_text+=" x ";
      }
  }
  document.getElementById("output").innerHTML=html_text;
}

function runGeneratePerfectNumbers(){
  var num = document.getElementById("number").value;
  num=num.replace(/\D+/g, "");
  var f="";
  if(num>10000)
  {
    f = generatePerfectNumber(10000);
  }else
  {
  f = generatePerfectNumber(num);
  }
  document.getElementById("output").innerHTML=JSON.stringify(f);
  if(num>10000){
    alert("We cant generate for inputs greater than 10000.");
  }
}

function runDivisors(){
  var num = document.getElementById("number").value;
  num=num.replace(/\D+/g, "");
  var f = divisors(num);
  f.sort(function(a,b){return a-b});
  var html_text = "Divisors of " + num +  " are ";
  var html_table = "";
  for(var i=0;i<f.length;i++){
    html_text+=f[i];
    html_table+=f[i];
    html_table+=" x ";
    html_table+=f[f.length-i-1];
    html_table+=" = ";
    html_table+=num;
    html_table+="</br>";
    if(i<f.length-1){
      html_text+=",";
    }
  }
  document.getElementById("output").innerHTML=html_text+"</br></br>";
  document.getElementById("output").innerHTML+="No of Divisors : "+ f.length +" </br></br>";
  document.getElementById("output").innerHTML+=html_table+"</br></br>";
}


function findDivisorSum(){
  var num = document.getElementById("number").value;
  num=num.replace(/\D+/g, "");
  var f = divisors(num);
  f.sort(function(a,b){return a-b});
  var html_text = "Divisors of " + num +  " are ";
  var html_table = "";
  var html_sum_text = "Divisors Sum = ";
  for(var i=0;i<f.length;i++){
    html_text+=f[i];
    html_table+=f[i];
    html_table+=" x ";
    html_table+=f[f.length-i-1];
    html_table+=" = ";
    html_table+=num;
    html_table+="</br>";
    html_sum_text+=f[i];
    if(i<f.length-1){
      html_text+=",";
      html_sum_text+="+";
    }
  }
  document.getElementById("output").innerHTML=html_text+"</br></br>";
  document.getElementById("output").innerHTML+=html_table+"</br></br>";
  var sum = 0;
   for(var i=0;i<f.length;i++){
     sum+=f[i];
   }
html_sum_text+=' = ';
html_sum_text+=sum;
  document.getElementById("output").innerHTML+=html_sum_text;
}
