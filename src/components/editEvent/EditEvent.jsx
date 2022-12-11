import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { EditEventRed, deleteEvent } from '../../store/userStore'
import './editEvent.css'

export default function EditEvent({ closeData, setActive }) {


    const [nameEvent, setNameEvent] = useState(closeData[0].nameEvent)
    const [descEvent, setdescEvent] = useState(closeData[0].descriptionEvent)
    const [idnexEvent, setIndexValue] = useState(0)
    const [errMess,setErrMess]=useState('')

    const dispatch = useDispatch()

    const findDate = (e) => {
        setNameEvent(closeData[e].nameEvent)
        setdescEvent(closeData[e].descriptionEvent)
    }
    const acceptEdit = () => {
        if (nameEvent.length === 0 || descEvent.length === 0) {
            setErrMess('Есть пустые поля')
        } else {
            dispatch(EditEventRed({ index: idnexEvent, nameEvent: nameEvent, descriptionEvent: descEvent }))
            setActive(false)
            setErrMess('')
        }
    }
    const delEv = () => {
        dispatch(deleteEvent({ index: idnexEvent }))

    }

    return (
        <div className='editor_container'>
            <span className='span_edit '>Выберете дату события</span>
            <select className='input_edit' onChange={(e) => { findDate(e.target.value); setIndexValue(e.target.value) }}>
                {closeData.map((e, index) => {
                    return <option key={e.dateEvent} value={index} >{e.dateEvent.split('-').reverse().join('.')}</option>
                })}
            </select>
            <span className='span_edit' > Название события</span>
            <input className='input_edit' value={nameEvent} onChange={(e) => setNameEvent(e.target.value)} />
            <span className='span_edit'> Участник</span>
            <input className='input_edit' value={descEvent} onChange={(e) => setdescEvent(e.target.value)} />

            <div className='container_butt'>
                <button className='butt_edit' onClick={() => { acceptEdit() }} > Применить изменения</button>
                <button className='butt_edit del' onClick={() => { delEv(); setActive(false) }}> Удалить событие</button>
            </div>
            <span className='err_mes'>{errMess}</span>
        </div>
    )
}
