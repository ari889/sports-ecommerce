'use client'

import React from 'react';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressbarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar height='2px' color='#009FAD' options={{ showSpinner: false }} shallowRouting />
    </>
  )
}

export default ProgressbarProvider
