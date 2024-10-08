/**
 The cable problem
 Implement algorithm 1 here
*/

function cable1(currentLength, requireLength, saleLength){
  let count = 0;
  let i = currentLength
  while(i<requireLength){
    i += saleLength;
    count += 1
  }
  return count
}

/**
 The cable problem
 Implement algorithm 2 here
*/

function cable2(currentLength, requireLength, saleLength){
  let distance = requireLength - currentLength;
  let total = Math.round(distance/saleLength)
  return total
}

module.exports={cable1, cable2}