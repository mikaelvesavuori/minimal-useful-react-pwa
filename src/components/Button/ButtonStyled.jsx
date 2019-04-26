import styled from 'styled-components';

const ButtonStyled = styled.button`
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;

	width: 100%;
	display: block;
	height: 3rem;
	border: 0;
	border-radius: 0.5rem;

	&:hover {
		box-shadow: 0 0.5rem 1rem -0.5rem gray;
		transition: 0.2s;
	}

	&:disabled {
		cursor: not-allowed;
		border: 0;
		color: lightgray;
		background-color: red;
		transition: 0.2s;
	}
`;

export default ButtonStyled;
