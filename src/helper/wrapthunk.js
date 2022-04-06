export const wrappedThunk = (fn) => {
  return async (body, option) => {
    const res = await fn(body, option).catch((err) => {
      if (!err.response) {
        return option.rejectWithValue(err);
      }

      return option.rejectWithValue(err.response.data);
    });

    return res;
  };
};
