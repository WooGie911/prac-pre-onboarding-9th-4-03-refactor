/* eslint-disable array-callback-return */
import { Tr, Td } from '@chakra-ui/react'
import TradeTableItem from '../TradeTableItem'
import { TableItem } from '../../Type'

function TradeTableItems({ nowTrade }: { nowTrade: TableItem[] }) {
  if (nowTrade.length > 0)
    return (
      <>
        {nowTrade.map(item => (
          <TradeTableItem key={item.id} nowTrade={item} />
        ))}
      </>
    )
  return (
    <Tr>
      <Td colSpan={6} style={{ textAlign: 'center' }}>
        No data.
      </Td>
    </Tr>
  )
}

function TradeTable(props: { trade: TableItem[] }) {
  const { trade } = props

  return (
    <div>
      <TradeTableItems nowTrade={trade} />
    </div>
  )
}

export default TradeTable
