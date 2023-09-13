import { FunctionalComponent } from 'preact';
import Router from 'preact-router';
import Header from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Thread } from './components/Thread/Thread';

const App:FunctionalComponent = () => (
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