import React, { Fragment } from 'react';

import '../styles/Board.css';

const posts = [
  {
    title: 'Testan',
  },
  {
    title: 'Testannn',
  },
  {
    title: 'Testannn?!?!',
  },
]

const Board = () => (
  <div className='board-main'>
    {
      posts.map(post => (
        <p>{post.title}</p>
      ))
    }
  </div>
);

export default Board;
