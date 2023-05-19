import { createContext, useState } from 'react'

type Props = { children: JSX.Element | Array<JSX.Element> }

export const ShoppingCartContext = createContext<ICountContext>({
  count: 0,
  setCount: () => {},
})

export const ShoppingCartProvider = ({ children }: Props): JSX.Element => {
  const [count, setCount] = useState<number>(0)
  console.log('COUNT:', count)
  const contextValue: ICountContext = { count, setCount }
  return <ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>
}
