import React, {useState} from 'react'
import SubjectsModal from '../component/SubjectsModal'

function Dashboard() {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            {showModal && <SubjectsModal hideModal={()=>setShowModal(false)}/>}
        </div>
    )
}

export default Dashboard
