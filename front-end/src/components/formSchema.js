import * as yup from 'yup'
 
const formSchema = yup.object().shape({
    username: yup.string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username must be at least 3 characters long'),
    password: yup.string()
        .trim()
        .required('Must enter a password!')
        .min(8, 'Password must be at least 8 characters long'),
   
    client: yup.boolean(),
    instructor: yup.boolean()
})
 
export default formSchema 