import type { Document, Model } from 'mongoose';
import { hashSync } from 'bcrypt';
import mongoose from 'mongoose';

const saltRounds = 10;

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

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String },
    username: { type: String, required: true, unique: true },
    avatar: { type: String },
    provider: { type: String, default: null },
    providerAccountId: { type: String, default: null },
  },
  { timestamps: true }
);

userSchema.pre('save', function save(this: UserDocument, next) {
  if (!this.isModified('password') || !this.password) {
    next();
    return;
  }

  this.password = hashSync(this.password, saltRounds);
  next();
});

export const User: Model<UserDocument> = mongoose.model('User', userSchema);
