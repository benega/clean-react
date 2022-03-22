import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'
import { EmailValidation } from './email-validation'

describe('EmailValidation', () => {
  test('should return error if email is invalid', () => {
    const sut = new EmailValidation(faker.random.words())
    const error = sut.validate(faker.random.words())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return falsy if email is valid', () => {
    const sut = new EmailValidation(faker.random.words())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
