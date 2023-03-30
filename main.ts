basic.forever(function () {
    // Vendo branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 230 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 230 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 230)) {
        servos.P1.run(100)
        servos.P2.run(-100)
    } else {
        servos.P2.stop()
        servos.P1.stop()
    }
    // Vendo azul/ preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 20 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 20 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 70)) {
        servos.P1.run(-100)
        servos.P2.run(100)
    } else {
        servos.P2.stop()
        servos.P1.stop()
    }
    // Vendo verde
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 20 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 60 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 20)) {
        servos.P1.run(100)
        servos.P2.run(-100)
    } else {
        servos.P2.stop()
        servos.P1.stop()
    }
})
