import axios from "axios";
import { ParticipantsType } from "../types/participants-type";

const API_URL = "http://localhost:3333";

export const getParticipants = async (): Promise<ParticipantsType[]> => {
  try {
    const response = await axios.get<{ participants: ParticipantsType[] }>(
      `${API_URL}/participants`
    );
    return response.data.participants;
  } catch (error) {
    console.error("There was an error making the request:", error);
    return [];
  }
};
