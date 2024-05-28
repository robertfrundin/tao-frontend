import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  
  return (
    <TonConnectUIProvider manifestUrl={`https://${window.location.host}/tonconnect-manifest.json`}>
      <div>
        <h1>
          TAO FRONTEND
        </h1>
        <TonConnectButton />
        <img src='src/images/liza.jpg' alt="Рыжий кот Кекс лежит у ноутбука."/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App
