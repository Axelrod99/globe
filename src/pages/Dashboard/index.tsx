import React from 'react'
import LoggedinLayout from '../../component/LoggedinLayout'
import DashboardPage from './DashboardPage'

const Dashboard = () => {
  return (
    <LoggedinLayout>
        <DashboardPage/>
    </LoggedinLayout>
  )
}

export default Dashboard