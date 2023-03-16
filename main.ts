led.enable(false)
basic.forever(function () {
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) > 254 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) > 254 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 254)) {
        servos.P1.run(50)
        servos.P2.run(-50)
    } else {
        servos.P2.stop()
        servos.P1.stop()
    }
})
basic.forever(function () {
	
})
