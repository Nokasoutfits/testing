import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const MainDash = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/admin")
      .then((res) => {
        const userList = res.data.users;
        setUsers(userList);
      })
      .catch((err) => console.log(err, " fetching account"));
  }, []);

  const handleDelete = (userId) => {
    axios.delete(`/api/admin/user/${userId}`);
  };

  return (
    <div className=''>
      
        <div className='bg-purple-300 relative mt-20 px-6 py-8 mb-20 rounded-lg'>
          <h1 className=' text-tertiary font-semibold text-2xl lg:text-4xl'>Hello Boss!!</h1>
          <p className='text-primary pt-3'>We have a total of <b>{users.length}</b>  registered users..!</p>
          <span className='absolute top-[-20px] right-[5%] bg-pink-500 rounded-lg p-4'>

          <FaUser className='text-3xl text-white'/>
          </span>
        </div>
        <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
            <table className="overflow-hidden min-w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-primary  font-medium bg-gray-50">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                      />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-2 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Plans
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Acc. Balance
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Intrest
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Bonus
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Ref. Bonus
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Referrer
                  </th>
                  

                  <th scope="col" className="px-2 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {!users ? (
                <h1>No Registerd Users</h1>
              ) : (
                users.map((list) => {
                  return (
                    <tbody key={list._id}>
                      <tr className="bg-white border-b  hover:bg-gray-50 ">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                            />
                            <label className="sr-only">checkbox</label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          {list._id}
                        </th>
                        <td className="px-2 py-4">{list.userName}</td>
                        <td className="px-2 py-4">{list.email}</td>
                        <td className="px-2 py-4">{list.initialPlan}</td>
                        <td className="px-2 py-4">{list.account}</td>
                        <td className="px-2 py-4">{list.intrest}</td>
                        <td className="px-2 py-4">{list.bonus}</td>
                        <td className="px-2 py-4">{list.refbonus}</td>
                        <td className="px-2 py-4">{list.referrer}</td>
                        <td className="flex items-center px-6 py-4 space-x-3">
                          <Link
                            to={`/admin/dashboard/user/edit/${list._id}`}
                            className="font-medium text-white bg-blue-500 p-2  hover:underline"
                          >
                            Mange
                          </Link>
                          <button
                            onClick={() => {
                              handleDelete(list._id);
                            }}
                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })
              )}
            </table>
          </div>
      
    </div>
  )
}

export const AdminDeposits = () => {
  const [deposits, setDeposits] = useState([]);
  
  useEffect(() => {
    axios
      .get("/api/admin/deposits")
      .then((res) => {
        const depositList = res.data.deposits;
        setDeposits(depositList);
      })
      .catch((err) => console.log(err, " fetching account"));
  }, []);

  const handleDelete = (userId) => {
    axios.delete(`/api/admin/deposit/${userId}`);
  };

  return (
    <div>
       <div className="relative w-full border overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="overflow-hidden min-w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 font-normal bg-gray-50 ">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                      />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-2 py-3">
                    User
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Investment
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Plans
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Wallet
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Manage
                  </th>
                </tr>
              </thead>
              {!deposits
                ? "No deposits yet"
                : deposits.map((list) => {
                    return (
                      <tbody key={list._id}>
                        <tr className="bg-white border-b">
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-search-1"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                              />
                              <label className="sr-only">checkbox</label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {list.user}
                          </th>
                          <td className="px-2 py-4">{list.amount}</td>
                          <td className="px-2 py-4">{list.investment}</td>
                          <td className="px-2 py-4">{list.plan}</td>
                          <td className="px-2 py-4">{list.wallet}</td>
                          <td className="px-2 py-4">
                          {list.status === "Pending" ? (<h1 className='text-black text-[.7rem] md:text-[1rem] py-[.2rem]'><span className='font-bold text-yellow-500'>{list.status}</span> </h1>)
                  : list.status === "Declined" ? (<h1 className='text-red-500 text-[.7rem] md:text-[1rem] py-[.2rem]'><span className='font-bold text-red-500'>{list.status}</span> </h1>)
                  : (<h1 className='text-black text-[.7rem] md:text-[1rem] py-[.2rem]'><span className='font-bold text-green-500'>{list.status}</span> </h1>)
                }
                            </td>
                          <td className="px-2 flex"> 
                            <Link
                            to={`/admin/dashboard/deposit/edit/${list._id}`}
                            className="font-medium text-white bg-blue-500 p-2  hover:underline"
                          >
                            Manage
                          </Link>
                          <button
                            onClick={() => {
                              handleDelete(list._id);
                            }}
                            className="font-medium text-white p-2 ml-1 bg-red-500 hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                        </tr>

                      </tbody>
                    );
                  })}
            </table>
          </div>
    </div>
  )
}

export const MainWithdraw = (children) => {

  const [withdrawals, setWithdrawals] = useState([]);
  useEffect(() => {
    axios
      .get("/api/admin/withdrawls")
      .then((res) => {
        const withdrawList = res.data.withdrawals;
        setWithdrawals(withdrawList);
      })
      .catch((err) => console.log(err, " fetching account"));
  }, []);
  const handleDelete = (userId) => {
    axios.delete(`/api/admin/withdraw/${userId}`);
  };

  return (
    <div className=''>
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="overflow-hidden min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 font-normal bg-gray-50">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                      />
                      <label  className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-2 py-3">
                    User
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Wallet
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Manage
                  </th>
                </tr>
              </thead>
              {!withdrawals
                ? "No deposits yet"
                : withdrawals.map((list) => {
                    return (
                      <tbody key={list._id}>
                        <tr className="bg-white border-b">
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-search-1"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                              />
                              <label
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {list.user}
                          </th>
                          <td className="px-2 py-4">{list.withdrawAmount}</td>
                          <td className="px-2 py-4">{list.walletAddress}</td>
                          <td className="px-2 py-4">{list.wallet}</td>
                          <td className="px-2 py-4">
                          {list.status === "Pending" ? (<h1 className='text-black text-[.7rem] md:text-[1rem] py-[.2rem]'><span className='font-bold text-yellow-500'>{list.status}</span> </h1>)
                  : list.status === "Declined" ? (<h1 className='text-red-500 text-[.7rem] md:text-[1rem] py-[.2rem]'><span className='font-bold text-red-500'>{list.status}</span> </h1>)
                  : (<h1 className='text-black text-[.7rem] md:text-[1rem] py-[.2rem]'><span className='font-bold text-green-500'>{list.status}</span> </h1>)
                }
                            </td>
                          <td className="px-2 flex"> 
                            <Link
                            to={`/admin/dashboard/withdraw/edit/${list._id}`}
                            className="font-medium text-white p-2 bg-blue-500 hover:underline"
                          >
                            Manage
                          </Link>
                          <button
                            onClick={() => {
                              handleDelete(list._id);
                            }}
                            className="font-medium text-white ml-1 p-2 bg-red-500 hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                       </tr>
                      </tbody>
                    );
                  })}
            </table>
          </div>
    </div>
  )
}