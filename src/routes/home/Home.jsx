import { h } from 'preact';
import style from './Home.css';
import { useState } from 'preact/hooks';
// import { CreateThread } from '../../components/CreateThread';

export const Home = () => {
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
		const data = new FormData();
		data.append("file", e.target.files[0])
		setFetching(true);
		try {
			fetch('api/upload',
				{
					mode: 'no-cors',
		      method: "POST",
					body: data,
					// headers: {
	      		// 'Content-Type': 'multipart/form-data; boundary=—-WebKitFormBoundaryfgtsKTYLsT7PNUVD'
			      // 'Content-Type': 'application/x-www-form-urlencoded',
			    	// },
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
			<form action="/upload" method="post" enctype="multipart/form-data">
				<input type="file" name="file" disabled={fetching} placeholder="Add file" onChange={onFileUpload} />
			</form>
			<div>
			</div>
			{fetching && <h3>Loading...</h3>}
		</div>
	);
}