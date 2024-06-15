import tonApi from 'src/common/api/ton';

export async function getWalletInfo (accountId: string){
  return await tonApi.accounts.getAccount(accountId)
}
