import React from "react"; 

function Card(props) {
  const { title, link = false, desc } = props;

  return (
    <div className="h-full flex flex-col">
      {/* 1. Tambahkan dark:text-gray-300 agar judul Card (seperti "Total Balance") terlihat jelas di mode gelap */}
      <div className="flex justify-between items-center text-gray-02 dark:text-gray-300 mb-2 transition-colors duration-300">
        <div className="text-2xl">{title}</div> 
        {link && <div className="text-xs cursor-pointer hover:underline">View All</div>}
      </div>
      
      {/* 2. Ini inti perubahannya: Tambahkan dark:bg-gray-800 dan dark:text-white */}
      <div className="flex-1 bg-white dark:bg-gray-800 dark:text-white rounded-lg px-6 py-5 shadow-xl transition-colors duration-300">
        {desc}
      </div>
    </div>
  );
}

export default Card;