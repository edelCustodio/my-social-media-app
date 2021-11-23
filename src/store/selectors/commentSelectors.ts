import { SocialState } from "../types";


export const CommentSelectors = {
    selectCommentsByPostId: (state: SocialState, postId: number) => {
        const comments = state.comment.comments.filter(w => w.postId === postId);
        return comments;
    }
}