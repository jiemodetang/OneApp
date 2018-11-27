import React, { Component, Fragment } from 'react'
import { ListOne, ListBar, ListOneC, ListOneZ, OneList, VOL, Lastlist } from './styledlist'
import { Toast } from 'antd-mobile';
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import { connect } from 'react-redux'
import { loadOneDataAsync } from '../../actionCreator'

const mapDispatch = (dispatch) => {
    return {
        loadList(val,index) {
            dispatch(loadOneDataAsync(dispatch, val,index))
        }
    }
}
class Onelist extends Component {
    constructor() {
        super()
        this.state = {
            spanChangeImg: true
        }
    }
    LastListbar(value, index) {

        if (value.category === '4') {


            return (
                <div>
                    <span>—音乐—</span>
                    <span className='ztitle'>{value.title}</span>
                    <div className="zzoom">文/{value.author.user_name}</div>
                    <p className='musicImg'>
                        <img src={value.img_url} alt="" />
                    </p>
                    <h5>{value.forward}</h5>
                </div>)

        } else {
            return (
                <div>
                    <span>—{value.tag_list[0] ? value.tag_list[0].title : '问答'}—</span>
                    <span className="ztitle">{value.title}</span>
                    <div className="zzoom">文/{value.author.user_name}</div>
                    <p>
                        <img src={value.img_url} alt="" />
                    </p>
                    <h5>{value.forward}</h5>
                </div>)
        }
    }
    render() {
        // console.log(this.props.list)
        // let contentList = this.props.list.content_list ? this.props.list.content_list[0] : []
        // let btlist = this.props.list.content_list ? this.props.list.content_list.slice(1) : []
        // let vol = this.props.list.menu ? this.props.list.menu : {}
        return (
    
            <Fragment>

                <div className="swiper-container" style={{height:"100%"}}>

                    <div className="swiper-wrapper" style={{ width: "100%", display: 'flex' ,height:'100%'}}>

                        {
                            this.props.list.map((value, index) => {
                                // console.log(value);

                                return (
                                    <div className="swiper-slide" key={index}>
                                        <OneList ref={el => this.ListBarScroll = el} style={{ width: window.innerWidth }}>
                                            <div>
                                                <ListBar>
                                                    <ListOne>
                                                        <img src={value.content_list[0].img_url} alt="" />
                                                    </ListOne>
                                                    <ListOneC>
                                                        <span>{value.content_list[0].title}</span>
                                                        <span>&nbsp;|&nbsp;</span>
                                                        <span>{value.content_list[0].pic_info}</span>
                                                        <p>{value.content_list[0].forward}</p>
                                                    </ListOneC>
                                                    <h5>{value.content_list[0].words_info}</h5>
                                                    <ListOneZ>

                                                        <h4><img src="http://pic.52112.com/icon/256/20160609/2171/118497.png" alt="" />&nbsp;发现</h4>
                                                        <span><img src="http://pic.52112.com/icon/256/20180419/14704/881214.png" alt="" /></span>
                                                        <span><img src="http://pic.52112.com/icon/256/20180402/13667/873027.png" alt="" /></span>
                                                        <span><img src="http://pic.52112.com/icon/256/20170727/7989/475426.png" alt="" /></span>
                                                        <span onTouchStart={(e) => this.setState({ spanChangeImg: !this.state.spanChangeImg })}>
                                                            <img src={this.state.spanChangeImg ? "http://pic.52112.com/icon/256/20150616/749/55490.png" : "http://pic.52112.com/icon/256/20170105/4412/231808.png"} alt="" />
                                                        </span>

                                                    </ListOneZ>

                                                </ListBar>

                                                <Lastlist>
                                                    {
                                                        value.content_list.slice(1).map((value, index) => {
                                                            return (
                                                                <div key={index} className="zimg">
                                                                    {
                                                                        this.LastListbar(value, index)
                                                                    }

                                                                    <div className="zdivlast">
                                                                        <h6>{value.post_date}</h6>
                                                                        <span><img src="http://pic.52112.com/icon/256/20150616/749/55490.png" alt="" /></span>
                                                                        <span><img src="http://pic.52112.com/icon/256/20180402/13667/873027.png" alt="" /></span>
                                                                    </div>

                                                                </div>

                                                            )

                                                        })
                                                    }
                                                </Lastlist>
                                            </div>
                                        </OneList>
                                    </div>
                                )
                            })
                        }


                        <div className="swiper-slide">

                        </div>
                        <div className="swiper-slide">

                        </div>
                        <div className="swiper-slide">

                        </div>
                        <div className="swiper-slide">

                        </div>


                    </div>


                </div>

            </Fragment>
        )
    }
    componentDidMount() {
        //   new BScroll(this.ListBarScroll, { click: true })
        var time
        var that = this
        // var changeNub = 21
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            on: {
                slideChangeTransitionStart: function (event) {
                    //你的事件
                    var changeNub = this.activeIndex
                    
                   time= that.props.list[that.props.list.length-1].date.slice(8, 10)
                   
                    that.props.loadList(--time,changeNub)
        
                },
                transitionStart:function(){
                    Toast.loading('Loading...', 30, () => {
                        console.log('Load complete !!!');
                      });
                   
             
                },
                transitionEnd: function(){
                    Toast.hide();
                  }, 
            },
        })
        mySwiper.updateSlides();
     
    
    }
    slideNext(){
        alert(1)
    }
    componentWillReceiveProps() {
       
    }
    componentDidUpdate(){  
        new BScroll(this.ListBarScroll, { click: true })
    }

}
export default connect(null, mapDispatch)(Onelist)