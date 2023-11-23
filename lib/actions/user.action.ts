"use server";

import User from "@/database/user.model";
import { connectTodatabase } from "../mongoose";

export async function getUserById(params: any) {
  try {
    connectTodatabase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
