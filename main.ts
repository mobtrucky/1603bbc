enum RadioMessage {
    message1 = 49434,
    branco = 12276,
    preto = 24635
}
radio.onReceivedMessage(RadioMessage.branco, function () {
    // Branco e branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 30 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 30 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 30)) {
        servos.P1.run(25)
        servos.P2.run(-25)
    }
    // Branco e preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 40 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 40 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 50)) {
        servos.P1.run(25)
        servos.P2.run(25)
    }
})
radio.onReceivedMessage(RadioMessage.preto, function () {
    // Preto e preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 40 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 40 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 50)) {
        servos.P1.run(25)
        servos.P2.run(-25)
    }
    // Preto e branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 30 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 30 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 30)) {
        servos.P1.run(-25)
        servos.P2.run(-25)
    }
})
radio.setGroup(5)
basic.showNumber(3)
