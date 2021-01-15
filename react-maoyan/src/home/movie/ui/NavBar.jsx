import React from 'react';
import { NavBar } from 'antd-mobile';

const MovieNavBar = () => {
  return (
    <NavBar
      mode="dark"
      style={{ background: '#e54847' }}
      rightContent={[
        <span 
          key="0"
          className="iconfont icon-RectangleCopy" 
          style={{ fontSize: '30px' }}>
        </span>
      ]}
    >猫眼电影</NavBar>
  );
}

export default MovieNavBar;