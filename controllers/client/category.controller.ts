import { Request, Response } from "express";
import Category from "../../models/category.model";

// [GET] /category
export const index = async (req: Request, res: Response) => {
      // SELECT * FROM categories WHERE deleted = false AND status =  "active"
    const categorys = await Category.findAll({
        where:{
            deleted: false,
            status: "active"
        },
        raw: true,
    });
    res.render("client/pages/category/index.pug", {
        pageTitle: "Danh mục tour",
        categorys:categorys
      });
};
