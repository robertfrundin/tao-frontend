import { TonConnectButton} from '@tonconnect/ui-react';
import { Box } from '@mui/material';
import DeployMultisig from 'src/components/DeployMultisig/DeployMultisig';
import styles from './Content.module.css'
import AccountList from 'src/components/AccountList';

const Content = () => {
  return (
    <Box className={styles.layout}>
      <Box display='flex' justifyContent='center'>
        <TonConnectButton style={{ float: "right" }}/>
      </Box>
      <DeployMultisig/>
      <AccountList/>
      <Box display='flex' paddingX={'15px'}>
        <DeployMultisig/>
      </Box>
    </Box>
  )
}

export default Content
