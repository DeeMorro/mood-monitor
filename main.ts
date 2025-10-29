input.onButtonPressed(Button.A, function () {
    if (mood == 0) {
        sad += 1
    } else if (mood == 1) {
        okay += 1
    } else if (mood == 2) {
        happy += 1
    }
    datalogger.log(
    datalogger.createCV("sad", sad),
    datalogger.createCV("okay", okay),
    datalogger.createCV("happy", happy)
    )
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("R")
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showNumber(sad)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(1000)
    basic.showNumber(okay)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showNumber(happy)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    overall = happy + okay + sad
    max = overall * 10
    basic.showNumber(max)
    basic.pause(1000)
    score = happy * 10 + okay * 5
    basic.showNumber(score)
    basic.pause(1000)
    final = score / max
    basic.showNumber(final * 100)
    basic.showString("%")
    basic.pause(1000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showString("S")
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    mood = 0
    basic.pause(5000)
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    mood = 1
    basic.pause(5000)
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    mood = 2
    basic.pause(5000)
    basic.clearScreen()
})
let final = 0
let score = 0
let max = 0
let overall = 0
let happy = 0
let okay = 0
let sad = 0
let mood = 0
datalogger.setColumnTitles(
"sad",
"okay",
"happy"
)
basic.forever(function () {
	
})
