const collapsecornodeAmount = (amount) => {
  if (!Number.isInteger(amount)) {
    return '';
  }

  /*
    1 Kcornode = 10³ cornode = 1,000 cornode
    1 Mcornode = 10⁶ cornode = 1,000,000 cornode
    1 Gcornode = 10⁹ cornode = 1,000,000,000 cornode
    1 Tcornode = 10¹² cornode = 1,000,000,000,000 cornode
    1 Pcornode = 10¹⁵ cornode = 1,000,000,000,000,000 cornode
    */
  const units = ['', 'K', 'M', 'G', 'T', 'P'];

  let amountString = amount + '';
  let unitIndex = 0;
  while (unitIndex < 6 && amountString.slice(-3) === '000') {
    unitIndex++;
    amountString = amountString.slice(0, -3);
  }
  return `${amountString}${units[unitIndex]}`;
};

module.exports = {
  collapsecornodeAmount
};
