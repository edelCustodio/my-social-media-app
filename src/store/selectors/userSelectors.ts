import { SocialState } from "../types";

export const UserSelectors = {
    selectUsers: (state: SocialState) => state.user.users
}