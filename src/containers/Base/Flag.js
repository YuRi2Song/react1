import React, { Component } from 'react';
import { FlagContent, InputWithFlag } from 'components/Base/Header';


class Flag extends Component{
    render(){
        return(
            <FlagContent title="Flag값을 아래의 입력칸에 입력하세요.">
                <InputWithFlag label=" " name="flag" placeholder="Flag"/>
            </FlagContent>
        )
    }
}

export default Flag;