"use client"

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'

function ThemeProvider({children}) {

    const{theme} = useContext(ThemeContext)
    const [mount, setMount] = useState(false)
    useEffect(() => {
      setMount(true)
    })

    if(mount) {
      return (
        <div className={theme}>{children}</div>
      )
    }
  
}

export default ThemeProvider