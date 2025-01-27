import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const published = questions.filter(
        (quest: Question): boolean => quest.published
    );
    return published;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter(
        (quest: Question): boolean =>
            quest.body !== "" ||
            quest.options.length !== 0 ||
            quest.expected !== ""
    );
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const find = questions.filter((que: Question): boolean => que.id === id);
    return find.length > 0 ? find[0] : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const without = questions.filter(
        (quest: Question): boolean => quest.id != id
    );
    return without;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((quest: Question): string => quest.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (currSum: number, quest: Question) => currSum + quest.points,
        0
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const published = questions.filter(
        (quest: Question): boolean => quest.published
    );
    return published.reduce(
        (currSum: number, que: Question) => currSum + que.points,
        0
    );
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const opening = "id,name,options,points,published\n";
    const strQuest = questions
        .map(
            (quest: Question): string =>
                `${quest.id},${quest.name},${quest.options.length},${quest.points},${quest.published}`
        )
        .join("\n");
    return opening + strQuest;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(
        (quest: Question): Answer => ({
            questionId: quest.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (quest: Question): Question => ({ ...quest, published: true })
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const shortAns = questions.filter(
        (quest: Question): boolean => quest.type === "short_answer_question"
    );
    const multChoice = questions.filter(
        (quest: Question): boolean => quest.type === "multiple_choice_question"
    );
    return shortAns.length === 0 || multChoice.length === 0 ? true : false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuest = makeBlankQuestion(id, name, type);
    const withNewQuestion = [...questions, newQuest];
    return withNewQuestion;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map(
        (quest: Question): Question => ({
            ...quest,
            name: quest.id === targetId ? newName : quest.name
        })
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map(
        (quest: Question): Question => ({
            ...quest,
            options:
                quest.id === targetId &&
                newQuestionType === "short_answer_question"
                    ? []
                    : quest.options,
            type: quest.id === targetId ? newQuestionType : quest.type
        })
    );
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function help(
    quest: Question,
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): string[] {
    let final;
    if (targetOptionIndex !== -1) {
        const c: string[] = [...quest.options];
        c.splice(targetOptionIndex, 1, newOption);

        final = {
            ...quest,
            options: c
        };
    } else {
        final = { ...quest, options: [...quest.options, newOption] };
    }
    return final.options;
}
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    const edited = questions.map(
        (quest: Question): Question => ({
            ...quest,
            options:
                quest.id === targetId
                    ? help(quest, targetId, targetOptionIndex, newOption)
                    : quest.options
        })
    );
    return edited;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const index = questions.findIndex(
        (q: Question): boolean => q.id === targetId
    );
    const newQ = duplicateQuestion(newId, questions[index]);
    const copy = [...questions];
    copy.splice(index + 1, 0, newQ);
    return copy;
}
