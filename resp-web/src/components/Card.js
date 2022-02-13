import React, {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components';
import "../Styles/Card.css"

const StyledCard = styled.div`
height: 100%;
	cursor : pointer;
	width: 30vw;
	min-width:350px;
	padding: 20px;
	.card-header{
		margin: 10px;
		padding: 20px;
		background-color: ${props => (props.max === 'Healthy' ? `rgba(0,250,154,0.5)` : `rgba(255, 0 ,0, 0.7)`)};
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

	.styled-table {
		border-collapse: collapse;
		margin: 25px 0;
		font-size: 1rem;
		min-width: 50%;
	}

	.styled-table thead tr {
    	background-color: ${props => (props.max === 'Healthy' ? `rgba(0,250,154,0.8)` : `rgba(255, 0 ,0, 0.7)`)};;
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

const backdropVariant = {
	hidden : {
	  	opacity: 0,
	},
  
	visible : {
	  	opacity : 1,
	},
};
  
const modalVariant = {
	hidden : {
	 	x : "-100vw",
	  	opacity: 0,
	},
  
	visible : {
	  	x : 0,
	  	opacity: 1,
	  	transition: {delay: 0.25, type:"spring", bounce:0}
	}
}

function Card(data) {
    data = data.data.Result
	let result = data.result;
	let max = Object.keys(result).reduce((a, b) =>
	  result[a] > result[b] ? a : b
	);
  
	const [showList, setShowList] = useState(false);
  
	const toggleList = () => {
	  setShowList((prev) => !prev);
	};
  
	return (
	  <StyledCard onClick={toggleList} max={max}>
		<div className="card-header">
			<h1 className="card-header-title" id="card-title">{data.patientName}, {data.Age}</h1>

			<h1 className="card-header-title" id="card-status">
				Status : {max} - {result[max]}%{" "}
			</h1>
		</div>

		<AnimatePresence>
		{showList && (
			<motion.div className='backdrop'
				variants = {backdropVariant}
				initial = 'hidden'
				animate = 'visible'
				exit = 'hidden'
			>
				<motion.div variants={modalVariant} className="card-details" onClick={ e => e.stopPropagation()}>
					<h1 className="card-header-title">{data.patientName}, {data.Age}</h1>

					<table className='styled-table'>
						<thead>
							<tr>
								<th>What we tested</th>
								<th>Probability</th>
							</tr>
						</thead>

						<tbody>
							{Object.keys(result).map((key) => {
							return (
								<tr>
									<td>
										{key}
									</td>
									<td>
										{result[key]}%
									</td>
								</tr>
							)
							})
							}
						</tbody>
					</table>
				</motion.div>
			</motion.div>
		)}
		</AnimatePresence>
	  </StyledCard>
	);
};

export default Card;
// const Result = ({dataArray}) => {
// 	const dummyData = [
// 		{	
// 			id:1,
// 			patientName: "Name 1",
// 			Age: "24",
// 			Sex: "Male",
// 			updated: new Date(),
// 			result: {
// 				COPD: 94,
// 				Healthy: 20,
// 				URTI: 2,
// 				Bronchiectasis: 3,
// 				Pneumonia: 5,
// 				Bronchiolitis: 6
// 			},
// 		},
	
// 		{
// 			id:2,
// 			patientName: "Name 2",
// 			Age: "24",
// 			Sex: "Male",
// 			audioBlob: null,
// 			updated: new Date(),
// 			result: {
// 				COPD: 8,
// 				Healthy: 97,
// 				URTI: 2,
// 				Bronchiectasis: 3,
// 				Pneumonia: 5,
// 				Bronchiolitis: 6
// 			},
// 		},
	
// 		{
// 			id:3,
// 			patientName: "Name 3",
// 			Age: "24",
// 			Sex: "Male",
// 			audioBlob: null,
// 			updated: new Date(),
// 			result: {
// 				COPD: 0,
// 				Healthy: 100,
// 				URTI: 2,
// 				Bronchiectasis: 3,
// 				Pneumonia: 5,
// 				Bronchiolitis: 6
// 			},
// 		},
// 	];

// 	return (
// 	<div>
// 		{dummyData.map(data => { return <Card data={data}/>})}

// 		{/* Receive data array as prop
// 			dataArray.map(data => { return <Card data={data}/>})
// 		*/}
// 	</div>);
// }

// export default Result