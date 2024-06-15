import { FC, useEffect, useState } from "react";
import { Wallet } from "src/types";
import {appAPI} from "src/api";
import { Box, Button, Input, Typography } from "@mui/material";
import styles from './AccountList.module.css';
import { useTonAddress } from "@tonconnect/ui-react";

const AccountList: FC = () => {
  const [accounts, setAccounts] = useState<Wallet[]>()

  const fetchAccounts = async () => {
    const accountsResponse = await appAPI.requestAccsMock()
    setAccounts(accountsResponse)
  }

  const userFriendlyAddress = useTonAddress();
  
  useEffect(()=>{
    fetchAccounts()
  }, [])

  return (
    <Box paddingX={'15px'}>
      {userFriendlyAddress}
      <Typography variant="h6" marginBottom={'8px'}>
        My multisig accounts:
      </Typography>
      <Box className={styles.acc_list}>
        {accounts?.map((account)=>{
          return (
            <Box key={account.address} className={styles.acc_item} display='flex' alignItems='center'>
              <Typography variant="body2">
                <Input type="text" value={account.address}/>
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
          );
        })}
      </Box>
    </Box>
  );
};

export default AccountList;
