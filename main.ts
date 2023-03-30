basic.showNumber(4)
basic.forever(function () {
    // Vendo preto
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 20 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 20 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 70)) {
        // 0- branco
        // 1- preto
        // 2- verde
        // 3- cinza
        radio.sendNumber(1)
    }
    // Vendo verde
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 20 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 60 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 20)) {
        // 0- branco
        // 1- preto
        // 2- verde
        // 3- cinza
        radio.sendNumber(2)
    }
    // Vendo cinza (Precisa ser testado)
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 138 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 180 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 138 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 180 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 138 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 180 && false)))))) {
        basic.showNumber(1)
        // 0- branco
        // 1- preto
        // 2- verde
        // 3- cinza
        radio.sendNumber(3)
    }
    // vendo branco
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 230 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 230 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 230)) {
        // 0- branco
        // 1- preto
        // 2- verde
        // 3- cinza
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    radio.setGroup(5)
})
