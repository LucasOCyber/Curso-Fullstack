const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('5 * * * * *', function () {
    console.log('executando tarefa 1', new Date().getSeconds())
}) 

setTimeout(function () {
    tafera1.cancel()
    console.log('canselando tarefa 1')
}, 20000)

const regra = new schedule.scheduleJob()
regra.dayOfweek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    cosole.log('executando tarefa 2', new Date(getSeconds()))
})


//setInterval
//setimmediate