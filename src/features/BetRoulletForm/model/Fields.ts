import { InputProps } from "@/shared/model";
import { BetForm } from "../ui/Form";

export const fields: Omit<InputProps<BetForm>, 'register'>[] = [
    {
        name: "bet",
        options: {
            required: "Bet is required",
            min: { value: 1, message: "Bet must be greater than 0" },
        },
        placeholder: "Bet",
        type: "number",
    }
];

