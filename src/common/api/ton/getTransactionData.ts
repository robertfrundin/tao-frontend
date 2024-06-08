import callUntillSuccess from 'src/common/utils/callUntillSuccess'
import tonApi from 'src/common/api/ton'

export async function getTransactionData(msgHash: string) {
  console.log('waiting till the transaction appers in Ton network')
  return callUntillSuccess(()=>tonApi.blockchain.getBlockchainTransactionByMessageHash(msgHash), 10)
}
