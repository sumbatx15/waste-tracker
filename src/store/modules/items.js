const uniqid = require("uniqid");
import { cloneDeep } from "lodash-es";
const mockItems = [
  {
    str: "קניתי מחשב חדש 400 שקל",
    cost: 400,
    amount: 1,
    name: "מחשב חדש",
    category: "סיגריות",
    timestamp: 1613113289783,
    id: "item-1kl23ygyh",
  },
  {
    str: "קניתי מחשב חדש 400 שקל",
    cost: 400,
    amount: 1,
    name: "מחשב חדש",
    category: "אוכל בחוץ",
    timestamp: 1613123289783,
    id: "item-1kl23y4yh",
  },
  {
    str: "קניתי עוד מחשב ב 400 שקל",
    cost: 400,
    amount: 1,
    name: "עוד מחשב",
    category: "בילוי",
    timestamp: 1613123829614,
    id: "item-1kl24a1xe",
  },
  {
    str: "קניתי מיקרופון 400 שקל",
    cost: 400,
    amount: 1,
    name: "מיקרופון",
    category: "חשבונות",
    timestamp: 1613134772945,
    id: "item-1kl2aslhz",
  },
  {
    str: "קניתי מיקרופון 400 שקל",
    cost: 400,
    amount: 1,
    name: "מיקרופון",
    category: "דלק",
    timestamp: 1613134779016,
    id: "item-1kl2asq3s",
  },
  {
    str: "קניתי מחשב 400 שקל",
    cost: 400,
    amount: 1,
    name: "מחשב",
    category: "כללי",
    timestamp: 1613134783811,
    id: "item-1kl2astv4",
  },
];
export default {
  state: {
    items: [],
    speechAnalyzedItem: null,
    range: {
      end_ts: 0,
      start_ts: 3613108914341,
    },
  },
  getters: {
    items: (state) => state.items,
    hasRangeItems: (state, getters) => Boolean(getters.rangeItems.length),
    speechAnalyzedItem: (state) => state.speechAnalyzedItem,
    rangeItems: (state) => {
      return state.items.filter(
        (i) =>
          i.timestamp >= state.range.end_ts &&
          i.timestamp <= state.range.start_ts
      );
    },
  },
  mutations: {
    addItem(state, { item, category }) {
      const clonedItem = cloneDeep(item);
      clonedItem.id = uniqid("item-");
      clonedItem.categoryId = category.id;
      state.items.push(clonedItem);
    },
    removeItem(state, id) {
      const index = state.items.findIndex((i) => i.id == id);
      state.items.splice(index, 1);
    },
  },
  actions: {
    addItem({ commit, dispatch }, { item, category }) {
      commit("addItem", { item, category });
      commit("addMatcher", { id: category.id, matcher: item.name });
      dispatch("setSpeechAnalyzedItem", null);
    },
    setSpeechAnalyzedItem({ state }, item) {
      state.speechAnalyzedItem = item;
    },
  },
};
