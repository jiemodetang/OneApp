import React, { Component } from 'react'
import { Header } from './styledOneheader'
import { Accordion, List } from 'antd-mobile';
import { connect } from 'react-redux'
import { loadOneHeadDataAsync } from '../../actionCreator'
import BScroll from 'better-scroll'
const mapState = (state) => {
    return {
        oneheaddata: state.one.oneheaddata,
    }
}
const mapDispatch = (dispatch) => {
    return {
        onehead() {
            dispatch(loadOneHeadDataAsync(dispatch))
        }
    }
}

class Oneheader extends Component {
    constructor(props) {
        super(props)
    }
    time(weather) {
        return (
            <h3>{weather.date && weather.date.slice(8, 10)}
                <span>Nov.{weather.date && weather.date.slice(0, 4)}</span> <b>&hearts;</b></h3>
        )
    }
    onChange = (key) => {
        setTimeout(() => {
            new BScroll(this.Scroll, { click: true })
        }, 0)
    }
    render() {
        // console.log(document.getElementById("#oneheadScroll"))
        // let oneheaddata = this.props.oneheaddata&& this.props
        // console.log(oneheaddata);
        // console.log(this.props)
        const weather = !!this.props.list.toString() ? this.props.list[this.props.index].weather : {}
        //  console.log(this.props.index)
        //  console.log(this.props.list)
        return (

            <Header >
                <Accordion className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header={this.time(weather)} className="pad" >
                        <List className="my-list">
                            <div id='oneheadScroll' ref={el => this.Scroll = el} style={{ height: window.innerHeight - 88 }}>
                                <ul style={{ width: window.innerWidth }}>
                                    {this.props.oneheaddata.map((value, index) => {
                                        return (
                                            <li className='headli' key={index}><img src={value.cover} alt="" />
                                                <p>{value.date}</p>
                                            </li>
                                        )
                                    })
                                    }

                                </ul>
                            </div>
                            {/* <div></div> */}
                        </List>
                    </Accordion.Panel>
                </Accordion>

                <div className='city'>{weather.city_name && weather.city_name}·
                    {weather.climate && weather.climate}
                    {weather.temperature && weather.temperature}℃</div>

            </Header>

        )
    }
    componentDidMount() {

        this.props.onehead()
        //        .log(this.Scroll.getElementById('oneheadScroll'))  

    }
    componentWillUpdate() {
        // console.log(this.props);

    }

}

export default connect(mapState, mapDispatch)(Oneheader)