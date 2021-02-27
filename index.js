// ฟังก์ชัน รับ a และ b แล้้ว ส่งผลลัพธ์ a+b ออกมา
function add(a, b) {
    return a +b 
} 

const add = (a, b) => {  
    return a+b 
}

const add = function(a, b){
    return a+b 
}

// เมื่อครบ 1 วินาทีแล้วจะทำใน function  // 1000 ms  == 1 s 
setTimeout(() => {
    console.log('hello')
}, 1000)

// ทุก ๆ 1 วินาทีแล้วจะทำใน function  // 1000 ms  == 1 s 
setInterval(() => {
    console.log('Hello')
}, 1000)

////////////////////////////////////
const add = (a, b, cb) => {  
    cb(a + b)
}
add(2, 5, (ans) => {
    console.log(ans)
}) 

const add = (a, b, cb) => {  
    cb(a + b, 10, 20, 30)
}
add(2, 5, (ans, x) => {
    console.log(ans)
    console.log(x)
}) 

////////////////////////////////////

const aysncAdd = (a, b, ms) => {
    return new Promise ((resolve,  reject) => {
        setTimeout(() => {
            if (a === 0)
                reject('Error a is 0')
            resolve(a + b)
        },ms)
    })
}
aysncAdd( 1, 2 ,1000).then(res => {
    console.log(res)
    return res + 5 
}).then((res) => {
    console.log(res)
})
// .catch กรณีที่มี่ error
aysncAdd( 1, 2 ,1000).then(res => {
    console.log(res)
    return res + 5 
}).catch((err) => {
    console.log(err)
})