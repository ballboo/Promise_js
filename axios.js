const axios = require('axios').default ;
const fs = require('fs')

// axios.get('a.com').then((res) => {
//     axios.get(`b.com/${res}`)}).then((res) => {
//         axios.get(`c.com/${res}`).then((res) => {
//             console.log(res)
//         })
//     }) 




// new Promise ใช้ในกรณีที่ต้องการ return ที่อยู่ลึกมาก ๆ หรือ ไม่รู้ว่าเสร็จตอนไหน
const readFilePromise = (path) =>{
    return new Promise((resolve, reject) => {
        fs.readFile(path ,(err, data) => {
            if (err) reject(err)
            resolve(data.toString())
        
        })

    })
}

// await ใช้ลดความซ้ำซ้อน code ของ promise 

// const main = async () => {
//     const res1  = await axios.get('a.com')
//     const res2  = await axios.get(`b.com/${res1}`)
//     const res3  = await axios.get(`c.com/${res2}`)

//     console.log(res3)
// }

const main = async () => {
    const users = await readFilePromise('test1.json').then( res => JSON.parse(res))

    let arr = [] ;
    // const results = users.map((user) => {
    //     return readFilePromise(`${user}.json`)
    // })
    // Promise { <pending> } ใช้ for loop ช่วย เก็บค่าลง array[]
    // console.log(results)
    
// ถ้ามี 10 ตัว  จะสั่งทำงานทีละตัว รอตัวแรกเสร็จ ถึงจะทำงานตัวที่ สอง 
    // for (i = 0 ; i < users.length ; i++){ 
    //     arr.push(await readFilePromise(`${users[i]}.json`))
    // } 
    // console.log(arr)

// Promise all ถ้าใน array มี 10 ตัวจะสั่งทั้งทำงานพร้อมกันทั้ง 10 ตัว รอจนทุกตัวเสร็จหมด
    for (i = 0 ; i < users.length ; i++){ 
        arr.push(readFilePromise(`${users[i]}.json`))
    }
    console.time('a')
    const results = await Promise.all(arr)
    console.timeEnd('a')
    console.log(results)

}

main()