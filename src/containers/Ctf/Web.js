import React, { Component } from 'react'; 
import './content.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Web extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            //해당 api 링크에서 내용을 가지고 옴
            const res = await fetch('http://127.0.0.1:8000/ctf/web/');
            //json 형식으로
            const posts = await res.json();
            this.setState({
                posts
            });
            //오류 처리
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            //글목록 불러오기
            <div>
                <Container maxWidth="lg">
                {this.state.posts.map(item => (
                <Card className={'card'}>
                    <CardContent>
                        <Typography>
                        <div key={item.id}>
                        <h1>{item.title}</h1>
                        <h2>{item.content}</h2>
                        <h3>배점 : {item.score}</h3>
                        </div>                        
                    </Typography>
                    </CardContent>
                </Card> 
                ))}
                </Container>
            </div>
        );
    }
}

export default Web;
