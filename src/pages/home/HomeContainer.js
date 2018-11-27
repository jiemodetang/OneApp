import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
//引入one组件
import {OneContainer as OneCon} from 'pages/One'
import {TaBle} from './styledhome'

export class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'One',
            fullScreen: true,
            a:1
        };
    }
    componentDidMount(){

        this.setState({
            a:++this.state.a
        })
        console.log(this.state.a)
    }
    render() {
    
        return (
            
         <TaBle >
                <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0, } : { height: 400 }}>
                <TabBar
                      unselectedTintColor="#666"
                      tintColor="#000"
                      barTintColor="white"
                >
                    <TabBar.Item
                        title="One"
                        key="One"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'One'}
        
                        onPress={() => {
                            this.setState({
                                selectedTab: 'One',
                            });
                        }}
                        data-seed="logId"
                    >
                      <OneCon></OneCon>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="All"
                        key="All"
            
                        selected={this.state.selectedTab === 'All'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'All',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <div>2</div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="Me"
                        key="Me"
                        selected={this.state.selectedTab === 'Me'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Me',
                            });
                        }}
                    >
                      <div>3</div>
                    </TabBar.Item>
      
                </TabBar>
            </div>
         </TaBle>
        );
    }

}
export default HomeContainer
