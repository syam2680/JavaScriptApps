function Surd(num){
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
    this.rational=squarePart;
    this.irrational=surdPart;
    this.i=0;
}
