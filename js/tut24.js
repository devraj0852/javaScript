console.log('hello')

let today = Date()
//console.log(today)

let otherDate = Date('15-04-2013 04:54:05')
otherDate = new Date('Jun 13 2012')
otherDate = new Date('10/02/1996')
console.log(otherDate)

let a;
a = otherDate.getDay()
a = otherDate.getDate()
a = otherDate.getMinutes()
a = otherDate.getSeconds()
a = otherDate.getHours()
a = otherDate.getTime()
a = otherDate.getMilliseconds()
a = otherDate.getMonth()
console.log(a)

otherDate.setDate(23)
otherDate.setMonth(0)
//otherDate.set.FullYear(1996)
otherDate.setMinutes(2)
otherDate.setHours(1)
console.log(otherDate)


