import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Top = ({currentUser}) => {
  return (
    <div>
      { currentUser ? <Redirect to='/memos' /> : undefined}
      <h1>Choimemo</h1>
      <p>ちょっとメモって即共有するメモサービス</p>
      <Link to='/login'>ログイン</Link>

      <h2>Features</h2>
      <ul>
        <li>markdown形式でメモを取れます</li>
        <li>共有リンクを作成して簡単に共有できます</li>
      </ul>
    </div>
  );
};

export default Top;