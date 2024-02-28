const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')

router.use(express.json())

router.get('/', bookmarkCtrl.index, bookmarkCtrl.jsonBookmarks)
router.delete('/:id', bookmarkCtrl.destroy, bookmarkCtrl.jsonBookmark)
router.put('/:id', bookmarkCtrl.update, bookmarkCtrl.jsonBookmark)
router.post('/', bookmarkCtrl.create, bookmarkCtrl.jsonBookmark)

module.exports = router