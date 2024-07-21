import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, // tên database
  process.env.DATABASE_USERNAME, // user name đăng nhập   (mặc định dưới local là "root")
  process.env.DATABASE_PASSWORD, // mật khẩu đăng nhập   (mặc định dưới local là " ")
  {
    host: process.env.DATABASE_HOST, // link hosting
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection successfully.");
  })
  .catch((error) => {
    console.error("Connection error : ", error);
  });


export default sequelize;