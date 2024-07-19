import {  IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class newShed{
    @IsNotEmpty({message:"No puede quedar vacío"})
    @IsInt({message:"El dato debe ser un número"})
    medicina: number

    @IsNotEmpty({message:"No puede quedar vacío"})
    @IsInt({message:"El dato debe ser un número"})
    user: number

    @IsNotEmpty({message:"No puede quedar vacío"})
    @IsInt({message:"El dato debe ser un número"})
    intervalo: number


    finish_time: Date
}

export class updatShed{
    @IsOptional()
    @IsNotEmpty({message:"No puede quedar vacío"})
    @IsInt({message:"El dato debe ser un número"})
    intervalo?: number
    
    finish_time?: Date
}