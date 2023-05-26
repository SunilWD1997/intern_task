import React from 'react';
import CompB from '../compB/CompB';


// This is  component A starts here
const CompA = () => {
  // Declared a variable cendol and assigned the value = 2 starts here
  const cendol = 2;
  // Declared a variable cendol and assigned the value = 2 ends here

  return (
    <>
      <CompB cendol={cendol}/>
    </>
  )
}
// This is  component A ends here
export default CompA