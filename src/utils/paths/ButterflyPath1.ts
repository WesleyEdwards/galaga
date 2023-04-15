import { getConversions, generatePointsOnBezierCurve } from "./PathFollower";
import { Coordinates } from "../../game/helpers/types";

export function path1Butterfly(destination: Coordinates) {
    const conversions = getConversions();
    const pts = [
        { x: conversions.x * 200, y: conversions.y * 1},
        { x: conversions.x * 200, y: conversions.y * 30},
        { x: conversions.x * 335, y: conversions.y * 145},
        { x: conversions.x * 380, y: conversions.y * 190},
        { x: conversions.x * 395, y: conversions.y * 250},
        { x: conversions.x * 365, y: conversions.y * 300},
        { x: conversions.x * 310, y: conversions.y * 320},
        { x: conversions.x * 250, y: conversions.y * 280},
        { x: conversions.x * 275, y: conversions.y * 170},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}