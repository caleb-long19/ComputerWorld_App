import * as Yup from 'yup';

// Validation schema for manufacturer name
export const manufacturerSchema = Yup.object({
  manufacturer_name: Yup.string()
    .required('Manufacturer Name is required')
    .matches(/^[a-zA-Z\s]+$/, 'Manufacturer Name cannot contain numbers or special characters'),
});