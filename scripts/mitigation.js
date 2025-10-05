function calculateMitigation() {
    const diameter = dquery('#inputDiameter').value
    const velocity = dquery('#inputVelocity').value
    const distance = dquery('#inputDistance').value
    const density = dquery('#inputDensity').value

    const mass = (4/3) * Math.PI * Math.pow(diameter/2, 3) * density
    const energy = 0.5 * mass * Math.pow(velocity, 2)
    const time = distance / velocity
    const deltaV = 0.001 // change needed for deflection
    const kineticEnergyNeeded = 0.5 * mass * Math.pow(deltaV, 2)
    const feasibility = kineticEnergyNeeded / energy

    dquery('#resultMass').innerHTML = formatNumber(mass)
    dquery('#resultEnergy').innerHTML = formatNumber(energy/4.184e9)
    dquery('#resultImpactTime').innerHTML = formatTime(time)
    dquery('#resultDeflectionEnergy').innerHTML = formatNumber(kineticEnergyNeeded)

    const suggestion = dquery('#resultSuggestion')
    if (feasibility < 1e-6 && time > 1e6) suggestion.innerHTML = 'Gravity tractor feasible' 
    else if (feasibility < 1e-4 && time > 1e5) suggestion.innerHTML = 'Kinetic impactor feasible'
    else if (time < 60) suggestion.innerHTML = 'Mitigation difficult/impossible'
    else suggestion.innerHTML = 'Nuclear deflection likely required'
}

const asteroidLookup = {
    "1862 Apollo (2046)": {
        diameter: 1500,
        velocity: 17982,
        distance: 5279647,
        density: 2050
    },
    "2101 Adonis (2036)": {
        diameter: 523,
        velocity: 23771,
        distance: 5340456,
        density: 2000
    },
    "4581 Asclepius (2019)": {
        diameter: 244,
        velocity: 6952,
        distance: 20659284,
        density: 1000
    },
    "2008 TS26 (2023)": {
        diameter: 94,
        velocity: 11728,
        distance: 12093396,
        density: 1000
    },
    "2020 VT4 (2020)": {
        diameter: 9,
        velocity: 13427,
        distance: 6746,
        density: 3000
    }
}

function setAsteroidParam(a) {
    if (a in asteroidLookup) {
        const lookup = asteroidLookup[a]
        dquery('#inputDiameter').value = lookup.diameter
        dquery('#inputVelocity').value = lookup.velocity
        dquery('#inputDistance').value = lookup.distance
        dquery('#inputDensity').value = lookup.density
    }
}