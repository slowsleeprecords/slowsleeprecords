import globalcss from "./global.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata = {
  title: "Slow Sleep Records",
  description: "Record label based in Kingston, Jamaica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {children}
      <Analytics/>
      <SpeedInsights/>
      </body>
    </html>
  );
}
