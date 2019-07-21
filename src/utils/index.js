export const VALIDATE_FIELDS = fieldsArray => {
  const validationObject = {};

  Object.keys(fieldsArray).map(key => {
    const singleField = fieldsArray[key];
    const k = Object.keys(singleField);
    const keyName = k[0];
    const keyValue = singleField[keyName];
    validationObject[keyName] =
      keyValue.length > 0 || (typeof keyValue === "number" && keyValue > 0);
  });

  return validationObject;
};

export const VALIDATE_SIGNUP_FIELDS = (email, password, name) => {
  return {
    email: email.length > 0,
    password: password.length > 0,
    name: name.length > 0
  };
};

export const sayMyName = name => {
  return `my name is ${name}`;
};

export const MULT_NUMBER = number => {
  return `${number * 7}`;
};

export const SET_USER = (uuid, name, email, photo) => {
  // SET LOCAL STORAGE HERE...
  window.localStorage.setItem("userID", userId);

  const userId = window.localStorage.getItem("CAMPSITE_uuid");

  if (!userId) return false;

  const user = {
    userId
  };

  return user;
};
