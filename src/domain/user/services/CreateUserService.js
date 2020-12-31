const User = require('../entities/User');

class CreateUserService {
  constructor(usersRepository) {
    this.ormRepository = usersRepository;
  }

  execute({ email, password }) {
    const user = new User({ email, password });

    return this.ormRepository.create(user);
  }
}

module.exports = CreateUserService;