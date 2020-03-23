import React from 'react';
import styled from 'styled-components';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 500px;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

const AuthWrapper = ({children}) => (
    <Positioner>
        <ShadowedBox>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
);

export default AuthWrapper;