import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

//import ThisView from 'containers/ThisView';
//import ThatView from 'containers/ThatView';

const ThisView = Loadable({
	loader: () => import('containers/ThisView'),
	loading: () => <div>Loading...</div>
});

const ThatView = Loadable({
	loader: () => import('containers/ThatView'),
	loading: () => <div>Loading...</div>
});

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/thisview" render={() => <ThisView title="This view" />} />
				<Route exact path="/thatview" render={() => <ThatView title="That view" />} />
				<Route render={() => <Redirect to="/thisview" />} />
			</Switch>
		);
	}
}

export default withRouter(Routes);
