import { DataTypes } from "sequelize";
import sequelize from "../config/database";
 
const Tour = sequelize.define("Tour",{          // đối số đầu tiên là tên model muốn đặt,
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
    code: {
        type: DataTypes.STRING(10),
    },
    images: {
        type: DataTypes.TEXT("long"),
    },
    price: {
        type: DataTypes.INTEGER,
    },
    discount: {
        type: DataTypes.INTEGER,
    },
    infomation: {
        type: DataTypes.TEXT("long"),
    },
    schedule: {
        type: DataTypes.TEXT("long"),
    },
    timeStart: {
        type: DataTypes.DATE,
    },
    stock: {
        type: DataTypes.INTEGER,
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
    tableName: "tours",                 // tên bảng giống trong database
    timestamps:true                     // tự động quản lý createAt và updateAt
});  

export default Tour;