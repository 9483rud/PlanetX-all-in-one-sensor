PlanetX_AILens.initModule()
basic.forever(function () {
    PlanetX_Display.showUserNumber(1, PlanetX_Basic.gasValue(PlanetX_Basic.GasList.Smoke, PlanetX_Basic.AnalogRJPin.J1))
    PlanetX_Display.showUserNumber(2, PlanetX_Basic.gasValue(PlanetX_Basic.GasList.Alcohol, PlanetX_Basic.AnalogRJPin.J1))
})
basic.forever(function () {
    PlanetX_Display.showUserText(1, "AI Lens:")
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.checkBall()) {
    	
    } else if (PlanetX_AILens.checkFace()) {
    	
    } else if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID1)) {
        PlanetX_Display.showUserText(8, "ID1")
    } else if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID2)) {
        PlanetX_Display.showUserText(8, "ID2")
    } else if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID3)) {
        PlanetX_Display.showUserText(8, "ID3")
    } else if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID4)) {
        PlanetX_Display.showUserText(8, "ID4")
    } else if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID5)) {
        PlanetX_Display.showUserText(8, "ID4")
    }
})
