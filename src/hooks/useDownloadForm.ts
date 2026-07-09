import form from "../assets/Mero_CV.pdf";

export const useDownloadForm = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = form;
    link.download = "Mero_CV.pdf";
    link.click();
  };

  return handleDownload;
};