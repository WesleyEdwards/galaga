import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../game/helpers/constants";

export function path1() {
    const conversions = getConversions();
    console.log(conversions);
    
    return [
        { x: conversions.x * 300, y: conversions.y * 1},
        { x: conversions.x * 300, y: conversions.y * 30},
        { x: conversions.x * 165, y: conversions.y * 145},
        { x: conversions.x * 120, y: conversions.y * 190},
        { x: conversions.x * 105, y: conversions.y * 250},
        { x: conversions.x * 135, y: conversions.y * 300},
        { x: conversions.x * 190, y: conversions.y * 320},
        { x: conversions.x * 250, y: conversions.y * 280},
        { x: conversions.x * 265, y: conversions.y * 170},
    ]

}

function getConversions() {
    return {
        x: CANVAS_WIDTH / 500,
        y: CANVAS_HEIGHT / 500
    }
}