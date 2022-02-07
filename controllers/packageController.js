const createPackage = async (req, res) => {
  res.send('create package')
}

const getAllPackages = async (req, res) => {
  res.send('get all packages')
}
const updatePackage = async (req, res) => {
  res.send('update package')
}
const showStats = async (req, res) => {
  res.send('show stats')
}
const deletePackage = async (req, res) => {
  res.send('delete package')
}

export {
  createPackage,
  deletePackage,
  getAllPackages,
  updatePackage,
  showStats,
}
