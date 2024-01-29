import {screen,render, fireEvent, getAllByRole} from '@testing-library/react'
import ColorGenerator from './ColorGenerator'


test('Test input is getting updated',async()=>
{
    let {getByRole,getAllByRole}=render(<ColorGenerator/>)
    let inputElement=getByRole('text-box')
    fireEvent.change(inputElement,{target:{value:"#45F3F3"}})
    let updatedInputElement=getByRole('text-box')
    expect(updatedInputElement.value.toLowerCase()).toEqual("#45F3F3".toLowerCase())
    let submitButton=getByRole('submit')
    let colorBoxes=getAllByRole('color-box')
    fireEvent.click(submitButton)
    expect(colorBoxes.length).toEqual(21)
})


