import React from 'react'
import { Statistic } from 'semantic-ui-react'

function NewStatistic({size='tiny', color='black', align, label, value}) {
  return (
    <Statistic size={size} color={color}>
    <Statistic.Label style={{textAlign: {align}}}>{label}</Statistic.Label>
    <Statistic.Value>${value}</Statistic.Value>
  </Statistic>
  )
}

export default NewStatistic