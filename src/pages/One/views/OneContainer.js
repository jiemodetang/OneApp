import React, { Component } from 'react'
import OneUi from './OneUi'
import { connect } from 'react-redux'
import {loadOneDataAsync} from '../actionCreator'

const mapState = (state) => {
    return {
      list: state.one.onelist,
      index:state.one.index
    }
  }
  
const mapDispatch = (dispatch) => {
    return {
      loadList (val) {
        dispatch(loadOneDataAsync(dispatch,val))
      }
    }
  }
class OneContainer extends Component{
    // constructor() {
    //     super()
    //   }
    render(){
        return(
            <OneUi {...this.props}></OneUi>
        )
    }
    componentDidMount(){
      this.props.loadList(22)
    }
    
}
export default connect(mapState,mapDispatch)(OneContainer)