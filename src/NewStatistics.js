import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import NewStatistic from './components/NewStatistic'

function NewStatistics({expenseTotal, incomeTotal}) {
  return (
    <Segment textAlign="center">
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <NewStatistic
            size="tiny"
            color="green"
            align="left"
            label="Income:"
            value={incomeTotal}
          />
        </Grid.Column>
        <Grid.Column>
          <NewStatistic
            label="Expenses:"
            color="red"
            value={expenseTotal}
            align="left"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default NewStatistics