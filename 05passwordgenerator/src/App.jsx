import React, { useCallback, useState, useEffect,useRef } from 'react'

const App = () => {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklomnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*(){}[]"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
    console.log(pass);

  }, [length, numberAllowed, characterAllowed]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, characterAllowed
  ])

  const passwordRef=useRef(null);




  return (
    <div className='w-full max-w-md mx-auto h-10 shadow-md rounded-lg px-4 py-1 my-8  text-orange-500 bg-gray-500'>
      <div className='flex shadow h-full rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          ref={passwordRef}
          readOnly
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => { setlength(e.target.value) }}
            className='cursor-pointer'
          />
          <label >length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={numberAllowed}
            onChange={() => setnumberAllowed((prev) => !prev)}
          />
          <label >Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={characterAllowed}
            onChange={() => setcharacterAllowed((prev) => !prev)}
          />
          <label >Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App