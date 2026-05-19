import { useState } from 'react';

const PostCard = ({ id, userId, title, body }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex flex-col justify-between bg-white p-6 rounded-md shadow-sm border border-transparent transition-all duration-300 hover:scale-[1.03] hover:border-gray-400 hover:bg-pink-50 h-full">
      
      {/* Bungkus teks dan buat rata tengah (center) */}
      <div className="flex-grow text-center">
        <h2 className="font-bold text-md capitalize mb-3 text-gray-800">
          {title}
        </h2>
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          {body}
        </p>
      </div>

      <button
        onClick={() => setIsClicked(true)}
        className={`w-full py-2.5 text-sm font-semibold rounded-md transition-all duration-300
        ${
          isClicked
            ? 'bg-[#b83016] text-white hover:brightness-110' // <- Menggunakan Hex Code khusus di sini
            : 'bg-gray-500 text-white hover:bg-gray-400'        
        }`}
      >
        {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>

    </div>
  );
};

export default PostCard;