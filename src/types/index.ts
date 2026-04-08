export interface Room { id: string; name: string; style: string; }
export interface ApiResponse<T> { success: boolean; data?: T; }
