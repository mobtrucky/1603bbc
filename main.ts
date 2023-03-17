radio.onReceivedNumber(function (receivedNumber) {
    // Branco e branco
    if (receivedNumber == 0 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 254 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 254 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 254))) {
        servos.P1.run(50)
        servos.P2.run(-50)
    }
    // Preto e preto
    if (receivedNumber == 1 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) == 0 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) == 0 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) == 0))) {
        servos.P1.run(50)
        servos.P2.run(50)
    }
    // Branco e preto
    if (receivedNumber == 0 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) == 0 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) == 0 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) == 0))) {
        servos.P1.run(-50)
        servos.P2.run(-50)
    }
    // Preto e branco
    if (receivedNumber == 1 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 254 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 254 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 254))) {
        servos.P1.run(50)
        servos.P2.run(-50)
    }
})
basic.forever(function () {
    // Branco e branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 254 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 254 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 254)) {
        servos.P1.run(50)
        servos.P2.run(-50)
    }
    // Branco e Preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 254 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 254 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 254)) {
        servos.P1.run(50)
        servos.P2.run(-50)
    }
    // Preto e Branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 254 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 254 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 254)) {
        servos.P1.run(50)
        servos.P2.run(-50)
    }
    // Preto e Preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 254 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 254 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 254)) {
        servos.P1.run(50)
        servos.P2.run(-50)
    }
})
