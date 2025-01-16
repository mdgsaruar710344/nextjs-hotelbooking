import { usersModel } from "@/app/models";
import { NextResponse } from "next/server";

export async function POST(request){
const userData=await request.json();
const name=userData?.name;
const email=userData?.email;
const password=userData?.password;
console.log('User Data inside POST method',name,email,password);
try {
  const createdUser=await usersModel.create({
    name:name,
    email:email,
    password:password,
  });
  console.log('Created user from database',createdUser);
  return NextResponse.json({
    message:'User Created Successfully in Database',
    data:createdUser
  },
{
  status:201,
});
} catch (error) {
  console.error(error);
}

}