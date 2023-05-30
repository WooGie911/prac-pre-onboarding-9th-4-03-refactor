import { useRef } from 'react'
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'

interface ISearchInputProps {
  onClickHandler: (inputValue: string) => void
}

function SearchInput({ onClickHandler }: ISearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const buttonClickHandler = () => {
    if (inputRef.current) onClickHandler(inputRef.current.value)
  }
  const enterPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputRef.current)
      onClickHandler(inputRef.current.value)
  }
  const deleteClickHandler = () => {
    onClickHandler('')
    if (inputRef.current) inputRef.current.value = ''
  }
  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Customer Name"
        ref={inputRef}
        onKeyPress={enterPressHandler}
      />
      <InputRightElement width="6.0rem">
        <IconButton
          aria-label="delete"
          size="xs"
          variant="unstyled"
          mr="2px"
          mb="2px"
          color="gray"
          onClick={deleteClickHandler}
          icon={<SmallCloseIcon />}
        />
        <Button h="1.75rem" mr="3px" size="sm" onClick={buttonClickHandler}>
          search
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchInput
