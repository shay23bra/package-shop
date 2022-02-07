import express from 'express'
const router = express.Router()

import {
  createPackage,
  deletePackage,
  getAllPackages,
  updatePackage,
  showStats,
} from '../controllers/packageController.js'

router.route('/').post(createPackage).get(getAllPackages)
router.route('/stats').get(showStats)
router.route('/:id').delete(deletePackage).patch(updatePackage)

export default router
