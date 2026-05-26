import OverviewSVG from "../../assets/Overview.svg?react";
import TransactionSVG from "../../assets/Transaction.svg?react";
import BalanceSVG from "../../assets/wallet.svg?react";
import BillSVG from "../../assets/Bill.svg?react";
import ExpenseSVG from "../../assets/Expencces.svg?react";
import GoalSVG from "../../assets/Goal.svg?react";
import SettingSVG from "../../assets/Settings.svg?react";
import DetailSVG from "../../assets/Icon.svg?react";
import ChevronRightSVG from "../../assets/chevrons-right.svg?react";
import LogoutSVG from "../../assets/Icon2.svg?react";

const Icon = {
  Overview: ({ size = 24, color = "currentColor", ...props }) => (
    <OverviewSVG width={size} height={size} stroke={color} {...props} />
  ),
  Transactions: ({ size = 24, color = "currentColor", ...props }) => (
    <TransactionSVG width={size} height={size} stroke={color} {...props} />
  ),
  Balances: ({ size = 24, color = "currentColor", ...props }) => (
    <BalanceSVG width={size} height={size} stroke={color} {...props} />
  ),
  Bill: ({ size = 24, color = "currentColor", ...props }) => (
    <BillSVG width={size} height={size} stroke={color} {...props} />
  ),
  Expense: ({ size = 24, color = "currentColor", ...props }) => (
    <ExpenseSVG width={size} height={size} stroke={color} {...props} />
  ),
  Goal: ({ size = 24, color = "currentColor", ...props }) => (
    <GoalSVG width={size} height={size} stroke={color} {...props} />
  ),
  Setting: ({ size = 24, color = "currentColor", ...props }) => (
    <SettingSVG width={size} height={size} stroke={color} {...props} />
  ),
  Detail: ({ size = 24, color = "currentColor", ...props }) => (
    <DetailSVG width={size} height={size} stroke={color} {...props} />
  ),
  ChevronRight: ({ size = 24, color = "currentColor", ...props }) => (
    <ChevronRightSVG width={size} height={size} stroke={color} {...props} />
  ),
  Logout: ({ size = 24, color = "currentColor", ...props }) => (
    <LogoutSVG width={size} height={size} stroke={color} {...props} />
  ),
};

export default Icon;