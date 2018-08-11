import { MongoClient } from 'mongodb';
import * as constants from './../constants'; // import constants

const uri = `mongodb://localhost:${constants.MONGO_PORT}/${constants.DB_NAME}`;
let _db

const connectDB = async (callback) => {
    try {
        MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
            _db = db
            return callback(err)
        })
    } catch (e) {
        throw e
    }
}

const getDB = () => _db

const disconnectDB = () => _db.close()

export default { connectDB, getDB, disconnectDB };