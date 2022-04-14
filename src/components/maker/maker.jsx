import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Kellogg",
      company: "Inosys",
      theme: "light",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "kyon",
      fileURL: "kyon.png",
    },
    {
      id: "2",
      name: "David",
      company: "Coway",
      theme: "light",
      title: "Software Engineer",
      email: "david@gmail.com",
      message: "need to smoke",
      fileName: "david",
      fileURL: "david.png",
    },
    {
      id: "3",
      name: "Rubok",
      company: "fassto?",
      theme: "light",
      title: "Software Engineer",
      email: "rubok@gmail.com",
      message: "go to the Mars",
      fileName: "rubok",
      fileURL: "rubok.png",
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <div className={styles.container}>
        <Editor card={cards} />
        <Preview card={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
