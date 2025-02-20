import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type Store = {  
    selectedCells: number[],
    wins: number[]
}

type Actions = {
    setSelectedCell: (cell: number) => void;
    setWins: (wins: number[]) => void;
}
export const store = create<Store & Actions>()(immer(set => ({
    selectedCells: [],
    wins: [],
    setSelectedCell: (cell) => {
        set(state => {
            if (state.selectedCells.includes(cell)) {
                state.selectedCells = state.selectedCells.filter(c => c !== cell);
            } else {
                if (state.selectedCells.length < 10) {
                    state.selectedCells.push(cell);
                }
            }
        })
    },
    setWins: (wins) => {
        set(state => {
            state.wins = wins;
        })
    }

})))