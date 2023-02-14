let start = false
let A = false
let B = false
input.onPinPressed(TouchPin.P0, function () {
    if (start) {
        A = true
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    start = false
    A = false
    B = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    music.playTone(262, music.beat(BeatFraction.Half))
    start = true
    while (!(start || start)) {
    	
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (start) {
        B = true
    }
})
