import React, { useState } from 'react';

const Setting = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement save logic (API call)
    alert('Settings saved!');
  };

  return (
    <div className="magicpattern h-[100vh] backdrop-blur-lg  flex justify-center items-center min-h-[80vh] ">
    
      <form onSubmit={handleSubmit} className=" m-4 bg-gradient-to-br from-[var(--three)] to-[var(--four)] p-8 rounded-2xl text-white shadow-2xl w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile Settings</h2>
        <div className="flex flex-col items-center mb-6 backdrop-blur-lg ">
          <label htmlFor="profilePic" className="cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-gray-300">
              {preview ? (
                <img src={preview} alt="Profile Preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400">Upload</span>
              )}
            </div>
            <input
              id="profilePic"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--two)] outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--two)] outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--two)] outline-none"
            placeholder="Enter new password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[var(--two)] to-[var(--three)] text-white font-semibold py-3 rounded-lg hover:from-[var(--three)] hover:to-[var(--two)] transition-all shadow-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Setting;