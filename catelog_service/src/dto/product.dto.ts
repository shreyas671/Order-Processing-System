import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateProductRequest {
  @IsString()
  @IsNotEmpty()
  name: string | undefined;

  @IsString()
  description: string | undefined;

  @IsNumber()
  @Min(1)
  price: number | undefined;

  @IsNumber()
  stock: number | undefined;
}
