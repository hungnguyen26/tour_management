import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "tour_manager", // tên database
  "root", // user name đăng nhập   (mặc định dưới local là "root")
  "", // mật khẩu đăng nhập   (mặc định dưới local là " ")
  {
    host: "localhost", // link hosting
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