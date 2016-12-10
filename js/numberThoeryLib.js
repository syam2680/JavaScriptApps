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
