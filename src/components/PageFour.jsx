import React from "react";
import PageFourChecklist from "./PageFourChecklist";
import { getAssetUrl } from "../utils/getAssetUrl";
import { useEffect, useRef } from "react";

const PageFour = ({ title, activeSubtab, onSubtabClick }) => {
  const subtabs = [
    {
      id: "intro",
      label: "Body Measurements",
      content: (
        <>
          <h2 className="text-gray-700 text-4xl font-Cap">
            What is the importance of a good fit?
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            A properly fitted wheelchair depends on the relationship between three key dimensions:
          </p>
          <ul className="list-decimal ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>The Body:</b> The person's unique physical structure and posture.
            </li>
            <li>
              <b>The Seating Components:</b> The supports required for comfort, posture, and pressure relief.
            </li>
            <li>
              <b>The Wheelchair:</b> The base frame and its components.
            </li>
          </ul>
          <p className="text-gray-700 text-xl font-Rob">
            It is crucial to understand how these dimensions interact. For example, a person's buttock-thigh length (Body) determines the needed cushion depth (Seating Component), which may differ from the seat frame length (Wheelchair) (Waugh et al., 2013).
          </p>
          <p className="text-gray-700 text-xl font-Rob">
            Using consistent terminology for these parts is essential to accurately turn body measurements into equipment recommendations and to ensure the system is set up correctly (International Organization for Standardisation, 2018).
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap">
            Why Body Measurements Are Taken
          </h2>
          <p className="text-gray-700 text-xl font-Rob mt-4">
            This resource does not cover the detailed measuring process (which relates to the earlier "Select" phase), but it will clarify how body measurements relate to seating and wheelchair dimensions.
          </p>
          <p className="text-gray-700 text-xl font-Rob mt-4">
           These objective measurements of a person's seated posture are important to:
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>Objectively assess postural alignment.</li>
            <li>Help determine the specific features needed in seating products.</li>
            <li>Document postural outcomes before and after an intervention.</li>
            <li>Monitor postural changes over time and set measurable goals.</li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap">
            Terminology
          </h2>
          <p className="text-gray-700 text-xl font-Rob mt-4">
           Labelling terminology for each body segment is depicted in Figure 1
          </p>
          <span className="text-gray-700 text-xl font-Rob">
            This is relevant when referring to or documenting:
          </span>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob mt-4">
            <li>
              Linear or angular measurements of the body (e.g., lower leg length, thigh to trunk angle)
            </li>
            <li>
              The surface or support designed to contact that segment (e.g., thigh support, trunk support)
            </li>
          </ul>
          <div className="mx-auto mt-10 w-200">
            <img
              src={getAssetUrl("/pg4_1.png")}
              alt="Wheelbarrow diagram"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-left text-gray-700 text-xl font-Rob mt-2">
              (Waugh & Crane, 2013)
            </p>
          </div>
        </>
      )
    },
    {
      id: "fit",
      label: "Linear Measurements",
      content: (
        <>
          <h2 className="text-gray-700 text-4xl font-Cap">
            A Guide to Understanding Linear Measurements
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            To ensure consistency and accuracy, linear measurements for seating follow two key principles:
          </p>
          <ol className="list-decimal ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              They are taken parallel to the body segment.
            </li>
            <li>
              Or, they are taken along a strict vertical or horizontal line, regardless of the person's posture.
            </li>
          </ol>
          <p className="text-gray-700 text-xl font-Rob">
            Key Characteristics of Linear Measures:
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>They are straight lines and do not follow body contours.</li>
            <li>They are taken without compressing soft tissue.</li>
            <li>
              <b>Exception:</b> Circumferential measures (e.g., around the head or ankle) are the only ones that follow the body's curve.
            </li>
          </ul>
          <p className="text-gray-700 text-xl font-Rob">
            The specific measurements needed depend on the individual's posture and the complexity of the seating system required.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            "Effective" Measurements
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Sometimes, measuring a body part in its standard anatomical position isn't clinically helpful, especially when postures are asymmetrical or non-reproducible. In these cases, the addition of "Effective" measurements may be documented.
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>What:</b> "Effective" measurements record the functional space the body will occupy in the seating system, rather than the true anatomical length.
            </li>
            <li>
              <b>Why:</b> They provide the practical dimensions needed to configure the seating components correctly.
            </li>
          </ul>
          <span className="text-gray-700 text-xl font-Rob">
            Example: Lower Leg vs. Effective Lower Leg Length
          </span>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob mt-7">
            <li>
              <b>Standard Method:</b> Measures the length of the tibia parallel to the bone itself.
            </li>
            <li>
              <b>Effective Method:</b> Measures the horizontal distance from the back of the knee to the heel. 
              This tells you the actual depth needed for the footplate to provide proper support, especially if the legs are angled.
            </li>
          </ul>
          <div className="mx-auto mt-10 w-200">
            <img
              src={getAssetUrl("/pg4_2.png")}
              alt="Wheelbarrow diagram"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-left text-gray-700 text-xl font-Rob mt-2">
              (Waugh & Crane, 2013)
            </p>
          </div>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Common Measurements
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            The necessary body measurements depend on the user's postural symmetry and support needs. Here are commonly taken body measurements and how they inform the specifications for seating components and the wheelchair frame itself (Agency for Clinical Innovation, 2017b): 
          </p>
          <div className="ml-8 space-y-2 text-gray-700 text-xl font-Rob">
            <div><b>Hip Width:</b> Determines overall seat and cushion width for postural support and comfort.</div>
            <div><b>Greater Trochanter Width:</b> Critical for sizing pressure-mapping and offloading cushions.</div>
            <div><b>External Knee Width:</b> Guides seat width adjustment and footplate hanger selection to prevent leg rubbing.</div>
            <div><b>Chest Width:</b> Sets the width between lateral trunk supports and informs backrest size selection.</div>
            <div><b>Shoulder Width:</b> Determines the optimal distance between arm supports for upper limb positioning and function.</div>
            <div><b>Foot Width (with shoes):</b> Defines the minimum required frame width at the base and informs footplate size.</div>
            <div><b>Thigh Depth:</b> Guides ideal seat depth (measurement minus 25–50mm) to avoid popliteal pressure.</div>
            <div><b>Lower Leg Length:</b> Determines the distance from seat to footplate (accounting for cushion and shoe height).</div>
            <div><b>Foot Depth:</b> Selects appropriate footplate size and style to prevent interference with front castors.</div>
            <div><b>Maximum Sitting Height:</b> Ensures adequate backrest height for full postural support.</div>
          </div>
          <div className="mx-auto mt-10 w-200">
            <img
              src={getAssetUrl("/pg4_3.png")}
              alt="Wheelbarrow diagram"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-left text-gray-700 text-xl font-Rob mt-2">
              (Waugh & Crane, 2013)
            </p>
          </div>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Basic Measurements for Symmetrical Sitters
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            For a person who sits symmetrically and has simple seating needs (e.g., a Hands-Free Sitter, see “Types of Sitters’’), the following core measurements are typically sufficient:
          </p>
          <ul className="list-disc ml-12 space-y-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>Width Measurements:</b>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li>Hip Width</li>
                <li>Chest Width</li>
                <li>Shoulder Width</li>
                <li>External Knee Width (if wider than the hips)</li>
              </ul>
            </li>
            <li>
              <b>Depth & Height Measurements:</b>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li>Buttock/Thigh Depth</li>
                <li>Lower Leg Length</li>
                <li>Elbow Height</li>
                <li>Shoulder Height (or Scapula/Axilla Height, to determine backrest height)</li>
                <li>Maximum Sitting Height</li>
              </ul>
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Additional Measurements for Complex Seating Needs
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            For individuals requiring more postural support or who have asymmetries, additional measurements are needed to ensure a proper and accommodating fit.
          </p>
          <span className="text-gray-700 text-xl font-Rob">
            Common additional measures include:
          </span>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob mt-5">
            <li>Trunk Depth</li>
            <li>Ischial Depth</li>
            <li>Foot Depth</li>
            <li>Posterior Superior Iliac Spine (PSIS) Height</li>
            <li>External Thigh or Knee Width</li>
            <li>Internal Knee Width</li>
          </ul>
          <p className="text-gray-700 text-xl font-Rob">
            These measurements ensure the seating system and wheelchair frame accommodate the individual's true sitting posture for optimal support, comfort, and function (Lange & Minkel, 2025; Ward, 1994).
          </p>
        </>
      )
    },
    {
      id: "measure",
      label: "Angular Measurements",
      content: (
        <>
          <h2 className="text-gray-700 text-4xl font-Cap">
            A Guide to Angular Measurements
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Angular measurements describe the orientation of a person's body segments and their corresponding support surfaces in a wheelchair. These angles define the individual's overall seated posture (Waugh et al., 2013).
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            General Principles
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Three foundational concepts are critical for applying angular measures in practice:
          </p>
          <ul className="list-disc ml-12 space-y-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>The Three Body Planes:</b> Measurements are taken within the sagittal, frontal, and transverse planes.
            </li>
            <li>
              <b>Reference Lines:</b> Angles are created by comparing a body segment line (e.g., along the thigh) 
              to a support surface reference plane (e.g., the seat).
            </li>
            <li>
              <b>Types of Angles:</b>
              <ol className="list-decimal ml-12 space-y-2 mt-4">
                <li>
                  <b>Relative Angles:</b> Describe the angle between two adjacent body segments 
                  (e.g., the thigh‑to‑trunk angle).
                </li>
                <li>
                  <b>Absolute Angles:</b> Describe the orientation of a single body segment in space, 
                  relative to a fixed vertical or horizontal line (e.g., the sagittal trunk angle).
                </li>
              </ol>
            </li>
          </ul>
          <span className="text-gray-700 text-xl font-Rob">
            THere are some examples of relative body segment angles:
          </span>
          <div className="ml-12 space-y-2 text-gray-700 text-xl font-Rob mt-5">
            <div><b>Thigh to trunk angle:</b> Informs seat to back support angle</div>
            <div><b>Thigh to lower leg angle:</b> Informs seat to lower leg support angle</div>
            <div><b>Lower leg to foot angle:</b> Informs lower leg support to foot support angle</div>
          </div>
          <div className="mx-auto mt-10 w-250">
            <img
              src={getAssetUrl("/pg4_4.png")}
              alt="Wheelbarrow diagram"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-left text-gray-700 text-xl font-Rob mt-2">
              (Waugh & Crane, 2013)
            </p>
          </div>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            ROM vs. Seating Angles
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            It is crucial to distinguish between joint range of motion (ROM) and functional sitting angles:
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Passive Range of Motion:</b> Often measured on a mat, this tells us the maximum range a joint can be moved through. 
              It defines the person's potential for movement.
            </li>
            <li>
              <b>Relative Body Segment Angles:</b> Describe the actual angles the person will be supported in within the seating system. 
              The prescribed sitting angles are often different from their full PROM.
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Why Absolute Angles Are Useful
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>Understanding the impact of gravity on a body segment.</li>
            <li>Quantifying posture when complex postural deviations are present.</li>
            <li>Setting measurable goals for improving seated posture.</li>
          </ul>
        </>
      )
    },
    {
      id: "4",
      label: "Types of Sitters",
      content: (
        <>
          <h2 className="text-gray-700 text-5xl font-Cap">
            Understanding Trunk Control
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Clients require different levels of support depending on their sitting balance.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Hands-Free Sitter.
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
           A person who can sit upright without using their hands for support.
          </p>
          <ul className="list-disc ml-12 space-y-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>Implication:</b> Strong, voluntary control of their trunk muscles
            </li>
            <li>
              <b>Seating & Support Needs:</b>
              <ul className="list-disc ml-12 space-y-2 mt-4">
                <li>
                  <b>Minimal Support Required:</b> Users typically need only a basic backrest 
                  (often stopping below the shoulder blades) to allow for full upper limb range of movement.
                </li>
                <li>
                  <b>Cushion Focus:</b> The primary consideration is pressure management. A simple foam cushion may be sufficient, 
                  but those with reduced sensation may need a more contoured cushion to distribute pressure and prevent skin issues.
                </li>
                <li>
                  <b>Other Components:</b> Usually, only a footplate and possibly a pelvic belt are needed.
                </li>
              </ul>
            </li>
          </ul>
          <span className="text-gray-700 text-xl font-Rob font-bold mt-10">
            Hands-Dependent Sitter
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            A person who uses one or both hands on a surface to maintain their sitting balance.
          </p>
          <ul className="list-disc ml-12 space-y-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>Implication:</b> Strong, voluntary control of their trunk muscles
            </li>
            <li>
              <b>Seating & Support Needs:</b>
              <ul className="list-disc ml-12 space-y-2 mt-4">
                <li>
                  <b>Minimal Support Required:</b> Users typically need only a basic backrest 
                  (often stopping below the shoulder blades) to allow for full upper limb range of movement.
                </li>
                <li>
                  <b>Cushion Focus:</b> The primary consideration is pressure management. A simple foam cushion may be sufficient, 
                  but those with reduced sensation may need a more contoured cushion to distribute pressure and prevent skin issues.
                </li>
                <li>
                  <b>Other Components:</b> Usually, only a footplate and possibly a pelvic belt are needed.
                </li>
              </ul>
            </li>
          </ul>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Prop Sitter
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            A person who is unable to sit upright without significant external support.
          </p>
          <ul className="list-disc ml-12 space-y-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>Implication:</b> Trunk muscles are not strong enough to hold them upright against gravity without assistance
            </li>
            <li>
              <b>Seating & Support Needs:</b>
              <ul className="list-disc ml-12 space-y-2 mt-4">
                <li>
                  <b>Trunk Support is Key:</b> Users need a backrest that provides both posterior and lateral support to free up their hands for tasks.
                </li>
                <li>
                  <b>Stability & Pressure:</b> They often cannot shift weight easily, so a more supportive and deeply contoured seat cushion is required for stability and superior pressure distribution.
                </li>
                <li>
                  <b>Additional Components:</b> Often require pelvic belts, arm supports, and possibly a headrest for vehicle travel.
                </li>
              </ul>
            </li>
          </ul>

        </>
      )
    },
    {
      id: "5",
      label: "Posture and Sitting",
      content: (
        <>
          <h2 className="text-gray-700 text-4xl font-Cap">
            Postural Abnormalities
          </h2>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            Postural abnormalities are either <b>reducible</b> (flexible) or <b>non-reducible</b> (fixed). To optimise function, proper support should be in place to accommodate for, or to correct abnormal postural.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            &gt; Reducible Postures
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            A reducible posture demonstrates flexibility, allowing movement from the abnormal position towards a more upright and midline alignment. However, this flexibility also permits movement into further deformity. Thus, the clinical goal is to achieve correction guided by the individual's tolerance.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            &gt; Non-Reducible Postures
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            A non-reducible posture is fixed due to soft tissue or joint limitations that prevent the client from achieving an upright, midline position. Movement is only possible into further deformity, so the primary goal shifts from correction to accommodation within the existing postural alignment.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Seating and Pressure Management
          </h2>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            The primary aim of pressure management in wheelchair seating is to provide a stable seating system that distributes pressure away from vulnerable areas, allowing tissues to sustain the load without injury for a reasonable period of time.
          </p>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            Cushion design strategies to limit these peak pressures are generally based on the principles of immersion (allowing the body to sink into the cushion), envelopment (the cushion conforming to the body's shape), and pre-contouring (shaping the cushion to match typical anatomy).
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Further Resources
          </h2>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            The full complexities of seating, pressure management and approaches to seating intervention are beyond the scope of this resource. However, please see the follow resources for further information:
          </p>
          <ul className="ml-6 space-y-3 text-blue-700 text-xl font-Rob">
            <li>
              <a
                href="https://aci.health.nsw.gov.au/__data/assets/pdf_file/0006/312792/ACI-SSCIS-RD6.1-hints-checking-commonly-used-cushions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-800 underline transition-colors duration-200"
              >
                Spinal Seating Professional Development Project Assessment Form RD6.1: Handy Hints for Checking Commonly Used Cushions
              </a>
            </li>
            <li>
              <a
                href="https://1624307.fs1.hubspotusercontent-na1.net/hubfs/1624307/Education%20Resources/General%20Rehab%20Seating%20%26%20Positioning%20Guide.pdf?utm_medium=email&_hsenc=p2ANqtz-_9FySKdn6mHEFlPrhgwCTjZJV_YYBj2AiolC9OPMqzG6_fw0eGyI821UNmpjlsKeM1TuVUGN0GyouZEK6n2KcoOEWzNw&_hsmi=331724455&utm_content=331724455&utm_source=hs_automation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-800 underline transition-colors duration-200"
              >
                Seating & Positioning Guide: A comprehensive introduction to seating and positioning
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/13e2Q4RW83L3luzgxRhBBPgygmpprbZps/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-800 underline transition-colors duration-200"
              >
                Wheelchair Service Training Package: Trainer’s Manual, Intermediate Level
              </a>
            </li>
          </ul>

        </>
      )
    },
    {
      id: "6",
      label: "Postural Support Devices",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Rob">
            This section focuses on postural support devices for hands-free sitters.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Head & Neck Support
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            The type of support is determined by the user's specific needs and the degree of support required.
          </p>
          <ul className="list-disc ml-12 space-y-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>Examples of Types of Support:</b>
              <ul className="list-disc ml-12 space-y-2 mt-4">
                <li>
                  <b>Flat Headrest:</b> Provides minimal support; prevents the head from extending backward, especially in tilted/reclined systems.
                </li>
                <li>
                  <b>Flip-Down or Removable Headrest:</b> Facilitates transfers by moving out of the way easily.
                </li>
                <li>
                  <b>Curved or Winged Headrest:</b> Adds lateral contours to gently keep the head centered.
                </li>
                <li>
                  <b>Occipital Headrest / Neck Yoke:</b> A U-shaped support that provides moderate lateral support and encourages neck flexion.
                </li>
                <li>
                  <b>Lateral Head Supports:</b> Padded arms on both sides for a high degree of lateral control and stability.
                </li>
                <li>
                  <b>Head Sling:</b> A molded, reinforced shelf to fully support the head for conditions like hydrocephalus.
                </li>
              </ul>
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Back Supports
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Contour and stability may be added via carved foam, custom molds, or lateral supports for lateral stability.
          </p>
          <ul className="list-disc ml-12 space-y-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>Examples of Specialised Systems:</b>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li>
                  <b>Scoliosis Supports:</b> Wrap-around designs with quick-adjust mechanisms and straps for maximum support and easier transfers.
                </li>
                <li>
                  <b>Spasticity Supports:</b> Side-wings or wrap-around backrests act as barriers to confine the user within the chair.
                </li>
              </ul>
            </li>
            <li>
              <b>Comfort Features:</b>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li>
                  <b>Lumbar Support:</b> Helps maintain the spine's natural curvature, improving comfort, balance, and mobility.
                </li>
                <li>
                  <b>Padding & Safety:</b> All supports require padding (8–25mm); the user must be isolated from any fasteners.
                </li>
              </ul>
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Pelvic Positioning
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Proper positioning starts with correct seat depth.
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Clearance:</b> Ensure space behind the knees (~25mm for children, ~50mm for adults).
            </li>
            <li>
              <b>Hip Angle:</b> Adjusted via the backrest pivot or (on some chairs) the seat angle.
            </li>
          </ul>
          <div className="ml-12 text-gray-700 text-xl font-Rob space-y-4">
            <span className="font-bold">Examples of Support Devices:</span>
            <ul className="list-disc ml-12 space-y-4 mt-4">
              <li>
                <b>Pelvic Belt / Subasis Bar</b>
                <ul className="list-disc ml-12 space-y-2 mt-2">
                  <li><b>Purpose:</b> Prevents sliding forward and corrects slouching.</li>
                  <li><b>Fit:</b> Snug, allowing about two fingers between the belt and abdomen.</li>
                  <li><b>Safety:</b> The latch must be secure and match the user's abilities.</li>
                </ul>
              </li>
              <li>
                <b>Antithrust Cushion</b>
                <ul className="list-disc ml-12 space-y-2 mt-2">
                  <li><b>Purpose:</b> Positions the ischial tuberosities to maintain a neutral pelvis.</li>
                  <li><b>Placement:</b> The "step" must be in front of the sitting bones.</li>
                </ul>
              </li>
              <li>
                <b>Abduction Pommel</b>
                <ul className="list-disc ml-12 space-y-2 mt-2">
                  <li><b>Purpose:</b> Promotes hip joint alignment; counters inward hip adduction.</li>
                  <li><b>Placement:</b> Sized to be clear of the groin. Not for keeping the user in the seat.</li>
                </ul>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-xl font-Rob ml-12">
            <b>Safety Note:</b> Improperly adjusted pelvic belts can cause the user to slump, leading to bruising from thoracic supports or, in severe cases, choking. Systems must work in concert and be correctly fitted.
          </p>

          
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Chest & Thoracic Support
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            These help the user remain upright and provide medio-lateral stability for those with reduced trunk control.
          </p>
          <div className="ml-12 text-gray-700 text-xl font-Rob space-y-6">
            <span className="font-bold">Types of Support:</span>
            <ul className="list-disc ml-12 space-y-4 mt-2">
              <li>
                <b>H-Strap / Thoracic Vest:</b>
                <ul className="list-disc ml-12 space-y-2 mt-2">
                  <li>A strap system with a chest pad that wraps around the chest and over the shoulders.</li>
                  <li>Secured with D-rings, Velcro, or buckles.</li>
                </ul>
              </li>
              <li>
                <b>Lateral Thoracic Supports:</b>
                <ul className="list-disc ml-12 space-y-2 mt-2">
                  <li>Padded metal brackets that provide side support.</li>
                  <li>Can be removable or swing-away for transfers.</li>
                </ul>
              </li>
            </ul>
            <span className="font-bold">Fitting & Safety Notes:</span>
            <ul className="list-disc ml-12 space-y-4 mt-2">
              <li>Must be used with a pelvic support. Without it, the user can slide down, and the chest support can restrict breathing, posing the risk of injury or death.</li>
              <li>
                <b>Positioning:</b>
                <ul className="list-disc ml-12 space-y-2 mt-2">
                  <li>The top of the chest pad or support must be at least 1 inch (25mm) below the sternal notch and must never rub the neck.</li>
                  <li>Lateral thoracic supports should be at mid-chest level (approx. nipple line), never in the underarms.</li>
                </ul>
              </li>
              <li>
                <b>Tightness:</b>
                <ul className="list-disc ml-12 space-y-2 mt-2">
                  <li>Should be snug but not tight. You should be able to fit adult fingers between the support and the chest.</li>
                  <li>Must not squeeze the chest or compromise breathing.</li>
                </ul>
              </li>
              <li>
                <b>Final Check:</b>
                <ul className="list-disc ml-12 space-y-2 mt-2">
                  <li>Once all supports are adjusted, the user should be centered in the seat with their pelvis against the backrest, hips level, and weight evenly distributed.</li>
                </ul>
              </li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: "7",
      label: "Fitting Checklist: Posture",
      content: (
        <>
          <PageFourChecklist />
        </>
      )
    },
        {
      id: "8",
      label: "Page References",
      content: (
        <>
          <h2 className="text-gray-700 text-3xl font-Cap mt-8">
            References for: "Seating and Positioning"
        </h2>
        <div className="text-sm font-YakuHanJP">
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Cooper, R. A. (1998). <i>Wheelchair selection and configuration</i>. Demos.
          </p>
          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
           Dillbeck Regier, A., Berryman, A., Hays, K., Smith, C., Staniszewski, K., & Gerber, D. (2014). Two approaches to manual wheelchair configuration and effects on function for individuals with acquired brain injury. <i>NeuroRehabilitation, 35</i>(3), 467–473. https://doi.org/10.3233/nre-141138
          </p>
          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Frost, S., Noon, J., Scheffler, E., & Stoeckle, R. J. (2013). <i>Wheelchair service training package: trainer’s manual intermediate level</i> (C. Khasnabis & K. Mines, Eds.). World Health Organization.
          </p>
          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            International Organization for Standardization. (2018). <i>ISO 16840–2: Wheelchair seating — Part 2: Determination of physical and mechanical characteristics of devices intended to manage tissue integrity – Seat cushions.</i>
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Nace, S., Tiernan, J., & Ní Annaidh, A. (2019). Manufacturing custom-contoured wheelchair seating: A state-of-the-art review. <i>Prosthetics and Orthotics International, 43</i>(4), 382–395. https://doi.org/10.1177/0309364619836028
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Pedersen, J. P., Smith, C., Dahlin, M., Henry, M., Jones, J., McKenzie, K., Sevigny, M., & Yingling, L. (2020). Wheelchair backs that support the spinal curves: Assessing postural and functional changes. <i>The Journal of Spinal Cord Medicine, 45</i>(2), 194–203. https://doi.org/10.1080/10790268.2020.1760530
          </p>
          <p className="text-gray-700   leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
           Sonenblum, S. E., Seol, D., Sprigle, S. H., & Cathcart, J. M. (2020). Seated buttocks anatomy and its impact on biomechanical risk. <i>Journal of Tissue Viability, 29</i>(2), 69–75. https://doi.org/10.1016/j.jtv.2020.01.004
          </p>
          <p className="text-gray-700   leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Sprigle, S., Wootten, M., Sawacha, Z., & Theilman, G. (2003). Relationships Among Cushion Type, Backrest Height, Seated Posture, And Reach Of Wheelchair Users With Spinal Cord Injury. <i>The Journal of Spinal Cord Medicine, 26</i>(3), 236–243. https://doi.org/10.1080/10790268.2003.11753690
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Walford, S. L., Requejo, P. S., Mulroy, S. J., & Neptune, R. R. (2019). Predictors of shoulder pain in manual wheelchair users. <i>Clinical Biomechanics, 65</i>, 1–12. https://doi.org/10.1016/j.clinbiomech.2019.03.003
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Ward, D. E. (1994). <i>Prescriptive seating for wheeled mobility</i>. Healthwealth International. Waugh, K., & Crane, B. (2013). A clinical application guide to standardized wheelchair seating measures of the body and seating support surfaces. In http://www.assistivetechnologypartners.
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Waugh, K., & Crane, B. (2013). A clinical application guide to standardized wheelchair seating measures of the body and seating support surfaces. In <i>http://www.assistivetechnologypartners</i>.
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
          Waugh, K., Crane, B., Taylor, S. J., Cwiertnia, S., Savage, S. S., Davis, K., Brown, L., & Christie, S. (2013). <i>Glossary of wheelchair terms and definitions</i>. University of Colorado Anschutz Medical Campus.
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            World Health Organization. (2023). <i>Wheelchair provision guidelines</i>. World Health Organization
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Ye, J., Jiang, Z., Chen, S., Cheng, R., Xu, L., & Tsai, T.-Y. (2023). Rehabilitation Practitioners’ Perceptions of Optimal Sitting and Standing Posture in Men with Normal Weight and Obesity. <i>Bioengineering, 10</i>(2), 210. https://doi.org/10.3390/bioengineering10020210
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
      onSubtabClick(subtabs[currentIndex - 1].id, "page4");
    }
  };

  const handleNext = () => {
    if (currentIndex < subtabs.length - 1) {
     onSubtabClick(subtabs[currentIndex + 1].id, "page4");
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
        <p className="text-4xl font-mono font-bold mb-6 text-gray-800 tracking-tight">{title}</p>
        <div className="flex flex-col gap-3">
          {subtabs.map(tab => (
            <div
              key={tab.id}
              onClick={() => onSubtabClick(tab.id, "page4")}
              className={`cursor-pointer px-3 py-2 rounded font-Pixelmono text-xl
                ${activeSubtab === tab.id ? "bg-black text-white" : "hover:bg-gray-300 text-black"}`}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div ref={scrollRef} className="flex-1 p-8 overflow-y-auto relative transition-opacity duration-300 bg-white">
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

export default PageFour;
