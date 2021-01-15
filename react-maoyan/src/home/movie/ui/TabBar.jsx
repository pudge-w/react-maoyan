import React, { Component } from 'react';
import { TarBarStyle } from '../styled.js';

import { NavLink } from 'react-router-dom';

class TabBar extends Component {
  state = {
    tarList: [
      {
        title: '热映',
        path: '/hot'
      },
      {
        title: '影院',
        path: '/cinema'
      },
      {
        title: '待映',
        path: '/wait'
      },
      {
        title: '经典电影',
        path: '/classic'
      }
    ]
  }

  render() {
    return (
      <TarBarStyle>
        <div className="city">
          <span style={{fontSize: '18px', marginRight: '10px'}}>南京</span>
          <span className="iconfont icon-ai-arrow-down"></span>
        </div>
        <ul>
          {
            this.state.tarList.map(item => {
              return (
                <li key={item.title}>
                  <NavLink to={ item.path }>
                    { item.title }
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <div className="icon">
          <span className="iconfont icon-fangdajing"></span>
        </div>
      </TarBarStyle>
    );
  }
}

export default TabBar;