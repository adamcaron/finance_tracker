const express = require('express')
const app = express()
const port = process.env.PORT || 8085
const router = express.Router()
router.get('/', (req, res) => {
  res.json({ message: 'It\'s working' })
})
router.get('/auth', (req, res) => {
  res.json({ message: 'authed' })
})
router.get('/listings', (req, res) => {
  res.json({ message: 'Listings' })
})
app.use('/api/', router)
app.listen(port)
console.log('Server running on port ' + port)
