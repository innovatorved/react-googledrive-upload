import React from "react";


export default function Upload(props: any) {

	const { setURL } = props

	const token = "ya29.a0AeTM1ieiX1u9N9gWCC1vPKZn6PgPySXpC2LIb00KPqGlvKnAo5_8Ipv7JknxuaH6OdROUF4Gibv11AByN94foUdHY5tFUWRAuLRtkKW3Bg2Y3gfvzgwV09IBd0U7ab4avasDV5tdu9cNDQG9hCxhoPIGw4ZJaCgYKAXYSARMSFQHWtWOmgXy-MuM6PVJ6YB1bLh3F1Q0163"


	const Uploadfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files === null) return;
		if (Object.keys(files).length > 0) return;
		const file = files[0];
		if (file.size > 10485761) {
			alert("File Size is Greater than 10MB")
			return;
		}
		const fileMetadata = { name: file.name, parents: ["1wNiX1UaC9eJG_iF_Y0XTV5R3XTm9hK8r"] };
		const form = new FormData();
		form.append('metadata', new Blob([JSON.stringify(fileMetadata)], { type: 'application/json' }));
		form.append('file', file);
		fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
			method: 'POST',
			headers: new Headers({ 'Authorization': 'Bearer ' + token }),
			body: form
		})
			.then(res => res.json())
			.then(res => {
				setURL(`https://drive.google.com/file/d/${res.id}/view?usp=share_link`);
				console.log(`https://drive.google.com/file/d/${res.id}/view?usp=share_link`)
			})
			.catch((err) => alert(err.message));
	}


	return (


		<form>
			<input
				type="file"
				id="avatar"
				name="avatar"
				accept="image/png, image/jpg"
				onChange={Uploadfile}
			/>
		</form>
	);
}
