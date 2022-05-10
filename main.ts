input.onButtonPressed(Button.A, function () {
    moisture = Math.map(moistureReading, 0, 1023, 0, 100)
    led.plotBarGraph(
    moisture,
    76.7
    )
    basic.pause(1000)
    basic.clearScreen()
    basic.showNumber(moisture)
    basic.showString("%")
    basic.pause(500)
    basic.clearScreen()
    if (moistureReading < 767) {
        basic.showString("LOW")
    } else {
        if (input.temperature() > 26.66 && input.temperature() < 32.22) {
            basic.showIcon(IconNames.Happy)
            soundExpression.giggle.play()
        } else {
            if (input.temperature() < -1.11) {
                soundExpression.sad.play()
                basic.showLeds(`
                    # . # . #
                    . # # # .
                    # # # # #
                    . # # # .
                    # . # . #
                    `)
                basic.pause(500)
                basic.clearScreen()
                basic.showString("too cold")
                basic.showLeds(`
                    # . # . #
                    . # # # .
                    # # # # #
                    . # # # .
                    # . # . #
                    `)
            } else {
                if (input.temperature() > -1.11 && input.temperature() < 26.66 || input.temperature() > 32.22 && input.temperature() < 43.33) {
                    basic.showIcon(IconNames.Yes)
                    soundExpression.happy.play()
                }
            }
            if (input.temperature() > 43.33) {
                soundExpression.sad.play()
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . . . .
                    . . # . .
                    `)
                basic.pause(500)
                basic.clearScreen()
                basic.showString("too hot")
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . . . .
                    . . # . .
                    `)
            } else {
                if (input.temperature() > -1.11 && input.temperature() < 26.66 || input.temperature() > 32.22 && input.temperature() < 43.33) {
                    basic.showIcon(IconNames.Yes)
                    soundExpression.happy.play()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    soundExpression.giggle.play()
})
let moistureReading = 0
let moisture = 0
led.setBrightness(150)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    moistureReading = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.pause(1000)
})
