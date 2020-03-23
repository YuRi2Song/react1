import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    bottom:-90px;
    width: 100px;
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: black;
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

`;

const CheckButton = ({children, onClick}) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default CheckButton;