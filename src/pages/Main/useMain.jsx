import { useState } from 'react'
const dataButtons = [
  {
    id: 0,
    name: 'By Category',
    isActive: true
  },
  {
    id: 1,
    name: 'By container',
    isActive: false
  },
  {
    id: 2,
    name: 'Map',
    isActive: false
  },
  {
    id: 3,
    name: 'Zero waste shops',
    isActive: false
  },
  {
    id: 4,
    name: 'Tips & Tricks',
    isActive: false
  }
]

const useMain = () => {
   const [arrayButton, setArrayButton] = useState(dataButtons);

  const onClickButton = (val) => {
    setArrayButton(arrayButton.map((a, i)=> {
      if(a.id !== val.id) {
        return {
          ...a,
          isActive: false,
        }
      } 
      return {
        ...a,
        isActive: true
      }
    }))
  }


  return {
    arrayButton,
    onClickButton
  }
}

export default useMain;