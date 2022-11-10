const app = require("express")()


const StartServer = () => {

    // Define here Database Connection file

    app.listen(3000, () => {
        console.log("Demo Server started on port 3000");
    })
}

StartServer();