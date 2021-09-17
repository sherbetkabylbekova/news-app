import React from 'react';

const FormInput = ({name,register,errors,required,}) => {
    return (
        <>
            <label htmlFor="name">{name}</label>
            <input type="text" className="w-100 border-2 h-8 form-control"
                   {...register(name, {required})}/>
            {errors.name &&
            <span className="text-danger">Обязательное поле для заполнения!</span>}
        </>
    );
};

export default FormInput;