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
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 25 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 25 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 67)) {
        basic.showString("p")
        radio.sendMessage(RadioMessage.preto)
    }
    // vendo branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 30 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 30 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 30)) {
        basic.showString("b")
        radio.sendMessage(RadioMessage.branco)
    }
    // vendo verde
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 39 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 250 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 39)) {
        basic.showString("v")
        radio.sendMessage(RadioMessage.verde)
    }
})
