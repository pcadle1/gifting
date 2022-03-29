const Model = require("./Model");

class Gift extends Model{
  static get tableName(){
    return 'gifts'
  }
}

export default Gift