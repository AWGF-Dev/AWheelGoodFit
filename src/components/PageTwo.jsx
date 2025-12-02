import React from "react";
import { getAssetUrl } from "../utils/getAssetUrl";
import { useEffect, useRef } from "react";

const PageTwo = ({ title, activeSubtab, onSubtabClick }) => {
  const subtabs = [
    {
      id: "intro",
      label: "Overview",
      content: (
        <>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-1">
              <p className="text-gray-700 text-xl font-Rob mb-4">
                In April 2023, the World Health Organisation (WHO) introduced a new four-step process for wheelchair provision in its Wheelchair Provision Guidelines: Select, Fit, Use, and Follow-Up. As a client’s needs change or equipment requires replacement, their wheelchair configuration may also need to be reviewed or adjusted. This website provides an introductory foundation to the "Fit" domain, with a focus on manual wheelchairs.
              </p>
              <p className="text-gray-700 text-xl font-Rob mb-4">
                The WHO (2023) defines this step as:
              </p>
              <p className="text-gray-700 text-xl font-Rob mx-15 p-4 border-2 border-orange-500">
                Assembling the wheelchair and any accessories, and adjusting and modifying the wheelchair, cushion, postural support devices, and other accessories to achieve an optimal fit. The goal is to enhance mobility, postural support, and function.
              </p>
            </div>

            <img
              src={getAssetUrl("/pg2_1.png")}
              alt="Wheelbarrow diagram"
              className="w-100 h-auto rounded-lg shadow"
            />
          </div>

          <h2 className="text-gray-700 text-5xl font-Cap mt-15">
            Role of the Therapist
          </h2>

          <p className="text-gray-700 text-xl font-Rob">
              As a physiotherapist, key aspects of wheelchair prescription and fitting are within our scope of practice. This holistic, client-centred process requires clinicians to advocate for the client's specific needs and functional goals while collaborating with an interdisciplinary team. Other professionals commonly involved in this process may include:
          </p>
          <img
              src={getAssetUrl("/pg2_2.png")}
              alt="Wheelbarrow diagram"
              className="w-200 h-auto rounded-lg shadow mx-auto mt-10"
          />
          <h2 className="text-gray-700 text-5xl font-Cap mt-15">
            Our Approach
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
              A Wheel Good Fit will explore this crucial step by breaking down the understanding of the wheeled mobility system into three key dimensions:
          </p>
          <div className="flex items-start gap-4 mb-6">
            {/* Left column: all text content */}
            <div className="flex-1">
              <ol className="text-gray-700 text-xl font-Rob ml-10 p-4 border-2 border-orange-500 w-70 mb-4">
                <li>1. The Person/Client</li>
                <li>2. Seating and Positioning</li>
                <li>3. The Wheelchair</li>
              </ol>

              <p className="text-gray-700 text-xl font-Rob mb-4">
                The following content is included:
              </p>

              <ol className="text-gray-700 text-xl font-Rob ml-10 p-4 border-2 border-orange-500 mb-4">
                <li>1. An interactive, labelled 3D manual wheelchair model.</li>
                <li>2. The impact of wheelchair components and design on fit and function.</li>
                <li>3. General clinical and technical information related to the person, the seating system, and the wheelchair.</li>
              </ol>
            </div>
            
            {/* Right column: image */}
            <img
              src={getAssetUrl("/pg2_3.png")}
              alt="Wheelbarrow diagram"
              className="w-80 h-auto rounded-lg shadow"
            />
          </div>
          <p className="text-gray-700 text-xl font-Rob mb-4">
            This is a supplementary resource, intended to build your knowledge of manual wheelchairs and basic fitting considerations. It is essential to recognise that the wheelchair prescription process is complex, and solutions are specific to each client. Thus, we encourage you to further your understanding through continued education and professional development to enhance your clinical practice.
          </p>

          <p className="text-gray-700 text-xl font-Rob mb-4">
            Your journey to a <span className="pixel-italic">wheel good</span> fit starts here. We hope this helps you roll out a higher standard of patient-centred care. 
          </p>

          <p className="text-gray-700 text-xl font-Rob">
            <b>Please note: </b> This resource is not intended to replace professional healthcare advice and should be used for personal reference only.
          </p>
        </>
      )
    },
    {
      id: "fit",
      label: "Background",
      content: (
        <>
          <h2 className="text-blue-500 text-4xl font-Cap">
            Why the “fit” domain?
          </h2>
          <p className="text-gray-700 text-xl font-Rob mb-4">
            Inadequate manual wheelchair fitting is a high-stakes clinical competency gap within wheelchair provision, directly linked to adverse outcomes including pressure injuries, pain, and reduced functional independence (Sprigle, 2023). The associated economic burden is substantial, with pressure injuries alone costing the Australian healthcare system an estimated $9.11 billion annually (Nghiem et al., 2022). Conversely, a well-fitted wheelchair significantly enhances comfort, user participation, and quality of life (Gallagher et al., 2020). Despite its importance, the "fitting" domain is consistently identified as the weakest competency among emerging physiotherapists—attributable to a lack of standardised entry-level education in wheelchair knowledge and relevant fitting principles (Burrola-Mendez et al., 2022; Toro-Hernández et al., 2019; Goldberg et al., 2023). This highlights a critical disparity between foundational training and the competencies emphasised by international guidelines (WHO, 2023), necessitating supplemental, targeted educational interventions.
          </p>
          <h2 className="text-orange-500 text-4xl font-Cap mt-8">
            Our goal:
          </h2>
          <p className="text-gray-700 text-xl font-Rob mb-4">
            This project aimed to design and develop an engaging, evidence-based online resource to enhance knowledge of manual wheelchair components and fitting considerations for physiotherapy students and early-career clinicians.
          </p>
          <h2 className="text-blue-500 text-4xl font-Cap mt-8">
            Method:
          </h2>
          <p className="text-gray-700 text-xl font-Rob mb-4">
            Project content was synthesised from a search of literature databases (MEDLINE, CINAHL, PubMed), and supplemented by clinical practice resources including specialist e-books, webinars, and equipment manuals. All content was validated for clinical applicability and relevance by experienced physiotherapist stakeholders. A mixed-methods evaluation framework was employed for iterative refinement. Formative and summative stakeholder feedback was gathered via surveys and structured interviews to analyse quantitative usability metrics, educational impact, and qualitative content relevance.
          </p>
          <p className="text-gray-700 text-xl font-Rob mb-4">
            Established literature benchmarks were used to evaluate quantitative project aims. Perceived usability was measured using the Usability Metric for User Experience-Lite, a validated 4-item instrument where scores &gt;80 indicate very strong usability (Lewis et al., 2013). Overall satisfaction was assessed using the Net Promoter Score, where ≥20 was considered good, ≥50 strong, and ≥71 excellent for tertiary educational resources (Kara et al., 2022; Lucero, 2022). Changes in knowledge and confidence was evaluated using a retrospective pre–post design with 5-point Likert scales. A mean increase of ≥0.5 points was considered indicative of meaningful educational impact as an online, self-directed resource (Lindner & Lindner, 2024; Lucero, 2022).
          </p>
          <p className="text-gray-700 text-xl font-Rob mb-4">
            Thematic analysis of qualitative responses guided improvements, and a lightweight pop-up survey was embedded within the website to facilitate ongoing monitoring of relevance and usability (Hoffmann et al., 2017). 
          </p>
        </>
      )
    },
    {
      id: "measure",
      label: "Acknowledgements",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Rob mb-4">
            I am truly grateful to the contributing Physiotherapists and Clinical Supervisors for their invaluable expertise, clinical resources, and guidance, which were essential to the development of this resource. 
          </p>
          <p className="text-gray-700 text-xl font-Rob mb-4">
            I would also like to extend a special thanks to Nick C. for his support throughout the website development process. 
          </p>
        </>
      )
    },
    {
      id: "4",
      label: "References",
      content: (
        <>
          <div className="text-sm font-YakuHanJP">
          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Burrola-Mendez, Y., Kamalakannan, S., Rushton, P. W., Bouziane, Selsabil-A., Giesbrecht, E., Kirby, R. L., Gowran, R. J., Rusaw, D. F., Tasiemski, T., Goldberg, M., Tofani, M., Pedersen, J. P., & Pearlman, J. (2022). Wheelchair service provision education for healthcare professional students, healthcare personnel and educators across low- to high-resourced settings: a scoping review. <i>Disability and Rehabilitation: Assistive Technology</i>, 1–22. https://doi.org/10.1080/17483107.2022.2037757
          </p>

          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Gallagher, A., Cleary, G., Clifford, A., McKee, J., O’Farrell, K., & Gowran, R. J. (2020). “Unknown world of wheelchairs” A mixed methods study exploring experiences of wheelchair and seating assistive technology provision for people with spinal cord injury in an Irish context. <i>Disability and Rehabilitation, 44</i>(10), 1–13. https://doi.org/10.1080/09638288.2020.1814879
          </p>

          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Goldberg, M., Rushton, P., Kirby, R. L., Muñera, S., Kandavel, K., Pearlman, J., & Tawashy, A. (2022). Wheelchair service provision content in professional rehabilitation organisations’ standards documents and contemporary initiatives: a rapid review. <i>Disability and Rehabilitation: Assistive Technology</i>, 1–12. https://doi.org/10.1080/17483107.2022.2063421
          </p>

          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Hoffmann, T., Bennett, S., & Mar, C. D. (2017). <i>Evidence-based practice across the health professions</i> (3rd ed.). Elsevier.
          </p>

          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Kara, A., Mintu-Wimsatt, A., & Spillan, J. E. (2022). An application of the net promoter score in higher education. <i>Journal of Marketing for Higher Education</i>, 1–24. https://doi.org/10.1080/08841241.2021.2018088
          </p>

          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Lewis, J. R., Utesch, B. S., & Maher, D. E. (2013). UMUX-LITE: When There’s No Time for the SUS. <i>Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</i>, 2099–2102. https://doi.org/10.1145/2470654.2481287
          </p>

          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Lindner, J. R., & Lindner, N. (2024). Interpreting Likert type, summated, unidimensional, and attitudinal scales: I neither agree nor disagree, Likert or not. <i>Advancements in Agricultural Development, 5</i>(2), 152–163. https://doi.org/10.37433/aad.v5i2.351
          </p>

          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Nghiem, S., Campbell, J., Walker, R. M., Byrnes, J., & Chaboyer, W. (2022). Pressure injuries in Australian public hospitals: a cost of illness study. <i>International Journal of Nursing Studies, 130</i>(1), 104191. https://doi.org/10.1016/j.ijnurstu.2022.104191
          </p>

          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Sprigle, S. (2023). Measure It: Proper Wheelchair Fit Is Key to Ensuring Function while Protecting Skin Integrity. <i>Advances in Skin & Wound Care, 36</i>(8), 404–413. https://doi.org/10.1097/asw.0000000000000001
          </p>

          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Toro-Hernández, M. L., Mondragón-Barrera, M. A., Torres-Narváez, M. R., Velasco-Forero, S. E., & Goldberg, M. (2019). Undergraduate physiotherapy students’ basic wheelchair provision knowledge: a pilot study in two universities in Colombia. <i>Disability and Rehabilitation: Assistive Technology, 15</i>(3), 336–341. https://doi.org/10.1080/17483107.2019.1580776
          </p>

          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            World Health Organization. (2023). <i>Wheelchair provision guidelines</i>. World Health Organization.
          </p>

          </div>
          
        </>
      )
    }
  ];

  const currentIndex = subtabs.findIndex(tab => tab.id === activeSubtab);
  const currentSubtab = subtabs[currentIndex];
  const scrollRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSubtabClick(subtabs[currentIndex - 1].id, "page2");
    }
  };

  const handleNext = () => {
    if (currentIndex < subtabs.length - 1) {
     onSubtabClick(subtabs[currentIndex + 1].id, "page2");
    }
  };

    // Reset scroll when activeSubtab changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [activeSubtab]);

  return (
    <div className="w-full h-full flex">
      {/* LEFT SIDEBAR */}
      <div className="w-72 bg-gray-100 border-r border-gray-300 p-6 flex-shrink-0 h-screen flex flex-col transition-opacity duration-300">
        <p className="text-4xl font-mono text-black font-bold tracking-tight mb-6">{title}</p>
        <div className="flex flex-col gap-3">
          {subtabs.map(tab => (
            <div
              key={tab.id}
              onClick={() => onSubtabClick(tab.id, "page2")}
              className={`cursor-pointer px-3 py-2 rounded font-Pixelmono text-xl
                ${activeSubtab === tab.id ? "bg-black text-white" : "hover:bg-gray-300 text-black"}`}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div ref={scrollRef} className="flex-1 p-8 bg-white overflow-y-auto relative transition-opacity duration-300">
        <h2 className="text-6xl font-bold mb-6 font-Cap text-gray-700">
          {currentSubtab?.label}
        </h2>

        <div className="space-y-6">
          {currentSubtab?.content}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <div
            onClick={handlePrev}
            className={`px-6 py-2 font-Pixelmono text-2xl font-bold rounded
                        ${currentIndex === 0 ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 hover:cursor-pointer"}`}
          >
            &lt; Previous
          </div>

          <div
            onClick={handleNext}
            className={`px-6 py-2 font-Pixelmono text-2xl font-bold rounded
                        ${currentIndex === subtabs.length - 1 ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 hover:cursor-pointer"}`}
          >
            Next &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
