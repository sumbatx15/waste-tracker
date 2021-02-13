const getSize = () => {
    const size = new TextEncoder().encode(JSON.stringify(localStorage)).length
    const kiloBytes = size / 1024;
    const megaBytes = kiloBytes / 1024;
    return {
        kb: kiloBytes,
        affix: megaBytes >= 1 ? 'MB' : 'KB'
    }
}
export default {
    state: {
        localStorageSize: getSize()
    },
    getters: {
        displayStorageSize: ({ localStorageSize: { kb, affix } }) => {
            return `${kb.toFixed(2)} ${affix}`;
        }
    },
    actions: {
        updateSocalStorageSize(state) {
            state.localStorageSize = getSize();
        }
    },
};