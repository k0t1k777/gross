import * as Yup from 'yup';
import {
  MINLENGTHNAME,
  NAMEREGEX,
  // PHONEREGEX,
  validationMessages,
} from 'src/shared/consts/constants';
const isValidDate = (dateString: string) => {
  // Регулярное выражение для формата даты (например, YYYY-MM-DD)
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  if (!datePattern.test(dateString)) {
    return false;
  }

  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

const validationSchemaAuthForms = Yup.object().shape({
  username: Yup.string()
    .min(MINLENGTHNAME, validationMessages.name_min)
    .matches(NAMEREGEX, validationMessages.name)
    .required(validationMessages.required),
  profession: Yup.string().required(validationMessages.required),
  userdate: Yup.string()
    .required(validationMessages.required)
    .test('is-valid-date', validationMessages.invalid_date, (value) => {
      if (!value) {
        return false;
      }
      return isValidDate(value);
    })
    .required(validationMessages.required),
  gender: Yup.string().required(validationMessages.required),

  // phone: Yup.string()
  //   .trim()
  //   .matches(PHONEREGEX, validationMessages.phone)
  //   .required(validationMessages.required),
  // email: Yup.string()
  //   .trim()
  //   .email(validationMessages.email)
  //   .required(validationMessages.required),
});

export { validationSchemaAuthForms };
