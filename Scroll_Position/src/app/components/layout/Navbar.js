import React from 'react';
import { IndexLink, Link } from 'react-router';

class Navbar extends React.Component {
  constructor() {
   super();
 }

  render() {
    return (
      <div data-spy="scroll" data-target="#myScrollspy" class="">
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
