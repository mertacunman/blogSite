const express = require('express');
const blogController = require('../Controllers/blogController')

const router = express.Router();


router.post('/',blogController.aramaYap)
router.get('/blog',blogController.tumMakaleleriGetir);
router.get('/:id',blogController.TekMakaleGetir);

module.exports = router;