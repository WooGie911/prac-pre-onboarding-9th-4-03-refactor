/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import { Pagination } from 'pagination-react-js'
import styled from '@emotion/styled'

interface IPagenationBarProps {
  entriesPerPage: {
    get: number
    set: (arg: number) => void
  }
  currentPage: {
    get: number
    set: React.Dispatch<React.SetStateAction<number>>
  }
  tradeLength: number
}

function PaginationBar({
  entriesPerPage,
  tradeLength,
  currentPage,
}: IPagenationBarProps) {
  return (
    <WrapperDiv>
      <Pagination
        entriesPerPage={entriesPerPage.get}
        totalEntries={tradeLength}
        currentPage={{ get: currentPage.get, set: currentPage.set }}
        offset={2}
        classNames={{
          wrapper: 'pagination',
          item: 'pagination-item',
          itemActive: 'pagination-item-active',
          navPrev: 'pagination-item nav-item',
          navNext: 'pagination-item nav-item',
          navStart: 'pagination-item nav-item',
          navEnd: 'pagination-item nav-item',
        }}
        navStart="&#171;"
        navEnd="&#187;"
        navPrev="&#x2039;"
        navNext="&#x203a;"
      />
    </WrapperDiv>
  )
}

export default PaginationBar

const WrapperDiv = styled.div`
  .pagination {
    display: flex;
    list-style: none;
  }
  .pagination-item {
    padding: 5px;
    margin: 2px;
    border: lightgray 1px solid;
    width: 35px;
    text-align: center;
    border-radius: 5px;
  }

  .pagination-item:hover {
    cursor: pointer;
    background-color: #e2e8f0;
  }

  .pagination-item-active {
    color: coral;
    font-weight: 500;
  }
`
