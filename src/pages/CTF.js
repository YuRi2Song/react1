import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as baseActions from 'redux/modules/base';
import Header from 'components/Ctf/Header';
import {Web, System, Reverse} from 'containers/Ctf'; 

class CTF extends Component {
    // 페이지에 진입 할 때 헤더를 비활성화
    componentWillMount() {
        this.props.BaseActions.setHeaderVisibility(false);
    }

    // 페이지에서 벗어 날 때 다시 활성화
    componentWillUnmount() {
        this.props.BaseActions.setHeaderVisibility(true);
    }


    render() {
        return (
            <Router>
                <div>
                <Header/>
                <Switch>
                   
                    <Route path="/ctf/web" component={Web}/>
                    <Route path="/ctf/system" component={System}/>
                    <Route path="/ctf/reverse" component={Reverse}/>
                </Switch>
                {this.props.children} 
                </div>
            </Router>
           
        );
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(CTF);