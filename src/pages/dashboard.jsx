import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";

function Dashboard() {
  return (
    <MainLayout>

      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-3 gap-6 h-full pb-6">
        
       
        <div className="col-span-1 md:col-span-4 h-full">
          <Card
            title="Total Balance"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
          />
        </div>
        <div className="col-span-1 md:col-span-4 h-full">
          <Card
            title="Goals"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
          />
        </div>
        <div className="col-span-1 md:col-span-4 h-full">
          <Card
            title="Upcoming Bill"
            link="/bill"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
          />
        </div>


        <div className="col-span-1 md:col-span-4 md:row-span-2 h-full">
          <Card
            title="Recent Transactions"
            link="/transactions"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
          />
        </div>


        <div className="col-span-1 md:col-span-8 h-full">
          <Card
            title="Statistics"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
          />
        </div>
        <div className="col-span-1 md:col-span-8 h-full">
          <Card
            title="Expenses Breakdown"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
          />
        </div>
        
      </div>
    </MainLayout>
  );
}

export default Dashboard;