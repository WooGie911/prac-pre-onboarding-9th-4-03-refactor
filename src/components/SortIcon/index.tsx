/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import { IconButton } from '@chakra-ui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'
import useSearchParamsURL from '../../hooks/useSearchParamsURL'

interface ISortIconProps {
  typeID: string
  sortBy: string
}

function SortIcon({ typeID, sortBy }: ISortIconProps) {
  const { setSearchParams } = useSearchParamsURL()
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
        icon={<ChevronDownIcon />}
        color={color}
        onClick={() => iconClickHandler(typeID)}
        margin="5px"
      />
    )
  return (
    <IconButton
      variant="unstyled"
      aria-label="up"
      data-testid={`sort-button-${typeID}`}
      color={color}
      icon={<ChevronUpIcon />}
      onClick={() => iconClickHandler(typeID)}
      margin="5px"
    />
  )
}

export default SortIcon
