import React from 'react';

function CheckBox(Props) {
  const { label, id, ...rest } = Props;
  return (
    <>
    <input
        className="text-sm accent-primary"
        id={id}
        {...rest}
    />
    <label htmlFor={id} className="text-sm text-gray-01 ml-6"
    >
       {label}
    </label>
    </>
  )
}

export default CheckBox