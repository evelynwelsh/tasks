import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import userEvent from "@testing-library/user-event";
//import { MultipleChoiceQuestion } from "../form-components/MultipleChoiceQuestion";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        const linkElement = screen.getByText(/Quizzer/i);
        expect(linkElement).toBeInTheDocument();
    });
    test("Test Quiz titles render", () => {
        const linkElement = screen.getByText(/Test Quiz 1/i);
        const linkElementSecond = screen.getByText(/Test Quiz 2/i);
        expect(linkElement).toBeInTheDocument();
        expect(linkElementSecond).toBeInTheDocument();
    });
    test("The number of questions renders for both quizzes", () => {
        const linkElement = screen.getByText(/4 Questions/i);
        const linkElementSecond = screen.getByText(/3 Questions/i);
        expect(linkElement).toBeInTheDocument();
        expect(linkElementSecond).toBeInTheDocument();
    });
    test("The total point values render", () => {
        const linkElement = screen.getByText(/5/i);
        const linkElementSecond = screen.getByText(/30/i);
        expect(linkElement).toBeInTheDocument();
        expect(linkElementSecond).toBeInTheDocument();
    });
    test("There are two View Questions button", () => {
        const buttons = screen.getAllByRole("button", {
            name: /View Questions/i
        });
        expect(buttons.length).toBe(2);
    });
    test("You can click to view questions.", () => {
        const quests = screen.getAllByRole("button", {
            name: /View Questions/i
        });
        quests[0].click();
        expect(screen.getByRole("button", { name: /Hide Questions/i }))
            .toBeInTheDocument;
    });
    test("You can click the right MC answer and see a checkmark.", () => {
        const quests = screen.getAllByRole("button", {
            name: /View Questions/i
        });
        quests[0].click();
        const select = screen.getAllByRole("combobox");
        userEvent.selectOptions(select[0], "red");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
    });
    test("You can click the wrong MC answer and see a red X.", () => {
        const quests = screen.getAllByRole("button", {
            name: /View Questions/i
        });
        quests[0].click();
        const select = screen.getAllByRole("combobox");
        userEvent.selectOptions(select[0], "apple");
        const red = screen.getAllByText(/❌/i);
        expect(red.length).toBe(4);
    });
    test("You can enter the right short answer and get a check.", () => {
        const quests = screen.getAllByRole("button", {
            name: /View Questions/i
        });
        quests[0].click();
        const select = screen.getAllByRole("textbox");
        userEvent.type(select[0], "4");
        const corr = screen.getAllByText(/✔️/i);
        expect(corr.length).toBe(2);
    });
    test("You can enter the wrong short answer and get a red X.", () => {
        const quests = screen.getAllByRole("button", {
            name: /View Questions/i
        });
        quests[0].click();
        const select = screen.getAllByRole("textbox");
        userEvent.type(select[0], "cheese");
        const incorr = screen.getAllByText(/❌/i);
        expect(incorr.length).toBe(3);
    });
    test("Both MC and SR questions render", () => {
        const quests = screen.getAllByRole("button", {
            name: /View Questions/i
        });
        quests[0].click();
        const questsMC = screen.getAllByRole("combobox", {});
        const questsSR = screen.getAllByRole("textbox", {});
        expect(questsMC.length).toBe(2);
        expect(questsSR.length).toBe(2);
    });
    test("There is one checkbox and no textboxes (taken from EditMode.test.tsx)", () => {
        const switchButton = screen.getByRole("checkbox");
        expect(switchButton).toBeInTheDocument();
        expect(switchButton.parentElement).toHaveClass("form-switch");
        expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    });
    test("You can switch to Edit Mode", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();

        expect(
            screen.getByRole("checkbox", {
                name: /Enter Quiz Mode/i
            })
        ).toBeInTheDocument();
    });
    test("Editing the quiz title changes it", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        const nameBoxes = screen.getAllByRole("textbox");
        userEvent.type(nameBoxes[0], "Better Quiz");
        switchButton.click();
        expect(screen.getByText(/Better Quiz/i)).toBeInTheDocument();
    });
    test("Editing the quiz description changes it", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        const nameBoxes = screen.getAllByRole("textbox");
        userEvent.type(nameBoxes[1], "A better quiz!");
        switchButton.click();
        expect(screen.getByText(/A better quiz!/i)).toBeInTheDocument();
    });
    test("Editing the point value changes it", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        const nameBoxes = screen.getAllByRole("textbox");
        userEvent.type(nameBoxes[2], "15");
        switchButton.click();
        const quests = screen.getAllByRole("button", {
            name: /View Questions/i
        });
        quests[0].click();
        expect(screen.getByText(/15/i)).toBeInTheDocument();
    });
    test("Editing the question body changes it", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        const nameBoxes = screen.getAllByRole("textbox");
        userEvent.type(
            nameBoxes[3],
            "What is the last letter of the English alphabet?"
        );
        switchButton.click();
        const quests = screen.getAllByRole("button", {
            name: /View Questions/i
        });
        quests[0].click();
        expect(
            screen.getByText(
                /What is the last letter of the English alphabet?/i
            )
        ).toBeInTheDocument();
    });
    test("Editing the question correct answer changes it", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        const nameBoxes = screen.getAllByRole("textbox");
        userEvent.type(nameBoxes[4], "Evelyn");
        switchButton.click();
        const quests = screen.getAllByRole("button", {
            name: /View Questions/i
        });
        quests[0].click();
        expect(screen.getByText(/Evelyn/i)).toBeInTheDocument();
    });
    test("There are checkboxes to publish each question", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        const checks = screen.getAllByRole("checkbox");
        expect(checks.length).toBe(8);
    });
});
