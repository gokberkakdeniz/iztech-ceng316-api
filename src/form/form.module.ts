import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { FormAnswer } from "../models/FormAnswer.entity";
import { FormAnswerField } from "../models/FormAnswerField.entity";
import { FormField } from "../models/FormField.entity";
import { Form } from "../models/Form.entity";
import { FormController } from "./form.controller";
import { FormService } from "./form.service";
import { Student } from "../models/Student.entity";

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Form, FormAnswer, FormField, FormAnswerField, Student] })],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
