import styled from "styled-components";

export const StyledCard = styled.div`
height: 100%;
	cursor : pointer;
	width: 30vw;
	min-width:350px;
	padding: 20px;
	.card-header{
		margin: 10px;
		padding: 20px;
		border-radius: 1.5rem;
		background-color: ${props => (props.max === 'Healthy' ? `rgba(0,250,154,0.5)` : `rgba(255, 0 ,0, 0.8)`)};
	}
	
	.backdrop{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card-details{
		background-color: rgba(255, 255, 255, 0.9);
		width: 800px;
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 20px;
		border-radius: 1.5rem;
	}

	.styled-table {
		border-collapse: collapse;
		margin: 25px 0;
		font-size: 1rem;
		min-width: 50%;
	}

	.styled-table thead tr {
    	background-color: ${props => (props.max === 'Healthy' ? `rgba(0,250,154,0.8)` : `rgba(255, 0 ,0, 0.8)`)};;
    	color: #ffffff;
    	text-align: left;
	}

	.styled-table th,
	.styled-table td {
    	padding: 12px 15px;
	}

	.styled-table tbody tr {
    	border-bottom: 1px solid #dddddd;
	}

	.styled-table tbody tr:nth-of-type(even) {
		background-color: #f3f3f3;
	}

	.styled-table tbody tr:last-of-type {
		border-bottom: 2px solid ${props => (props.max === 'Healthy' ? `rgba(0,250,154,0.5)` : `rgba(255, 0 ,0, 0.8)`)};;
	}
`;