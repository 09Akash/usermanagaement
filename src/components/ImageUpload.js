// src/components/ImageUpload.js
import React, { useState } from 'react';
import AWS from 'aws-sdk';

const ImageUpload = () => {
    const [images, setImages] = useState([]);

    const uploadImage = (file) => {
        // Configure AWS S3
        const s3 = new AWS.S3({
            accessKeyId: 'YOUR_ACCESS_KEY_ID',
            secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
            region: 'YOUR_REGION'
        });

        const params = {
            Bucket: 'YOUR_BUCKET_NAME',
            Key: file.name,
            Body: file,
            ACL: 'public-read'
        };

        s3.upload(params, (err, data) => {
            if (err) console.log(err);
            else setImages(prevImages => [...prevImages, data.Location]);
        });
    };

    return (
        <div>
            <input type="file" onChange={(e) => uploadImage(e.target.files[0])} />
            <div className="gallery">
                {images.map((url, index) => (
                    <img key={index} src={url} alt={`Uploaded #${index}`} />
                ))}
            </div>
        </div>
    );
};

export default ImageUpload;
