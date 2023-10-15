import type { Document, Model } from 'mongoose';
export interface UserDocument extends Document {
    email: string;
    password?: string;
    username: string;
    avatar?: string;
    provider?: 'google' | null;
    providerAccountId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export declare const User: Model<UserDocument>;
//# sourceMappingURL=user.d.ts.map