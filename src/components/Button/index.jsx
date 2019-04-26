import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyled from './ButtonStyled';

const Button = props => (
	<ButtonStyled {...props} onClick={e => props.onClick(e)} disabled={props.disabled}>
		{props.children}
	</ButtonStyled>
);

Button.propTypes = {
	children: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func
};

Button.defaultTypes = {
	disabled: false,
	onClick: () => null
};

export default Button;
