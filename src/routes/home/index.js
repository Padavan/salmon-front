import { h } from 'preact';
import style from './style.css';
import { useState } from 'preact/hooks';

const Home = () => {
	const [fetching, setFetching] = useState(false);
	
	const refreshFileList = async () => {
		setFetching(true);
		try {
			await fetch('api/hello').then(res => console.log(res)).catch(e => console.error(e));
		} catch (e) {
			console.error(e);
		}
		setFetching(false);
	}

	const onFileUpload = async (e) => {
		setFetching(true);
		console.log('target', e.target);
		try {
			fetch('api/upload',
				{
					method: 'POST',
					body: e.target.files[0],
					headers: {
	      		'Content-Type': 'multipart/form-data; boundary=—-WebKitFormBoundaryfgtsKTYLsT7PNUVD'
			      // 'Content-Type': 'application/x-www-form-urlencoded',
			    	},
		  	}
		 	)
		} catch (e) {
			console.error(e)
		};
		setFetching(false);
	}

	return (
		<div class={style.home}>
			<h1>Home</h1>
			<p>This is the Home component.</p>
			<div>
				<button onClick={refreshFileList} disabled={fetching}>
					Refresh
				</button>
			</div>
			<input type="file" disabled={fetching} placeholder="Add file" onChange={onFileUpload} />
			<div>
			</div>
			{fetching && <h3>Loading...</h3>}
		</div>
	);
}

export default Home;
