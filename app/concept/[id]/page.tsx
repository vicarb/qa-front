
import React from "react";
import { ConceptDetail } from "@/components/ConceptDetail/ConceptDetail";
import { Params } from "@/interfaces/Params/Params";
import { Concept } from "@/interfaces/Concept/Concept";
import axios from "axios";
async function getConceptDetailData(id) {
  const response = await axios.get(`https://my-service5-52m34p25ra-uk.a.run.app/api/data`);
  const data: Concept[] = response.data;
  return data.filter((item) => item.category === id);
}

export default async function ConceptDetailPage({ params }: { params: Params }) {
  console.log("params from page", params);
  const concepts = await getConceptDetailData(params.id);
  
  // Your component logic...
  return (
<>

  <ConceptDetail concepts={concepts} params={params} />
</>
  );
};

