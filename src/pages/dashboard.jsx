import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/CardBalance";

import CardGoal from "../components/Fragments/CardGoal"; 
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpensesBreakdown from "../components/Fragments/CardExpenseBreakdown";

import {
  transactions,

  balances,
  expensesStatistics, 
} from "../data";
import { goalService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";
import axios from "axios"; 

function Dashboard() {
  const { logout } = useContext(AuthContext); 

  const [goals, setGoals] = useState({});
  const [bills, setBills] = useState([]); 
  const [expenses, setExpenses] = useState([]); 
  const [snackbar, setSnackbar] = useState({ 
    open: false,
    message: "",
    severity: "success"
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      console.error("Gagal mengambil data goals:", err);
      setSnackbar((prev) => ({ ...prev, open: true, message: err.msg || "Terjadi kesalahan", severity: "error" }));
      if (err.status === 401) {
        logout();
      }
    }
  };

  const fetchBills = async () => {
    try {
      const token = localStorage.getItem("token"); 
      const response = await axios.get("https://jwt-auth-eight-neon.vercel.app/bills", {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });

      setBills(response.data.data || response.data);
    } catch (err) {
      console.error("Gagal mengambil data bills:", err);
      if (err.response && err.response.status === 401) {
        logout(); 
      }
    }
  };

  
  const fetchExpenses = async () => {
    try {
      const token = localStorage.getItem("token"); 
      const response = await axios.get("https://jwt-auth-eight-neon.vercel.app/expenses", {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });

      setExpenses(response.data.data || response.data);
    } catch (err) {
      console.error("Gagal mengambil data expenses:", err);
      if (err.response && err.response.status === 401) {
        logout(); 
      }
    }
  };

  useEffect(() => {
    fetchGoals();
    fetchBills(); 
    fetchExpenses(); 
  }, []);
  
  return (
    <MainLayout>
      <div className="grid sm:grid-cols-12 gap-6">
        
        <div className="sm:col-span-4">
          <CardBalance data={balances} />
        </div>
        <div className="sm:col-span-4">
          <CardGoal data={goals} />
        </div>

        <div className="sm:col-span-4">
          <CardUpcomingBill data={bills} />
        </div>
        <div className="sm:col-span-4 sm:row-span-2">
          <CardRecentTransaction data={transactions} />
        </div>
        <div className="sm:col-span-8">
          <CardStatistic data={expensesStatistics} />
        </div>
        <div className="sm:col-span-8">

          <CardExpensesBreakdown data={expenses} />
        </div>
        
      </div>
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}

export default Dashboard;