import { getLocalStorageStrSize } from "@/utils";

export default {
  state: {
    localStorageSize: getLocalStorageStrSize(),
    showAddItemDialog: false
  },
  getters: {
    displayStorageSize: ({ localStorageSize: { kb, affix } }) => {
      return `${kb.toFixed(2)} ${affix}`;
    }
  },
  mutations: {
    setShowAddItemDialog(state, isOpen) {
      state.showAddItemDialog = isOpen;
    },
    updateLocalStorageSize(state) {
      // state.localStorageSize = getLocalStorageStrSize();
      // TODO: this repeats infinite times
    }
  }
};
