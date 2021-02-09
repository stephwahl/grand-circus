function tempConverter(temperature, convertTo) {
    // F to C
    if (convertTo.toUpperCase() === 'C') {
        return (temperature - 32) * (5/9) + " (C)";
    }
    
    // C to F
    // (tempurature * 9/5) + 32
    return null;
}


module.exports = tempConverter;