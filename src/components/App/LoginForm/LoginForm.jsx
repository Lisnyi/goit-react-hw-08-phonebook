import { useMemo } from "react";
import { nanoid } from "nanoid";
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NewContactForm, Input, Label, Error } from "shared/styles/Form.styled";
import { login } from "redux/auth/auth-operations";
import Button from '@mui/material/Button';


export default function LoginForm () {

    const dispatch = useDispatch()

    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const initialState = {
        email: "",
        password: "",
    }

    const schema = yup.object().shape({
        email: yup.string()
            .email()
            .required(),
        password: yup.string()
            .min(7, "Password must contain at least 7 characters")
            .required()
    });

    const handleSubmit = ({email, password}, {resetForm}) => {
        const user = {
            email,
            password
        }
        try {
            dispatch(login(user))
            Notify.success(`successfully login`)
        } catch (e) {
            Notify.error(` error`)
        }
        resetForm()
    }
 
    return (
        <Formik initialValues={initialState} validationSchema={schema} onSubmit={handleSubmit} validateOnBlur={false}>
                {({errors, touched}) => (
                    <NewContactForm autoComplete='on'>
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
                        <Button variant="contained" type='submit'>Login</Button>
                    </NewContactForm>
                )}
            </Formik>
    )
}
