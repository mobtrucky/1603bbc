enum RadioMessage {
    message1 = 49434,
    preto = 24635,
    verde = 14709,
    branco = 12276
}
basic.showNumber(4)
radio.setGroup(5)
basic.forever(function () {
    // Vendo preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 25 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 25 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 67)) {
        radio.sendMessage(RadioMessage.preto)
    }
    // vendo branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 30 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 30 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 30)) {
        radio.sendMessage(RadioMessage.branco)
    }
})
