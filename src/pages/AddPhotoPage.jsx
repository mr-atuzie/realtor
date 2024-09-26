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
      <h1 className=" text-pink-500 text-center lg:text-2xl font-bold mb-6">
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
        <div className=" bg-orange-50 py-8 px-4 rounded-lg">
          <h2 className=" lg:text-xl font-bold text-center mb-4">
            Photo Guidelines
          </h2>
          <ul className="list-disc  text-sm">
            <li className="mb-2">
              Upload 2 portrait selfie photo.{" "}
              <span className=" italic text-pink-500">View demo</span>
            </li>
            <li className="mb-2">The image must be in JPG or PNG format.</li>
            <li className="mb-2">The image must be clear and high-quality.</li>
            <li className="mb-2">
              Please ensure your photo is clear, well-lit, and high resolution.
            </li>
            <li className="mb-2">
              Photos should be respectful and appropriate, showcasing you at
              your best. Offensive or inappropriate content will result in
              disqualification.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddPhotoPage;
