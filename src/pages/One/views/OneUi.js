import React, { Component } from 'react'
//引入样式
import Oneheader from './oneheader/oneheader'
import Onelist  from './onelist/onelist'
import {OneContainerStyle} from './styledComponents'
class OneUi extends Component{
    render(){
        return(
            <OneContainerStyle>
               <Oneheader  {...this.props} >
               </Oneheader>
               <Onelist {...this.props} Touchchange={this.Touchchange.bind(this)}></Onelist>
            </OneContainerStyle>
        )
    }
    componentWillReceiveProps(props){
        // console.log(props)
    }
    Touchchange(e){
    }
    // shouldComponentUpdate(){
    //     console.log(this.props)
    // }
}
export default OneUi