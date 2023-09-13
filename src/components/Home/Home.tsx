import { FunctionalComponent } from 'preact';
import './Home.css';
import { useState } from 'preact/hooks';
// import { CreateThread } from '../../components/CreateThread';

const CRUD_URL = 'http://localhost:3000';

export const Home: FunctionalComponent = () => {
	const [fetching, setFetching] = useState(false);
	
	const refreshFileList = async () => {
		setFetching(true);
		try {
			await fetch(CRUD_URL + '/hello').then(res => console.log(res)).catch(e => console.error(e));
		} catch (e) {
			console.error(e);
		}
		setFetching(false);
	}

	const onFileUpload = async (e: any) => {
		const data = new FormData();
		data.append("file", e.target.files[0])
		setFetching(true);
		try {
			fetch(CRUD_URL + '/upload',
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
		<div>
			<h1>Home</h1>
			<p>This is the Home component.</p>
			<div>
				<button onClick={refreshFileList} disabled={fetching}>
					Refresh
				</button>
			</div>
			<form action="/upload" method="post">
				<input
					type="file"
					name="file"
					disabled={fetching}
					placeholder="Add file"
					onChange={onFileUpload}
				/>
			</form>
			<div>
			</div>
			{fetching && <h3>Loading...</h3>}
		</div>
	);
}