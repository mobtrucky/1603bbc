radio.onReceivedNumber(function (receivedNumber) {
    // Branco e branco
    if (receivedNumber == 0 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 230 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 230 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 230))) {
        servos.P1.run(60)
        servos.P2.run(-60)
    } else {
        servos.P1.run(-60)
        servos.P2.run(-60)
    }
})
basic.showNumber(3)
basic.forever(function () {
    radio.setGroup(5)
})
