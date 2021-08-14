import { useEffect } from 'react'
import { useState } from 'react'
import apis, { TrendResponse, Trend } from '../../lib/apis'
import NowLoading from '../UI/NowLoading'
import TrendElement from './Trend'
import TrendHeadeer from './TrendHeader'

const calcAllConditionLength = (trend: Trend) => {
  return trend.info.length + trend.warning.length + trend.critical.length
}

const TrendList = () => {
  const [trends, setTrends] = useState<TrendResponse>([])
  const [maxConditionCount, setMaxConditionCount] = useState(0)
  useEffect(() => {
    const update = async () => {
      const newTrends = await apis.getTrend()
      newTrends.sort(
        (a, b) => calcAllConditionLength(b) - calcAllConditionLength(a)
      )
      setTrends(newTrends)

      let max = 0
      newTrends.forEach(v => {
        const tmpLen = calcAllConditionLength(v)
        if (tmpLen > max) {
          max = tmpLen
        }
      })
      setMaxConditionCount(max)
    }
    update()
  }, [])

  if (trends.length === 0) return <NowLoading />

  return (
    <div>
      <h2 className="mb-6 text-xl font-bold">みんなのISU</h2>
      <TrendHeadeer />
      {trends.map(trend => (
        <TrendElement
          key={trend.character}
          trend={trend}
          maxConditionCount={maxConditionCount}
        />
      ))}
    </div>
  )
}

export default TrendList
