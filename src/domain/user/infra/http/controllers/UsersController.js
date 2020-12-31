const CreateUserService = require('./../../../services/CreateUserService');
const ListUserService = require('./../../../services/ListUserService');

const UsersRepositories = require('./../../../repositories/UsersRepositories');

const usersRepositories = new UsersRepositories();

class UsersController {
  index(request, response) {
    const listUserService = new ListUserService(usersRepositories);

    const users = listUserService.execute();

    return response.json(users);
  }

  create(request, response) {
    const { email, password } = request.body;

    const createUserService = new CreateUserService(usersRepositories);

    const user = createUserService.execute({ email, password });

    return response.json(user);
  }
}

module.exports = UsersController;