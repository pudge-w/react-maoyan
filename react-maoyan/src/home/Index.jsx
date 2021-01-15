import React, { Component, lazy, Suspense } from 'react';

import { TabBar } from 'antd-mobile';

const Movie = lazy(() => import('./movie/Index'));
const Video = lazy(() => import('./video/Index'));
const Show = lazy(() => import('./show/Index'));
const Mine = lazy(() => import('./mine/Index'));

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
              title="电影"
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
              <Suspense fallback={<div>loading..</div>}>
                <Movie />
              </Suspense>
            </TabBar.Item>
            <TabBar.Item
              icon={<span className="iconfont icon-shipin"></span>}
              selectedIcon={<span className="iconfont icon-shipin"></span>}
              title="视频"
              key="video"
              selected={this.state.selectedTab === 'video'}
              onPress={() => {
                this.setState({
                  selectedTab: 'video',
                });
              }}
              data-seed="logId1"
            >
              <Suspense fallback={<div>loading..</div>}>
                <Video />
              </Suspense>
            </TabBar.Item>
            <TabBar.Item
              icon={<span className="iconfont icon-zhanlan"></span>}
              selectedIcon={<span className="iconfont icon-zhanlan"></span>}
              title="演出"
              key="show"
              selected={this.state.selectedTab === 'show'}
              onPress={() => {
                this.setState({
                  selectedTab: 'show',
                });
              }}
            >
              <Suspense fallback={<div>loading..</div>}>
                <Show />
              </Suspense>
            </TabBar.Item>
            <TabBar.Item
              icon={<span className="iconfont icon-wode2"></span>}
              selectedIcon={<span className="iconfont icon-wode2"></span>}
              title="我的"
              key="mine"
              selected={this.state.selectedTab === 'mine'}
              onPress={() => {
                this.setState({
                  selectedTab: 'mine',
                });
              }}
            >
              <Suspense fallback={<div>loading..</div>}>
                <Mine />
              </Suspense>
            </TabBar.Item>
          </TabBar>
        </div>
      </>
    );
  }
}

export default Index;