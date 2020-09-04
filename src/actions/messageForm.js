export const ON_SUBMIT = 'ON_SUBMIT';
export const ON_CHANGE = 'ON_CHANGE';

export const onSubmit = () => ({
  type: ON_SUBMIT,
});

export const onChange = (text) => ({
  type: ON_CHANGE,
  text,
});
