enum RadioMessage {
    message1 = 49434,
    branco = 12276,
    preto = 24635
}
radio.onReceivedMessage(RadioMessage.branco, function () {
    // Branco e branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 230 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 230 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 230)) {
        servos.P1.run(50)
        servos.P2.run(-50)
    }
    // Branco e preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 20 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 20 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 70)) {
        servos.P1.run(50)
        servos.P2.run(50)
    }
})
radio.onReceivedMessage(RadioMessage.preto, function () {
    // Preto e preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 20 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 20 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 70)) {
        servos.P1.run(50)
        servos.P2.run(-50)
    }
    // Preto e branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 230 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 230 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 230)) {
        servos.P1.run(-50)
        servos.P2.run(-50)
    }
})
radio.setGroup(5)
basic.showNumber(3)
