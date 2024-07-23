import { DataTypes } from "sequelize";
import sequelize from "../config/database";
 
const Category = sequelize.define("Category",{          // đối số đầu tiên là tên model muốn đặt,
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,                     // id tự động tăng
        allowNull: false,                        // k đc  để trống
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,                          // bắt buộc phải nhập
    },
    image: {
        type: DataTypes.TEXT("long"),
    },
    description: {
        type: DataTypes.TEXT("long"),
    },
    status: {
        type: DataTypes.STRING(20),
    },
    position: {
        type: DataTypes.INTEGER,
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull:false
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false                 // đặt mặc định là false
    },
    deletedAt: {
        type: DataTypes.DATE,
    }

},{
    tableName: "categories",                 // tên bảng giống trong database
    timestamps:true                     // tự động quản lý createAt và updateAt
});  

export default Category;