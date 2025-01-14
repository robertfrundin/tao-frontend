import { FC} from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import styles from './AccountList.module.css';
import { toUserFriendlyAddress} from "@tonconnect/ui-react";
import { MULTISIG_LS_KEY } from "src/common/consts";
import AddOwnerForm from "src/components/AddOwnerForm";
import useTonWalletFromApi from "src/common/hooks/useTonWalletFromApi";


const AccountList: FC = () => {
  const userMultisigAdress = localStorage.getItem(MULTISIG_LS_KEY)
  const multisigData = useTonWalletFromApi(userMultisigAdress)

  return (
    <Box paddingX={'15px'}>
      <Typography variant="h6" marginBottom={'5px'}>
        My multisig accounts:
      </Typography>
      <Box className={styles.acc_list}>
        {userMultisigAdress && (

          <Box key={userMultisigAdress} className={styles.acc_item} display='flex' flexDirection={"column"}>
            <Typography variant="body2">
              <Input type="text" value={toUserFriendlyAddress(userMultisigAdress)} className={styles.tonAdderss}/>
            </Typography>
            <Typography variant="body2">
              Balance:
              {multisigData?.balance}
            </Typography>
            <Box className={styles.actions}>
              <Button variant="contained" size="small">
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
