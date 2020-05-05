
describe("Test 1", function() {

    it("получает детей с базы данных", function() {
      
      assert(getChildren());
    });
  
  });
  
  describe("Test 2", function() {

    it("Получает таблицу пользователей с базы данных", function() {
      assert.equal(getUsers(),true);
    });
  
  });
 

  function getChildren() {
    if (chDatabase = 0)
    {return true}
    else {return false};
  }

  function getUsers(){
    if (groupDatabase = 0){return true}
    else {return false};
  }