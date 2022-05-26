import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'

export class King extends Figure {
    
    constructor(color: Colors, cell: Cell) {
        super(color,cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KING
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) 
          return false
        if (this.cell.isOneEmpty(target)) {
           return true
        } 
        if (this.cell.isOntyEmpty(target)) {
            return true
         } 
         if (this.cell.isOntreEmpty(target)) {
            return true
         } 
        return false
     }
}
