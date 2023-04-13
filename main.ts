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
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 20 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 20 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 70)) {
        radio.sendMessage(RadioMessage.preto)
    }
    // Vendo verde
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 20 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 60 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 20)) {
        radio.sendMessage(RadioMessage.verde)
    }
    // vendo branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 230 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 230 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 230)) {
        radio.sendMessage(RadioMessage.branco)
    }
})
