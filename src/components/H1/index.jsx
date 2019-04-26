import React from 'react';
import PropTypes from 'prop-types';

import H1Styled from './H1Styled';

const H1 = props => <H1Styled {...props}>{props.children}</H1Styled>;

H1.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node])
};

export default H1;
