import React, { Component } from 'react';

import TopRated from './ui/TopRated';

import { connect } from 'react-redux';
import { getRatedListAsync } from './actionCreate';

const mapStateToProps = state => {
  return {
    // ratedList: state.ratedList
    // ratedList: state.get('ratedList')
    ratedList: state.getIn(['hotReducer', 'ratedList'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData() {
      dispatch(getRatedListAsync())
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Index extends Component {

  render() {
    return (
      <div>
        <TopRated ratedList={this.props.ratedList}/>
      </div>
    );
  }

  componentDidMount() {
    this.props.getData()
  }
}

export default Index;