import React from "react";
import { getAssetUrl } from "../utils/getAssetUrl";
import { useEffect, useRef } from "react";
import PageFiveChecklist from "./PageFiveChecklist";

const PageFive = ({ title, activeSubtab, onSubtabClick }) => {
  const subtabs = [
    {
      id: "intro",
      label: "Common Types of Wheelchairs",
      content: (
        <>
          <h2 className="text-gray-700 text-3xl font-Cap">
            Standard Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> Designed for short-term, multi-user applications in controlled environments such as hospitals and airports.</li>
            <li><b>Designed For:</b> Short-term conditions (e.g., post-operative recovery) lasting a few weeks to several months.</li>
            <li><b>Limitations:</b> Heavy, inefficient for self-propulsion due to non-adjustable wheels, and limited sizing options. Not intended for individual customisation.</li>
          </ul>
          <h2 className="text-gray-700 text-3xl font-Cap">
            Lightweight Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> Provides basic, intermittent mobility at a lower cost.</li>
            <li><b>Designed For:</b> Users who need assistance for short periods (∼20% of the day) or on uneven terrain, but who are primarily ambulatory.</li>
            <li><b>Limitations:</b> Fixed axle position makes self-propulsion inefficient, precluding its use as a primary mobility device.</li>
          </ul>

          <h2 className="text-gray-700 text-3xl font-Cap">
            High-Strength Lightweight Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> Offers a balance of durability and limited adjustability for regular, part-time use.</li>
            <li><b>Designed For:</b> Users who require a wheelchair for a significant portion (20-70%) of their daily mobility.</li>
            <li><b>Limitations:</b> Limited axle adjustability may not meet the biomechanical needs of full-time users, making it unsuitable as a primary chair.</li>
          </ul>

          <h2 className="text-gray-700 text-3xl font-Cap">
            Ultralightweight Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> The standard for full-time, long-term use, designed to maximise efficiency and minimize injury risk.</li>
            <li><b>Designed For:</b> Users who rely on a wheelchair as their primary means of mobility (80-100% of the time).</li>
            <li><b>Features:</b> Highly adjustable rear axle and frame components allow for precise configuration to the user's body and functional needs.</li>
          </ul>

          <h2 className="text-gray-700 text-3xl font-Cap">
            Hemi-Height Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> Features a lower seat-to-floor height to facilitate foot propulsion.</li>
            <li><b>Designed For:</b> Users of short stature or those who use their feet for mobility and stability (e.g., individuals with hemiplegia or balance deficits).</li>
            <li><b>Limitations:</b> Often heavy and typically lacks the sophisticated adjustability of an ultralightweight chair.</li>
          </ul>

          <h2 className="text-gray-700 text-3xl font-Cap">
            Manual Tilt-in-Space Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> Allows the seat and back angle to tilt together, maintaining postural alignment.</li>
            <li><b>Designed For:</b> Users requiring pressure redistribution, improved postural control, and assisted positioning for functions like respiration and swallowing.</li>
            <li><b>Features:</b> Highly configurable with options for supports and brakes to assist caregivers.</li>
          </ul>
          <h2 className="text-gray-700 text-3xl font-Cap">
            Paediatric Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> Scaled for smaller users with built-in adjustability to accommodate growth.</li>
            <li><b>Designed For:</b> Children who need a wheelchair for mobility augmentation or as their primary device.</li>
            <li><b>Considerations:</b> Ongoing configuration is essential to protect developing joints, maximise energy efficiency, and adjust for growth, necessitating regular clinical follow-up.</li>
          </ul>

          <h2 className="text-gray-700 text-5xl font-Cap mt-10">
            Sport-Specific Wheelchairs
          </h2>
          <h2 className="text-gray-700 text-3xl font-Cap">
            Tennis Wheelchairs
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Optimised for speed and rapid directional changes to cover the entire court.
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Frame & Wheels:</b> Three-wheel design (two large rear, one small front caster) for lightness and fast acceleration.
            </li>
            <li>
              <b>Wheel Configuration:</b> Significant camber is applied to enhance lateral stability during reaches and improve turning speed.
            </li>
            <li>
              <b>Seating System:</b> Features a steep seat angle (pitch) to keep the player securely positioned, improving balance and control.
            </li>
            <li>
              <b>Athlete Positioning:</b> The knees are abducted and feet are placed on a rigid footrest behind the knees. This "closed" posture lowers the combined inertia of the player and chair, mimicking a figure skater's spin, for vastly improved maneuverability.
            </li>
            <li>
              <b>Special Features:</b> Handles are integrated into the front of the seat to aid balance during lateral reaches and to help maintain knee position.
            </li>
          </ul>
          <h2 className="text-gray-700 text-3xl font-Cap">
            Basketball Wheelchairs
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Engineered for explosive acceleration, braking, and durability to withstand incidental contact.
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Frame & Wheels:</b> Standard four-wheel design. Uses high-pressure, smooth-tread tires for maximum speed on the court.
            </li>
            <li>
              <b>Wheel Configuration:</b> Camber is critical for quick turning and to protect players' hands during side impacts by creating a gap between the wheels at the top.
            </li>
            <li>
              <b>Protective Features:</b> Spoke guards are mandatory to prevent wheel damage and facilitate picking up the ball. Anti-tip rollers or skids are required on the front to prevent forward falls.
            </li>
            <li>
              <b>Seating & Positioning:</b> Rules limit seat height, leading to a near-level seat angle. However, guards often use a lower seat and steeper angle for enhanced speed and maneuverability. Strategic strapping systems are commonly used to optimize a player's positioning and functional performance.
            </li>
          </ul>
        </>
      )
    },
    {
      id: "fit",
      label: "Wheelchair Frame",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Rob">
            The design of the wheelchair frame and its components directly impacts the user's experience. This section outlines common styles and variations, explaining how they influence propulsion efficiency, functional needs, and overall mobility.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap">
            Frame Design
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Wheelchairs are commonly made from lightweight tubing which may be welded or bolted together using lugs (fittings made to match pieces of a joint). The selection of a rigid or folding frame often heavily depends on the user's transportation needs.
          </p>
          <p className="text-gray-700 text-xl font-Rob">
            There are two basic frame types:
          </p>
          <div className="ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <p><b>&gt; Folding</b></p>
            <p><b>&gt; Rigid</b></p>
          </div>
        <div className=" text-gray-700 text-xl font-Rob space-y-6">
          <span className="font-bold">Folding frames</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Have a cross brace (X-shaped) underneath the seat frame.</li>
            <li>This <b>enables the wheelchair to collapse</b> in half for storage or transport purposes.</li>
          </ul>

          <span className="font-bold">Rigid frames</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Have solid horizontal tubing underneath the seat frame and at the back support and foot support.</li>
            <li>Are a single solid structure that does not fold side-to-side, but <b>can be disassembled.</b> </li>
          </ul>
        </div>
        <img
          src={getAssetUrl("/pg5_1.png")}
          alt="Wheelbarrow diagram"
          className="w-230 h-auto rounded-lg shadow mx-auto mb-10"
        />
        <table className="table-auto border-collapse border border-gray-300 text-xl font-Rob w-full">
          <thead className="bg-gray-100 text-center">
            <tr>
              <th className="border border-gray-300 px-4 py-2"></th>
              <th className="border border-gray-300 px-4 py-2 text-left text-green-600">Advantages</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-red-500">Disadvantages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold text-gray-700">Non-rigid Frame Wheelchairs</td>
              <td className="border border-gray-300 px-4 py-2 text-gray-700 align-top">
                <ul className="list-disc ml-6 space-y-2">
                  <li><b>Folding mechanism:</b> Common and more intuitive than disassembly</li>
                  <li><b>Shock absorption:</b> Better shock absorption over uneven surfaces</li>
                  <li><b>Removable foot supports:</b> Helps facilitate standing transfers</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-700 align-top">
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li><b>Weight:</b> Heavier, due to folding mechanism components</li>
                  <li><b>Propulsion efficiency:</b> Reduced, as energy is dissipated through the flexed cross-brace frame</li>
                  <li><b>Durability:</b> Lower, due to moving and removable parts</li>
                  <li><b>Maneuverability:</b> Decreased, as swing-away or removable foot supports have greater overall length</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold text-gray-700">Rigid Frame Wheelchairs</td>
              <td className="border border-gray-300 px-4 py-2 align-top text-gray-700">
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li><b>Weight:</b> Lighter with fewer moving parts</li>
                  <li><b>Propulsion efficiency:</b> Increased, due to weight and decreased flex in the frame</li>
                  <li><b>Durability:</b> Higher, due to structural rigidity and fewer moving parts</li>
                  <li><b>Maneuverability:</b> Slightly increased, due to foot support design and shorter overall length</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2 align-top text-gray-700">
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li><b>Disassembly:</b> Less intuitive than a folding mechanism</li>
                  <li><b>Shock absorption:</b> Decreased due to frame rigidity</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-700 text-xl font-Rob font-bold">
          Key Considerations:
        </p>
        <ol className="list-decimal ml-12 space-y-3 text-gray-700 text-xl font-Rob">
          <li>
            <span className="font-bold">Frame Type:</span> Does the user need a rigid frame or a folding frame? How much weight and what size can they lift and manoeuvre?
          </li>
          <li>
            <span className="font-bold">Folding Style:</span> If a folding frame is needed, which style is best, i.e., one that folds from the sides or one where the back folds down onto the seat?
          </li>
          <li>
            <span className="font-bold">User Independence:</span> If disassembly is required, can the user perform it independently? Are tools needed, and can the process be modified for their independence?
          </li>
        </ol>
        <span className="text-gray-700 text-xl font-Rob font-bold">
          A Different Front End
        </span>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          Most rigid wheelchairs are configured with a rigid foot support as part of the frame, and most folding wheelchairs have a swing-away foot support. Though, depending on the client’s specific needs, a rigid wheelchair with a swing-away foot support and folding wheelchairs with a rigid front end may be available. 
        </p>
        <h2 className="text-gray-700 text-4xl font-Cap">
          Frame Geometric Styles
        </h2>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          The structural configuration or geometry of the wheelchair’s frame affects its strength, rigidity, weight, and how it responds during propulsion. Frame geometry can be used to reduce the effects of the impulse observed when going off a curb, or to minimise road vibration. 
        </p>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          Three common frame styles include the:
        </p>
        <div className="ml-12 space-y-2 text-gray-700 text-xl font-Rob">
          <p><b>&gt; Box frame</b></p>
          <p><b>&gt; Dual tube frame</b></p>
          <p><b>&gt; Cantilever frame</b></p>
        </div>
        <div className="text-gray-700 text-xl font-Rob space-y-4">
          <img
            src={getAssetUrl("placeholder.png")}
            alt="Wheelbarrow diagram"
            className="float-right w-100 h-auto rounded-lg shadow ml-4 mb-2 border-2"
          />
          <span className="font-bold">Box frames</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Commonly found in rigid-frame wheelchairs, where they form the main structural rectangle.</li>
            <li>The design is characterised by frame members arranged in a rectangular, box-like shape.</li>
            <li>This geometry provides excellent vertical rigidity and torsional strength, resulting in a highly durable and stable frame.</li>
            <li>Due to this inherent stiffness, the frame itself is not the most effective for vibration dispersion, resulting in the transfer of ‘road noise’ to the user.</li>
            <li>In this design, suspension and shock absorption are the responsibility of other components, such as the tires and cushion. The frame's primary role is to provide a solid, rigid foundation.</li>
          </ul>
        </div>
        <div className="text-gray-700 text-xl font-Rob space-y-4">
          <img
            src={getAssetUrl("beans1.png")}
            alt="Wheelbarrow diagram"
            className="float-right w-100 h-auto rounded-lg shadow ml-4 mb-2 border-2"
          />
          <span className="font-bold">Dual tube frames</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Feature a second, (often triangulated) frame tube, which creates a structure that balances rigidity for propulsion efficiency with controlled flex for shock absorption.</li>
            <li>This flexibility allows the frame to absorb more vibration and road noise than a rigid box frame.</li>
            <li>The triangulated design is often perceived as more modern and aesthetically streamlined.</li>
            <li>The compact, often tapered shape of the frame can improve transportability by reducing the overall folded width of the wheelchair.</li>
          </ul>
        </div>

        <div className="text-gray-700 text-xl font-Rob space-y-4">
          <img
            src={getAssetUrl("beans2.png")}
            alt="Wheelbarrow diagram"
            className="float-right w-100 h-auto rounded-lg shadow ml-4 mb-2 border-2"
          />
          <span className="font-bold">Cantilever frames</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Are exclusive to rigid wheelchairs, where the front and rear sections are connected by a single main tube, resembling a cantilever beam anchored at the rear wheels.</li>
            <li>They are among the most compact for transport and the lightest type of rigid frame available.</li>
            <li>
              <span>Design principles include:</span>
              <ol className="list-decimal ml-8 space-y-2 mt-4">
                <li><b>Built-in suspension:</b> The frame's controlled flex absorbs vibration and shock, providing a smoother ride than a fully rigid frame.</li>
                <li><b>Structural efficiency:</b> The use of fewer tubes positioned closer to the user makes the chair lightweight and reduces its visual bulk.</li>
                <li><b>Simplified construction:</b> Minimal parts and welds lower manufacturing complexity and reduce potential structural weaknesses.</li>
              </ol>
            </li>
          </ul>
        </div>

        <h2 className="text-gray-700 text-4xl font-Cap">
          Folding mechanisms
        </h2>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          There are three commonly used folding mechanisms used with wheelchair frames:
        </p>
        <div className="ml-12 space-y-2 text-gray-700 text-xl font-Rob">
          <p><b>&gt; Cross-brace</b></p>
          <p><b>&gt; Parallel-brace</b></p>
          <p><b>&gt; Forward folding</b></p>
        </div>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          Variations on the cross-brace design (single or double cross-brace mechanisms) are most commonly used in folding wheelchairs.
        </p>
        <span className="text-gray-700 text-xl font-Rob font-bold">
          Cross-brace Mechanism
        </span>
        <p className="text-gray-700 text-xl font-Rob mt-2 mb-8">
          Consists of two crossing frame members forming an “X” when viewed from behind, hinged at the bottom and pinned centrally. It folds by lifting the seat upholstery, which draws the cross-members upward and pulls the side frames together. The user’s weight stabilises the frame when opened, preventing accidental folding. Double cross-brace designs increase frame stiffness. This is a simple and reliable mechanism– albeit may be prone to collapse under lateral tilt and increases the folded height. Some designs incorporate over-centre locks or snap systems to enhance stability.
        </p>
        <span className="text-gray-700 text-xl font-Rob font-bold">
          Parallel-brace Mechanism
        </span>
        <p className="text-gray-700 text-xl font-Rob mt-2 mb-8">
          The frame folds laterally via cross-members hinged at both ends and at the centre. In the open position, the centre hinge locks; folding occurs when the lock is released and the user pulls the frame forward. Cross-members can be secured with pin or cam locks. This design provides rigid-like performance when extended and can be partially folded with the user seated, aiding access through narrow spaces. The mechanism is more complex, requiring greater effort to operate and maintain.
        </p>
        <span className="text-gray-700 text-xl font-Rob font-bold">
          Forward-folding Mechanism
        </span>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          Involves hinging both the front frame and backrest, allowing the backrest to fold onto the seat and the front section to fold beneath it. This achieves very compact storage, especially when combined with quick-release rear wheels. Common in ultralight wheelchairs, this design is often limited to forward-folding backrests. It offers significant portability advantages but requires multiple operations to fold and is less commonly used.
        </p>
        <h2 className="text-gray-700 text-4xl font-Cap">
          Materials Used in Wheelchair Frames
        </h2>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          Modern wheelchairs are commonly constructed from aluminium, steel, titanium, or advanced composite materials such as carbon fibre and Kevlar. Each material offers distinct advantages in terms of strength, weight, durability, and cost.
        </p>
        <img
          src={getAssetUrl("/pg5_2.png")}
          alt="Wheelbarrow diagram"
          className="w-230 h-auto rounded-lg shadow mx-auto"
        />
        <div className=" text-gray-700 text-xl font-Rob">
          <span className="font-bold">Aluminium</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Most aluminium frames use round drawn 6061 aluminium tubing.</li>
            <li>Among the least expensive and most versatile heat-treatable alloys.</li>
            <li>Offers good mechanical properties and high corrosion resistance.</li>
            <li>
              <span className="">Widely used due to its:</span>
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>Availability and visual appeal</li>
                <li>Low weight and adequate strength</li>
                <li>Resistance to environmental corrosion</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className=" text-gray-700 text-xl font-Rob">
          <span className="font-bold">Steel</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Typically made from chromium–molybdenum (chro-moly) alloy steel (e.g., 4130 or 4140) or mild steel (e.g., 1010 or 1020).</li>
            <li>
              Chro-moly steel is valued for:
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>Excellent weldability and ease of fabrication</li>
                <li>Moderate hardenability with high fatigue resistance</li>
                <li>Option for nitriding treatment to increase wear and abrasion resistance</li>
              </ul>
            </li>
            <li>Provides high durability but adds significant weight compared with aluminium or titanium</li>
          </ul>
        </div>
        <div className=" text-gray-700 text-xl font-Rob">
          <span className="font-bold">Titanium</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>A lightweight, strong, non-ferrous metal known for exceptional corrosion resistance and long-term durability.</li>
            <li>
              Used for its:
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>High strength-to-weight ratio</li>
                <li>Attractive finish and resistance to wear</li>
              </ul>
            </li>
            <li>
              Limitations:
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>High cost and specialised fabrication requirements (requires skilled welders and precision tools).</li>
                <li>Brittle fracture risk if flawed or worn — failure can occur suddenly.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className=" text-gray-700 text-xl font-Rob">
          <span className="font-bold">Carbon Fibre and Kevlar Composites</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>
              Carbon fibre:
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>Extremely stiff and offers high tensile strength.</li>
                <li>Very low density, offers superior weight reduction without compromising rigidity.</li>
                <li>Demonstrates the lowest vibration transmission.</li>
              </ul>
            </li>
            <li>
              Kevlar:
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>A light, organic, yellow fibre soft to the touch and highly impact-resistant.</li>
                <li>Provides excellent toughness, though poor compression strength.</li>
              </ul>
            </li>
            <li>Composite frames combine these materials to achieve lightweight yet robust structures, ideal for high-performance and sports wheelchairs.</li>
          </ul>
        </div>
        </>
      )
    },
    {
      id: "measure",
      label: "Rear Wheels",
      content: (
        <>
          <h2 className="text-gray-700 text-4xl font-Cap">
            Tires
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            The performance of a manual wheelchair is greatly influenced by the choice of rear tire. These can be categorised into three primary types: pneumatic, solid, and hybrid airless inserts. Each present distinct trade-offs in comfort, efficiency, durability, reliability and maintenance.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            1. Pneumatic (Air-Filled)
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            Pneumatic tires offer a more cushioned ride and are better at navigating obstacles with good traction on most terrain. They are generally the lightest and provide the best propulsion efficiency, along with superior shock absorption and vibration dampening for pain control, spasm management, and comfort. 
          </p>
          <p className="text-gray-700 text-xl font-Rob">
            Their main drawbacks include regular maintenance, susceptibility to punctures, and more frequent replacement than solid tires due to a thinner outer tread layer. A deeper tread increases durability and off-road traction but also raises rolling resistance, requiring greater propulsion force. A thin profile decreases friction during turning, making the chair more agile and ideal for sports, though some users report decreased hand comfort.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            2. Solid (Urethane)
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            Solid tires offer the reliability of being puncture-proof and require little to no maintenance. They have higher tensile strength and load capacity. The significant trade-off is markedly decreased vibration and shock absorption, and reduced traction, giving a bumpier ride. They are typically heavier due to increased rubber mass and have increased rolling resistance. Hence, they perform best on smooth, even, and indoor surfaces.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            3. Hybrid Tires (Pneumatic Casing with Airless Insert)
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
           This category uses a pneumatic-style casing filled with a solid insert—such as foam or rubber—to eliminate flats while providing more cushioning than a solid tire (though less than a true pneumatic). They are the heaviest option and exhibit the greatest rolling resistance, impacting propulsion efficiency. Foam-filled inserts generally provide a smoother ride and better rollability than rubber inserts that cause a faster loss of momentum.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Rear Wheel Styles
          </h2>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            The two most common rear wheel styles are spoked and mag (moulded composite) wheels, each with distinct performance characteristics.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Spoked Wheels
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            Spoked wheels consist of a rim, a central hub, and tensioned spokes connecting them. They are substantially lighter and more responsive than mag wheels, making them the preferred choice for sports and active users seeking maximum propulsion efficiency.
          </p>
          <ul className="list-disc ml-12 space-y-4 mt-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Rims:</b> Available in single, double, or triple-wall constructions, referring to the number of material layers, which directly impacts strength. Materials range from standard steel and aluminum to high-performance titanium, magnesium, or carbon fibre for an optimal stiffness-to-weight ratio.
            </li>
            <li>
              <b>Spokes:</b> Materials include steel, aluminum, carbon fibre, and titanium, affecting weight and durability.
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li><b>J-bend:</b> Traditional but less durable due to a stress point at the bend.</li>
                <li><b>Straight-pull:</b> Allows for higher, more uniform tension, increasing strength and durability.</li>
              </ul>
            </li>
            <li>
              <b>Spoke Count:</b> A higher number of spokes distributes the load more evenly, increasing wheel strength and stiffness at the cost of added weight. Proper, even spoke tension is critical for a wheel that rolls straight and efficiently.
            </li>
          </ul>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Mag (Moulded Composite) Wheels
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            Mag wheels are single-piece units moulded from composite materials like fibre-reinforced ABS or PVC plastic. They prioritize durability and low maintenance over performance.
          </p>
          <ul className="list-disc ml-12 space-y-2 mt-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Performance:</b> They are heavier (adding ~1 kg per pair) and less efficient than spoked wheels due to their weight and structural flex, which absorbs some energy during propulsion.
            </li>
            <li>
              <b>Durability & Cost:</b> They are more impact-resistant, require virtually no maintenance, and are generally less expensive than equivalent spoked wheel systems.
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Handrims
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
           Handrims are the metal rings attached to the rear wheels, which the user grips to propel and steer the wheelchair. They are typically fabricated from circular aluminium tubing and have a slightly smaller diameter than the wheel.
          </p>
          <p className="text-gray-700 text-xl font-Rob">
            Standard single-tube rims are usually the lightest options, but are not ergonomic as they force a tight grip that can lead to upper limb strain and fatigue. Selecting the appropriate handrim, based on its material, coating, and ergonomic design, can enhance propulsion efficiency, user comfort, and the long-term preservation of upper limb function.
          </p>
        </>
      )
    },
    {
      id: "5",
      label: "Castors",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Rob">
            Castor choice directly influences front seat-to-floor height, frame angle, lower extremity positioning, ride characteristics, and propulsion efficiency. Selection is based on the user's lifestyle, capabilities, preferences, and environment, considering factors such as indoor maneuverability, outdoor use, and wheelchair skills.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Examples:
          </span>
          <ul className="list-disc ml-12 space-y-2 mt-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>Environment:</b> Larger/wider castors may be prioritised for outdoor/rough terrain, and smaller/narrower castors for tight indoor spaces.
            </li>
            <li>
              <b>Rolling Resistance:</b> A wider, smaller-diameter castor may deliver similar propulsion performance to a narrower, larger-diameter castor on mixed surfaces.
            </li>
            <li>
              <b>Weight & Stability:</b> Heavier castors are more prone to flutter at high speeds.
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Castor Size
          </h2>
          <div className=" text-gray-700 text-xl font-Rob space-y-6 mt-5">
            <div>
              <span className="font-bold">Diameter</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li>
                  <b>Larger Diameter:</b>
                  <ul className="list-disc ml-8 space-y-2 mt-2">
                    <li>Allows for a higher front seat to floor height and a greater front frame angle.</li>
                    <li>Clear obstacles more easily and maintain propulsion speed due to decreased rolling resistance.</li>
                  </ul>
                </li>
                <li>
                  <b>Smaller Diameter:</b>
                  <ul className="list-disc ml-8 space-y-2 mt-2">
                    <li>Permits a lower front seat to floor height and a smaller front frame angle.</li>
                    <li>Offers greater manoeuverability and versatility due to smaller turning radius and castor footprint.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-bold">Width</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li>
                  <b>Wider</b>
                  <ul className="list-disc ml-8 space-y-2 mt-2">
                    <li>Increases rolling resistance due to greater surface contact.</li>
                    <li>Rolls easier over rough/uneven terrain and is less prone to getting caught in cracks.</li>
                  </ul>
                </li>
                <li>
                  <b>Narrower</b>
                  <ul className="list-disc ml-8 space-y-2 mt-2">
                    <li>Decreases rolling resistance due to lesser surface contact.</li>
                    <li>More efficient on smooth, hard surfaces.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Castor Tire Types
          </h2>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Solid (Polyurethane/Rubber)
          </span>
          <ul className="list-disc ml-12 space-y-2 mt-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>Standard:</b> Made of hard polyurethane or rubber. Durable with moderate rolling resistance.
            </li>
            <li>
              <b>Soft-Roll:</b> Uses a softer polyurethane compound and a convex shape. Reduces rolling resistance on hard surfaces and increases compliance on softer terrain. However, the softer material causes faster wear compared to standard solid castors.
            </li>
          </ul>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Pneumatic (Air-Filled)
          </span>
          <p className="text-gray-700 text-xl font-Rob">
            Provides improved comfort and a smoother ride over irregular surfaces by absorbing shock. Their main drawbacks are lower durability, susceptibility to punctures, and the requirement for regular air pressure maintenance to preserve propulsion efficiency, making them less common.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Castor Hub Material
          </h2>
          <ul className="list-disc ml-12 space-y-2 mt-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Composite/Plastic:</b> Lighter weight, reducing overall chair mass.
            </li>
            <li>
              <b>Aluminium/Metal Alloy:</b> Offers superior durability and strength, better withstanding impacts and heavy use.
            </li>
          </ul>
        </>
      )
    },
    {
      id: "6",
      label: "Armrests",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Rob">
            Armrests provide <b>lateral support</b> and serve as <b>stabilising handles</b> when the user leans to either side. They also improve <b>comfort, function, and wheelchair aesthetics</b>, and help <b>protect clothing</b> from wheel contact.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Primary Functions
          </span>
          <ul className="list-disc ml-12 space-y-2 mt-2 text-gray-700 text-xl font-Rob mt-4">
            <li>Provide <b>upper-limb and trunk support</b>.</li>
            <li>Serve as <b>handholds</b> for repositioning or leaning.</li>
            <li>Enable <b>pressure relief strategies</b>.</li>
            <li>Help maintain <b>cleanliness</b> by shielding clothing from wheels.</li>
            <li>Support <b>reaching tasks</b> by providing leverage or stability.</li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Armrest Styles
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Armrests are categorised by their design and length, each offering distinct functional trade-offs between support, access, and chair width. Styles include:
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Wrap-Around Armrests
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            Mounted to the rear of the frame, these wrap forward along the backrest canes. Their key advantage is that they do not increase overall chair width, enhancing manoeuvrability for active users. A limitation is that they offer no side-guard protection, allowing clothing to contact the wheels.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Full-Length Armrests
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
           These extend along almost the entire forearm, providing maximum support. Common in power chairs for mounting controls, they offer excellent side-guard protection. Their full length restricts close access to tables and desks. They increase the chair's overall width.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Desk-Length Armrests
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            A shorter variant of the full-length style, desk-length armrests provide side-guard protection while allowing the user to position closer to tables and desks for daily activities. Like full-length styles, they are side-mounted and will increase chair width.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Armrest Adjustability & Mounting
          </h2>
          <ul className="list-disc ml-12 space-y-2 mt-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Height:</b> Armrests can be fixed-height or adjustable to match the user's trunk and arm length.
            </li>
            <li>
              <b>Function:</b> Most designs feature a user-accessible latch that allows the armrest to flip back or detach completely, facilitating transfers or side-leaning.
            </li>
            <li>
              <b>Safety Note:</b> While engineered latches on some models permit assisted lifting of the chair with the user seated, many designs will detach under upward force and are not intended for this purpose.
            </li>
          </ul>


        </>
      )
    },
    {
      id: "7",
      label: "Footrests",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Rob">
           Footrests are critical for seated stability, pelvic alignment, and upper limb function. They are available as fixed, folding, or swing-away designs.
          </p>
          <p className="text-gray-700 text-xl font-Rob">
            Proper adjustment is essential: a footrest that is too long results in a loss of optimal lower limb posture, compromised pelvic stability, and discomfort. Types of footrests and legrests include:
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Tubular Rigid Footrests
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
           These provide maximum rigidity and durability, ideal for sports and highly active users. Their fixed position requires adapted transfer techniques, most commonly a side-to-side transfer, though skilled users can perform forward transfers.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Swing-Away Footrests
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
           Common on folding wheelchairs, these footrests fold upwards and swing laterally to clear the front area of the wheelchair, facilitating forward and standing transfers. They also shorten the wheelchair for transport and narrow access. While less durable than rigid designs, they provide a fixed knee and ankle angle to maintain postural alignment.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Elevating Legrests
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
           Elevating legrests extend the overall length of the wheelchair, which increases its turning radius and reduces manoeuvrability. They are indicated for users who cannot achieve the standard legrest angle due to reduced flexibility (e.g., from knee contractures) or who require periodic postural changes for physiological management. A primary function is to assist in reducing lower-limb oedema and venous pooling by elevating the extremities.
          </p>
          <img
            src={getAssetUrl("/pg5_3.png")}
            alt="Wheelbarrow diagram"
            className="w-240 h-auto shadow mx-auto border-2"
          />
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Anti-Tip Rollers (Forward)
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
           Forward anti-tip rollers are attachments that can be fitted to both rigid and swing-away footrests. Originally designed for wheelchair sports such as basketball and quad rugby (where rules mandate their use to prevent forward falls and floor damage), they can also benefit everyday users at risk of tipping forwards. A critical clinical consideration is their height adjustment; they must be set high enough to avoid catching on common obstacles like thresholds and pavement cracks, which would impede mobility.
          </p>
          
          
        </>
      )
    },
    {
      id: "8",
      label: "Wheel Locks",
      content: (
        <>

          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Engagement Mechanism: Push vs. Pull
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            <b>Note:</b> Changes to wheel specifications—such as size, tire type, air pressure, or axle position—may affect wheel lock function and engagement.
          </p>
          <ul className="list-disc ml-12 space-y-2 mt-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Push-to-Lock:</b> Engaged by pushing the lever down and away. As greater force is required for engagement than disengagement, the design is often preferred as it allows the user to apply force with the palm.
            </li>
            <li>
              <b>Pull-to-Lock:</b> Engaged by pulling a lever up towards the user. This may be suitable for clients with stronger grip strength and pulling ability, but is less intuitive for most.
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Mounting Position
          </h2>
          <ul className="list-disc ml-12 space-y-4 mt-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>High Wheel Locks</b>
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li><b>Mounting:</b> Attached to the upper side frame tube.</li>
                <li><b>Advantage:</b> Requires the least dexterity and trunk flexion to operate.</li>
                <li><b>Disadvantage:</b> Disengaged levers can swing and hit or trap fingers. This risk can be mitigated by selecting retractable (scissor/butterfly) designs or opting for low wheel locks.</li>
              </ul>
            </li>
            <li>
              <b>Low Wheel Locks</b>
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li><b>Mounting:</b> Attached to the lower side frame tube.</li>
                <li><b>Advantage:</b> Prevents thumb jamming and can accommodate a wide range of wheel camber angles.</li>
                <li><b>Disadvantage:</b> Requires greater mobility, reach, and trunk flexion to operate, making them more difficult for many users.</li>
              </ul>
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Adaptations & Other Types
          </h2>
          <ul className="list-disc ml-12 space-y-2 mt-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Extension Levers:</b> Can be added for users with limited reach, strength, or range of motion.
            </li>
            <li>
              <b>Sweeper Brakes:</b> Allow for adjustable braking force.
            </li>
            <li>
              <b>Hub Locks:</b> A cable-actuated system where a piston engages directly at the wheel hub, often providing a very secure lock.
            </li>
            <li>
              <b>Attendant Locks:</b> Mounted to the rear of the wheelchair frame to be operated by a carer or assistant.
            </li>
          </ul>
        </>
      )
    },
    {
      id: "9",
      label: "Chair Configuration",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Rob">
            The following guidelines provide a starting point for wheelchair configuration, though clinical decision-making must be applied in every individual case. These recommendations have been synthesised from general principles in the literature and clinical manuals, notably informed by Worobey et al. (2023) and Lange & Minkel (2025), and should be adapted according to specific user assessment and context.
          </p>
          <div className="text-gray-700 text-xl font-Rob space-y-6">
            <div>
              <span className="font-bold">Seat Width</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li><b>Guideline:</b> Add 1.25–2 inches to the user's hip width for clothing and to prevent skin irritation.</li>
                <li>
                  <b>Too Wide:</b>
                  <ul className="list-disc ml-8 space-y-2 mt-2">
                    <li>Compromises pelvic positioning and trunk alignment, reducing sitting stability.</li>
                    <li>Decreases maneuverability and access through doorways.</li>
                    <li>For self-propellers: Reduces wheel access and propulsion efficiency, forcing the arms into a position that increases the risk of shoulder and wrist injury.</li>
                  </ul>
                </li>
                <li><b>Too Narrow:</b> Can cause pelvic rotation and pressure injuries on the outer hips.</li>
              </ul>
            </div>

            <div>
              <span className="font-bold">Seat Depth</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li><b>Guideline:</b> For self-propelling adults, the seat depth should be at least 2 inches (50mm) shorter than the user's buttock-thigh length. For children, about 1 inch (25mm) is appropriate.</li>
                <li><b>Too Long:</b> Causes the user to slide forward, leading to a posterior pelvic tilt, improper leg positioning, and reduced maneuverability.</li>
                <li><b>Too Short:</b> Provides inadequate thigh support, increasing pressure on the buttocks and the risk of pressure ulcers.</li>
              </ul>
            </div>

            <div>
              <span className="font-bold">Seat-to-Footrest Length</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li><b>Guideline:</b> Set to provide a 2-inch footrest clearance from the floor, with no gap between the thighs and the seat cushion.</li>
                <li><b>Footplate Too High:</b> Increases pressure on the buttocks, raising the risk of pressure injuries.</li>
                <li><b>Footplate Too Low:</b> Decreases stability, causes footrests to contact the ground, and increases the risk of falling.</li>
              </ul>
            </div>

            <div>
              <span className="font-bold">Seat Height & Wheel Position</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li><b>Guideline:</b> Ensure footrests clear the ground and the user's elbow is at a 100–120° angle when their hand is on top of the pushrim.</li>
                <li><b>Seat Too High:</b> Hinders table access and transfers; results in a short, inefficient push stroke.</li>
                <li><b>Seat Too Low:</b> Causes footrests to hit the floor and forces the user into a poor shoulder position, increasing injury risk.</li>
              </ul>
            </div>

            <div>
              <span className="font-bold">Wheel Axle Position</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li><b>Guideline:</b> A common starting point is aligning the axle with the user's middle finger when their arm hangs straight down.</li>
                <li><b>Too Far Forward:</b> Makes the chair unstable and prone to tipping backwards.</li>
                <li><b>Too Far Back:</b> Makes the chair harder to propel and reduces functional efficiency.</li>
              </ul>
            </div>

            <div>
              <span className="font-bold">Seat Slope</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li><b>Guideline:</b> A slight posterior slope (where the rear of the seat is lower than the front) is standard. A common starting point is a 2-inch difference.</li>
                <li><b>Benefits:</b> Utilises gravity to improve pelvic and trunk stability, helps prevent the user from sliding forward in the seat (sacral sitting).</li>
                <li><b>Considerations:</b> A steep slope can make transfers challenging, reduce effective reach to the pushrims and impact foot propulsion.</li>
              </ul>
            </div>

            <div>
              <span className="font-bold">Rear Wheel Camber</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li><b>Guideline:</b> 2 to 5 degrees is typical for most users.</li>
                <li><b>Benefits:</b> Improves propulsion access and lateral stability.</li>
                <li><b>Consideration:</b> Increases the overall width of the wheelchair, which may limit access in tight spaces.</li>
              </ul>
            </div>

            <div>
              <span className="font-bold">Back Support Height</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li><b>Guideline:</b></li>
                <ul className="list-disc ml-8 space-y-2 mt-2">
                  <li><b>Limited Trunk Control:</b> Position the backrest just below the scapula.</li>
                  <li><b>Intact Trunk Control:</b> A lower backrest (e.g., lumbar support) allows freedom for propulsion.</li>
                </ul>
                <li><b>Too Tall:</b> Restricts shoulder movement, making propulsion less effective.</li>
              </ul>
            </div>

            <div>
              <span className="font-bold">Rear Wheel Size</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li><b>Guideline:</b> Common adult wheel sizes are 24 or 26 inches. Paediatric sizes range from 18 to 22 inches.</li>
                <li><b>Consideration:</b> A smaller wheel (e.g., 22-inch) can help a shorter individual achieve the optimal 120° elbow angle for efficient propulsion. Heavier wheels are more difficult to start moving from a stop.</li>
              </ul>
            </div>
          </div>


        </>
      )
    },
    {
      id: "10",
      label: "Fitting Checklist: The Chair",
      content: (
        <>
          <PageFiveChecklist />
        </>
      )
    },
    {
      id: "11",
      label: "Page References",
      content: (
        <>
          <h2 className="text-gray-700 text-3xl font-Cap mt-8">
            References for: "The Wheelchair"
          </h2>
          <div className="text-sm font-YakuHanJP">
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
           Bhatt, P., & Goe, A. (2017). Carbon Fibres: Production, Properties and Potential Use. <i>Material Science Research India, 14</i>(1), 52–57. https://doi.org/10.13005/msri/140109
          </p>
          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Chan, F. H. N., Eshraghi, M., Alhazmi, M. A., & Sawatzky, B. J. (2017). The effect of caster types on global rolling resistance in manual wheelchairs on indoor and outdoor surfaces. <i>Assistive Technology, 30</i>(4), 176–182. https://doi.org/10.1080/10400435.2017.1307880
          </p>
          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Cooper, R. (1995). <i>Rehabilitation Engineering Applied to Mobility and Manipulation.</i> Taylor & Francis.
          </p>
          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Frost, S., Noon, J., Scheffler, E., & Stoeckle, R. J. (2013). <i>Wheelchair service training package: trainer’s manual intermediate level</i> (C. Khasnabis & K. Mines, Eds.). World Health Organization.
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Garcia-Mendez, Y., Pearlman, J. L., Boninger, M. L., & Cooper, R. A. (2013). Health risks of vibration exposure to wheelchair users in the community. <i>The Journal of Spinal Cord Medicine, 36</i>(4), 365–375. https://doi.org/10.1179/2045772313y.0000000124
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Lange, M. L., & Minkel, J. (2025). <i>Seating and wheeled mobility: A clinical resource guide</i> (2nd ed.). Routledge.
          </p>
          <p className="text-gray-700   leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
           Lin, J.-T., & Sprigle, S. (2019). The influence of operator and wheelchair factors on wheelchair propulsion effort. <i>Disability and Rehabilitation: Assistive Technology, 15</i>(3), 328–335. https://doi.org/10.1080/17483107.2019.1578425
          </p>
          <p className="text-gray-700   leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
           Medola, F. O., Silva, D. C., Fortulan, C. A., Carril Elui, V. M., & Paschoarelli, L. C. (2014). The influence of handrim design on the contact forces on hands’ surface: A preliminary study. <i>International Journal of Industrial Ergonomics, 44</i>(6), 851–856. https://doi.org/10.1016/j.ergon.2014.09.005
          </p>
          <p className="text-gray-700 leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
           Misch, J., & Sprigle, S. (2021). Effects of wheels and tires on high-strength lightweight wheelchair propulsion cost using a robotic wheelchair tester. <i>Disability and Rehabilitation: Assistive Technology</i>, 1–11. https://doi.org/10.1080/17483107.2021.2012274
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Ott, J., & Pearlman, J. (2021). Scoping review of the rolling resistance testing methods and factors that impact manual wheelchairs. <i>Journal of Rehabilitation and Assistive Technologies Engineering, 8</i>, 205566832098030. https://doi.org/10.1177/2055668320980300
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Permobil. (2024). Manual wheelchair guide: A comprehensive introduction to optimizing manual mobility for client function. In <i>https://hub.permobil.com/manual-wheelchair-guide-download</i>. Permobil.
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Requejo, P. S., Furumasu, J., & Mulroy, S. J. (2015). Evidence-Based Strategies for Preserving Mobility for Elderly and Aging Manual Wheelchair Users. <i>Topics in Geriatric Rehabilitation, 31</i>(1), 26–41. https://doi.org/10.1097/tgr.0000000000000042
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
           Requejo, P. S., & McNitt-Gray, J. L. (2016). <i>Wheeled Mobility Biomechanics</i>. Frontiers Media SA.
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Richter, W. M., Rodriguez, R., Woods, K. R., Karpinski, A. P., & Axelson, P. W. (2006). Reduced Finger and Wrist Flexor Activity During Propulsion With a New Flexible Handrim. <i>Archives of Physical Medicine and Rehabilitation, 87</i>(12), 1643–1647. https://doi.org/10.1016/j.apmr.2006.09.009
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
           Worobey, L. A., Bernstein, J., Ott, J., Berner, T., Black, J., Cabarle, M., Roesler, T., Scarborough, S., & Betz, K. (2023). RESNA position on the application of ultralight manual wheelchairs. Assistive Technology: <i>The Official Journal of RESNA</i>, 1–18. https://doi.org/10.1080/10400435.2023.2221148
          </p>
          <p className="text-gray-700  leading-13" style={{ textIndent: '-3.5em', paddingLeft: '3.5em' }}>
            Zepeda, R., Chan, F., & Sawatzky, B. (2016). The effect of caster wheel diameter and mass distribution on drag forces in manual wheelchairs. <i>Journal of Rehabilitation Research and Development, 53</i>(6), 893–900. https://doi.org/10.1682/jrrd.2015.05.0074
          </p>
        </div>
        </>
      )
    },
  ];

  const currentIndex = subtabs.findIndex(tab => tab.id === activeSubtab);
  const currentSubtab = subtabs[currentIndex];
  const scrollRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSubtabClick(subtabs[currentIndex - 1].id, "page5");
    }
  };

  const handleNext = () => {
    if (currentIndex < subtabs.length - 1) {
     onSubtabClick(subtabs[currentIndex + 1].id, "page5");
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
      <div className="w-72 bg-gray-100 overflow-y-auto border-r border-gray-300 p-6 flex-shrink-0 h-screen pb-30 flex flex-col transition-opacity duration-300">
        <p className="text-4xl font-mono font-bold mb-6 text-gray-800 tracking-tight">{title}</p>
        <div className="flex flex-col gap-3">
          {subtabs.map(tab => (
            <div
              key={tab.id}
              onClick={() => onSubtabClick(tab.id, "page5")}
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

export default PageFive;
