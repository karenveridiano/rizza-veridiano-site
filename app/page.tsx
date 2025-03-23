export default function RizzaKarenVeridianoSite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-green-900 text-white py-10 text-center px-4">
        <h1 className="text-4xl font-bold">Rizza Karen Veridiano</h1>
        <p className="text-xl mt-2">Senior Manager | Natural Climate Solutions</p>
        <a
          href="https://www.linkedin.com/in/rizza-karen-veridiano/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 mt-4 text-sm underline"
        >
          Connect on LinkedIn ↗
        </a>
      </header>

      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p>
          Rizza Karen Veridiano is a Forest Carbon Accounting Specialist with over
          15 years of international experience in sustainable landscape management,
          nature-based solutions (NBS), and biodiversity conservation. She has led
          multi-disciplinary teams across Africa, Asia, Latin America, and Europe,
          developing high-impact climate solutions with Verra, Gold Standard, and
          other certification bodies.
        </p>
      </section>

      <section className="bg-gray-50 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            "Carbon Project Development (ARR, IFM, REDD+)",
            "Blue Carbon & Mangroves Methodology",
            "GIS & Remote Sensing",
            "Biodiversity Conservation",
            "Community-based Project Development",
            "Policy & Technical Leadership",
            "Corporate Advisory on NBS",
            "Programme & Staff Management",
          ].map((item) => (
            <div
              key={item}
              className="bg-white shadow rounded-2xl p-4 text-center text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Senior Manager, Natural Climate Solutions</strong> — Forliance GmbH, Germany (2021–Present)
            <p>
              Technical lead in terrestrial and blue carbon projects. Led methodology
              development and quality assurance for nature-based climate projects.
            </p>
          </li>
          <li>
            <strong>Research Scientist</strong> — Thünen Institute, Germany (2016–2020)
            <p>
              Led forest inventory and carbon stock assessments. Published policy-relevant
              research for national forest restoration.
            </p>
          </li>
          <li>
            <strong>Senior Project Officer</strong> — Fauna & Flora Intl. (2012–2015)
            <p>
              Forest carbon specialist supporting REDD+ implementation in the Philippines.
            </p>
          </li>
          <li>
            <strong>Research Associate</strong> — World Agroforestry Center (2008–2012)
            <p>
              Focused on carbon mitigation research and community trainings in agroforestry.
            </p>
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Publications & Talks</h2>
        <ul className="list-disc list-inside max-w-5xl mx-auto space-y-2 text-sm">
          <li>
            <a
              href="https://www.nature.com/articles/s41586-023-06820-z"
              className="underline text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nature (2024): Patterns in Tropical Tree Communities
            </a>
          </li>
          <li>
            <a
              href="https://forliance.com/news-and-insights/news-detail/forliance-and-gold-standard-launch-innovative-mangrove-management-methodology-with-remote-sensing"
              className="underline text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Innovative Mangrove Methodology – Forliance & Gold Standard
            </a>
          </li>
          <li>
            Presented at IUCN World Conservation Congress (2021), UNFCCC COP (2015–2021),
            and multiple scientific symposia worldwide.
          </li>
        </ul>
      </section>

      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Education & Certifications</h2>
        <ul className="space-y-2 text-sm">
          <li><strong>University of Oxford</strong> – Certificate in Technical Team Leadership (2024)</li>
          <li><strong>Michigan State University</strong> – Forest Carbon Management (2023)</li>
          <li><strong>University of the Philippines</strong> – MSc Environmental Science, BSc Forestry (Cum Laude)</li>
        </ul>
      </section>

      <footer className="bg-green-900 text-white py-6 text-center">
        <p>Contact: <a href="mailto:rizzakaren.veridiano@gmail.com" className="underline">rizzakaren.veridiano@gmail.com</a></p>
        <p className="text-sm">Based in Hamburg, Germany</p>
      </footer>
    </div>
  );
}
