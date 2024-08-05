import React from 'react'
import Offer from '../components/Components/Offer/Offer'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Brands from '../components/Brands/Brands'
import NewCards from '../components/NewCards/NewCards'
import CardsLine from '../assets/svg/Cards-line.svg'
import TopSelling from '../components/TopCards/TopCards'
import DressStyle from '../components/DressStyles/DreesStyles'
import Comments from '../components/Comments/Comments'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Offer/>
      <Header/>
      <Banner/>
      <Brands/>
      <NewCards/>
      <img src={CardsLine} alt="" />
      <TopSelling/>
      <DressStyle/>
      <Comments/>
      <Footer/>
    </>
  )
}

export default Home