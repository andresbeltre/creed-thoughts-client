import axios from "axios";
import { FETCH_THOUGHT, LOADING_DATA } from "./types";

export const fetchThought = () => async dispatch => {
	dispatch(setLoadingData());
	const res = await axios.get("https://us-central1-creed-thoughts-e5d5d.cloudfunctions.net/api/thoughts/random");

	dispatch({ type: FETCH_THOUGHT, payload: res.data });
};

export const setLoadingData = () => {
	return {
		type: LOADING_DATA
	};
};