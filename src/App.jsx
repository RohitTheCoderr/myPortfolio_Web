import APPTest from "@src/__TESTS__";
import styles from './App.module.scss';
import Loader from "./components/loader/Loader";
import { Outlet } from "react-router-dom";
import Header from "./layouts/header/Header";
import { Provider } from "react-redux"
import store, { persistor } from "./libs/redux";
import { PersistGate } from "redux-persist/integration/react";
import Footer2 from "./layouts/footer2/Footer2";
import Navbar from "./layouts/navbar/Navbar";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        < div className={styles.container} >
          <Loader />
          <Header />
          {/* <Navbar/> */}
          {/* <APPTest /> */}
          <div className="h-[5rem] md:h-[7rem]"></div>
          <Outlet />
          <Footer2 />
        </div>
      </PersistGate>
    </Provider>
  );
}