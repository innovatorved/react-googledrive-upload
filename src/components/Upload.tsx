import React from "react";

export default function Upload(props:any) {
  const { token } = props;

  const Uploadfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (token === "") {
      alert("Token not Found");
      return;
    }
    const files = e.target.files;
    if (files === null) return;
    if (Object.keys(files).length <= 0) {
      return;
    }
    const file = files[0];
    if (file.size > 10485761) {
      alert("File Size is Greater than 10MB");
      return;
    }
    const fileMetadata = { name: file.name };
    const form = new FormData();
    form.append(
      "metadata",
      new Blob([JSON.stringify(fileMetadata)], { type: "application/json" })
    );
    form.append("file", file);
    
    fetch(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
      {
        method: "POST",
        headers: new Headers({ Authorization: "Bearer " + token }),
        body: form,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        
        alert("Photo Uploaded to Drive")
      })
      .catch((err) => {
        
        alert(err.message)
      });
  };

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
