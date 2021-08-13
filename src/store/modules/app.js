import { getLocalStorageStrSize } from '@/utils';

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
  actions: {
    setShowItemDialog(state, isOpen) {
      state.setShowItemDialog = isOpen;
    },
    updateSocalStorageSize(state) {
      state.localStorageSize = getLocalStorageStrSize();
    }
  }
};
