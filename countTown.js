function allFromTown(regNoString, regNo){
    const regNoArray = regNoString.split(',').map(regNo=> regNo.trim());
    const regTownNo = [];
    for (let i=0; i<regNoArray.length; i++){
      if(regNoArray[i].startsWith(regNo)){
        regTownNo.push(regNoArray[i]);
      }
    }
    return regTownNo;
  }
  var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
  console.logfromStellies, ['CL 124', 'CL 345', 'CL 341'];
  
  var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');
  console.log(fromStellies, ['CJ 456']);
  
  
  var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
  console.log(fromKuilsriver, []);