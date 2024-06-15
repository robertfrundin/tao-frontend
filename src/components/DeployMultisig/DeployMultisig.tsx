import { SendTransactionRequest, SendTransactionResponse, useTonConnectUI } from "@tonconnect/ui-react";
import { FABRIC_ADRESS, MULTISIG_LS_KEY } from "src/common/consts";
import { useCallback } from "react";
import { convertToBase64 } from "src/common/utils/converters";
import { Cell } from "@ton/ton";
import { getTransactionData } from "src/common/api/ton";
import { getMultisigAdress } from "src/common/api/ton";
import { Button } from "@mui/material";
import styles from './DeployMultisig.module.css';

const DeployMultisig: React.FC = ()=>{
  
  const [tonConnectUI] = useTonConnectUI();

  const handeClick = useCallback(()=>{

    const message: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 360,
      messages: [{
        address: FABRIC_ADRESS,
        amount: '200000000',
        payload: convertToBase64("Deploy new Safe")
      }]
    }

    tonConnectUI.sendTransaction(message).then(async ({boc}: SendTransactionResponse)=>{
      const messageCell = Cell.fromBase64(boc)
      const messageHash = messageCell.hash().toString('hex')

      const {hash} = await getTransactionData(messageHash)

      const multisigAdress = await getMultisigAdress(hash)

      console.log(multisigAdress)

      localStorage.setItem(MULTISIG_LS_KEY, multisigAdress)

    })
  },[tonConnectUI])

  return (
    <Button className={styles.button} onClick={handeClick} size="small">
        + multisig account
    </Button>
  )
}

export default DeployMultisig

