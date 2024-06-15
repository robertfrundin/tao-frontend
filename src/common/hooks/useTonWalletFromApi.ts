import { useEffect, useState } from "react"
import { getWalletInfo } from "src/common/api/ton/getWalletInfo"
import { Account } from "tonapi-sdk-js"

export default function (adress: string | null){
  if(!adress) return

  const [acc, setAcc]= useState<Account | undefined>()

  useEffect(()=>{
    getWalletInfo(adress).then((res: Account)=>{
      console.log(res)
      setAcc(res)
    })
  },[adress])

  return acc

}
