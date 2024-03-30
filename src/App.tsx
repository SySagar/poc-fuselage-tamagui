import '@tamagui/core/reset.css'
import { TamaguiProvider} from '@tamagui/core';
import {SelectDemo} from './lib/Select'
import './App.css'

import config from '../tamagui.config'

// type Conf = typeof tamaguiConfig
// declare module '@tamagui/core' {
//   interface TamaguiCustomConfig extends Conf {}
// }

function App() {
  
  return (
    <TamaguiProvider config={config}>
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    
    }}
    >
      <SelectDemo />
    </div>
    </TamaguiProvider>
  )
}

export default App
