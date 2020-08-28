var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
]
const length = denom.length

const totalCashAvailable = (cid) => {
  cid.forEach(currencyArr => {
    for(let i=0;i<length;i++) {
      let currencyObj = denom[i]
      if(currencyArr[0] === currencyObj.name) {
        currencyObj.amount = currencyArr[1]
        currencyObj.coins = parseInt(currencyObj.amount / currencyObj.val)
        break
      }
    }
  })
  
  let sum = 0
  for (const obj of denom) {
    sum += obj.amount
  }
  return sum
}

function checkCashRegister(price, cash, cid) {
  const changeToGive = cash - price;
  const availAmount = totalCashAvailable(cid)
  console.log(denom)

  const changeArr = []
  const objToReturn = { 
    status: '',
    change: changeArr,
  }

  if(availAmount < changeToGive) {
    objToReturn.status = 'INSUFFICIENT_FUNDS'
    //console.log(objToReturn)
    return objToReturn
  }

  let amountToCut = changeToGive
  let requiredCoins = 0
  //console.log(amountToCut)
  for (const obj of denom) {
    if(obj.amount === changeToGive) {
      objToReturn.status = "CLOSED"
      objToReturn.change = cid
      return objToReturn
    }

    if(obj.val <= amountToCut && amountToCut >= 0 && obj.coins > 0) {
      amountToCut = Number(amountToCut.toFixed(2))
      requiredCoins = parseInt(amountToCut / obj.val)
      console.log(obj)
      console.log('required coins == ' + requiredCoins)
      console.log('amountToCut == ' + amountToCut)
      if(requiredCoins <= obj.coins) {
        amountToCut -= requiredCoins * obj.val
        obj.coins -= requiredCoins
        obj.amount = obj.val * obj.coins
        objToReturn.change.push([obj.name, requiredCoins * obj.val])
      }
      else {
        amountToCut -= obj.amount
        objToReturn.change.push([obj.name, obj.amount])
        obj.coins = 0
        obj.amount = 0
      }
    }
  }
  if(amountToCut < 0) {
    objToReturn.status = 'INSUFFICIENT_FUNDS'
    objToReturn.change = []
  }
  else {
    objToReturn.status = 'OPEN'
  }
  console.log(objToReturn)
  return objToReturn
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01], 
  ["NICKEL", 2.05], 
  ["DIME", 3.1], 
  ["QUARTER", 4.25], 
  ["ONE", 90], 
  ["FIVE", 55], 
  ["TEN", 20], 
  ["TWENTY", 60], 
  ["ONE HUNDRED", 100]
])