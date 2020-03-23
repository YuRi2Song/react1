import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
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

const AuthButton = ({children, onClick}) => (
    <Wrapper onClick={onClick} type="submit">
        {children}
    </Wrapper>
);

export default AuthButton;