/* eslint-disable array-callback-return */
import { TableItem } from '../../Type'

function TradeTable(props: { trade: TableItem[] }) {
  const { trade } = props
  return trade.map((item: TableItem) => {
    ;<div>
      <div>{item.id}</div>
      <div>{item.currency}</div>
      <div>{item.status}</div>
    </div>
  })
}

export default TradeTable
