import axios from 'axios'
import { TableItem } from '../../Type'

const getTradeInfo = async () => {
  const res = await axios('mock_data.json')

  if (res.status === 200) {
    return res.data as TableItem
  }
  return null
}

export default getTradeInfo
