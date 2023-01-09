import React from "react";
// import reacticon from '../assets/reacticon.png'
import mindreader from '../assets/mindreader.png'
import weather from '../assets/weather.png'
import TicTacToe from '../assets/TicTacToe.png'
import { Link } from 'react-router-dom';




const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: mindreader,
      Demo:'https://naodmekonnen.github.io/mind-reader/',
      Code:'https://github.com/naodmekonnen/mind-reader',
    },
    {
      id: 2,
      src: weather,
      Demo:'https://naodmekonnen.github.io/Weather-App/',
      Code:'https://github.com/naodmekonnen/Weather-App',
    },
    {
      id: 3,
      src: TicTacToe,
      Demo:'https://naodmekonnen.github.io/tic-tac-toe/',
      Code:'https://github.com/naodmekonnen/tic-tac-toe',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, Demo, Code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a target="_blank" href={Demo}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                        type='button'>
                  Demo
                </button>
                </a>

                <a a target="_blank" href={Code}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                        type='button'
                >
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;



