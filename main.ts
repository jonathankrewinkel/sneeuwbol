input.onGesture(Gesture.Shake, function on_gesture_shake() {
    sneeuw_1()
    sneeuw_2()
    sneeuw_3()
    sneeuw_4()
    sneeuw_5()
    sneeuw_6()
    sneeuw_7()
    sneeuw_8()
    sneeuw_9()
    sneeuw_10()
    muziek()
})
// _______________________
function sneeuw_1() {
    basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
                    `)
}

function sneeuw_2() {
    basic.showLeds(`
    # . # . .
    . # . # .
    . . . . .
    . . . . .
    . . . . .
                    `)
}

function sneeuw_3() {
    basic.showLeds(`
    . . . # #
    # . # . .
    . # . # .
    . . . . .
    . . . . .
                    `)
}

function sneeuw_4() {
    basic.showLeds(`
    . # . . #
    . . . # #
    # . # . .
    . # . # .
    . . . . .
                    `)
}

function sneeuw_5() {
    basic.showLeds(`
    . . # . .
    . # . . #
    . . . # #
    # . # . .
    . # . # .
                    `)
}

function sneeuw_6() {
    basic.showLeds(`
    # . . # .
    . . # . .
    . # . . #
    . . . # #
    # # # # .
                    `)
}

function sneeuw_7() {
    basic.showLeds(`
    . . . . .
    . . . # .
    . . # . .
    . # . . #
    # # # # #
                    `)
}

function sneeuw_8() {
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . # .
    . . # . .
    # # # # #
                    `)
}

function sneeuw_9() {
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . # .
    # # # # #
                    `)
}

function sneeuw_10() {
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
                    `)
}

function muziek() {
    music.playMelody("G C B", 120)
}

