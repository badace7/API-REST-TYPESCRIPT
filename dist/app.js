const express = require('express');
const app = express();
app.listen(8080, (err) => {
    try {
        console.log('serveur à l\'écoute');
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=app.js.map