enum RadioMessage {
    message1 = 49434,
    branco = 12276,
    preto = 24635,
    verde = 14709
}
radio.onReceivedMessage(RadioMessage.verde, function () {
	
})
radio.onReceivedMessage(RadioMessage.branco, function () {
    // Branco e preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 25 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 25 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 25)) {
        servos.P1.run(20)
        servos.P2.run(-20)
        // 1 branco preto
        basic.showString("1")
        basic.clearScreen()
    }
    // Branco e branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 30 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 30 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 30)) {
        servos.P1.run(20)
        servos.P2.run(-20)
        basic.showString("b")
        basic.clearScreen()
    }
})
radio.onReceivedMessage(RadioMessage.preto, function () {
    // Preto e preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 25 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 25 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 67)) {
        servos.P1.run(20)
        servos.P2.run(-20)
    }
    // Preto e branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 30 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 30 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 30)) {
        servos.P1.run(-20)
        servos.P2.run(-20)
    }
})
radio.setGroup(5)
basic.showNumber(3)
basic.forever(function () {
    // branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) >= 36 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) >= 85 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) == 255)) {
        servos.P1.run(20)
        servos.P2.run(-20)
        // 1 branco preto
        basic.showString("b")
        basic.clearScreen()
    }
    // preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 36 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 85 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) == 255)) {
        servos.P1.run(-20)
        servos.P2.run(20)
        // 1 branco preto
        basic.showString("p")
        basic.clearScreen()
    }
    // preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 57 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) == 255 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 38)) {
        servos.P1.run(-50)
        servos.P2.run(-50)
        // 1 branco preto
        basic.showString("v")
        basic.clearScreen()
    }
})
