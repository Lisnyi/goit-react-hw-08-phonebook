import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Formik } from 'formik';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { NewContactForm, Input, Label, Error } from "shared/styles/Form.styled";
import { login } from "redux/auth/auth-operations";

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
        
        dispatch(login(user))
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
