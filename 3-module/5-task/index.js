function getMinMax(str) {
    let arrNum = ((str.split(' ')).filter(item => !isNaN(item))).map(item => Number(item));
  return {min: Math.min(...arrNum),
          max: Math.max(...arrNum)};  
}
