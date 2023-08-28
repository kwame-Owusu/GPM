"use client";
import Head from 'next/head'
import Hero from '../../components/Hero';
import Navbar  from '../../components/Navbar';
import Section from '../../components/section';
import Slider from '../../components/Slider';
import { SliderData } from '../../components/SliderData';
import Socials from '../../components/Socials';
import Location from '../../components/Location';
import Work from '../../components/Work';






export default function Home() {
  return (
    
    <div>
      <Head>
      
      
       
        <title>GPM</title>
        <meta name='description' content='GPM studios website'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" sizes="any" href="/favicon.ico"/>
        <link rel="icon" type="image/x-icon" sizes="any" href="/favicon.ico"/>
        <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css"
       />

      </Head>
      <>
       <Navbar />
      </>
     
      <Hero heading="GPM" message="Photography company based in Accra, Ghana." />
      
      

      <Work />
 
      <Slider slides={SliderData}/>
      <hr />
      <Location />
      <hr />
      <Socials />

      
      
    </div>
    
    
    
  )
}
