export const getDefaultValues = (formKey = "", formData = {}) => {
  if (formData[formKey]) {
    return { ...formData[formKey] };
  }
  return {};
};
