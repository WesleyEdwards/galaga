export default function computeDistance(pt1x: number, pt1y: number, pt2x: number, pt2y: number) {
    return Math.sqrt(Math.pow(pt1x - pt2x, 2) + Math.pow(pt1y - pt2y, 2));
}