import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }


  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
            <Link to="/"><img src={require('../images/leftfield-logo.jpg')} width="120" /></Link>
            <div className="NavLinks">
                <Link to="/">Services</Link>, <Link to="/">Team</Link>, <Link to="/">Contact</Link>
            </div>
        </div>
      </div>
    )
  }
}

export default Header