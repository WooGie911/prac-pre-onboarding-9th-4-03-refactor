/* eslint-disable array-callback-return */
import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { Tr, Td } from '@chakra-ui/react'
import { usePagination } from 'pagination-react-js'
import TradeTableItem from '../TradeTableItem'
import { TableItem } from '../../Type'
import PaginationBar from '../PaginationBar'
import useSearchParamsURL from '../../hooks/useSearchParamsURL'
import {
  sortByIDASC,
  sortByIDDESC,
  sortByTransactonTimeASC,
  sortByTransactonTimeDESC,
} from '../../utils/sort'
import {
  filterTradeByCustomerName,
  filterTradeByStatus,
} from '../../utils/filter'

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

  const { setSearchParams, getSearchParams } = useSearchParamsURL()

  const sortBy = getSearchParams('sort_by')
  const status = getSearchParams('status')
  const page = getSearchParams('page')
  const name = getSearchParams('name')

  const { currentPage, entriesPerPage, entries } = usePagination(
    Number(page.length === 0 ? 1 : page),
    50
  )
  const { set: currentPageSet, get: currentPageGet } = currentPage

  const searchByStatus = (e: MouseEvent<HTMLButtonElement>) => {
    setSearchParams({ status: e.currentTarget.value })
    currentPageSet(1)
  }

  const searchByName = (inputName: string) => {
    const encodedSearchTerm = encodeURIComponent(inputName)
    setSearchParams({ name: encodedSearchTerm })
    currentPageSet(1)
  }

  const sortTrade = useCallback(
    (nowTrade: TableItem[]) => {
      switch (sortBy) {
        case 'time_ASC':
          return sortByTransactonTimeASC(nowTrade)
        case 'time_DESC':
          return sortByTransactonTimeDESC(nowTrade)
        case 'id_DESC':
          return sortByIDDESC(nowTrade)
        default:
          return sortByIDASC(nowTrade)
      }
    },
    [sortBy]
  )

  const filterAll = useCallback(() => {
    let result = [...trade]
    if (name) {
      result = filterTradeByCustomerName(result, name)
    }
    result = filterTradeByStatus(result, status ?? 'all')
    result = sortTrade(result)

    return result
  }, [trade, name, status, sortTrade])

  useEffect(() => {
    setSearchParams({ page: currentPageGet.toString() })
  }, [currentPageGet, setSearchParams])

  useEffect(() => {
    setTradeLength(filterAll().length)
  }, [filterAll])

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
