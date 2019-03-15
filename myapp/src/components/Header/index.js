import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GENRES, DEFAULT_GENRE } from '../../constants/genres';
import { browse, dashboard } from '../../constants/pathnames';
import map from '../../services/map';

function Header({
    currentUser, selectedGenre, onLogin, onLogout
}) {
    return (
        <div className="header">
            <div className="header-content">
                <Logo />
                <MenuList selectedGenre={selectedGenre} />
                {/* <SessionAction
                    currentUser={currentUser}
                    onLogin={onLogin}
                    onLogout={onLogout}
                /> */}
                {/* <p>Header</p> */}
            </div>
        </div>
    );
}

function MenuList({ selectedGenre }) {
    if (!selectedGenre) return null;
    return (
        <div>
            {map((genre, key) => {
                const menuItemProps = { genre, selectedGenre, key };
                return <MenuItem {...menuItemProps} />;
            }, GENRES)}
        </div>
    );
}

function MenuItem({ genre, selectedGenre }) {
    const linkClass = classNames('menu-item', {
        'menu-item-selected': genre === selectedGenre,
    });
    return (
        <Link to={getGenreLink(genre)} className={linkClass}>
            {genre}
        </Link>
    );
}

function getGenreLink(genre) {
    return `${browse}/${genre || DEFAULT_GENRE}`;
}

function Logo() {
    return (
        <div>
            <div className="logo">
                <Link to="/">
                    <h1>Favesound</h1>
                </Link>
            </div>
        </div>
    );
}
function mapStateToProps(state) {
    return {
        currentUser: state.session.user,
        selectedGenre: state.browse.selectedGenre
    };
}
function mapDispatchToProps(dispatch) {
    return {
        // onLogin: bindActionCreators(actions.login, dispatch),
        // onLogout: bindActionCreators(actions.logout, dispatch),
    };
}

// Header.propTypes = {
//     currentUser: PropTypes.object,
//     onLogin: PropTypes.func,
//     onLogout: PropTypes.func,
// };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
