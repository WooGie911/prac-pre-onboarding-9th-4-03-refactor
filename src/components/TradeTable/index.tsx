/* eslint-disable array-callback-return */
import { TableItem } from '../../Type'

interface ITradeTableProps {
  trade: TableItem[]
}

function TradeTable({ trade }: ITradeTableProps) {
  return trade.map((item: TableItem) => {
    ;<div>
      <div>{item.id}</div>
      <div>{item.currency}</div>
      <div>{item.status}</div>
    </div>
  })
}

export default TradeTable
