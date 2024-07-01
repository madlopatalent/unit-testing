var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

var regNumbersForPaarl = allPaarl(regNumbers);
function allPaarl(regNo){
    var reg = regNo.split(",");
    var allPaarl = [];
    for(let i = 0;i<reg.length;i++){
      let fromPaarl=reg[i].trim();
      if(fromPaarl.startsWith("CJ")){
        allPaarl.push(fromPaarl);
      }
    }
   return allPaarl;
   console.log(allPaarl); 
  }
  console.log(allPaarl("CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864"))