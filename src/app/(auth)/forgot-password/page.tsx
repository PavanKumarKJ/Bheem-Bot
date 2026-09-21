"use client";

import { useAppLocale } from "@/components/app-locale-provider";
import { BheemLogo } from "@/components/ui/bheem-logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@/lib/supabase/client";
import { CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const { toast } = useToast();
  const { t } = useAppLocale();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [completed, setCompleted] = useState(false);
  const supabase = createClient();

  const sendCode = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/forgot-password`,
    });

    setLoading(false);
    if (error) {
      toast({
        title: t("auth.sendCodeFailed"),
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    setSent(true);
    toast({
      title: t("auth.codeSent"),
      description: t("auth.codeSentDescription").replace("{email}", email),
    });
  };

  const resetPassword = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password.length < 8) {
      toast({
        title: t("auth.passwordTooShort"),
        description: t("auth.passwordTooShortDescription"),
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: t("auth.passwordMismatch"),
        description: t("auth.passwordMismatchDescription"),
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const { error: verifyError } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: "recovery",
    });

    if (verifyError) {
      setLoading(false);
      toast({
        title: t("auth.invalidCode"),
        description: verifyError.message,
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) {
      toast({
        title: t("auth.resetPassword"),
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({ title: t("auth.passwordUpdated") });
  setCompleted(true);
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <BheemLogo size={64} className="mx-auto mb-2" />
        <CardTitle className="font-heading text-2xl">
          {completed ? t("auth.passwordUpdated") : t("auth.resetPassword")}
        </CardTitle>
        <CardDescription>
          {completed
            ? t("auth.passwordResetComplete")
            : sent
              ? t("auth.resetPasswordDescription").replace("{email}", email)
              : t("auth.forgotPasswordDescription")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {completed ? (
          <div className="flex flex-col items-center gap-4 py-4 text-center">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <Link href="/login" className="w-full">
              <Button className="w-full">{t("auth.signIn")}</Button>
            </Link>
          </div>
        ) : !sent ? (
          <form onSubmit={sendCode} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t("auth.email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("auth.emailPlaceholder")}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t("auth.sendCode")}
            </Button>
          </form>
        ) : (
          <form onSubmit={resetPassword} className="space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              {t("auth.codeSentDescription").replace("{email}", email)}
            </p>
            <div className="space-y-2">
              <Label htmlFor="verification-code">
                {t("auth.verificationCode")}
              </Label>
              <Input
                id="verification-code"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={code}
                onChange={(event) =>
                  setCode(event.target.value.replace(/\D/g, ""))
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">{t("auth.newPassword")}</Label>
              <Input
                id="new-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={8}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">
                {t("auth.confirmPassword")}
              </Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                minLength={8}
                required
              />
            </div>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t("auth.resetPasswordAction")}
            </Button>
          </form>
        )}
      </CardContent>
      <CardFooter className="justify-center">
        <Link href="/login" className="text-sm text-primary hover:underline">
          {t("auth.signIn")}
        </Link>
      </CardFooter>
    </Card>
  );
}