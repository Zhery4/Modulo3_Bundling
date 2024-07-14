import './main.scss';
import React from 'react';
import { createRoot } from "react-dom/client";
import { HeaderComponent } from './components/HeaderComponent';

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <HeaderComponent/>
  </>
);