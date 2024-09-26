import { useState } from "react";

const AddPhotoPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div>
      <h1 className=" text-pink-500 lg:text-2xl font-bold mb-6">
        Upload Your Photo
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Upload Form */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2">
                Select Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {selectedImage && (
              <div className="mb-4">
                <p className="text-lg font-semibold mb-2">Preview</p>
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-48 h-48 object-cover rounded-md"
                />
              </div>
            )}

            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
            >
              Submit Photo
            </button>
          </form>
        </div>

        {/* Image Upload Rules */}
        <div>
          <h2 className="text-xl font-bold mb-4">Image Upload Rules</h2>
          <ul className="list-disc pl-5 text-sm">
            <li className="mb-2">The image must be in JPG or PNG format.</li>
            <li className="mb-2">Maximum file size allowed is 5MB.</li>
            <li className="mb-2">The image must be clear and high-quality.</li>
            <li className="mb-2">No watermarks or logos on the image.</li>
            <li className="mb-2">
              The image should be taken in good lighting.
            </li>
            <li className="mb-2">
              Ensure that the image is appropriate and adheres to our content
              policy.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddPhotoPage;
