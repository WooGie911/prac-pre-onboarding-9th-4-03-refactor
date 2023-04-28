import axios from 'axios'

const getTradeInfo = async () => {
  const res = await axios('mock_data.json')

  if (res.status === 200) {
    return res.data as any
  }
  return null
}

export default getTradeInfo
