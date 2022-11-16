import { nanoid } from "nanoid";
import { useMemo } from "react";
import useForm from "shared/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";

export default function RegisterForm({onSubmit}) {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const nameId = useMemo(()=> nanoid(), []);
    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const {name, email, password} = state;
 
    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <input id={nameId} value={name} onChange={handleChange} {...fields.name} />
            <input id={emailId} value={email} onChange={handleChange} {...fields.email} />
            <input id={passwordId} value={password} onChange={handleChange} {...fields.password} />
            <button>Register</button>
        </form>
    )
}
