import React from "react";
import { IndexLink, Link } from "react-router";

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {

    return (
      <div>
      <nav id='ac-globalnav' className='no-js' role='navigation'>
        <div className='ac-gn-content'>
          <ul className='ac-gn-header'>
            <li className='ac-gn-item'>
              <label className='ac-gn-menuticon-label' aria-hidden='true'>
                <span className='ac-gn-menuicon-bread ac-gn-menuicon-bread-top'>
                  <span className='ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-top'></span>
                </span>
                <span className='ac-gn-menuicon-bread ac-gn-menuicon-bread-bottom'>
                  <span className='ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-bottom'></span>
                </span>
              </label>
              <a href='#ac-gn-menustate' className='ac-gn-menuanchor ac-gn-menuanchor-open' id='ac-gn-menuanchor-open'>
                <span className='ac-gn-menuanchor-label'>Open Menu</span>
              </a>
              <a href='#' className='ac-gn-menuanchor ac-gn-menuanchor-close' id='ac-gn-menuchor-close'>
                <span className='ac-gn-menuanchor-label'>Close Menu</span>
              </a>
            </li>
            <li className='ac-gn-item ac-gn-apple'>
              <a className='ac-gn-link ac-gn-link-apple' href='/' data-analytics-title='apple home' id='ac-gn-firstfocus-small'>
                <span class='ac-gn-menuanchor-label'>P.R.E.P</span>
              </a>
            </li>
          </ul>

          <ul className='ac-gn-list'>
            <li className='ac-gn-item'>
              <Link className='ac-gn-link-title' to='/' data-analytics-title='apple home' id='ac-gn-firstfocus'>
                P.R.E.P
              </Link>
            </li>
            <li className='ac-gn-item ac-gn-item-menu'>
              <Link className='ac-gn-link' to='/hydro' data-analytics-title='hydro'>
                HYDRO
              </Link>
            </li>
            <li className='ac-gn-item ac-gn-item-menu'>
              <Link className='ac-gn-link' to='/geo' data-analytics-title='geo'>
                GEO
              </Link>
            </li>
            <li className='ac-gn-item ac-gn-item-menu'>
              <Link className='ac-gn-link' to='/climato' data-analytics-title='climate'>
                CLIMATO
              </Link>
            </li>
            <li className='ac-gn-item ac-gn-item-menu'>
              <Link className='ac-gn-link' to='/bio' data-analytics-title='bio'>
                BIO
              </Link>
            </li>
            <li className='ac-gn-item ac-gn-item-menu'>
              <Link className='ac-gn-link' to='/manmade' data-analytics-title='manmade'>
                MANMADE
              </Link>
            </li>
          </ul>

        </div>
      </nav>  

      </div>
    );
  }
}


export default Navbar;
