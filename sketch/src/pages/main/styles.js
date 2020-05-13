import styled from 'styled-components'


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFF;
`;

export const Header = styled.header`
    width: 100%;
    height: 68px;
    border-bottom: 1px solid #E2E2E2;

    .link{
        text-decoration: transparent;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0 5%;
        
    }

    h5{
        font-size: 0.9em;
        color: #505050;
        cursor: pointer;
    }
    
    h5 span{
        font-size: 1em;
        color: #303030;
    }

    nav {
        width: 30%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    nav h5{
        color: #0c151a99;
        font-weight: 600;
        font-size: 0.75em;
        transition: .5s;
        cursor: pointer;
    }

    nav h5:hover{
        color: #353535;
    }
`;

export const Main = styled.main`

`;