function Fraction (numerator,denominator) {
  //Constructor
    this.numerator = numerator;
    this.denominator = denominator;
 //Methods
   //GCD Reduction
    this.reduce = function()
    {
      var g=gcd(numerator,denominator);
      numerator/=g;
      denominator/=g;
      return new Fraction(numerator,denominator);
    }
    //Addition
    this.add = function(f1,f2)
    {
      var F1=new Fraction(f1["numerator"],f1["denominator"]);
      F1=F1.reduce();
      var F2=new Fraction(f2["numerator"],f2["denominator"]);
      F2=F2.reduce();
      var nu = F1["numerator"]*F2["denominator"]+F1["denominator"]*F1["numerator"];
      var den = F1["denominator"]*F2["denominator"];
      var F3=new Fraction(nu,den);
      return F3.reduce();
    }
}

function Surd(int,surd){
  //Constructor
    this.int = int;
    this.surd = surd;
}

function gcd(a, b)
{
  a=Math.abs(a);
  b=Math.abs(b);
  var t=0;
    while (b != 0)
    {
       t = b;
       b = a % b;
       a = t;
    }
    return a;
}


function discriminant(a,b,c){
  return b*b-4*a*c;
}

function seperateSquareAndSurd(num){
  num=Math.abs(num);
  var pf = factor(num);
  var squarePart = 1;
  var surdPart = 1;
  for(var i=0;i<pf.length;i++){
    if(pf[i][1]/2>=1){
        var k=Math.floor(pf[i][1]/2);
        squarePart*=Math.pow(pf[i][0],k);
    }
  }
  surdPart=num/(squarePart*squarePart);
  return new Surd(squarePart,surdPart);
}

function roots(a,b,c)
{
  var det = discriminant(a,b,c);
  var elem=document.getElementById("output");
  elem.innerHTML = "<br><br>Discriminant  : "+det+"</br><br>";
  elem.innerHTML +="Roots are ";
  var imaginary = 0;
  if(det<0){
    imaginary=1;
  }
  det=Math.abs(det);
  var rootValue = seperateSquareAndSurd(det);
    if(rootValue["surd"]<=1)
    {
      if(imaginary)
      {
        det=rootValue["int"];
        var r1=new Fraction(-b,2*a);
        var f1 = new Fraction(det,2*a);
        f1=f1.reduce();
        r1=r1.reduce();
        elem.innerHTML +=r1["numerator"]+ "/" +r1["denominator"]+ " " ;
        elem.innerHTML += " i ";
        elem.innerHTML +=f1["numerator"]+ "/" +f1["denominator"] + " , ";
        elem.innerHTML +=r1["numerator"]+ "/" +r1["denominator"]+ " " ;
        elem.innerHTML += "-" +   " i ";
        elem.innerHTML +=f1["numerator"]+ "/" +f1["denominator"] ;
      }
      else
      {
        det=rootValue["int"];
        var r1=new Fraction(det-b,2*a);
        r1=r1.reduce();
        var r2=new Fraction(-det-b,2*a);
        r2=r2.reduce();
        elem.innerHTML +=r1["numerator"]+ "/" + r1["denominator"]+ " , " ;
        elem.innerHTML +=r2["numerator"]+ "/" + r2["denominator"] ;
      }
    }
    else
    {
      det=rootValue["surd"];
      var r1=new Fraction(-b,2*a);
      var f1 = new Fraction(det,2*a);
      r1=r1.reduce();
        if(imaginary)
        {
          elem.innerHTML +=r1["numerator"] + "/" + r1["denominator"]+ "+" ;
          elem.innerHTML += " i ";
          elem.innerHTML +="SQRT["+f1["numerator"]+"]"+ "/" +f1["denominator"] + " , ";
          elem.innerHTML +=r1["numerator"]+ "/" +r1["denominator"] ;
          elem.innerHTML += "-" +  " i ";
          elem.innerHTML +="SQRT["+f1["numerator"]+"]"+ "/" +f1["denominator"] ;
        }
        else
        {
          elem.innerHTML +=r1["numerator"]+ "/" +r1["denominator"]+  "+";
          elem.innerHTML +="SQRT["+f1["numerator"]+"]"+ "/" +f1["denominator"] + " , ";
          elem.innerHTML +=r1["numerator"]+ "/" +r1["denominator"]+ " " ;
          elem.innerHTML += "-" + " ";
          elem.innerHTML +="SQRT["+f1["numerator"]+"]"+ "/" +f1["denominator"] ;
        }
    }
}

function runRoots(){
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  roots(a,b,c);
}
