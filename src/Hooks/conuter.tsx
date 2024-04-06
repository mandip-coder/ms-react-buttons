import {useState} from 'react'
const useCounter=()=>{
    const [count,setCounter]=useState(0)

    const increament=()=>setCounter(count+1)
    const decreament=()=>setCounter(count-1)

    return{count,increament,decreament}
}
export {useCounter}