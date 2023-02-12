// import { createContext, useReducer } from "react";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// export const UserContext = createContext();

// const userReducer = (state, action) => {
// 	switch (action.type) {
// 		case "SET_USER":
// 			return {
// 				...state,
// 				user: action.payload,
// 			};
// 		case "SET_AUTH_TOKEN":
// 			return {
// 				...state,
// 				authToken: action.payload
// 			}
// 		default:
// 			return state;
// 	}
// }

// const UserContextProvider = (props) => {
// 	const auth = getAuth();
// 	const initialState = {
// 		user: null,
// 	}

// 	const [userState, dispatch] = useReducer(userReducer, initialState);

// 	const setUser = async (authToken) => {
// 		try {
// 			const userCredential = await signInWith
// 		}
// 	}

//   const setUser = async ()

//   useEffect(() => {
//     setUser(auth.currentUser);
//   }, []);

//   return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
// }

// export default Profile;
