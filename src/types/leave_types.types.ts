
// Define the Leave Type structure based on your database
export interface LeaveType {
    leave_type_id: number;
    type_name: string;
    description: string;
    default_days: number;
    created_at: Date;
}

// For creating new leave types (without id and created_at)
export interface NewLeaveType {
    type_name: string;
    description: string;
    default_days: number;
}

// For updating leave types (all fields optional)
export interface UpdateLeaveType {
    type_name?: string;
    description?: string;
    default_days?: number;
}