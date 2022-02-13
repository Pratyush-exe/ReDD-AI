import styled from "styled-components";

export const StyledCard = styled.div`
	cursor : pointer;

	.card-header{
		margin: 10px;
		margin-bottom: 0;
		padding: 15px;
		width: 70vw;
		border-radius: 1.5rem;

		background-color: ${props => (props.max === 'Healthy' ? `rgba(0,250,154,0.5)` : `rgba(255, 0 ,0, 0.8)`)};
	}

	.card-list{
		margin: 10px;
		margin-top: -25px;
		padding: 25px;
		padding-top: 35px;
		width: 70vw;
		border-radius: 0 0 1.5rem 1.5rem;

		background-color: ${props => (props.max === 'Healthy' ? `rgba(0,250,154,0.2)` : `rgba(255, 0 ,0, 0.2)`)};
	}

	.card-list-item{
		padding: 5px 0;
	}
`;