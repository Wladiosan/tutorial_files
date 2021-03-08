function tCreateAnalytics(): object {
    let tCounter = 0
    let tIsDestroyed: boolean = false
    const tListener = (): number => tCounter++
    document.addEventListener('click', tListener)

    return {
        tDestroy() {
            document.removeEventListener('click', tListener)
            tIsDestroyed = true
        },

        tGetClicks() {
            if (tIsDestroyed) {
                return `Analytics is destroyed. Total click is ${tCounter}`
            }
            return tCounter
        }
    }
}

window['tAnalytics'] = tCreateAnalytics()