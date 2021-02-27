const fs = require('fs')


// new Promise ใช้ในกรณีที่ต้องการ return ที่อยู่ลึกมาก ๆ หรือ ไม่รู้ว่าเสร็จตอนไหน
const readFilePromise = (path) =>{
    return new Promise((resolve, reject) => {
        fs.readFile(path ,(err, data) => {
            if (err) reject(err)
            resolve(data.toString())
        
        })

    })
}

readFilePromise('test.json')
    .then( res => {
        console.log(res)
    })