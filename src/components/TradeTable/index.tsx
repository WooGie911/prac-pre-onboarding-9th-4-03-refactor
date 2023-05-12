/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react'
import { Tr, Td } from '@chakra-ui/react'
import { usePagination } from 'pagination-react-js'
import TradeTableItem from '../TradeTableItem'
import { TableItem } from '../../Type'
import PaginationBar from '../PaginationBar'
import useSearchParamsURL from '../../hooks/useSearchParamsURL'

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
  const [tradeLength, setTradeLength] = useState(trade.length)
  const { currentPage, entriesPerPage, entries } = usePagination(1, 50)

  const { setSearchParams, getSearchParams } = useSearchParamsURL()

  const { set: currentPageSet, get: currentPageGet } = currentPage

  useEffect(() => {
    setSearchParams({ page: currentPageGet.toString() })
  }, [currentPageGet, setSearchParams])

  return (
    <div>
      <PaginationBar
        currentPage={currentPage}
        entriesPerPage={entriesPerPage}
        tradeLength={tradeLength}
      />
      <TradeTableItems
        nowTrade={trade.slice(entries.indexOfFirst, entries.indexOfLast)}
      />
    </div>
  )
}

export default TradeTable
