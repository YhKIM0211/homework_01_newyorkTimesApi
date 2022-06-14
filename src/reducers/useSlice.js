import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const funcNewsApi = async () => {
    const response = await axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&page=11&api-key=NHvfRQhoJiMLF43mhsdgCGwADhhoZEOT").then((res) => res.data.response.docs);
    return console.log(response);
};
funcNewsApi();

export const useSlice = createSlice({
    name: "news",
    initialState: {
        newsList: [],
        clipList: [],
    },

    reducers: {
        getNews: (state, action) => {
            return {
                ...state,
                newsList: action.payload,
            };
            
        },
        clipNews: (state, action) => {
            return {
                ...state,
                //  clip을 눌렀을 때, 해당 newsItems이 clipList로 들어가게 만들기
            };
        },
        removeClopNews: (state, action) => {
            return {
                ...state,
                // clip페이지에 있는 newsItem에서 unclip을 눌렀을 때 clipList에서 사라지게 만들기
            };
        },
    },
});

export const { getNews,clipNews,removeClopNews } = useSlice.actions; //작성한 리듀서의 로직을 액션으로 내보냄
export default useSlice.reducer;
