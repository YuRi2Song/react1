import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import CheckButton from './CheckButton';

const Title = styled.div`
    position: relative;
    top: 100px;
    font-size: 2.5rem;
    font-weight: 550;
    color: ${oc.gray[8]};
`;

const FlagContent = ({title, children}) => (
    <div>
        <Title>{title}</Title>
        {children}
        <CheckButton>확인</CheckButton>
    </div>
);

export default FlagContent;