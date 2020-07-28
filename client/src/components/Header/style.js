import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { MAIN } from '../Style/Main';

export const HeaderWrapper = styled.div`
    height: 10vh;
    padding: 0;
    margin: 0;
`;

export const HeaderLayout = styled.div`
    display: flex; 
    justify-content: space-between;
    padding: 2vh 0 0 0;
`;
export const HeaderLogo = styled(NavLink)`
    position: relative;
    font-weight: bold;
    font-size: 4vh;
    padding-top: 1vh;
    padding-bottom: 0.5em;
    letter-spacing: 0.2em;
    color: ${MAIN.MAIN_THEME_COLOR};
    width: 40vw;
    &:hover {
        text-decoration: none;
        color: ${MAIN.MAIN_THEME_COLOR};
    }
`;


