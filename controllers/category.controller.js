import { require } from "../dep.js";
import { categoryModel } from "../models/category.model.js";
// import { Validator } from "../dep.js";
import {
  boolean,
  string,
  number,
  date,
  object,
} from "https://deno.land/x/validator/mod.ts";

export default {
  getAllCategory: async (context) => {
    const { request, response } = context;
    try {
      const totalCounts = await categoryModel.countDocuments({});
      console.log(totalCounts);
      if (totalCounts == 0) {
        response.status = 200;
        response.body = {
          status: "success",
          message: "No data found",
        };
        return;
      }
      const categoryData = await categoryModel.find().lean().exec();
      console.log(categoryData);
      response.status = 200;
      response.body = {
        status: "success",
        data: categoryData,
      };
      return;
    } catch (e) {
      response.status = 500;
      response.body = {
        status: "failed",
        message: "Something Went wrong",
      };
      return;
    }
  },
  createCategory: async (ctx) => {
    const { request, response } = ctx;
    const body = await request.body();
    if (request.hasBody) {
      response.status = 400;
      const { categoryName, categoryPriority } = body.value;
      const schema = object({
        categoryName: string(),
        categoryPriority: number(),
      });
      const validationError = schema.validate(categoryName, categoryPriority);
      response.body = {
        status: "failed",
        error: validationError,
      };
      console.log(validationError);
      return;
    }
    // const { object, string, number } = Validator;
    // const schema = object({
    //   categoryName: string(),
    //   categoryPriority: number(),
    // });
    // console.log(request, response);
    // const validation = schema.validate(request.body);
    // response.status = 200;
    // response.body = {
    //   validation: validation,
    // };
    // return;
    // const { categoryName, categoryPriority } = request.body;
  },
  getOneCategory: () => {},
  updateOneCategoryById: () => {},
  deleteCategoryById: () => {},
};
