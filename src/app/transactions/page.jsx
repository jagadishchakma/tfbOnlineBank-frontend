'use client';
import { authApi } from "@/js/api";
import { AuthContext } from "@/js/AuthContext";
import { useContext, useEffect } from "react";

const Transactions = () => {
  const { setReloadUser, reloadUser } = useContext(AuthContext)
  useEffect(() => {
    const fetchTransactions = async () => {
      const result = await authApi.get('accounts/transactions/');
      console.log(result);
    };
    fetchTransactions();
  }, [reloadUser])
  return (
    <>
      <h1>Hello</h1>
    </>
  )
};

export default Transactions;