import React, { useState } from "react";
import Modal from "./Modal";
import {Bell, Calendar, Palette, Clock, X} from "react-bootstrap-icons"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from "dayjs"; // Import dayjs

function AddNewTodo(){
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState("")
  const [day, setDay] = useState(dayjs)
  const [time, setTime] = useState(dayjs)

  return(
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>
          + New Todo
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <form>
            <div className="text">
              <h3> Add new todo</h3>
              <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="To do..."
                autoFocus
                />
            </div>
            <div className="remind">
              <Bell/>
              <p>Remind Me</p>
            </div>
            <div className="pick-day">
              <div className="title">
                <Calendar/>
                <p>Chose a day</p>
              </div>
              <DatePicker
                  value={day}
                  onChange={day => setDay(day)}
                />
            </div>
            <div className="pick-time">
              <div className="title">
                <Clock/>
                <p>Chose a time</p>
              </div>
              <TimePicker
                  value={time}
                  onChange={time => setTime(time)}
                />
            </div>
            <div className="pick-project">
              <div className="title">
                <Palette/>
                <p>Chose a project</p>
              </div>
              <div className="projects">
                <div className="project">
                  Personal
                </div>
                <div className="project active">
                  Work
                </div>
                <div className="project">
                  Work
                </div>
                <div className="project">
                  Work
                </div>
                <div className="project">
                  Work
                </div>
                <div className="project">
                  Work
                </div>
              </div>
            </div>
            <div className="cancel">
              <X size="40"/>
            </div>
            <div className="confirm">
              <button>Add to do</button>
            </div>
          </form>
        </LocalizationProvider>
      </Modal>
    </div>
  )
}

export default AddNewTodo