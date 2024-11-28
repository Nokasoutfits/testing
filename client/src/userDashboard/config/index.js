import axios from "axios"


export const sendWithdraw = async (data) =>{
  const config = {
      headers: {
          "Content-Type": "application/json"
      }
  }

  const response = await axios.post("/api/withdraw", data, config);
  return response
}


export const sendDeposit = async (data) =>{
  const config = {
      headers: {
          "Content-Type": "application/json"
      }
  }

  const response = await axios.post("/api/deposit", data, config);
  return response
}

export const withdrawHistory = async () =>{
  const response = await axios.get("/api/withdraw");
  return response
}

export const depositHistory = async () =>{
  const response = await axios.get("/api/deposit");
  return response
}