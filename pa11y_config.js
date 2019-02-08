module.exports = {
    "standard": process.env.STANDARD,
    "timeout": 300000,
    "reporter": "html",
    "headers": {
            "Cookie": process.env.COOKIE,
            "Authorization": process.env.AUTHORIZATION
        }
}