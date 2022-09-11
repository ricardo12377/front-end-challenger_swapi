//styles
import "./style.css";

//requests && hooks
import { useContext } from "react";
import { ContentContext } from "../../auth/contentContext";
import Header from "../../components/header";
import Persons from "../../components/persons";
import Ships from "../../components/ships";

export default function Home() {
  const { page } = useContext(ContentContext);

  return (
    <div className="Home">
      <Header />
      {page === false ? <Persons /> : <Ships />}
    </div>
  );
}
