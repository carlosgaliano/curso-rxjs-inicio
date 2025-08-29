import { GitUser } from "./gitUser.interface";

export interface GitUsersRespond {
    total_count:        number;
    incomplete_results: boolean;
    items:              GitUser[];
}