export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Smart Math SA",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Quizes",
      href: "/quizes",
    },
    {
      label: "Learning",
      href: "/learning",
    },
    {
      label: "Student Forums",
      href: "/forums",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Learning",
      href: "/learning",
    },
    {
      label: "Student Forums",
      href: "/forums",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    }
  ],
  links: {
    donate: "/donate",
  },
};
