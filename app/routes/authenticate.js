import express from 'express';
import MongoDB from './../db/mongodb';
import jwt from 'jsonwebtoken';
import app from './../server';

const router = express.Router();

router.post('/', (req, res) => {
    let userName = req.body.userName;
    let password = req.body.password;
    console.log(userName);
    console.log(password);

    if(!userName) {
        res.status(403).send({"Message":"Please provide valid Username."});
    } else if(!password) {
        res.status(403).send({"Message":"Please provide valid Password."});
    } else if(userName === "Pankaj" && password === "123456") {
        let payload = {
            loginId : "pankajsaboo",
            admin : true
        };

        let token = jwt.sign(payload, app.get('secret'), {
            expiresIn: 86400 // expires in 24 hours
        });

        res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
        });
    }
});

export default router;