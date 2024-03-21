var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', (req, res) => {
    const x =Math.round(Math.random() * 99);

    if (req.query.x) {
        x = (req.query.x);
    }
    const cosVal = Math.cos(x);
    const asinVal = Math.asin(x);
    const asinhVal = Math.asinh(x);

    const response = `
        Math.cos() applied to ${x} is ${cosVal}<br>
        Math.asin() applied to ${x} is ${asinVal}<br>
        Math.asinh() applied to ${x} is ${asinhVal}
    `;

    res.send(response);
});

module.exports = router;