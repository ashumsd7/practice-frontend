(async()=>{



    async function start(){

        const name='ASHU'
        return new Promise(res=>{
            setTimeout(() => { res(name) }, 5000)
        })
    }
    
    
    const result =  await start()
    
    console.log(result)
})()