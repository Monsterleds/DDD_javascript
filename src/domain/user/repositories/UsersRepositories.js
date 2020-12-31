class UsersRepositories {
  #fakeDatabase;

  constructor() {
    this.#fakeDatabase = [];
  }

  create(user) {
    this.#fakeDatabase.push(user);

    return user;
  }

  findAll() {
    return this.#fakeDatabase;
  }
}

module.exports = UsersRepositories;