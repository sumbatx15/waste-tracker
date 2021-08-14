const uniqid = require("uniqid");

export const createCategory = ({
  name,
  icon = { prefix: "fab", iconName: "buffer" },
  color = "#339de8",
  match,
} = {}) => {
  return { id: uniqid("cat-"), name, icon, color, match };
};
export const getCategoryByMatcher = (categories, matcher) => {
  return categories.find((c) => c.matches.includes(matcher));
};

export const getLocalStorageStrSize = () => {
  const size = new TextEncoder().encode(JSON.stringify(localStorage)).length;
  const kiloBytes = size / 1024;
  const megaBytes = kiloBytes / 1024;
  return {
    kb: kiloBytes,
    affix: megaBytes >= 1 ? "MB" : "KB",
  };
};
export const Item = (item = {}) => {
  return {
    speechStr: "",
    id: "",
    cost: 0,
    amount: 1,
    name: "",
    categoryId: "",
    timestamp: new Date().getTime(),
    ...item,
  };
};
