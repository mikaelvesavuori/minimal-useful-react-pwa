import React from 'react';
import PropTypes from 'prop-types';

import ParagraphStyled from './ParagraphStyled';

const Paragraph = props => <ParagraphStyled {...props}>{props.children}</ParagraphStyled>;

Paragraph.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.array.isRequired])
};

export default Paragraph;
