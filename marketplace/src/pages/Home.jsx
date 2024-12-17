import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <h1>Bem-vindo ao Marketplace de NFTs</h1>
        <p>Explore e compre os melhores NFTs do mercado.</p>
      </section>
    </div>
  );
};

export default Home;
