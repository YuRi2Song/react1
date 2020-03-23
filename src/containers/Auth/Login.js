import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from 'components/Auth';
import api from '../../api';

class Login extends Component {
    constructor(props){
      //DB field
        super(props)
        this.state = {
          username : '',
          studentID : '',
          password: '',
          results: [],
        }
      }

      handlingChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
      }

      //로그인
      handlingSubmit = async (event) => {
        event.preventDefault()
        let result = await api.loginPosts({username: this.state.username, password: this.state.password, studentID:this.state.username})
        .then(response => {
        if(response.data.token)
            var token = response.data.token
            alert("로그인 성공")
            // alert(token)
            console.log("로그인 성공")
            this.props.history.push("/");
        })
        this.setState({username: '', password: '', studentID: ''})
        return result;
      }


    render() {
        return (
            <AuthContent title="로그인">
                <form onSubmit={this.handlingSubmit}>
                <InputWithLabel label="학번" name="username" placeholder="학번" value={this.state.username} onChange={this.handlingChange} />
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" value={this.state.password} onChange={this.handlingChange} />
                <AuthButton type = "submit">로그인</AuthButton>
                </form>
                <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default Login;
