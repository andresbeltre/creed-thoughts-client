import React, { Component } from 'react';
import creedBanner from './../creed-thoughts.gif';
import './../App.css';

class UnderConstruction extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{textAlign: "center"}}>
						<img src={creedBanner} id="creed-banner" alt="www.creedthoughts.gov.www/creedthoughts." />
						<h2 id="under-construction"><span role="img" aria-labelledby="warning">⚠️</span> Under Construction <span role="img" aria-labelledby="warning">⚠️</span></h2>
					</div>
				</div>
			</div>
		);
	}
}

export default UnderConstruction;