enum RadioMessage {
    message1 = 49434,
    branco = 12276,
    preto = 24635,
    verde = 14709
}
radio.onReceivedMessage(RadioMessage.verde, function () {
    // Preto e verde
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 57 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) == 255 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 38)) {
        basic.showString("v")
        basic.clearScreen()
    }
})
radio.onReceivedMessage(RadioMessage.branco, function () {
    // Branco e preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 36 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 85 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) == 255)) {
        servos.P1.run(40)
        servos.P2.run(40)
        // 1 branco preto
        basic.showString("1")
        basic.clearScreen()
    }
    // Branco e branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) >= 36 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) >= 85 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) == 255)) {
        servos.P1.run(15)
        servos.P2.run(-15)
        basic.showString("b")
        basic.clearScreen()
    }
})
radio.onReceivedMessage(RadioMessage.preto, function () {
    // Preto e preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 36 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 85 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) == 255)) {
        servos.P1.run(15)
        servos.P2.run(-15)
        basic.showString("p")
        basic.clearScreen()
    }
    // Preto e branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) >= 36 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) >= 85 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) == 255)) {
        servos.P1.run(-40)
        servos.P2.run(-40)
        // 2 preto branco
        basic.showString("2")
        basic.clearScreen()
    }
})
radio.setGroup(5)
basic.showNumber(3)
