import React from 'react';
import { Link } from 'react-router-dom'

export default function Post({ p, loadEditForm }) {
  return (
    <div className="post">
      <h3>{`${p.title}`}</h3>
      <p>{`by ${p.author} on ${p.timestamp}`}</p>
      <p>{`category: ${p.category}`}</p>
      <p>{`scores: ${p.voteScore}`}</p>
      <p>{`${p.commentCount} comments`}</p>
      <p><em onClick={() => loadEditForm(true, false, p)}>Edit</em></p>
      <hr/>
    </div>
  );
}