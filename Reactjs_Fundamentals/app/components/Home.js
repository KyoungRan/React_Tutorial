var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var MainConainer = require('./MainContainer');

function Home () {
  return (
    <MainConainer>
      <h1>Github Battle</h1>
      <p className='lead'>What even is a jQuery?</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </MainConainer>
  )
}

module.exports = Home;