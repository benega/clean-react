import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication, AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'

class ValidationLogin implements Validation {
  validate (fieldName: string, fieldValue: string): string {
    return ''
  }
}

class AuthenticationLogin implements Authentication {
  async auth (params: AuthenticationParams): Promise<AccountModel> {
    return Promise.resolve(null)
  }
}

const Router: React.FC = () => {
  const validation = new ValidationLogin()
  const authentication = new AuthenticationLogin()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login validation={validation} authentication={authentication}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
