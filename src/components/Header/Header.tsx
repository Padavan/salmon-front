import { FunctionalComponent } from 'preact';
import { Link } from 'preact-router/match';
import './Header.css';

const Header: FunctionalComponent = () => (
	<header className="header">
		<h1>ch</h1>
		<nav className='nav'>
			<Link activeClassName="header__active" href="/">Home</Link>
			<Link activeClassName="header__active" href="/catalog">Catalog</Link>
		</nav>
	</header>
);

export default Header;
