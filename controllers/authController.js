import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/index.js'

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  if (!firstName || !lastName || !email || !password) {
    throw new BadRequestError('please provide all values')
  }

  const userAlreadyExists = await User.findOne({ email })
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use')
  }

  const user = await User.create({ firstName, lastName, email, password })
  const token = user.createJWT()
  res
    .status(StatusCodes.OK)
    .json({
      user: {
        email: user.email,
        location: user.location,
        lastName: user.lastName,
        firstName: user.firstName,
      },
      token,
    })
}

const login = async (req, res) => {
  res.send('login user')
}

const updateUser = async (req, res) => {
  res.send('update user')
}

export { register, login, updateUser }
