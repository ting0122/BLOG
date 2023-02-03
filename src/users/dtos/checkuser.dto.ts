import { IsString } from "class-validator";

export class CheckUserDto {

    @IsString()
    readonly name : string;

    @IsString()
    readonly password : string;
}