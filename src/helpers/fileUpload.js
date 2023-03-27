

export const fileUpload = async (file) => {
    if(!file) throw new Error('No file selected');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/daniel-mateu-pardo/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal-revisit');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        console.log(resp);

        // if(resp.ok) {
        //     const cloudResp = await resp.json();
        //     return cloudResp.secure_url;
        // } else {
        //     throw await resp.json();
        // }

        if(!resp.ok) throw new Error('Error uploading file');
        const cloudResp = await resp.json();
        return cloudResp.secure_url;

    } catch (error) {
        throw new Error(error.message);
    }

}