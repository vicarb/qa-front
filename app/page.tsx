import Landing from '@/components/Landing/Landing'
import Image from 'next/image'
import SecLanding from '@/components/SecLanding/SecLanding'
import LandingPage from '@/components/LandingPage/LandingPage'
import logger from '../lib/logger';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  logger.debug('Rendering HomePage');
  
  return (
    <>


    <LandingPage/>
    <Footer/>
    </>  )
}
