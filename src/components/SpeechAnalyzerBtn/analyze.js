const WORDS = "לי|היום|עכשיו|גם|אני|בבקשה";
const KEYWORDS = {
  ADD: `(?:(?:תוסיפי|תוסיף|${WORDS})(?:\\s))+`,
  PAID: `(?:(?:שילמתי|שלמתי|${WORDS})(?:\\s))+`,
  BOUGHT: `(?:(?:קניתי|${WORDS})(?:\\s))+`,
  ATE: `(?:(?:אכלתי|${WORDS})(?:\\s))+`,
  GAVE: "נתתי"
};
export const costReg = /(?:\s)(?:ב|שילמתי|נתתי|ב-)(?:\s?)(\d+)(?:\s?שקל|₪)*|(?:\s)(?:ב|שילמתי|נתתי|ב-)*(?:\s?)(\d+)(?:\s?שקל|₪)/;

export const getCost = str => {
  const numbersCount = getNumbersCount(str);
  const res = costReg.exec(str);
  const cost = res?.[1] || res?.[2];
  if (!cost && numbersCount == 1) {
    const number = getNumber(str);
    return {
      cost: number,
      match: number
    };
  } else if (!cost && numbersCount > 1) {
    return getCost(str.replace(/(?:\s?\d+\s\D+\s?)/, ""));
  }
  return {
    cost: Number(cost),
    match: res[0]
  };
};

export const getNumbersCount = str => {
  return str.match(/\d+/g)?.length;
};

const getFirstMatch = match => {
  return (match || [])[0];
};
const getItem = str => {
  return {
    amount: getNumber(str) || 1,
    name: str.replace(/\d+/, "").trim()
  };
};
const getNumber = str => {
  const number = str.match(/\d+/)?.[0] || 0;
  return Number(number);
};
export const removeCost = str => {
  return (costReg.test(str)
    ? str.replace(costReg, "")
    : str.replace(/\d+/g, "")
  ).trim();
};
const extract = ({ reg, str }) => {
  const numberCount = getNumbersCount(str);
  const startingIndex = str.search(reg);
  const trimmedStr = " " + str.substring(startingIndex);
  let cost = getCost(trimmedStr);
  const itemGroup = trimmedStr.replace(cost.match, "").replace(reg, "");
  console.log("itemGroup:", itemGroup);
  const item = getItem(itemGroup);
  return {
    str: str,
    cost: cost.cost,
    ...item
  };
};

export const analyze = str => {
  const numberCount = getNumbersCount(str);
  if (!numberCount) return;
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
