/// <reference types="qs" />
import type { Request, Response } from 'express';
import type { UserDocument } from '../models/user';
export declare const getUsers: (_req: Request, res: Response) => Promise<void>;
export declare const getUserById: (req: Request, res: Response) => Promise<void>;
export declare const updateUser: (req: Request<{
    id: string;
}, unknown, Partial<UserDocument>>, res: Response) => Promise<void>;
export declare const deleteUser: (req: Request, res: Response) => Promise<void>;
declare const _default: {
    getUsers: (_req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => Promise<void>;
    getUserById: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => Promise<void>;
    updateUser: (req: Request<{
        id: string;
    }, unknown, Partial<UserDocument>, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => Promise<void>;
    deleteUser: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => Promise<void>;
};
export default _default;
//# sourceMappingURL=user.d.ts.map