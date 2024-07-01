function totalPhoneBill(data){
    network = data.split(',');
    let sms_count = 0
    let call_count = 0
    for (let i=0;i<network.length; i++){
    if(network[i].trim() === 'sms'){
      sms_count++;
    } if
     (network[i].trim() === 'call'){
          call_count++
   }
    }
  const totalCost =(sms_count * 0.65) + (call_count * 2.75) ;
      return 'R' + totalCost.toFixed(2);
    }
  var data = 'call, sms, call, sms, sms';
  var bill = totalPhoneBill(data);
  console.log(bill);