import React from 'react';
import { Link } from 'react-router';
import style from './Header.css'

const Header = () => {
	return( 
		<div className="header">
			Drum Punch<br/>
			
			<div className="left">

			<span className="thin">// by LMA</span>

			<Link className="control" to={'/drum-punch/sequencer'}>sequencer</Link>
			
			<Link className="control" to={'/drum-punch'}>Pads</Link>

			</div>
		</div>
	)
}

export default Header