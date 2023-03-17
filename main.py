def on_received_number(receivedNumber):
    # Branco e branco
    if receivedNumber == 0 and (Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_B) > 254 and (Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_G) > 254 and Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_R) > 254)):
        servos.P1.run(50)
        servos.P2.run(-50)
    # Preto e preto
    if receivedNumber == 1 and (Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_B) == 0 and (Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_G) == 0 and Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_R) == 0)):
        servos.P1.run(50)
        servos.P2.run(50)
    # Branco e preto
    if receivedNumber == 0 and (Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_B) == 0 and (Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_G) == 0 and Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_R) == 0)):
        servos.P1.run(-50)
        servos.P2.run(-50)
    # Preto e branco
    if receivedNumber == 1 and (Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_B) > 254 and (Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_G) > 254 and Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_R) > 254)):
        servos.P1.run(50)
        servos.P2.run(-50)
radio.on_received_number(on_received_number)

def on_forever():
    # Branco e branco
    if Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_B) > 254 and (Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_G) > 254 and Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_R) > 254):
        servos.P1.run(50)
        servos.P2.run(-50)
    # Branco e Preto
    if Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_B) > 254 and (Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_G) > 254 and Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_R) > 254):
        servos.P1.run(50)
        servos.P2.run(-50)
    # Preto e Branco
    if Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_B) > 254 and (Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_G) > 254 and Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_R) > 254):
        servos.P1.run(50)
        servos.P2.run(-50)
    # Preto e Preto
    if Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_B) > 254 and (Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_G) > 254 and Module_World_Color.get_rgb_value(Module_World_Color.enGetRGB.GET_VALUE_R) > 254):
        servos.P1.run(50)
        servos.P2.run(-50)
basic.forever(on_forever)
