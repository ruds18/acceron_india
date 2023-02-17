import React from 'react'
import "../Styles/Quotation.css"


function Quotation() {
  return (
    <div className='container'>
      <form>
        
        <div className='row'>

          <div className='rowcol col1'>
            <label className='label'>
              Name
            </label>
            <input className='input' type='text' />
          </div>

          <div className='rowcol col2'>
            <label className='label'>
              Email
            </label>
            <input className='input' type='text' />
          </div>

        </div>
        
        <div className='row'>

          <div className='rowcol col1'>
            <label className='label'>
              Number
            </label>
            <input className='input' type='text' />
          </div>

          <div className='rowcol col2'>
            <label className='label'>
              Subject
            </label>
            <input className='input' type='text' />
          </div>

        </div>

        <div className='row_message'>
          <label className='label'>
            Message
          </label>
          <textarea rows="3" cols="100"/>
        </div>

      <button>Submit</button>
      </form>
    </div>
  )
}

export default Quotation