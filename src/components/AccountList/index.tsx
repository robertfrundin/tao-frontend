import { FC} from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import styles from './AccountList.module.css';
import { useTonAddress, toUserFriendlyAddress, SendTransactionRequest, SendTransactionResponse, useTonConnectUI } from "@tonconnect/ui-react";
import { MULTISIG_LS_KEY } from "src/common/consts";
import { useCallback } from "react";
import { convertToBase64 } from "src/common/utils/converters";
import { Cell } from "@ton/ton";
import { getTransactionData } from "src/common/api/ton";
import { addMultisigUser } from "src/common/api/ton/addMultisigUser";

const AccountList: FC = () => {

  const userFriendlyAddress = useTonAddress();

  const userMultisigAdress = localStorage.getItem(MULTISIG_LS_KEY)

  const [tonConnectUI] = useTonConnectUI();

  const handeClick = useCallback((address: string)=>{

    const message: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 360,
      messages: [{
        address: address,
        amount: '200000000',
        payload: convertToBase64(JSON.stringify({
          add: {
            owner: '0QCvMHYIz16Ws8qFCH7kpcWMCaMzRur2Xyr1XqW4KsxqejTK'
          }
        }))
      }]
    }

    tonConnectUI.sendTransaction(message).then(async ({boc}: SendTransactionResponse)=>{
      const messageCell = Cell.fromBase64(boc)
      const messageHash = messageCell.hash().toString('hex')

      const {hash} = await getTransactionData(messageHash)

      const addedOwner = await addMultisigUser(hash)

      console.log(addedOwner)
    })
  },[tonConnectUI])

  return (
    <Box paddingX={'15px'}>
      {userFriendlyAddress}
      <Typography variant="h6" marginBottom={'24px'}>
        My multisig accounts:
      </Typography>
      <Box className={styles.acc_list}>
        {userMultisigAdress && (
          <Box key={userMultisigAdress} className={styles.acc_item} display='flex' alignItems='center'>
            <Typography variant="body2">
              <Input type="text" value={toUserFriendlyAddress(userMultisigAdress)} style={{width: 240}}/>
            </Typography>
            <Box className={styles.actions}>
              <Button variant="contained" size="small" onClick={()=>{
                handeClick(userMultisigAdress)
              }}>
                  Add owner
              </Button>
              <Button variant="contained" size="small">
                  Initiate trasaction
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AccountList;
