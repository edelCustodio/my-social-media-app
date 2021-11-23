import { SocialState } from "../types";


export const PostSelectors = {
    selectPosts: (state: SocialState) => state.post.posts
}