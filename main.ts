input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    moisture,
    1023
    )
    basic.pause(1000)
    basic.clearScreen()
    basic.showNumber(moisture)
    if (moisture < 750) {
        music.playTone(988, music.beat(BeatFraction.Double))
        basic.showString("Low moisture")
    } else {
        if (input.temperature() > 26.66 && input.temperature() < 32.22) {
            basic.showIcon(IconNames.Happy)
        }
        if (input.temperature() > -1.11 && input.temperature() < 26.66 || input.temperature() < 32.22 && input.temperature() < 43.33) {
            basic.showIcon(IconNames.Yes)
        }
        if (input.temperature() < -1.11) {
            basic.showString("too cold")
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
        }
        if (input.temperature() > 43.33) {
            basic.showString("too hot")
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
        }
    }
})
let moisture = 0
led.setBrightness(150)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    moisture = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.pause(1000)
})
