import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { Validation } from '@/presentation/protocols/validation'

class ValidationLogin implements Validation {
  validate (input: object): string {
    return ''
  }
}

const Router: React.FC = () => {
  const validation = new ValidationLogin()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login validation={validation}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
