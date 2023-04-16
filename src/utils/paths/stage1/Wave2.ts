import { getConversions, generatePointsOnBezierCurve } from "../PathFollower";
import { Coordinates } from "../../../game/helpers/types";

export function path2(destination: Coordinates) {
    const conversions = getConversions();
    const pts = [
        { x: conversions.x * 0, y: conversions.y * 450},
        { x: conversions.x * 50, y: conversions.y * 440},
        { x: conversions.x * 160, y: conversions.y * 420},
        { x: conversions.x * 255, y: conversions.y * 350},
        { x: conversions.x * 245, y: conversions.y * 250},
        { x: conversions.x * 165, y: conversions.y * 205},
        { x: conversions.x * 75, y: conversions.y * 225},
        { x: conversions.x * 45, y: conversions.y * 325},
        { x: conversions.x * 85, y: conversions.y * 400},
        { x: conversions.x * 150, y: conversions.y * 415},
        { x: conversions.x * 255, y: conversions.y * 380},
        { x: conversions.x * 280, y: conversions.y * 260},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}