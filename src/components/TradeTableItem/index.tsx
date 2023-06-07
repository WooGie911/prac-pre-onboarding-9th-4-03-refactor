/* eslint-disable prettier/prettier */
import { Tr, Td } from '@chakra-ui/react'
import { TableItem } from '../../Type'

interface ITradeTableItemProps {
  nowTrade: TableItem
}

function TradeTableItem({ nowTrade }: ITradeTableItemProps) {
  return (
    <Tr>
      <Td>{nowTrade.id}</Td>
      <Td>{nowTrade.transaction_time}</Td>
      <Td>{nowTrade.status ? 'completed' : 'processing'}</Td>
      <Td>{nowTrade.customer_id}</Td>
      <Td>{nowTrade.customer_name}</Td>
      <Td>{nowTrade.currency}</Td>
    </Tr>
  )
}

export default TradeTableItem
