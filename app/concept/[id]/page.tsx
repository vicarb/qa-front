
import React from "react";
import { ConceptDetail } from "@/components/ConceptDetail/ConceptDetail";


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