import * as Yup from 'yup';

export const orderSchema = Yup.object({
  order_ref: Yup.string()
    .required('Order Reference is required')
    .matches(/^[a-zA-Z-0-9]+$/, 'Order Reference cannot contain special characters'),
  order_amount: Yup.string()
    .required('Order Amount is required')
    .matches(/^[0-9]*$/, 'Order Amount Required: Must not contain letters or special characters'),
  product_id: Yup.string()
    .required('Product ID is required')
    .matches(/^[0-9]*$/, 'Product ID Required:  Must not contain letters or special characters'),
});