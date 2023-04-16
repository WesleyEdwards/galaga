import { getConversions, generatePointsOnBezierCurve } from "./PathFollower";
import { Coordinates } from "../../game/helpers/types";
import { OPPONENT_HEIGHT } from "../../game/helpers/constants";

export function path1(destination: Coordinates) {
    const conversions = getConversions();
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