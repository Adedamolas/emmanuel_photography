import { Inter, Lora, Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

const sourceCodePro400 = Source_Sans_3({ weight: "400", subsets: ["latin"] });
const sourceCodePro700 = Source_Sans_3({ weight: "700", subsets: ["latin"] });
const generalSansLight = localFont({
  src: "../public/fonts/GeneralSans-Light.ttf",
  variable: "--font-general-sans",
  display: "swap",
});

export { inter, lora, sourceCodePro400, sourceCodePro700, generalSansLight };
