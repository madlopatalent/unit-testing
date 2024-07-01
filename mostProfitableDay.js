var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];

var salesData2 = [
    {department : 'electronics', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'electronics', sales : 12006, day : 'Friday'},
    {department : 'electronics', sales : 16109, day : 'Saturday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'steelwork', sales : 1500, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
];

function mostProfitableDepartment(salesData){
  const salesMap = {};
  for(var i=0; i<salesData.length; i++){
      const sale = salesData[i];
      salesMap[sale.department] = 0;
  }
  for(var i=0; i<salesData.length; i++){
      const sale = salesData[i];
      var currentDepartTotal = salesMap[sale.department];
      currentDepartTotal += sale.sales;
      salesMap[sale.department] = currentDepartTotal;
  }
  var currentMaxSales = 0;
  var currentDepart = "";
  for(const departSale in salesMap){
      const currentDepartSales = salesMap[departSale];
      if(currentDepartSales > currentMaxSales){
          currentMaxSales = currentDepartSales;
          currentDepart = departSale;
      }
  }
  return currentDepart;
}
function mostProfitableDay(salesData){
  const dayMap = {};
  for(let i=0; i<salesData.length; i++){
    const sale = salesData[i];
    dayMap[sale.day] = 0;
  }
  for(let i=0; i<salesData.length; i++){
    const sale = salesData[i];
    var currentDayTotal = dayMap[sale.day];
    currentDayTotal += sale.sales;
    dayMap[sale.day] = currentDayTotal;
  }
  var currentDayMaxSales = 0;
  var currentDay = "";
  for(const saleDay in dayMap){
    const currentDaySales = dayMap[saleDay];
    if(currentDaySales > currentDayMaxSales){
      currentDayMaxSales = currentDaySales;
      currentDay = saleDay;
    }
  }
  return currentDay;
}
console.log(mostProfitableDepartment(salesData));
console.log(mostProfitableDay(salesData));
console.log(mostProfitableDepartment(salesData2));
console.log(mostProfitableDay(salesData2));