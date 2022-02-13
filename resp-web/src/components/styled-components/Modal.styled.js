import styled from "styled-components";

export const StyledModal = styled.div`
	position: fixed;
  	left: 0;
  	right: 0;
  	top: 0;
  	bottom: 0;
  	background-color: rgba(0, 0, 0, 0.5);
  	display: flex;
  	align-items: center;
  	justify-content: center;

	.modal-content{
		min-width: 500px;
		min-height: 70vh;
		background-color: whitesmoke;
		backdrop-filter: blur(2rem);
		border-radius: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index=3;
		position: relation;
	}

	.modal-body{
		padding: 10px;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		border-radius: 50%;
	}

	.modal-footer{
  		padding: 25px;
	}
`