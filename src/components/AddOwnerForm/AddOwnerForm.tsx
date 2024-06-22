import { Box, Button} from "@mui/material"
import { Cell } from "@ton/ton"
import { SendTransactionRequest, SendTransactionResponse, useTonConnectUI } from "@tonconnect/ui-react"
import { useCallback, useRef } from "react"
import { getTransactionData } from "src/common/api/ton"
import {getTransactionEvent } from "src/common/api/ton/addMultisigUser"
import { convertToBase64} from "src/common/utils/converters"
import { CreateVoteContractRequest, Props } from "./types"
import { Builder } from "@ton/ton"
const AddOwnerForm: React.FC<Props> = ({multisigAdress})=>{

  const [tonConnectUI] = useTonConnectUI()

  const inputRef=useRef<HTMLInputElement>(null)

  const handeSumbit = useCallback(()=>{

    const newOwnerAdress = inputRef.current?.value

    console.log(newOwnerAdress)

    if (!newOwnerAdress) return

    const payload: CreateVoteContractRequest = {
      ops:{
        0: {
          add: {
            owner: newOwnerAdress
          }
        }
      },
      count: 1
    }

    const builder = new Builder()

    const formatedPayload = convertToBase64(JSON.stringify(payload))

    console.log(formatedPayload)

    const message: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 360,
      messages: [{
        address: multisigAdress,
        amount: '200000000',
        payload: formatedPayload,
      }]
    }
    
    tonConnectUI.sendTransaction(message).then(async ({boc}: SendTransactionResponse)=>{
      const messageCell = Cell.fromBase64(boc)
      const messageHash = messageCell.hash().toString('hex')
    
      const {hash} = await getTransactionData(messageHash)
      console.log('transaction hash', hash)

      const event = await getTransactionEvent(hash)

      console.log(event)
    
      // //   const addedOwner = await addMultisigUser(hash)
    
    //   console.log(addedOwner)
    })
  },[multisigAdress, tonConnectUI, inputRef])
      
  return(
    <Box>
      <input ref={inputRef} />
      <Button variant="contained" size="small" type="submit" onClick={handeSumbit}>
                  Add owner
      </Button>
    </Box>
  )
}

export default AddOwnerForm
