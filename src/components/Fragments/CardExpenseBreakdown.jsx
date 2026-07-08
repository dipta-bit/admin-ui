import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/icon"; 

function CardExpenseBreakdown(props) {
  const { data } = props;

  return (
    <>
      <Card
        title="Expenses Breakdown"
        desc={
          <div className="h-full md:grid md:grid-cols-3 gap-4">

            {data.map((item, index) => (
              <div key={item.id || index} className="flex items-center justify-between">
                <div className="flex">
                  <div>
                    <div className="bg-special-bg text-gray-02 px-3 py-5 rounded-lg flex flex-col place-content-center">

                      {item.icon || <Icon.Edit size={20} />}
                    </div>
                  </div>
                  <div className="ms-4">

                    <span className="text-gray-02 capitalize">{item.category}</span>
                    <br />
                    <span className="font-bold text-lg">${item.amount}</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-gray-02">{item.percentage}%*</span>
                      

                      <span className={`text-sm font-bold ${item.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                        {item.trend === "up" ? "↑" : "↓"}
                      </span>
                      
                    </div>
                  </div>
                </div>
                <div className="flex place-content-center flex-col me-8">
                  <Icon.ArrowRight />
                </div>
              </div>
            ))}
          </div>
        }
      />
    </>
  );
}

export default CardExpenseBreakdown;