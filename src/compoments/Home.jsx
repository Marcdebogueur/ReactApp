import React from 'react';
import "./Home.css";
import Cartform from './Cartform';

const Home = () => {
  return (
    <div>
        <div className="home_header">
            <div className="data">
                <div className="header_container">
                    <h1>Hair</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum beatae ad qui, quos laboriosam adipisci vitae aliquid quas libero, quibusdam, minima reprehenderit officiis eligendi dolorum eum? Necessitatibus, ut eius!
                    </p>
                    <button className='Shampoobtn'>shop shampoo</button>
                </div>
            </div>
        </div>
        <Cartform/>
    </div>
  )
}

export default Home