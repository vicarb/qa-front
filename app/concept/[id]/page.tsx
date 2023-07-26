
import React from "react";



  const ConceptDetailPage = ({ params }) => {
  console.log("params", params);
  
  // Your component logic...
  return (
<>

    <ConceptDetail params={params}/>
</>
  );
};

export default ConceptDetailPage;