import styled from "styled-components";

export const StyledNavbar = styled.nav`
	width: 100vw;
	height: 75px;
	background-color: #000b76;
	padding: 0 10px;
	padding-top: 50px;
	color: white;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;

	ul {
		display: flex;
		list-style-type: none;
		padding-bottom: 20px;
	}

	ul > * {
		padding: 0 10px;
		padding-right: 40px;
	}
`;