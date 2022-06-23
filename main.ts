let טמפרטורה = 0
let גובה = 0
basic.forever(function () {
    if (טמפרטורה != input.temperature()) {
        טמפרטורה = input.temperature()
        גובה = Math.map(טמפרטורה, 10, 40, 0, 4)
        basic.clearScreen()
        for (let _אינדקס = 0; _אינדקס <= גובה; _אינדקס++) {
            led.plot(2, 4 - _אינדקס)
        }
    }
})
