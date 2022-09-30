/* eslint-disable camelcase */
import { useRef, useState } from 'react';
import './Image.css';

function Image({ setInputValue }) {
  const imgRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  // inputValue.image = imageUrl;

  const fileInputHandler = () => {
    imgRef.current.click();
  };

  const uploadProfile = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      // console.log('이미지주소', reader.result);
    };
  };

  const deleteImageHandler = () => {
    setImageUrl('');
    setInputValue({
      image: '',
    });
  };

  return (
    <div className="modal-image-container">
      <div
        className={imageUrl ? 'image-inner hidden' : 'image-inner'}
        aria-hidden="true"
        onClick={fileInputHandler}
      >
        <input
          type="file"
          name="file"
          className="insert-image"
          accept="image/jpg,image/png,image/jpeg"
          onChange={uploadProfile}
          ref={imgRef}
        />
        {imageUrl ? (
          <img src={imageUrl} alt="preview-img" />
        ) : (
          <img
            src="img/register_profile_img.png"
            className="regi_profile_img"
            alt="profile"
          />
        )}
      </div>
      {imageUrl && (
        <button
          type="button"
          className="btn-delete-image"
          onClick={deleteImageHandler}
        >
          삭제
        </button>
      )}
    </div>
  );
}
export default Image;
