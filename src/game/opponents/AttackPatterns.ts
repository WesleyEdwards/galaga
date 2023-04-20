import { Coordinates } from "../helpers/types";
import { getConversions, generatePointsOnBezierCurve  } from "../waves/paths/PathFollower";

const { x: convX, y: convY } = getConversions();

export function getAttackPath(currPos: Coordinates) {
    const path: Coordinates[] = [];
    hop(currPos, path);
    leftAttackPattern(path);
    path.push(currPos);
    return generatePointsOnBezierCurve(path, 50);
}

function hop(pos: Coordinates, path: Coordinates[]) {
    path.push({x: pos.x, y: pos.y - 5});
    path.push({x: pos.x, y: pos.y - 10});
    path.push({x: pos.x, y: pos.y - 5});
    path.push({x: pos.x, y: pos.y});
}

function leftAttackPattern(path: Coordinates[]) {
    path.push({x: convX * 200, y: convY * 1});
    path.push({ x: convX * 0, y: convY * 405});
    path.push({ x: convX * 65, y: convY * 395});
    path.push({ x: convX * 200, y: convY * 370});
    path.push({ x: convX * 300, y: convY * 325});
    path.push({ x: convX * 280, y: convY * 95});
    path.push({ x: convX * 185, y: convY * 75});
    path.push({ x: convX * 40, y: convY * 115});
    path.push({ x: convX * -5, y: convY * 250});
    path.push({ x: convX * 55, y: convY * 360});
    path.push({ x: convX * 160, y: convY * 375});
    path.push({ x: convX * 280, y: convY * 315});
    path.push({ x: convX * 300, y: convY * 185});
    path.push({ x: convX * 300, y: convY * 165});
}

function rightAttackPattern(path: Coordinates[]) {
    path.push({x: convX * 375, y: convY * 250});
    path.push({ x: convX * 0, y: convY * 405});
    path.push({ x: convX * 65, y: convY * 395});
    path.push({ x: convX * 200, y: convY * 370});
    path.push({ x: convX * 300, y: convY * 325});
    path.push({ x: convX * 280, y: convY * 95});
    path.push({ x: convX * 185, y: convY * 75});
    path.push({ x: convX * 40, y: convY * 115});
    path.push({ x: convX * -5, y: convY * 250});
    path.push({ x: convX * 55, y: convY * 360});
    path.push({ x: convX * 160, y: convY * 375});
    path.push({ x: convX * 280, y: convY * 315});
    path.push({ x: convX * 300, y: convY * 185});
    path.push({ x: convX * 300, y: convY * 165});
}

function middleAttackPattern() {

}