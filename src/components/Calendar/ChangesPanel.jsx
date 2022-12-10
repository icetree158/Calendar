import React, { useState } from 'react'
import './changesPanel.css'
import serchImg from '../../assets/search-svgrepo-com.svg'
import Modal from '../modal/Modal'
import AddEvent from '../addEvent/AddEvent'
import EditEvent from '../editEvent/EditEvent'
import { useSelector } from 'react-redux'

export default function ChangesPanel({inputVal,setInputVal}) {
    const [modalActive, setModalActive] = useState(false)
    const [valueModal, setValueModal] = useState('')
   
    const closeData=useSelector((e)=>e.user.event)
   
    

    return (
        <div className='wrapper_change'>
            <div className='change_panel_backgrund'></div>
            <div className='change_panel_container'>
                <div>
                    <button className='change_button' onClick={() => { setModalActive(true);setValueModal('add') }}>Добавить</button>
                    <button className='change_button'onClick={() => { setModalActive(true);setValueModal('edit') }}> Обновить</button>
                </div>
                <div>
                    <button className='butt_search'><img className='serchImg' src={serchImg} alt='serch' /> </button>
                    <input value={inputVal} onChange={(e)=>setInputVal(e.target.value)} placeholder='Событие, дата или участник' className='search_input' />
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} >
                {valueModal==='add'?<AddEvent setModalActive={setModalActive} />: 
                closeData.length===0? <div>У вас нету заметок :(</div> :
                <EditEvent setActive={setModalActive} closeData={closeData}/>}
               
            </Modal>
        </div>
    )

}
