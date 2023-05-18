type Path = {
  home: string,
  notFound: string,
  signin: string,
  myOrder: string,
  myOrders: string,
  myAccount: string,
}

// could use Record<string, string> but this is more explicit and easier to import

export const paths: Path = {
  home: '/',
  notFound: '/*',
  signin: '/signin',
  myOrder: '/my-order',
  myOrders: '/my-orders',
  myAccount: '/my-account',
}
