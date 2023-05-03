import { TableItem } from '../../Type'

export const sortByIDASC = (initTrade: TableItem[]) => {
  return initTrade.sort((now, other) => Number(now.id) - Number(other.id))
}

export const sortByIDDESC = (initTrade: TableItem[]) => {
  return initTrade.sort((now, other) => Number(other.id) - Number(now.id))
}

export const sortByTransactonTimeASC = (initTrade: TableItem[]) => {
  return initTrade.sort((now, other) =>
    now.transaction_time.localeCompare(other.transaction_time)
  )
}

export const sortByTransactonTimeDESC = (initTrade: TableItem[]) => {
  return initTrade.sort((now, other) =>
    other.transaction_time.localeCompare(now.transaction_time)
  )
}
