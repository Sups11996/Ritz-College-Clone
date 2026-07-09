type FootLink =
  | {
      name: string;
      path: string;
      download?: false;
    }
  | {
      name: string;
      file: string;
      download: true;
    };

export const footLinks: FootLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
  { name: "Internship", path: "/internship" },
  {
    name: "Download Form",
    file: "/Mero_CV.pdf",
    download: true,
  },
];
