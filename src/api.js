import axios from "axios";

const backendApi = axios.create({
  baseURL: "http://localhost:5555",
  withCredentials: true
});

function errorHandler(err) {
  if (err.response && err.response.data) {
    console.log("API Error", err.response.data);
  } else {
    console.log("React Code Error", err);
  }

  alert("Sorry! Something went wrong. Try again later");
  throw err;
}

export function getCharityList() {
  return backendApi.get("/api/charities").catch(errorHandler);
}

export function postSignUp(userSubmission) {
  return backendApi
    .post("/api/process-signup", userSubmission)
    .catch(errorHandler);
}

export function postLogIn(loginCredentials) {
  return backendApi
    .post("/api/process-login", loginCredentials)
    .catch(errorHandler);
}

export function getLogOut() {
  return backendApi.get("/api/logout").catch(errorHandler);
}

export function getHomePage() {
  return backendApi.get("/api/").catch(errorHandler);
}

export function getCategoryList() {
  return backendApi.get("/api/categories").catch(errorHandler);
}

export function getMissionsList() {
  return backendApi.get("/api/charities").catch(errorHandler);
}

export function getMissionDetails(charityId) {
  return backendApi.get(`/api/charities/${charityId}`).catch(errorHandler);
}

export function getUserProfile(userId) {
  console.log(userId);
  return backendApi.get(`api/profile/${userId}`).catch(errorHandler);
}

export function postCategory(categorySubmission) {
  return backendApi
    .post("/api/categories", categorySubmission)
    .catch(errorHandler);
}
export function postTime(timeSubmission) {
  console.log(timeSubmission);
  return backendApi.post("/api/dashboard", timeSubmission).catch(errorHandler);
}

export function getTimeList() {
  return backendApi.get("/api/dashboard").catch(errorHandler);
}
