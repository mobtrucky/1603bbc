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
