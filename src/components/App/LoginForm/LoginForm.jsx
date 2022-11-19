import { useMemo } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types'
import useForm from "shared/hooks/useForm";
import initialState from "./initiallState";
import fields from "./fields";

export default function LoginForm ({onSubmit}) {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const {email, password} = state;

    return (
        <form onSubmit={handleSubmit}>
            <input id={emailId} value={email} onChange={handleChange} {...fields.email} />
            <input id={passwordId} value={password} onChange={handleChange} {...fields.password} />
            <button>Login</button>
        </form>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}