import { createContext, useState } from 'react'

type Props = { children: JSX.Element | Array<JSX.Element> }
export interface CountContext {
  count: number;
  setCount: (count: number) => void;
}
export interface ProductContext {
  openProductDetail?: () => void;
  closeProductDetail?: () => void;
  isProductDetailOpen?: boolean;
}

export const ShoppingCartContext = createContext<CountContext | ProductContext>({
  count: 0,
  setCount: () => {},
  openProductDetail: () => {},
  closeProductDetail: () => {},
  isProductDetailOpen: false,
})

export const ShoppingCartProvider = ({ children }: Props): JSX.Element => {
  const [count, setCount] = useState<number>(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState<boolean>(false)

  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  const countContextValue: CountContext = { count, setCount }
  const productContextValue: ProductContext = { openProductDetail, closeProductDetail, isProductDetailOpen }

  return <ShoppingCartContext.Provider value={{ ...countContextValue, ...productContextValue }}>{children}</ShoppingCartContext.Provider>
}
