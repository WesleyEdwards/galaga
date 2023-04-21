import { Coordinates } from "../helpers/types";
import { getConversions, generatePointsOnBezierCurve  } from "../waves/paths/PathFollower";

const { x: convX, y: convY } = getConversions();

export function getAttackPath(currPos: Coordinates) {
    const path: Coordinates[] = [];
    hop(currPos, path);
    if (currPos.x < 250) leftAttackPattern(path);
    else rightAttackPattern(path);
    path.push(currPos);
    return generatePointsOnBezierCurve(path, 75);
}

function hop(pos: Coordinates, path: Coordinates[]) {
    path.push({x: pos.x, y: pos.y - 15});
    path.push({x: pos.x, y: pos.y - 30});
    path.push({x: pos.x, y: pos.y - 45});
    path.push({x: pos.x + 15, y: pos.y - 60});
    path.push({x: pos.x + 30, y: pos.y - 45});
    path.push({x: pos.x + 45, y: pos.y - 30});
    path.push({x: pos.x + 30, y: pos.y - 15});
    path.push({x: pos.x + 15, y: pos.y});
}

function leftAttackPattern(path: Coordinates[]) {
    const dirX = 125 - path[path.length - 1].x;
    const dirY = 150 - path[path.length - 1].y;
    const magX = dirX / 3;
    const magY = dirY / 3;
    for (let i = 0; i < 3; i++) {
        path.push({x: path[path.length - 1].x + magX * i, y: path[path.length - 1].y + magY * i});
    }
    // ChatGPT came up with these points
    path.push({ x: convX * 125, y: convY * 150 });
    path.push({ x: convX * 140, y: convY * 200 });
    path.push({ x: convX * 170, y: convY * 250 });
    path.push({ x: convX * 205, y: convY * 290 });
    path.push({ x: convX * 245, y: convY * 320 });
    path.push({ x: convX * 285, y: convY * 340 });
    path.push({ x: convX * 325, y: convY * 350 });
    path.push({ x: convX * 365, y: convY * 340 });
    path.push({ x: convX * 405, y: convY * 320 });
    path.push({ x: convX * 445, y: convY * 290 });
    path.push({ x: convX * 480, y: convY * 250 });
    path.push({ x: convX * 300, y: convY * 475 });
    path.push({ x: convX * 255, y: convY * 490 });
    path.push({ x: convX * 210, y: convY * 500 });
    path.push({ x: convX * 165, y: convY * 495 });
    path.push({ x: convX * 120, y: convY * 475 });
    path.push({ x: convX * 85, y: convY * 440 });
    path.push({ x: convX * 60, y: convY * 400 });
    path.push({ x: convX * 50, y: convY * 355 });
    path.push({ x: convX * 60, y: convY * 310 });
    path.push({ x: convX * 85, y: convY * 270 });
    path.push({ x: convX * 120, y: convY * 235 });
    path.push({ x: convX * 165, y: convY * 215 });
    path.push({ x: convX * 210, y: convY * 210 });
    path.push({ x: convX * 255, y: convY * 225 });
    path.push({ x: convX * 300, y: convY * 250 });
    path.push({ x: convX * 270, y: convY * 200 });
    path.push({ x: convX * 235, y: convY * 170 });
    path.push({ x: convX * 195, y: convY * 160 });
    path.push({ x: convX * 155, y: convY * 170 });
    path.push({ x: convX * 125, y: convY * 200 });
    for (let i = 3; i > 0; i--) {
        path.push({x: path[path.length - 1].x + magX * i, y: path[path.length - 1].y + magY * i});
    }

}

function rightAttackPattern(path: Coordinates[]){
    //Same as leftAttackPattern but with x values flipped across 250
    const dirX = 375 - path[path.length - 1].x;
    const dirY = 150 - path[path.length - 1].y;
    const magX = dirX / 3;
    const magY = dirY / 3;
    for (let i = 0; i < 3; i++) {
        path.push({x: path[path.length - 1].x + magX * i, y: path[path.length - 1].y + magY * i});
    }
    path.push({ x: convX * 375, y: convY * 150 });
    path.push({ x: convX * 360, y: convY * 200 });
    path.push({ x: convX * 330, y: convY * 250 });
    path.push({ x: convX * 295, y: convY * 290 });
    path.push({ x: convX * 255, y: convY * 320 });
    path.push({ x: convX * 215, y: convY * 340 });
    path.push({ x: convX * 175, y: convY * 350 });
    path.push({ x: convX * 135, y: convY * 340 });
    path.push({ x: convX * 95, y: convY * 320 });
    path.push({ x: convX * 55, y: convY * 290 });
    path.push({ x: convX * 20, y: convY * 250 });
    path.push({ x: convX * 200, y: convY * 475 });
    path.push({ x: convX * 245, y: convY * 490 });
    path.push({ x: convX * 290, y: convY * 500 });
    path.push({ x: convX * 335, y: convY * 495 });
    path.push({ x: convX * 380, y: convY * 475 });
    path.push({ x: convX * 415, y: convY * 440 });
    path.push({ x: convX * 440, y: convY * 400 });
    path.push({ x: convX * 450, y: convY * 355 });
    path.push({ x: convX * 440, y: convY * 310 });
    path.push({ x: convX * 415, y: convY * 270 });
    path.push({ x: convX * 380, y: convY * 235 });
    path.push({ x: convX * 335, y: convY * 215 });
    path.push({ x: convX * 290, y: convY * 210 });
    path.push({ x: convX * 245, y: convY * 225 });
    path.push({ x: convX * 200, y: convY * 250 });
    path.push({ x: convX * 230, y: convY * 200 });
    path.push({ x: convX * 265, y: convY * 170 });
    path.push({ x: convX * 305, y: convY * 160 });
    path.push({ x: convX * 345, y: convY * 170 });
    path.push({ x: convX * 375, y: convY * 200 });
    for (let i = 3; i > 0; i--) {
        path.push({x: path[path.length - 1].x - magX * i, y: path[path.length - 1].y + magY * i});
    }    
}