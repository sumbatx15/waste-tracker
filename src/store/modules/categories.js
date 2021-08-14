const uniqid = require("uniqid");

const createCategory = ({
  name,
  icon = { prefix: "fab", iconName: "buffer" },
  color = "#339de8",
  matches = []
} = {}) => {
  return { id: uniqid("cat-"), name, icon, color, matches };
};

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
        matches: ["חשבון חשמל", "ארנונה", "מים", "שכר דירה"]
      },
      {
        id: "cat-1kldnozd9",
        name: "דלק",
        color: "#F8BE00",
        icon: { prefix: "fas", iconName: "gas-pump" },
        matches: ["חשבון חשמל", "ארנונה", "מים", "שכר דירה"]
      },
      {
        id: "cat-1kldnozda",
        name: "אוכל בחוץ",
        color: "#FE4365",
        icon: { prefix: "fas", iconName: "hamburger" },
        matches: ["חשבון חשמל", "ארנונה", "מים", "שכר דירה"]
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
    categories: state => state.categories
  },
  mutations: {
    addMatcher(state, { id, matcher }) {
      const cat = state.categories.find(c => c.id == id);
      cat.matches?.push?.(matcher);
    },
    removeMatcher(state, { id, matcher }) {
      const cat = state.categories.find(c => c.id == id);
      const index = cat.matches.indexOf(matcher);
      cat.matches.splice(index, 1);
    },

    addCategory(state, categoryName) {
      const category = createCategory({ name: categoryName });
      state.categories.push(category);
      return category;
    }
  },
  actions: {}
};
