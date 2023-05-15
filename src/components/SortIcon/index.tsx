/* eslint-disable prettier/prettier */
import { IconButton } from '@chakra-ui/react'
import useUrlSearch from '../../hooks/useSearchParamsURL'

interface ISortIconProps {
  typeID: string
  sortBy: string
}

function SortIcon({ typeID, sortBy }: ISortIconProps) {
  const { setSearchParams } = useUrlSearch()
  const [sortType, sortOrder] = sortBy.split('_')
  const color = typeID === sortType ? 'teal' : 'gray'

  const iconClickHandler = (typeId: string) => {
    if (typeId !== sortType) {
      setSearchParams({ sort_by: `${typeId}_DESC` })
      return
    }
    if (sortOrder === 'ASC') {
      setSearchParams({ sort_by: `${typeId}_DESC` })
      return
    }
    setSearchParams({ sort_by: `${typeId}_ASC` })
  }

  if (typeID === sortType && sortOrder === 'DESC')
    return (
      <IconButton
        variant="unstyled"
        aria-label="down"
        data-testid={`sort-button-${typeID}`}
        color={color}
        onClick={() => iconClickHandler(typeID)}
      />
    )
  return (
    <IconButton
      variant="unstyled"
      aria-label="up"
      data-testid={`sort-button-${typeID}`}
      color={color}
      onClick={() => iconClickHandler(typeID)}
    />
  )
}

export default SortIcon
