import { PortfolioStyle } from "./style";

export const Portfolio = () => {
  return (
    <PortfolioStyle>
      <h1>Hello!</h1>
      <h2>My name is <strong>Renán</strong></h2>
      <h3>I&apos;m work as a Frontend React Developer</h3>
      <p>Thanks for visit my personal site</p>
      <i></i>
    </PortfolioStyle>
  );
}

type Experience = {
  company: string;
  duration: string;
  website: string;
  role: string;
  description: string;
};

const experienceData: Experience[] = [
  {
    company: "Auna Health Company",
    duration: "August 2023 - Present",
    website: "https://auna.org/",
    role: "Frontend Developer",
    description:
      "Created the first regional web application for laboratory results in Peru, Mexico, and Colombia. Maintained an informative website and developed appointment scheduling features.",
  },
  {
    company: "Quality & Development Software",
    duration: "February 2023 - Present",
    website: "Auna Health (Outsource)",
    role: "Frontend Developer",
    description: "Worked as an outsourced frontend developer for Auna Health.",
  },
  {
    company: "RPA Latam",
    duration: "October 2022 - February 2023",
    website: "https://www.eluniversal.com.mx/",
    role: "Senior Frontend Developer",
    description: "Migrated the complete website for El Universal, Mexico’s biggest newspaper.",
  },
  {
    company: "Indra Company (Spain)",
    duration: "May 2022 - October 2022",
    website: "https://www.rimac.com/",
    role: "Senior Technical Frontend Analyst",
    description: "Contributed to the corporate website rebranding for Rimac.",
  },
  {
    company: "Wabi Project (Argentina)",
    duration: "December 2021 - March 2022",
    website: "https://www.wabicasa.com/",
    role: "Frontend Developer",
    description: "Worked on Wabi 2B, Store, Admin, and Supplier projects.",
  },
  {
    company: "Globant (Innovation Center - BCP)",
    duration: "December 2020 - December 2021",
    website: "https://www.viabcp.com/cix-bcp",
    role: "Web UI Developer",
    description:
      "Developed hybrid mobile applications with NativeScript, NGXS, and contributed to quality assurance.",
  },
  {
    company: "El Comercio Group",
    duration: "November 2015 - December 2020",
    website: "https://neoauto.com/",
    role: "Front-End Developer Lead",
    description: "Developed NeoAuto (buy/sell cars platform) and PagoEfectivo (Fintech payment services).",
  },
];

const ExperienceList: React.FC = () => {
  return (
    <div>
      <h2>Experience</h2>
      <ul>
        {experienceData.map((exp, index) => (
          <li key={index}>
            <h3>{exp.company}</h3>
            <p>
              <strong>{exp.role}</strong> ({exp.duration})
            </p>
            <p>{exp.description}</p>
            <a href={exp.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceList;
