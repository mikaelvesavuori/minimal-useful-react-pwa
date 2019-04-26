import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import View from 'containers/View';

import H1 from 'components/H1';
import Paragraph from 'components/Paragraph';

const ThisView = () => (
	<View title="Demo Site – This View">
		<Helmet>
			<meta property="og:site_name" content="Demo Site" />
			<meta property="og:title" content="Demo Site — ThisView" />
			<meta property="og:description" content="ThisView description." />
		</Helmet>
		<H1>ThisView</H1>
		<Paragraph>
			<Link to="/thisview">Link to ThisView</Link>
		</Paragraph>
		<Paragraph>
			<Link to="/thatview">Link to ThatView</Link>
		</Paragraph>
	</View>
);

export default withRouter(ThisView);
