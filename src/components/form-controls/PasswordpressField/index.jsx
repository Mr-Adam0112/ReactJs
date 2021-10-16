import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormHelperText, makeStyles, TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

const useStyles = makeStyles((theme)=>({
    root:{},
    formPassword:{marginTop:'20px'},
}))

function PasswordField(props) {
    const classes = useStyles();
  const { form, name, label, disabled } = props;
  const { errors, formState } = form;
  // const hasError = formState.touchedFields[name];
  const hasError = formState.touchedFields[name] && formState.errors[name];
  console.log(formState[name],formState.errors[name] );

const [showPassword, setShowPassword] = useState(false);
const toggleShowPassword = ()=>{
    setShowPassword(x=> !x);
}

  return (
      <>
    <FormControl error={!!hasError} className={classes.formPassword}  margin="normal" fullWidth variant="outlined">
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <Controller
          control={form.control}
          name={name}
          render = {({field}) => 
          <OutlinedInput 
                {...field}  
                variant="outlined"
               
                fullWidth
                id={name}
            type={showPassword ? 'text' : 'password'}
                label={label}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                //   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            disabled={disabled}
            // error={!!hasError}
            // helperText={formState.errors[name]?.message}
            />}
          />
            <FormHelperText>{formState.errors[name]?.message}</FormHelperText>
        </FormControl>
    </>

    // <TextField  erro helperText='loi vui long nhap lai' ></TextField>
  );
}

export default PasswordField;
