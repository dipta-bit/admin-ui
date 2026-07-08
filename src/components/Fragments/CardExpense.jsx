import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/icon"; 

function CardExpense({ data }) {
  return (
    <Card
      desc={
        <div className="p-4">

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="p-3 bg-gray-05 text-gray-01 rounded-md me-3">

                <Icon.Edit size={20} /> 
              </div>
              <div>

                <div className="text-sm text-gray-01 capitalize">{data.category || "Category"}</div>
                <div className="text-xl font-bold text-black">${data.amount || 0}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-sm font-bold ${data.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {data.percentage || 0}% {data.trend === "up" ? "↑" : "↓"}
              </div>
              <div className="text-[10px] text-gray-03">Compare to last month</div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            {data.detail?.map((item, index) => (
              <div key={index}>
                <div className="border-t border-gray-05 mb-3"></div>
                <div className="flex justify-between items-center">
                  

                  <div className="text-sm text-gray-01 capitalize">
                    {item.desc || item.description || item.title || item.name || "Transaction"}
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-bold text-black">${item.amount}</div>
                    <div className="text-[10px] text-gray-03">{item.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}

export default CardExpense;