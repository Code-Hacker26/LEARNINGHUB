import UserData from "../views/plugin/UserData";

export const API_BASE_URL = `http://127.0.0.1:8000/api/v1/`;
export const userId = UserData()?.user_id;
export const PAYPAL_CLIENT_ID = "AVN3E7mOkZfJe90-pCQG3Qy6umEVsVf9Jzr5p4hnCvVuC54-nxwc1vDaVQWEEDDAdRbxaOamo-by5toi";
export const teacherId = UserData()?.teacher_id; 