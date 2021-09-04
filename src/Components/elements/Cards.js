import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../css/Cards.css';
import CardItem from './Carditem';
import '../css/About.css'
import Home from '../pages/home';
function Cards() {




  return (
    <div className='cards'>
      <h1 className="serviços">Serviços</h1>
      <div className='cards__container'>
                    
             
               
      
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            className="card"
              src='https://www.topcable.com/wp-content/uploads/2020/12/TOP-CABLE-COAXIAL-DIGITAL-cobre.png'
              text='Fazemos a passagem e a colagem dos cabos coaxiais pela sua casa'
              label='Cabo Quaxial'
              path='/services'
              href="https://www.youtube.com/"
              target="_blank"
            />
            <CardItem
            className="card"
              src='https://jsl-online.com/wp-content/uploads/2019/09/FloorTrunkingImgTop.png'
              text='Fazemos a montagem de calhas Técnicas na sua casa'
              label='Calhas Técnicas'
              path='/services'
            />
            <CardItem
            className="card"
              src='https://pactech-inc.com/wp-content/uploads/2018/11/CAT5e-Cable-–-Sentinel®Plug-Snagless-with-Clear-Boot-Blue.jpg'
              text='Fazemos a passagem e a colagem dos cabos ethernet pela sua casa'
              label='Cabo Ethernet'
              path='/services'
            />
            <CardItem
            className="card"
              src='https://luxcleaning.ie/wp-content/uploads/2020/02/deep-house-cleaning_lux.jpg'
              text='Fazemos limpezar de interiores'
              label='Limpezas'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
            className="card"
              src='https://www.hydronorth.com.br/hydroresolve/wp-content/uploads/2020/06/shutterstock_751252354.png'
              text='Fazemos Pinturas em qualquer zona do seu domicilio'
              label='Pinturas'
              path='/services'
            />
            <CardItem
            className="card"
              src='https://mv-domicile.fr/wp-content/uploads/2018/09/barn-images-12223-unsplash-1920x1080.jpg'
              text='Fazemos a montagem dos objetos que pretender'
              label='Monstagem objetos'
              path='/services'
            />
            <CardItem
            className="card"
              src='https://cdn.mos.cms.futurecdn.net/BDbonseRd5NyXaoSQ6czL9.jpg'
              text='Montamos suportes de qualquer tipo de televisão'
              label='Suportes de Tv'
              path='/services'
            />
            <CardItem
            className="card"
              src='https://i1.wp.com/gutterup.org/wp-content/uploads/2017/12/Residential-Roof-Cleaning-West-Palm-Beach.jpg?fit=1920%2C1080'
              text='Fazemos Limpezas exteriores'
              label='Limpezas'
              path='/services'
            />
             
          </ul>
        </div>
      </div>
     
    </div>
  );
}

export default Cards;