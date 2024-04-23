const jwt = require('jsonwebtoken');
const dotenv = require('dotenv'); // dotenv 모듈
dotenv.config();

const ensureAuthorization = (req, res) => {
    try {
        let receivedJwt = req.headers["authorization"];
        console.log("received jwt : ", receivedJwt);

        let decodedJwt = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);
        console.log(decodedJwt);

        return decodedJwt;
    } catch (err) {
        console.log(err.name);
        console.log(err.message);

        return err;
    }
}

module.exports = ensureAuthorization;