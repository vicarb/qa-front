
import React from "react";
import { ConceptDetail } from "@/components/ConceptDetail/ConceptDetail";
import { Params } from "@/interfaces/Params/Params";

  const ConceptDetailPage = ({ params }: { params: Params }) => {
  console.log("params", params);
  
  // Your component logic...
  return (
<>

    <ConceptDetail params={params}/>
</>
  );
};

export default ConceptDetailPage;