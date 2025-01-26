export function detectDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();

    // Détecter les appareils mobiles
    if (/mobile|android|iphone|ipad|ipod|windows phone|iemobile|blackberry|webos|opera mini/i.test(userAgent)) {
        // Détecter les tablettes (certaines tablettes ont des userAgents similaires aux mobiles)
        if (/ipad|tablet|kindle|silk/i.test(userAgent)) {
            return "tablet";
        }
        return "mobile";
    }

    // Sinon, considérer que c'est un ordinateur de bureau
    return "desktop";
}