import React, { Fragment } from 'react';

import './styles/Board.css';

const dummyThreads = [
  {
    title: 'durr hurr',
  },
  {
    title: 'yuhhhhhh',
  },
  {
    title: 'yuhhhhhh',
  },
  {
    title: 'yuhhhhhh',
  },
  {
    title: 'yuhhhhhh',
  },
  {
    title: 'yuhhhhhh',
  },
  {
    title: 'yuhhhhhh',
  },
  {
    title: 'yuhhhhhh',
  },
  {
    title: 'yuhhhhhh',
  },
  {
    title: 'yuhhhhhh',
  },
  {
    title: 'yuhhhhhh',
  },
  {
    title: 'yuhhhhhh',
  },
  {
    title: 'yuhhhhhh',
  },
];

const Board = () => (
  <div className="board-main">
    {
      dummyThreads.map(threadData => (
        <p>{threadData.title}</p>
      ))
    }
  </div>
);

export default Board;
