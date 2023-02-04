//

window.onload = function() {
}

function addfloor(target) {
    target.className = "floor floor-carpet";
}

//temp function for testing and debugging
function addfloor(target, type) {
    var wall, shadow, obj;
    target.className = "floor floor-carpet";
    switch (type) {
        case 1:
            //a corner with two walls
            wall = document.createElement("div");
            wall.className = "wall-y-high wall-dot";
            shadow = document.createElement("div");
            shadow.className = "wall-y-corner-shadow";
            wall.appendChild(shadow);
            shadow = document.createElement("div");
            shadow.className = "wall-y-bottom-shadow";
            wall.appendChild(shadow);
            shadow = document.createElement("div");
            shadow.className = "wall-y-left-shadow";
            wall.appendChild(shadow);
            target.appendChild(wall);
            //
            wall = document.createElement("div");
            wall.className = "wall-x-high wall-dot";
            shadow = document.createElement("div");
            shadow.className = "wall-x-corner-shadow";
            wall.appendChild(shadow);
            shadow = document.createElement("div");
            shadow.className = "wall-x-bottom-shadow";
            wall.appendChild(shadow);
            shadow = document.createElement("div");
            shadow.className = "wall-x-right-shadow";
            wall.appendChild(shadow);
            target.appendChild(wall);
            break;
        case 2:
            // a y wall with painting
            wall = document.createElement("div");
            wall.className = "wall-y-high wall-dot";
            shadow = document.createElement("div");
            shadow.className = "wall-y-bottom-shadow";
            wall.appendChild(shadow);
            obj = document.createElement("div");
            obj.className = "picture-y-wrap";
            shadow = document.createElement("div");
            shadow.className = "picture-hanger";
            obj.appendChild(shadow);
            shadow = document.createElement("div");
            shadow.className = "picture-y";
            obj.appendChild(shadow);
            wall.appendChild(obj);
            target.appendChild(wall);
            break;
        case 3:
            // a y short wall
            wall = document.createElement("div");
            wall.className = "wall-y wall-dot";
            shadow = document.createElement("div");
            shadow.className = "wall-y-bottom-shadow";
            wall.appendChild(shadow);
            target.appendChild(wall);
            break;
        case 4:
            // a x wall with window
            wall = document.createElement("div");
            wall.className = "wall-x-high wall-dot";
            shadow = document.createElement("div");
            shadow.className = "wall-x-bottom-shadow";
            wall.appendChild(shadow);
            obj = document.createElement("div");
            obj.className = "window-x";
            wall.appendChild(obj);
            target.appendChild(wall);
            break;
        case 5:
            // a x short wall
            wall = document.createElement("div");
            wall.className = "wall-x wall-dot";
            shadow = document.createElement("div");
            shadow.className = "wall-x-bottom-shadow";
            wall.appendChild(shadow);
            target.appendChild(wall);
            break;
        default:
            break;
    }
}