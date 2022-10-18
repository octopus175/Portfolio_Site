import {Link} from 'react-scroll'
import './Navbar.style.css'

function Navbar() {
    return(
        <header className='navbar'>
            <nav>
                <ul>
                    <li>
                        <Link activeClass="active" spy smooth to="about">
                        ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="projects">
                        PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="blog">
                        BLOG
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="contact">
                        CONTACT ME
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;