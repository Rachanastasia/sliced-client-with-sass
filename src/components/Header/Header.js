import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import UserContext from '../../user-context'
import { RiKnifeLine } from 'react-icons/ri'

class Header extends Component {

    static contextType = UserContext;


    render() {
        const title = <div aria-label='Sliced'><span>S</span><RiKnifeLine /><span>iced</span></div>
        const toggleButtons = TokenService.hasAuthToken()
            ? <button onClick={this.context.onLogout}>Log out</button>
            : <Link to='/login' tabIndex='-1'><button>Log in</button></Link>
        return (
            <header>
                <Link to='/' className='title_link'>
                    <h1>{title}</h1>
                </Link>
                <div className='header-link-wrapper'>
                    {toggleButtons}
                </div>
            </header >
        )
    }
}

export default Header;
