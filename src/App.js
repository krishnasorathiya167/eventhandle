import React, { useEffect, useRef, useState } from 'react'


const App = () => {
  // useref
  let name = useRef();
  let age = useRef();

  let submit = () => {
    let data = {
      name: name.current.value,
      age: age.current.value,
    }
    console.log(data);
  }

  // usestate

  const [text, settext] = useState({})

  let handle = (e) => {
    settext({ ...text, [e.target.name]: e.target.value })
  }

  let submitt = () => {
    console.log(text);
  }

  // useeffect

  const [count, setcount] = useState(0)

  useEffect
  (() => {
    setInterval(() => {
        if (count <= 10) {
            setcount(count + 1)
        }
    }, 1000)
},[])

  return (
    <>
      <h1>useref</h1>
      <label>Name : <input type="text" ref={name} /></label><br /><br />
      <label>Age : <input type="text" ref={age} /></label><br /><br />
      <button onClick={submit}>Submit</button><br /><br />

      <h1>useState</h1>
      <p>{text.name}</p>
      <p>{text.age}</p>
      <label>Name : <input type="text" name='name' onChange={handle} /></label><br /><br />
      <label>Age : <input type="text" name='age' onChange={handle} /></label><br /><br />
      <button onClick={submitt}>Submit</button><br /><br />

      <h1>useEffect</h1>
      <p>{count}</p>
    </>
  )
}

export default App;