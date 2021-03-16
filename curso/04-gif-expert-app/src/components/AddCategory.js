import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const handleOnChange = e => {
		setInputValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (inputValue && inputValue.trim().length > 0) {
			setCategory(categories => [inputValue, ...categories]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" max={50} value={inputValue} onChange={handleOnChange}></input>
		</form>
	);
};

AddCategory.propTypes = {
	setCategory: PropTypes.func.isRequired
};
