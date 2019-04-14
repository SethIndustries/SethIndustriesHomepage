import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon">
              <img
                src={require('./../images/icon.png')}
                alt={''}
                />
            </span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Seth Industries</h1>
                <h2>Business Automation Specialists</h2>
                <h3><a href="mailto:contact@sethindustries.com.au">contact@sethindustries.com.au</a></h3>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
