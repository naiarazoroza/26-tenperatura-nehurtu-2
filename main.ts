let tenperatura = 0
music.setVolume(255)
basic.forever(function () {
    tenperatura = input.temperature()
    basic.showNumber(input.temperature())
    if (tenperatura < 17) {
        basic.showIcon(IconNames.Chessboard)
    } else if (tenperatura > 20) {
        basic.showIcon(IconNames.Square)
    }
})
basic.forever(function () {
    if (tenperatura < 17) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
    }
    if (tenperatura > 20) {
        music.playTone(370, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Quarter))
    }
})
