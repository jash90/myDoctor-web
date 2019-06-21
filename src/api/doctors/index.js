const getDoctors = (offset = 0) => {
  return this.$api.get(`/doctors/${offset}`);
}

export { getDoctors };