
const auth = require('./suites/auth.integration');


describe('Main', () => {
  afterAll(async () => {
    // await app.mainDBRepository.disconnect();
  });

  /* Auth */
  auth()

});
