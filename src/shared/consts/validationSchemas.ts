import * as Yup from 'yup';
import {
  MINLENGTHNAME,
  NAMEREGEX,
  // PHONEREGEX,
  validationMessages,
} from 'src/shared/consts/constants';

const validationSchemaAuthForms = Yup.object().shape({
  username: Yup.string()
    .min(MINLENGTHNAME, validationMessages.name_min)
    .matches(NAMEREGEX, validationMessages.name)
    .required(validationMessages.required),
  profession: Yup.string().required(validationMessages.required),
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
