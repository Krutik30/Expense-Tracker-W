import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  Email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^(?=.{1,254}$)(?=.{1,64}@.{1,255}$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/,
      'Invalid email format'
    ),
 Password: yup.string()
  .required('Password is required')
  .min(8, 'Password must be exactly 8 characters')
  .max(8, 'Password must be exactly 8 characters')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
  ),
});

