import styled from 'styled-components';
import cierra from '../../images/cierra.jpeg'



export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
   

`;


export const Header = styled.h1`
    padding-top: 100px;
    border-bottom: 2px black solid;
    width: 60%;
    text-align: center;
`;

export const AboutContent = styled.div`
    text-align: left;
    width: 40%;
    padding-top: 30px;
`;

export const ProfileImage = styled.div`
    margin-top: 20px;
    background-image: url(${cierra});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    width: 300px;
    height: 300px;

`;

export const Me = styled.h3`
    padding-top: 15px;
    text-align: center;
`;

export const Title = styled.h4`
    text-align: center;
    font-style: italic;
`;