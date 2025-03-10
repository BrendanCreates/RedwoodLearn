import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const contacts = () => {
  return db.contact.findMany()
}

export const contact = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact = ({ input }) => {
  validate(input.email, 'email', { email: true })
  return db.contact.create({
    data: input,
  })
}

export const updateContact = ({ id, input }) => {
  return db.contact.update({
    data: input,
    where: { id },
  })
}

export const deleteContact = ({ id }) => {
  return db.contact.delete({
    where: { id },
  })
}

/*
Here is an example of taking validations to the max:
export const createCar = ({ input }) => {
  validate(input.make, 'make', {
    inclusion: ['Audi', 'BMW', 'Ferrari', 'Lexus', 'Tesla'],
  })
  validate(input.color, 'color', {
    exclusion: { in: ['Beige', 'Mauve'], message: 'No one wants that color' },
  })
  validate(input.hasDamage, 'hasDamage', {
    absence: true,
  })
  validate(input.vin, 'vin', {
    format: /[A-Z0-9]+/,
    length: { equal: 17 },
  })
  validate(input.odometer, 'odometer', {
    numericality: { positive: true, lessThanOrEqual: 10000 },
  })

  return db.car.create({ data: input })
}
*/
