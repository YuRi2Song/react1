import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from 'components/Auth';
import api from '../../api';

class Register extends Component {
    constructor(props){
      //DB field
        super(props)
        this.state = {
          username : '',
          studentID : '',
          password: '',
          name : '',
          major:'',
          results: [],
        }
      }

      handlingChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
      }
    
      //회원가입
      handlingSubmit = async (event) => {
        event.preventDefault()
        let result = await api.createPosts({username: this.state.username, major:this.state.major, password: this.state.password, studentID:this.state.username, name:this.state.name})
        alert("회원가입 성공")
        console.log("회원가입 성공", result)
        this.setState({username: '', password: '', studentID: '', major: '', name:''})
      }
    

    render() {
        return (
            <AuthContent title="회원가입">
                <form onSubmit={this.handlingSubmit}>
                <InputWithLabel label="이름" name="name" placeholder="이름" value={this.state.name} onChange={this.handlingChange} />
                <InputWithLabel label="학번" name="username" placeholder="학번" value={this.state.username} onChange={this.handlingChange} />
                <InputWithLabel label="학과" name="major" placeholder="학과" value={this.state.major} onChange={this.handlingChange} />
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" value={this.state.password} onChange={this.handlingChange} />
                <AuthButton type = "submit">회원가입</AuthButton>
                </form>
                <RightAlignedLink to="/auth/login">로그인</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default Register;
