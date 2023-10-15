import type { Response } from 'express';
interface SuccessResponse {
    res: Response;
    datas?: unknown;
    other?: unknown;
}
interface ErrorResponse {
    res: Response;
    error?: string;
}
export declare const sendSuccess: ({ res, datas, other, }: SuccessResponse) => Response;
export declare const sendSuccessCache: ({ res, datas, other, }: SuccessResponse) => Response;
export declare const sendErrorServer: ({ res, error }: ErrorResponse) => Response;
export declare const sendErrorNotFound: ({ res, error, }: ErrorResponse) => Response;
export declare const sendErrorForbidden: ({ res, error, }: ErrorResponse) => Response;
export declare const sendErrorBadRequest: ({ res, error, }: ErrorResponse) => Response;
export {};
//# sourceMappingURL=responseUtils.d.ts.map