function simpleInt(number){
    if (number <= 1000){
        if (number < 2){
            return('Число не простое')
        }
        for (let i = 2; i <= Math.sqrt(number); i++){
            if (number % i == 0){
                return('Число не простое')
            }
        }
        return('Число простое')
    }
    return('Данные неверны')
}
console.log(simpleInt(1001))