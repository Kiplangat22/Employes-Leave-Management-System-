
import { Request, Response } from 'express';
import * as leaveTypeService from '../services/leave_type.services';


// Get all leave types
export const getLeaveTypes = async (req: Request, res: Response) => {
    try {
        const leaveTypes = await leaveTypeService.listLeaveTypes();
        res.status(200).json(leaveTypes);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Get leave type by ID
export const getLeaveTypeById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const leaveType = await leaveTypeService.getLeaveType(id);
        if (leaveType) {
            res.status(200).json(leaveType);    
        } else {
            res.status(404).json({ message: 'Leave type not found' });
        }  
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }   
};

export function updateLeaveType(arg0: string, updateLeaveType: any) {
    throw new Error("Function not implemented.");
}

// Create a new leave type
export const createLeaveType = async (req: Request, res: Response) => {
    const leaveType = req.body;
    try {
        const result = await leaveTypeService.createLeaveType(leaveType);
        res.status(201).json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update an existing leave type
export const updateLeaveTypeById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const leaveType = req.body;

      // Bad request if id is not a number
    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid leave type id' });
    }
    
    // Proceed to update
    try {
        const result = await leaveTypeService.updateLeaveType(id, leaveType);
        res.status(200).json(result);
    } catch (error: any) {
        // Not found if leave type with id does not exist
        if (error.message === 'Leave type not found') {
            return res.status(404).json({ message: 'Leave type not found' });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};


// Delete a leave type
export const deleteLeaveType = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    
    // Bad request if id is not a number
    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid leave type id' });
    }

    // Proceed to delete
    try {
        const result = await leaveTypeService.deleteLeaveType(id);
        res.status(204).json(result);
    } catch (error: any) {
        // Not found if leave type with id does not exist
        if (error.message === 'Leave type not found') {
            return res.status(404).json({ message: 'Leave type not found' });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};
