import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import InputField from '../../../../components/form-controls/InputField';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



ToDoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function ToDoForm(props) {
    const schema = yup.object().shape({
        title: yup.string().required('please enter title')
        .min(5,'title is too short'),
      });
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
       console.log('TODO FORM: ', values);
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default ToDoForm;