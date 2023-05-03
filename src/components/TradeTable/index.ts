import { useState, useEffect, useCallback, MouseEvent } from 'react'
import { usePagination } from 'pagination-react-js'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { TradeItem } from '../../Type'

interface ITradeTableProps {
  trade: TradeItem[]
}

function TradeTable({ trade }: ITradeTableProps) {
  return (
    <div>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem colSpan={1}>
          <PaginationBar
            currentPage={currentPage}
            entriesPerPage={entriesPerPage}
            tradeLength={tradeLength}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <SearchInput onClickHandler={searchByName} />
        </GridItem>
      </Grid>
      <WrapperTableContainer>
        <Table variant="striped" colorScheme="gray">
          <TableCaption>Order List</TableCaption>
          <Thead>
            <Tr>
              <Th>
                ID
                <SortIcon typeID="id" sortBy={sortBy} />
              </Th>
              <Th>
                Transaction Time
                <SortIcon typeID="time" sortBy={sortBy} />
              </Th>
              <Th>
                status
                <StatusButton status={status} searchByStatus={searchByStatus} />
              </Th>
              <Th>Customer ID</Th>
              <Th>Customer Name</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            <div>{trade}</div>
          </Tbody>
        </Table>
      </WrapperTableContainer>
    </div>
  )
}

export default TradeTable
