import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import React from "react";
import Nav from "../components/nav";

const Robots = (props) => {
   return (
      <div>
         <Head>
            <title>Robots</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Nav/>

         <div className='hero'>
            <h1 className='title'>Robots</h1>
            <p className='description'>
               Robots data page.
            </p>
            <div className='hero row'>
               {
                  props.robots.map(robot => {
                     return (
                        <a href={`robots/${robot.id}`} className='card'>
                           <img alt='robots' src={`https://robohash.org/${robot.name}?size=100x100`} />
                           <h3>{robot.name}</h3>
                           <p>{robot.email}</p>
                        </a>
                     );
                  })
               }
            </div>
         </div>

         <style jsx>{`
            .hero {
              width: 100%;
              color: #333;
            }
            .title {
              margin: 0;
              width: 100%;
              padding-top: 40px;
              line-height: 1.15;
              font-size: 48px;
            }
            .title,
            .description {
              text-align: center;
            }
            .row {
              max-width: 880px;
              margin: 80px auto 40px;
              display: flex;
              flex-flow: row wrap;
              justify-content: space-around;
              align-items: center;
            }
            .card {
              list-style: none;
              padding: 18px 18px 24px;
              width: 220px;
              text-align: center;
              text-decoration: none;
              color: #434343;
              border: 1px solid #9b9b9b;
              margin: 10px 5px;
            }
            .card:hover {
              border-color: #067df7;
            }
            .card h3 {
              margin: 0;
              color: #067df7;
              font-size: 18px;
            }
            .card p {
              margin: 0;
              padding: 12px 0 0;
              font-size: 13px;
              color: #333;
            }
            a {
                text-decoration: none
            }
         `}</style>

      </div>
   );
}

Robots.getInitialProps = async function() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const json = await response.json();
   return {
      robots: json
   }
}

export default Robots;