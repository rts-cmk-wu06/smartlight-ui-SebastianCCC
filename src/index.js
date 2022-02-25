//import packages
import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

//import tailwind
import './css/tailwind.css'

//import a reset style sheet
import './css/reset.css'

//import components
import App from './App'

//import StateProvider
import { StateProvider } from './hooks/stateContext'

Sentry.init({
  dsn: 'https://54a4ed18d45b4c5a865f5d4d1c4436bb@o1140423.ingest.sentry.io/6197622',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <div className="w-[375px] bg-blue">
        <App />
      </div>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
