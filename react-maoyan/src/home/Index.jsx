import React, { Component } from 'react';

import Movie from './movie/Index';

import { TabBar } from 'antd-mobile';

class Index extends Component {
  state = {
    selectedTab: 'movie',
    fullScreen: true,
  };
  render() {
    return (
      <>
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#f03d37"
            barTintColor="white"
          >
            <TabBar.Item
              title="movie"
              key="movie"
              icon={<span className="iconfont icon-dianying"></span>}
              selectedIcon={<span className="iconfont icon-dianying"></span>}
              selected={this.state.selectedTab === 'movie'}
              onPress={() => {
                this.setState({
                  selectedTab: 'movie',
                });
              }}
              data-seed="logId"
            >
              <Movie />
            </TabBar.Item>
            <TabBar.Item
              icon={<span className="iconfont icon-shipin"></span>}
              selectedIcon={<span className="iconfont icon-shipin"></span>}
              title="video"
              key="video"
              selected={this.state.selectedTab === 'video'}
              onPress={() => {
                this.setState({
                  selectedTab: 'video',
                });
              }}
              data-seed="logId1"
            >
              <div>video</div>
            </TabBar.Item>
            <TabBar.Item
              icon={<span className="iconfont icon-zhanlan"></span>}
              selectedIcon={<span className="iconfont icon-zhanlan"></span>}
              title="show"
              key="show"
              selected={this.state.selectedTab === 'show'}
              onPress={() => {
                this.setState({
                  selectedTab: 'show',
                });
              }}
            >
              <div>show</div>
            </TabBar.Item>
            <TabBar.Item
              icon={<span className="iconfont icon-wode2"></span>}
              selectedIcon={<span className="iconfont icon-wode2"></span>}
              title="mine"
              key="mine"
              selected={this.state.selectedTab === 'mine'}
              onPress={() => {
                this.setState({
                  selectedTab: 'mine',
                });
              }}
            >
              <div>mine</div>
            </TabBar.Item>
          </TabBar>
        </div>
      </>
    );
  }
}

export default Index;