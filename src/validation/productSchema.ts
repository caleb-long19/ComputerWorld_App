import * as Yup from 'yup';

export const productSchema = Yup.object({
  product_code: Yup.string()
    .required('Product Code is required')
    .matches(/^[a-zA-Z-0-9]+$/, 'Product Code cannot contain special characters'),
  product_name: Yup.string()
    .required('Product Name is required')
    .matches(/^[a-zA-Z 0-9]+$/, 'Product Name Required: Must not contain special characters'),
  manufacturer_id: Yup.string()
    .required('Manufacturer ID is required')
    .matches(/^[0-9]*$/, 'Manufacturer ID Required:  Must not contain letters or special characters'),
  product_stock: Yup.string()
    .required('Please input the price of the order')
    .matches(/^[0-9]*$/, 'Product Stock Required:  Must not contain letters or special characters'),
  product_price: Yup.string()
    .required('Please input the price of the order')
    .matches(/^[0-9]*$/, 'Product Price Required:  Must not contain letters or special characters')
});