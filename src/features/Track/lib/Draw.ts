import { Cell } from "../ui/Track";

let canvasWidth = 0;
let canvasHeight = 0;
let lengthTrack = 0;
let radiusCell = 0;
export function setCanvasSize(canvas: HTMLCanvasElement) {
    const parent = canvas.parentElement;
    if (!parent) return;

    const styles = getComputedStyle(parent);
    const width = parseInt(styles.width);
    const height = parseInt(styles.height);

    canvas.width = width;
    canvas.height = height;
}


export function drawCells(ctx: CanvasRenderingContext2D, cells: Cell[]) {
    cells.forEach(( cell,id) => {
        ctx.beginPath();
        const direct = (Math.PI*1.5)-(radiusCell/2);
        ctx.strokeStyle = cell.color;
        ctx.lineWidth = canvasHeight/2;
        ctx.arc(canvasWidth/2, canvasHeight/2,canvasHeight/8,direct+(id-1)*radiusCell ,direct+id*radiusCell,false);
        ctx.stroke();
        ctx.closePath();
        
        // Добавляем текст
        ctx.save();
        ctx.beginPath(); 
        ctx.font = '20px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Вычисляем позицию для текста
        const angle = direct + (id - 0.5) * radiusCell;
        const radius = canvasHeight/4;
        const x = canvasWidth/2 + Math.cos(angle) * radius;
        const y = canvasHeight/2 + Math.sin(angle) * radius;
        
        let text = cell.id+"";
        switch (cell.color) {
            case 'black': text = '2X'; break;
            case 'green': text = '50X'; break;
            case 'red': text = '3X'; break;
        }
        // Поворачиваем текст
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI/2);
        ctx.fillText(text, 0, 0);
        ctx.restore();
        return cell;
    });
}



export function render(canvas: HTMLCanvasElement, cells: Cell[]) {
    const ctx = canvas.getContext('2d');
    if (!ctx || cells.length === 0) return;
    canvasWidth = canvas.width;
    lengthTrack = cells.length;
    radiusCell = (Math.PI*2) / lengthTrack;
    canvasHeight = canvas.height;
    setCanvasSize(canvas);
    drawCells(ctx, cells);
}
