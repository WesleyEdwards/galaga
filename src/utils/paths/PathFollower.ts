export default function computeDistance(pt1x: number, pt1y: number, pt2x: number, pt2y: number) {
    return Math.sqrt(Math.pow(pt1x - pt2x, 2) + Math.pow(pt1y - pt2y, 2));
}

// const steps = [
//     [
//         conversions.x * 300, conversions.y * 1,
//         conversions.x * 300, conversions.y * 30,
//         conversions.x * 165, conversions.y * 145,
//     ],
//     [
//         conversions.x * 120, conversions.y * 190,
//         conversions.x * 105, conversions.y * 250,
//         conversions.x * 135, conversions.y * 300,
//         conversions.x * 190, conversions.y * 320,
//         conversions.x * 250, conversions.y * 280,
//         conversions.x * 265, conversions.y * 170,
//     ]
// ]

// const pts =  [
//     conversions.x * 165, conversions.y * 145,
//     conversions.x * 120, conversions.y * 190,
//     conversions.x * 105, conversions.y * 250,
//     conversions.x * 135, conversions.y * 300,
//     conversions.x * 190, conversions.y * 320,
//     conversions.x * 250, conversions.y * 280,
//     conversions.x * 265, conversions.y * 170
// ]

// const smoothPts: number[] = [];
// for (pts of steps) {
//     for (getCurvePoints(pts, 0.5, false, 16));
// }
// const finalPts = [];
// for (let i = 0; i < smoothPts.length; i += 2) {
//     finalPts.push({ x: smoothPts[i], y: smoothPts[i + 1] });
// }
// return finalPts;