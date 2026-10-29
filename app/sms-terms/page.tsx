import { LegalPage } from "../components/LegalPage";
import { site } from "../site.config";

export default function SmsTerms() {
  return (
    <LegalPage title="SMS Terms">
      {/* TODO: have these reviewed against your A2P 10DLC campaign registration. */}
      <p>By opting in, you agree to receive text messages from {site.brand} about your trial and account.</p>
      <p>Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time, or HELP for help.</p>
      <p>Questions: {site.email} · {site.phone}</p>
    </LegalPage>
  );
}
