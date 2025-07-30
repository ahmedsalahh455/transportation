import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative text-white">
      {/* Main Section */}
      <div className="bg-sec py-10 px-4">
        <div className="max-w-[90%] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          
          {/* Left - Nav Links */}
          <div className="text-lg font-medium">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="#" className="hover:underline">{t("footer.services")}</a>
              <a href="#" className="hover:underline">{t("footer.about")}</a>
              <a href="#" className="hover:underline">{t("footer.team")}</a>
              <a href="#" className="hover:underline">{t("footer.networks")}</a>
              <a href="#" className="hover:underline">{t("footer.clients")}</a>
              <a href="#" className="hover:underline">{t("footer.news")}</a>
              <a href="#" className="hover:underline">{t("footer.careers")}</a>
              <a href="#" className="hover:underline">{t("footer.contact")}</a>
            </div>
          </div>

          {/* Middle - Logo and Socials */}
          <div className="flex-1 text-center text-white font-bold text-5xl leading-tight">
            <div>
              El<span className="text-main">K</span>halifa
            </div>
            <div className="text-sm font-light mt-1">{t("cargo")}</div>
            <div className="flex justify-center mt-4 gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white text-main p-2 rounded-full transition-transform hover:scale-110">
                <FaFacebookF size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white text-main p-2 rounded-full transition-transform hover:scale-110">
                <FaInstagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white text-main p-2 rounded-full transition-transform hover:scale-110">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="text-lg space-y-2">
            <p className="font-semibold">{t("footer.contact")}</p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
              <li>{t("footer.address")}</li>
              <li>{t("footer.phone")}</li>
              <li>{t("footer.email")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-main py-3 text-center text-base">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
