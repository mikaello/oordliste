"use client";

import { useState } from "react";
import styles from "./SuggestForm.module.css";

export default function SuggestForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setDescription("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Noe gikk galt, prøv igjen.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Noe gikk galt, prøv igjen.");
      setStatus("error");
    }
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Foreslå et ord</h2>
      {status === "success" ? (
        <p className={styles.success}>
          Takk! Forslaget ditt er sendt inn og vil bli vurdert.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label} htmlFor="suggest-name">
            Ord
          </label>
          <input
            id="suggest-name"
            className={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={status === "loading"}
            placeholder="F.eks. løype"
          />

          <label className={styles.label} htmlFor="suggest-description">
            Beskrivelse
          </label>
          <textarea
            id="suggest-description"
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            disabled={status === "loading"}
            rows={4}
            placeholder="Hva betyr ordet?"
          />

          {status === "error" && (
            <p className={styles.error}>{errorMsg}</p>
          )}

          <button
            type="submit"
            className={styles.button}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sender…" : "Send inn forslag"}
          </button>
        </form>
      )}
    </section>
  );
}
