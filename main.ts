enum RadioMessage {
    branco = 12276,
    verde = 14709,
    preto = 24635,
    message1 = 49434
}
basic.showNumber(4)
radio.setGroup(5)
basic.forever(function () {
    // Vendo preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 36 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 85 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) == 255)) {
        basic.showString("p")
        radio.sendMessage(RadioMessage.preto)
    }
    // vendo branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) >= 36 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) >= 85 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) == 255)) {
        basic.showString("b")
        radio.sendMessage(RadioMessage.branco)
    }
    // vendo verde
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 57 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) == 255 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 38)) {
        basic.showString("v")
        radio.sendMessage(RadioMessage.verde)
    }
})
