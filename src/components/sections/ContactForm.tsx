"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { cn } from "@/lib/cn";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z
    .string()
    .trim()
    .email("Veuillez saisir une adresse e-mail valide."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || value.length >= 8,
      "Le numéro de téléphone semble invalide.",
    ),
  subject: z
    .string()
    .trim()
    .min(3, "Le sujet doit contenir au moins 3 caractères."),
  message: z
    .string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type ContactFormProps = {
  defaultSubject?: string;
  className?: string;
};

export function ContactForm({ defaultSubject = "", className }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: defaultSubject,
      message: "",
    },
  });

  function onSubmit(_data: ContactFormValues) {
    // Front-only validation for now — no real send.
    setSubmitted(true);
    reset({
      name: "",
      email: "",
      phone: "",
      subject: defaultSubject,
      message: "",
    });
  }

  return (
    <Card className={cn("space-y-6", className)}>
      {submitted ? (
        <div
          role="status"
          className="rounded-2xl bg-ios-green/15 px-4 py-3 text-sm text-ios-green"
        >
          Merci ! Votre message a bien été validé (simulation — aucun envoi
          réel pour l&apos;instant).
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        noValidate
      >
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nom complet
          </label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Jean Dupont"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-ios-red text-xs">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            E-mail
          </label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jean.dupont@email.com"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-ios-red text-xs">{errors.email.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-foreground"
          >
            Téléphone{" "}
            <span className="text-ios-secondary font-normal">(optionnel)</span>
          </label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="text-ios-red text-xs">{errors.phone.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-foreground"
          >
            Sujet
          </label>
          <Input
            id="subject"
            placeholder="Demande de devis"
            aria-invalid={Boolean(errors.subject)}
            {...register("subject")}
          />
          {errors.subject ? (
            <p className="text-ios-red text-xs">{errors.subject.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Message
          </label>
          <TextArea
            id="message"
            rows={5}
            placeholder="Décrivez votre besoin…"
            aria-invalid={Boolean(errors.message)}
            {...register("message")}
          />
          {errors.message ? (
            <p className="text-ios-red text-xs">{errors.message.message}</p>
          ) : null}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Envoi…" : "Envoyer le message"}
        </Button>
      </form>
    </Card>
  );
}
