import { useQuery } from 'react-query'
import { Box, Container } from '@chakra-ui/react'
import getTradeInfo from '@apis/TableApi'

const TODAY = '2023-03-08'

function Home() {
  const { data: tradeData } = useQuery({
    queryKey: ['getTrade'],
    queryFn: getTradeInfo,
    refetchInterval: 5000,
  })

  return (
    <Container minW="1000px">
      <Box>HOME</Box>
    </Container>
  )
}

export default Home
