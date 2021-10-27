import React from 'react'
import { Head, Logo } from './Head'
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from 'react-router-dom';
import Home from '../../pages/home/Home'
import NotFound from '../../pages/notfound/NotFound'
import Characters from '../../pages/characters/Characters'
import Curiosity from '../../pages/curiosity/Curiosity'
import Titans from '../../pages/titans/Titans'

const Header = () => {
    return (
        <Router>
            <Head className='container'>
                <Logo src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Telsur_logo_2019.svg/368px-Telsur_logo_2019.svg.png' alt='logo' />
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/personajes'>Personajes</Link>
                    <Link to='/curiosidades'>Curiosidades</Link>
                    <Link to='/titanes'>Titanes</Link>
                </div>
            </Head>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/home'>
                    <Home />

                </Route>
                <Route exact path='/titanes'>
                    <Titans />
                </Route>
                <Route exact path='/personajes'>
                    <Characters />
                </Route>
                <Route exact path='/curiosidades'>
                    <Curiosity />
                </Route>
                <Route component={() => (
                    <NotFound />)
                } />
            </Switch>
        </Router>
    )
}
export default Header