import Table from './Table'
import Modal from './Modal'
import AddTableForm from './Forms/AddTableForm'
import { useState, useEffect } from 'react'

const Dashboard = () => {
    const [formToggle, setFormToggle] = useState(false);
    const [tables, setTables] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTables = async() => {
            try {
                const res = await fetch('http://localhost:5000/Tables');
                const data = await res.json();
                setTables(data);
            } catch(err) {
                console.log('Error fetching data', err)
            } finally {
                setLoading(false);
            }
        }
        fetchTables();
    }, []);

    return (
        <section className="bg-primary-black mt-0">
            <div className="flex flex-col mx-5">
                <Modal open={formToggle} onClose={() => setFormToggle(false)}>
                    <AddTableForm />
                </Modal>
                <button className='bg-primary-grey rounded-lg text-white p-3 font-sans mb-5' onClick={() => setFormToggle(true)}>Add Table</button>
                {Object.keys(tables).map(table => (
                    <div key={table}>
                    {/* Render a Table component for each array */}
                    <Table rows={tables[table]} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Dashboard