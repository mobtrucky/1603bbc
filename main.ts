radio.onReceivedNumber(function (receivedNumber) {
    // Branco e branco
    if (receivedNumber == 0 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 230 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 230 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 230))) {
        servos.P1.run(100)
        servos.P2.run(-100)
    }
    // Preto e preto
    if (receivedNumber == 1 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 20 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 20 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 70))) {
        servos.P1.run(100)
        servos.P2.run(-100)
    }
    // Branco e preto
    if (receivedNumber == 0 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 20 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 20 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 70))) {
        servos.P1.run(-50)
        servos.P2.run(-50)
    }
    // Preto e branco
    if (receivedNumber == 1 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 230 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 230 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 230))) {
        servos.P1.run(50)
        servos.P2.run(50)
    }
})
basic.showNumber(3)
basic.forever(function () {
    radio.setGroup(42)
})
