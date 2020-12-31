class ListUserService {
  constructor(usersRepository) {
    this.ormRepository = usersRepository;
  }

  execute() {
    return this.ormRepository.findAll();
  }
}

module.exports = ListUserService;