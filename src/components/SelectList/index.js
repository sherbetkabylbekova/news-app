import React from 'react';

const SelectList = ({name, values, errors, label}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select id={name} className="w-100 border-2 h-8 form-control">
                {
                    values.map(item =>
                        <option value={item}>{item}</option>
                    )
                }
            </select>
            {errors.name &&
            <span className="text-danger">Обязательное поле для заполнения!</span>}
        </>
    );
};

export default SelectList;