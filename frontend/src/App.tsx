// import { useState } from "react";
import "./App.css";
import './i18n';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { useStore } from './store/index';
import { Outlet } from 'react-router-dom';


export default observer(function App() {
  const { searchStore } = useStore();
  const {  } = searchStore;

  return (
    <>
      <Outlet />
    </>
  );
})
