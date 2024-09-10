// import * as Yup from 'yup';
// import {
//   MINLENGTHNAME,
//   MINLENGTPASSWORD,
//   MAX_LENGT_CONFIRM_CODE,
//   NAMEREGEX,
//   PHONEREGEX,
//   validationMessages,
//   CODEREGEX,
// } from 'src/shared/consts/constants';

// const validationSchemaAuthForms = Yup.object().shape({
//   username: Yup.string()
//     .min(MINLENGTHNAME, validationMessages.name_min)
//     .matches(NAMEREGEX, validationMessages.name)
//     .required(validationMessages.required),
//   phone: Yup.string()
//     .trim()
//     .matches(PHONEREGEX, validationMessages.phone)
//     .required(validationMessages.required),
//   email: Yup.string()
//     .trim()
//     .email(validationMessages.email)
//     .required(validationMessages.required),
//   password: Yup.string()
//     .min(MINLENGTPASSWORD, validationMessages.current_password)
//     .required(validationMessages.required),
//   confirmPass: Yup.string()
//     .oneOf([Yup.ref('password'), undefined], validationMessages.re_password) // проверка на совпадение с паролем
//     .required(validationMessages.required),
//   confirmСode: Yup.string()
//     .max(MAX_LENGT_CONFIRM_CODE, validationMessages.confirmation_code_max)
//     .matches(CODEREGEX, validationMessages.confirmation_code)
//     .required(validationMessages.required),
// });

// const validationSchemaSearch = Yup.object().shape({
//   search: Yup.string()
//     .matches(NAMEREGEX, validationMessages.search)
//     .required(validationMessages.required),
// });

// export { validationSchemaAuthForms, validationSchemaSearch };
