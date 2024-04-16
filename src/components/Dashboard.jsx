import Table from './Table'
import Modal from './Modal'
import AddTableForm from './Forms/AddTableForm'
import { useState } from 'react'

const Dashboard = () => {
    const [formToggle, setFormToggle] = useState(false);
    return (
        <section className="bg-primary-black mt-0">
            <div className="flex flex-col mx-5">
                <Modal open={formToggle} onClose={() => setFormToggle(false)}>
                    <AddTableForm />
                </Modal>
                <button className='bg-primary-grey rounded-lg text-white p-3 font-sans mb-5' onClick={() => setFormToggle(true)}>Add Table</button>
                <Table />
                <Table />
                <Table />
            </div>
        </section>
    )
}

export default Dashboard