import { getConversions, generatePointsOnBezierCurve } from "../../paths/PathFollower";
import { Coordinates } from "../../../helpers/types";

const conversions = getConversions();

export function butterflyPath1(destination: Coordinates) {
    const pts = [
        { x: conversions.x * 200, y: conversions.y * 1},
        { x: conversions.x * 200, y: conversions.y * 30},
        { x: conversions.x * 335, y: conversions.y * 145},
        { x: conversions.x * 380, y: conversions.y * 190},
        { x: conversions.x * 395, y: conversions.y * 250},
        { x: conversions.x * 365, y: conversions.y * 300},
        { x: conversions.x * 310, y: conversions.y * 320},
        { x: conversions.x * 250, y: conversions.y * 280},
        { x: conversions.x * 250, y: conversions.y * 170},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}

export function beePath1(destination: Coordinates) {
    const pts = [
        { x: conversions.x * 300, y: conversions.y * 1},
        { x: conversions.x * 300, y: conversions.y * 30},
        { x: conversions.x * 165, y: conversions.y * 145},
        { x: conversions.x * 120, y: conversions.y * 190},
        { x: conversions.x * 105, y: conversions.y * 250},
        { x: conversions.x * 135, y: conversions.y * 300},
        { x: conversions.x * 190, y: conversions.y * 320},
        { x: conversions.x * 250, y: conversions.y * 280},
        { x: conversions.x * 250, y: conversions.y * 170},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}