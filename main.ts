enum RadioMessage {
    message1 = 49434,
    branco = 12276,
    preto = 24635,
    verde = 14709
}
radio.onReceivedMessage(RadioMessage.verde, function () {
    // Preto e verde
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 39 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 250 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 39)) {
        basic.showString("v")
    }
})
radio.onReceivedMessage(RadioMessage.branco, function () {
    // Branco e branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 30 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 30 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 30)) {
        basic.showString("bb")
    }
    // Branco e preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 40 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 40 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 50)) {
        basic.showString("bp")
    }
})
radio.onReceivedMessage(RadioMessage.preto, function () {
    // Preto e preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 40 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 40 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 50)) {
        basic.showString("pp")
    }
    // Preto e branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 30 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 30 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 30)) {
        basic.showString("pb")
    }
})
radio.setGroup(5)
basic.showNumber(3)
