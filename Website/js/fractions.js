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
    this.add = function(f)
    {
      var n = this.numerator*f.denominator+this.denominator*f.numerator;
      var d = this.denominator*f.denominator;
      var F=new Fraction(n,d);
      return F.reduce();
    }
    //Multiplication
    this.multiply = function(f)
    {
       var n=this.numerator*f.numerator;
       var d=this.denominator*f.denominator;
       var F=new Fraction(n,d);
       return F.reduce();
    }
    //Subtraction
    this.subtract = function(f)
    {
      var n = this.numerator*f.denominator-this.denominator*f.numerator;
      var d = this.denominator*f.denominator;
      var F=new Fraction(n,d);
      return F.reduce();
    }

    //Power
    this.power = function(n)
    {
      var n = 1;
      var d = 1;
      for(var i=0;i<n;i++){
        n*=this.numerator;
        d*=this.denominator;
      }
      var F=new Fraction(n,d);
      return F.reduce();
    }
    //Is Negative
    this.isNegative = function()
    {
      if(this.numerator<0 || this.denominator<0 && !(this.numerator<0 && this.denominator<0)){
        return 1;
      }
      return 0;
    }

    //Square Root
    this.squareRoot = function()
    {
      this.reduce();
      if(!this.isNegative()){
        var n = new Surd(this.numerator);
        var d = new Surd(this.denominator);
        var f=new Fraction(n.rational,d.rational);
        f.reduce();
      }
    }

}
//GCD
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
