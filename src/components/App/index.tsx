import { TonConnectButton, TonConnectUIProvider} from '@tonconnect/ui-react';
import DeployMultisig from 'components/DeployMultisig/DeployMultisig';

function App() {
  
  return (
    <TonConnectUIProvider manifestUrl={`http://178.154.228.248/tonconnect-manifest.json`}>
      <div>
        <h1>
          TAO FRONTEND
        </h1>
        <TonConnectButton style={{margin: 'auto'}} />
        <DeployMultisig/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App
