function camelize(str) {
  return str
  .split('-')
  .map(     
    (short, index) => index == 0 ? short : short[0].toUpperCase() + short.slice(1)
  )
  .join('');
}
