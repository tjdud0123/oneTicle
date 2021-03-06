import ApiConfig from './_config';

const getHistoriesApi = async () => {
  try {
    const { data } = await ApiConfig.get(`/history`);
    console.log('[SUCCESS] getAllHistories', data);
    return data;
  } catch (e) {
    console.log('[FAIL] getAllHistories', e);
  }
};

export { getHistoriesApi };
