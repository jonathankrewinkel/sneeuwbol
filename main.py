def on_gesture_shake():
    sneeuw_1()
    sneeuw_2()
    sneeuw_3()
    sneeuw_4()
    sneeuw_5()
    sneeuw_6()
    sneeuw_7()
    sneeuw_8()
    sneeuw_9()
    sneeuw_10()
    muziek()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)


#_______________________
def sneeuw_1():
    basic.show_leds("""
    . # . # .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
                    """)

def sneeuw_2():
    basic.show_leds("""
    # . # . .
    . # . # .
    . . . . .
    . . . . .
    . . . . .
                    """)

def sneeuw_3():
    basic.show_leds("""
    . . . # #
    # . # . .
    . # . # .
    . . . . .
    . . . . .
                    """)

def sneeuw_4():
    basic.show_leds("""
    . # . . #
    . . . # #
    # . # . .
    . # . # .
    . . . . .
                    """)

def sneeuw_5():
    basic.show_leds("""
    . . # . .
    . # . . #
    . . . # #
    # . # . .
    . # . # .
                    """)

def sneeuw_6():
    basic.show_leds("""
    # . . # .
    . . # . .
    . # . . #
    . . . # #
    # # # # .
                    """)

def sneeuw_7():
    basic.show_leds("""
    . . . . .
    . . . # .
    . . # . .
    . # . . #
    # # # # #
                    """)

def sneeuw_8():
    basic.show_leds("""
    . . . . .
    . . . . .
    . . . # .
    . . # . .
    # # # # #
                    """)

def sneeuw_9():
    basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . # .
    # # # # #
                    """)

def sneeuw_10():
    basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
                    """)


def muziek():
    music.play_melody("G C B", 120)

