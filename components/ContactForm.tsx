"use client";

import { useState } from "react";
import { site } from "@/data/site";

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!endpoint) {
      const subject = encodeURIComponent(`Message from ${data.get("name") ?? "the website"}`);
      const body = encodeURIComponent(
        `${data.get("message") ?? ""}\n\nFrom: ${data.get("name") ?? ""} <${data.get("email") ?? ""}>\nOrder: ${data.get("order") ?? ""}`,
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-sand p-8" role="status">
        <p className="font-display text-2xl">Thank you, your note is on its way.</p>
        <p className="mt-2 text-muted">We answer every message within two business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {!endpoint && (
        <p className="rounded-2xl border border-line bg-sand/60 px-4 py-3 text-sm">
          This form opens your email app for now. Once a form address is set up, messages will send
          straight from here.
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Your name</span>
          <input name="name" required autoComplete="name" className="field mt-2 w-full" />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input name="email" type="email" required autoComplete="email" className="field mt-2 w-full" />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium">
          Order number <span className="font-normal text-muted">(optional)</span>
        </span>
        <input name="order" className="field mt-2 w-full" />
      </label>
      <label className="block">
        <span className="text-sm font-medium">Message</span>
        <textarea name="message" required rows={5} className="field mt-2 w-full" />
      </label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button type="submit" className="btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : endpoint ? "Send message" : "Write to us by email"}
      </button>
      {status === "error" && (
        <p className="text-sm text-accent" role="alert">
          That didn't go through. Please try again, or email us at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
