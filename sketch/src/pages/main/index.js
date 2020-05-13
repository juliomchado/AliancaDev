import React from 'react';
import {Link} from 'react-router-dom'

import { Container, Header, Main } from './styles.js';

function main() {
    return (
        <Container>
            <Header>
                <div>
                    <Link to='/' className="link"><h5>Aliança<span>Dev</span></h5></Link>

                    <nav>
                        <h5>Home</h5>
                        <h5>Projects</h5>
                        <h5>About</h5>

                    </nav>
                </div>


            </Header>

            <Main />
        </Container>
    )
}

export default main;