import * as Yup from 'yup';
import {
  DATEREGEX,
  MINLENGTHNAME,
  NAMEREGEX,
  PHONEREGEX,
  validationMessages,
} from 'src/shared/consts/constants';

const isValidDate = (dateString: string) => {
  if (!DATEREGEX.test(dateString)) {
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
  gender: Yup.string(),
  userphone: Yup.string()
    .trim()
    .matches(PHONEREGEX, validationMessages.phone)
    .required(validationMessages.required),
  useremail: Yup.string()
    .trim()
    .min(MINLENGTHNAME, validationMessages.name_min)
    .email(validationMessages.email),
  textarea: Yup.string(),
});

export { validationSchemaAuthForms };


// .nullable()