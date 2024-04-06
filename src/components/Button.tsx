import * as React from 'react'
import { ReactNode } from 'react'
type PropsType={
    children:ReactNode

}

const Button = ({children}:PropsType) => {
  return (
    <button>
        {children}
    </button>
  )
}

export {Button}
