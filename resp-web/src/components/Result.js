import React from 'react';

const Result = ({data}) => {
  const max = Object.keys(data).reduce((a, b) => data[a] > data[b] ? a : b);

  return (<div>
	<h1>{max} -- {data[max]}% </h1>

    {
        Object.keys(data).map(key => {
            if(key != max){
                return (<p>{key} -- {data[key]}%</p>)
            }
        })
    }

  </div>);
};

export default Result;
