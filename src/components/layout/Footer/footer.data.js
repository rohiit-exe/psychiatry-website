import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import TiktokIcon from "../../../assets/icons/ui/tiktok-icon";

export const footerLinks = {
  "Quick Links": [
    { label: "Who We Are", href: "/about" },
    { label: "What We Treat", href: "/treatments" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ],
  Resources: [
    { label: "FAQs", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Fees and Insurance", href: "/insurance" },
  ],
  Legal: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Return Policy", href: "/return-policy" },
    { label: "Cookie Settings", href: "#" },
  ],
};

export const businessHours = [
  { days: "Monday - Thursday", hours: "09:00 am - 4:00 pm" },
];

export const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://tiktok.com", icon: TiktokIcon, label: "TikTok" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

export const address =
  "1820 E Ray Road, STE A107, Chandler, Arizona 85225 Phone: 480-526-9292";

export const careersEmail = "Career@adapsychiatry.com";
