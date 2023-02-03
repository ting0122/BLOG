import { IsString } from "class-validator";

export class AddUserDto {

    @IsString()
    readonly name : string;

    @IsString()
    readonly password : string;
}