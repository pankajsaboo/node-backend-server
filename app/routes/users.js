import express from 'express';
import MongoDB from './../db/mongodb';
import Joi from 'joi';
import validator from 'express-joi-validator';

const router = express.Router();

const schema = {
	body: {
		firstName: Joi.string().alphanum().min(6).max(14).required(),
		lastName: Joi.string().required()
	}
}

router.get('/', (req, res) => {
	const db = MongoDB.getDB();
	db.db().collection('users').find({}).toArray(function (err, results) {
		if (err)
			res.send(err);
		res.send(results);
	});
});

router.post('/', validator(schema,{allowUnknown: true, abortEarly: false}), (req, res, next) => {
	const db = MongoDB.getDB();
	let data = 
	db.db().collection('users').save(req.body);

	res.send("OK");
});

export default router;