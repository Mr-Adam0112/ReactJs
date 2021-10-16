import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';


InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { errors, formState } = form;
  // const hasError = formState.touchedFields[name];
  
  const hasError = formState.touchedFields[name] && formState.errors[name];
  // console.log(formState[name],formState.errors[name] );

  return (
    <Controller
    name={name}
      control={form.control}

      render = {({field}) => 
      <TextField 
            {...field}  
            // variant="outlined"
            margin="normal"
            fullWidth
            label={label}
      disabled={disabled}

      error={!!hasError}
      // helperText="lỗi rồi"
      helperText={formState.errors[name]?.message}
           
        />}
    />
    // <TextField  erro helperText='loi vui long nhap lai' ></TextField>
  );
}

export default InputField;
