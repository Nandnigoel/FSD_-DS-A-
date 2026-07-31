import React from 'react'

const Card = (props) => {
  return (
        <center>
            <div style={{border:'4px solid green', width:'400px', height:'350px',margin:'10px'}}>
                <img src="https://t3.ftcdn.net/jpg/08/98/22/00/360_F_898220026_YpEtXl3GCaJM39rPLux8t0acxy3wpsQN.jpg" style={{width:'150px', height:'150px'}}/>
                <h4 style={{color:'red'}}>ABES Student Card</h4>
                <h4> Course: {props.course}</h4>
                <h4> Name: {props.name}</h4>
                <h4> {props.year} year</h4>
            </div>
        </center>
  )
}

export default Card