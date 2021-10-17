import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import { Home } from '../routes/home/Home';
// import { Profile } from '../routes/profile';
import { Catalog } from '../routes/catalog/Catalog';
import { Thread } from '../routes/Thread/Thread';

const App = () => (
	<div id="app">
		<Header />
		<div style={{marginTop: "56px"}}>
			<Router>
				<Home path="/" />
				<Catalog path="/catalog" />
				<Thread path="/thread/:id" />
			</Router>
		</div>
	</div>
)

export default App;
