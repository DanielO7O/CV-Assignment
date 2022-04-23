import './CV.css'

function Form() {

    


  return (

    <div className='allform'>
        <form type="string">
          <div className='GI'>
            <h3 className='GIbox'> General Information </h3>
              <label className='box'>Surname:</label>
              <input type="text" />
              <label className='box'>Last Name:</label>
              <input type="text" />
              <label className='box'>Middle Name:</label>
              <input type="text" />
          </div>

          <div className='EE'>
            <h3 className='EEbox'> Educational Experience </h3>
              <label className='box'>School Name:</label>
              <input type="text" />
              <label className='box'>Title of Study:</label>
              <input type="text" />
              <label className='box'>Date of Study:</label>
              <input type="date" />
          </div>

          <div className='PE'>
            <h3> Practical Experience </h3>
              <label className='box'> Company Name: </label>
              <input type="text" />
              <label className='box'> Position Title: </label>
              <input type="text" />
              <label className='box'> Main Task </label>
              <input type="text" />

            <div className='PED'>
              <label> Date Worked: From </label>
              <input type="date" />
              <label> To </label>
              <input type="date" />
            </div>

            <div className='submit'>
              <button>Submit</button> 
            </div> 

          </div>
        </form>
    </div>
  )
}


export default Form


        
            
                

                
        
    