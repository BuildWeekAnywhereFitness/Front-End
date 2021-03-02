import * as yup from 'yup'
 
const formSchema = yup.object().shape({
    username: yup.string()
        .required('Username is required!')
        .min(3, 'Username must be at least 3 characters long'),
    password: yup.string()
        .required('Must enter a password!')
        .min(8, 'Password must be at least 8 characters long'),
   
    user: yup.string()
    .oneOf(['client', 'instructor'], "click a button")
})
 
export default formSchema 