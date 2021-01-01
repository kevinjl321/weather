import React from 'react'
import { Button, Input} from 'semantic-ui-react'

const TypeCity = ({ setCity, loader }) => {
  setCity('Los Angeles')
  function submitHandler(e) {
    e.preventDefault()
    setCity(e.target.name.value)
    e.target.name.value = ''
  }
  return (
    <div className="input-form">
      <form onSubmit={submitHandler}>
        <Input
          name='name'
          placeholder='City name'
          icon=''
          size='large'
        ></Input>
        <Button primary type='submit' size='large' loading={loader} >
          Search
        </Button>
      </form>
      </div>
  )
}

export default TypeCity
