import React from 'react'
import Table from './Table'

const Dashboard = () => {
  return (
    <section className="m-2 mb-5">
        <div className="flex flex-col mt-20 mx-5">
            <Table />
            <Table />
            <Table />
        </div>
    </section>
  )
}

export default Dashboard