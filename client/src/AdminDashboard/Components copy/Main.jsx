import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { MdMoney } from 'react-icons/md'
import {accountInfo} from "../../constants/index"
import {EstatePlans, ForexPlans, StockPlans, CryptoPlans} from "../../constants/InvestmentData"
import Modal from './Modal'

export const MainDash = () => {
  return (
    <div className=''>
        <div className='bg-purple-300 relative mt-20 text-tertiary font-semibold text-2xl lg:text-4xl px-6 py-8 mb-20 rounded-lg'>
          <h1>Hello User!!</h1>
          <span className='absolute top-[-20px] right-[5%] bg-pink-500 rounded-lg p-4'>

          <FaUser className='text-3xl text-white'/>
          </span>
        </div>
      <div className='grid lg:grid-cols-2 mt-10 gap-10'>
        <div className='bg-primary relative font-semibold text-2xl px-6 py-6 rounded-lg float-right '>
          <h6 className='text-[16px] text-secondary'>Total Balance</h6>
          <h1 className='font-normal text-3xl py-2'>$0.00</h1>
          <span className='absolute top-[-20px] right-[5%] bg-white rounded-lg p-4'>

          <MdMoney className='text-3xl text-tertiary'/>
          </span>
        </div>
        <div className='relative bg-primary font-semibold text-2xl px-6 py-6 rounded-lg '>
          <h6 className='text-[16px] text-secondary'>Account</h6>
          <h1 className='font-normal text-3xl py-2'>$0.00</h1>
          <span className='absolute top-[-20px] right-[5%] bg-light rounded-lg p-4'>

          <MdMoney className='text-3xl'/>
          </span>
        </div>
        <div className='relative bg-primary font-semibold text-2xl px-6 py-6 rounded-lg '>
          <h6 className='text-[16px] text-secondary'>Profit</h6>
          <h1 className='font-normal text-3xl py-2'>$0.00</h1>
          <span className='absolute top-[-20px] right-[5%] bg-green-500 rounded-lg p-4'>

          <MdMoney className='text-3xl text-white'/>
          </span>
        </div>
        <div className='relative bg-pink-500 font-semibold text-2xl px-6 py-6 rounded-lg '>
          <h6 className='text-[16px] text-light'>Referral Code</h6>
          <h1 className='font-normal text-xl py-2'>WRBUUNWUSER</h1>
          <span className='absolute top-[-20px] right-[5%] bg-white rounded-lg p-4'>

          <MdMoney className='text-3xl text-tertiary'/>
          </span>
        </div>
      </div>
      
    </div>
  )
}

export const MainDeposit = () => {
  const estate = ""
  const crypto = ""
  const stock = ''
  const [forex, setForex] = useState("");
  const [error, setError] = useState("");
  const [display, setDisplay] = useState("");
  const [showButton, setShowButton] = useState(false)
  const [showModal, setShowModal] = useState(false);

  const [investment, setInvestment] = useState("");
  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState("");


  

  const handleSelect = (e)=>{
    const investmentData = e.target.value
      
      if (investmentData === 'FOREX INVESTMENTS') {
        setForex(ForexPlans)
        setInvestment(investmentData)
      }
      else if (investmentData === 'STOCK & COMMODITIES') {
        setForex(StockPlans)
        setInvestment(investmentData)
      }
      else if (investmentData === 'CRYPTOCURRENCY INVESTMENTS') {
        setForex(CryptoPlans)
        setInvestment(investmentData)
      }
      else if (investmentData === 'REAL ESTATE INVESTMENTS') {
        setForex(EstatePlans)
        setInvestment(investmentData)
      }
      // else if (e.target.value === 'GOLD INVESTMENTS') {
      //   setForex(JSON.stringify(StockPlans))
      // }
      
  }
  
  
  const handlePlans = (e)=>{
      const plans = e.target.value;
      if (plans !== '') {
        setDisplay(ForexPlans)
        setPlan(plans)
        
      }
      else if (plans !== '') {
        setDisplay(StockPlans)
        setPlan(plans)
        
      }
      else if (plans !== '') {
        setDisplay(CryptoPlans)
        setPlan(plans)
      }
      else if (plans !== '') {
        setDisplay(EstatePlans)
        setPlan(plans)
      }
      // else if (e.target.value === 'GOLD INVESTMENTS') {
      //   setForex(JSON.stringify(StockPlans))
      // }
     
  }

  const handleButton = (e)=>{
    const amount = e.target.value
      
      if (amount !== '') {
        setShowButton(true)
        setAmount(amount)
      }
  
  }

  const handleClose =(e)=>{
    setShowModal(false)
  }
    
      const type = 'Deposit'
      const depositData = {
        type,
        investment,
        plan,
        amount
      }

  return (
    <div>
       <Modal open={showModal} input={depositData} close={handleClose}/>

      <div className='mt-10'>
        <form action="" className='lg:max-w-xl mx-auto w-full grid gap-6'>
          <select
          onChange={handleSelect}
                          className="form-select appearance-none
                          bg-white px-4 py-2 lg:p-4 rounded-lg text-primary text-[15px] outline-none
                        "
                        >
                          <option defaultValue>Select Your Investment Plan</option>
                          {accountInfo.map((data)=>(
                            <option key={data.name} value={data.name}>{data.name}</option>
                            
                            ))}
                          
          </select>
          <select
            onChange={handlePlans}
          className={!forex || stock || crypto || estate  ? "hidden" : `className="form-select appearance-none
          bg-white px-4 py-2 lg:p-4 rounded-lg text-primary text-[15px] outline-none
        "`}
          >
            <option defaultValue>Select Your Plan</option>
            {
              forex && (
                forex.map(data=>(
                  <option key={data.name} value={data.name}>{data.name}</option>

                ))
              
              )  || stock &&(
                stock.map(data=>(
                  <option key={data.name} value={data.name}>{data.name}</option>

                ))
              ) || crypto &&(
                crypto.map(data=>(
                  <option key={data.name} value={data.name}>{data.name}</option>

                ))
              )  || estate &&(
                estate.map(data=>(
                  <option key={data.name} value={data.name}>{data.name}</option>

                ))
              )       
              
            }

          </select>

          {
            display && (
              <input
              onChange={handleButton}
              type="number"
              placeholder="Select Amount"
              className="form-select appearance-none
                          bg-white px-4 py-2 lg:p-4 rounded-lg text-primary text-[15px] outline-none
                        "
            />
          ) 
          }
          {
            showButton && (
              <button
                  className="bg-light
                text-white 
                font-semibold uppercase text-sm px-6 py-3 
                rounded shadow hover:shadow-lg outline-none 
                focus:outline-none ml-1 mb-1 ease-linear 
                transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Submit
                </button>
          ) 
          }


        </form>
        {

        }
        {/* <div className='bg-tertiary p-4 mt-10 rounded-lg'>
            <h1 className='font-bold text-lg border-b py-2'>Selected Plan</h1>
            
            <h3 className='py-2 text-[16px]'>{display2.name}</h3> 
            <h3 className='py-2 text-[16px]'>Minimum: {display2.Minimum}</h3>
            <h3 className='py-2 text-[16px]'>Maximum: {display2.Maximum}</h3>
            <h3 className='py-2 text-[16px]'>DailyProfit: {display2.DailyProfit}</h3>
            <h3 className='py-2 text-[16px]'>WeeklyProfit: {display2.WeeklyProfit}</h3>
            <h3 className='py-2 text-[16px]'>MonthlyProfit: {display2.MonthlyProfit}</h3>
            <h3 className='py-2 text-[16px]'>ReferralBonus: {display2.ReferralBonus}</h3>
            <h3 className='py-2 text-[16px]'>Duration: {display2.Duration}</h3>
 
        </div> */}
      </div>
    </div>
  )
}

export const MainWithdraw = (children) => {

  const [showInput, setShowInput] = useState(false)
  const [showSelect, setShowSelect] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [showModal, setShowModal] = useState(false);
  
  
  const [WithdrawAmmount, setWithdrawAmmount] = useState("");
  const [WithdrawWallet, setWithdrawWallet] = useState("");
  const [WithdrawAddress, setWithdrawAAddress] = useState("");



  const handleInput = (e)=>{
    const amount = e.target.value
      
      if (amount !== '') {
        setShowInput(true)
        setWithdrawAmmount(amount)
      }
 
  }
  const handleSelect = (e)=>{
    const wallet = e.target.value
      
      if (wallet !== '') {
        setShowSelect(true)
        setWithdrawWallet(wallet)
      }

  }
  const handleButton = (e)=>{
    const address = e.target.value
      
      if (address !== '') {
        setShowButton(true)
        setWithdrawAAddress(address)

      }
      
      
    }

  const handleClose =(e)=>{
setShowModal(false)
  }

  const type = 'Withdraw'
  const withdrawalData = {
    type,
        WithdrawAmmount,
    WithdrawWallet,
    WithdrawAddress
  }

  return (
    <div className=''>
       <Modal open={showModal} input={withdrawalData} close={handleClose}/>
        <form action="">
          <div className="mb-3 w-full mt-10">
                  <input
                  onChange={handleInput}
                    type="number"
                    placeholder="Select Amount"
                    className="form-select appearance-none
                block
                w-full
                px-3
                mb-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  />
                  {
                    showInput && (
                      <select
                      onChange={handleSelect}
                        className="form-select appearance-none
                      block
                      mb-5
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option defaultValue>Choose Wallet</option>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Etherium">Etherium</option>
                        <option value="Doge Coin">Doge Coin</option>
                        <option value="USDT">USDT</option>
                      </select>

                    ) 
                  }

                  {
                    showSelect && (

                      <input
                      onChange={handleButton}
                        type="text"
                        placeholder="Enter Wallet Address"
                        className="form-select appearance-none
                        block
                        mb-5
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-label="Default select example"
                      />
                    )

                  }
                  {
                    showButton && (

                      <button
                      onClick={()=>{
                        setShowModal(true)
                        // console.log(withdrawalData);

                      }}
                type="button"
                className=" w-full
                  px-6
                  py-2.5
                  bg-blue-600
                  text-white
               font-bold uppercase text-sm 
               rounded shadow hover:shadow-lg outline-none 
               focus:outline-none ml-1 mb-1 ease-linear 
               transition-all duration-150"
              >
                Submit
              </button>
                    )

                  }
                </div>
        </form>
    </div>
  )
}