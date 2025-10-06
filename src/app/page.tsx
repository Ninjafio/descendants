import SideMenu from "@/components/sideMenu/SideMenu";
import styles from "./page.module.css";
import RadialTree from "@/components/radialTree/RadialTree";
export default function Home() {
  return (
    <div className={styles.page}>
      <SideMenu />
      <div className={styles.tree_container}>
        <RadialTree />
      </div>
    </div>
  );
}
