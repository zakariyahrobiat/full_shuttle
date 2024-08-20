import { PropsWithChildren } from "react";
import { writeUserData } from "../services";
import BackgroundImageLayout from "../../../layout/BackgroundImageLayout";
import Logo from "../../../assets/react.svg";
import SideBar from "../../../components/SideBar/SideBar";

type Props = {
  header: string;
  username: string;
};
// console.log(writeUserData);

const Dashboard = (props: PropsWithChildren<Props>) => {
  return (
    <BackgroundImageLayout className="!p-0">
      <section className=" flex gap-3 pb-5 mr-2">
        <SideBar className="w-1/2 md:w-full" />
        <div className="w-full md:w-5/6 md:pl-2">
          <div className="flex justify-between">
            <div className="title">
              <h1 className="text-2xl font-extrabold">{props.header}</h1>
            </div>
            <div className="profile">
              <img src={Logo} alt="" srcSet="" />
              <h2>{props.username}</h2>
            </div>
          </div>
          <div className="hidden md:block">{props.children}</div>
        </div>
      </section>
      <div className="mr-2 md:hidden">
        <h2>{props.children}</h2>
      </div>
    </BackgroundImageLayout>
  );
};

export default Dashboard;
