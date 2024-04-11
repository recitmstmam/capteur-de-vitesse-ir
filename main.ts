pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    Fentes += 1
})
let Fentes = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
let f1 = 0
let f2 = 0
basic.forever(function () {
    f1 = Fentes
    if (f1 > f2) {
    	
    }
    f2 = f1
    basic.pause(50)
})
