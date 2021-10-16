import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import InputField from '../../../../components/form-controls/InputField';
import { makeStyles } from '@material-ui/core/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import PasswordField from '../../../../components/form-controls/PasswordpressField';
import { yellow } from '@material-ui/core/colors';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: '0px 20px',
  },
  avarta: {
    margin: '0px auto',
  },
  title: {},
  submit: {
    backgroundColor: '#3f51b5',
    color: '#fff',
    width: '100%',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
  },
  loading: {
    width: '100%',

  },
}));

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name')
      .test('should has at least two words', 'please enter least two word.', (values) => {
        console.log('fullname', values);
        return values.split(' ').length >= 2;
      }),
    email: yup.string().required('Please enter your mail').email('please enter a valid email! '),
    password: yup.string().required('Please enter your password').min(6, 'please enter at least 6 characters'),
    retypePassword: yup
      .string()
      .required('Please retype your password')
      .oneOf([yup.ref('password')], 'Password doesn not match'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit(values)) {
      await onSubmit(values);
    }
    form.reset();
  };

  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {/* {isSubmitting && <LinearProgress color="secondary" />} */}
      <div className={classes.loading}>
        <LinearProgress color="secondary" />
      </div>

      <Avatar className={classes.avarta}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography className={classes.title} component="h1" variant="h5">
        Sign up
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />
        <Button disabled={isSubmitting} type="submit" color="primary" className={classes.submit}>
          Create an accoun
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
