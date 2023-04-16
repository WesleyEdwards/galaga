import { getConversions, generatePointsOnBezierCurve } from "./PathFollower";
import { Coordinates } from "../../game/helpers/types";
import { OPPONENT_HEIGHT } from "../../game/helpers/constants";

export function path2Butterfly(destination: Coordinates) {
    const conversions = getConversions();
    const pts = [
        { x: conversions.x * 0, y: conversions.y * 450},
        { x: conversions.x * 50, y: conversions.y * 440},
        { x: conversions.x * 160, y: conversions.y * 420},
        { x: conversions.x * 245, y: conversions.y * 375},
        { x: conversions.x * 275, y: conversions.y * 280},
        { x: conversions.x * 215, y: conversions.y * 215},
        { x: conversions.x * 140, y: conversions.y * 275},
        { x: conversions.x * 175, y: conversions.y * 350},
        { x: conversions.x * 225, y: conversions.y * 365},
        { x: conversions.x * 285, y: conversions.y * 295},
        // { x: conversions.x * 245, y: conversions.y * 365},
        // { x: conversions.x * 245, y: conversions.y * 365},
        // { x: conversions.x * 265, y: conversions.y * 265},
        // { x: conversions.x * 200, y: conversions.y * 265},
        // { x: conversions.x * 180, y: conversions.y * 330},
        // { x: conversions.x * 240, y: conversions.y * 385},
        // { x: conversions.x * 280, y: conversions.y * 330},
        // { x: conversions.x * 250, y: conversions.y * 240},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 50);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}