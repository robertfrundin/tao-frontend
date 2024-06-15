import { FC} from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import styles from './AccountList.module.css';
import { useTonAddress } from "@tonconnect/ui-react";
import { MULTISIG_LS_KEY } from "src/common/consts";

const AccountList: FC = () => {

  const userFriendlyAddress = useTonAddress();

  const userMultisigAdress = localStorage.getItem(MULTISIG_LS_KEY)

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
              <Input type="text" value={userMultisigAdress} style={{width: 240}}/>
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
