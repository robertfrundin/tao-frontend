import tonApi from 'src/common/api/ton'
import callUntillSuccess from 'src/common/utils/callUntillSuccess'

async function getTransactionEvent (hash: string){
  return await tonApi.events.getEvent(hash)
}

//function checks if the action with multisig data has already appeared
async function checkMultisigAction(msgHash: string) {

  return new Promise<string>((res, rej)=>{

    getTransactionEvent(msgHash).then(({actions})=>{

      const actionWithMultisigInfo = actions.find((action)=>action.ContractDeploy)

      if(!actionWithMultisigInfo?.ContractDeploy?.address) 
      {
        rej('no action with multisig yet')
      }
      else {
        res(actionWithMultisigInfo?.ContractDeploy?.address)
      }

    })
  })

}

export async function getMultisigAdress(msgHash: string) {
  console.log('waiting till Multisig data appears in the transaction')
  return callUntillSuccess(()=>checkMultisigAction(msgHash))
}

