import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { register } from '../../useSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import { useSnackbar } from 'notistack';

Register.propTypes = {
    
};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar} = useSnackbar();
    const handleSubmit = async (value) => {
        // console.log('Form Submit:', value);
       try{
        // value.username = value.email;

        const action = register(value);
        const resultAction = await dispatch(action);
        const user = unwrapResult(resultAction);
        // const resultAction = await dispatch(action);
        // const user = unwrapResult(resultAction);
        console.log('User', user);
        enqueueSnackbar('Register successfully!!!', {variant: 'success'});
      } catch (error) {
        //   console.log("Failed to register User", error);
          enqueueSnackbar('Failed to register User', {variant: 'error'});
      }
    };
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;