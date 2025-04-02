import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const NavMenu = ({ data = [] }) => { 
    // Check if data is an array
    if (!Array.isArray(data)) {
        console.error('Expected data to be an array, but received:', data);
        return null;
    }

    return (
        <nav className="nav-menu">
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px' }}>
                <li>
                    <Link 
                        to="/" 
                        className="home-link" 
                        style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.4rem' }}
                    >
                        Home
                    </Link>
                </li>

                {data.map((item) => (
                    <li key={item.Item}>
                        <Link 
                            to={`/model/${item.Item}`} 
                            style={{ textDecoration: 'none', color: 'white', fontSize: '1.2rem' }}
                        >
                            {item.Item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// Prop Types Validation
NavMenu.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            Item: PropTypes.string.isRequired
        })
    ).isRequired
};

export default NavMenu;
