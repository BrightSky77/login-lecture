const app = require("../01_app")  //..은 상위 폴더
const PORT = 3000;


app.listen(PORT, () => {
    console.log('서버 가동')
});