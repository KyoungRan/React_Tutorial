import React from 'react';
import { IndexLink, Link } from 'react-router';
import $ from 'jquery';
import jqueryUi from 'jquery-ui';

/*
const navbar = document.getElementById('#navber');
const top = document.getElementById('#top');
class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      scroll_top: 0
  }
}
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  getScrollValue() {
    this.setState({ scroll_top: window.scrollY });
    console.log(scroll_top);
    //return window.scrollY || window.pageYOffset || 0;
  }
  navbarChange() {
    if (this.state.scroll_top <= 40) {
      navbar.removeClass("navbar-scroll");
    }else {
      navbar.addClass("navbar-scroll");
    }
  }
*/
class Navbar extends React.Component {
  constructor() {
   super();
 }

 handleNavbar() {
   const navbar = $('.navbar');

     $(window).scroll(function(){
       if($(window).scrollTop() <= 40){
         navbar.removeClass('navbar-scroll');
         $('.top').hide();
       } else {
         navbar.addClass('navbar-scroll');
         $('.top').show();
       }
     });
     $('.navbar-toggle').click(function(){
       if($(window).scrollTop() <= 40){
          navbar.addClass('navbar-scroll');
         }
     });
 }

  componentDidMount() {
    this.refs.navbar


  }

  componentWillUmount() {

  }

  render() {
    return (
      <div data-spy="scroll" data-target="#myScrollspy" class="">
        { this.handleNavbar() }
      	{/* Fixed Nav */}
      	<nav ref="navbar" class="navbar navbar-default navbar-fixed-top" id="myScrollspy">
      		<div class="container">
      			<div class="navbar-header">
      				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
      					<span class="sr-only">Toggle navigation</span>
      					<span class="icon-bar"></span>
      					<span class="icon-bar"></span>
      					<span class="icon-bar"></span>
      				</button>
      				<a class="navbar-brand" href="#">Navbar</a>
      			</div>
      			<div id="navbar" class="navbar-collapse collapse">
      				<ul class="nav navbar-nav navbar-right">
                <li><Link to='/dev'>DEV</Link></li>
                <li><Link to='/biz'>BIZ</Link></li>
                <li><Link to='/software'>SOFTWARE</Link></li>
                <li><Link to='/marketing'>MARKETING</Link></li>
                <li><Link to='/design'>DESIGN</Link></li>
      				</ul>
      			</div>
      		</div>
      	</nav>
      	{ /*Close Fixed Nav */	}

      </div>
    );
  }
}

export default Navbar;
