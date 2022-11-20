import { nanoid } from "nanoid";
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import * as yup from 'yup';
import { useMemo } from "react";
import Button from '@mui/material/Button';
import { signup } from "redux/auth/auth-operations";
import { NewContactForm, Input, Label, Error } from "shared/styles/Form.styled";

export default function RegisterForm() {

    const dispatch = useDispatch()

    const nameId = useMemo(()=> nanoid(), []);
    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const initialState = {
        name: "",
        email: "",
        password: "",
    }

    const schema = yup.object().shape({
        name: yup.string()
            .matches(/([A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14})|([А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14})/g, "Name must contain two words starting with capital letters and separated by a space")
            .required(),
        email: yup.string()
            .email()
            .required(),
        password: yup.string()
            .min(7, "Password must contain at least 7 characters")
            .required()
    });

    const handleSubmit = ({name, email, password}, {resetForm}) => {

        const newUser = {
        name,
        email,
        password
        }
        dispatch(signup(newUser))
        .unwrap()
        .then(() =>  resetForm())
    }
 
    return (
        <Formik initialValues={initialState} validationSchema={schema} onSubmit={handleSubmit} validateOnBlur={false}>
                {({errors, touched}) => (
                    <NewContactForm autoComplete='off'>
                        <Label htmlFor={nameId}>Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id={nameId}
                            placeholder= "Adrian Cross"
                            error={errors.name ? 1 : 0}
                            touched={touched.name ? 1 : 0}
                        />
                        <Error name="name" component="span"/>
                        <Label htmlFor={emailId}>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id={emailId}
                            placeholder="across@mail.com"
                            error={errors.email ? 1 : 0}
                            touched={touched.email ? 1 : 0}
                        />
                        <Error name="email" component="span"/>
                        <Label htmlFor={passwordId}>Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id={passwordId}
                            placeholder="*******"
                            error={errors.password ? 1 : 0}
                            touched={touched.password ? 1 : 0}
                        />
                        <Error name="password" component="span"/>
                        <Button variant="contained" type='submit'>Register</Button>
                    </NewContactForm>
                )}
            </Formik>
    )
}