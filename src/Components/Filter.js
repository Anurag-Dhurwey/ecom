import React from 'react'

const Filter = (props) => {
  let {filter}=props
  const {category,filterMethod}=filter
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <label htmlFor="search" > Search</label>
        <input type="name" id='search' name='search' onChange={(e)=>{filterMethod(e)}} />
      </form>
      <div className="category">
        <h3>Category</h3>
        {category.map((item,i)=>{
          return <button onClick={(e)=>{filterMethod(e)}} style={{cursor:"pointer",margin:"7px" }} type="button" value={item} name='category' key={i}>{item}</button>
        })}
      </div>
    </div>
  )
}

export default Filter
