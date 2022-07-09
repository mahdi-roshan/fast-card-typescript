const ValidatorPhone = (phone: any) => {
  let format = /^(\+98|0098|98|0)?9\d{9}$/;
  console.log(format.test(phone));
  if (format.test(phone)) {
    return true;
  } else {
    return false;
  }
};

export { ValidatorPhone };
