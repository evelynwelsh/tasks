import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday = "NYD" | "VDAY" | "ESTR" | "HLWN" | "XMAS";
const alphabetical: Record<Holiday, Holiday> = {
    XMAS: "ESTR",
    ESTR: "HLWN",
    HLWN: "NYD",
    NYD: "VDAY",
    VDAY: "XMAS"
};
const chronological: Record<Holiday, Holiday> = {
    NYD: "VDAY",
    VDAY: "ESTR",
    ESTR: "HLWN",
    HLWN: "XMAS",
    XMAS: "NYD"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, changeHoliday] = useState<Holiday>("VDAY");
    function nextHolidayAlphabetical(): void {
        changeHoliday(alphabetical[holiday]);
    }
    function nextHolidayChronoligical(): void {
        changeHoliday(chronological[holiday]);
    }
    return (
        <div>
            Cycle Holiday
            <Button onClick={nextHolidayAlphabetical}>
                Advance Alphabetically
            </Button>
            <Button onClick={nextHolidayChronoligical}>
                Advance Through Year
            </Button>
            <div>
                {holiday === "ESTR" ? (
                    <span>Holiday: 🐇;</span>
                ) : holiday === "XMAS" ? (
                    <span>Holiday: 🎄</span>
                ) : holiday === "HLWN" ? (
                    <span>Holiday: 🎃</span>
                ) : holiday === "NYD" ? (
                    <span>Holiday: 🎇</span>
                ) : (
                    <span>Holiday: 💕</span>
                )}
            </div>
        </div>
    );
}
