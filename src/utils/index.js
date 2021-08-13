export const getLocalStorageStrSize = () => {
  const size = new TextEncoder().encode(JSON.stringify(localStorage)).length;
  const kiloBytes = size / 1024;
  const megaBytes = kiloBytes / 1024;
  return {
    kb: kiloBytes,
    affix: megaBytes >= 1 ? 'MB' : 'KB'
  };
};
