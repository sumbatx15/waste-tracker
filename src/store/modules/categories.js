const createCategory = ({ name, icon, color, match } = {}) => {
  return { name, icon, color, match };
};
export default {
  state: {
    categories: [
      {
        name: 'חשבונות',
        color: '#F26C4F',
        icon: {
          prefix: 'fas',
          name: 'file-invoice-dollar'
        }
      },
      {
        name: 'סיגריות',
        color: '#9CC4E4',
        icon: {
          prefix: 'fas',
          name: 'smoking'
        }
      },
      {
        name: 'דלק',
        color: '#F8BE00',
        icon: {
          prefix: 'fas',
          name: 'gas-pump'
        }
      },
      {
        name: 'אוכל בחוץ',
        color: '#FE4365',
        icon: {
          prefix: 'fas',
          name: 'hamburger'
        }
      },
      {
        name: 'כללי',
        color: '#2B2D30',
        icon: {
          prefix: 'fab',
          name: 'buffer'
        }
      },
      {
        name: 'בילוי',
        color: '#BDEB07',
        icon: {
          prefix: 'fas',
          name: 'snowboarding'
        }
      }
    ]
  },
  getters: {
    categories: state => state.categories
  },
  mutations: {
    addCategory(state, category) {
      category =
        typeof category == 'string'
          ? createCategory({ name: category })
          : category;

      if (state.categories.find(c => c.name == category.name)) return;
      state.categories.push(category);
    }
  },
  actions: {
    updateValue({ commit }, payload) {
      commit('updateValue', payload);
    }
  }
};
