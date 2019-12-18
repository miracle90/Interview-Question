function formatNum(num) {
  // (num.toFixed(2) + '') 保留两位小数
  return num && num.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
}

console.log(formatNum(-123456789.123456))
