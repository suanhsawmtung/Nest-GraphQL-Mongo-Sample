import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCatDto {
  @Field()
  readonly name: string;

  @Field(() => Int)
  readonly age: number;

  @Field()
  readonly breed: string;
}
