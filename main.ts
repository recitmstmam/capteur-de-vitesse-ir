pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    Fentes += 1
})
let Vitesse = 0
let Fentes = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
let d1 = 0
let d2 = 0
let t1 = 0
let t2 = 0
basic.forever(function () {
    t1 = input.runningTime() / 1000
    // Le nombre de fentes comptes / le nombre de fentes dans la roue avec fentes * la circonférence de la roue en cm / 100 pour mettre la mesure en mètre.
    d1 = Fentes / 6 * 9.56 / 100
    // Calcul de la vitesse instantanée
    Vitesse = Math.abs(d2 - d1) / Math.abs(t2 - t1)
    serial.writeValue("Vitesse", Vitesse)
    t2 = t1
    d2 = d1
    led.toggle(0, 0)
    basic.pause(100)
})
