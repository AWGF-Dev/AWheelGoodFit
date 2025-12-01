import React from "react";
import { getAssetUrl } from "../utils/getAssetUrl";
import { useEffect, useRef } from "react";

const PageThree = ({ title, activeSubtab, onSubtabClick }) => {
  const subtabs = [
    {
      id: "intro",
      label: "The Person",
      content: (
        <>
          <h2 className="text-gray-700 text-4xl font-Cap">
            What is the importance of a good fit?
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            The right wheelchair features directly impact a user's mobility, posture, and ability to participate in daily life. Here are some examples:
          </p>
          <ol className="list-decimal ml-6 space-y-6 text-gray-700 text-xl font-Rob">
            <li>
              <b>Mobility & Daily Activities</b>
              <p className="ml-4 mt-2">
                This includes how easily someone can move, transfer, and complete tasks.
              </p>

              <ul className="list-disc ml-12 mt-2 space-y-2">
                <li>
                  <b>Examples:</b> Overall weight, frame design, seat height and angle, wheel position and size, and the design of footrests and armrests.
                </li>
                <li>
                  <b>Practical Considerations:</b>
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li>Home: Does it fit through doorways and under tables? Can the user reach their bed or countertops?</li>
                    <li>Transport: How is it stored and transported? Does it fit in their car?</li>
                    <li>Skills: How does the user currently move around? Is it safe, efficient, and independent?</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <b>Postural Support & Comfort</b>
              <p className="ml-4 mt-2">
                This refers to optimising a client’s sitting position, which is crucial for comfort, function and preventing pain.
              </p>

              <ul className="list-disc ml-12 mt-2 space-y-2">
                <li>
                  <b>Examples:</b> Adjustability of the seat depth, backrest angle and height, and armrest/footrest height. Extra postural support devices can be added.
                </li>
                <li>
                  <b>Practical Considerations:</b>
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li>Proper body alignment and pressure distribution to protect the skin.</li>
                    <li>Supporting functional needs and improving sitting tolerance.</li>
                    <li>Managing muscle tone, spasticity, and pain.</li>
                    <li>Easing the physical burden on caregivers.</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <b>Participation & Environment</b>
              <p className="ml-4 mt-2">
                Evaluating the real-world environments where the wheelchair will be used to ensure it supports the user's participation in desired activities.
              </p>

              <ul className="list-disc ml-12 mt-2 space-y-2">
                <li>
                  <b>Examples:</b> Frame design and durability, wheelbase length, and the size/position of the wheels (especially for uneven surfaces).
                </li>
                <li>
                  <b>Practical Considerations:</b>
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li>Does it enable the user to get where they need to go, whether in an urban setting or on rough terrain?</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
        </>
      )
    },
    {
      id: "fit",
      label: "Personal & Contextual Factors",
      content: (
        <>
          <h2 className="text-gray-700 text-4xl font-Cap">
            A Client-Centred Approach
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            The wheelchair needs to be responsive to the client’s needs. This can be identified through feedback from the client themselves, as well as carers and the wider care team. 
          </p>
          <p className="text-gray-700 text-xl font-Rob">
            Before checking the wheelchair itself, it is important to understand the person using it. The following factors will help guide a more effective assessment: 
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold mt-10">
            Understanding Medical & Physical History
          </span>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob mt-5">
            <li>
              <b>Condition & Comorbidities:</b> How does the person's diagnosis and other health issues affect their function and posture?
            </li>
            <li>
              <b>Surgical History:</b> Have past surgeries impacted bone alignment or joint range of motion?
            </li>
            <li>
              <b>Pain Levels:</b> Identify the cause of pain and consider how seating or wheelchair configuration can help manage it, including the ergonomics of propulsion.
            </li>
            <li>
              <b>Pressure Injury Risk:</b> Assess the individual's risk for skin breakdown.
            </li>
            <li>
              <b>Weight Changes:</b> Note any significant weight gain or loss, as this alters fit.
            </li>
            <li>
              <b>Musculoskeletal Considerations:</b> Evaluate how muscle tightness, reduced joint range of movement, contracture and muscle spasm may impact posture or functional reach.
            </li>
          </ul>
          <span className="text-gray-700 text-xl font-Rob font-bold mt-10">
            Understanding Medical & Physical History
          </span>
          <ul className="list-disc ml-6 space-y-4 text-gray-700 text-xl font-Rob mt-5">
            <li>
              <b>Vision:</b> A person's head and neck posture is often adapted to optimise vision for mobility and interaction.
            </li>

            <li>
              <b>Functional Skills:</b> Assess both static and dynamic sitting during key activities:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Propelling the wheelchair</li>
                <li>Completing transfers</li>
                <li>Making positional adjustments</li>
                <li>Performing functional tasks</li>
              </ul>
            </li>
          </ul>
          <span className="text-gray-700 text-xl font-Rob font-bold mt-10">
            Understanding Medical & Physical History
          </span>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob mt-5">
            <li>
              <b>Environmental Access:</b> Consider the home, vehicle, and community environments the wheelchair must navigate.
            </li>
            <li>
              <b>Psychosocial Factors:</b> Account for self-image and personal preferences, as these greatly influence acceptance of assistive equipment and postural supports.
            </li>
            <li>
              <b>Caregiver Support:</b> Identify the level of assistance available for adjusting and maintaining the seating system.
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            New vs. Experienced Users
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            <span className="font-bold block">For New Users:</span>
            A first manual wheelchair often features adjustable components, allowing for fine-tuning as the user's skills and preferences develop. A formal review may be scheduled within 6-12 months to reassess the configuration, as functional capabilities and mobility needs often change significantly during this period.
          </p>
          <p className="text-gray-700 text-xl font-Rob">
            <span className="font-bold block">For Experienced Users:</span>
            Experienced users typically have well-defined preferences based on past use. While their input is essential, a clinical assessment is crucial to integrate new technologies that enhance performance and prevent upper limb injury.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Upper Limb Pain and Repetitive Strain Injury
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Shoulder pain and carpal tunnel syndrome are highly prevalent among manual wheelchair users, with incidence rates reaching up to 78% and 65%, respectively (Mashola et al., 2021; Asheghan et al., 2016).
          </p>
          <p className="text-gray-700 text-xl font-Rob">
            Modifiable, extrinsic risk factors related to repetitive strain injury in users include:
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>Propulsion biomechanics and frequency</li>
            <li>Transfer technique and quantity</li>
            <li>Wheelchair configuration and postural support</li>
            <li>Rolling resistance</li>
            <li>Demands of daily tasks (e.g., overhead reaching)</li>
          </ul>
          <p className="text-gray-700 text-xl font-Rob">
            These factors should be taken into consideration during chair configuration and adjustments (Ott et al., 2021; Ott & Pearlman, 2021; Worobey et al., 2023). The use of propulsion-assist devices should also be considered as a strategy for injury prevention.
          </p>
        </>
      )
    },
    {
      id: "fat",
      label: "References",
      content: (
        <>
        <div className="text-sm">
          <p className="text-gray-700  font-Rob leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Agency for Clinical Innovation. (2017). Gathering information for the client profile. Aci.health.nsw.gov.au. https://aci.health.nsw.gov.au/networks/spinal-cord-injury/spinal-seating/module-2/gathering-information-for-the-client-profile
          </p>
          <p className="text-gray-700  font-Rob leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Asheghan, M., Hollisaz, M. T., Taheri, T., Kazemi, H., & Aghda, A. K. (2016). The prevalence of carpal tunnel syndrome among long-term manual wheelchair users with spinal cord injury: A cross-sectional study. The Journal of Spinal Cord Medicine, 39(3), 265–271. https://doi.org/10.1179/2045772315y.0000000033
          </p>
          <p className="text-gray-700  font-Rob leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Cherubini, M., & Melchiorri, G. (2012). Descriptive study about congruence in wheelchair prescription. PubMed, 48(2), 217–222
          </p>
          <p className="text-gray-700  font-Rob leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Lange, M. L., & Minkel, J. (2025). Seating and wheeled mobility: A clinical resource guide (2nd ed.). Routledge
          </p>
          <p className="text-gray-700  font-Rob leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Mashola, M. K., Korkie, E., & Mothabeng, D. J. (2021). Pain and its impact on functioning and disability in manual wheelchair users with spinal cord injury: a protocol for a mixed-methods study. BMJ Open, 11(1), e044152. https://doi.org/10.1136/bmjopen-2020-044152
          </p>
          <p className="text-gray-700 font-Rob leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Ott, J., Henderson, T., Wilson-Jene, H., Koontz, A., & Pearlman, J. (2021). A high prevalence of manual wheelchair rear-wheel misalignment could be leading to increased risk of repetitive strain injuries. Disability and Rehabilitation: Assistive Technology, 1–9. https://doi.org/10.1080/17483107.2021.1890843
          </p>
          <p className="text-gray-700  font-Rob leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Ott, J., & Pearlman, J. (2021). Scoping review of the rolling resistance testing methods and factors that impact manual wheelchairs. Journal of Rehabilitation and Assistive Technologies Engineering, 8, 205566832098030. https://doi.org/10.1177/2055668320980300
          </p>
          <p className="text-gray-700  font-Rob leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Paralyzed Veterans of America. (2005). Preservation of upper limb function following spinal cord injury: a clinical practice guideline for health-care professionals. Consortium For Spinal Cord Medicine.
          </p>
          <p className="text-gray-700 font-Rob leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Robertson, B., Lane, R., Lannin, N., Laver, K., & Barr, C. (2022). A Systematic Review of Outcomes Measured Following New Wheelchair and Seating-Prescription Interventions in Adults. Archives of Rehabilitation Research and Clinical Translation, 5(1), 100249. https://doi.org/10.1016/j.arrct.2022.100249
          </p>
          <p className="text-gray-700 font-Rob leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Sprigle, S. (2023). Measure It: Proper Wheelchair Fit Is Key to Ensuring Function while Protecting Skin Integrity. Advances in Skin & Wound Care, 36(8), 404–413. https://doi.org/10.1097/asw.0000000000000001
          </p>
          <p className="text-gray-700 font-Rob leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            World Health Organization. (2023). Wheelchair provision guidelines. World Health Organization.
          </p>
          <p className="text-gray-700 font-Rob leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Worobey, L. A., Bernstein, J., Ott, J., Berner, T., Black, J., Cabarle, M., Roesler, T., Scarborough, S., & Betz, K. (2023). RESNA position on the application of ultralight manual wheelchairs. Assistive Technology: The Official Journal of RESNA, 1–18. https://doi.org/10.1080/10400435.2023.2221148
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
      onSubtabClick(subtabs[currentIndex - 1].id, "page3");
    }
  };

  const handleNext = () => {
    if (currentIndex < subtabs.length - 1) {
     onSubtabClick(subtabs[currentIndex + 1].id, "page3");
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
      <div className="w-72 bg-gray-100 border-r border-gray-300 p-6 flex-shrink-0 h-screen flex flex-col">
        <p className="text-4xl font-mono font-bold text-gray-800 tracking-tight mb-6">{title}</p>
        <div className="flex flex-col gap-3">
          {subtabs.map(tab => (
            <div
              key={tab.id}
              onClick={() => onSubtabClick(tab.id, "page3")}
              className={`cursor-pointer px-3 py-2 rounded font-Pixelmono text-xl
                ${activeSubtab === tab.id ? "bg-black text-white" : "hover:bg-gray-300 text-black"}`}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div ref={scrollRef} className="flex-1 p-8 overflow-y-auto relative bg-white">
        <h2 className="text-6xl font-bold text-gray-700 mb-6 font-Cap">
          {subtabs.find(tab => tab.id === activeSubtab)?.label}
        </h2>

        <div className="space-y-6">
          {subtabs.find(tab => tab.id === activeSubtab)?.content}
        </div>

        {/* Navigation Buttons — appear after all content */}
        <div className="flex justify-between mt-8">
          <div
            onClick={handlePrev}
            className={`px-6 py-2 font-Pixelmono text-2xl font-bold rounded 
                      ${activeSubtab === subtabs[0].id ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 hover:cursor-pointer"}`}
          >
            &lt; Previous
          </div>

          <div
            onClick={handleNext}
            className={`px-6 py-2 font-Pixelmono text-2xl font-bold rounded 
                      ${activeSubtab === subtabs[subtabs.length - 1].id ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 hover:cursor-pointer"}`}
          >
            Next &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
