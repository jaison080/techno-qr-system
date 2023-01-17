import { useState } from "react";
import { CheckIn, Food, Sidebar } from "../components";
import CustomTitle from "../utils/customTitle";
import styles from "../styles/Dashboard.module.css";
import ProtectedRoute from "../utils/ProtectedRoutes";
import Image from "next/image";
import logo from '../assets/logo.png'

function Dashboard() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <CustomTitle title="Dashboard" />
      <div className={styles.container}>
        <Sidebar tab={tab} setTab={setTab} />
        <div className={styles.content}>
          {tab === 0 && <Image src={logo} width={400} height={400} alt=""/>}
          {tab === 1 && <CheckIn />}
          {tab === 2 && <Food/>}
          {tab === 3 && <div>Tab 4</div>}
        </div>
      </div>
    </>
  );
}

export default ProtectedRoute(Dashboard, "volunteer");
