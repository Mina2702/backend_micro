const KoaRouter = require('koa-router');
const config = require('../environment/config');
const usersController = require('../controllers/user.controller');
const jwt = require('../middlewares/jwt');

const api = 'users';
const router = new KoaRouter();

router.prefix(`/${config.baseAPIRoute}/${api}`);
router.get('/', usersController.find);
router.post('/', /* jwt, */ usersController.add); // Comment jwt tạm thời
router.get('/:id', usersController.findById);
router.put('/:id', jwt, usersController.update);
router.delete('/:id', jwt, usersController.delete);

module.exports = router;