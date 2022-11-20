import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";

import * as api from '../../shared/api/api';

export const signup = createAsyncThunk(
    "auth/signup",
    async(data, { rejectWithValue }) => {
        try {
            const result = await api.signup(data);
            Notify.success(`User ${result.user.name} is successfully registered`)
            return result;
        } catch({response}) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            Notify.failure(`Error: ${error.message}`)
            return rejectWithValue(error);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async(data, { rejectWithValue }) => {
        try {
            const result = await api.login(data);
            Notify.success(`User ${result.user.name} is successfully logged in`)
            return result;
        } catch({response}) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            Notify.failure(`No user found`)
            return rejectWithValue(error);
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async(_, { rejectWithValue }) => {
        try {
            const result = await api.logout();
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            Notify.failure(`Oops, something went wrong`)
            return rejectWithValue(error);
        }
    }
)

export const current = createAsyncThunk(
    "auth/current",
    async(_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const result = await api.getCurrentUser(auth.token);
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error);
        }
    }
)