export default {
  state: {
    categories: [
      {
        id: "cat-1kldnozd7",
        name: "חשבונות",
        color: "#F26C4F",
        icon: { prefix: "fas", iconName: "file-invoice-dollar" },
        matches: ["חשבון חשמל", "ארנונה", "מים", "שכר דירה"]
      },
      {
        id: "cat-1kldnozd8",
        name: "סיגריות",
        color: "#9CC4E4",
        icon: { prefix: "fas", iconName: "smoking" },
        matches: ["סיגריות"]
      },
      {
        id: "cat-1kldnozd9",
        name: "דלק",
        color: "#F8BE00",
        icon: { prefix: "fas", iconName: "gas-pump" },
        matches: ["דלק"]
      },
      {
        id: "cat-1kldnozda",
        name: "אוכל בחוץ",
        color: "#FE4365",
        icon: { prefix: "fas", iconName: "hamburger" },
        matches: ["בוליס", "שווארמה", "ביביבי"]
      },
      {
        id: "cat-1kldnozdb",
        name: "כללי",
        color: "#2B2D30",
        icon: { prefix: "fab", iconName: "buffer" },
        matches: ["חשבון חשמל", "ארנונה", "מים", "שכר דירה"]
      },
      {
        id: "cat-1kldnozdc",
        name: "בילוי",
        color: "#BDEB07",
        icon: { prefix: "fas", iconName: "snowboarding" },
        matches: ["חשבון חשמל", "ארנונה", "מים", "שכר דירה"]
      }
    ]
  },
  getters: {
    categories: state => state.categories,
    categoryByMacther: state => itemName => {
      return state.categories.find(c => c.matches.includes(itemName));
    }
  },
  mutations: {
    addMatcher(state, { id, matcher }) {
      const category = state.categories.find(c => c.id == id);
      console.log("category:", category);
      if (!category) return;
      if (category.matches.includes(matcher)) return;
      category.matches?.push?.(matcher);
    },
    removeMatcher(state, { id, matcher }) {
      const category = state.categories.find(c => c.id == id);
      const index = category.matches.indexOf(matcher);
      category.matches.splice(index, 1);
    },
    addCategory(state, category) {
      state.categories.push(category);
    }
  },
  actions: {}
};
