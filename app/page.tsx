import Landing from '@/components/Landing/Landing'
import Image from 'next/image'
import SecLanding from '@/components/SecLanding/SecLanding'
import LandingPage from '@/components/LandingPage/LandingPage'

import logger from '../lib/logger';
import Footer from '@/components/Footer/Footer';
import RecentQuestionsSidebar from '@/components/RecentQuestionsSidebar/RecentQuestionsSidebar';

async function getConceptsData() {
  const res = await fetch("https://my-service5-52m34p25ra-uk.a.run.app/api/data");

  if (!res.ok) {
    throw new Error("Failed to fetch concepts data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getConceptsData();
  logger.debug('Rendering HomePage');

  
  return (
    <>


    <LandingPage data={data} />
    <RecentQuestionsSidebar/>

    </>  )
}
