// Monte-Carlo estimate of how often the baseline page shows an empty icon.
// Same selection rule as the page: Math.floor(r * lunchMenu.length).
// A seeded PRNG (mulberry32) is used instead of Math.random so the run is reproducible.
const N_ITEMS = 12;
const BROKEN = new Set([5, 7, 10]); // Ramen, Pasta, Soup (indices in lunchMenu)
const TRIALS = 100_000;
const CLICKS = 5; // page load + 4 clicks

function mulberry32(seed) {
    return () => {
        seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const rand = mulberry32(42);
let brokenDraws = 0;
let sessionsWithBroken = 0;
for (let s = 0; s < TRIALS; s++) {
    let hit = false;
    for (let c = 0; c < CLICKS; c++) {
        if (BROKEN.has(Math.floor(rand() * N_ITEMS))) { brokenDraws++; hit = true; }
    }
    if (hit) sessionsWithBroken++;
}

const p = BROKEN.size / N_ITEMS;
console.log(`per-draw  empirical=${(brokenDraws / (TRIALS * CLICKS)).toFixed(4)}  analytic=${p.toFixed(4)}`);
console.log(`>=1 empty in ${CLICKS} draws  empirical=${(sessionsWithBroken / TRIALS).toFixed(4)}  analytic=${(1 - (1 - p) ** CLICKS).toFixed(4)}`);
