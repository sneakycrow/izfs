import * as React from 'react';

// Define the Props interface for the component, which specifies the type of the "onImageUpload" prop
interface Props {
  onImageUpload: (image: File) => void; // The "onImageUpload" prop is a function that is called when an image is uploaded, with the uploaded image file as an argument
}

// Define the ImageUploader component as a FunctionComponent that takes Props
const ImageUploader: React.FunctionComponent<Props> = ({ onImageUpload }) => {
  // Create a state variable to store the uploaded images
  const [images, setImages] = React.useState<string[]>([]);

  // Create a function to handle image uploads
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the uploaded image file
    const image = event.target.files?.[0];

    // If an image was uploaded, add it to the images array and call the "onImageUpload" prop function
    if (image) {
      setImages((prevImages) => [...prevImages, URL.createObjectURL(image)]);
      onImageUpload(image);
    }
  };

  // Map over the array of images, generating a button for each image
  return (
    <div>
      {images.map((image, index) => (
        // Set the key prop to the index of the image to ensure that each button has a unique key
        <button key={index}>
          {/* Render the image inside the button using the "style" prop to set the image as the background */}
          <div
            style={{
              backgroundImage: `url(${image})`,
              width: '100px',
              height: '100px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </button>
      ))}
      {/* Render a file input element to allow the user to upload an image */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};

// Export the ImageUploader component
export default ImageUploader;