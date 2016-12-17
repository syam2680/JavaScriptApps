function calculateMode(numbers)
{
    numbers.sort(function(a, b){return a-b});
    var counts={};
    for(var i=0;i<numbers.length;i++){
        if(numbers[i] in counts){
          counts[numbers[i]]++;
        }else{
            counts[numbers[i]]=1;
        }
    }
    var modeCandiates=Object.keys(counts).sort(function(a,b){return counts[b]-counts[a]});
    var mode=[modeCandiates[0]];
    for(var i=1;i<modeCandiates.length;i++)
    {
      if(counts[modeCandiates[i-1]]==counts[modeCandiates[i]])
      {
        mode.push(modeCandiates[i]);
      }
      else
      {
          break;
      }
    }
    return mode;
}


function calculateMedian(numbers)
{
    numbers.sort(function(a, b){return a-b});
    var median=null;
    if(numbers.length%2!=0){
      median=numbers[Math.floor(numbers.length/2)];
    }else{
      var ind1=Math.floor(numbers.length/2)-1;
      var ind2=Math.floor(numbers.length/2);
      median=(parseInt(numbers[ind1])+parseInt(numbers[ind2]))/2;
    }
    return median;
  }

  function calculateMean(numbers)
  {
    var sum = 0;
    for(var i=0;i<numbers.length;i++)
    {
      sum+=parseInt(numbers[i]);
    }
    var arithmeticMean=sum/numbers.length;
    return arithmeticMean;
  }


function FindMode()
{
      var input = document.getElementById("number").value;
      var numbers = input.split(",");
      var area = document.getElementById("output");
      var mode=calculateMode(numbers);
      document.getElementById("output").innerHTML="Mode is : " + Object.values(mode);
}

function FindMedian(){
  var input = document.getElementById("number").value;
  var numbers = input.split(",");
  var median=calculateMedian(numbers);
  document.getElementById("output").innerHTML="Median is : " + median;
}


function FindMean(){
  var input = document.getElementById("number").value;
  var numbers = input.split(",");
  var arithmeticMean=calculateMean(numbers);
  document.getElementById("output").innerHTML="Mean is : " + arithmeticMean;
}
