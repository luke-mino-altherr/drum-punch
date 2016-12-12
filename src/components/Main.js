import React from 'react';
import { Link } from 'react-router';
import Header from './Header'
import Footer from './Footer'
import style from './Main.css'

const Main = React.createClass({
	render() {
  	return ( 
  		<div className="main" >
  			<Header />
  			{React.cloneElement(this.props.children, this.props)}
  			<Footer />
  		</div>
  	)
  }
})

export default Main