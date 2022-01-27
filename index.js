function findMatching(someArray, driverName) {
    return someArray.filter(drvr => drvr.toLowerCase() === driverName.toLowerCase());
}

function fuzzyMatch(someArray, firstLetters) {
    return someArray.filter(name => name.startsWith(firstLetters))
}

function matchName(someArray, driversName) {
    return someArray.filter(drvrName => drvrName.name === driversName)
}