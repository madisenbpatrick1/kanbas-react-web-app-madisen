import {createSlice } from "@reduxjs/toolkit";
//import { quizzes } from "../../Database";

const initialState = {
    quizzes: [],
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {

        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },

        addQuiz: (state, { payload: quiz }) => {
            const newQuiz: any = {
                _id: new Date().getTime().toString(),
                title: quiz.title,
                questions: quiz.questions,
                course: quiz.course,

            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },
        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter((q: any) => q._id!== quizId) as any;
        },
        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === quiz._id? quiz : q
            ) as any;
        },
        publishQuiz: (state, { payload: quizId})=> {
            // const quiz = state.quizzes.find((q) => q._id!== quizId);
            // if (quiz) {
            //     quiz.published = true;
            // }
        },
        unPublishQuiz: (state, {payload: quizId}) => {
            // const quiz = state.quizzes.find((q) => q._id!== quizId);
            // if (quiz) {
            //     quiz?.published = false;
            // }
        }
    }
})

export const { addQuiz, deleteQuiz, updateQuiz, publishQuiz, unPublishQuiz, setQuizzes } = quizzesSlice.actions;
export default quizzesSlice.reducer;