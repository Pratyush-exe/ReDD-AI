import Result from "./Result";

function Test() {
  const res = [
    {
      "COPD" : 97, 
      "Healthy" : 67,
      "URTI" : 2, 
      "Bronchiectasis" : 10, 
      "Pneumonia" : 11,
      "Bronchiolitis" : 7
    },
    {
      "COPD" : 0, 
      "Healthy" : 98,
      "URTI" : 2, 
      "Bronchiectasis" : 0, 
      "Pneumonia" : 1,
      "Bronchiolitis" : 2
    },
  ]

  return (
    <div className="Test">

      <Result data={res[0]} />

    </div>
  );
}
export default Test;