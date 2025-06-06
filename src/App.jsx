import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'

function App() {
  const [amount, setAmount]= useState(0)
  const [form, setForm] = useState('usd')
  const [to, setTo]= useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(form);
  const options = Object.keys(currencyInfo)
  const swap = ()=>{
    setForm(to)
    setTo(form)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert =()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex 
    flex-wrap justify-center items-center 
    bg-cover bg-no-repeat'
    style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJsdXUlMjB3YWxsJTIwY29sb3J8ZW58MHx8fHwxNjg5NTQ1NzA0&ixlib=rb-4.0.3&q=80&w=1080)'}}
    >
      <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60
          rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e)=>{
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) =>setForm(currency)}
                  onAmountChange={(amount)=>setAmount(amount)}
                  selectedCurrency={form}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                className='absolute left-1/2 -translate-x-1/2
                 -translate-y-1/2 border-2 border-white
                 rounded-md bg-blue-600 text-white 
                 px-2 py-0.5'
                 onClick={swap}
                >Swap</button>
              </div>
              <div className='w-full mb-1'>
                <InputBox
                  label="to"
                  currencyOptions={options}
                  amount={convertedAmount}
                  onCurrencyChange={(currency)=>setTo(currency)}
                  selectedCurrency={to}
                  amountDisabled = {true}

                />
              </div>
              <button
              
              type='submit'
              className='w-full bg-blue-600 text-white px-4
              py-3 rounded-lg'
              >Convert {form.toUpperCase()} To {to.toUpperCase()}</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default App
