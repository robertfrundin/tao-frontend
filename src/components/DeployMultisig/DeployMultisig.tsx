import { SendTransactionRequest, SendTransactionResponse, useTonConnectUI } from "@tonconnect/ui-react";
import { FABRIC_ADRESS } from "src/common/consts";
import { useCallback } from "react";
import { convertToBase64 } from "src/common/utils/converters";

const DeployMultisig: React.FC = ()=>{
  
  const [tonConnectUI] = useTonConnectUI();
  console.log(btoa("Deploy new Safe"))

  const handeClick = useCallback(()=>{

    const message: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 360,
      messages: [{
        address: FABRIC_ADRESS,
        amount: '200000000',
        payload: convertToBase64("Deploy new Safe")
      }]
        
    }
    tonConnectUI.sendTransaction(message).then((res: SendTransactionResponse)=>{
      console.log(res)
      localStorage.setItem('USER_MULTISIG_ADRESS', res.boc)
    })
  },[tonConnectUI])

  return (
    <button onClick={handeClick}>
        Отправить запрос на деплой
    </button>
  )
}

export default DeployMultisig

