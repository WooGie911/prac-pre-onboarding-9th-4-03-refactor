import { TableItem } from '../Type'

export const filterTradeByDate = (
  initTrade: TableItem[] | undefined | null,
  today: string
) => {
  if (initTrade)
    return initTrade.filter(trade => trade.transaction_time.includes(today))
  return []
}

export const filterTradeByCustomerName = (
  initTrade: TableItem[],
  name: string
) => {
  return initTrade.filter(trade =>
    trade.customer_name.toUpperCase().includes(name.toUpperCase())
  )
}

export const filterTradeByStatus = (initTrade: TableItem[], status: string) => {
  switch (status) {
    case 'completed':
      return initTrade.filter(trade => trade.status === true)
    case 'processing':
      return initTrade.filter(trade => trade.status === false)
    default:
      return initTrade
  }
}
