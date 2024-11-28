import React, { useState } from 'react'
import { FaCopy } from 'react-icons/fa'
import Loading from '../../components/Loading'
import { isAuthenticated } from '../../constants/auth'
import { sendDeposit, sendWithdraw } from '../config'
import CopyToClipboard from "react-copy-to-clipboard";
import { ErrorMessage, SuccessMessage } from '../../components/Message'


const Modal = ({input, open, close}) => {
  const [wallet, setWallet] =useState("")
  const [network, setNetwork] =useState("")
  const [walletAddress, setWalletAddress] =useState("")
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  if (!open) {
    return null
  }

  

  const handleWalletChange = (e) =>{
    const selectedWallet = e.target.value
    console.log(selectedWallet);
    setWallet(selectedWallet)
    if (selectedWallet === "Bitcoin") {
      setWalletAddress("bc1qp4z98lqx92n7rsdszaek0wjsmssdt480gqhzmx")
      setNetwork("BTC")
    }
    else if (selectedWallet === "Etherium") {
      setWalletAddress("0x072273B2A6c373297cC5eDDdADDd7CA2bf7B5b0B")
      setNetwork("ERC20")
    }
    else if (selectedWallet === "Doge-coin") {
      setWalletAddress("DBj7FjZzRG9dbLEAo5EqQRDVGuQsV5aGJW")
      setNetwork("DOGE")
    }
    else if (selectedWallet === "USDT") {
      setWalletAddress("0x072273B2A6c373297cC5eDDdADDd7CA2bf7B5b0B")
      setNetwork("ERC20")
    }

  }

  const handleWidthdrawSubmit = (e) =>{
    e.preventDefault();

    const data = {
      type: input.type,
      withdrawAmount:input.WithdrawAmmount,
      wallet: input.WithdrawWallet,
      walletAddress: input.WithdrawAddress,
    }
    console.log(data)
    if (isAuthenticated()) {
      setLoading(true)
      setTimeout(() => {
        close()
      }, 1000);
      sendWithdraw(data)
      .then((resopnse) => {
        console.log("Deposit success:", resopnse);
            setLoading(false);
            setSuccess(resopnse.data.successMessage);
            // setCopy(true);
          })
          .catch((err) => {
            console.log("Axios Error: ", err);
            setLoading(false);
            setError(err.response.data.errorMessage);
          });
      }
  }
  const handleDepositSubmit = (e) =>{
    e.preventDefault();

    const data = {
      type: input.type,
      investment:input.investment,
      plan: input.plan,
      amount: input.amount,
      wallet: wallet
    }

    
    console.log(data)
    if (isAuthenticated()) {
      setLoading(true)
      setTimeout(() => {
        close()
      }, 1000);
      sendDeposit(data)
      .then((resopnse) => {
        console.log("Deposit success:", resopnse);
            setLoading(false);
            setSuccess(resopnse.data.successMessage);
            // setCopy(true);
          })
          .catch((err) => {
            console.log("Axios Error: ", err);
            setLoading(false);
            setError(err.response.data.errorMessage);
          });
      }

    
  }
 
  
  

  return (
    <div>
      {loading && <Loading/>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
      {open &&
      (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-0 inset-0 z-50 ">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl px-6">
                        {/*content*/}

                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white ">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5  rounded-lg">
                            <h3 className="text-xl font-semibold text-primary">
                              {input.type} Statement
                            </h3>

                          </div>
                          {/*body*/}
                          {
                            input.type === "Withdraw" && (

                          <div className='px-4'>
                            <p className='text-primary text-sm py-2'> Amount: {input.WithdrawAmmount}
                            </p>
                            <p className='text-primary text-sm py-2'> Wallet: {input.WithdrawWallet}
                            </p>
                            <p className='text-primary text-sm py-2'> Wallet Add.:{input.WithdrawAddress}
                            </p>
                          </div>
                            )

                          }
                          {
                            input.type === "Deposit" && (

                          <div className='px-4'>
                            <p className='text-primary text-sm py-2'> Investment: {input.investment}
                            </p>
                            <p className='text-primary text-sm py-2'> Plan: {input.plan}
                            </p>
                            <p className='text-primary text-sm py-2'> Amount:{input.amount}
                            </p>
                            <select
                                onChange={handleWalletChange}
                                className="form-select appearance-none
                                block
                                mt-2
                                w-full
                                px-3
                                py-1.5
                                text-sm
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-green-600
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example"
                              >
                                <option defaultValue>Choose Payment Wallet</option>
                                <option value="Bitcoin">Bitcoin</option>
                                <option value="Etherium">Etherium</option>
                                <option value="Doge-coin">Doge Coin</option>
                                <option value="USDT">USDT</option>
                              </select>
                              <div>
                                <p className='text-tertiary text-sm pt-4'>Copy the wallet address below and make your payment.</p>
                                <p className='text-tertiary text-sm py-4'>Network: {network}</p>
                                {
                                  walletAddress &&(
                                    <p className='text-green-600 text-sm relative border shadow-lg'>{walletAddress} 
                                    <CopyToClipboard text={walletAddress}>
                          <button
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: ".3rem .8rem",
                              borderRadius: "10px",
                              color: "black",
                              float: "right",
                            }}
                            // onClick={() => {
                            //   setCopied("Wallet Address Copied Successfully!!");
                            
                            // }}
                          >
                            <FaCopy className='absolute top-[-10px] right-0 bg-white p-2 text-4xl text-tertiary hover:text-green-500'/>
                          </button>
                        </CopyToClipboard>
                                    </p>
                                    
                                  )
                                }
                              </div>
                          </div>
                            )

                          }
                          
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent  uppercase px-6 py-2 text-xs  mr-1 mb-1 "
                              type="button"
                              onClick={close}
                            >
                              Close
                            </button>
                            {
                              input.type === "Withdraw" && (
                                <button
                                  className="bg-blue-500 text-white uppercase text-sm px-4 py-2 rounded"
                                  type="button"
                                  onClick={handleWidthdrawSubmit}
                                >
                                  Send
                                </button>
                              )

                            }
                            {
                              input.type === "Deposit" && (
                                <button
                                  className="bg-green-600 text-white uppercase text-sm px-4 py-2 rounded"
                                  type="button"
                                  onClick={handleDepositSubmit}
                                >
                                  Send
                                </button>
                              )

                            }
                          </div>
                        </div>
                      </div>
                    </div>
        
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" ></div>
        </>
      )
      
    }
                    
            
    </div>
  )
}

export default Modal