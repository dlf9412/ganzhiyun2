function select(model,params){
    return new Promise((resolve,reject)=>[
        model.find(params,function(err,data){
            console.log(data)
            console.log(err)
            if(err){
                resolve({
                    code:404,
                    msg:err
                })

            }
            if(data){
                resolve({
                    code:200,data:data
                })
            }
            
        })
    ])
}

function add(models,params){
    return new Promise((resolve,reject)=>{
        var dbModel=new models(params);
        dbModel.save((err,data)=>{
            if(data){
                resolve({code:200,msg:'成功'})
            }
            if(err){
                resolve({code:404,msg:err})
            }
        })
    })
}
module.exports={
    add,select
}