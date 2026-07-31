import React from 'react'

const Content = () => {
  return (
    <div style={{display:'flex', gap:'20px',padding:'15px', border:'2px solid red', height:'250px', width:'fit-content'}}>
        <div>
            <img src="https://png.pngtree.com/png-clipart/20250424/original/pngtree-delicious-burger-image-burgur-fast-food-junk-png-image_20784667.png" alt="" height={150} width={200} />
            <h3>Burger</h3>
            <h3>Price:$10</h3>
        </div>
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" alt="" height={150} width={200}/>
            <h3>Pizza</h3>
            <h3>Price:$25</h3>
        </div>
        <div>
          <img src="https://png.pngtree.com/png-clipart/20240810/original/pngtree-flying-cup-of-coffee-with-splash-and-png-image_15739217.png" alt="" height={150} width={200}/>
          <h3>Coffee</h3>
          <h3>Price:$30</h3>
        </div>
    </div>
  )
}

export default Content