import React from "react";
import { useParams } from "react-router-dom";
import styles from "./FormPage.module.css";
import FormOrcamento from "../../components/FormOrcamento";

export default function FormPage() {
  const { tipo } = useParams();

  return (
    <main>
      <FormOrcamento tipo={tipo} />
    </main>
  );
}