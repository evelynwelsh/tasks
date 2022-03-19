import { Question } from "./question";

export interface Quiz {
    title: string;
    description: string;
    quest: Question[];
    totpoints: number;
}
