import React, { Component } from 'react';
import {Flag} from 'containers/Base';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class Home extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/account/login');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
                <div>
                    <br/><br/><br/><br/><br/><br/>
                        {this.state.posts.map(item => (
                            <div key={item.studentID}>
                                <h3>안녕하세요.</h3>
                                <h1>{item.name}님</h1>
                                <h5>{item.major}</h5>
                                <h3>현재 점수는 0점입니다.</h3>
                            </div>
                        ))}
                        <div>
                            <h1>주의사항</h1>
                                <ol>
                                    <li>대회 각 문제 정답과 문제풀이를 공유할 수 없습니다.</li>
                                    <li>대회 페이지 및 서버에 공격행위를 시도하거나 불법행위 적발시 법적 처벌을 받을 수 있습니다.</li>
                                </ol>

                                <div>
                                <nav>
                                  <ul>
                                    <li>
                                      <Link to="/ctf">입부시험_치르러_가기</Link>
                                    </li>
                                  </ul>
                                </nav>
                              </div>
                        </div>
                        <Flag/>
                </div>
        );
    }
}
export default Home;