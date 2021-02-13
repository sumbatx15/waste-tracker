const WORDS = "לי|היום|עכשיו|גם|אני|בבקשה";
const KEYWORDS = {
  ADD: `(?:(?:תוסיפי|תוסיף|${WORDS})(?:\\s))+`,
  PAID: `(?:(?:שילמתי|שלמתי|${WORDS})(?:\\s))+`,
  BOUGHT: `(?:(?:קניתי|${WORDS})(?:\\s))+`,
  ATE: `(?:(?:אכלתי|${WORDS})(?:\\s))+`,
  GAVE: "נתתי",
};
export const costReg = /(?:ב|שילמתי|נתתי|ב-)(?:\s?)(\d+)(?:\s?שקל|₪)*|(?:ב|שילמתי|נתתי|ב-)*(?:\s?)(\d+)(?:\s?שקל|₪)/;

export const getCost = (str) => {
  const numbersCount = getNumbersCount(str)
  const res = costReg.exec(str)
  const cost = res?.[1] || res?.[2]
  if (!cost) {
    if (numbersCount == 1) return getNumber(str)
    return getCost(str.replace(/(?:\s?\d+\s\D+\s?)/, ''))
  }
  return Number(cost)
};

export const getNumbersCount = (str) => {
  return str.match(/\d+/g)?.length
}

const getFirstMatch = (match) => {
  return (match || [])[0];
};
const getItem = (str) => {
  return {
    amount: getNumber(str) || 1,
    name: str.replace(/\d+/, '').trim(),
  };
};
const getNumber = str => {
  const number = str.match(/\d+/)?.[0] || 0;
  return Number(number)
}
export const removeCost = str => {
  return (costReg.test(str)
    ? str.replace(costReg, '')
    : str.replace(/\d+/g, '')).trim()
}
const extract = ({ reg, str }) => {
  const numberCount = getNumbersCount(str)
  const startingIndex = str.search(reg);
  const trimmedStr = str.substring(startingIndex);
  const clearStr = trimmedStr.replace(reg, "");
  let cost = getCost(clearStr);
  let itemGroup = clearStr.replace(costReg, '').replace(cost, '')
  const item = getItem(itemGroup)
  return {
    str: str,
    cost,
    item: item.name,
    amount: item.amount
  }
};

export const analyze = (str) => {
  const numberCount = getNumbersCount(str)
  if (!numberCount) return
  const regEntries = Object.entries(KEYWORDS);
  const regs = regEntries
    .map(([_, value]) => {
      const reg = new RegExp(value);
      return { reg, match: reg.exec(str) || [""] };
    })
    .sort((a, b) => {
      return b.match[0].length - a.match[0].length;
    });
  return extract({ reg: regs[0].reg, str });
};