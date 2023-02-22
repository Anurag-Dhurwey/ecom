import React from 'react'

const Filter = ({filterMethod}) => {
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <label htmlFor="search" > Search</label>
        <input type="name" id='search' name='search' onChange={(e)=>{filterMethod(e)}} />
      </form>
    </div>
  )
}

export default Filter
