import React from 'react'

import { DefaultFooter } from './lib/Footer'
import LegalLinks from './lib/LegalLinks'

export default () => (
  <DefaultFooter
    copyright={<LegalLinks termsAndConditions={copyright} />}
    links={<LegalLinks termsAndConditions={termsAndConditions} />}
  />
)
