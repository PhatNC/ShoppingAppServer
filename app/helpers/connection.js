import { connectString, dbName } from '../config';

const MongoClient = require('mongodb').MongoClient;

module.exports = class Connection {
  constructor() {
    super();

    this.db = null;
  }

  _open(callback, fallback) {
    if (this.db) {
      callback(this.db);
      return;
    }

    MongoClient.connect(connectString, (error, client) => {
      if (error) {
        console.log(`can't open the connection`);
        fallback(error)
        return;
      }

      const db = client.db(dbName);
      this.db = db;
      console.log('Open MongoDB training Database');
      callback(db);
    })
  }

  _insert(tableName, entity) {
    if (!todo) { return; }

    return new Promise((resolve, reject) => {
      this._open(db => {
        db.collection(tableName).insertOne(entity, (error, result) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(result);
        })
      }, error => {
        reject(error);
      })
    })
  }

  _update(tableName, condition, entity) {
    return new Promise((resolve, reject) => {
      this._open(db => {
        db.collection(tableName).updateOne(condition, entity, (error, result) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(result);
        })
      }, error => {
        reject(error);
      })
    })
  }

  _delete(tableName, entity) {
    return new Promise((resolve, reject) => {
      this._open(db => {
        db.collection(tableName).deleteOne(entity, (error, result) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(result);
        })
      }, error => {
        reject(error);
      })
    })
  }

  _getAll() {
    this._open(db => {
      db.collection('todos').find().toArray((error, data) => {
        if (error) { reject(error); }

        const todos = data.map(obj => {
          delete obj._id
          return obj
        })

        typeof callback === 'function' && callback(todos);
      })
    }, error => {
      typeof fallback === 'function' && fallback(error);
    })
  }
}
